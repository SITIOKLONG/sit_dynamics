import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline-dark" | "outline-light" | "ghost-dark";

interface ButtonProps {
  href?: string;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-[2px] font-medium tracking-wide transition-colors duration-200 select-none disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-signal text-white hover:bg-signal-deep",
  "outline-dark":
    "border border-white/25 text-bone hover:border-bone/70 hover:bg-white/5",
  "outline-light":
    "border border-void/25 text-void hover:border-void/70 hover:bg-void/5",
  "ghost-dark": "text-steel hover:text-bone",
};

const sizes = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-sm",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const cls = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {children}
      {arrow && <ArrowUpRight className="size-4" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {content}
    </button>
  );
}
