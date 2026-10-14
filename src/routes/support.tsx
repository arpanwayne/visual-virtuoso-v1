import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, LifeBuoy, MessageCircle, Rocket } from "lucide-react";
import { PageHero, CtaBand } from "@/components/site/Blocks";
import { Section, InfoCards, Steps } from "@/components/site/PageBlocks";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Product Support — Wayinn" },
      {
        name: "description",
        content: "Onboarding, training and day-to-day support for Wayinn hotels.",
      },
      { property: "og:title", content: "Product Support — Wayinn" },
      { property: "og:description", content: "We help your team get set up and stay confident." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero variant="minimal" chips={["Onboarding","Training","Product help","Data migration"]}
        eyebrow="Support"
        title="Help, from people who know the product."
        intro="From your first booking to your busiest weekend, our team helps you get set up, trained and unstuck."
      />

      <Section eyebrow="Ways we help" title="Support at every stage.">
        <InfoCards
          cols={4}
          items={[
            {
              icon: <Rocket className="h-5 w-5" />,
              title: "Onboarding",
              desc: "We help you set up rooms, rates, menus and staff accounts so you can go live with confidence.",
            },
            {
              icon: <BookOpen className="h-5 w-5" />,
              title: "Staff training",
              desc: "Short, practical sessions for reception, restaurant and housekeeping teams.",
            },
            {
              icon: <MessageCircle className="h-5 w-5" />,
              title: "Everyday help",
              desc: "Ask us how to do something or report an issue and we'll guide you.",
            },
            {
              icon: <LifeBuoy className="h-5 w-5" />,
              title: "Priority assistance",
              desc: "Pro plan hotels get priority attention when it matters most.",
            },
          ]}
        />
      </Section>

      <Section tone="wine" eyebrow="Getting help" title="How to reach us." dark>
        <Steps variant="line"
          dark
          items={[
            { title: "Check the FAQ", desc: "Many common questions are answered on our FAQ page." },
            {
              title: "Send a message",
              desc: "Use the contact form with as much detail as you can share.",
            },
            { title: "We respond", desc: "We aim to reply within one business day." },
            { title: "Resolved", desc: "We follow up until your issue is sorted." },
          ]}
        />
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/faq" className="btn-ghost">
            Read the FAQ
          </Link>
          <Link to="/contact" className="btn-amber">
            Contact support
          </Link>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
