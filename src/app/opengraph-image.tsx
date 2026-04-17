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
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top left, rgba(212,162,78,0.35), transparent 30%), radial-gradient(circle at bottom right, rgba(184,115,51,0.3), transparent 28%), linear-gradient(180deg, #1a1a2e, #0f0f1a)",
          color: "#FAF3E0",
          padding: "72px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: "0.45em", textTransform: "uppercase", color: "#D4A24E" }}>
          Crystal Lake
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700 }}>Duke&apos;s</div>
          <div style={{ fontSize: 64, color: "#D4A24E" }}>Alehouse &amp; Kitchen</div>
          <div style={{ marginTop: 26, fontSize: 30, color: "rgba(250,243,224,0.72)" }}>
            Order direct • Reserve on Tock • Explore the beer list
          </div>
        </div>
        <div style={{ display: "flex", gap: "24px", fontSize: 28 }}>
          <div>Downtown Crystal Lake</div>
          <div>Weekly room rhythm</div>
          <div>Mixed-group menu</div>
        </div>
      </div>
    ),
    size
  );
}
