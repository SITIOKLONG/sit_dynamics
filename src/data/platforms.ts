export type PlatformKind = "biped" | "quadruped";

export interface PlatformFacts {
  id: string;
  name: string;
  maker: string;
  kind: PlatformKind;
  ownership: "inhouse" | "third-party";
  status: string;
  summary: string;
  suitableFor: string[];
  caveats: string[];
  priceDisplay: string;
}

export const platformFacts: PlatformFacts[] = [
  {
    id: "inhouse-biped",
    name: "SIT Dynamics 自家雙足平台",
    maker: "SIT Dynamics（自研）",
    kind: "biped",
    ownership: "inhouse",
    status: "持續開發 / 可作項目使用",
    summary:
      "自家開發的低成本雙足機械人，用於步態研究、強化學習訓練、Sim2Real 實驗及教學示範。製作成本內部估算約 MOP 15,000（不包括研發人力、工具及測試損耗）。",
    suitableFor: [
      "雙足步態與平衡實驗",
      "強化學習與 Sim2Real 研究",
      "低門檻實機體驗與教學示範",
    ],
    caveats: [
      "自研平台的可靠性、性能及支援程度以實際配置及約定範圍為準，不與商用 EDU 平台作同級比較。",
      "公開價格統一顯示：按項目使用、租借或服務範圍報價。",
    ],
    priceDisplay: "按項目使用、租借或服務範圍報價",
  },
  {
    id: "unitree-r1",
    name: "Unitree R1 / R1 EDU",
    maker: "Unitree（第三方）",
    kind: "biped",
    ownership: "third-party",
    status: "第三方平台",
    summary:
      "Unitree 的輕量雙足人型系列。普通版與 EDU 版的開發權限、SDK 支援及硬件配置不同，選型前須逐項確認。",
    suitableFor: [
      "雙足行走展示與基礎研究",
      "需要官方 EDU 支援的課程（視版本及授權）",
    ],
    caveats: [
      "R1 普通版公開價不代表 R1 EDU 價格。",
      "可自行部署程式的實際版本及授權須向官方或代理商確認。",
      "租借是否包含開發權限須逐項確認。",
    ],
    priceDisplay: "R1 普通版有公開參考價；R1 EDU 需正式查詢",
  },
  {
    id: "unitree-g1",
    name: "Unitree G1 / G1 EDU",
    maker: "Unitree（第三方）",
    kind: "biped",
    ownership: "third-party",
    status: "第三方平台",
    summary:
      "目前常用的中型人型平台。G1 與 G1 EDU 差異大，包括關節規格、算力、SDK 及開發權限，不能以普通版價格推算 EDU 版。",
    suitableFor: [
      "人型機械人研究與二次開發（視 EDU 授權）",
      "活動展示與公關用途（普通版已可胜任）",
    ],
    caveats: [
      "人民幣參考區間屬第三方／特定配置資料，並非官方固定價。",
      "G1 EDU 活動套餐租價不代表包含自行部署程式及完整二次開發權限。",
      "日租報價須確認具體版本。",
    ],
    priceDisplay: "G1 普通版有公開參考價；G1 EDU 以正式報價為準",
  },
  {
    id: "unitree-go2",
    name: "Unitree Go2 / Go2 EDU",
    maker: "Unitree（第三方）",
    kind: "quadruped",
    ownership: "third-party",
    status: "第三方平台・四足",
    summary:
      "Go2 是四足機械人，不是雙足人型機械人。若核心目標是導航、環境感知或四足移動，Go2 可能更具成本效益；若目標是雙足行走及人型機械人研發，Go2 不能直接替代雙足平台。",
    suitableFor: [
      "四足移動",
      "環境感知",
      "導航與建圖",
      "具身智能中的移動任務",
      "相對低成本的機械人入門",
    ],
    caveats: [
      "Go2 普通版有公開參考價；Go2 EDU 價格及開發權限另行查詢。",
      "四足平台不會產生雙足步態、平衡控制或踝關節相關的研究數據。",
    ],
    priceDisplay: "Go2 普通版有公開參考價；Go2 EDU 需正式查詢",
  },
];

