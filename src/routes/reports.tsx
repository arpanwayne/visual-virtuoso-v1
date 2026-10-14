import { createFileRoute } from "@tanstack/react-router";
import { PageHero, FeatureGrid, SplitShowcase, CtaBand } from "@/components/site/Blocks";
import { Section, Steps, FaqList } from "@/components/site/PageBlocks";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "Owner Reports — Wayinn" },
      {
        name: "description",
        content:
          "Occupancy, revenue, collections and restaurant performance for hotel owners — without spreadsheets.",
      },
      { property: "og:title", content: "Owner Reports — Wayinn" },
      {
        property: "og:description",
        content: "Know your hotel every morning with live owner dashboards.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero variant="light" mock="chart"
        eyebrow="Owner Reports"
        title="Know your hotel every morning."
        intro="Open Wayinn and see occupancy, revenue and collections for yesterday, this week or this month — whether you're at the property or away from it."
      />

      <Section tone="tint"
        eyebrow="What you can see"
        title="The numbers owners actually ask for."
        intro="No exports, no formulas. The reports are already built from your daily operations."
      >
        <FeatureGrid variant="bento"
          items={[
            {
              title: "Occupancy",
              desc: "Rooms sold versus rooms available, by day, week and month.",
              points: ["Daily occupancy", "Arrivals & departures", "Room-type breakdown"],
            },
            {
              title: "Revenue",
              desc: "Room revenue and restaurant revenue side by side, so you see where the money comes from.",
              points: ["Rooms vs restaurant", "Average daily rate", "Period comparisons"],
            },
            {
              title: "Collections",
              desc: "What's been paid, what's pending and by which payment mode.",
              points: ["Collected by mode", "Outstanding balances", "Refunds recorded"],
            },
            {
              title: "Restaurant performance",
              desc: "Best-selling items, category sales and service-time patterns.",
              points: ["Item-wise sales", "Category summary", "Room-service share"],
            },
            {
              title: "Housekeeping & maintenance",
              desc: "How quickly rooms turn over and how many issues are open.",
              points: ["Turnaround overview", "Open issues", "Rooms out of service"],
            },
            {
              title: "Staff activity",
              desc: "A clear record of who did what, helpful for accountability and training.",
              points: ["Action history", "Role-based visibility", "Owner-only reports"],
            },
          ]}
        />
      </Section>

      <SplitShowcase
        dark
        eyebrow="Dashboard"
        title="A morning briefing, not a monthly surprise."
        body="Trends become visible early, when you can still act on them."
        points={[
          "Live from daily operations",
          "Simple charts",
          "Weekly and monthly views",
          "Owner-only access",
        ]}
        mock="chart"
      />

      <Section eyebrow="How it works" title="Reports without extra work.">
        <Steps variant="line"
          items={[
            { title: "Operate", desc: "Your team works in Wayinn as usual." },
            {
              title: "Collect",
              desc: "Bookings, orders and payments feed the reports automatically.",
            },
            { title: "Review", desc: "Owners open the dashboard whenever they like." },
            { title: "Decide", desc: "Adjust rates, staffing and menus using real numbers." },
          ]}
        />
      </Section>

      <Section tone="tint" eyebrow="Questions" title="Reports FAQ.">
        <div className="max-w-3xl">
          <FaqList variant="split"
            items={[
              {
                q: "Can I check reports when I'm away?",
                a: "Yes. Wayinn is accessible from a browser on your phone or computer.",
              },
              {
                q: "Who can see the reports?",
                a: "Access is role-based, so you decide which staff can see financial reports.",
              },
              {
                q: "Can I export data?",
                a: "Ask us during your demo about the export options available for your plan.",
              },
            ]}
          />
        </div>
      </Section>
      <CtaBand variant="split" />
    </>
  );
}
