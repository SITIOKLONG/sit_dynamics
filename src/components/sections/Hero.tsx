import { siteConfig } from "@/data/site-config";
import { mediaSlots } from "@/data/media";
import { Button } from "@/components/ui/Button";
import { MediaFrame } from "@/components/media/MediaFrame";
import { Timecode } from "@/components/media/Timecode";
import { Reveal } from "@/components/ui/Reveal";

const techTags = ["ISAAC LAB", "MUJOCO", "ROS2", "RL", "SIM2REAL"];

export function Hero() {
  const heroSlot = mediaSlots.heroVideo;

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-void">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 eng-grid opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_18%,rgba(217,64,58,0.08),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grain opacity-[0.035]"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 pt-16 pb-20 lg:px-10 lg:pt-24 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)]">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[11px] tracking-technical text-steel uppercase">
                <span className="size-1.5 bg-signal" aria-hidden="true" />
                {siteConfig.brand.name} — {siteConfig.brand.descriptor}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-7 font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-bone">
                Research. Build.
                <br />
                Verify<span className="text-signal">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed font-medium text-bone/90 md:text-xl">
                {siteConfig.brand.supportingLine}
              </p>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-steel">
                {siteConfig.brand.heroIntro}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/services" size="lg">
                  探索服務
                </Button>
                <Button href="/contact" variant="outline-dark" size="lg">
                  討論工程項目
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <ul className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
                {techTags.map((tag) => (
                  <li
                    key={tag}
                    className="flex items-center gap-3 font-mono text-[11px] tracking-technical text-steel uppercase"
                  >
                    <span className="size-1 bg-signal" aria-hidden="true" />
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <MediaFrame
              slot={heroSlot}
              sizes="(min-width: 1024px) 45vw, 100vw"
              overlay={
                <>
                  <div className="pointer-events-none absolute inset-x-0 top-9 flex items-center justify-between px-4">
                    <Timecode className="font-mono text-[10.5px] tracking-technical text-bone/80" />
                    <span className="font-mono text-[10.5px] tracking-technical text-steel/80">
                      REC ●
                    </span>
                  </div>
                  <div className="pointer-events-none absolute bottom-12 left-1/2 flex -translate-x-1/2 items-center gap-3">
                    <span className="size-1.5 animate-pulse bg-signal" aria-hidden="true" />
                    <span className="font-mono text-[11px] tracking-technical text-bone/90 uppercase">
                      Real Robot Footage / Coming Soon
                    </span>
                  </div>
                </>
              }
            />
            <p className="mt-4 flex items-center justify-between font-mono text-[10.5px] tracking-technical text-steel/60 uppercase">
              <span>SRC — {heroSlot.src}</span>
              <span className="hidden sm:inline">AMBIENT LOOP / NO AUDIO</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
