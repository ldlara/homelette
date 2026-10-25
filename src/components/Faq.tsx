import type { Dict } from "@/content";
import type { Locale } from "@/i18n/config";
import { getLaunch } from "@/lib/launch";

export function Faq({ lang, t }: { lang: Locale; t: Dict }) {
  const f = t.faq;
  const launch = getLaunch(lang);

  const answer = (item: Dict["faq"]["items"][number]) => {
    const l = "launch" in item ? (item.launch as { withDate: string; withPeriod: string; soon: string }) : null;
    if (!l) return item.a;
    if (launch.kind === "date") return l.withDate.replace("{data}", launch.label);
    if (launch.kind === "period") return l.withPeriod.replace("{data}", launch.label);
    return l.soon;
  };

  return (
    <section id="faq" aria-labelledby="titulo-faq" className="bg-paper">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-(--margin) py-24 lg:grid-cols-12 lg:gap-x-8 lg:py-32">
        <h2
          id="titulo-faq"
          data-reveal
          className="font-serif text-[clamp(2rem,3.2vw,3rem)] leading-[1.05] font-medium tracking-[-0.02em] text-green [font-variation-settings:'opsz'_144,'SOFT'_30] lg:col-span-3"
        >
          {f.title}
        </h2>
        <div data-reveal style={{ "--d": "100ms" } as React.CSSProperties} className="text-[1.0625rem] leading-[1.6] lg:col-span-8 lg:col-start-5 lg:columns-2 lg:gap-14">
          {f.items.map((item) => (
            <p key={item.q} className="mb-5 break-inside-avoid">
              <strong className="font-semibold text-green">{item.q}</strong> {answer(item)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
