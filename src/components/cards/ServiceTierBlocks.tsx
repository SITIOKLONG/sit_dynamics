import { formatMOP } from "@/lib/pricing";
import { mediaSlots } from "@/data/media";
import { MediaFrame } from "@/components/media/MediaFrame";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import type { OptionalModule } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";

export function OptionalModuleCard({
  module,
  index,
}: {
  module: OptionalModule;
  index: number;
}) {
  const slot = mediaSlots[module.mediaSlotId];
  return (
    <Reveal delay={index * 0.08}>
      <div className="flex h-full flex-col border border-dashed border-white/25 bg-graphite-soft">
        <MediaFrame slot={slot} sizes="(min-width: 1024px) 50vw, 100vw" />
        <div className="flex flex-1 flex-col p-7">
          <div className="flex items-start justify-between gap-4">
            <span
              className="mt-1 flex size-5 shrink-0 items-center justify-center border border-signal"
              aria-hidden="true"
            >
              <span className="size-2 bg-signal" />
            </span>
            <Tag tone="signal">Optional — 可選延伸</Tag>
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-bone">
            {module.name}
          </h3>
          <p className="mt-1 font-mono text-[10.5px] tracking-technical text-steel uppercase">
            {module.en}
          </p>
          <p className="mt-4 text-[13px] leading-relaxed text-signal/90">
            {module.availability}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-bone/85">
            {module.summary}
          </p>
          <ul className="mt-5 space-y-2">
            {module.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-bone/80">
                <span
                  className="mt-1.5 size-1 shrink-0 bg-steel"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex-1 border-t border-white/10 pt-5">
            <p className="font-mono text-[10px] tracking-technical text-steel/70 uppercase">
              注意事項
            </p>
            <ul className="mt-3 space-y-2">
              {module.disclaimers.map((item) => (
                <li
                  key={item}
                  className="text-[12.5px] leading-relaxed text-steel"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <Button href={module.ctaHref} variant="outline-dark" size="md" arrow>
              加入項目諮詢
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function TierMeta({
  letter,
  en,
  price,
  ctaHref,
}: {
  letter: string;
  en: string;
  price: number;
  ctaHref: string;
}) {
  return (
    <div className="lg:sticky lg:top-28">
      <p className="font-display text-6xl font-semibold text-void/10">
        {letter}
      </p>
      <Tag tone="light" className="mt-4">
        {en}
      </Tag>
      <p className="mt-6 font-display text-2xl font-semibold tracking-tight text-void">
        {formatMOP(price)}
      </p>
      <p className="mt-1 font-mono text-[10.5px] tracking-technical text-void/50 uppercase">
        參考項目價・按確認書為準
      </p>
      <Button
        href={ctaHref}
        variant="outline-light"
        size="md"
        className="mt-6"
        arrow
      >
        討論此方案
      </Button>
    </div>
  );
}
