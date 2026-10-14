import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal, TiltCard } from "./Reveal";
import { mocks, type MockKey } from "./Mocks";

/* ------------------------------------------------------------------ */
/* Page heroes — each inner page picks a different variant so pages    */
/* don't look alike.                                                   */
/* ------------------------------------------------------------------ */

export type HeroVariant =
  | "split" // text left, tilted photo right (maroon)
  | "fullbleed" // photo fills the hero, text on a dark scrim
  | "centered" // big centred headline, optional chips + mock below
  | "stacked" // headline + intro side by side, wide panoramic photo underneath
  | "mock" // text left, live product mock floating right on deep wine
  | "light" // ivory editorial hero with a framed photo / mock
  | "minimal"; // compact ivory hero with breadcrumb, for help pages

type HeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  mock?: MockKey;
  chips?: string[];
  variant?: HeroVariant;
  secondary?: { to: string; label: string } | null;
  children?: ReactNode;
};

function HeroCtas({ light = false, secondary }: { light?: boolean; secondary?: HeroProps["secondary"] }) {
  const sec = secondary === undefined ? { to: "/features", label: "All features" } : secondary;
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <Link to="/book-demo" className={light ? "btn-primary" : "btn-amber"}>
        Book a Free Demo <ArrowRight className="h-4 w-4" />
      </Link>
      {sec && (
        <Link to={sec.to} className={light ? "btn-outline" : "btn-ghost"}>
          {sec.label}
        </Link>
      )}
    </div>
  );
}

