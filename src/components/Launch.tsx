import type { Dict } from "@/content";
import type { Locale } from "@/i18n/config";
import { getLaunch } from "@/lib/launch";
import { SignupForm } from "./SignupForm";

export function Launch({ lang, t }: { lang: Locale; t: Dict }) {
  const l = t.launch;
  const launch = getLaunch(lang);
  const big = "font-serif font-medium tracking-[-0.025em] [font-variation-settings:'opsz'_144,'SOFT'_30]";

  return (
    <section id="lancamento" aria-labelledby="titulo-lancamento" className="on-dark relative overflow-hidden bg-green-soft text-paper">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-(--margin) pt-24 lg:min-h-[80svh] lg:grid-cols-12 lg:gap-x-8 lg:pt-28">
        <div data-reveal className="flex flex-col justify-between gap-10 lg:col-span-5 lg:pb-28">
          {launch.kind === "date" ? (
            <p className={`${big} text-[clamp(2.25rem,4.4vw,4rem)] leading-[1.05]`}>
              <span className="block text-xl font-normal tracking-normal sm:text-2xl">{l.prefix}</span>
              <time dateTime={launch.iso} className="text-gold-light">
                {launch.label}
              </time>
            </p>
          ) : launch.kind === "period" ? (
            <p className={`${big} text-[clamp(2.25rem,4.4vw,4rem)] leading-[1.05]`}>
              <span className="block text-xl font-normal tracking-normal sm:text-2xl">{l.periodPrefix}</span>
              <span className="text-gold-light">{launch.label}</span>
            </p>
          ) : (
            <p className={`${big} text-[clamp(3rem,7vw,6rem)] leading-[1] text-gold-light`}>{l.soon}</p>
          )}
          {launch.kind === "soon" ? <p className="max-w-[28ch] text-xl sm:text-2xl">{l.soonNote}</p> : <p className="max-w-[28ch] text-xl sm:text-2xl">{l.support}</p>}
        </div>

        <div data-reveal style={{ "--d": "120ms" } as React.CSSProperties} className="lg:col-span-6 lg:col-start-7">
          <div className="-mb-16 rotate-[1.5deg] bg-paper px-6 pt-10 pb-28 text-center text-ink sm:px-12 sm:pt-14 lg:-mb-24">
            <h2
              id="titulo-lancamento"
              className="font-serif text-[clamp(1.75rem,3vw,2.25rem)] leading-tight font-medium text-green [font-variation-settings:'opsz'_96,'SOFT'_40]"
            >
              {l.cardTitle}
            </h2>
            <p className="mx-auto mt-3 mb-8 max-w-sm text-lg">{l.support}</p>
            <SignupForm t={l} />
          </div>
        </div>
      </div>
    </section>
  );
}
