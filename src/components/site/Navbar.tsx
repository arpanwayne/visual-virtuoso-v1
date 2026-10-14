import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { productLinks } from "./nav-data";

const simple = [
  { to: "/features", label: "Features" },
  { to: "/solutions", label: "Solutions" },
  { to: "/integrations", label: "Integrations" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => { setOpen(false); setDrop(false); }, [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-amber/20 px-3 py-2 backdrop-blur-xl transition-all duration-300 sm:px-4 ${
          scrolled ? "bg-navy/92 shadow-deep" : "bg-navy/80"
        }`}
        aria-label="Main"
      >
        <Logo />

        <div className="hidden items-center gap-0.5 lg:flex">
          <div className="relative" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
            <button
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-ivory/90 transition-colors hover:bg-ivory/10 hover:text-ivory"
              aria-expanded={drop}
              onClick={() => setDrop((d) => !d)}
            >
              Product <ChevronDown className={`h-4 w-4 transition-transform ${drop ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {drop && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full w-[520px] pt-2"
                >
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border bg-card p-3 text-navy shadow-deep">
                    {productLinks.map((l) => (
                      <Link key={l.to} to={l.to} className="rounded-xl p-3 transition-colors hover:bg-secondary">
                        <div className="text-sm font-semibold text-navy">{l.label}</div>
                        <div className="text-xs text-muted-foreground">{l.desc}</div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {simple.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ivory/90 transition-colors hover:bg-ivory/10 hover:text-ivory"
              activeProps={{ className: "!text-amber" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link to="/book-demo" className="btn-amber hidden !py-2.5 sm:inline-flex">Book a Demo</Link>
          <button
            className="rounded-xl border border-amber/30 bg-ivory/10 p-2.5 text-ivory lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="bg-wine absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto p-6"
            >
              <div className="flex items-center justify-between">
                <Logo className="h-9 w-auto" />
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="rounded-xl p-2 text-ivory hover:bg-ivory/10">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="eyebrow mt-8 text-amber">Product</p>
              <div className="mt-2 flex flex-col">
                {productLinks.map((l) => (
                  <Link key={l.to} to={l.to} className="py-2 text-ivory/90 hover:text-amber">{l.label}</Link>
                ))}
              </div>
              <p className="eyebrow mt-6 text-amber">Company</p>
              <div className="mt-2 flex flex-col">
                {simple.map((l) => (
                  <Link key={l.to} to={l.to} className="py-2 text-ivory/90 hover:text-amber">{l.label}</Link>
                ))}
              </div>
              <Link to="/book-demo" className="btn-amber mt-8">Book a Free Demo</Link>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
