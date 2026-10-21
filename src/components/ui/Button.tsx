import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "outline" | "ghost";

export interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

const base =
  "inline-flex select-none items-center justify-center gap-2 rounded-none font-medium tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-signal text-paper hover:bg-signal-deep",
  outline:
    "border border-line text-fg hover:border-muted hover:bg-fg/[0.04]",
  ghost: "text-muted hover:text-fg",
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
