import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Wayinn" },
      { name: "description", content: "Contact us for pricing tailored to your hotel." },
      { property: "og:title", content: "Pricing — Wayinn" },
      { property: "og:description", content: "Contact us for pricing tailored to your hotel." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Wayinn" title="Pricing" intro="Contact us for pricing tailored to your hotel." />
      <CtaBand />
    </>
  );
}
