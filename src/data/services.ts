export interface ServiceTier {
  id: string;
  letter: "A" | "B" | "C" | "D";
  name: string;
  en: string;
  price: number;
  tagline: string;
  positioning: string;
  audience: string;
  includes: string[];
  excludes: string[];
  modules?: string[];
  deliverables?: string[];
  researchDirections?: string[];
  highlight?: string;
  notes: string[];
}

export const serviceTiers: ServiceTier[] = [
  {
    id: "tier-a",
    letter: "A",
    name: "體驗工作坊",
    en: "STANDARDIZED EXPERIENCE",
    price: 20000,
    tagline: "一次工作坊與一次展示活動，附固定簡報、示範程式與安全流程。",
    positioning:
      "以固定流程完成一次機械人體驗，適合先了解人型機械人實際可以做什麼的學校與機構。活動內容已標準化，重複執行成本低，適合科技日、STEM 週或校內推廣活動。",
    audience:
      "希望先體驗人型機械人、舉辦科技日或 STEM 活動的學校。",
    includes: [
      "一次 Workshop（時數按項目約定）",
      "一次機械人展示活動",
      "基礎控制或模擬體驗",
      "工程問題示範",
      "固定簡報、示範程式、活動流程與安全檢查表",
      "成果紀錄方式（相片及短片指引）",
    ],
    excludes: [
      "全新程式開發",
      "修改底層控制器",
      "全新硬件研發",
      "長期駐場支援",
    ],
    notes: ["實際時數、人數及日期以項目確認書為準。"],
  },
  {
    id: "tier-b",
    letter: "B",
    name: "工程體驗試點",
    en: "HANDS-ON ENGINEERING",
    price: 80000,
    tagline:
      "學生親手做工程：由模擬環境到實機測試，完成一項有紀錄、可比較的實驗。",
    positioning:
      "以現成實驗範本為基礎，讓學生在安全範圍內調整控制參數與訓練設定，親手完成一次由模擬到實機的工程流程，並留下可比較的紀錄。",
    audience:
      "希望在正規課程或課外活動中加入工程實踐的學校與教育機構。",
    includes: [
      "已有實驗範本",
      "標準程式",
      "教案與學生任務",
      "既有模組的有限配置或修改",
    ],
    excludes: [
      "由零開發全新機械人",
      "全新低層控制系統",
      "大量專屬硬件開發",
    ],
    modules: [
      "雙足機械人與基本運動控制",
      "模擬環境與實驗設定",
      "控制參數及指定訓練設定",
      "實機測試與安全流程",
      "結果比較與失敗分析",
      "學生工程紀錄與展示",
    ],
    deliverables: [
      "一項控制或模擬實驗",
      "實驗設定與結果比較",
      "工程紀錄及簡單分析",
    ],
    notes: ["預設課程約 20 小時；正式時數及班級人數以項目確認為準。"],
  },
  {
    id: "tier-c",
    letter: "C",
    name: "研發教學平台",
    en: "RESEARCH EDUCATION PLATFORM",
    price: 200000,
    tagline:
      "讓學校持續開展人型機械人研究型學習，而不只是一次性活動。",
    positioning:
      "把模擬、訓練、實機測試與數據紀錄整合成一套可重複使用的教學平台，讓教師與學生可以按同一流程反覆進行實驗、比較不同結果。",
    audience:
      "希望建立可持續人型機械人課程、研究紀錄及校內技術能力的學校或教育機構。",
    includes: [
      "標準化安裝及配置流程",
      "指定硬件平台的控制與實驗接口",
      "模擬、訓練及實機測試範本",
      "可重用程式庫",
      "實驗數據記錄與比較",
      "教師培訓",
      "學生評核及研究紀錄",
      "故障診斷文件",
      "約定期限內的技術支援",
      "有明確上限的指定模組客製化",
    ],
    excludes: [
      "不限範圍的客製化開發",
      "機械人硬件所有權轉移",
      "超出約定範圍的硬件改造",
      "未經評估的新平台支援",
    ],
    highlight:
      "使用示例：學生可以調整 reward、控制參數或步態政策，再以一致的指標比較不同結果。",
    notes: [
      "標準報價以軟件、課程、整合及教師培訓為核心。",
      "機械人硬件所有權不自動轉移；硬件租借或購置另行安排。",
      "新購硬件、租借費、重大硬件改造及超出約定範圍的研發另行報價。",
      "不保證任何平台都支援同一級別的修改，須先確認型號及開發權限。",
    ],
  },
  {
    id: "tier-d",
    letter: "D",
    name: "年度工程研發旗艦項目",
    en: "ANNUAL ENGINEERING PROGRAM",
    price: 500000,
    tagline:
      "以具體技術目標及多輪測試為核心的年度工程項目，交付報告、數據與成果展示。",
    positioning:
      "圍繞一個明確的技術問題，以年度為週期推進：由基準測試、方案設計、原型改進到多輪實機驗證，全程留下工程紀錄。適合希望把機械人課題做成持續研發項目的學校或機構。",
    audience:
      "有明確技術目標、希望全年推進一項工程課題的學校、實驗室或企業。",
    includes: [
      "技術可行性評估",
      "現有平台基準測試",
      "研發計劃及里程碑",
      "選定的機械、電子或控制改進",
      "原型測試及數據分析",
      "學生工程紀錄及報告",
      "成果展示",
      "約定的教師協作與技術支援",
    ],
    excludes: [
      "無限客製化或全包式開發",
      "未約定的硬件採購",
      "保證特定研究結果",
    ],
    researchDirections: [
      "雙足行走能耗與可靠性",
      "步態穩定性與控制策略",
      "足部或踝關節實驗性改進",
      "感測器、電子及通訊整合",
      "Sim2Real 差異分析",
      "長時間運行與故障診斷",
    ],
    notes: [
      "此為參考項目價，並非無限客製化全包價。",
      "最終報價須按學生人數、研究深度、硬件、零件、出差、支援時數及驗收標準制定。",
      "可選延伸模組（北京半馬準備、深圳參訪）見本頁下方獨立卡片，不包含於本方案。",
    ],
  },
];

