# SIT Dynamics — 實作說明

## 專案目標

將網站建立為完整、專業的單頁式人型機械人研發公司網站：以 Bone White 與 Graphite 為主的克制研究美學、深色工程紀錄區、清楚的技術敘事，以及四個可比較的商業方案與獨立旗艦願景。不使用 SaaS 卡片模板、虛構案例或未經驗證的性能數據。

## 架構

- Next.js App Router、React、TypeScript strict、Tailwind CSS 4。
- 單一路由 `/`，由八個內容區塊、共用 Header 及 Footer 組成。
- 舊路由 redirect 至對應 anchor。
- 內容及價格集中於 `src/data/`。
- 共用 UI：`Button`、`SectionLabel`、`SectionHeading`、`Tag`、`Reveal`、`MediaFrame`。
- 表單傳送透過 `NEXT_PUBLIC_ENQUIRY_ENDPOINT` 或 `NEXT_PUBLIC_CONTACT_EMAIL` 配置；未配置時保持 prepare-and-copy 模式。

## 內容對照

| 區域 | 來源 |
| --- | --- |
| 品牌、導航、聯絡設定、SEO | `src/data/site-config.ts` |
| 技術能力 | `src/data/capabilities.ts` |
| 工程實踐 | `src/data/engineering.ts` |
| 產品方案及旗艦願景 | `src/data/solutions.ts` |
| 研發流程 | `src/data/approach.ts` |
| 表單選項 | `src/data/enquiry.ts` |
| 素材位置及標籤 | `src/data/media.ts` |

## 設計 Tokens

- Bone White `#F0EEE7`：主要背景、留白、首頁及研究區
- Desert Sand `#C8B99E`：次要區塊、圖像暖調及細節；不作為西部主題裝飾
- Graphite `#202124`：主文字、深色工程區及旗艦區
- Oxide Red `#762F32`：品牌重點、CTA 及少量識別元素
- Laboratory Grey `#A7AAA8`：邊框、技術標籤及次要資訊
- Manrope 英文標題 / Inter 正文 / IBM Plex Mono 技術標籤 / 系統 CJK fallback
- 直角、細線邊框、工程網格暫代素材、充足留白
- 預設淺色主題；工程紀錄、旗艦願景、Footer 及媒體框使用 `.theme-dark` 反轉 Graphite / Bone White 角色
- 所有區塊使用不同視覺節奏：大幅主視覺、編輯式文字、工程紀錄、方案比較、獨立旗艦願景

## 完成清單

- [x] 單頁結構、anchor 導航及 scrollspy
- [x] 可存取手機選單（Escape、focus trap、body scroll lock）
- [x] Hero、Research Vision、Capabilities、Engineering in Practice、Solutions、Flagship、Approach、Contact、Footer
- [x] 四個商業價格及獨立 1,000,000 港元旗艦願景
- [x] 精確暫代素材標籤及中央素材配置
- [x] 透明聯絡表單，不假裝完成未實作操作
- [x] Metadata、Open Graph、sitemap、robots、404
- [x] 舊路由 redirects
- [x] 中文內容、CJK fallback、鍵盤焦點及 reduced-motion 支援
- [ ] 以原創或已授權素材替換暫代素材
- [ ] 配置聯絡電郵或表單端點
- [ ] 上線前完成法律及使用權審查
