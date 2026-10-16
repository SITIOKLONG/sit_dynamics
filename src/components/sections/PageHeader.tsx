import { cn } from "@/lib/utils";

interface PageHeaderProps {
  breadcrumb: string;
  title: React.ReactNode;
  description: React.ReactNode;
  meta?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  breadcrumb,
  title,
  description,
  meta,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/10 bg-void",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 eng-grid opacity-30"
      />
      <div className="relative mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
        <p className="flex items-center gap-3 font-mono text-[11px] tracking-technical text-steel uppercase">
          <span className="size-1.5 bg-signal" aria-hidden="true" />
          {breadcrumb}
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] font-semibold tracking-[-0.015em] text-bone lg:text-5xl">
          {title}
        </h1>
        <div className="mt-6 max-w-2xl text-[15px] leading-relaxed text-steel">
          {description}
        </div>
        {meta && (
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6">
            {meta}
          </div>
        )}
      </div>
    </section>
  );
}
