import { workflowSteps } from "@/data/capabilities";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Intro() {
  return (
    <section className="border-b border-void/10 bg-bone text-void">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                index="01"
                eyebrow="Overview / 定位"
                tone="light"
                title="不只看機械人運作，而是理解它如何運作。"
                description="學生可以接觸控制、模擬、測試與實機部署，並在適當的安全條件下修改設定、比較數據及分析問題。我們的重點不是展示，而是讓每個結果都有紀錄、可重複、可解釋。"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-24">
            <Reveal delay={0.1}>
              <p className="text-[15px] leading-relaxed text-void/70">
                所有流程都盡量重用成熟硬件、開源工具與既有模組，讓資源集中在真正影響學習與研究結果的部分。
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-px border-t border-void/15 md:grid-cols-3">
          {workflowSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.08}>
              <div className="border-void/15 py-8 md:border-r md:pr-8 md:last:border-r-0">
                <p className="flex items-center gap-3 font-mono text-[10.5px] tracking-technical text-void/50 uppercase">
                  <span className="size-1 bg-signal" aria-hidden="true" />
                  STEP {step.step} / {step.en}
                </p>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-void">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-void/65">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
