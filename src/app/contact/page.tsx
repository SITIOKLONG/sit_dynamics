import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageHeader } from "@/components/sections/PageHeader";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "聯絡與項目諮詢",
  description:
    "提交項目諮詢：項目類型、現有平台、參與人數、預算範圍及目標。表單會整理你的需求成為可傳送的摘要；網站配置聯絡電郵後即可直接以電郵傳送。",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "聯絡與項目諮詢｜SIT Dynamics",
    description:
      "由體驗工作坊到年度工程研發項目，告訴我們你的目標，我們會回覆可行範圍與下一步。",
  },
};

const steps = [
  {
    step: "01",
    title: "填寫項目資料",
    detail: "約需 3 分鐘。填得越具體，我們回覆越有針對性。",
  },
  {
    step: "02",
    title: "整理諮詢摘要",
    detail:
      "提交後系統會整理你的內容；在你自行傳送之前，我們不會收到任何資料。",
  },
  {
    step: "03",
    title: "傳送及回覆",
    detail: siteConfig.contact.email
      ? `以電郵傳送至 ${siteConfig.contact.email}，我們會按你提供的聯絡方式回覆。`
      : "複製摘要並以電郵傳送（待網站配置聯絡電郵後，可直接以電郵傳送）。",
  },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const email = siteConfig.contact.email;
  const params = await searchParams;

  const typeParam = typeof params.type === "string" ? params.type : "";
  const moduleParam = typeof params.module === "string" ? params.module : "";

  const initialProjectType =
    typeParam || (moduleParam === "beijing-hm" ? "annual" : moduleParam === "shenzhen-visit" ? "visit" : "");

  const initialGoals =
    moduleParam === "beijing-hm"
      ? "有興趣了解：北京人型機械人半程馬拉松準備（可選延伸模組）。"
      : moduleParam === "shenzhen-visit"
        ? "有興趣了解：深圳創新與機械人產業參訪（可選延伸模組）。"
        : "";

  return (
    <>
      <PageHeader
        breadcrumb="SIT Dynamics / Contact"
        title="討論你的項目。"
        description="告訴我們目標、現有條件與預算範圍。無論是準備採購、已經有機械人，還是只有一個想法，都可以先談談。"
        meta={
          <>
            <Tag tone="dark">服務對象：學校、教育機構、實驗室及企業</Tag>
            {email ? (
              <a
                href={`mailto:${email}`}
                className="font-mono text-[11px] tracking-technical text-bone underline decoration-signal/60 underline-offset-4"
              >
                {email}
              </a>
            ) : (
              <Tag tone="steel">{siteConfig.contact.pendingLabel}</Tag>
            )}
          </>
        }
      />

      <section className="border-b border-white/10 bg-void">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-bone">
                  聯絡資料與流程
                </h2>
                <div className="mt-8 border-t border-white/10">
                  {steps.map((item) => (
                    <div
                      key={item.step}
                      className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-white/10 py-5"
                    >
                      <span className="font-mono text-[12px] text-signal">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="text-sm font-medium text-bone">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-steel">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-10 space-y-6">
                  <div>
                    <h3 className="font-mono text-[10.5px] tracking-technical text-steel uppercase">
                      聯絡電郵
                    </h3>
                    {email ? (
                      <p className="mt-3 text-sm text-bone/90">{email}</p>
                    ) : (
                      <p className="mt-3 text-sm text-steel">
                        {siteConfig.contact.pendingLabel}
                      </p>
                    )}
                  </div>
                  <div>
                    <h3 className="font-mono text-[10.5px] tracking-technical text-steel uppercase">
                      服務對象
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-steel">
                      {siteConfig.contact.audience}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-mono text-[10.5px] tracking-technical text-steel uppercase">
                      回覆安排
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-steel">
                      {siteConfig.contact.responseNote}
                    </p>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-steel/70">
                      {siteConfig.contact.noPublicChannelNote}
                    </p>
                  </div>
                  {!email && (
                    <div className="border border-white/10 bg-graphite-soft p-5">
                      <p className="flex items-start gap-3 font-mono text-[10px] leading-relaxed tracking-technical text-steel/70 uppercase">
                        {siteConfig.contact.adminHint}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.06}>
                <ContactForm
                  initialProjectType={initialProjectType}
                  initialGoals={initialGoals}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-graphite-soft">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
          <div className="flex flex-wrap items-start gap-x-10 gap-y-6">
            <p className="flex items-center gap-3 font-mono text-[10.5px] tracking-technical text-steel uppercase">
              <CircleCheck className="size-4 text-signal" aria-hidden="true" />
              我們不捏造案例、不誇大能力、不保證研究結果
            </p>
            <p className="flex items-center gap-3 font-mono text-[10.5px] tracking-technical text-steel uppercase">
              <CircleCheck className="size-4 text-signal" aria-hidden="true" />
              所有報價以正式範圍文件為準
            </p>
            <p className="flex items-center gap-3 font-mono text-[10.5px] tracking-technical text-steel uppercase">
              <CircleCheck className="size-4 text-signal" aria-hidden="true" />
              第三方平台權限由供應商決定
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
