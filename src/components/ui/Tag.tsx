import { cn } from "@/lib/utils";

type Tone = "dark" | "light" | "signal" | "steel";

interface TagProps {
  children: React.ReactNode;
  tone?: Tone;
  dot?: boolean;
  className?: string;
}

const tones: Record<Tone, string> = {
  dark: "border-white/20 text-steel",
  light: "border-void/20 text-void/70",
  signal: "border-signal/50 text-signal",
  steel: "border-steel/40 text-steel",
};

export function Tag({ children, tone = "dark", dot = false, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-[2px] border px-2 py-1 font-mono text-[10.5px] leading-none tracking-technical uppercase",
        tones[tone],
        className,
      )}
    >
      {dot && (
        <span
          className={cn(
            "size-1.5",
            tone === "signal" ? "bg-signal" : "bg-current opacity-70",
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
