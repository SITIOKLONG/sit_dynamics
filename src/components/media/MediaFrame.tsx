import Image from "next/image";
import { Image as ImageIcon, Play } from "lucide-react";
import type { MediaRatio, MediaSlot } from "@/data/media";
import { publicAssetExists } from "@/lib/assets";
import { cn } from "@/lib/utils";
import { MediaVideo } from "./MediaVideo";

const ratioClasses: Record<MediaRatio, string> = {
  "4/5": "aspect-[4/5]",
  "21/9": "aspect-[21/9]",
  "16/9": "aspect-video",
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
};

function CornerTicks() {
  const positions = [
    "left-0 top-0 border-l border-t",
    "right-0 top-0 border-r border-t",
    "bottom-0 left-0 border-b border-l",
    "bottom-0 right-0 border-b border-r",
  ];
  return (
    <>
      {positions.map((pos) => (
        <span
          key={pos}
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute size-2.5 border-fg/30",
            pos,
          )}
        />
      ))}
    </>
  );
}

export function MediaFrame({
  slot,
  className,
  overlay,
  sizes = "(min-width: 1024px) 45vw, 100vw",
  priority = false,
}: {
  slot: MediaSlot;
  className?: string;
  overlay?: React.ReactNode;
  sizes?: string;
  priority?: boolean;
}) {
  const hasRealAsset = publicAssetExists(slot.src);
  const hasPoster = publicAssetExists(slot.poster);

  return (
    <figure
      aria-label={slot.alt}
      className={cn(
        "theme-dark relative overflow-hidden rounded-none border border-line bg-panel",
        ratioClasses[slot.ratio],
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-sand/40"
      />
      {hasRealAsset && slot.kind === "video" && (
        <>
          <MediaVideo
            src={slot.src}
            poster={hasPoster && slot.poster ? slot.poster : undefined}
            alt={slot.alt}
          />
          <div
            aria-hidden="true"
            className="media-scanlines pointer-events-none absolute inset-0 z-10"
          />
        </>
      )}

      {hasRealAsset && slot.kind === "image" && (
        <Image
          src={slot.src}
          alt={slot.alt}
          fill
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          className="object-cover"
        />
      )}

      {!hasRealAsset && (
        <>
          <div className="absolute inset-0 eng-grid opacity-70" aria-hidden="true" />
          <div className="absolute inset-0 media-glow" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/10 to-surface/30"
            aria-hidden="true"
          />
          <div
            className="absolute inset-y-0 left-1/3 w-px bg-fg/[0.045]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-y-0 left-2/3 w-px bg-fg/[0.045]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 top-1/2 h-px bg-fg/[0.045]"
            aria-hidden="true"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-12 items-center justify-center rounded-full border border-line text-muted/80">
              {slot.kind === "video" ? (
                <Play
                  className="size-[18px] translate-x-px"
                  aria-hidden="true"
                />
              ) : (
                <ImageIcon className="size-[18px]" aria-hidden="true" />
              )}
            </span>
          </div>
        </>
      )}

      {hasRealAsset && slot.caption && (
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-start p-4">
          <span className="bg-surface/70 px-2 py-1 font-mono text-[9px] uppercase tracking-technical text-fg/80 backdrop-blur-sm">
            {slot.caption}
          </span>
        </div>
      )}

      {!hasRealAsset && (
        <>
          <CornerTicks />
          <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-4">
            <span className="font-mono text-[9px] uppercase tracking-technical text-muted/80">
              {slot.caption}
            </span>
            <span className="border border-line bg-surface/30 px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-technical text-muted/80">
              素材待替換
            </span>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
            <p className="max-w-[92%] font-mono text-[9.5px] leading-relaxed uppercase tracking-[0.13em] text-muted">
              {slot.label}
            </p>
          </div>
        </>
      )}

      {overlay}
    </figure>
  );
}
