import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "Owner Reports — Wayinn" },
      { name: "description", content: "Occupancy, revenue, collections and outstanding balances at a glance." },
      { property: "og:title", content: "Owner Reports — Wayinn" },
      { property: "og:description", content: "Occupancy, revenue, collections and outstanding balances at a glance." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Wayinn" title="Owner Reports" intro="Occupancy, revenue, collections and outstanding balances at a glance." />
      <CtaBand />
    </>
  );
}
