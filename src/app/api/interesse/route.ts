import { isValidEmail, subscribe } from "@/lib/waitlist";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ status: "invalid" }, { status: 400 });
  }

  const { email, website } = (body ?? {}) as { email?: unknown; website?: unknown };

  // Campo isca (honeypot): pessoas não o veem; robôs costumam preenchê-lo.
  if (typeof website === "string" && website.length > 0) {
    return Response.json({ status: "invalid" }, { status: 400 });
  }

  const normalized = typeof email === "string" ? email.trim() : email;
  if (!isValidEmail(normalized)) {
    return Response.json({ status: "invalid" }, { status: 400 });
  }

  const result = await subscribe(normalized);
  if (result === "ok") return Response.json({ status: "ok" });
  if (result === "not_configured") return Response.json({ status: "unavailable" }, { status: 503 });
  return Response.json({ status: "error" }, { status: 502 });
}
