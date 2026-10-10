import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Wayinn" },
      { name: "description", content: "Talk to the Wayinn team." },
      { property: "og:title", content: "Contact — Wayinn" },
      { property: "og:description", content: "Talk to the Wayinn team." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Wayinn" title="Contact" intro="Talk to the Wayinn team." />
      <CtaBand />
    </>
  );
}
