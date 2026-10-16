import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-graphite-soft">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 eng-grid opacity-40"
      />
      <div className="relative mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
        <Reveal>
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="flex items-center gap-3 font-mono text-[11px] tracking-technical text-steel uppercase">
                <span className="size-1.5 bg-signal" aria-hidden="true" />
                Start a Project / 開始項目
              </p>
              <h2 className="mt-6 font-display text-3xl leading-[1.15] font-semibold tracking-[-0.01em] text-bone md:text-4xl lg:text-[2.75rem]">
                由一次工作坊，到年度工程研發項目。
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-steel">
                告訴我們你的目標、現有條件與預算範圍，我們會回覆可行的交付範圍與下一步。
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:col-span-4 lg:justify-end">
              <Button href="/contact" size="lg">
                討論工程項目
              </Button>
              <Button href="/services" variant="outline-dark" size="lg">
                查看服務方案
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
