# SIT Dynamics — Official Website

人型機械人研發教育與工程整合的商業網站（澳門市場）。品牌工作名稱為 **SIT Dynamics**（Research & Engineering），視覺風格為 cinematic robotics research studio。

## 技術棧

- Next.js 16（App Router）＋ React 19 ＋ TypeScript（strict）
- Tailwind CSS v4（`src/app/globals.css` 內 `@theme` 定義品牌色票與字體）
- lucide-react 圖示、motion（極少量動效，支援 `prefers-reduced-motion`）
- 無資料庫、無登入；表單為純前端整理＋電郵傳送

## 啟動

```bash
npm install
npm run dev        # http://localhost:3000
```

其他指令：

```bash
npm run build      # production build
npm run start      # 啟動 production server
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

## 頁面

| 路徑 | 內容 |
| --- | --- |
| `/` | Cinematic Hero（實機影片 placeholder）、服務預覽、技術範疇、客製化與平台 teaser |
| `/services` | 四層服務方案（MOP 20,000 / 80,000 / 200,000 / 500,000）＋兩個可選延伸模組 |
| `/customization` | 六類客製化工程服務、能力標籤、合作流程 |
| `/platforms` | 自家雙足平台、Unitree R1 / G1 / Go2 比較、公開參考價表、免責聲明 |
| `/projects` | 六個案例類別，標示已完成／持續開發／概念研究方向 |
| `/contact` | 項目諮詢表單（含 query 參數預填，如 `/contact?type=custom`、`/contact?module=beijing-hm`） |

## 專案結構

```text
src/
  app/            # 頁面、layout、globals.css、icon.svg、opengraph-image、robots、sitemap
  components/
    layout/       # Header（含手機導覽）、Footer
    sections/     # Hero、PageHeader、Intro、WhatWeBuild、CustomTeaser、PlatformTeaser、VisitTeaser、CtaBand
    cards/        # ServiceTierBlocks、OptionalModuleCard
    media/        # MediaFrame（Image／Video placeholder 統一元件）、ChartPlaceholder、Timecode
    forms/        # ContactForm
    ui/           # Button、Tag、SectionHeading、PriceTable、Reveal
  data/           # 所有內容集中管理（見下）
  lib/            # utils、pricing、assets（fs 偵測 public/media）
public/media/     # 真實素材放這裡（見 public/media/README.md）
```

## 常見修改

### 1. 更改品牌名稱

全部品牌字串集中於 `src/data/site-config.ts`（名稱、wordmark、tagline、descriptor、導覽、CTA、SEO keywords、免責聲明）。

### 2. 替換圖片／影片

1. 按 `public/media/README.md` 的檔名表放入素材（例如 `public/media/hero-biped.mp4`）。
2. 重新 `npm run build` 或重啟 dev server。
3. 檔案存在時自動取代 placeholder（偵測邏輯：`src/lib/assets.ts`；slot 定義：`src/data/media.ts`）。

未有檔案的 slot 會顯示工程感 placeholder 並標示「素材待補」，不會出現破圖。

### 3. 配置聯絡電郵

```bash
cp .env.example .env.local
# 編輯 .env.local：
# NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
# NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

未配置電郵時，表單**不會假裝寄出**：提交後只會整理諮詢摘要，供使用者複製或以其他方式傳送，並顯示管理員配置提示。配置後會多出「以電郵傳送」按鈕（mailto）。

### 4. 更新平台價格／資料

- 價格列、版本差異、租借注意事項：`src/data/platforms.ts`
- 更新後請同步修改 `lastVerified`；來源未經驗證時保持 `sourceUrl: null`（顯示「向供應商查詢」）。

### 5. 服務方案／客製化／案例內容

`src/data/services.ts`、`src/data/customization.ts`、`src/data/projects.ts`、`src/data/capabilities.ts`。

## 內容守則（請勿違反）

- 不捏造客戶案例、學校合作、獎項、教師評價或活動紀錄。
- 不宣稱自家平台與商用 EDU 產品同級；第三方價格一律標示公開參考價／非澳門正式報價。
- 不保證北京半馬參賽資格或名次；不暗示與 InnoX 或 Unitree 已有合作。
- 已完成的研發方向與規劃中的方向必須清楚區分。
