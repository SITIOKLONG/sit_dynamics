import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-void">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 eng-grid opacity-40"
      />
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-start px-6 py-32 lg:px-10">
        <p className="flex items-center gap-3 font-mono text-[11px] tracking-technical text-steel uppercase">
          <span className="size-1.5 bg-signal" aria-hidden="true" />
          Error / 404
        </p>
        <h1 className="mt-6 font-display text-5xl font-semibold tracking-[-0.02em] text-bone">
          Page Not Found
        </h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-steel">
          此頁面不存在或已被移動。你可以返回首頁，或直接查看服務方案。
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/" size="lg">
            返回首頁
          </Button>
          <Button href="/services" variant="outline-dark" size="lg">
            查看服務方案
          </Button>
        </div>
        <Link
          href="/contact"
          className="mt-10 font-mono text-[11px] tracking-technical text-steel uppercase underline decoration-steel/40 underline-offset-4 hover:text-bone"
        >
          或直接與我們聯絡
        </Link>
      </div>
    </section>
  );
}
