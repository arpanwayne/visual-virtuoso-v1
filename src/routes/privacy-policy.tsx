import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Wayinn" },
      { name: "description", content: "How Wayinn handles personal data. Draft for legal review." },
      { property: "og:title", content: "Privacy Policy — Wayinn" },
      { property: "og:description", content: "How Wayinn handles personal data. Draft for legal review." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Wayinn" title="Privacy Policy" intro="How Wayinn handles personal data. Draft for legal review." />
      <CtaBand />
    </>
  );
}
