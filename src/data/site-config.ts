export const siteConfig = {
  brand: {
    name: "SIT Dynamics",
    wordmark: "SIT DYNAMICS",
    meaning: "SCIENCE · INNOVATION · TECHNOLOGY",
    tagline: "讓機械人像人一樣運動。",
    supporting:
      "從機械設計、機械動力學與智能控制，到強化學習及實機部署，SIT Dynamics 致力於將科學原理轉化為真實世界中可運作的機械人系統。",
    positioning:
      "專注人型機械人、機械人運動控制與實際系統研發的深科技公司。",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ilsit.student.ust.hk",
  nav: [
    { label: "研究方向", href: "#research" },
    { label: "技術能力", href: "#capabilities" },
    { label: "旗艦願景", href: "#vision" },
    { label: "產品方案", href: "#solutions" },
    { label: "安全提醒", href: "#safety" },
    { label: "聯絡我們", href: "#contact" },
  ],
  cta: {
    label: "討論研發項目",
    href: "#contact",
  },
  soundtrack: {
    src: "/media/westworld-main-title.mp3",
    title: "Main Title Theme — Westworld",
    artist: "Ramin Djawadi",
    album: "Westworld: Season 1 (Music from the HBO Series)",
  },
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || null,
    endpoint: process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT?.trim() || null,
    pendingLabel: "聯絡電郵尚未配置",
    adminHint:
      "網站設定：配置 NEXT_PUBLIC_ENQUIRY_ENDPOINT 以連接表單傳送，或配置 NEXT_PUBLIC_CONTACT_EMAIL 以啟用電郵備用方式。",
    noPublicDetails:
      "在正式配置前，本網站不列出電話、辦公室地址或社交帳戶。",
  },
  seo: {
    title: "SIT Dynamics — 人型機械人研發與運動控制",
    description:
      "SIT Dynamics 專注人型機械人、機械人動力學、運動控制、強化學習與模擬到實機部署，為學校、研究機構及企業提供研發方案。",
    locale: "zh_HK",
    keywords: [
      "人型機械人",
      "雙足機械人",
      "機械人動力學",
      "運動控制",
      "強化學習",
      "模擬到實機",
      "機械人研發",
      "機械人開發平台",
    ],
  },
  disclaimers: {
    pricing:
      "所有價格均為現階段方案定位；正式報價仍須按實際交付範圍確認。",
    visuals:
      "部分視覺素材仍為可替換的暫代素材；實際素材將於取得原創或授權後更新。",
    flagship:
      "概念願景。最終技術平台與交付範圍須按項目另行定義。",
  },
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
