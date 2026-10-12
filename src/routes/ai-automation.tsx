import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { PageHero, FeatureGrid, SplitShowcase, CtaBand } from "@/components/site/Blocks";
import { Section, Steps, FaqList, InfoCards } from "@/components/site/PageBlocks";
import reception from "@/assets/reception.jpg";

export const Route = createFileRoute("/ai-automation")({
  head: () => ({
    meta: [
      { title: "AI & Automation — Wayinn" },
      {
        name: "description",
        content:
          "Staff-reviewed AI summaries, alerts and reply drafts that save time without taking control away from your team.",
      },
      { property: "og:title", content: "AI & Automation — Wayinn" },
      {
        property: "og:description",
        content:
          "Practical AI for hotels: summaries, alerts and drafts, always reviewed by your staff.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="AI & Automation"
        title="Helpful AI. Your team stays in charge."
        intro="Wayinn uses AI to summarise your day, flag things that need attention and draft routine messages — and every suggestion is reviewed by a person before it goes anywhere."
        image={reception}
        imageAlt="Hotel receptionist reviewing information on a tablet"
      />

      <Section
        eyebrow="What it does"
        title="Small time-savers that add up."
        intro="Built for the repetitive parts of running a hotel, not to replace the human parts."
      >
        <FeatureGrid
          items={[
            {
              title: "Daily summaries",
              desc: "A short written summary of occupancy, arrivals, pending tasks and collections for owners and managers.",
              points: ["Morning briefing", "Highlights and exceptions", "Reviewed before sharing"],
            },
            {
              title: "Smart alerts",
              desc: "Get nudged about things that need attention, like unpaid balances, long-pending tasks or rooms blocked for a while.",
              points: ["Pending balances", "Overdue tasks", "Rooms out of service"],
            },
            {
              title: "Message drafts",
              desc: "Draft a booking confirmation, a reply to a guest enquiry or a follow-up in seconds, then edit and send.",
              points: ["Confirmation drafts", "Reply suggestions", "Editable before sending"],
            },
            {
              title: "Review replies",
              desc: "Draft polite, on-brand replies to guest feedback for your manager to approve.",
              points: ["Tone suggestions", "Manager approval", "Consistent voice"],
            },
            {
              title: "Task suggestions",
              desc: "Suggested follow-ups from notes and requests, so small things don't get forgotten.",
              points: ["From guest requests", "From maintenance notes", "Accept or dismiss"],
            },
            {
              title: "Plain-language answers",
              desc: "Ask questions about your hotel's data in everyday words and get a clear answer.",
              points: ["Simple questions", "Linked to your data", "Role-based access"],
            },
          ]}
        />
      </Section>

      <SplitShowcase
        dark
        eyebrow="Review first"
        title="AI suggests. Staff decide."
        body="Nothing is sent to a guest or posted to a record until a team member approves it."
        points={[
          "Human-in-the-loop by design",
          "Edit any draft",
          "Clear 'AI-generated' labels",
          "You control what's enabled",
        ]}
        mock="ai"
      />

      <Section eyebrow="Our approach" title="Responsible by default.">
        <InfoCards
          items={[
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "Staff-reviewed",
              desc: "AI output is a draft. A team member reviews and approves it first.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "Role-based access",
              desc: "AI features only use data the signed-in person is allowed to see.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "Optional features",
              desc: "Turn AI features on or off to suit your hotel and your comfort level.",
            },
          ]}
        />
      </Section>

      <Section eyebrow="How it works" title="From data to draft to done.">
        <Steps
          items={[
            { title: "Observe", desc: "Wayinn looks at the day's bookings, tasks and payments." },
            { title: "Draft", desc: "It prepares a summary, alert or message draft." },
            { title: "Review", desc: "A team member reads, edits or rejects it." },
            { title: "Act", desc: "Only then is it saved, shared or sent." },
          ]}
        />
      </Section>

      <Section eyebrow="Questions" title="AI & automation FAQ.">
        <div className="max-w-3xl">
          <FaqList
            items={[
              {
                q: "Will AI message my guests automatically?",
                a: "No. AI prepares drafts and your team reviews them before anything is sent.",
              },
              {
                q: "Can I turn AI features off?",
                a: "Yes. AI features are optional and can be enabled only where you want them.",
              },
              {
                q: "Is it accurate?",
                a: "AI can make mistakes, which is why we keep a person in the loop for anything guest-facing or financial.",
              },
            ]}
          />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
