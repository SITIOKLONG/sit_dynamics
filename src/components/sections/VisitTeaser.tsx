import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

export function VisitTeaser() {
  return (
    <section className="border-b border-white/10 bg-void">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                index="06"
                eyebrow="Optional / 延伸選項"
                title="把課堂延伸到真實的創新環境。"
                description="可按年度項目安排深圳創新與機械人產業參訪，包括 InnoX 參訪意向。實際機構、行程、合作及檔期須事先確認，並按獨立項目安排；不暗示已有任何正式合作或官方授權。"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/services#optional-modules" variant="outline-dark" size="lg" arrow>
                  了解參訪安排
                </Button>
                <Tag tone="steel">可選延伸・須事先確認</Tag>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <div className="border border-white/10 bg-graphite-soft p-8">
                <p className="font-mono text-[10.5px] tracking-technical text-steel uppercase">
                  Visit Notes / 參訪要點
                </p>
                <ul className="mt-6 space-y-4">
                  {[
                    "一日行程，按年度項目目標規劃",
                    "包括 InnoX 參訪意向，實際機構待確認",
                    "交通、接待及活動費另行報價",
                    "行程安排須視接待機構檔期而定",
                  ].map((item) => (
                    <li key={item} className="flex gap-4 text-sm text-bone/85">
                      <span
                        className="mt-1.5 size-1.5 shrink-0 bg-signal"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
