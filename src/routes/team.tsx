import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet the Team Behind Wayinn — Wayne E Solutions" },
      {
        name: "description",
        content:
          "Wayinn is built by Wayne E Solutions, a small team in Ludhiana, Punjab, building simple, connected hotel software for independent hotels.",
      },
      { property: "og:title", content: "Meet the Team Behind Wayinn" },
      {
        property: "og:description",
        content: "The people at Wayne E Solutions who build Wayinn, the hotel operating system for small hotels.",
      },
    ],
  }),
  component: Page,
});

// Real team, generic titles only — no fabricated career claims.
// Add an `email` to any member once their Wayinn address is set up.
const TEAM: { initials: string; name: string; role: string; email?: string }[] = [
  { initials: "PT", name: "Pankaj Thakur", role: "Founder & Director" },
  { initials: "PN", name: "Pavnoor Kaur", role: "Co-founder" },
  { initials: "PM", name: "Piyush Mehndiratta", role: "Marketing Head" },
  { initials: "SM", name: "Surbhi Mehndiratta", role: "Graphic Designer" },
  { initials: "BK", name: "Baljeet Kaur", role: "Graphic Designer" },
  { initials: "AS", name: "Arpan Saini", role: "Software Developer" },
  { initials: "SK", name: "Sant Kaur", role: "Senior Software Developer" },
  { initials: "MK", name: "Mandeep Kaur", role: "Senior Web Developer" },
];

function Page() {
  return (
    <>
      <section className="bg-night relative overflow-hidden pb-16 pt-36">
        <div
          className="grid-lines absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          aria-hidden
        />
        <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-amber/20 blur-[110px]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
          <Reveal>
            <p className="eyebrow text-amber">The people behind Wayinn</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] text-ivory md:text-5xl lg:text-6xl">
              Meet the team behind Wayinn
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
              Wayinn is built by Wayne E Solutions, a small team based in Ludhiana, Punjab, building the
              hotel software we'd want if we ran a hotel ourselves.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 0.07}>
              <div className="h-full rounded-3xl border bg-card p-8 text-center text-navy shadow-soft transition-shadow hover:shadow-deep">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-electric to-navy font-display text-2xl font-semibold text-gold-light ring-4 ring-amber/30">
                  {m.initials}
                </div>
                <div className="mt-5 font-display text-xl font-semibold">{m.name}</div>
                <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.role}</div>
                {m.email && (
                  <a
                    href={`mailto:${m.email}`}
                    className="mt-2 inline-block break-all text-sm text-electric transition-colors hover:text-electric-bright"
                  >
                    {m.email}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="bg-night relative mt-14 overflow-hidden rounded-[2rem] p-10 text-center shadow-deep md:p-14">
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber/25 blur-3xl" aria-hidden />
            <h2 className="relative text-3xl font-bold text-ivory md:text-4xl">Want to talk to us directly?</h2>
            <p className="relative mx-auto mt-3 max-w-xl text-slate">
              We're happy to walk you through Wayinn, plan by plan.
            </p>
            <div className="relative mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/pricing" className="btn-amber">
                See pricing <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/book-demo" className="btn-ghost">Book a free demo</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
