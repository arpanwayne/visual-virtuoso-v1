import { createFileRoute } from "@tanstack/react-router";
import { CreditCard, MessageSquare, Calculator, Globe, Printer, Plug } from "lucide-react";
import { PageHero, CtaBand } from "@/components/site/Blocks";
import { Section, InfoCards, Steps } from "@/components/site/PageBlocks";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "Integrations — Wayinn" },
      {
        name: "description",
        content:
          "Connect Wayinn with the payment, messaging, accounting and booking tools your hotel already uses.",
      },
      { property: "og:title", content: "Integrations — Wayinn" },
      { property: "og:description", content: "Wayinn works alongside the tools you already use." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero variant="light" mock="ai" secondary={{ to: "/contact", label: "Request an integration" }}
        eyebrow="Integrations"
        title="Plays well with the tools you already use."
        intro="Hotels rely on more than one system. We scope integrations around what your property actually needs, so you connect what's useful and skip what isn't."
      />

      <Section tone="tint"
        eyebrow="Categories"
        title="Where Wayinn can connect."
        intro="Availability depends on your setup. Tell us what you use and we'll confirm what's possible."
      >
        <InfoCards
          items={[
            {
              icon: <CreditCard className="h-5 w-5" />,
              title: "Payments",
              desc: "Connect the payment methods your hotel accepts so settlements are recorded against the right folio.",
            },
            {
              icon: <MessageSquare className="h-5 w-5" />,
              title: "Messaging",
              desc: "Send booking confirmations and guest updates through the channels your guests already use.",
            },
            {
              icon: <Calculator className="h-5 w-5" />,
              title: "Accounting",
              desc: "Share invoices and collection summaries with your accountant or accounting tool.",
            },
            {
              icon: <Globe className="h-5 w-5" />,
              title: "Booking channels",
              desc: "Bring reservations from online travel and direct-booking sources into one calendar.",
            },
            {
              icon: <Printer className="h-5 w-5" />,
              title: "Printers & hardware",
              desc: "Print invoices, KOTs and receipts on the equipment you already own.",
            },
            {
              icon: <Plug className="h-5 w-5" />,
              title: "Custom connections",
              desc: "Need something specific? Wayne E Solutions can build custom integrations for your property.",
            },
          ]}
        />
      </Section>

      <Section eyebrow="How it works" title="Integrations, scoped to you." dark>
        <Steps variant="line"
          dark
          items={[
            { title: "Tell us", desc: "Share the tools your hotel uses today." },
            { title: "Scope", desc: "We confirm what can be connected and how." },
            { title: "Connect", desc: "We set it up with you during onboarding." },
            { title: "Verify", desc: "We test with real bookings before you rely on it." },
          ]}
        />
      </Section>
      <CtaBand
        title="Using a tool we haven't mentioned?"
        body="Tell us what you use and we'll tell you honestly whether and how Wayinn can work with it."
      />
    </>
  );
}
