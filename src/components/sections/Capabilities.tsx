import { capabilities } from "@/data/capabilities";
import { mediaSlots } from "@/data/media";
import { MediaFrame } from "@/components/media/MediaFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-line bg-panel">
      <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>02 / 技術能力</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-7 font-display text-4xl font-semibold leading-[1.16] tracking-[-0.025em] text-fg lg:text-[3rem] xl:text-[3.3rem]">
                <span className="block">從物理原理，</span>
                <span className="block">到真實世界的運動。</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="lg:col-span-5">
            <p className="max-w-md text-[15px] leading-[1.85] text-muted lg:ml-auto">
              我們把機械結構、控制理論、學習演算法與實體硬件整合起來，探索人型機械人在真實環境中運動的可能性。
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-12">
          {capabilities.map((capability, index) => (
            <Reveal
              key={capability.index}
              delay={index * 0.05}
              className={cn(
                "bg-surface",
                capability.span === "wide" ? "lg:col-span-7" : "lg:col-span-5",
              )}
            >
              <article className="flex h-full flex-col">
                <div className="p-6 lg:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] tracking-technical text-signal-light">
                      {capability.index}
                    </span>
                    <span className="font-mono text-[8.5px] uppercase tracking-technical text-muted/80">
                      技術能力
                    </span>
                  </div>
                  <p className="mt-8 font-mono text-[9px] uppercase leading-relaxed tracking-technical text-muted/80">
                    {capability.label}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.01em] text-fg lg:text-[1.35rem]">
                    {capability.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-[1.85] text-muted">
                    {capability.description}
                  </p>
                  <p className="mt-5 font-mono text-[8.5px] uppercase tracking-technical text-muted/80">
                    {capability.tags.join(" · ")}
                  </p>
                </div>
                <div className="mt-auto border-t border-line">
                  <MediaFrame
                    slot={mediaSlots[capability.media]}
                    className="border-0"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
