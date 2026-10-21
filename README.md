# SIT Dynamics 官方網站

SIT Dynamics 的單頁式品牌網站，內容涵蓋人型機械人研究、機械動力學、運動控制、強化學習及模擬到實機部署。

**品牌定位：** 專注人型機械人、機械人運動控制與實際系統研發的深科技公司。

**品牌標語：** 讓機械人像人一樣運動。

## 視覺語言

- **Bone White `#F0EEE7`**：主要背景、留白、首頁及研究區。
- **Desert Sand `#C8B99E`**：次要區塊、圖像暖調及細節，避免西部主題化。
- **Graphite `#202124`**：主文字、深色工程紀錄及旗艦願景。
- **Oxide Red `#762F32`**：品牌重點、CTA 及少量識別元素。
- **Laboratory Grey `#A7AAA8`**：邊框、技術標籤及次要資訊。
- 深色 `.theme-dark` 區段用於工程紀錄、旗艦願景、Footer 及媒體框；其餘頁面保持 Bone White 研究感。

## 技術架構

- Next.js 16（App Router）
- React 19
- TypeScript（strict）
- Tailwind CSS 4
- Motion（克制、可關閉的進場效果）
- Lucide icons
- 字體：Manrope（英文標題）、Inter（正文）、IBM Plex Mono（技術標籤），中文使用系統 CJK 字體 fallback

## 本機執行

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run typecheck
npm run build
npm run start
```

## HKUST Personal Homepage 部署

網站以靜態輸出部署到 HKUST Personal Homepage（`ilsit`）：

```bash
npm run build:static
```

輸出目錄為 `out/`（約 33 MB，低於 100 MB 配額）。先連接 HKUST VPN，再將 `out/` **內的所有內容**上傳到遠端 `/public_html`：

- Host：`sftp.student.ust.hk`（Port 22）
- Username：`ilsit`
- 公開網址：`https://ilsit.student.ust.hk`

`public/.htaccess` 會複製到 `out/.htaccess`，負責舊路徑 redirect、404 頁、Open Graph 圖片 MIME 及靜態資源快取。HKUST 只提供靜態檔案及 PHP，不支援 Node.js server，因此不要上傳 `.next/` 或使用 `npm run start`。使用圖形化 FTP 工具時，請開啟「顯示隱藏檔案」，確保 `.htaccess` 一併上傳。目前網站沒有使用 MySQL；表單在未配置 `NEXT_PUBLIC_ENQUIRY_ENDPOINT` 前會保持「準備並複製」模式。

## 頁面結構

`/` 為完整單頁網站，區塊順序如下：

1. 首頁主視覺（Hero）
2. 研究願景（`#research`）
3. 技術能力（`#capabilities`）
4. 旗艦研發願景（`#vision`）
5. 產品方案（`#solutions`）
6. 聯絡我們（`#contact`）

原有路由會 redirect 至對應區塊：Node server 由 `next.config.ts` 處理，靜態部署則由 `public/.htaccess` 處理 `/services`、`/customization`、`/platforms`、`/projects`、`/contact`。

## 內容與價格

旗艦願景及四個商業方案集中於 `src/data/solutions.ts`，價格由 `src/lib/pricing.ts` 格式化。旗艦願景先行，隨後列出商業方案。

- 全尺寸人型機械人研發計劃 — 1,000,000 港元（旗艦願景；須經可行性評估及獨立提案，並非現貨或已成交價格）
- 機械人工作坊與示範 — 20,000 港元
- 工程試點計劃 — 80,000 港元
- 雙足開發套件 — 200,000 港元
- 機械人研發教育計劃 — 300,000 港元

所有價格均為現階段方案定位，正式報價須按實際交付範圍確認。

導航、技術能力、產品方案、表單選項及聯絡設定集中於 `src/data/`。

## 媒體素材替換

尚未提供真實檔案的視覺素材由程式碼生成設計化暫代素材，不會出現破圖。素材位置與精確標籤定義於 `src/data/media.ts`；將真實檔案放入 `public/media/` 並使用 [`public/media/README.md`](public/media/README.md) 列出的檔名，`MediaFrame` 會自動偵測並替換，無需修改元件。

不得將第三方機械人影片、模型或照片呈現為 SIT Dynamics 自行設計的產品。使用任何素材前須確認授權，並清楚標示概念渲染。

旗艦研發願景區使用標示為 ENCOS 的第三方參考片段，畫面屬第三方，並非 SIT Dynamics 自行研發產品。

全站背景音樂播放器會偵測 `public/media/westworld-main-title.mp3`；現時音檔由使用者提供，發佈前須確認授權，不可從 YouTube 抽取或重新託管未授權錄音。

## 聯絡表單

目前未配置電郵地址或表單傳送端點。表單刻意保持透明：未配置時只會整理可複製的查詢內容，並明確顯示「未寄出」，不會假裝傳送成功。

在 `.env.local` 設定以下任一變數（參考 `.env.example`）：

```bash
# 選項 A — JSON POST 端點
NEXT_PUBLIC_ENQUIRY_ENDPOINT=https://example.com/api/enquiries

# 選項 B — mailto fallback
NEXT_PUBLIC_CONTACT_EMAIL=enquiries@example.com

# Canonical URL、sitemap 及 metadata
NEXT_PUBLIC_SITE_URL=https://www.example.com
```

- 若設定 `NEXT_PUBLIC_ENQUIRY_ENDPOINT`，表單會以 JSON POST 傳送查詢。
- 否則若設定 `NEXT_PUBLIC_CONTACT_EMAIL`，結果會提供 mailto 連結及可複製文字。
- 若兩者均未設定，結果會顯示「尚未配置傳送方式」及可複製的查詢內容。

請勿公開虛構的電話、地址、公司註冊資料、社交帳戶或法律資訊。

## 內容誠信

- 不宣稱任何客戶、推薦、獎項、論文、團隊成員或合作夥伴。
- 工程實踐區標示為「研發中」的素材位置，不代表已交付項目或客戶案例。
- 半馬挑戰只作為未來研發挑戰目標，不宣稱已實現或保證完成。
- 全尺寸人型機械人研發計劃為概念願景，不是已售出或現成產品。
- 上線前必須以原創或已授權素材替換其餘暫代素材，並完成法律及使用權審查。
