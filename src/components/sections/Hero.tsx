import { siteConfig } from "@/data/site-config";
import { mediaSlots } from "@/data/media";
import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/media/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";

const technicalTags = [
  "人型機械人",
  "動力學與控制",
  "強化學習",
  "模擬到實機",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line bg-surface"
    >
      <div
        className="pointer-events-none absolute inset-0 eng-grid opacity-25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-px bg-line/60"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-14 px-5 pb-16 pt-14 lg:min-h-[calc(100svh-72px)] lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-20 lg:pt-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-technical text-muted">
              SIT Dynamics — {siteConfig.brand.meaning}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-7 text-balance font-display text-[clamp(2.5rem,6.4vw,5.2rem)] font-semibold leading-[1.01] tracking-[-0.04em] text-fg">
              <span className="block">打造能力更強</span>
              <span className="block">
                的人型機械人<span className="text-signal">。</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 border-l-2 border-signal pl-4">
              <p className="font-display text-base font-medium tracking-[-0.01em] text-fg/90 sm:text-lg">
                {siteConfig.brand.tagline}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-7 max-w-xl text-[15px] leading-[1.85] text-muted">
              {siteConfig.brand.supporting}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#research" size="lg">
                探索研發方向
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                討論合作項目
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-12 border-t border-line pt-5">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-[9px] uppercase tracking-technical text-muted/80 sm:flex sm:flex-wrap sm:items-center sm:gap-x-5">
                {technicalTags.map((tag, index) => (
                  <li key={tag} className="flex items-center gap-3">
                    <span
                      className="hidden size-1 bg-signal sm:inline-block"
                      aria-hidden="true"
                    />
                    <span>{tag}</span>
                    {index < technicalTags.length - 1 && (
                      <span
                        className="hidden text-muted/30 sm:inline"
                        aria-hidden="true"
                      >
                        /
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.14}>
            <div className="lg:pl-6">
              <MediaFrame
                slot={mediaSlots.hero}
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
              <div className="mt-3 flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-technical text-muted/80">
                <span>機身頂部特寫</span>
                <span>SIT / 頂部結構</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
