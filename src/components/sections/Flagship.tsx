import { flagship } from "@/data/solutions";
import { mediaSlots } from "@/data/media";
import { siteConfig } from "@/data/site-config";
import { formatHKD } from "@/lib/pricing";
import { EnquireLink } from "@/components/forms/EnquireLink";
import { MediaFrame } from "@/components/media/MediaFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

export function Flagship() {
  return (
    <section
      id="vision"
      className="theme-dark relative overflow-hidden border-b border-line bg-surface"
    >
      <span
        className="absolute inset-x-0 top-0 h-px bg-signal/60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 eng-grid-fine opacity-30"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>03 / 旗艦研發願景</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-7 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-fg lg:text-[3.2rem] xl:text-[3.8rem]">
                邁向全尺寸人型機械人。
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="lg:col-span-5">
            <p className="max-w-lg text-[15px] leading-[1.9] text-muted lg:ml-auto">
              {flagship.supporting}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <MediaFrame
              slot={mediaSlots.flagship}
              sizes="(min-width: 1024px) 66vw, 100vw"
            />
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[9px] uppercase leading-relaxed tracking-technical text-muted/80">
              <span>畫面：{flagship.footageCredit} 參考片段</span>
              <span>非 SIT Dynamics 自行研發產品</span>
            </div>
            <p className="mt-2 font-mono text-[9px] uppercase leading-relaxed tracking-technical text-muted/80">
              {siteConfig.disclaimers.flagship}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="flex h-full flex-col border border-line bg-panel p-6 lg:p-8">
              <Tag tone="accent" dot className="w-fit">
                概念願景
              </Tag>

              <p className="mt-7 font-mono text-[8.5px] uppercase tracking-technical text-muted/80">
                建議研發計劃
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-fg">
                {flagship.name}
              </h3>
              <p className="mt-3 text-sm leading-[1.8] text-muted">
                {flagship.description}
              </p>

              <div className="mt-8 border-t border-line pt-6">
                <p className="font-mono text-[8.5px] uppercase tracking-technical text-muted/80">
                  指標性項目預算
                </p>
                <p className="mt-2 font-mono text-[2rem] leading-none text-fg">
                  {formatHKD(flagship.budget)}
                </p>
                <p className="mt-3 max-w-[16rem] text-[11px] leading-[1.8] text-muted/80">
                  按實際研發範圍另行定義，須經獨立可行性評估與提案。
                </p>
              </div>

              <div className="mt-8">
                <EnquireLink
                  projectType={flagship.enquiryType}
                  className="w-full"
                  arrow
                >
                  {flagship.cta}
                </EnquireLink>
              </div>

              <p className="mt-4 font-mono text-[8px] uppercase leading-[1.8] tracking-technical text-muted/80">
                旗艦項目須先完成可行性評估與書面提案。
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-line pt-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-fg">
                潛在研發方向
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-[1.8] text-muted">
                最終工作範圍將透過獨立的可行性研究與書面提案定義。
              </p>
            </div>

            <ol className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
              {flagship.directions.map((direction, index) => (
                <li
                  key={direction}
                  className="flex items-start gap-4 border-b border-line py-4"
                >
                  <span className="mt-0.5 font-mono text-[9px] tracking-technical text-signal-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-[1.8] text-fg/85">
                    {direction}
                  </span>
                  {index === flagship.directions.length - 1 && (
                    <Tag tone="muted" className="ml-auto shrink-0">
                      未來挑戰目標
                    </Tag>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <Reveal>
          <div className="mt-10 max-w-4xl border-l-2 border-signal pl-5">
            <p className="text-sm leading-[1.9] text-fg/90">
              {flagship.halfMarathonNote}
            </p>
            <p className="mt-3 text-sm leading-[1.9] text-muted">
              {flagship.proposalNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
