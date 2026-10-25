/**
 * Configuração do Homilette: data de lançamento, links e URL pública.
 * Os textos de cada idioma ficam em `src/content/pt.ts`, `en.ts` e `es.ts`.
 */

export const siteConfig = {
  name: "Homilette",
  /** URL pública do site (metadados de compartilhamento). Defina NEXT_PUBLIC_SITE_URL em produção. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  /**
   * Data de lançamento no formato AAAA-MM-DD (ex.: "2027-03-15").
   * Enquanto for `null`, a página mostra "Em breve" (Coming soon / Próximamente), sem data nem contagem regressiva.
   * A data é formatada automaticamente em cada idioma.
   */
  launchDate: null as string | null,

  /**
   * Opcional: período aproximado, quando só ele é conhecido. Um texto por idioma, escrito de forma que
   * complete a frase "Lançamento previsto para …" (ex.: "o primeiro semestre de 2027").
   * Só é usado se `launchDate` for `null` e o texto do idioma existir.
   */
  launchPeriod: { pt: null, en: null, es: null } as Record<"pt" | "en" | "es", string | null>,

  /** Destinos reais. Enquanto forem `null`, os links não aparecem no rodapé. */
  links: {
    privacy: null as string | null, // ex.: "/privacidade"
    contact: null as string | null, // ex.: "mailto:contato@homilette.com"
  },
};
