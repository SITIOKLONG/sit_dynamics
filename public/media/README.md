# 媒體素材

此目錄存放網站的真實圖片及影片素材。**尚未提供真實檔案的媒體會以程式碼生成的設計化暫代素材 顯示。** 將檔案以下表精確檔名放入此目錄，重新 build（`npm run build`）或重啟 dev server 後，`MediaFrame` 會自動偵測並替換暫代素材，無需修改元件。

原始母帶已移除，只保留 `public/media/` 內經剪裁及壓縮的網頁版本。日後如需重新剪輯，請先從備份取回母帶，不要直接放入 `public/`。

素材偵測邏輯位於 `src/lib/assets.ts`；所有素材位置定義於 `src/data/media.ts`。

## 影片放置與播放

目前有七個影片插槽，請把檔案放在 `public/media/`：

- 首頁主視覺（機身頂部紅燈特寫）：`public/media/hero-humanoid-top.mp4`，封面圖為 `public/media/hero-humanoid-top-poster.jpg`
- 研發理念：`public/media/biped-walking.mp4`，封面圖為 `public/media/biped-walking-poster.jpg`
- 技術能力／機械設計（靈巧手）：`public/media/dex-hand.mp4`，封面圖為 `public/media/dex-hand-poster.jpg`
- 技術能力／運動控制（MoveIt 工具示範）：`public/media/moveit-control.mp4`，封面圖為 `public/media/moveit-control-poster.jpg`
- 技術能力／強化學習：`public/media/reinforcement-learning.mp4`，封面圖為 `public/media/reinforcement-learning-poster.jpg`
- 技術能力／模擬到實機（實機行走）：`public/media/integration-walking.mp4`，封面圖為 `public/media/integration-walking-poster.jpg`
- 旗艦研發願景／全尺寸人型（ENCOS 參考片段）：`public/media/encos-humanoid.mp4`，封面圖為 `public/media/encos-humanoid-poster.jpg`

影片預設靜音、循環，進入視窗約 30% 後自動播放；滑出視窗或切換到其他瀏覽器分頁時暫停。若系統開啟「減少動態效果」，影片不會自動播放，並顯示原生播放控制。首頁紅燈特寫為 4.8 秒來回循環；模擬到實機使用走廊實機行走片段；MoveIt 片段為第三方工具示範。

其餘插槽目前設定為圖片。如要把某個插槽改為影片，請在 `src/data/media.ts` 將該筆資料的 `kind` 改為 `"video"`，把 `src` 指向 `public/media/` 內的 MP4，並設定對應的 `-poster.jpg` 封面圖。第三方素材與授權要求同樣適用。

## 全站背景音樂

`public/media/westworld-main-title.mp3` 會由全站浮動播放器自動偵測；檔案不存在時播放器不會顯示。現時音檔由使用者提供，發佈前仍須確認授權；不要從 YouTube 抽取、下載或重新託管未授權錄音。

## 替換規則

1. 使用下表列出的精確檔名。
2. 加入素材後重新 build 或重啟 dev server。
3. 若檔案不存在，網站會保留設計化暫代素材 及其用途標籤。
4. 只使用原創影片、照片或已授權概念渲染。任何第三方機械人、人物或場地，發佈前必須確認使用權。
5. 不得把第三方機械人平台呈現為 SIT Dynamics 自行設計的產品。

## 素材位置

