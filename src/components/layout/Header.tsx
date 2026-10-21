"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Wordmark } from "./Wordmark";

const navIds = [
  "top",
  ...siteConfig.nav.map((item) => item.href.replace("#", "")),
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = navIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.15, 0.4, 0.75] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    desktop.addEventListener("change", handleDesktop);
    return () => desktop.removeEventListener("change", handleDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      const panelFocusables = panel
        ? Array.from(
            panel.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
            ),
          )
        : [];
      const focusables = triggerRef.current
        ? [triggerRef.current, ...panelFocusables]
        : panelFocusables;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-6 px-5 lg:px-10">
        <Wordmark className="shrink-0" />

        <nav
          aria-label="主要導航"
          className="hidden items-center gap-6 lg:flex xl:gap-8"
        >
          {siteConfig.nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative py-2 text-[13px] tracking-wide transition-colors",
                  isActive ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-px bg-signal transition-opacity",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <div className="hidden md:block">
            <Button href={siteConfig.cta.href} size="sm">
              {siteConfig.cta.label}
            </Button>
          </div>
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "關閉選單" : "開啟選單"}
            className="flex size-10 items-center justify-center border border-line text-fg transition-colors hover:border-muted lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="網站導航"
          className="absolute inset-x-0 top-full z-40 h-[calc(100svh-72px)] overflow-y-auto border-t border-line bg-surface lg:hidden"
        >
          <nav
            aria-label="流動導航"
            className="mx-auto flex min-h-full max-w-[1440px] flex-col px-5 pb-10 pt-8"
          >
            <div className="flex flex-col">
              {siteConfig.nav.map((item, index) => (
                <a
                  key={item.href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between border-b border-line py-5 font-display text-2xl font-medium tracking-tight text-fg transition-colors hover:text-signal"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-[10px] tracking-technical text-muted/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </a>
              ))}
            </div>

            <Button
              href={siteConfig.cta.href}
              size="lg"
              className="mt-8 w-full"
              onClick={() => setOpen(false)}
            >
              {siteConfig.cta.label}
            </Button>

            <div className="mt-auto pt-12">
              <p className="font-mono text-[9px] uppercase tracking-technical text-muted/80">
                {siteConfig.brand.meaning}
              </p>
              <p className="mt-2 max-w-xs font-display text-lg leading-snug text-fg">
                {siteConfig.brand.tagline}
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