export interface VersionDiff {
  title: string;
  detail: string;
}

export const versionDiffs: VersionDiff[] = [
  {
    title: "開發權限",
    detail:
      "EDU 版通常開放較完整的 SDK 及二次開發接口；普通版限制較多。實際以官方公佈及合約為準。",
  },
  {
    title: "硬件配置",
    detail:
      "EDU 版一般配備較高算力、更多感測器及不同關節規格，亦影響可承載的演算法。",
  },
  {
    title: "支援與保養",
    detail:
      "EDU 版通常可獲官方或代理商技術支援；普通版以消費級保養為主。",
  },
];

export interface PriceReference {
  platform: string;
  version: string;
  reference: string;
  tag: "reference" | "inquiry";
  note: string;
  sourceUrl: string | null;
}

export const priceReferences: PriceReference[] = [
  {
    platform: "Unitree",
    version: "R1 普通版",
    reference: "人民幣約 ¥29,900–39,900",
    tag: "reference",
    note: "公開市場參考；R1 EDU 售價需正式查詢。",
    sourceUrl: null,
  },
  {
    platform: "Unitree",
    version: "R1 EDU",
    reference: "需正式查詢",
    tag: "inquiry",
    note: "須向官方或代理商查詢版本、配置、SDK 及開發權限。",
    sourceUrl: null,
  },
  {
    platform: "Unitree",
    version: "G1 普通版",
    reference: "人民幣約 ¥85,000 起",
    tag: "reference",
    note: "公開市場參考價；配置與版本差異大。",
    sourceUrl: null,
  },
  {
    platform: "Unitree",
    version: "G1 EDU",
    reference: "人民幣約 ¥169,000–195,000（待核實）",
    tag: "reference",
    note: "第三方／特定配置參考，不代表官方固定價；正式售價需向官方或代理商確認。",
    sourceUrl: null,
  },
  {
    platform: "Unitree",
    version: "G1 日租（版本待確認）",
    reference: "人民幣約 ¥6,800／日",
    tag: "reference",
    note: "屬公開租借參考；須確認具體版本。",
    sourceUrl: null,
  },
  {
    platform: "Unitree",
    version: "G1 EDU 活動套餐",
    reference: "人民幣約 ¥15,000／日",
    tag: "reference",
    note: "活動套餐公開參考，不代表包含自行部署程式及完整二次開發權限。",
    sourceUrl: null,
  },
  {
    platform: "Unitree",
    version: "R1 EDU 租借",
    reference: "需詢價",
    tag: "inquiry",
    note: "暫無可靠公開日租報價，請向供應商查詢。",
    sourceUrl: null,
  },
  {
    platform: "Unitree",
    version: "Go2 普通版",
    reference: "人民幣約 ¥9,997 起",
    tag: "reference",
    note: "公開市場參考。",
    sourceUrl: null,
  },
  {
    platform: "Unitree",
    version: "Go2 EDU",
    reference: "需正式查詢",
    tag: "inquiry",
    note: "價格、SDK 及開發權限須向官方或代理商查詢。",
    sourceUrl: null,
  },
];

export const lastVerified = "2026-10";

export const rentalChecklist = [
  "運輸",
  "押金",
  "技術人員",
  "保險",
  "跨境安排",
  "現場支援",
  "開發權限",
];

export const rentalNote =
  "所有租價均須確認是否包括運輸、押金、技術人員、保險、跨境安排、現場支援與開發權限。找到一則表演級租借報價，並不等於可以作自行部署 RL 政策的研發租借。";

export const platformFairnessNote =
  "我們不會假設所有場景都需要最貴的機械人，也不會把自家平台包裝成商用 EDU 產品的同級替代。選擇應由研究目標決定。";
