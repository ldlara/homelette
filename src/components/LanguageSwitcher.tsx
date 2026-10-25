import { languageNames, locales, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ current, label, className = "" }: { current: Locale; label: string; className?: string }) {
  return (
    <ul aria-label={label} className={`flex items-center gap-1 ${className}`}>
      {locales.map((code) => (
        <li key={code}>
          <a
            href={`/${code}`}
            hrefLang={code}
            lang={code}
            title={languageNames[code]}
            aria-label={languageNames[code]}
            aria-current={code === current ? "true" : undefined}
            className={`press inline-flex h-10 min-w-10 items-center justify-center px-2 text-[0.95rem] font-semibold ${
              code === current ? "bg-green text-paper" : "text-green hover:bg-paper"
            }`}
          >
            {code.toUpperCase()}
          </a>
        </li>
      ))}
    </ul>
  );
}
