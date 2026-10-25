/**
 * Integração de cadastro de interesse (somente servidor).
 *
 * Dois destinos possíveis, nesta ordem de prioridade:
 *
 * 1. Aviso por e-mail (Cloudflare Workers): se o Worker tiver o binding `EMAIL` (send_email) e a variável
 *    WAITLIST_NOTIFY_TO, cada cadastro vira um e-mail enviado para esse endereço.
 *    Opcional: WAITLIST_FROM (padrão: cadastro@homilette.com), que precisa pertencer a um domínio
 *    habilitado no Email Sending da Cloudflare.
 * 2. Webhook: se WAITLIST_WEBHOOK_URL estiver definida, faz POST JSON `{ email, source }`; qualquer 2xx conta
 *    como salvo. Opcional: WAITLIST_WEBHOOK_TOKEN como `Authorization: Bearer <token>`.
 *
 * Sem nenhum dos dois, nada é salvo e a página informa que o cadastro não está disponível.
 * Para trocar de provedor, reescreva `subscribe`, mantendo o tipo de retorno.
 */

import { getCloudflareContext } from "@opennextjs/cloudflare";

export type SubscribeResult = "ok" | "not_configured" | "failed";

type EmailBinding = {
  send(message: { to: string; from: string; subject: string; text: string; replyTo?: string }): Promise<unknown>;
};

function getEmailBinding(): EmailBinding | null {
  try {
    const { env } = getCloudflareContext();
    return (env as { EMAIL?: EmailBinding }).EMAIL ?? null;
  } catch {
    return null; // fora do runtime da Cloudflare (next dev, build)
  }
}

async function notifyByEmail(binding: EmailBinding, to: string, email: string): Promise<SubscribeResult> {
  try {
    await binding.send({
      to,
      from: process.env.WAITLIST_FROM ?? "cadastro@homilette.com",
      subject: "Novo interessado no Homilette",
      text: `Novo cadastro de interesse na landing page do Homilette.\n\nE-mail: ${email}\nData: ${new Date().toISOString()}\n`,
      replyTo: email,
    });
    return "ok";
  } catch (error) {
    console.error("waitlist email failed", error);
    return "failed";
  }
}

async function postToWebhook(url: string, email: string): Promise<SubscribeResult> {
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

export async function subscribe(email: string): Promise<SubscribeResult> {
  const notifyTo = process.env.WAITLIST_NOTIFY_TO;
  const binding = notifyTo ? getEmailBinding() : null;
  if (binding && notifyTo) return notifyByEmail(binding, notifyTo, email);

  const url = process.env.WAITLIST_WEBHOOK_URL;
  if (url) return postToWebhook(url, email);

  return "not_configured";
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && value.length <= 254 && EMAIL.test(value);
}
