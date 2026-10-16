# Media Assets / 媒體素材指南

本目錄存放網站的真實圖片及影片。**所有媒體目前均為 code-generated placeholder**；將正確檔名的檔案放入 `public/media/` 後，重建網站（或重新啟動 dev server）即會自動取代對應 placeholder，無需修改任何程式碼。

偵測邏輯位於 `src/lib/assets.ts`；每個 slot 的定義集中在 `src/data/media.ts`。

## 替換規則

1. 檔名必須完全一致（見下表）。
2. 重新執行 `npm run build` 或重啟 `npm run dev`。
3. 如某個 slot 未有對應檔案，會顯示設計好的工程感 placeholder 並標示「素材待補」。

## Slot 一覽

| 檔名 | 類型 | 比例 | 建議規格 | 用途 |
| --- | --- | --- | --- | --- |
| `hero-biped.mp4` | 影片 | 4:3 | 1600×1200 · H.264 MP4 · 15–30 秒無縫循環 · ≤15 MB · 無音軌 | 首頁 Hero 主視覺 |
| `hero-biped-poster.jpg` | 圖片 | 4:3 | 1600×1200 · JPG · ≤400 KB | Hero 影片載入前封面 |
| `biped-walk.jpg` | 圖片 | 4:3 | 1600×1200 · JPG/WebP · ≤500 KB | 雙足實機行走（案例 01） |
| `control-sim.jpg` | 圖片 | 3:2 | 1800×1200 · JPG/WebP · ≤500 KB | 控制程式與模擬環境（案例 02） |
| `hardware-detail.jpg` | 圖片 | 4:3 | 1600×1200 · JPG/WebP · ≤500 KB | 馬達、線材、電子及機械結構（案例 03） |
| `experiment-chart.png` | 圖表 | 16:9 | 1600×900 · PNG · ≤300 KB | 實驗數據圖表（案例 04）；請使用真實數據 |
| `student-lab.jpg` | 圖片 | 3:2 | 1800×1200 · JPG/WebP · ≤500 KB | 學生工程實驗（案例 05） |
| `annual-program.jpg` | 圖片 | 3:2 | 1800×1200 · JPG/WebP · ≤500 KB | 年度項目里程碑與展示（案例 06） |
| `innox-visit.jpg` | 圖片 | 3:2 | 1800×1200 · JPG/WebP · ≤500 KB | 深圳參訪（可選模組；須取得授權後方可公開） |
| `beijing-marathon.jpg` | 圖片 | 3:2 | 1800×1200 · JPG/WebP · ≤500 KB | 北京半馬準備（可選模組；須遵守賽會及肖像規定） |

## 內容守則

- 只使用真實素材：不使用 stock photo 假裝成自家產品或客戶案例。
- 涉及學生、參訪或賽事的相片，須取得肖像同意及相關機構授權。
- 涉及第三方平台（Unitree 等）的素材，須確認使用權限。
- 影片建議先去飽和、保持低光氛圍，與品牌視覺一致（Void Black 背景、Signal Red 紅光細節）。
- 建議先壓縮：影片可用 `ffmpeg -i input.mp4 -vf scale=1600:1200 -c:v libx264 -crf 24 -an -movflags +faststart hero-biped.mp4`。

## 目錄

- `placeholders/`：保留目錄；placeholder 由程式碼生成，無需圖檔。
