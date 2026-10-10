import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Wayinn" },
      { name: "description", content: "Built for budget, independent and boutique hotels with up to 50 rooms." },
      { property: "og:title", content: "Solutions — Wayinn" },
      { property: "og:description", content: "Built for budget, independent and boutique hotels with up to 50 rooms." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Wayinn" title="Solutions" intro="Built for budget, independent and boutique hotels with up to 50 rooms." />
      <CtaBand />
    </>
  );
}
