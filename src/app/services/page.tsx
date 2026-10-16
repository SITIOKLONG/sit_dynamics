import type { Metadata } from "next";
import { serviceTiers, optionalModules } from "@/data/services";
import { formatMOP } from "@/lib/pricing";
import { PageHeader } from "@/components/sections/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PriceTable } from "@/components/ui/PriceTable";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import {
  OptionalModuleCard,
  TierMeta,
} from "@/components/cards/ServiceTierBlocks";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "服務方案與價格",
  description:
    "四層服務方案：MOP 20,000 體驗工作坊、MOP 80,000 工程體驗試點、MOP 200,000 研發教學平台、MOP 500,000 年度工程研發項目。完整列出交付內容、適合對象與不包含項目，另設可選延伸模組。",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "服務方案與價格｜SIT Dynamics",
    description:
      "由 MOP 20,000 體驗工作坊到 MOP 500,000 年度工程研發項目，四個清晰層級，交付範圍寫得清楚。",
  },
};

const contactTypeByTier: Record<string, string> = {
  "tier-a": "workshop",
  "tier-b": "pilot",
  "tier-c": "platform",
  "tier-d": "annual",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumb={`SIT Dynamics / Services`}
        title="服務方案：由一次體驗，到一整年的工程研發。"
        description="所有價格以澳門幣（MOP）顯示。每層方案都清楚列出交付內容、適合對象及不包含項目；正式報價按項目確認書為準。"
        meta={
          <>
            {serviceTiers.map((tier) => (
              <span
                key={tier.id}
                className="flex items-baseline gap-3 font-mono text-[11px] tracking-technical text-steel uppercase"
              >
                <span className="size-1 bg-signal" aria-hidden="true" />
                {tier.letter} — {formatMOP(tier.price)}
              </span>
            ))}
          </>
        }
      />

      <section className="border-b border-white/10 bg-void">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Summary / 快速比較"
              title="四個層級，一眼看清。"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10">
              <PriceTable
                columns={["方案", "價格", "重點", "適合"]}
                rows={serviceTiers.map((tier) => [
                  <span key="n" className="block">
                    <span className="block text-bone">
                      {tier.letter}・{tier.name}
                    </span>
                    <span className="mt-1 block font-mono text-[10px] tracking-technical text-steel/70 uppercase">
                      {tier.en}
                    </span>
                  </span>,
                  <span key="p" className="font-mono text-bone">
                    {formatMOP(tier.price)}
                  </span>,
                  <span key="t" className="block max-w-xs">
                    {tier.tagline}
                  </span>,
                  <span key="a" className="block max-w-[16rem]">
                    {tier.audience}
                  </span>,
                ])}
                footnote="價格為參考項目價，實際內容按學校人數、場地及時間安排確認。"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-void/10 bg-bone text-void">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {serviceTiers.map((tier) => (
            <div
              key={tier.id}
              id={tier.id}
              className="grid gap-10 border-b border-void/15 py-16 last:border-b-0 lg:grid-cols-12 lg:py-20"
            >
              <div className="lg:col-span-4">
                <TierMeta
                  letter={tier.letter}
                  en={tier.en}
                  price={tier.price}
                  ctaHref={`/contact?type=${contactTypeByTier[tier.id]}`}
                />
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-void md:text-3xl">
                  {tier.name}
                </h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-void/75">
                  {tier.positioning}
                </p>

                <div className="mt-8 grid gap-10 md:grid-cols-2">
                  <div>
                    <h3 className="font-mono text-[10.5px] tracking-technical text-void/50 uppercase">
                      交付內容
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {tier.includes.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-void/85"
                        >
                          <span
                            className="mt-1.5 size-1.5 shrink-0 bg-signal"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-mono text-[10.5px] tracking-technical text-void/50 uppercase">
                      不包括
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {tier.excludes.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-void/50"
                        >
                          <span className="mt-1.5 shrink-0" aria-hidden="true">
                            —
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <h3 className="mt-8 font-mono text-[10.5px] tracking-technical text-void/50 uppercase">
                      適合對象
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-void/75">
                      {tier.audience}
                    </p>
                  </div>
                </div>

                {tier.modules && (
                  <div className="mt-10">
                    <h3 className="font-mono text-[10.5px] tracking-technical text-void/50 uppercase">
                      建議課程模組
                    </h3>
                    <ol className="mt-4 border-t border-void/15">
                      {tier.modules.map((module, i) => (
                        <li
                          key={module}
                          className="flex items-baseline gap-5 border-b border-void/10 py-3.5 text-sm text-void/85"
                        >
                          <span className="font-mono text-[11px] text-signal">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {module}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {tier.deliverables && (
                  <div className="mt-8">
                    <h3 className="font-mono text-[10.5px] tracking-technical text-void/50 uppercase">
                      學生交付
                    </h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                      {tier.deliverables.map((item) => (
                        <li
                          key={item}
                          className="border border-void/15 p-4 text-sm leading-relaxed text-void/80"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {tier.researchDirections && (
                  <div className="mt-8">
                    <h3 className="font-mono text-[10.5px] tracking-technical text-void/50 uppercase">
                      建議研究方向
                    </h3>
                    <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {tier.researchDirections.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-void/80"
                        >
                          <span
                            className="mt-1.5 size-1 shrink-0 bg-steel"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {tier.highlight && (
                  <div className="mt-8 border-l-2 border-signal bg-void/[0.04] p-5 text-sm leading-relaxed text-void/85">
                    {tier.highlight}
                  </div>
                )}

                <div className="mt-8 border-t border-void/15 pt-5">
                  <h3 className="font-mono text-[10.5px] tracking-technical text-void/50 uppercase">
                    條款備註
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {tier.notes.map((note) => (
                      <li
                        key={note}
                        className="text-[12.5px] leading-relaxed text-void/60"
                      >
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="optional-modules"
        className="border-b border-white/10 bg-void"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Optional Extensions / 可選延伸模組"
                title="兩個可選延伸，均須獨立確認。"
                description="以下選項不包含在任何標準方案內，亦非預設交付。視覺上以虛線框標示，代表需要事先確認、獨立報價及安排。"
              />
              <Tag tone="steel">不包含於標準方案</Tag>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {optionalModules.map((module, i) => (
              <OptionalModuleCard key={module.id} module={module} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
