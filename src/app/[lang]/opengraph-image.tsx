import { ImageResponse } from "next/og";
import { getDict } from "@/content";
import { hasLocale, defaultLocale } from "@/i18n/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDict(hasLocale(lang) ? lang : defaultLocale);
  const [first, ...rest] = t.hero.title.split(/(?<=\.)\s+/);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14392c",
          color: "#f6f1e4",
          padding: 80,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 44 }}>
          <div style={{ width: 28, height: 40, background: "#d9bf82" }} />
          Homilette
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 72, lineHeight: 1.08 }}>
          <span>{first}</span>
          <span style={{ color: "#d9bf82" }}>{rest.join(" ")}</span>
        </div>
        <div style={{ fontSize: 28, color: "#d9bf82", fontFamily: "sans-serif" }}>{t.hero.launchSoon}</div>
      </div>
    ),
    size,
  );
}
