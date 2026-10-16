import type { MediaSlotKey } from "./media";

export type ProjectStatus = "completed" | "ongoing" | "concept";

export const projectStatusLabels: Record<
  ProjectStatus,
  { label: string; tone: "signal" | "steel" | "bone" }
> = {
  completed: { label: "已完成", tone: "bone" },
  ongoing: { label: "持續開發", tone: "signal" },
  concept: { label: "概念／研究方向", tone: "steel" },
};

export interface Project {
  id: string;
  index: string;
  title: string;
  en: string;
  status: ProjectStatus;
  summary: string;
  problem: string;
  architecture: string[];
  method: string[];
  results: string[];
  done: string[];
  pending: string[];
  mediaSlotId: MediaSlotKey;
  honestyNote?: string;
}

export const projects: Project[] = [
  {
    id: "biped-development",
    index: "01",
    title: "自研雙足機械人開發",
    en: "BIPED ROBOT DEVELOPMENT",
    status: "ongoing",
    summary:
      "以低成本零件建立一部可行走、可重複測試的雙足平台，作為所有教學及研究工作的基礎。",
    problem: "在有限成本內建立可穩定進行行走測試及姿態實驗的雙足硬件。",
    architecture: ["自研機械結構與電子配置", "關節驅動與感測系統", "實機測試與安全流程"],
    method: ["結構反覆迭代", "步態測試與修正", "測試數據記錄與比較"],
    results: [
      "已建立可運作的原型並持續修正",
      "系統性性能數據仍在整理，整理完成後再公佈",
    ],
    done: ["原型組裝", "基本站立與行走測試"],
    pending: ["長時間可靠性測試", "公開測試報告"],
    mediaSlotId: "bipedWalk",
  },
  {
    id: "simulation-rl",
    index: "02",
    title: "模擬與強化學習",
    en: "SIMULATION & REINFORCEMENT LEARNING",
    status: "ongoing",
    summary:
      "在模擬環境中訓練步態與控制策略，再以一致指標對比實機表現，處理 Sim2Real 差異。",
    problem: "讓訓練出來的控制策略在真實硬件上仍然有效。",
    architecture: ["模擬環境與機械人模型配置", "RL 訓練流程", "Sim2Real 轉移實驗"],
    method: ["調整 reward／observation／action 設定", "訓練結果比較", "實機驗證"],
    results: ["已具備可重用的訓練與比較流程", "差異分析持續進行中"],
    done: ["模擬訓練流程", "基本策略實機驗證"],
    pending: ["大規模對比實驗", "完整差異分析報告"],
    mediaSlotId: "controlSim",
  },
  {
    id: "control-embedded",
    index: "03",
    title: "控制與嵌入式整合",
    en: "CONTROL & EMBEDDED INTEGRATION",
    status: "ongoing",
    summary:
      "控制程式、嵌入式通訊與感測器整合，是模擬策略落地到實機的必要條件。",
    problem: "建立穩定、可診斷、可重複的實機控制與資料链路。",
    architecture: ["控制程式與參數管理", "通訊與資料記錄", "測試與診斷工具"],
    method: ["控制程式迭代", "通訊測試", "故障注入與診斷"],
    results: ["基本控制與記錄链路已可運作", "診斷工具持續完善"],
    done: ["基本控制程式", "資料記錄流程"],
    pending: ["完整診斷文件", "更多感測器整合測試"],
    mediaSlotId: "hardwareDetail",
  },
  {
    id: "engineering-diagnostics",
    index: "04",
    title: "工程診斷",
    en: "ENGINEERING DIAGNOSTICS",
    status: "concept",
    summary:
      "為機械人項目建立故障診斷、數據記錄及維護流程，讓問題可以被定位而非只被猜測。",
    problem: "實機測試出現異常時，缺乏系統化的定位與記錄方法。",
    architecture: ["診斷檢查表", "數據記錄規範", "故障分類與處理流程"],
    method: ["整理常見故障模式", "建立測試與量測步驟"],
    results: ["屬規劃方向，尚未有可公佈成果"],
    done: ["方向定義"],
    pending: ["檢查表與流程文件", "實際應用驗證"],
    mediaSlotId: "experimentChart",
  },
  {
    id: "school-workshop",
    index: "05",
    title: "學校工作坊",
    en: "SCHOOL WORKSHOP",
    status: "concept",
    summary:
      "體驗工作坊與工程課程的活動設計：簡報、任務、安全流程及成果紀錄方式。",
    problem: "人型機械人活動如何做到安全、有工程內容、又能讓學生真正參與。",
    architecture: ["標準化活動流程", "學生任務設計", "安全檢查表"],
    method: ["以固定流程降低執行成本", "按程度調整任務"],
    results: ["屬服務設計方向，尚未有可公佈成果"],
    done: ["流程框架設計"],
    pending: ["實際推行及紀錄"],
    mediaSlotId: "studentLab",
    honestyNote:
      "目前未有已確認的學校合作案例；此部分為服務設計方向，實際推行後才會補充真實紀錄。",
  },
  {
    id: "annual-research",
    index: "06",
    title: "年度研究項目",
    en: "ANNUAL RESEARCH PROJECT",
    status: "concept",
    summary:
      "以年度為單位的工程研發項目框架：基準測試、里程碑、報告與成果展示。",
    problem: "如何讓機械人課題持續推進一年，而不是停留在幾節活動。",
    architecture: ["基準測試與目標設定", "里程碑管理", "學生研究紀錄與報告"],
    method: ["選定技術問題", "多輪測試", "階段性檢視與調整"],
    results: ["屬規劃方向，尚未有可公佈成果"],
    done: ["項目框架設計"],
    pending: ["首個年度項目試行"],
    mediaSlotId: "annualProgram",
  },
];
