import { cn } from "@/lib/utils";

interface PriceTableProps {
  columns: string[];
  rows: React.ReactNode[][];
  tone?: "dark" | "light";
  footnote?: React.ReactNode;
  minWidth?: string;
}

export function PriceTable({
  columns,
  rows,
  tone = "dark",
  footnote,
  minWidth = "760px",
}: PriceTableProps) {
  const isDark = tone === "dark";
  return (
    <div>
      <div className="-mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
        <table className="w-full border-collapse" style={{ minWidth }}>
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className={cn(
                    "border-b py-3 pr-6 text-left font-mono text-[10.5px] font-medium tracking-technical uppercase",
                    isDark
                      ? "border-white/15 text-steel"
                      : "border-void/15 text-void/60",
                  )}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={cn(
                      "border-b py-4 pr-6 align-top text-sm leading-relaxed",
                      isDark
                        ? "border-white/10 text-bone/90"
                        : "border-void/10 text-void/85",
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p
        className={cn(
          "mt-3 font-mono text-[10.5px] tracking-technical uppercase md:hidden",
          isDark ? "text-steel/70" : "text-void/50",
        )}
      >
        ← 左右滑動查看完整表格 →
      </p>
      {footnote && (
        <div
          className={cn(
            "mt-4 max-w-3xl text-[13px] leading-relaxed",
            isDark ? "text-steel" : "text-void/60",
          )}
        >
          {footnote}
        </div>
      )}
    </div>
  );
}
