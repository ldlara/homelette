import { negotiateLocale } from "@/i18n/config";

/** Redireciona `/` para o idioma preferido do navegador (Accept-Language). */
export function GET(request: Request) {
  const locale = negotiateLocale(request.headers.get("accept-language"));
  return Response.redirect(new URL(`/${locale}`, request.url), 307);
}
