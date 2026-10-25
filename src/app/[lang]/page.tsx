import { notFound } from "next/navigation";
import { Audience } from "@/components/Audience";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Launch } from "@/components/Launch";
import { Routine } from "@/components/Routine";
import { getDict } from "@/content";
import { hasLocale } from "@/i18n/config";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDict(lang);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-green focus:px-5 focus:py-2.5 focus:text-paper"
      >
        {t.a11y.skip}
      </a>
      <Header lang={lang} t={t} />
      <main id="conteudo">
        <Hero lang={lang} t={t} />
        <Features t={t} />
        <Routine t={t} />
        <Audience t={t} />
        <Launch lang={lang} t={t} />
        <Faq lang={lang} t={t} />
      </main>
      <Footer lang={lang} t={t} />
    </>
  );
}
