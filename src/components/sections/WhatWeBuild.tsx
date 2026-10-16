import {
  Activity,
  Boxes,
  BrainCircuit,
  CircuitBoard,
  Cpu,
  Footprints,
} from "lucide-react";
import {
  capabilityAreas,
  capabilityStatusLabels,
} from "@/data/capabilities";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  footprints: Footprints,
  cpu: Cpu,
  brain: BrainCircuit,
  boxes: Boxes,
  circuit: CircuitBoard,
  activity: Activity,
};

export function WhatWeBuild() {
  return (
    <section className="border-b border-white/10 bg-void">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Capabilities / 技術範疇"
            title="六個工程工作範疇，狀態清楚標示。"
            description="我們區分已經可以交付的能力、仍在開發中的部分，以及仍在規劃的方向。狀態反映 SIT Dynamics 自身的開發進度，並非對第三方產品的評價。"
          />
        </Reveal>

        <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilityAreas.map((area, i) => {
            const Icon = iconMap[area.iconKey] ?? Cpu;
            return (
              <Reveal key={area.id} delay={i * 0.05} className="bg-void">
                <div className="group flex h-full flex-col p-8">
                  <div className="flex items-start justify-between">
                    <Icon
                      className="size-5 text-steel transition-colors group-hover:text-signal"
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[11px] tracking-technical text-steel/50">
                      {area.index}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-lg font-semibold tracking-wide text-bone">
                    {area.en}
                  </h3>
                  <p className="mt-1 text-sm text-steel">{area.title}</p>
                  <p className="mt-4 flex-1 text-[13.5px] leading-relaxed text-steel/90">
                    {area.description}
                  </p>
                  <div className="mt-6">
                    <Tag
                      tone={area.status === "existing" ? "dark" : area.status === "ongoing" ? "signal" : "steel"}
                      dot
                    >
                      {capabilityStatusLabels[area.status]}
                    </Tag>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
