import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#111214",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 28,
              height: 28,
              border: "2px solid #E9E6DE",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ width: 10, height: 10, backgroundColor: "#D9403A" }} />
          </div>
          <div
            style={{
              color: "#909397",
              fontSize: 22,
              letterSpacing: 6,
            }}
          >
            SIT DYNAMICS — RESEARCH & ENGINEERING
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#E9E6DE",
              fontSize: 96,
              fontWeight: 600,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            Research. Build. Verify.
          </div>
          <div
            style={{
              marginTop: 28,
              color: "#909397",
              fontSize: 28,
              letterSpacing: 1,
            }}
          >
            Humanoid Robotics / Control Systems / Engineering Integration
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#909397",
            fontSize: 20,
            letterSpacing: 4,
            borderTop: "1px solid rgba(233,230,222,0.15)",
            paddingTop: 28,
          }}
        >
          <span>SIM2REAL — BIPED — RL</span>
          <span>MACAU</span>
        </div>
      </div>
    ),
    size,
  );
}
