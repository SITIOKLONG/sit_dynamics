import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { serviceTiers } from "@/data/services";
import { formatMOP } from "@/lib/pricing";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceTiersPreview() {
  return (
    <section className="border-b border-void/10 bg-bone text-void">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Services / 服務方案"
            tone="light"
            title="由體驗到研發，四個清晰層級。"
            description="每個層級都有明確的交付內容與範圍。價格以澳門幣（MOP）顯示，實際報價按項目確認。"
          />
        </Reveal>

        <div className="mt-14 border-t border-void/15">
          {serviceTiers.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 0.05}>
              <Link
                href={`/services#${tier.id}`}
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-6 gap-y-2 border-b border-void/15 py-7 transition-colors hover:bg-void/[0.035] md:grid-cols-[3rem_2fr_3fr_auto] md:gap-x-10"
              >
                <span className="font-mono text-sm text-signal">
                  {tier.letter}
                </span>
                <span>
                  <span className="block font-display text-xl font-semibold tracking-tight md:text-2xl">
                    {tier.name}
                  </span>
                  <span className="mt-1 block font-mono text-[10.5px] tracking-technical text-void/50 uppercase">
                    {tier.en}
                  </span>
                </span>
                <span className="col-span-3 row-start-2 max-w-md text-sm leading-relaxed text-void/65 md:col-span-1 md:row-start-auto">
                  {tier.tagline}
                </span>
                <span className="flex items-center gap-3 justify-self-end font-mono text-sm tracking-wide text-void">
                  {formatMOP(tier.price)}
                  <ArrowUpRight
                    className="size-4 text-void/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-technical text-void/70 uppercase underline decoration-void/30 underline-offset-4 transition-colors hover:text-void"
            >
              查看完整交付範圍與可選延伸模組
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
