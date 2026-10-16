export type MediaKind = "video" | "image" | "chart";

export type MediaRatio = "16/9" | "4/3" | "3/2" | "10/7" | "1/1";

export interface MediaSlot {
  id: string;
  kind: MediaKind;
  src: string | null;
  poster: string | null;
  ratio: MediaRatio;
  caption: string;
  titleZh: string;
  filename: string;
  recommended: string;
  note: string;
}

export const mediaSlots = {
  heroVideo: {
    id: "hero-video",
    kind: "video",
    src: "/media/hero-biped.mp4",
    poster: "/media/hero-biped-poster.jpg",
    ratio: "4/3",
    caption: "EXP-014 / BIPED-LOCO",
    titleZh: "雙足實機行走（主視覺影片）",
    filename: "hero-biped.mp4",
    recommended:
      "1600 × 1200（4:3）· H.264 MP4 · 15–30 秒無縫循環 · 15 MB 以內；建議同時提供 hero-biped-poster.jpg（同尺寸）",
    note: "低光實驗室或走廊環境、紅色 LED 及小量紅光、去飽和工業灰調 — 與品牌視覺一致。",
  },
  bipedWalk: {
    id: "biped-walk",
    kind: "image",
    src: "/media/biped-walk.jpg",
    poster: null,
    ratio: "4/3",
    caption: "EXP-021 / WALK-TEST-03",
    titleZh: "雙足實機行走",
    filename: "biped-walk.jpg",
    recommended: "1600 × 1200（4:3）· JPG/WebP · 500 KB 以內",
    note: "自研雙足平台行走測試之實拍，用於工程案例頁。",
  },
  controlSim: {
    id: "control-sim",
    kind: "image",
    src: "/media/control-sim.jpg",
    poster: null,
    ratio: "3/2",
    caption: "SIM-002 / ISAAC LAB",
    titleZh: "控制程式與模擬環境",
    filename: "control-sim.jpg",
    recommended: "1800 × 1200（3:2）· JPG/WebP · 500 KB 以內",
    note: "模擬環境或控制程式介面截圖；如含敏感內容請先整理。",
  },
  hardwareDetail: {
    id: "hardware-detail",
    kind: "image",
    src: "/media/hardware-detail.jpg",
    poster: null,
    ratio: "4/3",
    caption: "HW-007 / ACTUATOR BAY",
    titleZh: "馬達、線材、電子及機械結構",
    filename: "hardware-detail.jpg",
    recommended: "1600 × 1200（4:3）· JPG/WebP · 500 KB 以內",
    note: "關節驅動、線材整理或電子模組之微距特寫。",
  },
  studentLab: {
    id: "student-lab",
    kind: "image",
    src: "/media/student-lab.jpg",
    poster: null,
    ratio: "3/2",
    caption: "EDU-001 / STUDENT LAB",
    titleZh: "學生工程實驗",
    filename: "student-lab.jpg",
    recommended: "1800 × 1200（3:2）· JPG/WebP · 500 KB 以內",
    note: "學生進行實驗或量測之實拍；須取得肖像同意後方可使用。",
  },
  innoxVisit: {
    id: "innox-visit",
    kind: "image",
    src: "/media/innox-visit.jpg",
    poster: null,
    ratio: "3/2",
    caption: "VISIT-001 / SZ TOUR",
    titleZh: "InnoX／深圳參訪",
    filename: "innox-visit.jpg",
    recommended: "1800 × 1200（3:2）· JPG/WebP · 500 KB 以內",
    note: "參訪活動實拍；須取得場地及機構正式授權後方可公開。",
  },
  beijingMarathon: {
    id: "beijing-marathon",
    kind: "image",
    src: "/media/beijing-marathon.jpg",
    poster: null,
    ratio: "3/2",
    caption: "RACE-001 / BEIJING HM",
    titleZh: "北京人型機械人半程馬拉松",
    filename: "beijing-marathon.jpg",
    recommended: "1800 × 1200（3:2）· JPG/WebP · 500 KB 以內",
    note: "賽事或備賽實拍；使用時須遵守賽會規定及肖像權要求。",
  },
  experimentChart: {
    id: "experiment-chart",
    kind: "chart",
    src: "/media/experiment-chart.png",
    poster: null,
    ratio: "16/9",
    caption: "DATA-003 / SIM VS REAL",
    titleZh: "實驗數據圖表",
    filename: "experiment-chart.png",
    recommended: "1600 × 900（16:9）· PNG · 300 KB 以內",
    note: "可替換為訓練曲線、Sim2Real 對比或測試結果圖；請使用真實數據。",
  },
  annualProgram: {
    id: "annual-program",
    kind: "image",
    src: "/media/annual-program.jpg",
    poster: null,
    ratio: "3/2",
    caption: "PROG-001 / ANNUAL REVIEW",
    titleZh: "年度項目里程碑與展示",
    filename: "annual-program.jpg",
    recommended: "1800 × 1200（3:2）· JPG/WebP · 500 KB 以內",
    note: "年度項目之里程碑測試或成果展示實拍。",
  },
} as const satisfies Record<string, MediaSlot>;

export type MediaSlotKey = keyof typeof mediaSlots;

export const mediaSlotList: MediaSlot[] = Object.values(mediaSlots);
