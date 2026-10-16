import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="flex items-center gap-3 font-mono text-[11px] tracking-technical uppercase">
        <span className="size-1.5 bg-signal" aria-hidden="true" />
        <span className={isDark ? "text-steel" : "text-void/60"}>
          {index ? `${index} / ` : ""}
          {eyebrow}
        </span>
      </p>
      <h2
        className={cn(
          "mt-5 font-display text-3xl leading-[1.15] font-semibold tracking-[-0.01em] md:text-4xl lg:text-[2.6rem]",
          isDark ? "text-bone" : "text-void",
        )}
      >
        {title}
      </h2>
      {description && (
        <div
          className={cn(
            "mt-5 max-w-xl text-[15px] leading-relaxed",
            isDark ? "text-steel" : "text-void/70",
          )}
        >
          {description}
        </div>
      )}
    </div>
  );
}
