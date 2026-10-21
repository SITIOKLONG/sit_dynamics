import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const fontData = await readFile(
    path.join(process.cwd(), "src/app/_fonts/og-cjk.ttf"),
  );
  const font = fontData.buffer.slice(
    fontData.byteOffset,
    fontData.byteOffset + fontData.byteLength,
  ) as ArrayBuffer;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F0EEE7",
          border: "1px solid #A7AAA8",
          padding: 64,
          fontFamily: "OG CJK",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 28,
              height: 28,
              border: "2px solid #202124",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ width: 10, height: 10, backgroundColor: "#762F32" }} />
          </div>
          <div
            style={{
              color: "#40433F",
              fontSize: 20,
              letterSpacing: 6,
            }}
          >
            SIT DYNAMICS — SCIENCE · INNOVATION · TECHNOLOGY
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#202124",
              fontSize: 82,
              fontWeight: 400,
              letterSpacing: -3,
              lineHeight: 1.02,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>打造能力更強</div>
            <div style={{ display: "flex" }}>
              的人型機械人<span style={{ color: "#762F32" }}>。</span>
            </div>
          </div>
          <div
            style={{
              color: "#40433F",
              fontSize: 24,
              letterSpacing: 1,
              marginTop: 24,
            }}
          >
            讓機械人像人一樣運動。
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#40433F",
            fontSize: 20,
            letterSpacing: 4,
            borderTop: "1px solid #A7AAA8",
            paddingTop: 26,
          }}
        >
          <span>人型機械人 · 動力學 · 控制 · 模擬到實機</span>
          <span>SIT / 研發</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "OG CJK",
          data: font,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
