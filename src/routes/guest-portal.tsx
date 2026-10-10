import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/guest-portal")({
  head: () => ({
    meta: [
      { title: "QR Guest Portal — Wayinn" },
      { name: "description", content: "Guests scan a QR code to order food and request services from their phone." },
      { property: "og:title", content: "QR Guest Portal — Wayinn" },
      { property: "og:description", content: "Guests scan a QR code to order food and request services from their phone." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Wayinn" title="QR Guest Portal" intro="Guests scan a QR code to order food and request services from their phone." />
      <CtaBand />
    </>
  );
}
