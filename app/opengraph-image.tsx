import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "DevUtils – Free Developer Utilities";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#04040F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 30% 50%, rgba(124,58,237,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(167,139,250,0.1) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #7C3AED, #6366F1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            D/
          </div>
          <span style={{ color: "#E0E7FF", fontSize: "36px", fontWeight: "bold" }}>
            Dev<span style={{ color: "#A78BFA" }}>Utils</span>
          </span>
        </div>

        <h1
          style={{
            color: "#E0E7FF",
            fontSize: "64px",
            fontWeight: "bold",
            textAlign: "center",
            margin: "0 0 16px",
            lineHeight: 1.1,
          }}
        >
          Tools built for{" "}
          <span style={{ color: "#A78BFA" }}>developers</span>
        </h1>

        <p
          style={{
            color: "#A5B4FC",
            fontSize: "24px",
            textAlign: "center",
            margin: "0 0 40px",
            maxWidth: "700px",
          }}
        >
          18+ free utilities · JSON · Base64 · UUID · Password · Hashing
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {["JSON Formatter", "Password Generator", "UUID Generator", "Hash Generator"].map(t => (
            <div
              key={t}
              style={{
                background: "rgba(167,139,250,0.1)",
                border: "1px solid rgba(167,139,250,0.3)",
                borderRadius: "999px",
                padding: "8px 16px",
                color: "#A78BFA",
                fontSize: "14px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}