export interface OptionalModule {
  id: string;
  name: string;
  en: string;
  availability: string;
  summary: string;
  items: string[];
  disclaimers: string[];
  ctaHref: string;
  mediaSlotId: "beijingMarathon" | "innoxVisit";
}

export const optionalModules: OptionalModule[] = [
  {
    id: "beijing-hm",
    name: "北京人型機械人半程馬拉松準備",
    en: "OPTIONAL — BEIJING HUMANOID HALF-MARATHON PREP",
    availability: "可選延伸模組，僅適用於 MOP 500,000 年度工程研發項目",
    summary:
      "圍繞人型機械人長距離行走能力的準備工作，以測試與驗證為主，而非活動保證。",
    items: [
      "賽事規則研究",
      "平台與機械人可行性評估",
      "賽前測試與性能驗證",
      "訓練及行程準備",
    ],
    disclaimers: [
      "參賽資格、選拔、賽事規則、機械人規格及安全要求須以主辦方正式公告為準。",
      "不保證參賽資格、完成賽事或任何名次。",
      "交通、住宿、報名、保險及額外研發按實際情況另行報價。",
    ],
    ctaHref: "/contact?module=beijing-hm",
    mediaSlotId: "beijingMarathon",
  },
  {
    id: "shenzhen-visit",
    name: "深圳創新與機械人產業參訪",
    en: "OPTIONAL — SHENZHEN INNOVATION VISIT",
    availability: "可選延伸模組，按獨立項目安排",
    summary:
      "可按項目目標規劃一天的深圳創新與機械人產業參訪，把課堂延伸到真實的產業環境。",
    items: [
      "按年度項目目標規劃一日行程",
      "包括 InnoX 參訪意向",
    ],
    disclaimers: [
      "實際機構、行程、合作及檔期須事先確認，並按獨立項目安排。",
      "行程須視合作確認、接待安排及日期而定；不暗示已有任何正式合作或官方授權。",
      "交通、接待及活動費另行報價。",
    ],
    ctaHref: "/contact?module=shenzhen-visit",
    mediaSlotId: "innoxVisit",
  },
];
