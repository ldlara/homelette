export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

/** Etiqueta BCP 47 usada em `lang`, formatação de datas e metadados. */
export const bcp47: Record<Locale, string> = { pt: "pt-BR", en: "en-US", es: "es" };
export const ogLocale: Record<Locale, string> = { pt: "pt_BR", en: "en_US", es: "es_ES" };
/** Nome de cada idioma, escrito no próprio idioma. */
export const languageNames: Record<Locale, string> = { pt: "Português", en: "English", es: "Español" };

/** Escolhe o idioma a partir do cabeçalho Accept-Language (respeita os valores q). */
export function negotiateLocale(header: string | null): Locale {
  if (!header) return defaultLocale;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { tag: tag.toLowerCase(), q: q ? Number(q.trim().slice(2)) : 1 };
    })
    .filter((x) => x.tag && !Number.isNaN(x.q))
    .sort((a, b) => b.q - a.q);
  for (const { tag } of ranked) {
    const base = tag.split("-")[0];
    if (hasLocale(base)) return base;
  }
  return defaultLocale;
}
