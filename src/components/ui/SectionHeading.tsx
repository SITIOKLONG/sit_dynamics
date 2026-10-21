import { cn } from "@/lib/utils";
import { SectionLabel } from "./SectionLabel";

interface SectionHeadingProps {
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <SectionLabel>{label}</SectionLabel>
      <h2
        className={cn(
          "mt-6 text-balance font-display text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-fg md:text-4xl lg:text-[2.85rem]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <div className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
          {description}
        </div>
      )}
    </div>
  );
}
