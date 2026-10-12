import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { ContactForm, ContactCard } from "@/components/site/PageBlocks";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Wayinn — Wayinn" },
      {
        name: "description",
        content: "Questions about Wayinn? Send us a message and the team will get back to you.",
      },
      { property: "og:title", content: "Contact Wayinn — Wayinn" },
      { property: "og:description", content: "Talk to the Wayinn team." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="bg-night relative overflow-hidden pb-20 pt-36">
        <div
          className="grid-lines absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow text-amber">Contact</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] text-ivory md:text-6xl">
              Let's talk about your hotel.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate">
              Have a question about modules, pricing or setup? Send a message and the Wayinn team
              will reply.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1} className="space-y-4">
            <ContactCard
              icon={<Mail className="h-5 w-5" />}
              title="Email"
              value="hello@wayinn.example"
              note="(to be confirmed)"
            />
            <ContactCard
              icon={<Phone className="h-5 w-5" />}
              title="Phone / WhatsApp"
              value="+00 0000 000 000"
              note="(to be confirmed)"
            />
            <ContactCard
              icon={<MapPin className="h-5 w-5" />}
              title="Office"
              value="Address to be confirmed"
            />
            <ContactCard
              icon={<Clock className="h-5 w-5" />}
              title="Response time"
              value="We aim to reply within one business day."
            />
            <div className="rounded-2xl bg-night p-6 text-ivory shadow-deep">
              <p className="font-display text-lg font-semibold">Prefer a live walkthrough?</p>
              <p className="mt-1 text-sm text-slate">
                Book a 30-minute demo tailored to your hotel.
              </p>
              <Link to="/book-demo" className="btn-amber mt-4">
                Book a Free Demo
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
