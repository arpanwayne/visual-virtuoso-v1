import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Wayinn — Wayinn" },
      { name: "description", content: "Wayinn is a hotel operating system by Wayne E Solutions." },
      { property: "og:title", content: "About Wayinn — Wayinn" },
      { property: "og:description", content: "Wayinn is a hotel operating system by Wayne E Solutions." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Wayinn" title="About Wayinn" intro="Wayinn is a hotel operating system by Wayne E Solutions." />
      <CtaBand />
    </>
  );
}
