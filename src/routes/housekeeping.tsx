import { createFileRoute } from "@tanstack/react-router";
import { PageHero, FeatureGrid, SplitShowcase, CtaBand } from "@/components/site/Blocks";
import { Section, Steps, FaqList } from "@/components/site/PageBlocks";
import housekeeping from "@/assets/housekeeping.jpg";

export const Route = createFileRoute("/housekeeping")({
  head: () => ({
    meta: [
      { title: "Housekeeping & Maintenance — Wayinn" },
      {
        name: "description",
        content:
          "Assign cleaning tasks, set priorities, inspect rooms and track maintenance with a shared board.",
      },
      { property: "og:title", content: "Housekeeping & Maintenance — Wayinn" },
      {
        property: "og:description",
        content: "Clean rooms, faster turnover — tasks, inspections and maintenance in one board.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Housekeeping"
        title="Clean rooms, faster turnover."
        intro="Give your housekeeping and maintenance teams a clear task list, let supervisors prioritise and inspect, and let the front desk see exactly which rooms are ready."
        image={housekeeping}
        imageAlt="Housekeeper making a hotel bed"
      />

      <Section
        eyebrow="What's inside"
        title="Everything the floor team needs."
        intro="Simple for staff to use on a phone, clear enough for managers to trust."
      >
        <FeatureGrid
          items={[
            {
              title: "Task assignments",
              desc: "Assign rooms to staff for the day, or let tasks be created automatically at checkout.",
              points: ["Auto-create at checkout", "Assign by staff member", "Daily task list"],
            },
            {
              title: "Priorities",
              desc: "Mark early arrivals and VIP rooms as urgent so the right rooms are cleaned first.",
              points: [
                "Urgent / normal flags",
                "Arrival-aware ordering",
                "Visible to the whole team",
              ],
            },
            {
              title: "Inspections",
              desc: "Supervisors can inspect a cleaned room and send it back with a note if something is missed.",
              points: ["Pass or re-clean", "Notes for staff", "Room released to front desk"],
            },
            {
              title: "Maintenance issues",
              desc: "Log a fault against a room, block it if needed and track it until it's fixed.",
              points: [
                "Issue logged per room",
                "Block / unblock rooms",
                "Status from open to done",
              ],
            },
            {
              title: "Task history",
              desc: "See who cleaned what and when — useful for training, disputes and planning.",
              points: ["Per-room history", "Per-staff activity", "Searchable log"],
            },
            {
              title: "Linked to the front desk",
              desc: "The moment a room is marked clean and inspected, reception sees it as vacant.",
              points: ["No radio calls", "Shared room board", "Fewer delayed check-ins"],
            },
          ]}
        />
      </Section>

      <SplitShowcase
        dark
        eyebrow="Task board"
        title="One list, always current."
        body="Staff tick off tasks from their phone and supervisors see progress in real time."
        points={[
          "Pending · in progress · done",
          "Priority flags",
          "Supervisor inspection step",
          "Maintenance blocks",
        ]}
        image={housekeeping}
        imageAlt="Housekeeper preparing a room"
        mock="tasks"
      />

      <Section eyebrow="How it works" title="From checkout to ready.">
        <Steps
          items={[
            { title: "Checkout", desc: "A guest departs and the room is marked dirty." },
            { title: "Assign", desc: "A cleaning task is created and given to a staff member." },
            {
              title: "Inspect",
              desc: "The supervisor reviews and approves, or requests a re-clean.",
            },
            { title: "Ready", desc: "The room turns vacant on the front-desk board." },
          ]}
        />
      </Section>

      <Section eyebrow="Questions" title="Housekeeping FAQ.">
        <div className="max-w-3xl">
          <FaqList
            items={[
              {
                q: "Can staff use it on their phones?",
                a: "Yes. The task list is designed to work comfortably on a phone.",
              },
              {
                q: "Can a room be taken out of service?",
                a: "Yes. Log a maintenance issue and block the room so it can't be allocated until it's resolved.",
              },
              {
                q: "Do I need an inspection step?",
                a: "It's optional. Use it where a supervisor should approve a room before it's released.",
              },
            ]}
          />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
