import { siteConfig } from "@/content/site";
import { bcp47, type Locale } from "@/i18n/config";

export type Launch =
  | { kind: "date"; label: string; iso: string }
  | { kind: "period"; label: string }
  | { kind: "soon" };

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;

/** Interpreta `launchDate` (AAAA-MM-DD) sem depender do fuso horário do servidor. */
function parseDate(value: string | null, locale: Locale): Launch | null {
  const match = value ? ISO_DATE.exec(value) : null;
  if (!match) return null;
  const [, y, m, d] = match.map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  if (date.getUTCFullYear() !== y || date.getUTCMonth() !== m - 1 || date.getUTCDate() !== d) {
    return null;
  }
  const label = new Intl.DateTimeFormat(bcp47[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
  return { kind: "date", label, iso: value! };
}

export function getLaunch(locale: Locale): Launch {
  const date = parseDate(siteConfig.launchDate, locale);
  if (date) return date;
  const period = siteConfig.launchPeriod[locale]?.trim();
  if (period) return { kind: "period", label: period };
  return { kind: "soon" };
}
