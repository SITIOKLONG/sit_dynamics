"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative block size-5 border border-bone/80",
        className,
      )}
    >
      <span className="absolute right-[3px] bottom-[3px] size-1.5 bg-signal" />
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-void/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${siteConfig.brand.name} 首頁`}
        >
          <BrandMark />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-semibold tracking-[0.18em] text-bone">
              {siteConfig.brand.wordmark}
            </span>
            <span className="mt-1 hidden font-mono text-[9.5px] tracking-technical text-steel uppercase sm:block">
              {siteConfig.brand.descriptor}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="主要導覽"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative text-[13.5px] tracking-wide transition-colors",
                isActive(item.href)
                  ? "text-bone"
                  : "text-steel hover:text-bone",
              )}
            >
              {isActive(item.href) && (
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 -left-3.5 size-1 -translate-y-1/2 bg-signal"
                />
              )}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href={siteConfig.cta.href}
            size="sm"
            className="hidden sm:inline-flex"
          >
            {siteConfig.cta.label}
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center border border-white/15 text-bone lg:hidden"
            aria-expanded={open}
            aria-label={open ? "關閉選單" : "開啟選單"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-void lg:hidden">
          <nav
            className="flex flex-col px-6 py-8"
            aria-label="手機導覽"
          >
            {siteConfig.nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-baseline gap-4 border-b border-white/10 py-5",
                  isActive(item.href) ? "text-bone" : "text-steel",
                )}
              >
                <span className="font-mono text-[11px] tracking-technical text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl font-medium tracking-wide">
                  {item.label}
                </span>
              </Link>
            ))}
            <div className="mt-8">
              <Button
                href={siteConfig.cta.href}
                size="lg"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {siteConfig.cta.label}
              </Button>
            </div>
            <div className="mt-8 space-y-2 border-t border-white/10 pt-6">
              <p className="font-mono text-[10.5px] tracking-technical text-steel uppercase">
                {siteConfig.brand.name} — {siteConfig.brand.descriptor}
              </p>
              <p className="font-mono text-[10.5px] tracking-technical text-steel/70 uppercase">
                {siteConfig.brand.focus}
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
