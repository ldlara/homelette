import Image from "next/image";
import type { Dict } from "@/content";

/** Pontas de serra na borda inferior da folha, como um recibo destacado. */
const TEETH = 16;
const zigzag = `polygon(0 0, 100% 0, ${Array.from({ length: TEETH + 1 }, (_, i) => `${100 - (i * 100) / TEETH}% ${i % 2 === 0 ? "100%" : "calc(100% - 14px)"}`).join(", ")})`;

export function Routine({ t }: { t: Dict }) {
  const r = t.routine;
  return (
    <section id="como-funciona" aria-labelledby="titulo-rotina" className="on-dark bg-green text-paper">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-(--margin) py-24 lg:grid-cols-12 lg:gap-x-8 lg:py-32">
        <div className="lg:col-span-6">
          <h2
            id="titulo-rotina"
            data-reveal
            className="h2"
          >
            {r.title}
          </h2>
          <p data-reveal style={{ "--d": "80ms" } as React.CSSProperties} className="mt-6 max-w-xl text-lg text-paper lg:text-xl">
            {r.intro}
          </p>
          <div data-reveal style={{ "--d": "160ms" } as React.CSSProperties} className="relative mt-12 aspect-[16/10] max-w-2xl">
            <Image src="/images/hebrew-spread-jpg.jpg" alt={t.audience.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="photo object-cover" />
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <div data-reveal style={{ clipPath: zigzag, "--d": "120ms" } as React.CSSProperties} className="bg-sheet px-8 pt-10 pb-16 text-ink sm:px-10">
            <p className="font-serif text-3xl leading-tight font-medium text-green [font-variation-settings:'opsz'_96,'SOFT'_40]">{r.slipTitle}</p>
            <ol className="mt-8 space-y-9">
              {r.steps.map((s) => (
                <li key={s.title}>
                  <p className="text-lg font-semibold text-gold-ink">{s.lead}</p>
                  <p className="mt-1 font-serif text-2xl leading-snug font-medium text-green [font-variation-settings:'opsz'_48,'SOFT'_40]">{s.title}</p>
                  <p className="mt-2 text-[1.05rem] text-ink">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
