import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const points = [
  {
    title: "重用成熟資源",
    detail: "優先採用成熟硬件、開源工具及既有模組，減少不必要的重新開發。",
  },
  {
    title: "有限而精準的客製化",
    detail: "只對真正影響項目成果的部分作出改動，範圍事先寫清楚。",
  },
  {
    title: "可控的成本與風險",
    detail: "所有開發工作先經可行性評估，以里程碑及驗收標準管理。",
  },
];

export function CustomTeaser() {
  return (
    <section className="border-b border-white/10 bg-graphite-soft">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading
                index="04"
                eyebrow="Custom Engineering / 客製化工程"
                title="不需要從零開始，也不必局限於標準產品。"
                description="我們優先採用成熟硬件及可重用工具，只對真正影響項目成果的部分作有限客製化，控制開發成本與技術風險。"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10">
                <Button href="/customization" variant="outline-dark" size="lg" arrow>
                  查看客製化服務
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:pl-10">
            <div className="border-t border-white/10">
              {points.map((point, i) => (
                <Reveal key={point.title} delay={i * 0.07}>
                  <div className="flex gap-5 border-b border-white/10 py-6">
                    <span
                      className="mt-2 size-1.5 shrink-0 bg-signal"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-tight text-bone">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-steel">
                        {point.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
