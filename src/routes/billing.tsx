import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";

export const Route = createFileRoute("/billing")({
  head: () => ({
    meta: [
      { title: "Billing & Payments — Wayinn" },
      { name: "description", content: "Guest folios, partial payments, refunds, receipts and invoices." },
      { property: "og:title", content: "Billing & Payments — Wayinn" },
      { property: "og:description", content: "Guest folios, partial payments, refunds, receipts and invoices." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Wayinn" title="Billing & Payments" intro="Guest folios, partial payments, refunds, receipts and invoices." />
      <CtaBand />
    </>
  );
}
