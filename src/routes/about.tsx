import { createFileRoute } from "@tanstack/react-router";
import lobbyReception from "@/assets/lobby-reception.jpg";
import { Heart, Gauge, Handshake, Lightbulb } from "lucide-react";
import { PageHero, SplitShowcase, CtaBand } from "@/components/site/Blocks";
import { Section, InfoCards, StatStrip } from "@/components/site/PageBlocks";
import housekeeping from "@/assets/housekeeping.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Wayinn — Wayinn" },
      {
        name: "description",
        content:
          "Wayinn is a hotel operating system by Wayne E Solutions, built for independent, budget and boutique hotels.",
      },
      { property: "og:title", content: "About Wayinn — Wayinn" },
      {
        property: "og:description",
        content: "Wayinn is a hotel operating system by Wayne E Solutions.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero variant="stacked" secondary={{ to: "/contact", label: "Contact us" }}
        eyebrow="About Wayinn"
        title="Hotel software that respects small teams."
        intro="Wayinn is a hotel operating system by Wayne E Solutions. We build tools that let independent hoteliers run reservations, rooms, restaurant, housekeeping and billing without needing an IT department."
        image={lobbyReception}
        imageAlt="Warmly lit marble reception desk in a hotel lobby"
      />
      <StatStrip
        items={[
          { value: "7", label: "Connected modules" },
          { value: "≤ 50", label: "Rooms per property" },
          { value: "1", label: "Shared source of truth" },
          { value: "24/7", label: "Access from any browser" },
        ]}
      />

      <SplitShowcase
        eyebrow="Our story"
        title="Small hotels deserve better than spreadsheets."
        body="Most hotel software is built for big chains. Small properties end up juggling a booking register, a restaurant notebook, WhatsApp groups for housekeeping and a spreadsheet for the owner. Wayinn brings all of that into one calm, connected system."
        points={[
          "Built for ≤ 50 rooms",
          "Designed with front-desk reality in mind",
          "Simple to learn",
          "Grows with your property",
        ]}
        mock="calendar"
      />

      <Section eyebrow="What we believe" title="Principles behind the product." dark>
        <InfoCards
          dark
          cols={4}
          items={[
            {
              icon: <Gauge className="h-5 w-5" />,
              title: "Simple first",
              desc: "If a new staff member can't use it on day one, it's too complicated.",
            },
            {
              icon: <Handshake className="h-5 w-5" />,
              title: "Hotelier-friendly",
              desc: "We design around real front-desk, kitchen and housekeeping routines.",
            },
            {
              icon: <Lightbulb className="h-5 w-5" />,
              title: "Practical AI",
              desc: "AI that saves time, always reviewed by your team before it acts.",
            },
            {
              icon: <Heart className="h-5 w-5" />,
              title: "Guests first",
              desc: "Smooth operations create better stays. That's what we optimise for.",
            },
          ]}
        />
      </Section>

      <SplitShowcase
        reverse
        eyebrow="Wayne E Solutions"
        title="Made by a software studio in Punjab, India."
        body="Wayinn is a product of Wayne E Solutions, a software development and digital marketing agency. We build custom software and AI-powered products, and Wayinn is where that experience meets the hospitality industry."
        points={[
          "Software & AI product studio",
          "Close to our customers",
          "Direct access to the builders",
          "Continuously improving",
        ]}
        image={housekeeping}
        imageAlt="Hotel housekeeping team at work"
      />
      <CtaBand title="Let's make your hotel run smoother." />
    </>
  );
}
