import { Link } from "@tanstack/react-router";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="wg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--electric)" />
          <stop offset="1" stopColor="var(--amber)" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" fill="var(--navy)" />
      <path d="M8 12 L14 29 L20 17 L26 29 L32 12" fill="none" stroke="url(#wg)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="10" r="2.2" fill="var(--amber)" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Wayinn home">
      <LogoMark />
      <span className={`font-display text-xl font-bold tracking-tight ${light ? "text-ivory" : "text-navy"}`}>
        Wayinn
      </span>
    </Link>
  );
}
