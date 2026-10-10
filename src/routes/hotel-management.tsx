import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/hotel-management")({
  head: () => ({
    meta: [
      { title: "Hotel & Room Management — Wayinn" },
      { name: "description", content: "Reservations, room allocation, check-in, checkout and live room status." },
      { property: "og:title", content: "Hotel & Room Management — Wayinn" },
      { property: "og:description", content: "Reservations, room allocation, check-in, checkout and live room status." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Wayinn" title="Hotel & Room Management" intro="Reservations, room allocation, check-in, checkout and live room status." />
      <CtaBand />
    </>
  );
}
