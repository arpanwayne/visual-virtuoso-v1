import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";
import { Section, FaqList } from "@/components/site/PageBlocks";
import reception from "@/assets/reception.jpg";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Wayinn" },
      {
        name: "description",
        content:
          "Answers to common questions about Wayinn: who it's for, setup, devices, guests, data and pricing.",
      },
      { property: "og:title", content: "FAQ — Wayinn" },
      {
        property: "og:description",
        content: "Everything you need to know before choosing Wayinn.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions hoteliers ask us."
        intro="Can't find what you're looking for? Send us a message and we'll answer."
        image={reception}
        imageAlt="Hotel reception desk"
      />

      <Section eyebrow="Getting started" title="About Wayinn">
        <div className="max-w-3xl">
          <FaqList
            items={[
              {
                q: "What is Wayinn?",
                a: "Wayinn is a hotel operating system that connects reservations, rooms, restaurant, housekeeping and billing, with owner reports and optional AI assistance.",
              },
              {
                q: "Who is Wayinn for?",
                a: "Independent, budget and boutique hotels with up to 50 rooms, including hotels that run their own restaurant.",
              },
              {
                q: "How long does setup take?",
                a: "It depends on your property. We guide you through setting up rooms, rates, menus and staff so you can go live as quickly as is comfortable.",
              },
              {
                q: "Do you help us move from our current system?",
                a: "Yes. Tell us what you use today (registers, spreadsheets or other software) and we'll plan the move with you.",
              },
            ]}
          />
        </div>
      </Section>

      <Section eyebrow="Using it" title="Day-to-day" dark>
        <div className="max-w-3xl">
          <FaqList
            items={[
              {
                q: "What devices does it work on?",
                a: "Wayinn runs in a modern web browser on desktops, tablets and phones.",
              },
              {
                q: "Do guests need to download an app?",
                a: "No. The QR guest portal opens directly in the guest's phone browser.",
              },
              {
                q: "Can different staff see different things?",
                a: "Yes. Access is role-based, so reception, restaurant, housekeeping and owners see what they need.",
              },
              {
                q: "Can I use only some modules?",
                a: "Yes. You can begin with the modules you need and add others later.",
              },
            ]}
          />
        </div>
      </Section>

      <Section eyebrow="Trust" title="Data, AI & pricing">
        <div className="max-w-3xl">
          <FaqList
            items={[
              {
                q: "Is my data secure?",
                a: "We use access controls and secure cloud infrastructure. See our Privacy Policy for how data is handled.",
              },
              {
                q: "Does AI act without approval?",
                a: "No. AI features produce drafts and summaries that your staff review first, and they're optional.",
              },
              {
                q: "How is Wayinn priced?",
                a: "Pricing is based on your room count and the modules you need. Book a demo and we'll send a clear quote.",
              },
              {
                q: "What if I want to cancel?",
                a: "Please read our Refund Policy and ask us about terms during your demo.",
              },
            ]}
          />
          <p className="mt-6 text-sm text-muted-foreground">
            Still have questions?{" "}
            <Link to="/contact" className="font-semibold text-electric underline">
              Contact us
            </Link>
            .
          </p>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
