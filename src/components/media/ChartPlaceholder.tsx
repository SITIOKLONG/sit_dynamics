export function ChartPlaceholder() {
  return (
    <svg
      viewBox="0 0 640 360"
      className="absolute inset-0 size-full"
      role="img"
      aria-label="實驗數據圖表 placeholder"
    >
      <g stroke="rgba(233,230,222,0.07)" strokeWidth="1">
        {[40, 80, 120, 160, 200, 240, 280, 320].map((y) => (
          <line key={y} x1="0" y1={y} x2="640" y2={y} />
        ))}
        {[80, 160, 240, 320, 400, 480, 560].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="360" />
        ))}
      </g>
      <g stroke="rgba(233,230,222,0.18)" strokeWidth="1">
        <line x1="48" y1="20" x2="48" y2="320" />
        <line x1="48" y1="320" x2="612" y2="320" />
      </g>
      <polyline
        fill="none"
        stroke="#909397"
        strokeWidth="1.5"
        strokeDasharray="4 5"
        points="48,240 120,200 192,214 264,150 336,168 408,120 480,138 552,96 612,108"
      />
      <polyline
        fill="none"
        stroke="#D9403A"
        strokeWidth="1.5"
        opacity="0.85"
        points="48,252 120,214 192,226 264,170 336,182 408,132 480,152 552,112 612,124"
      />
      <circle cx="612" cy="124" r="3" fill="#D9403A" />
      <g fontFamily="monospace" fontSize="10" fill="#909397">
        <text x="48" y="14">
          SIM / REAL ROLLOUT
        </text>
        <text x="500" y="348" opacity="0.7">
          示意圖 — 待替換為真實數據
        </text>
      </g>
      <g fontFamily="monospace" fontSize="8.5" fill="#909397" opacity="0.85">
        <text x="18" y="22" transform="rotate(-90 18 22)">
          RMSE
        </text>
        <text x="600" y="334">
          T+
        </text>
      </g>
      <g>
        <line x1="430" y1="14" x2="452" y2="14" stroke="#909397" strokeDasharray="4 5" />
        <text x="458" y="18" fontFamily="monospace" fontSize="10" fill="#909397">
          SIM
        </text>
        <line x1="500" y1="14" x2="522" y2="14" stroke="#D9403A" />
        <text x="528" y="18" fontFamily="monospace" fontSize="10" fill="#909397">
          REAL
        </text>
      </g>
    </svg>
  );
}
