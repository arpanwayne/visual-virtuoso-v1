import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Wayinn" },
      { name: "description", content: "Refund and cancellation policy. Draft for legal review." },
      { property: "og:title", content: "Refund Policy — Wayinn" },
      { property: "og:description", content: "Refund and cancellation policy. Draft for legal review." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Wayinn" title="Refund Policy" intro="Refund and cancellation policy. Draft for legal review." />
      <CtaBand />
    </>
  );
}
