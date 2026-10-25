"use client";

import { useEffect, useRef, useState } from "react";
import type { Dict } from "@/content";
import type { Locale } from "@/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

const cta = "press inline-flex items-center justify-center bg-green px-5 py-2.5 text-[0.95rem] font-semibold text-paper hover:bg-green-soft";

export function Header({ lang, t }: { lang: Locale; t: Dict }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-paper-deep">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-(--margin)">
        <a href="#topo" className="text-green" aria-label={t.a11y.home}>
          <Logo />
        </a>

        <nav aria-label={t.a11y.mainNav} className="hidden items-center gap-8 md:flex">
          {t.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-[0.95rem] font-medium text-ink underline-offset-8 hover:underline hover:decoration-gold hover:decoration-2">
              {item.label}
            </a>
          ))}
          <LanguageSwitcher current={lang} label={t.a11y.languages} />
          <a href="#lancamento" className={cta}>
            {t.navCta}
          </a>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-green md:hidden"
          aria-expanded={open}
          aria-controls="menu-movel"
          aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      <div id="menu-movel" hidden={!open} className="bg-paper md:hidden">
        <nav aria-label={t.a11y.mobileNav} className="mx-auto flex max-w-[1440px] flex-col px-(--margin) pt-2 pb-6">
          {t.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-4 font-serif text-2xl text-green">
              {item.label}
            </a>
          ))}
          <LanguageSwitcher current={lang} label={t.a11y.languages} className="mt-2" />
          <a href="#lancamento" onClick={() => setOpen(false)} className={`${cta} mt-5`}>
            {t.navCta}
          </a>
        </nav>
      </div>
    </header>
  );
}
