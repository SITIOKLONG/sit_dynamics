export type CapabilityStatus = "existing" | "ongoing" | "planned";

export const capabilityStatusLabels: Record<CapabilityStatus, string> = {
  existing: "既有能力",
  ongoing: "持續開發",
  planned: "規劃中",
};

export interface CapabilityArea {
  id: string;
  index: string;
  en: string;
  title: string;
  description: string;
  status: CapabilityStatus;
  iconKey: string;
}

export const capabilityAreas: CapabilityArea[] = [
  {
    id: "biped-locomotion",
    index: "01",
    en: "Biped Locomotion",
    title: "雙足運動",
    description:
      "自研雙足平台的步行、平衡與姿態控制，包含實機測試流程與安全條件。",
    status: "ongoing",
    iconKey: "footprints",
  },
  {
    id: "control-systems",
    index: "02",
    en: "Control Systems",
    title: "控制系統",
    description:
      "控制程式、參數管理、通訊與資料記錄工具，讓實驗可以重複、結果可以比較。",
    status: "existing",
    iconKey: "cpu",
  },
  {
    id: "reinforcement-learning",
    index: "03",
    en: "Reinforcement Learning",
    title: "強化學習",
    description:
      "訓練環境配置、reward 與 observation 設計、訓練結果比較的既定流程。",
    status: "existing",
    iconKey: "brain",
  },
  {
    id: "simulation-to-reality",
    index: "04",
    en: "Simulation to Reality",
    title: "模擬到實機",
    description:
      "把模擬訓練的策略轉移到真機，並分析模擬與實機之間的差異來源。",
    status: "ongoing",
    iconKey: "boxes",
  },
  {
    id: "mechanical-electronics",
    index: "05",
    en: "Mechanical & Electronics",
    title: "機械與電子",
    description:
      "關節驅動、線材整理、感測器與電子模組的整合及替換測試。",
    status: "existing",
    iconKey: "circuit",
  },
  {
    id: "experiment-diagnostics",
    index: "06",
    en: "Experiment & Diagnostics",
    title: "實驗與診斷",
    description:
      "測試指標、實驗紀錄與故障診斷流程，讓問題可以被定位而非被猜測。",
    status: "planned",
    iconKey: "activity",
  },
];

export interface WorkflowStep {
  step: string;
  en: string;
  title: string;
  description: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    en: "SIMULATE",
    title: "建立與訓練",
    description: "在模擬環境建立模型與控制策略，用低成本方式反覆實驗。",
  },
  {
    step: "02",
    en: "TRANSFER",
    title: "轉移到實機",
    description: "把策略部署到實機，處理模擬與現實之間的差異。",
  },
  {
    step: "03",
    en: "VERIFY",
    title: "驗證與分析",
    description: "以一致指標比較結果，記錄數據、分析失敗原因。",
  },
];
