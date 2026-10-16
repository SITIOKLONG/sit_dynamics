export const siteConfig = {
  brand: {
    name: "SIT Dynamics",
    wordmark: "SIT DYNAMICS",
    descriptor: "Research & Engineering",
    focus: "Humanoid Robotics / Control Systems / Engineering Integration",
    tagline: "Research. Build. Verify.",
    taglineZh: "研究，構建，驗證。",
    supportingLine: "從模擬到實機，從想法到能夠運作的系統。",
    heroIntro:
      "我們以雙足人型機械人、運動控制、強化學習與實機測試為基礎，建立工程教育與客製化研發方案。",
    workingNameNote:
      "SIT Dynamics 為現行品牌名稱；所有品牌字串集中於 site-config.ts，方便日後統一修改。",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || null,
    pendingLabel: "聯絡電郵待配置",
    adminHint:
      "網站管理員：請於環境變數設定 NEXT_PUBLIC_CONTACT_EMAIL，設定後表單可直接以電郵傳送。",
    audience:
      "澳門中小學、具備工程或 STEM 教學需要的學校、教育機構，以及需要雙足機械人客製化整合的實驗室或企業。",
    responseNote:
      "我們透過電郵或你提供的聯絡方式回覆；回覆時間視查詢內容而定。",
    noPublicChannelNote:
      "網站現階段不設公開電話或地址；請使用表單或電郵聯絡。",
  },
  nav: [
    { label: "服務方案", href: "/services" },
    { label: "客製化工程", href: "/customization" },
    { label: "機械人平台", href: "/platforms" },
    { label: "工程案例", href: "/projects" },
    { label: "聯絡", href: "/contact" },
  ],
  cta: {
    label: "討論工程項目",
    href: "/contact",
  },
  seo: {
    keywords: [
      "澳門人型機械人課程",
      "澳門雙足機械人",
      "澳門機械人 STEM",
      "人型機械人研發教育",
      "雙足機械人控制",
      "強化學習機械人",
      "Sim2Real",
      "機械人客製化工程",
      "人型機械人工作坊",
      "研發教學平台",
    ],
    locale: "zh_MO",
  },
  disclaimers: {
    thirdParty:
      "第三方機械人價格、型號配置、開發權限與租借條款由供應商決定，並可能隨時間調整。表中價格僅供初步比較，不構成採購或租借報價。",
  },
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
