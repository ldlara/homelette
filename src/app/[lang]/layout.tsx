import type { Metadata, Viewport } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { notFound } from "next/navigation";
import { RevealObserver } from "@/components/RevealObserver";
import { getDict } from "@/content";
import { siteConfig } from "@/content/site";
import { bcp47, hasLocale, locales, ogLocale } from "@/i18n/config";
import "../globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#14392c",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDict(lang);
  return {
    metadataBase: new URL(siteConfig.url),
    title: t.meta.title,
    description: t.meta.description,
    applicationName: siteConfig.name,
    alternates: {
      canonical: `/${lang}`,
      languages: { ...Object.fromEntries(locales.map((l) => [bcp47[l], `/${l}`])), "x-default": "/pt" },
    },
    openGraph: {
      type: "website",
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      siteName: siteConfig.name,
      title: t.meta.shareTitle,
      description: t.meta.description,
      url: `/${lang}`,
    },
    twitter: { card: "summary_large_image", title: t.meta.shareTitle, description: t.meta.description },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    <html lang={bcp47[lang]} className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
