import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

interface WordmarkProps {
  href?: string;
  showMeaning?: boolean;
  className?: string;
}

export function Wordmark({
  href = "#top",
  showMeaning = true,
  className,
}: WordmarkProps) {
  return (
    <Link
      href={href}
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="SIT Dynamics — 返回首頁"
    >
      <span
        className="relative block size-5 shrink-0 border border-fg/75 transition-colors group-hover:border-fg"
        aria-hidden="true"
      >
        <span className="absolute bottom-[3px] right-[3px] size-1.5 bg-signal" />
      </span>
      <span className="flex min-w-0 flex-col gap-1">
        <span className="whitespace-nowrap font-display text-[15px] font-bold leading-none tracking-[0.18em] text-fg">
          SIT DYNAMICS
        </span>
        {showMeaning && (
          <span className="hidden whitespace-nowrap font-mono text-[8.5px] uppercase leading-none tracking-technical text-muted sm:block">
            {siteConfig.brand.meaning}
          </span>
        )}
      </span>
    </Link>
  );
}
