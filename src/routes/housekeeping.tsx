import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/housekeeping")({
  head: () => ({
    meta: [
      { title: "Housekeeping & Maintenance — Wayinn" },
      { name: "description", content: "Cleaning tasks, inspections, priorities and maintenance tickets." },
      { property: "og:title", content: "Housekeeping & Maintenance — Wayinn" },
      { property: "og:description", content: "Cleaning tasks, inspections, priorities and maintenance tickets." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Wayinn" title="Housekeeping & Maintenance" intro="Cleaning tasks, inspections, priorities and maintenance tickets." />
      <CtaBand />
    </>
  );
}
