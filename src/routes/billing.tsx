import { createFileRoute } from "@tanstack/react-router";
import { PageHero, FeatureGrid, SplitShowcase, CtaBand } from "@/components/site/Blocks";
import { Section, Steps, FaqList } from "@/components/site/PageBlocks";
import reception from "@/assets/reception.jpg";

export const Route = createFileRoute("/billing")({
  head: () => ({
    meta: [
      { title: "Billing & Payments — Wayinn" },
      {
        name: "description",
        content:
          "Guest folios, invoices, payments, refunds and restaurant charges — all reconciled in one place.",
      },
      { property: "og:title", content: "Billing & Payments — Wayinn" },
      {
        property: "og:description",
        content: "One folio per guest: rooms, restaurant, extras, payments and refunds.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero variant="mock" mock="invoice"
        eyebrow="Billing & Payments"
        title="One folio. Every charge. No surprises at checkout."
        intro="Room charges, restaurant orders and extras post to a single guest folio. Take payments in any mode, issue clear invoices and record refunds with a reason."
      />

      <Section
        eyebrow="What's inside"
        title="Billing that matches how hotels charge."
        intro="Everything a guest owes in one place — and everything you've collected in another."
      >
        <FeatureGrid variant="rows"
          items={[
            {
              title: "Guest folios",
              desc: "Every stay has a running folio where room, restaurant and extra charges are collected automatically.",
              points: ["Automatic posting", "Itemised view", "Split between payers"],
            },
            {
              title: "Invoices",
              desc: "Generate clean, itemised invoices with your hotel's details and tax breakdown.",
              points: ["Itemised charges", "Tax breakdown", "Printable and shareable"],
            },
            {
              title: "Payments",
              desc: "Record advances, part-payments and final settlement using the payment modes you accept.",
              points: ["Advance & balance", "Multiple payment modes", "Payment history per stay"],
            },
            {
              title: "Refunds & adjustments",
              desc: "Handle cancellations, goodwill credits and corrections with a recorded reason and the staff member responsible.",
              points: ["Reason required", "Audit trail", "Manager approval option"],
            },
            {
              title: "Restaurant charges",
              desc: "Restaurant and room-service bills can be paid on the spot or posted to the room.",
              points: ["Post to room", "Pay at table", "One consolidated checkout"],
            },
            {
              title: "Daily collections",
              desc: "See what was collected today by mode and by staff member to close the day with confidence.",
              points: ["Collection by mode", "Shift-wise totals", "Pending balances"],
            },
          ]}
        />
      </Section>

      <SplitShowcase
        dark
        eyebrow="Invoice view"
        title="Clear invoices guests actually understand."
        body="Each line item is traceable back to a room night, an order or an extra."
        points={[
          "Room nights and rates",
          "Restaurant and extras",
          "Taxes shown clearly",
          "Payments applied",
        ]}
        mock="invoice"
      />

      <Section tone="wine" center eyebrow="How it works" title="From first charge to final receipt.">
        <Steps variant="vertical" dark
          items={[
            {
              title: "Post",
              desc: "Room and restaurant charges are added to the folio as they happen.",
            },
            {
              title: "Review",
              desc: "Reception checks the itemised folio with the guest at departure.",
            },
            { title: "Settle", desc: "Record payment in one or more modes and apply any advance." },
            { title: "Invoice", desc: "Issue the final invoice and close the folio." },
          ]}
        />
      </Section>

      <Section side eyebrow="Questions" title="Billing FAQ.">
        <div className="max-w-3xl">
          <FaqList
            items={[
              {
                q: "Can I record advance payments?",
                a: "Yes. Advances are recorded against the booking and applied to the final bill.",
              },
              {
                q: "Can I issue refunds?",
                a: "Yes. Refunds and adjustments are recorded with a reason so you keep a clear audit trail.",
              },
              {
                q: "Are taxes supported?",
                a: "Invoices can show a tax breakdown. We'll confirm the exact tax setup for your location during your demo.",
              },
            ]}
          />
        </div>
      </Section>
      <CtaBand variant="split" />
    </>
  );
}
