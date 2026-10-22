import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const safetyPoints = [
  "請勿對機械人進行危險改裝，或以危險方式使用機械人。",
  "客戶操作時，請讓人與機械人保持至少 2–3 米的安全距離。",
  "部分極限測試具高度風險，請勿模仿。",
  "不同型號與版本的功能可能有所差異。",
  "請參閱相關產品說明及官方網站，了解產品條款與政策，並遵守所在地法律法規。",
  "人形機械人目前仍處於全球早期探索階段；個人用戶採購前，請務必先詳細了解其局限性。",
];

export function Safety() {
  return (
    <section
      id="safety"
      className="theme-dark relative overflow-hidden border-b border-line bg-surface"
    >
      <span
        className="absolute inset-x-0 top-0 h-px bg-signal/60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 eng-grid-fine opacity-25"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel>05 / 安全與責任</SectionLabel>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-7 text-balance font-display text-4xl font-semibold leading-[1.12] tracking-[-0.025em] text-fg lg:text-[3rem]">
                <span className="block">安全，是</span>
                <span className="block">研發的一部分。</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-[15px] leading-[1.9] text-muted">
                我們一直高度重視產品安全與資訊安全。歡迎各位提供建議，我們會持續完善。
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 max-w-sm border-l border-signal pl-5">
                <p className="font-mono text-[9px] uppercase tracking-technical text-signal-light">
                  操作前請先閱讀
                </p>
                <p className="mt-2 text-sm leading-[1.8] text-fg/80">
                  以下為一般安全提醒；實際操作須依產品手冊、場地風險評估及當地法規進行。
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <ol className="grid gap-px border border-line bg-line sm:grid-cols-2">
                {safetyPoints.map((point, index) => (
                  <li key={index} className="bg-panel p-5 lg:p-6">
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 font-mono text-[9px] tracking-technical text-signal-light">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[13px] leading-[1.9] text-fg/85">
                        {point}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-4 font-mono text-[8.5px] uppercase leading-relaxed tracking-technical text-muted/80">
                安全提醒會按實際產品、型號、場地及法規要求持續更新。
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
