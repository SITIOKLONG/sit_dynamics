import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import {
  lastVerified,
  platformFacts,
  priceReferences,
  rentalChecklist,
  rentalNote,
  versionDiffs,
} from "@/data/platforms";
import { siteConfig } from "@/data/site-config";
import { PageHeader } from "@/components/sections/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PriceTable } from "@/components/ui/PriceTable";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "機械人平台比較",
  description:
    "自家低成本雙足平台與 Unitree R1／R1 EDU、G1／G1 EDU、Go2 四足平台的公平比較。清楚標示版本、開發權限、公開參考價與租借條款差異；所有第三方價格僅供初步比較。",
  alternates: { canonical: "/platforms" },
  openGraph: {
    url: "/platforms",
    title: "機械人平台比較｜SIT Dynamics",
    description:
      "選對平台，比選最貴的機械人重要。雙足與四足平台的研究方向、版本差異與公開價格參考。",
  },
};

export default function PlatformsPage() {
  return (
    <>
      <PageHeader
        breadcrumb="SIT Dynamics / Platforms"
        title="機械人平台比較：按研究目標選擇。"
        description="我們不會假設所有場景都需要最貴的機械人，也不會把自家平台包裝成商用 EDU 產品的同級替代。以下資料包含版本差異、開發權限與公開價格參考，方便學校與機構作初步比較。"
        meta={
          <>
            <Tag tone="steel">公開參考價／非澳門正式報價</Tag>
            <span className="font-mono text-[10.5px] tracking-technical text-steel uppercase">
              LAST VERIFIED — {lastVerified}
            </span>
            <span className="font-mono text-[10.5px] tracking-technical text-steel/70 uppercase">
              數字需再次核實
            </span>
          </>
        }
      />

      <section className="border-b border-white/10 bg-void">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <SectionHeading
              index="01"
              eyebrow="Options / 四種選擇"
              title="四種平台，四種用途。"
              description="以下描述以公開資料及實際使用經驗為基礎；第三方平台的功能與限制最終由供應商決定。"
            />
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {platformFacts.map((platform, i) => (
              <Reveal key={platform.id} delay={i * 0.06}>
                <article
                  id={platform.id}
                  className={
                    "flex h-full flex-col border p-8 " +
                    (platform.ownership === "inhouse"
                      ? "border-signal/40 bg-graphite-soft"
                      : "border-white/10 bg-graphite-soft/60")
                  }
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h2 className="font-display text-xl font-semibold tracking-tight text-bone">
                        {platform.name}
                      </h2>
                      <p className="mt-1 font-mono text-[10.5px] tracking-technical text-steel uppercase">
                        {platform.maker}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Tag tone={platform.kind === "biped" ? "signal" : "steel"}>
                        {platform.kind === "biped" ? "雙足" : "四足"}
                      </Tag>
                      <Tag tone="dark">{platform.status}</Tag>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-bone/85">
                    {platform.summary}
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <h3 className="font-mono text-[10px] tracking-technical text-steel uppercase">
                      適合方向
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                      {platform.suitableFor.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-[13px] text-bone/80"
                        >
                          <span
                            className="size-1 bg-signal"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <h3 className="font-mono text-[10px] tracking-technical text-steel uppercase">
                      注意事項
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {platform.caveats.map((item) => (
                        <li
                          key={item}
                          className="text-[12.5px] leading-relaxed text-steel"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-6 border-t border-white/10 pt-5 font-mono text-[11px] tracking-technical text-bone/90 uppercase">
                    價格 — {platform.priceDisplay}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-void/10 bg-bone text-void">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  index="02"
                  eyebrow="EDU vs Standard / 版本差異"
                  tone="light"
                  title="普通版與 EDU 版，差別不只在價格。"
                  description="選型時最容易出錯的地方，是把普通版的價格當成 EDU 版的價格，或假設普通版可以做到 EDU 的開發工作。"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="border-t border-void/15">
                {versionDiffs.map((diff, i) => (
                  <Reveal key={diff.title} delay={i * 0.06}>
                    <div className="grid grid-cols-[8rem_1fr] gap-5 border-b border-void/15 py-6">
                      <h3 className="font-display text-base font-semibold tracking-tight">
                        {diff.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-void/70">
                        {diff.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.15}>
                <p className="mt-6 text-[12.5px] leading-relaxed text-void/55">
                  以上為一般性差異；實際規格、SDK 及授權以官方公佈、代理商報價及合約條款為準。
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-void/10 bg-bone text-void">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                index="03"
                eyebrow="Price References / 公開價格參考"
                tone="light"
                title="公開參考價，全部標明來源狀態。"
                description="以下數字為網站初始內容，作初步比較用途，須再次核實。來源未經驗證前，一律顯示「向供應商查詢」，不提供可能失效的連結。"
              />
              <div className="flex flex-wrap gap-2">
                <Tag tone="light">公開參考價／非澳門正式報價</Tag>
                <Tag tone="light">LAST VERIFIED — {lastVerified}</Tag>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-12">
              <PriceTable
                tone="light"
                columns={["平台", "版本", "公開參考", "標籤", "備註", "來源"]}
                rows={priceReferences.map((ref) => [
                  <span key="p" className="whitespace-nowrap">
                    {ref.platform}
                  </span>,
                  <span key="v" className="block max-w-[12rem]">
                    {ref.version}
                  </span>,
                  <span key="r" className="font-mono text-[13px] whitespace-nowrap">
                    {ref.reference}
                  </span>,
                  <span key="t" className="block max-w-[10rem]">
                    {ref.tag === "reference"
                      ? "公開參考價／非澳門正式報價"
                      : "需正式查詢"}
                  </span>,
                  <span key="n" className="block max-w-[18rem]">
                    {ref.note}
                  </span>,
                  ref.sourceUrl ? (
                    <a
                      key="s"
                      href={ref.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 underline decoration-void/30 underline-offset-4 hover:decoration-void"
                    >
                      來源
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                    </a>
                  ) : (
                    <span key="s" className="text-void/50">
                      向供應商查詢
                    </span>
                  ),
                ])}
                footnote={rentalNote}
              />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-16 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h3 className="font-mono text-[10.5px] tracking-technical text-void/50 uppercase">
                  租借前必須確認
                </h3>
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                  {rentalChecklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-void/80"
                    >
                      <span className="size-1 bg-signal" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-7 lg:pl-10">
                <div className="border-l-2 border-signal bg-void/[0.04] p-6">
                  <p className="text-sm leading-relaxed text-void/80">
                    一則 G1 的表演租借報價，並不代表它可以用作自行部署 RL 政策的研發租借。兩者的技術人員配置、風險責任與開發權限完全不同。
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-white/10 bg-void">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading
                  index="04"
                  eyebrow="Disclaimer / 免責聲明"
                  title="價格與條款，以供應商決定為準。"
                  description={siteConfig.disclaimers.thirdParty}
                />
              </Reveal>
              <Reveal delay={0.08}>
                <ul className="mt-8 space-y-3">
                  {[
                    "本頁不構成任何採購建議或租借報價。",
                    "開發權限、SDK 支援與可修改範圍取決於型號、版本及授權合約。",
                    "網站顯示的來源狀態會隨核實進度更新；未核實前不提供外部連結。",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-steel"
                    >
                      <span
                        className="mt-1.5 size-1 shrink-0 bg-signal"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.12}>
                <div className="border border-white/10 bg-graphite-soft p-8">
                  <h3 className="font-display text-lg font-semibold text-bone">
                    不確定揀邊個平台？
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">
                    告訴我們你的研究目標與預算範圍，我們會建議最合適的組合（包括不一定需要買機械人的方案）。
                  </p>
                  <div className="mt-6">
                    <Button href="/contact?type=platform-select" size="md" arrow>
                      討論平台選型
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