| 檔名 | 類型 | 比例 | 建議規格 | 位置 |
| --- | --- | --- | --- | --- |
| `hero-humanoid-top.mp4` | Video | 4:5 | 已提供：640×800 頂部裁切 · H.264 · 30 fps · 4.8 秒來回循環 · 約 216 KB · 無音軌 | 首頁主視覺：機身頂部紅燈特寫 |
| `hero-humanoid-top-poster.jpg` | Image | 4:5 | 已提供：640×800 JPG · 約 19 KB | 首頁影片封面圖 |
| `biped-walking.mp4` | Video | 4:3 | 已提供：960×720 · H.264 · 12.4 秒 · 約 3.3 MB · 無音軌 | 研發理念 |
| `biped-walking-poster.jpg` | Image | 4:3 | 已提供：960×720 JPG | 研發理念影片 封面圖 |
| `dex-hand.mp4` | Video | 4:3 | 已提供：1200×900 · H.264 · 30 fps · 18.8 秒 · 約 2.2 MB · 無音軌 | 技術能力：機械設計與動力學（靈巧手） |
| `dex-hand-poster.jpg` | Image | 4:3 | 已提供：1200×900 JPG | 機械設計影片封面圖 |
| `reinforcement-learning.mp4` | Video | 16:10 | 已提供：1024×640 · H.264 · 15 秒 · 約 4 MB · 無音軌 | 強化學習 |
| `reinforcement-learning-poster.jpg` | Image | 16:10 | 已提供：1024×640 JPG | 強化學習影片 封面圖 |
| `moveit-control.mp4` | Video | 4:3 | 已提供：1200×900 · H.264 · 30 fps · 28.4 秒 · 約 3.4 MB · 無音軌 | 技術能力：運動控制（MoveIt 工具示範） |
| `moveit-control-poster.jpg` | Image | 4:3 | 已提供：1200×900 JPG | MoveIt 影片封面圖 |
| `integration-walking.mp4` | Video | 4:3 | 已提供：960×720 走廊實機行走 · H.264 · 30 fps · 46.7 秒 · 約 3.8 MB · 無音軌 | 技術能力：模擬到實機與系統整合 |
| `integration-walking-poster.jpg` | Image | 4:3 | 已提供：960×720 JPG | 模擬到實機影片封面圖 |
| `planA.jpeg` | Image | 約 3:2 | 已提供：1691×1122 JPG · 743 KB | 方案一／二：工作坊與工程試點（含可辨識人物，須確認同意） |
| `planB.jpg` | Image | 3:4 | 已提供：960×1280 JPG · 222 KB | 方案二：工程試點第二張照片 |
| `planC.webp` | Image | 4:3 | 已提供：1080×809 WebP · 93 KB（介面以 3:2 裁切） | 方案三／四：開發套件與研發教育（ENCOS 硬件參考） |
| `planD.jpeg` | Image | 4:3 | 已提供：4032×3024 JPG · 3.0 MB | 方案四：研發教育第二張照片 |
| `encos-humanoid.mp4` | Video | 16:9 | 已提供：1280×720 · H.264 · 30 fps · 16.5 秒 · 約 4.9 MB · 無音軌 | 旗艦研發願景：ENCOS 全尺寸人型參考片段 |
| `encos-humanoid-poster.jpg` | Image | 16:9 | 已提供：1280×720 JPG | 旗艦影片封面圖 |
| `westworld-main-title.mp3` | Audio | — | 已提供：116.5 秒 · 320 kbps · 約 4.5 MB（使用者提供，發佈前須確認授權） | 全站背景音樂 |

## 內容誠信

- 不要使用 stock 圖片暗示不存在的 SIT Dynamics 產品、能力、團隊、客戶或成果。
- 所有第三方機械人模型必須清楚標示，並只使用已確認授權的素材；不得把第三方平台呈現為 SIT Dynamics 所有。
- 概念渲染必須持續標示為概念願景。
- 可辨識人物須取得同意；實驗室、機構或活動場景須取得拍攝及發佈許可。
- 素材應保持低調、以深色工程環境配合暖色燈光為主，與 Graphite、Bone White 及 Desert Sand 的媒介框一致；避免霓虹、HUD 疊加或虛構遙測數據。
- 影片可使用以下指令壓縮：

  `ffmpeg -i input.mp4 -vf "crop=ih*4/5:ih,scale=640:800" -c:v libx264 -crf 24 -pix_fmt yuv420p -an -movflags +faststart hero-humanoid-top.mp4`

## 目錄

- `placeholders/`：預留位置；目前暫代素材由程式碼生成，不需要圖檔。
