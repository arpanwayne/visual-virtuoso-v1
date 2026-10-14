import { Link } from "@tanstack/react-router";
import logoHorizontal from "@/assets/wayinn-logo-horizontal.png";
import logoFull from "@/assets/wayinn-logo.png";
import logoMark from "@/assets/wayinn-mark.png";

/** Gold monogram only (no wordmark). */
export function LogoMark({ className = "h-8 w-auto" }: { className?: string }) {
  return <img src={logoMark} alt="" aria-hidden="true" className={className} width={400} height={296} />;
}

/** Horizontal lockup used in the navigation bar. */
export function Logo({ className = "h-10 w-auto sm:h-12" }: { light?: boolean; className?: string }) {
  return (
    <Link to="/" className="flex shrink-0 items-center" aria-label="Wayinn — home">
      <img
        src={logoHorizontal}
        alt="Wayinn — Hotel Operating System"
        className={className}
        width={900}
        height={198}
        decoding="async"
      />
    </Link>
  );
}

/** Full stacked logo (monogram above wordmark) used in the footer. */
export function LogoStacked({ className = "h-28 w-auto" }: { className?: string }) {
  return (
    <Link to="/" className="inline-flex" aria-label="Wayinn — home">
      <img src={logoFull} alt="Wayinn — Hotel Operating System" className={className} width={900} height={718} loading="lazy" />
    </Link>
  );
}
