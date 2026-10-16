import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { serviceTiers } from "@/data/services";

export function Footer() {
  const email = siteConfig.contact.email;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-void">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="relative block size-5 border border-bone/80"
              >
                <span className="absolute right-[3px] bottom-[3px] size-1.5 bg-signal" />
              </span>
              <span className="font-display text-[15px] font-semibold tracking-[0.18em] text-bone">
                {siteConfig.brand.wordmark}
              </span>
            </div>
            <p className="mt-6 font-mono text-[11px] tracking-technical text-steel uppercase">
              {siteConfig.brand.tagline}
            </p>
            <p className="mt-2 text-sm text-bone/90">
              {siteConfig.brand.taglineZh}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel">
              {siteConfig.brand.supportingLine}
            </p>
            <p className="mt-6 font-mono text-[10.5px] tracking-technical text-steel/60 uppercase">
              {siteConfig.brand.focus}
            </p>
          </div>

          <nav className="lg:col-span-2" aria-label="頁面導覽">
            <h3 className="font-mono text-[10.5px] tracking-technical text-steel uppercase">
              網站導覽
            </h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-bone/80 transition-colors hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-3" aria-label="服務分類">
            <h3 className="font-mono text-[10.5px] tracking-technical text-steel uppercase">
              服務分類
            </h3>
            <ul className="mt-4 space-y-3">
              {serviceTiers.map((tier) => (
                <li key={tier.id}>
                  <Link
                    href={`/services#${tier.id}`}
                    className="text-sm text-bone/80 transition-colors hover:text-bone"
                  >
                    {tier.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/customization"
                  className="text-sm text-bone/80 transition-colors hover:text-bone"
                >
                  客製化工程服務
                </Link>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-[10.5px] tracking-technical text-steel uppercase">
              聯絡
            </h3>
            {email ? (
              <a
                href={`mailto:${email}`}
                className="mt-4 block text-sm text-bone/90 underline decoration-signal/60 underline-offset-4 hover:text-bone"
              >
                {email}
              </a>
            ) : (
              <p className="mt-4 text-sm text-steel">
                {siteConfig.contact.pendingLabel}
              </p>
            )}
            <p className="mt-4 text-[13px] leading-relaxed text-steel/80">
              服務對象：{siteConfig.contact.audience}
            </p>
            {!email && (
              <p className="mt-4 font-mono text-[10px] leading-relaxed tracking-technical text-steel/50 uppercase">
                {siteConfig.contact.adminHint}
              </p>
            )}
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="max-w-4xl text-[12px] leading-relaxed text-steel/70">
            {siteConfig.disclaimers.thirdParty}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[10.5px] tracking-technical text-steel/60 uppercase">
              © {year} {siteConfig.brand.name}. All rights reserved.
            </p>
            <p className="font-mono text-[10.5px] tracking-technical text-steel/60 uppercase">
              {siteConfig.brand.wordmark} — {siteConfig.brand.descriptor}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
