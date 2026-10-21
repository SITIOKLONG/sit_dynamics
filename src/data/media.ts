export type MediaKind = "video" | "image";

export type MediaRatio =
  | "4/5"
  | "21/9"
  | "16/9"
  | "16/10"
  | "4/3"
  | "3/2"
  | "1/1";

export interface MediaSlot {
  id: string;
  kind: MediaKind;
  ratio: MediaRatio;
  src: string;
  poster: string | null;
  label: string;
  caption: string;
  filename: string;
  recommended: string;
  alt: string;
}

export const mediaSlots = {
  hero: {
    id: "hero",
    kind: "video",
    ratio: "4/5",
    src: "/media/hero-humanoid-top.mp4",
    poster: "/media/hero-humanoid-top-poster.jpg",
    label: "[首頁主視覺：機身頂部紅色指示燈特寫]",
    caption: "SIT / 頂部結構",
    filename: "hero-humanoid-top.mp4",
    recommended:
      "640 × 800（4:5），H.264 MP4，4.8 秒來回循環，約 216 KB，無音軌；另備同尺寸 JPG 封面圖",
    alt: "雙足人型機械人頂部結構與紅色指示燈特寫",
  },
  research: {
    id: "research-biped",
    kind: "video",
    ratio: "4/3",
    src: "/media/biped-walking.mp4",
    poster: "/media/biped-walking-poster.jpg",
    label: "[雙足機械人懸吊架腿部運動測試]",
    caption: "SIT / 運動研究",
    filename: "biped-walking.mp4",
    recommended:
      "960 × 720（4:3），H.264 MP4，12.5 秒，約 3.3 MB，無音軌；另備同尺寸 JPG 封面圖",
    alt: "雙足機械人在測試架上進行腿部運動測試",
  },
  mechanicalDesign: {
    id: "mechanical-design",
    kind: "video",
    ratio: "4/3",
    src: "/media/dex-hand.mp4",
    poster: "/media/dex-hand-poster.jpg",
    label: "[靈巧手機構與關節運動]",
    caption: "SIT / 機械設計",
    filename: "dex-hand.mp4",
    recommended:
      "1200 × 900（4:3），H.264 MP4，18.8 秒，約 2.2 MB，無音軌；另備同尺寸 JPG 封面圖",
    alt: "多指靈巧手在實驗室展示關節與機構運動",
  },
  robotControl: {
    id: "robot-control",
    kind: "video",
    ratio: "4/3",
    src: "/media/moveit-control.mp4",
    poster: "/media/moveit-control-poster.jpg",
    label: "[MoveIt 2 運動規劃與控制介面]",
    caption: "MoveIt 2 / 工具示範",
    filename: "moveit-control.mp4",
    recommended:
      "1200 × 900（4:3），H.264 MP4，28.4 秒，約 3.4 MB，無音軌；另備同尺寸 JPG 封面圖",
    alt: "MoveIt 2 運動規劃軟件示範，屏幕顯示機械臂模型與軌跡",
  },
  reinforcementLearning: {
    id: "reinforcement-learning",
    kind: "video",
    ratio: "16/10",
    src: "/media/reinforcement-learning.mp4",
    poster: "/media/reinforcement-learning-poster.jpg",
    label: "[Isaac Sim 強化學習模擬環境]",
    caption: "SIT / 強化學習",
    filename: "reinforcement-learning.mp4",
    recommended:
      "1024 × 640（16:10），H.264 MP4，15 秒循環，約 4 MB，無音軌；另備同尺寸 JPG 封面圖",
    alt: "Isaac Sim 模擬環境中的多個機械人訓練畫面",
  },
  simToReal: {
    id: "sim-to-real",
    kind: "video",
    ratio: "4/3",
    src: "/media/integration-walking.mp4",
    poster: "/media/integration-walking-poster.jpg",
    label: "[實機行走與系統整合]",
    caption: "SIT / 模擬到實機",
    filename: "integration-walking.mp4",
    recommended:
      "960 × 720（4:3），H.264 MP4，46.7 秒，約 3.8 MB，無音軌；另備同尺寸 JPG 封面圖",
    alt: "雙足人型機械人在走廊行走，展示模擬到實機與系統整合",
  },
  workshop: {
    id: "workshop",
    kind: "image",
    ratio: "3/2",
    src: "/media/planA.jpeg",
    poster: null,
    label: "[工作坊與示範]",
    caption: "SIT / 工作坊",
    filename: "planA.jpeg",
    recommended: "1691 × 1122（約 3:2），JPG，743 KB",
    alt: "學生在課室使用電腦參與機械人工作坊",
  },
  pilot: {
    id: "pilot",
    kind: "image",
    ratio: "3/2",
    src: "/media/planA.jpeg",
    poster: null,
    label: "[工程試點計劃]",
    caption: "SIT / 工程試點",
    filename: "planA.jpeg",
    recommended: "1691 × 1122（約 3:2），JPG，743 KB",
    alt: "學生在課室參與機械人工程試點活動",
  },
  kit: {
    id: "development-kit",
    kind: "image",
    ratio: "3/2",
    src: "/media/planC.webp",
    poster: null,
    label: "[雙足開發套件]",
    caption: "ENCOS / 硬件參考",
    filename: "planC.webp",
    recommended: "1080 × 809（4:3 原圖，介面以 3:2 裁切），WebP，93 KB",
    alt: "兩組雙足機械人腿部實驗平台，機身標有 ENCOS 標誌",
  },
  education: {
    id: "education-programme",
    kind: "image",
    ratio: "3/2",
    src: "/media/planC.webp",
    poster: null,
    label: "[機械人研發教育計劃]",
    caption: "ENCOS / 硬件參考",
    filename: "planC.webp",
    recommended: "1080 × 809（4:3 原圖，介面以 3:2 裁切），WebP，93 KB",
    alt: "兩組雙足機械人腿部實驗平台，作為研發教育硬件參考",
  },
  flagship: {
    id: "flagship-humanoid",
    kind: "video",
    ratio: "16/9",
    src: "/media/encos-humanoid.mp4",
    poster: "/media/encos-humanoid-poster.jpg",
    label: "[ENCOS 全尺寸人型機械人參考片段]",
    caption: "ENCOS / 參考片段",
    filename: "encos-humanoid.mp4",
    recommended:
      "1280 × 720（16:9），H.264 MP4，16.5 秒，約 4.9 MB，無音軌；另備同尺寸 JPG 封面圖",
    alt: "ENCOS 全尺寸人型機械人在實驗室及戶外行走的參考片段",
  },
} as const satisfies Record<string, MediaSlot>;

export type MediaSlotKey = keyof typeof mediaSlots;

export const mediaSlotList: MediaSlot[] = Object.values(mediaSlots);
