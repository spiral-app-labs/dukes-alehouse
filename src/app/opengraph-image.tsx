import { ImageResponse } from "next/og";
import { dukeBrandAssets, dukeBusiness } from "@/lib/siteData";

/* eslint-disable @next/next/no-img-element */

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
          position: "relative",
          background: "#0b090c",
          color: "#f1ebde",
          overflow: "hidden",
          fontFamily: "Georgia, serif",
        }}
      >
        <img
          src={dukeBrandAssets.hero}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(6,6,8,0.92) 0%, rgba(6,6,8,0.78) 42%, rgba(6,6,8,0.35) 100%), linear-gradient(180deg, rgba(6,6,8,0.2) 0%, rgba(6,6,8,0.74) 100%)",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            padding: "56px 64px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "64%",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  letterSpacing: "0.34em",
                  textTransform: "uppercase",
                  color: "#d7bb7a",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Downtown Crystal Lake tavern
              </div>
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.92 }}>
                <div style={{ display: "flex", fontSize: 92, fontWeight: 700 }}>Duke&apos;s</div>
                <div style={{ display: "flex", fontSize: 54, color: "#de9561" }}>
                  Alehouse &amp; Kitchen
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  maxWidth: 640,
                  fontSize: 30,
                  lineHeight: 1.35,
                  color: "rgba(241,235,222,0.82)",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Real room proof, official guest reviews, direct ordering, Tock reservations, and
                the live beer board.
              </div>
            </div>

            <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
              {[
                "Official guest reviews",
                "Toast ordering live",
                "Tock reservations live",
                "Untappd beer board",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    border: "1px solid rgba(241,235,222,0.16)",
                    borderRadius: 999,
                    padding: "12px 18px",
                    fontSize: 20,
                    color: "rgba(241,235,222,0.84)",
                    fontFamily: "Arial, sans-serif",
                    background: "rgba(11,9,12,0.38)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "flex-end",
              justifyContent: "space-between",
              width: "30%",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 300,
                padding: "22px 24px",
                borderRadius: 30,
                border: "1px solid rgba(241,235,222,0.14)",
                background: "linear-gradient(180deg, rgba(11,9,12,0.62), rgba(11,9,12,0.3))",
                boxShadow: "0 18px 44px rgba(0,0,0,0.3)",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <img
                src={dukeBrandAssets.logo}
                alt=""
                style={{ width: 132, height: 132, objectFit: "contain" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  fontFamily: "Arial, sans-serif",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 18,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#d7bb7a",
                  }}
                >
                  Real proof rails
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 26,
                    lineHeight: 1.35,
                    color: "rgba(241,235,222,0.9)",
                  }}
                >
                  Order, reserve, send the beer board, and show the room in one link.
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 6,
                textAlign: "right",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 24,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#d7bb7a",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Founder-send ready
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 28,
                  maxWidth: 330,
                  lineHeight: 1.3,
                  color: "rgba(241,235,222,0.9)",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                {dukeBusiness.shortName} looks like a real downtown plan before the first scroll.
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
