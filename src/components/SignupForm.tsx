"use client";

import { useId, useState } from "react";
import type { Dict } from "@/content";

type Phase = "idle" | "submitting" | "success" | "invalid" | "unavailable" | "error";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SignupForm({ t }: { t: Dict["launch"] }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const id = useId();
  const inputId = `${id}-email`;
  const messageId = `${id}-msg`;
  const submitting = phase === "submitting";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const website = String(data.get("website") ?? "");

    if (!EMAIL.test(email)) {
      setPhase("invalid");
      return;
    }

    setPhase("submitting");
    try {
      const response = await fetch("/api/interesse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      if (response.ok) {
        setPhase("success");
        form.reset();
      } else if (response.status === 503) setPhase("unavailable");
      else if (response.status === 400) setPhase("invalid");
      else setPhase("error");
    } catch {
      setPhase("error");
    }
  }

  const isError = phase === "invalid" || phase === "error" || phase === "unavailable";
  const message =
    phase === "success" ? t.messages.success : isError ? t.messages[phase as "invalid" | "unavailable" | "error"] : null;

  return (
    <form onSubmit={onSubmit} noValidate aria-busy={submitting} className="mx-auto w-full max-w-md text-left">
      <label htmlFor={inputId} className="block text-base font-semibold text-ink">
        {t.emailLabel}
      </label>

      {/* Campo isca: invisível para pessoas */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <input
        id={inputId}
        name="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder={t.emailPlaceholder}
        required
        aria-invalid={phase === "invalid"}
        aria-describedby={messageId}
        disabled={submitting}
        className="mt-2 block h-14 w-full bg-paper-deep px-4 text-base text-ink placeholder:text-muted disabled:opacity-70"
      />
      <button
        type="submit"
        disabled={submitting}
        className="press mt-3 flex h-14 w-full items-center justify-center bg-green px-6 text-base font-semibold text-paper hover:bg-green-soft disabled:cursor-wait disabled:opacity-80"
      >
        {submitting ? t.submitting : t.submit}
      </button>

      <div id={messageId} role={isError ? "alert" : "status"} aria-live={isError ? "assertive" : "polite"} className="mt-4 min-h-6 text-[0.95rem]">
        {message ? (
          <p className={isError ? "font-medium text-[#8a2f1d]" : "font-medium text-green"}>{message}</p>
        ) : (
          <span className="text-muted">{t.fineprint}</span>
        )}
      </div>
    </form>
  );
}
