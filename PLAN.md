# SIT Dynamics 官方網站 — 實作計劃

> 狀態：已定稿並開始實作。此文件供後續參考，記錄品牌決定、架構與實作範圍。

## 1. 品牌

- 品牌名稱：**SIT Dynamics**（working name；全部品牌字串集中於 `src/data/site-config.ts`，日後可一處改名）
- Descriptor：Research & Engineering
- 技術焦點：Humanoid Robotics / Control Systems / Engineering Integration
- Tagline：`Research. Build. Verify.` / 中文：`研究，構建，驗證。`
- 支撐句：從模擬到實機，從想法到能夠運作的系統。
- 不保留「弘宇創新」品牌字串；內容以繁體中文（澳門用語）為主，技術名稱保留英文。

## 2. 視覺方向（Cinematic Robotics Research Studio）

- 參考素材：實拍雙足機械人片段（低光實驗室／走廊、暗色機械結構、紅色 LED 及小量紅光、去飽和工業灰、輕微顆粒感、克制對比）
- 色票：
  - Void Black `#111214`
  - Graphite `#27282A`
  - Warm Bone `#E9E6DE`
  - Signal Red `#D9403A`
  - Steel Grey `#909397`
- 完全棄用舊 signal-orange 色票。
- 深色電影感 Hero（55/45）＋大型 4:3 media frame；深色段落與 Warm Bone 編輯排版段落交替。
- 紅色只用於主要 CTA、指示點、細分隔及選定數據。
- 克制工程 overlay：timecode、experiment label、細座標線；不做假 dashboard、霓虹漸變、cyberpunk 裝飾。
- 12 欄 grid、細分隔線、大留白、方正小圓角；字體 Archivo（顯示）＋ Noto Sans TC（內文）＋ IBM Plex Mono（工程標籤）。
- Motion 極少量（hero 淡入、whileInView reveal），全面支援 `prefers-reduced-motion`。

## 3. 技術架構

- Next.js 16（App Router）＋ TypeScript strict ＋ Tailwind CSS v4 ＋ lucide-react ＋ motion
- Server Components 為主；client 只限：Header 手機導覽、ContactForm、Reveal、Timecode
- 無資料庫、無登入、無複雜後端
- 所有服務、客製化、平台、價格、案例、媒體 slot 資料集中於 `src/data/*`
- `src/lib/assets.ts` 以 `fs.existsSync` 偵測 `public/media` 實檔：放入正確檔名即自動取代 placeholder（重建後生效），無需改程式碼

## 4. 頁面與內容

- `/` Hero、Intro（模擬→轉移→驗證流程）、四層服務預覽、What We Build（6 範疇＋狀態）、客製化 teaser、平台選型 teaser、InnoX 參訪 teaser、CTA band
- `/services` MOP 20,000 / 80,000 / 200,000 / 500,000 四層完整交付／適合對象／不包含＋2 個 optional modules（北京半馬準備、深圳參訪，可選、待確認）
- `/customization` 6 張技術卡（既有能力／需可行性評估標籤）＋ 4 步流程＋評估聲明
- `/platforms` 自家低成本雙足、R1／R1 EDU、G1／G1 EDU、Go2 四足公平比較；版本差異、公開參考價表（`lastVerified`、來源未驗證顯示「向供應商查詢」）＋完整免責聲明
- `/projects` 6 個案例類別（已完成／持續開發／概念研究方向），忠於事實，不虛構學校合作
- `/contact` 表單 9 欄位＋8 項目類型＋6 預算選項；未配置 `NEXT_PUBLIC_CONTACT_EMAIL` 時不假裝寄出 → 整理摘要＋複製內容＋管理員配置提示

## 5. 媒體策略

- Hero 影片：純 placeholder（不動用 `~/Downloads` 實拍檔）；日後將檔案放入 `public/media/hero-biped.mp4` 即自動播片
- 全部 placeholder 經 `src/data/media.ts` 中央管理；CSS/SVG 工程感設計，細小角落標籤，不放大字遮蓋
- `public/media/README.md` 列明每個 slot 的將來素材、建議尺寸及檔名

## 6. 驗收

- `npm install` → `npm run build` → `npm run lint` → `tsc --noEmit`
- dev server 逐頁 smoke test（6 頁 200、手機導覽、價格表手機閱讀）
- 根目錄 `README.md` 說明啟動、替換素材、配置聯絡電郵
