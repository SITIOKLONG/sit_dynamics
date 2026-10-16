import Image from "next/image";
import { Image as ImageIcon, Play } from "lucide-react";
import type { MediaRatio, MediaSlot } from "@/data/media";
import { publicAssetExists } from "@/lib/assets";
import { cn } from "@/lib/utils";
import { ChartPlaceholder } from "./ChartPlaceholder";

const ratioClasses: Record<MediaRatio, string> = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "10/7": "aspect-[10/7]",
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
            "pointer-events-none absolute size-3 border-bone/40",
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
}: {
  slot: MediaSlot;
  className?: string;
  overlay?: React.ReactNode;
  sizes?: string;
}) {
  const hasRealAsset =
    slot.kind !== "chart" && publicAssetExists(slot.src);
  const hasPoster = publicAssetExists(slot.poster);
  const isChart = slot.kind === "chart";
  const hasRealChart = isChart && publicAssetExists(slot.src);

  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-[2px] border border-white/10 bg-graphite-soft",
        ratioClasses[slot.ratio],
        className,
      )}
    >
      {hasRealAsset && slot.kind === "video" && (
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={hasPoster && slot.poster ? slot.poster : undefined}
        >
          <source src={slot.src ?? undefined} type="video/mp4" />
        </video>
      )}
      {hasRealAsset && slot.kind === "image" && slot.src && (
        <Image
          src={slot.src}
          alt={slot.titleZh}
          fill
          sizes={sizes}
          className="object-cover"
        />
      )}
      {hasRealChart && slot.src && (
        <Image
          src={slot.src}
          alt={slot.titleZh}
          fill
          sizes={sizes}
          className="object-contain p-4"
        />
      )}
      {!hasRealAsset && !hasRealChart && isChart && <ChartPlaceholder />}
      {!hasRealAsset && !hasRealChart && !isChart && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 eng-grid opacity-70" aria-hidden="true" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-void/60 via-transparent to-void/80"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ boxShadow: "inset 0 0 110px rgba(11, 12, 13, 0.6)" }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/3 w-px bg-bone/5"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-2/3 w-px bg-bone/5"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 h-px bg-bone/5"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-14 items-center justify-center rounded-full border border-bone/20 text-bone/40">
              {slot.kind === "video" ? (
                <Play className="size-5 -translate-x-px" aria-hidden="true" />
              ) : (
                <ImageIcon className="size-5" aria-hidden="true" />
              )}
            </span>
          </div>
        </div>
      )}
      <CornerTicks />
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-4">
        <span className="font-mono text-[10.5px] tracking-technical text-steel/90 uppercase">
          {slot.caption}
        </span>
        <span className="rounded-[2px] border border-white/15 px-1.5 py-0.5 font-mono text-[9.5px] tracking-technical text-steel/70 uppercase">
          素材待補
        </span>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4">
        <span className="font-mono text-[10.5px] tracking-technical text-steel/70 uppercase">
          {slot.titleZh}
        </span>
      </div>
      {overlay}
    </figure>
  );
}
