import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Wayinn" },
      { name: "description", content: "Answers to common questions about Wayinn." },
      { property: "og:title", content: "FAQ — Wayinn" },
      { property: "og:description", content: "Answers to common questions about Wayinn." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Wayinn" title="FAQ" intro="Answers to common questions about Wayinn." />
      <CtaBand />
    </>
  );
}
