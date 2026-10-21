import type { MediaSlotKey } from "./media";

export interface Offering {
  id: string;
  letter: string;
  name: string;
  price: number;
  audience: string;
  description: string;
  scope: string[];
  notes: string[];
  cta: string;
  enquiryType: string;
  media: MediaSlotKey;
  secondaryMedia?: MediaSlotKey;
}

export const offerings: Offering[] = [
  {
    id: "workshop",
    letter: "一",
    name: "機械人工作坊與示範",
    price: 20000,
    audience:
      "希望初步了解人型機械人、安排技術示範或舉辦工程體驗活動的學校、大學與機構。",
    description:
      "以現場示範與有範圍的工程體驗，建立對人型機械人及運動控制的基本理解。",
    scope: [
      "雙足機械人現場示範",
      "人型機械人與運動控制的基礎介紹",
      "有範圍限制的工程體驗活動",
      "基本教學材料",
      "預先約定的活動安排",
    ],
    notes: [
      "活動時長、參與人數、交通和器材需求須另行確認",
      "除非合約另有約定，機械人不轉移所有權",
    ],
    cta: "查詢工作坊",
    enquiryType: "工作坊與示範",
    media: "workshop",
  },
  {
    id: "pilot",
    letter: "二",
    name: "工程試點計劃",
    price: 80000,
    audience:
      "希望學生或團隊參與實際機械人開發、控制與測試的機構。",
    description:
      "以一個明確範圍的工程挑戰，讓團隊經歷從模擬、控制到實機測試的開發流程。",
    scope: [
      "一個有明確範圍的工程挑戰",
      "開發工具與控制流程介紹",
      "模擬及訓練工作流程",
      "限定範圍的實機實驗",
      "約定的階段性工程目標",
      "最終示範及技術文件",
    ],
    notes: [
      "工程工時、項目週期及交付範圍須預先約定",
      "借用硬件的所有權仍屬 SIT Dynamics",
      "新增功能和超出約定的技術支援需要另行報價",
    ],
    cta: "討論工程試點",
    enquiryType: "工程試點",
    media: "pilot",
    secondaryMedia: "pilotPhoto",
  },
  {
    id: "development-kit",
    letter: "三",
    name: "雙足開發套件",
    price: 200000,
    audience:
      "希望擁有硬件平台並自行進行機械人開發與實驗的學校、實驗室或工程團隊。",
    description:
      "提供可自行開發與實驗的雙足機械人硬件平台，以及基礎控制介面和系統文件。",
    scope: [
      "兩台雙足機械人",
      "基本控制介面",
      "開發範例與相關文件",
      "機械、電子及軟件系統說明",
      "基礎運動實驗",
      "約定的交付測試",
      "合約指定範圍內的保養及技術支援",
    ],
    notes: [
      "實際硬件規格須在正式報價中列明",
      "不包含無限制的客製化研究",
      "不承諾尚未驗證的運動能力",
    ],
    cta: "查詢開發套件",
    enquiryType: "雙足開發套件",
    media: "kit",
  },
  {
    id: "rd-programme",
    letter: "四",
    name: "機械人研發教育計劃",
    price: 300000,
    audience:
      "希望建立較完整的人型機械人教學、工程實驗及研發能力的學校或機構。",
    description:
      "結合硬件平台、系統化課程、教師培訓與實作實驗，建立可持續的研發教學能力。",
    scope: [
      "兩台雙足機械人開發平台",
      "系統化課程及實驗手冊",
      "機械人動力學與控制實驗",
      "強化學習及模擬到實機工作流程",
      "教師培訓及學生實作",
      "系統部署及約定的技術支援",
      "可持續使用的教學材料",
    ],
    notes: [
      "課程內容、授課時數、支援期限及硬件規格須在合約中定義",
      "不保證論文發表、比賽獲獎或研究突破",
      "超出範圍的客製化開發另行報價",
    ],
    cta: "討論研發教育方案",
    enquiryType: "研發教育計劃",
    media: "education",
    secondaryMedia: "educationPhoto",
  },
];

export const commercialNote =
  "所有價格均為現階段方案定位；正式報價仍須按實際交付範圍確認。";

export const flagship = {
  name: "全尺寸人型機械人研發計劃",
  budget: 1000000,
  description:
    "一項按實際研發範圍另行定義的旗艦研發合作，並非標準現貨產品。",
  supporting:
    "我們的長期目標，是將機械人研發從基礎步態與平衡控制，逐步推進至更自然、更穩定、更具動態能力的人型機械人運動。",
  directions: [
    "全尺寸人型機械人研發",
    "機械結構與執行器設計",
    "全身動力學與控制",
    "強化學習與模擬到實機",
    "實體行走、穩定性及抗干擾測試",
    "長距離運動能力研究",
    "未來半馬挑戰",
  ],
  halfMarathonNote:
    "半馬挑戰僅為未來研發挑戰目標，並非已實現的能力或保證可完成的成果。",
  proposalNote:
    "項目範圍、硬件數量、時間表、驗收標準、技術風險及最終預算，必須在獨立的可行性評估與提案階段確認。",
  cta: "討論旗艦研發項目",
  enquiryType: "旗艦研發項目",
  media: "flagship" as const,
  footageCredit: "ENCOS",
};
