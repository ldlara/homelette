import Image from "next/image";
import type { Dict } from "@/content";
import { photoCredits } from "@/content/credits";
import { siteConfig } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

const SCALLOPS = 12;
const scallopPath = `M0 40 ${Array.from({ length: SCALLOPS }, () => "a50 40 0 0 1 100 0").join(" ")} V40 Z`;

export function Footer({ lang, t }: { lang: Locale; t: Dict }) {
  const f = t.footer;
  const links: { label: string; href: string }[] = [];
  if (siteConfig.links.privacy) links.push({ label: f.privacy, href: siteConfig.links.privacy });
  if (siteConfig.links.contact) links.push({ label: f.contact, href: siteConfig.links.contact });

  return (
    <footer className="on-dark bg-green pt-16 text-paper">
      <div className="mx-auto max-w-[1200px] px-(--margin)">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true" className="block h-6 w-full sm:h-10">
          <path d={scallopPath} fill="var(--paper)" />
        </svg>
        <div className="relative bg-paper px-6 pt-4 pb-8 text-ink sm:px-12">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <Logo className="text-green" />
              <p className="mt-6 font-serif text-3xl leading-tight font-medium text-green [font-variation-settings:'opsz'_96,'SOFT'_40]">{f.signoff}</p>
              <p className="mt-4 max-w-[38ch] text-base">{f.message}</p>
            </div>
            <div className="relative md:pr-28">
              <div className="absolute top-0 right-0 hidden w-[88px] bg-paper p-[6px] md:block">
                <div className="relative aspect-[3/4] w-full">
                  <Image src="/images/bible-leaf-jpg.jpg" alt="" fill sizes="88px" className="photo object-cover" />
                </div>
              </div>
              <p className="text-lg font-semibold text-green">{f.languages}</p>
              <LanguageSwitcher current={lang} label={f.languages} className="mt-3 -ml-2" />
              {links.length > 0 ? (
                <nav aria-label={t.a11y.footerNav} className="mt-8">
                  <ul className="flex flex-col gap-3 text-lg">
                    {links.map((l) => (
                      <li key={l.href}>
                        <a href={l.href} className="text-green underline decoration-gold decoration-2 underline-offset-4">
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ) : null}
            </div>
          </div>
          <p className="mt-10 text-center text-[0.95rem] text-muted">{f.imprint}</p>
        </div>
      </div>

      <p className="mx-auto max-w-[1200px] px-(--margin) py-8 text-[0.95rem] leading-relaxed text-paper">
        {f.credits}:{" "}
        {photoCredits.map((c, i) => (
          <span key={c.url}>
            {i > 0 ? "; " : ""}
            <a href={c.url} className="underline decoration-gold-light underline-offset-2">
              “{c.title}”
            </a>
            , <a href={c.licenceUrl} className="underline decoration-gold-light underline-offset-2">{c.licence}</a>
          </span>
        ))}
        , {f.creditsVia}.
      </p>
    </footer>
  );
}
