import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/book-demo")({
  head: () => ({
    meta: [
      { title: "Book a Demo — Wayinn" },
      { name: "description", content: "See Wayinn running on your hotel's workflow." },
      { property: "og:title", content: "Book a Demo — Wayinn" },
      { property: "og:description", content: "See Wayinn running on your hotel's workflow." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Wayinn" title="Book a Demo" intro="See Wayinn running on your hotel's workflow." />
      <CtaBand />
    </>
  );
}
