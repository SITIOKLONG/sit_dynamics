import { mediaSlots } from "@/data/media";
import { MediaFrame } from "@/components/media/MediaFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function ResearchVision() {
  return (
    <section id="research" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel>01 / 研究願景</SectionLabel>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-7 font-display text-4xl font-semibold leading-[1.18] tracking-[-0.025em] text-fg lg:text-[3rem] xl:text-[3.3rem]">
                <span className="block">人型，不等於</span>
                <span className="block">真正像人一樣運動。</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-[1.9] text-muted">
                <p>
                  製造人型機械人，不只是把馬達、關節和外殼組合成接近人體的形狀。機械人還需要理解並控制自身的動力學，在感知、執行器、機械結構與控制策略之間建立有效的協同。
                </p>
                <p>
                  我們關注的，是如何讓機械人逐步具備更自然、更穩定、更具適應性的運動能力，並將這些能力真正部署到實體系統之中。
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 max-w-md border-l border-signal pl-5">
                <p className="text-sm leading-relaxed text-fg/90">
                  真正可用的運動能力，必須在實體系統上被驗證。
                </p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-technical text-muted/80">
                  研究原則 / SIT Dynamics
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <MediaFrame
                slot={mediaSlots.research}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="mt-3 flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-technical text-muted/80">
                <span>雙足運動 / 實機測試紀錄</span>
                <span>01 / 研究</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
