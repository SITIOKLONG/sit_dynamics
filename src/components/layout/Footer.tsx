import { siteConfig } from "@/data/site-config";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="theme-dark border-t border-line bg-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Wordmark />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              {siteConfig.brand.positioning}
            </p>
            <p className="mt-4 max-w-sm font-mono text-[9px] uppercase leading-relaxed tracking-technical text-muted/80">
              {siteConfig.disclaimers.visuals}
            </p>
          </div>

          <nav aria-label="頁尾導航" className="lg:col-span-3">
            <p className="font-mono text-[9px] uppercase tracking-technical text-muted/80">
              網站導航
            </p>
            <ul className="mt-5 space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="font-mono text-[9px] uppercase tracking-technical text-muted/80">
              聯絡我們
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 text-sm text-fg transition-colors hover:text-signal-light"
            >
              項目查詢
              <span aria-hidden="true">→</span>
            </a>
            <p className="mt-4 max-w-[15rem] font-mono text-[9px] uppercase leading-relaxed tracking-technical text-muted/80">
              {siteConfig.contact.email ?? siteConfig.contact.pendingLabel}
            </p>
            <p className="mt-4 max-w-[15rem] text-xs leading-relaxed text-muted/80">
              {siteConfig.contact.noPublicDetails}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[9px] uppercase tracking-technical text-muted/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} SIT Dynamics. 版權所有。</p>
          <p>{siteConfig.brand.meaning}</p>
        </div>
      </div>
    </footer>
  );
}
