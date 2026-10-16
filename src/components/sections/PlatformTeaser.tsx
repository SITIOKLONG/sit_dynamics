import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { platformFacts } from "@/data/platforms";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

export function PlatformTeaser() {
  return (
    <section className="border-b border-void/10 bg-bone text-void">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Platforms / 機械人平台"
            tone="light"
            title="選對平台，比選最貴的機械人重要。"
            description="研究目標決定平台：雙足行走、四足移動、還是兩者兼備，選擇完全不同。以下是我們常用的四種選項，公開資料與限制均如實標示。"
          />
        </Reveal>

        <div className="mt-14 border-t border-void/15">
          {platformFacts.map((platform, i) => (
            <Reveal key={platform.id} delay={i * 0.05}>
              <Link
                href={`/platforms#${platform.id}`}
                className="group grid gap-x-8 gap-y-2 border-b border-void/15 py-7 transition-colors hover:bg-void/[0.035] md:grid-cols-[2fr_3fr_auto]"
              >
                <span className="flex flex-wrap items-baseline gap-3">
                  <span className="font-display text-xl font-semibold tracking-tight">
                    {platform.name}
                  </span>
                  <Tag tone="light">
                    {platform.kind === "biped" ? "雙足" : "四足"}
                  </Tag>
                </span>
                <span className="max-w-xl text-sm leading-relaxed text-void/65">
                  {platform.priceDisplay}
                </span>
                <span className="flex items-center gap-3 font-mono text-[11px] tracking-technical text-void/50 uppercase md:justify-self-end">
                  查看比較
                  <ArrowUpRight
                    className="size-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-[13.5px] leading-relaxed text-void/60">
            四足平台（如 Go2）不會產生雙足步態或平衡控制的研究數據；如果核心目標是雙足行走與人型機械人研發，四足平台不能直接替代雙足平台。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
