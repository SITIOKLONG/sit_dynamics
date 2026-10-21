import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 eng-grid opacity-40"
      />
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-start px-5 py-32 lg:px-10">
        <SectionLabel>錯誤 / 404</SectionLabel>
        <h1 className="mt-6 text-balance font-display text-5xl font-semibold tracking-[-0.03em] text-fg lg:text-6xl">
          找不到頁面
        </h1>
        <p className="mt-4 max-w-md text-[15px] leading-[1.85] text-muted">
          此頁面不存在或已經移動。請返回首頁，了解 SIT Dynamics
          的研究方向、技術能力與研發方案。
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/" size="lg">
            返回首頁
          </Button>
          <Button href="/#contact" variant="outline" size="lg">
            討論研發項目
          </Button>
        </div>
      </div>
    </section>
  );
}
