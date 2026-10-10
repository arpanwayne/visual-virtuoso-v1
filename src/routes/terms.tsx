import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — Wayinn" },
      { name: "description", content: "Terms of use for Wayinn. Draft for legal review." },
      { property: "og:title", content: "Terms and Conditions — Wayinn" },
      { property: "og:description", content: "Terms of use for Wayinn. Draft for legal review." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Wayinn" title="Terms and Conditions" intro="Terms of use for Wayinn. Draft for legal review." />
      <CtaBand />
    </>
  );
}
