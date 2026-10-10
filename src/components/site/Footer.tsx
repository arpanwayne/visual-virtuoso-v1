import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { companyLinks, legalLinks, productLinks, solutionLinks, supportLinks } from "./nav-data";

function Col({ title, links }: { title: string; links: ReadonlyArray<{ to: string; label: string }> }) {
  return (
    <div>
      <p className="eyebrow text-amber">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-sm text-slate transition-colors hover:text-ivory">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-night relative overflow-hidden">
      <div className="grid-lines absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate">
              Wayinn is the hotel operating system for independent, budget and boutique hotels with up to 50 rooms —
              reservations, rooms, restaurant, housekeeping and billing in one place.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-amber" /> hello@wayinn.example <span className="text-xs">(to be confirmed)</span></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-amber" /> +00 0000 000 000 <span className="text-xs">(to be confirmed)</span></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-amber" /> Office address to be confirmed</li>
            </ul>
            <div className="mt-6 flex gap-2">
              {[Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social profile (link to be configured)" className="glass rounded-xl p-2.5 text-ivory hover:text-amber">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <Col title="Product" links={productLinks.slice(0, 5)} />
          <Col title="Solutions" links={[...solutionLinks.slice(0, 2), { to: "/reports", label: "Owner reports" }, { to: "/ai-automation", label: "AI & automation" }]} />
          <Col title="Company" links={companyLinks} />
          <Col title="Support" links={supportLinks} />
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-6 text-xs text-slate md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Wayne E Solutions. Wayinn is a product of Wayne E Solutions. All rights reserved.</p>
          <div className="flex gap-5">
            {legalLinks.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-ivory">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
