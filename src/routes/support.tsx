import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Product Support — Wayinn" },
      { name: "description", content: "Get help with Wayinn." },
      { property: "og:title", content: "Product Support — Wayinn" },
      { property: "og:description", content: "Get help with Wayinn." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Wayinn" title="Product Support" intro="Get help with Wayinn." />
      <CtaBand />
    </>
  );
}
