import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-technical text-muted",
        className,
      )}
    >
      <span className="h-px w-7 bg-signal" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
