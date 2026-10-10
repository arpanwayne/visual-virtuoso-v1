import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "Integrations — Wayinn" },
      { name: "description", content: "Supported and planned payment, messaging and printer integrations." },
      { property: "og:title", content: "Integrations — Wayinn" },
      { property: "og:description", content: "Supported and planned payment, messaging and printer integrations." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Wayinn" title="Integrations" intro="Supported and planned payment, messaging and printer integrations." />
      <CtaBand />
    </>
  );
}
