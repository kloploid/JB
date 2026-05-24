import { ImageResponse } from "next/og";

export const alt = "SomaSensus — Yana Belova · Massaaž Tallinnas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fcfaf6",
          backgroundImage:
            "radial-gradient(at 85% 15%, rgba(243,228,216,0.85), transparent 55%), radial-gradient(at 15% 85%, rgba(182,199,179,0.7), transparent 55%)",
          color: "#2a2724",
          fontFamily: "Georgia, serif",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 32,
            letterSpacing: "0.32em",
            color: "#6e8c71",
            fontFamily: "system-ui, sans-serif",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#6e8c71",
            }}
          />
          Massaažiteraapia · Tallinn
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontSize: 130,
            fontWeight: 300,
            letterSpacing: "-0.025em",
            lineHeight: 1,
          }}
        >
          <span>soma</span>
          <span style={{ fontWeight: 500 }}>sensus</span>
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 30,
            color: "#6b6862",
            fontFamily: "system-ui, sans-serif",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.35,
          }}
        >
          Vabasta pinge · Taasta liikuvus · Leia tasakaal
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 22,
            color: "#87827a",
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          Yana Belova — Pelgulinna Tervisemaja & Lasnamäe
        </div>
      </div>
    ),
    { ...size },
  );
}
