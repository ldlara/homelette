export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="16" height="24" viewBox="0 0 18 26" aria-hidden="true" className="shrink-0">
        <path d="M0 0h18v26l-9-6.5L0 26z" fill="var(--gold)" />
      </svg>
      <span className="font-serif text-[1.6rem] leading-none font-semibold tracking-tight [font-variation-settings:'opsz'_72,'SOFT'_60]">
        Homilette
      </span>
    </span>
  );
}
