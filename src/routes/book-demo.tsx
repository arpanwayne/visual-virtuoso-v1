import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, Clock, Presentation } from "lucide-react";
import { DemoForm } from "@/components/site/PageBlocks";
import { Reveal } from "@/components/site/Reveal";
import reception from "@/assets/reception.jpg";

export const Route = createFileRoute("/book-demo")({
  head: () => ({
    meta: [
      { title: "Book a Free Demo — Wayinn" },
      {
        name: "description",
        content:
          "Book a free 30-minute guided walkthrough of Wayinn, tailored to your rooms, restaurant and team.",
      },
      { property: "og:title", content: "Book a Free Demo — Wayinn" },
      { property: "og:description", content: "See Wayinn running on your hotel's workflow." },
    ],
  }),
  component: Page,
});

function Page() {
  const points = [
    {
      icon: <Clock className="h-5 w-5" />,
      t: "30 minutes",
      d: "A focused, no-pressure walkthrough.",
    },
    {
      icon: <Presentation className="h-5 w-5" />,
      t: "Tailored to you",
      d: "We show the modules that matter to your hotel.",
    },
    {
      icon: <CalendarCheck className="h-5 w-5" />,
      t: "Clear next steps",
      d: "Leave with a quote and an onboarding plan.",
    },
  ];
  return (
    <>
      <section className="bg-night relative overflow-hidden pb-24 pt-36">
        <div
          className="grid-lines absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <p className="eyebrow text-amber">Book a demo</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] text-ivory md:text-6xl">
              See Wayinn on your hotel's workflow.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-slate">
              Tell us a little about your property and we'll arrange a guided walkthrough — rooms,
              restaurant, housekeeping, billing and reports.
            </p>
            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li key={p.t} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber/20 text-amber">
                    {p.icon}
                  </span>
                  <span>
                    <span className="block font-semibold text-ivory">{p.t}</span>
                    <span className="text-sm text-slate">{p.d}</span>
                  </span>
                </li>
              ))}
            </ul>
            <img
              src={reception}
              alt="Hotel reception at dusk"
              loading="lazy"
              width={1400}
              height={868}
              className="mt-10 hidden aspect-[16/10] w-full rounded-3xl object-cover shadow-deep lg:block"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <DemoForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
