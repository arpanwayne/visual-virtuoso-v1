import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal, TiltCard } from "./Reveal";
import { mocks, type MockKey } from "./Mocks";

export function PageHero({ eyebrow, title, intro, image, imageAlt, children }: { eyebrow: string; title: string; intro: string; image?: string; imageAlt?: string; children?: ReactNode }) {
  return (
    <section className="bg-night relative overflow-hidden pb-20 pt-36">
      <div className="grid-lines absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
      <div className={`relative mx-auto grid max-w-7xl items-center gap-12 px-6 ${image ? "lg:grid-cols-2" : ""}`}>
        <Reveal>
          <p className="eyebrow text-amber">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] text-ivory md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg text-slate">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/book-demo" className="btn-amber">Book a Free Demo <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/features" className="btn-ghost">All features</Link>
          </div>
          {children}
        </Reveal>
        {image && (
          <Reveal delay={0.15}>
            <TiltCard>
              <img src={image} alt={imageAlt ?? ""} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-deep" width={1400} height={1008} />
            </TiltCard>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export type Feature = { title: string; desc: string; points?: string[] };

export function FeatureGrid({ items }: { items: Feature[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((f, i) => (
        <Reveal key={f.title} delay={(i % 3) * 0.08}>
          <TiltCard max={5} className="h-full">
            <div className="group h-full rounded-2xl border bg-card p-6 shadow-soft transition-shadow hover:shadow-deep">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric/10 font-display font-bold text-electric">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              {f.points && (
                <ul className="mt-4 space-y-1.5">
                  {f.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />{p}</li>
                  ))}
                </ul>
              )}
            </div>
          </TiltCard>
        </Reveal>
      ))}
    </div>
  );
}

export function SplitShowcase({ eyebrow, title, body, points, mock, image, imageAlt, reverse = false, dark = false }: {
  eyebrow: string; title: string; body: string; points: string[]; mock?: MockKey; image?: string; imageAlt?: string; reverse?: boolean; dark?: boolean;
}) {
  const Mock = mock ? mocks[mock] : null;
  return (
    <section className={`${dark ? "bg-night" : ""} py-24`}>
      <div className={`mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <Reveal>
          <p className={`eyebrow ${dark ? "text-amber" : "text-electric"}`}>{eyebrow}</p>
          <h2 className={`mt-3 text-3xl font-bold leading-tight md:text-4xl ${dark ? "text-ivory" : ""}`}>{title}</h2>
          <p className={`mt-4 text-lg ${dark ? "text-slate" : "text-muted-foreground"}`}>{body}</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className={`flex gap-2 text-sm ${dark ? "text-ivory/90" : ""}`}><Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />{p}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.15} className="relative">
          {image && (
            <TiltCard>
              <img src={image} alt={imageAlt ?? ""} loading="lazy" width={1400} height={1008} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-deep" />
            </TiltCard>
          )}
          {Mock && (
            <div className={image ? "relative -mt-24 ml-auto w-[88%] md:-mt-32" : ""}>
              <TiltCard max={6}><Mock /></TiltCard>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand({ title = "See Wayinn running on your hotel's workflow.", body = "A guided 30-minute walkthrough tailored to your rooms, restaurant and team." }: { title?: string; body?: string }) {
  return (
    <section className="px-4 py-20">
      <Reveal>
        <div className="bg-night relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-8 py-16 text-center shadow-deep md:px-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-electric/40 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber/30 blur-3xl" aria-hidden />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-bold text-ivory md:text-5xl">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-slate">{body}</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/book-demo" className="btn-amber">Book a Free Demo <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/contact" className="btn-ghost">Talk to us</Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Prose({ title, updated, children }: { title: string; updated?: string; children: ReactNode }) {
  return (
    <>
      <section className="bg-night pb-16 pt-36">
        <div className="mx-auto max-w-3xl px-6">
          <p className="eyebrow text-amber">Legal</p>
          <h1 className="mt-3 text-4xl font-bold text-ivory md:text-5xl">{title}</h1>
          {updated && <p className="mt-3 text-sm text-slate">{updated}</p>}
        </div>
      </section>
      <article className="mx-auto max-w-3xl px-6 py-16 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_li]:mt-1 [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground">
        <div className="rounded-2xl border border-amber/50 bg-amber/15 p-4 text-sm">
          <strong>Draft for review:</strong> This document is a template and must be reviewed by Wayne E Solutions' legal counsel. Company name, registered address, jurisdiction and contact details marked [to be confirmed] must be completed before publication.
        </div>
        {children}
      </article>
    </>
  );
}
