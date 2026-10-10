import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "All Features — Wayinn" },
      { name: "description", content: "Every tool a small hotel needs, connected in one operating system." },
      { property: "og:title", content: "All Features — Wayinn" },
      { property: "og:description", content: "Every tool a small hotel needs, connected in one operating system." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Wayinn" title="All Features" intro="Every tool a small hotel needs, connected in one operating system." />
      <CtaBand />
    </>
  );
}
