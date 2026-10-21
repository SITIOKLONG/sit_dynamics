import { cn } from "@/lib/utils";

type Tone = "default" | "accent" | "muted";

interface TagProps {
  children: React.ReactNode;
  tone?: Tone;
  dot?: boolean;
  className?: string;
}

const tones: Record<Tone, string> = {
  default: "border-line text-muted",
  accent: "border-signal/60 text-signal-light",
  muted: "border-line/70 text-muted/80",
};

export function Tag({
  children,
  tone = "default",
  dot = false,
  className,
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-none border px-2 py-1 font-mono text-[9.5px] leading-none uppercase tracking-technical",
        tones[tone],
        className,
      )}
    >
      {dot && (
        <span
          className={cn(
            "size-1.5",
            tone === "accent" ? "bg-signal" : "bg-current opacity-70",
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
