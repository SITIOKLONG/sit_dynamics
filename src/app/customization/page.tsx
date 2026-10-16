import type { Metadata } from "next";
import {
  BrainCircuit,
  CircuitBoard,
  Cog,
  FlaskConical,
  GraduationCap,
  PlugZap,
} from "lucide-react";
import {
  capabilityLabels,
  customizationProcess,
  customizationStatement,
  techServices,
} from "@/data/customization";
import { PageHeader } from "@/components/sections/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "客製化工程",
  description:
    "按需求委託具體工程工作：控制與軟件整合、RL 與 Sim2Real、機械設計、電子與感測、工程實驗平台及教育研究項目。所有客製工作先經技術可行性評估。",
  alternates: { canonical: "/customization" },
  openGraph: {
    url: "/customization",
    title: "客製化工程｜SIT Dynamics",
    description:
      "不需要從零開始：重用成熟硬件與工具，只對真正影響成果的部分作有限客製化。",
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  plug: PlugZap,
  brain: BrainCircuit,
  cog: Cog,
  circuit: CircuitBoard,
  flask: FlaskConical,
  graduation: GraduationCap,
};

export default function CustomizationPage() {
  return (
    <>
      <PageHeader
        breadcrumb="SIT Dynamics / Customization"
        title="客製化工程：委託具體的工程工作。"
        description="學校或機構可以按實際需求委託指定範圍的工程工作，而不只是購買固定課程。所有項目先經可行性評估，範圍、里程碑與驗收方式都會事先寫清楚。"
        meta={
          <>
            <Tag tone="dark" dot>
              既有能力
            </Tag>
            <Tag tone="signal" dot>
              需可行性評估
            </Tag>
            <span className="font-mono text-[10.5px] tracking-technical text-steel uppercase">
              兩類標籤的分別
            </span>
          </>
        }
      />

      <section className="border-b border-void/10 bg-bone text-void">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="How We Classify / 能力標示"
                tone="light"
                title="我們如實標示每一項能力的狀態。"
                description="並非所有服務都有相同的成熟度。以下標籤區分已有可重用工具與經驗的工作，以及需要先評估才能承諾的開發。"
              />
            </div>
            <div className="lg:col-span-6">
              <div className="border-t border-void/15">
                {Object.entries(capabilityLabels).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex flex-col gap-3 border-b border-void/15 py-6 sm:flex-row sm:gap-10"
                  >
                    <span className="sm:w-40 sm:shrink-0">
                      <Tag tone={key === "existing" ? "light" : "signal"} dot>
                        {value.label}
                      </Tag>
                    </span>
                    <p className="text-sm leading-relaxed text-void/70">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-void">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <Reveal>
            <SectionHeading
              index="01"
              eyebrow="Engineering Services / 技術服務"
              title="六類技術服務。"
              description="以下為我們可以提供或評估的工程工作範疇；實際交付以雙方確認的範圍文件為準。"
            />
          </Reveal>
          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {techServices.map((service, i) => {
              const Icon = iconMap[service.iconKey] ?? Cog;
              return (
                <Reveal key={service.id} delay={i * 0.05} className="bg-void">
                  <div className="group flex h-full flex-col p-8">
                    <div className="flex items-start justify-between">
                      <Icon
                        className="size-5 text-steel transition-colors group-hover:text-signal"
                        aria-hidden="true"
                      />
                      <Tag
                        tone={service.capability === "existing" ? "dark" : "signal"}
                        dot
                      >
                        {capabilityLabels[service.capability].label}
                      </Tag>
                    </div>
                    <h3 className="mt-8 font-display text-lg font-semibold tracking-tight text-bone">
                      {service.title}
                    </h3>
                    <p className="mt-1 font-mono text-[10px] tracking-technical text-steel/70 uppercase">
                      {service.en}
                    </p>
                    <ul className="mt-5 flex-1 space-y-2.5">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-steel"
                        >
                          <span
                            className="mt-1.5 size-1 shrink-0 bg-steel"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
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
                  eyebrow="Process / 合作流程"
                  tone="light"
                  title="四步處理每一個委託。"
                  description="流程公開透明：每一步都有明確產出，未經評估不會承諾開發結果或時間表。"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="border-t border-void/15">
                {customizationProcess.map((step, i) => (
                  <Reveal key={step.step} delay={i * 0.06}>
                    <div className="grid grid-cols-[3rem_1fr] gap-5 border-b border-void/15 py-6">
                      <span className="font-mono text-sm text-signal">
                        {step.step}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold tracking-tight">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-void/65">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.2}>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <Button href="/contact?type=custom" size="lg" variant="outline-light">
                    提出工程需求
                  </Button>
                  <p className="max-w-sm text-[12.5px] leading-relaxed text-void/60">
                    {customizationStatement}
                  </p>
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
