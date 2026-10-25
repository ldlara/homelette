"use client";

import { useId, useRef, useState } from "react";
import type { Dict } from "@/content";

type Tab = "outline" | "dictionary" | "plan";
const order: Tab[] = ["outline", "dictionary", "plan"];

/** Folha de estudo ilustrativa: o visitante alterna entre esboço, dicionário e plano. */
export function StudySheet({ t }: { t: Dict["sheet"] }) {
  const [tab, setTab] = useState<Tab>("outline");
  const id = useId();
  const refs = useRef<Record<Tab, HTMLButtonElement | null>>({ outline: null, dictionary: null, plan: null });

  function onKeyDown(event: React.KeyboardEvent, current: Tab) {
    const i = order.indexOf(current);
    let next: Tab | null = null;
    if (event.key === "ArrowRight") next = order[(i + 1) % order.length];
    if (event.key === "ArrowLeft") next = order[(i + order.length - 1) % order.length];
    if (event.key === "Home") next = order[0];
    if (event.key === "End") next = order[order.length - 1];
    if (next) {
      event.preventDefault();
      setTab(next);
      refs.current[next]?.focus();
    }
  }

  return (
    <figure data-ui className="w-full max-w-xl bg-sheet text-ink lg:ml-auto">
      <div role="tablist" aria-label={t.ariaLabel} className="flex bg-paper-deep">
        {order.map((key) => (
          <button
            key={key}
            ref={(el) => {
              refs.current[key] = el;
            }}
            role="tab"
            type="button"
            id={`${id}-tab-${key}`}
            aria-selected={tab === key}
            aria-controls={`${id}-panel-${key}`}
            tabIndex={tab === key ? 0 : -1}
            onClick={() => setTab(key)}
            onKeyDown={(e) => onKeyDown(e, key)}
            className={`press flex-1 px-3 py-3.5 text-[0.95rem] font-semibold ${
              tab === key ? "bg-sheet text-green" : "text-muted hover:text-green"
            }`}
          >
            {t.tabs[key]}
          </button>
        ))}
      </div>

      <div className="relative min-h-[19rem] pt-6 pr-6 pb-6 pl-12 sm:pl-14">
        <span aria-hidden="true" data-note="taste-skill-ignore" className="absolute top-0 bottom-0 left-8 w-px bg-gold/60 sm:left-10" />

        <div role="tabpanel" id={`${id}-panel-outline`} aria-labelledby={`${id}-tab-outline`} hidden={tab !== "outline"}>
          <p className="font-serif text-3xl leading-tight font-medium text-green [font-variation-settings:'opsz'_96,'SOFT'_40]">{t.outline.title}</p>
          <ol className="mt-5 space-y-[10px] text-[1.05rem] leading-5">
            {t.outline.points.map((p, i) => (
              <li key={p.ref} className="flex gap-3">
                <span className="font-serif text-gold-ink">{i + 1}.</span>
                <span>
                  <span className="font-medium">{p.text}</span> <span className="text-muted">({p.ref})</span>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-6 font-serif text-green-soft">{t.outline.note}</p>
        </div>

        <div role="tabpanel" id={`${id}-panel-dictionary`} aria-labelledby={`${id}-tab-dictionary`} hidden={tab !== "dictionary"}>
          <p className="font-serif text-4xl leading-tight font-medium text-green [font-variation-settings:'opsz'_96,'SOFT'_40]">{t.dictionary.term}</p>
          <p className="mt-4 text-[1.05rem] leading-[30px]">{t.dictionary.gloss}</p>
          <p className="mt-[30px] text-muted">{t.dictionary.where}</p>
          <p className="mt-[30px] font-serif text-green-soft">{t.dictionary.related}</p>
        </div>

        <div role="tabpanel" id={`${id}-panel-plan`} aria-labelledby={`${id}-tab-plan`} hidden={tab !== "plan"}>
          <p className="font-serif text-3xl leading-tight font-medium text-green [font-variation-settings:'opsz'_96,'SOFT'_40]">{t.plan.title}</p>
          <ul className="mt-5 space-y-[10px] text-[1.05rem] leading-5">
            {t.plan.days.map((d) => (
              <li key={d.day} className="flex gap-3">
                <span className="w-14 shrink-0 font-semibold text-gold-ink">{d.day}</span>
                <span>{d.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-serif text-green-soft">{t.plan.note}</p>
        </div>
      </div>

      <figcaption className="bg-paper-deep px-5 py-3 text-[0.9rem] text-muted">
        <strong className="font-semibold text-gold-ink">{t.badge}.</strong> {t.caption}
      </figcaption>
    </figure>
  );
}
