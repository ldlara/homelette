/**
 * Integração de cadastro de interesse (somente servidor).
 *
 * Para receber os e-mails de verdade, defina WAITLIST_WEBHOOK_URL com o endpoint
 * do seu serviço (Resend, Mailchimp, ConvertKit, Zapier, planilha, backend próprio…).
 * Será feito um POST JSON `{ email, source }`; qualquer resposta 2xx conta como salvo.
 * Opcional: WAITLIST_WEBHOOK_TOKEN é enviado como `Authorization: Bearer <token>`.
 *
 * Para trocar de provedor, basta reescrever `subscribe`, mantendo o tipo de retorno.
 */

export type SubscribeResult = "ok" | "not_configured" | "failed";

export async function subscribe(email: string): Promise<SubscribeResult> {
  const url = process.env.WAITLIST_WEBHOOK_URL;
  if (!url) return "not_configured";

  try {
    const token = process.env.WAITLIST_WEBHOOK_TOKEN;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ email, source: "landing-page" }),
      signal: AbortSignal.timeout(8000),
    });
    return response.ok ? "ok" : "failed";
  } catch {
    return "failed";
  }
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && value.length <= 254 && EMAIL.test(value);
}
