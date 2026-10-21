import { siteConfig } from "@/data/site-config";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const usefulContext = [
  "希望解決的運動或工程目標",
  "現有平台、硬件或技術能力",
  "參與者、團隊或機構背景",
  "時間表、限制及預算範圍",
];

export function ContactSection() {
  return (
    <section id="contact" className="border-b border-line bg-panel">
      <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel>07 / 聯絡我們</SectionLabel>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-7 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-fg lg:text-[3.4rem]">
                有機械人研發難題？
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-[15px] leading-[1.9] text-muted">
                無論你希望體驗人型機械人、建立開發平台，還是規劃大型研發項目，我們都可以先從工程問題和實際需求開始討論。
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 max-w-md border-t border-line pt-6">
                <p className="font-mono text-[9px] uppercase tracking-technical text-muted/80">
                  建議提供
                </p>
                <ul className="mt-4 space-y-3">
                  {usefulContext.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-[1.8] text-fg/80"
                    >
                      <span
                        className="mt-[0.62em] size-1 shrink-0 bg-signal"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-8 max-w-sm font-mono text-[9px] uppercase leading-relaxed tracking-technical text-muted/80">
                {siteConfig.contact.noPublicDetails}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
