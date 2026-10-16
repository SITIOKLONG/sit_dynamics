export type CapabilityKind = "existing" | "assessment";

export interface TechService {
  id: string;
  iconKey: string;
  title: string;
  en: string;
  capability: CapabilityKind;
  items: string[];
}

export const capabilityLabels: Record<
  CapabilityKind,
  { label: string; description: string }
> = {
  existing: {
    label: "既有能力",
    description:
      "已有可重用的工具、流程與經驗，可在範圍明確後直接安排。",
  },
  assessment: {
    label: "需可行性評估",
    description:
      "需要先確認硬件條件、開發權限、安全及驗收方式，經評估後方可承諾。",
  },
};

export const techServices: TechService[] = [
  {
    id: "control-integration",
    iconKey: "plug",
    title: "控制與軟件整合",
    en: "CONTROL & SOFTWARE INTEGRATION",
    capability: "existing",
    items: [
      "指定平台的 SDK／ROS 接口整合",
      "控制程式及參數調整",
      "資料記錄、診斷與測試工具",
    ],
  },
  {
    id: "rl-sim2real",
    iconKey: "brain",
    title: "RL 與 Sim2Real",
    en: "REINFORCEMENT LEARNING & SIM2REAL",
    capability: "existing",
    items: [
      "訓練環境配置",
      "reward／observation／action 等指定實驗",
      "訓練結果比較",
      "模擬與實機差異分析",
    ],
  },
  {
    id: "mechanical-design",
    iconKey: "cog",
    title: "機械設計",
    en: "MECHANICAL DESIGN",
    capability: "assessment",
    items: [
      "足部或踝關節實驗模組",
      "可替換機械部件",
      "機構改動與控制效果測試",
    ],
  },
  {
    id: "electronics-sensing",
    iconKey: "circuit",
    title: "電子與感測",
    en: "ELECTRONICS & SENSING",
    capability: "assessment",
    items: [
      "感測器整合",
      "數據採集",
      "通訊、溫度、電流或故障監測",
      "測試紀錄工具",
    ],
  },
  {
    id: "experiment-platform",
    iconKey: "flask",
    title: "工程實驗平台",
    en: "ENGINEERING EXPERIMENT PLATFORM",
    capability: "existing",
    items: [
      "模擬與實機測試模板",
      "測試指標與實驗報告",
      "教學用控制與比較介面",
    ],
  },
  {
    id: "education-research",
    iconKey: "graduation",
    title: "教育與研究項目",
    en: "EDUCATION & RESEARCH PROGRAMS",
    capability: "existing",
    items: [
      "依程度設計學生任務",
      "教師培訓",
      "工程挑戰與研究計劃",
      "年度技術項目",
    ],
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  detail: string;
}

export const customizationProcess: ProcessStep[] = [
  {
    step: "01",
    title: "需求了解",
    detail: "了解項目目標、現有平台、學生程度、時程與預算範圍。",
  },
  {
    step: "02",
    title: "技術評估",
    detail:
      "評估技術可行性、開發權限、安全條件、硬件兼容性與驗收方式。",
  },
  {
    step: "03",
    title: "範圍與報價",
    detail: "訂立明確的交付範圍、里程碑、雙方責任及正式報價。",
  },
  {
    step: "04",
    title: "開發與交付",
    detail: "開發、測試、實機驗證，並交付文件、數據與紀錄方式。",
  },
];

export const customizationStatement =
  "所有客製項目均須先評估技術可行性、開發權限、安全、硬件兼容性及驗收方式。未經評估，我們不會承諾任何開發結果或時間表。";
