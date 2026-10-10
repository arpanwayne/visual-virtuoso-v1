import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/ai-automation")({
  head: () => ({
    meta: [
      { title: "AI & Automation — Wayinn" },
      { name: "description", content: "Daily summaries, alerts and staff-reviewed message drafts." },
      { property: "og:title", content: "AI & Automation — Wayinn" },
      { property: "og:description", content: "Daily summaries, alerts and staff-reviewed message drafts." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Wayinn" title="AI & Automation" intro="Daily summaries, alerts and staff-reviewed message drafts." />
      <CtaBand />
    </>
  );
}