function Chips({ items, light = false }: { items?: string[] | undefined; light?: boolean }) {
  if (!items?.length) return null;
  return (
    <ul className="mt-8 flex flex-wrap gap-2">
      {items.map((c) => (
        <li
          key={c}
          className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide ${
            light ? "border-electric/25 bg-white text-electric" : "border-amber/30 bg-ivory/5 text-gold-light"
          }`}
        >
          {c}
        </li>
      ))}
    </ul>
  );
}

export function PageHero(props: HeroProps) {
  const { variant = "split" } = props;
  switch (variant) {
    case "fullbleed":
      return <HeroFullbleed {...props} />;
    case "centered":
      return <HeroCentered {...props} />;
    case "stacked":
      return <HeroStacked {...props} />;
    case "mock":
      return <HeroMock {...props} />;
    case "light":
      return <HeroLight {...props} />;
    case "minimal":
      return <HeroMinimal {...props} />;
    default:
      return <HeroSplit {...props} />;
  }
}

function HeroSplit({ eyebrow, title, intro, image, imageAlt, chips, secondary, children }: HeroProps) {
  return (
    <section className="bg-night relative overflow-hidden pb-20 pt-32 md:pt-36">
      <div className="grid-lines absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
      <div className={`relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 ${image ? "lg:grid-cols-2" : ""}`}>
        <Reveal>
          <p className="eyebrow text-amber">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] text-ivory md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg text-slate">{intro}</p>
          <HeroCtas secondary={secondary} />
          <Chips items={chips} />
          {children}
        </Reveal>
        {image && (
          <Reveal delay={0.15}>
            <TiltCard>
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] border border-amber/30" aria-hidden />
                <img src={image} alt={imageAlt ?? ""} className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-deep" width={1400} height={1008} />
              </div>
            </TiltCard>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function HeroFullbleed({ eyebrow, title, intro, image, imageAlt, chips, secondary, children }: HeroProps) {
  return (
    <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-navy pb-16 pt-36 md:pb-24">
      {image && <img src={image} alt={imageAlt ?? ""} className="absolute inset-0 h-full w-full scale-105 object-cover" width={1400} height={1008} />}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/20" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-electric/50 via-transparent to-transparent mix-blend-multiply" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6">
        <Reveal className="max-w-3xl">
          <p className="eyebrow inline-flex items-center gap-3 text-amber">
            <span className="h-px w-10 bg-amber" aria-hidden /> {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-[1.02] text-ivory sm:text-5xl md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-ivory/85">{intro}</p>
          <HeroCtas secondary={secondary} />
          <Chips items={chips} />
          {children}
        </Reveal>
      </div>
    </section>
  );
}

function HeroCentered({ eyebrow, title, intro, mock, chips, secondary, children }: HeroProps) {
  const Mock = mock ? mocks[mock] : null;
  return (
    <section className="bg-night relative overflow-hidden pb-16 pt-32 md:pt-40">
      <div className="absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-amber/20 blur-[110px]" aria-hidden />
      <div className="grid-lines absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6">
        <Reveal>
          <p className="eyebrow mx-auto inline-flex rounded-full border border-amber/40 bg-ivory/5 px-4 py-1.5 text-amber">{eyebrow}</p>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.04] text-ivory sm:text-5xl md:text-7xl">{title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate">{intro}</p>
          <div className="flex justify-center [&>div]:justify-center">
            <HeroCtas secondary={secondary} />
          </div>
          {chips && (
            <div className="flex justify-center [&>ul]:justify-center">
              <Chips items={chips} />
            </div>
          )}
          {children}
        </Reveal>
        {Mock && (
          <Reveal delay={0.2} className="mx-auto mt-14 max-w-xl text-left">
            <TiltCard max={5}>
              <Mock />
            </TiltCard>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function HeroStacked({ eyebrow, title, intro, image, imageAlt, chips, secondary, children }: HeroProps) {
  return (
    <section className="bg-wine relative overflow-hidden pt-32 md:pt-40">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal className="grid gap-8 border-b border-amber/25 pb-12 lg:grid-cols-[1.25fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow text-amber">{eyebrow}</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.02] text-ivory sm:text-5xl md:text-[4.25rem]">{title}</h1>
          </div>
          <div>
            <p className="text-lg text-slate">{intro}</p>
            <HeroCtas secondary={secondary} />
          </div>
        </Reveal>
        <Chips items={chips} />
        {children}
      </div>
      {image && (
        <Reveal delay={0.15} className="relative mx-auto mt-12 max-w-7xl px-5 sm:px-6">
          <div className="relative overflow-hidden rounded-t-[2.5rem]">
            <img src={image} alt={imageAlt ?? ""} className="aspect-[16/9] w-full object-cover md:aspect-[21/8]" width={1400} height={868} />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" aria-hidden />
          </div>
        </Reveal>
      )}
    </section>
  );
}

function HeroMock({ eyebrow, title, intro, mock, image, imageAlt, chips, secondary, children }: HeroProps) {
  const Mock = mock ? mocks[mock] : null;
  return (
    <section className="bg-wine relative overflow-hidden pb-20 pt-32 md:pt-36">
      <div className="absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-electric/60 blur-[120px]" aria-hidden />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber/20 blur-3xl" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1fr_1.05fr]">
        <Reveal>
          <p className="eyebrow text-amber">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] text-ivory md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg text-slate">{intro}</p>
          <HeroCtas secondary={secondary} />
          <Chips items={chips} />
          {children}
        </Reveal>
        <Reveal delay={0.15} className="relative">
          {image && (
            <img src={image} alt={imageAlt ?? ""} className="absolute -right-6 -top-10 hidden w-56 rotate-6 rounded-2xl object-cover opacity-80 shadow-deep lg:block" width={1400} height={1008} />
          )}
          {Mock && (
            <TiltCard max={7}>
              <div className="relative rotate-[-2deg]">
                <Mock />
              </div>
            </TiltCard>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function HeroLight({ eyebrow, title, intro, image, imageAlt, mock, chips, secondary, children }: HeroProps) {
  const Mock = mock ? mocks[mock] : null;
  return (
    <section className="bg-tint relative overflow-hidden pb-20 pt-32 md:pt-40">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_30%,rgb(169_82_98/0.18),transparent_60%)]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1.05fr_1fr]">
        <Reveal>
          <p className="eyebrow text-electric">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.04] text-navy md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">{intro}</p>
          <HeroCtas light secondary={secondary} />
          <Chips items={chips} light />
          {children}
        </Reveal>
        <Reveal delay={0.15} className="relative">
          {image && (
            <div className="relative ml-auto max-w-lg">
              <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[2rem] bg-electric" aria-hidden />
              <img src={image} alt={imageAlt ?? ""} className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-deep" width={1400} height={1008} />
            </div>
          )}
          {Mock && (
            <div className={image ? "relative -mt-28 mr-auto w-[85%]" : ""}>
              <TiltCard max={6}>
                <Mock />
              </TiltCard>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function HeroMinimal({ eyebrow, title, intro, chips, children }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b bg-ivory pb-14 pt-32 md:pt-40">
      <div className="absolute inset-x-0 top-0 h-28 bg-night" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
        <Reveal>
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
            <Link to="/" className="hover:text-electric">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-electric">{eyebrow}</span>
          </nav>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-navy md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>
          <Chips items={chips} light />
          {children}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Feature lists in four distinct presentations                       */
/* ------------------------------------------------------------------ */

export type Feature = { title: string; desc: string; points?: string[] };
export type FeatureVariant = "cards" | "rows" | "bento" | "dark";

export function FeatureGrid({ items, variant = "cards" }: { items: Feature[]; variant?: FeatureVariant }) {
  if (variant === "rows") return <FeatureRows items={items} />;
  if (variant === "bento") return <FeatureBento items={items} />;
  if (variant === "dark") return <FeatureDark items={items} />;
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((f, i) => (
        <Reveal key={f.title} delay={(i % 3) * 0.08}>
          <TiltCard max={5} className="h-full">
            <div className="group h-full rounded-2xl border bg-card p-6 text-navy shadow-soft transition-shadow hover:shadow-deep">
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

/** Editorial numbered rows separated by hairlines. */
function FeatureRows({ items }: { items: Feature[] }) {
  return (
    <div className="border-t border-navy/15">
      {items.map((f, i) => (
        <Reveal key={f.title} delay={0.04 * (i % 3)}>
          <div className="grid gap-4 border-b border-navy/15 py-8 md:grid-cols-[6rem_1fr_1.1fr] md:gap-8">
            <span className="font-display text-5xl font-bold italic text-electric/80">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="text-2xl font-semibold text-navy">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
            {f.points && (
              <ul className="flex flex-wrap content-start gap-2">
                {f.points.map((p) => (
                  <li key={p} className="rounded-full border border-electric/20 bg-white px-3 py-1.5 text-sm text-navy">{p}</li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Asymmetric bento: first card is large and maroon. */
function FeatureBento({ items }: { items: Feature[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-6">
      {items.map((f, i) => {
        const big = i === 0;
        const wide = i === 3;
        const span = big ? "md:col-span-4 md:row-span-2" : wide ? "md:col-span-4" : "md:col-span-2";
        return (
          <Reveal key={f.title} delay={0.05 * i} className={span}>
            <div
              className={`flex h-full flex-col justify-between rounded-3xl p-7 ${
                big ? "bg-night shadow-deep" : wide ? "bg-amber/20 text-navy" : "border bg-card text-navy shadow-soft"
              }`}
            >
              <div>
                <p className={`eyebrow ${big ? "text-amber" : "text-electric"}`}>0{i + 1}</p>
                <h3 className={`mt-3 font-semibold ${big ? "text-3xl text-ivory md:text-4xl" : "text-xl"}`} style={big ? { fontFamily: "var(--font-display)" } : undefined}>
                  {f.title}
                </h3>
                <p className={`mt-3 leading-relaxed ${big ? "max-w-md text-slate" : "text-sm text-muted-foreground"}`}>{f.desc}</p>
              </div>
              {f.points && (
                <ul className={`mt-6 space-y-1.5 ${big ? "grid gap-2 space-y-0 sm:grid-cols-2" : ""}`}>
                  {f.points.map((p) => (
                    <li key={p} className={`flex gap-2 text-sm ${big ? "text-ivory/90" : ""}`}>
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${big ? "text-amber" : "text-success"}`} />
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

/** Dark list with gold rules, for use inside a dark Section. */
function FeatureDark({ items }: { items: Feature[] }) {
  return (
    <div className="grid gap-x-12 gap-y-2 md:grid-cols-2">
      {items.map((f, i) => (
        <Reveal key={f.title} delay={0.05 * (i % 2)}>
          <div className="flex gap-5 border-t border-amber/25 py-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber/50 font-display text-sm font-bold text-amber">
              {i + 1}
            </span>
            <div>
              <h3 className="text-xl font-semibold text-ivory">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{f.desc}</p>
              {f.points && <p className="mt-3 text-xs font-medium uppercase tracking-wider text-gold-light/80">{f.points.join("  ·  ")}</p>}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function SplitShowcase({ eyebrow, title, body, points, mock, image, imageAlt, reverse = false, dark = false }: {
  eyebrow: string; title: string; body: string; points: string[]; mock?: MockKey; image?: string; imageAlt?: string; reverse?: boolean; dark?: boolean;
}) {
  const Mock = mock ? mocks[mock] : null;
  return (
    <section className={`${dark ? "bg-night" : ""} py-20 md:py-24`}>
      <div className={`mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <Reveal>
          <p className={`eyebrow ${dark ? "text-amber" : "text-electric"}`}>{eyebrow}</p>
          <h2 className={`mt-3 text-3xl font-bold leading-tight md:text-4xl ${dark ? "text-ivory" : "text-navy"}`}>{title}</h2>
          <p className={`mt-4 text-lg ${dark ? "text-slate" : "text-muted-foreground"}`}>{body}</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className={`flex gap-2 text-sm ${dark ? "text-ivory/90" : "text-navy"}`}><Check className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? "text-amber" : "text-success"}`} />{p}</li>
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

export function CtaBand({ title = "See Wayinn running on your hotel's workflow.", body = "A guided 30-minute walkthrough tailored to your rooms, restaurant and team.", variant = "card" }: { title?: string; body?: string; variant?: "card" | "split" }) {
  if (variant === "split") {
    return (
      <section className="bg-wine relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr] md:py-20">
          <Reveal>
            <h2 className="text-3xl font-bold text-ivory md:text-5xl">{title}</h2>
            <p className="mt-4 max-w-xl text-slate">{body}</p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/book-demo" className="btn-amber">Book a Free Demo <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/contact" className="btn-ghost">Talk to us</Link>
          </Reveal>
        </div>
      </section>
    );
  }
  return (
    <section className="px-4 py-20">
      <Reveal>
        <div className="bg-night relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-14 text-center shadow-deep sm:px-8 md:px-16 md:py-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber/30 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-navy/60 blur-3xl" aria-hidden />
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
      <section className="bg-wine pb-16 pt-36">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <p className="eyebrow text-amber">Legal</p>
          <h1 className="mt-3 text-4xl font-bold text-ivory md:text-5xl">{title}</h1>
          {updated && <p className="mt-3 text-sm text-slate">{updated}</p>}
        </div>
      </section>
      <article className="mx-auto max-w-3xl px-5 py-16 text-navy sm:px-6 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_li]:mt-1 [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground">
        <div className="rounded-2xl border border-amber/50 bg-amber/15 p-4 text-sm">
          <strong>Draft for review:</strong> This document is a template and must be reviewed by Wayne E Solutions' legal counsel. Company name, registered address, jurisdiction and contact details marked [to be confirmed] must be completed before publication.
        </div>
        {children}
      </article>
    </>
  );
}
