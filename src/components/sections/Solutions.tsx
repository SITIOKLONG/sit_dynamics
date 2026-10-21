import { offerings, commercialNote } from "@/data/solutions";
import { mediaSlots } from "@/data/media";
import { formatHKD } from "@/lib/pricing";
import { EnquireLink } from "@/components/forms/EnquireLink";
import { MediaFrame } from "@/components/media/MediaFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function Solutions() {
  return (
    <section id="solutions" className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <SectionLabel>04 / 產品方案</SectionLabel>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-7 font-display text-4xl font-semibold leading-[1.16] tracking-[-0.025em] text-fg lg:text-[3rem] xl:text-[3.3rem]">
                <span className="block">從入門體驗，</span>
                <span className="block">到完整研發平台。</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="lg:col-span-4">
            <p className="max-w-md text-[15px] leading-[1.85] text-muted lg:ml-auto">
              承接旗艦研發願景，我們為不同階段的機械人研發需求提供相應方案，從工作坊與工程試點，到開發硬件及研發教育。
            </p>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-line">
          {offerings.map((offering, index) => (
            <Reveal key={offering.id} delay={index * 0.04}>
              <article
                id={`offering-${offering.id}`}
                className="border-b border-line py-14 lg:py-20"
              >
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] tracking-technical text-signal-light">
                        {offering.letter}
                      </span>
                      <span className="font-mono text-[8.5px] uppercase tracking-technical text-muted/80">
                        商業方案
                      </span>
                    </div>

                    <h3 className="mt-4 max-w-xs font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-fg lg:text-[1.7rem]">
                      {offering.name}
                    </h3>

                    <p className="mt-6 font-mono text-[1.75rem] leading-none tracking-[-0.02em] text-fg">
                      {formatHKD(offering.price)}
                    </p>
                    <p className="mt-2 font-mono text-[8.5px] uppercase tracking-technical text-muted/80">
                      指標性價格（港元）
                    </p>

                    <div className="mt-7 border-l border-line pl-4">
                      <p className="font-mono text-[8.5px] uppercase tracking-technical text-muted/80">
                        適合對象
                      </p>
                      <p className="mt-2 text-sm leading-[1.8] text-fg/80">
                        {offering.audience}
                      </p>
                    </div>

                    <div className="mt-7 hidden lg:block">
                      <EnquireLink
                        projectType={offering.enquiryType}
                        variant="outline"
                      >
                        {offering.cta}
                      </EnquireLink>
                    </div>
                  </div>

                  <div className="min-w-0 lg:col-span-8">
                    <p className="max-w-2xl text-[15px] leading-[1.85] text-muted">
                      {offering.description}
                    </p>

                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                      <div>
                        <h4 className="font-mono text-[9px] uppercase tracking-technical text-muted/80">
                          方案內容
                        </h4>
                        <ul className="mt-4 space-y-3 border-t border-line/70 pt-4">
                          {offering.scope.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-[1.8] text-fg/85"
                            >
                              <span
                                className="mt-[0.62em] size-1 shrink-0 bg-signal"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-7 border border-line bg-panel p-4">
                          <h4 className="font-mono text-[9px] uppercase tracking-technical text-muted/80">
                            範圍說明
                          </h4>
                          <ul className="mt-3 space-y-2">
                            {offering.notes.map((note) => (
                              <li
                                key={note}
                                className="flex gap-2 text-[11px] leading-[1.8] text-muted/80"
                              >
                                <span aria-hidden="true">—</span>
                                <span>{note}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <MediaFrame
                          slot={mediaSlots[offering.media]}
                          sizes="(min-width: 1024px) 30vw, 100vw"
                        />
                        {offering.secondaryMedia && (
                          <div className="mt-3">
                            <MediaFrame
                              slot={mediaSlots[offering.secondaryMedia]}
                              sizes="(min-width: 1024px) 30vw, 100vw"
                            />
                          </div>
                        )}
                        <div className="mt-6 lg:hidden">
                          <EnquireLink
                            projectType={offering.enquiryType}
                            variant="outline"
                          >
                            {offering.cta}
                          </EnquireLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 max-w-2xl font-mono text-[9px] uppercase leading-relaxed tracking-technical text-muted/80">
          {commercialNote}
        </p>

      </div>
    </section>
  );
}
