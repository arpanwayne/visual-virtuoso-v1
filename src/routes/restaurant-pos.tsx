import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/restaurant-pos")({
  head: () => ({
    meta: [
      { title: "Restaurant POS — Wayinn" },
      { name: "description", content: "Menus, kitchen order tickets, room-service orders and restaurant billing." },
      { property: "og:title", content: "Restaurant POS — Wayinn" },
      { property: "og:description", content: "Menus, kitchen order tickets, room-service orders and restaurant billing." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Wayinn" title="Restaurant POS" intro="Menus, kitchen order tickets, room-service orders and restaurant billing." />
      <CtaBand />
    </>
  );
}
