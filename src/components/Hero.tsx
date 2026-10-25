import Image from "next/image";
import type { Dict } from "@/content";
import type { Locale } from "@/i18n/config";
import { getLaunch } from "@/lib/launch";
import { StudySheet } from "./StudySheet";

export function Hero({ lang, t }: { lang: Locale; t: Dict }) {
  const h = t.hero;
  const launch = getLaunch(lang);
  const lines = h.title.split(/(?<=\.)\s+/);

  return (
    <section id="topo" aria-labelledby="titulo-principal" className="on-dark relative overflow-hidden bg-green text-paper">
      <Image src="/images/library-room-jpg.jpg" alt={h.photoAlt} fill priority sizes="100vw" className="photo-dim drift object-cover object-right" />

      <div className="relative mx-auto max-w-[1440px] px-(--margin) pt-14 pb-20 lg:pt-24 lg:pb-28">
        <h1
          id="titulo-principal"
          data-reveal
          className="font-serif text-[clamp(1.4rem,6.2vw,5.25rem)] leading-[1.04] font-medium tracking-[-0.03em] [font-variation-settings:'opsz'_144,'SOFT'_30]"
        >
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-14 lg:mt-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div>
            <p data-reveal style={{ "--d": "80ms" } as React.CSSProperties} className="max-w-[34ch] text-xl text-paper sm:text-2xl sm:leading-snug">
              {h.description}
            </p>

            <div data-reveal style={{ "--d": "160ms" } as React.CSSProperties} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#lancamento" className="press inline-flex items-center justify-center bg-gold-light px-7 py-4 text-base font-semibold text-green hover:bg-paper">
                {h.cta}
              </a>
              <a href="#recursos" className="inline-flex items-center justify-center px-1 py-3 text-base font-semibold text-paper underline decoration-gold-light decoration-2 underline-offset-[6px]">
                {h.secondaryCta}
              </a>
            </div>

            <p data-reveal style={{ "--d": "240ms" } as React.CSSProperties} className="mt-10 text-lg text-paper">
              {launch.kind === "date" ? (
                <>
                  {h.launchPrefix}{" "}
                  <time dateTime={launch.iso} className="font-semibold text-gold-light">
                    {launch.label}
                  </time>
                </>
              ) : launch.kind === "period" ? (
                <>
                  {h.periodPrefix} <strong className="font-semibold text-gold-light">{launch.label}</strong>
                </>
              ) : (
                <strong className="font-semibold text-gold-light">{h.launchSoon}</strong>
              )}
            </p>
          </div>

          <div data-reveal style={{ "--d": "200ms" } as React.CSSProperties}>
            <StudySheet t={t.sheet} />
          </div>
        </div>
      </div>
    </section>
  );
}
