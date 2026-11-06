import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = "Alexander Ubaka, Full-Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "src/assets/og-photo.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 80px",
          background: "#faf8f4",
          color: "#1a1917",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 56,
                borderRadius: 14,
                background: "#0f766e",
                color: "white",
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              AU
            </div>
            <div style={{ fontSize: 26, color: "#0f766e", fontWeight: 700 }}>{site.role}</div>
          </div>
          <div style={{ fontSize: 72, fontWeight: 800, marginTop: 28, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ fontSize: 36, lineHeight: 1.3, marginTop: 20, color: "#44403c" }}>{site.headline}</div>
        </div>
        <img
          src={src}
          width={340}
          height={340}
          alt=""
          style={{ borderRadius: 40, border: "10px solid #e6f3f1", objectFit: "cover" }}
        />
      </div>
    ),
    size,
  );
}
