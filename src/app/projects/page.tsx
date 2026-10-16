import type { Metadata } from "next";
import { Check } from "lucide-react";
import {
  projects,
  projectStatusLabels,
  type Project,
} from "@/data/projects";
import { mediaSlots } from "@/data/media";
import { PageHeader } from "@/components/sections/PageHeader";
import { MediaFrame } from "@/components/media/MediaFrame";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "工程案例與研發方向",
  description:
    "自研雙足機械人的開發、模擬與強化學習、控制整合、工程診斷及課程方向。每個項目均標示已完成、持續開發或概念研究狀態，忠於事實。",
  alternates: { canonical: "/projects" },
  openGraph: {
    url: "/projects",
    title: "工程案例與研發方向｜SIT Dynamics",
    description:
      "由自研雙足平台的開發過程到年度研究框架，逐項標示真實進度。",
  },
};

const toneByStatus = {
  completed: "dark" as const,
  ongoing: "signal" as const,
  concept: "steel" as const,
};

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const slot = mediaSlots[project.mediaSlotId];
  const reversed = index % 2 === 1;

  return (
    <article className="grid gap-10 border-b border-void/15 py-16 last:border-b-0 lg:grid-cols-12 lg:gap-12 lg:py-20">
      <div
        className={
          "lg:col-span-5 " + (reversed ? "lg:order-2" : "lg:order-1")
        }
      >
        <Reveal>
          <MediaFrame slot={slot} sizes="(min-width: 1024px) 40vw, 100vw" />
        </Reveal>
      </div>
      <div
        className={
          "lg:col-span-7 " + (reversed ? "lg:order-1" : "lg:order-2")
        }
      >
        <Reveal delay={0.08}>
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-sm text-signal">
              {project.index}
            </span>
            <Tag tone={toneByStatus[project.status]} dot>
              {projectStatusLabels[project.status].label}
            </Tag>
          </div>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-void md:text-3xl">
            {project.title}
          </h2>
          <p className="mt-1 font-mono text-[10.5px] tracking-technical text-void/50 uppercase">
            {project.en}
          </p>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-void/75">
            {project.summary}
          </p>

          <dl className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-[10.5px] tracking-technical text-void/50 uppercase">
                目標問題
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-void/80">
                {project.problem}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10.5px] tracking-technical text-void/50 uppercase">
                系統架構
              </dt>
              <dd className="mt-3">
                <ul className="space-y-2">
                  {project.architecture.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-void/80"
                    >
                      <span
                        className="mt-1.5 size-1 shrink-0 bg-steel"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10.5px] tracking-technical text-void/50 uppercase">
                採用方法
              </dt>
              <dd className="mt-3">
                <ul className="space-y-2">
                  {project.method.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-void/80"
                    >
                      <span
                        className="mt-1.5 size-1 shrink-0 bg-steel"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10.5px] tracking-technical text-void/50 uppercase">
                測試結果
              </dt>
              <dd className="mt-3">
                <ul className="space-y-2">
                  {project.results.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-void/80"
                    >
                      <span
                        className="mt-1.5 size-1 shrink-0 bg-steel"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-mono text-[10.5px] tracking-technical text-void/50 uppercase">
                已完成
              </h3>
              <ul className="mt-3 space-y-2">
                {project.done.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-void/85"
                  >
                    <Check
                      className="mt-0.5 size-3.5 shrink-0 text-signal"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10.5px] tracking-technical text-void/50 uppercase">
                尚未完成
              </h3>
              <ul className="mt-3 space-y-2">
                {project.pending.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-void/55"
                  >
                    <span
                      className="mt-2 size-1 shrink-0 bg-void/40"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {project.honestyNote && (
            <p className="mt-8 border-l-2 border-signal bg-void/[0.04] p-4 text-[12.5px] leading-relaxed text-void/70">
              {project.honestyNote}
            </p>
          )}
        </Reveal>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        breadcrumb="SIT Dynamics / Projects"
        title="工程案例與研發方向，逐項標示真實狀態。"
        description="本頁記錄自研雙足平台的開發過程、控制測試、程式與實機迭代。每個項目標示已完成、持續開發或概念／研究方向；未經確認的學校合作、賽事紀錄或客戶評價，一律不會出現在這裡。"
        meta={
          <>
            {Object.entries(projectStatusLabels).map(([key, value]) => (
              <Tag
                key={key}
                tone={toneByStatus[key as Project["status"]]}
                dot
              >
                {value.label}
              </Tag>
            ))}
          </>
        }
      />

      <section className="border-b border-void/10 bg-bone text-void">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {projects.map((project, i) => (
            <ProjectBlock key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      <section className="border-b border-white/10 bg-void">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <p className="max-w-2xl text-sm leading-relaxed text-steel">
              所有案例內容以實際進度更新；相片及影片素材以「素材待補」標示，將於整理完成後替換為真實紀錄。
            </p>
            <Button href="/contact?type=custom" variant="outline-dark" size="md" arrow>
              討論類似項目
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
