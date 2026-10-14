import { createFileRoute } from "@tanstack/react-router";
import { PageHero, FeatureGrid, SplitShowcase, CtaBand } from "@/components/site/Blocks";
import { Section, Steps, FaqList } from "@/components/site/PageBlocks";
import restaurant from "@/assets/restaurant.jpg";

export const Route = createFileRoute("/restaurant-pos")({
  head: () => ({
    meta: [
      { title: "Restaurant POS — Wayinn" },
      {
        name: "description",
        content:
          "Menus, table orders, KOT tickets, room-service orders and restaurant billing connected to your hotel.",
      },
      { property: "og:title", content: "Restaurant POS — Wayinn" },
      {
        property: "og:description",
        content: "A hotel-aware restaurant POS with KOTs and room-service orders.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="overflow-x-clip">
      <PageHero variant="fullbleed" chips={["KOT board","Room service → folio","Tax-ready bills"]}
        eyebrow="Restaurant POS"
        title="From table to kitchen to folio — without re-keying."
        intro="Take orders at the table or from a guest room, send them to the kitchen instantly, and post the bill to the guest's folio or settle it on the spot."
        image={restaurant}
        imageAlt="Chef plating a dish at the kitchen pass"
      />

      <Section tone="tint"
        eyebrow="What's inside"
        title="A POS that understands hotels."
        intro="Because it's part of Wayinn, room-service and restaurant sales land on the right guest bill automatically."
      >
        <FeatureGrid variant="rows"
          items={[
            {
              title: "Menus & variants",
              desc: "Build categories, items, sizes and add-ons once and update prices in a single place.",
              points: ["Categories and items", "Variants and add-ons", "Mark items unavailable"],
            },
            {
              title: "KOT tickets",
              desc: "Orders reach the kitchen board the second they're placed, grouped and timed.",
              points: [
                "Live kitchen board",
                "Order status tracking",
                "Separate kitchen & bar tickets",
              ],
            },
            {
              title: "Table orders",
              desc: "Open, edit and merge table orders quickly during a busy service.",
              points: ["Table-wise orders", "Split or merge bills", "Order notes for the kitchen"],
            },
            {
              title: "Room-service orders",
              desc: "Orders from a guest room are charged straight to that room's folio.",
              points: ["Room-linked orders", "Post to folio", "Delivery status"],
            },
            {
              title: "Restaurant billing",
              desc: "Generate itemised bills with taxes, discounts and multiple payment modes.",
              points: ["Tax-ready invoices", "Discounts with reasons", "Cash, card and UPI notes"],
            },
            {
              title: "Daily sales view",
              desc: "See what sold, what didn't and how the day closed — without exporting spreadsheets.",
              points: ["Item-wise sales", "Category summaries", "Shift-wise totals"],
            },
          ]}
        />
      </Section>

      <SplitShowcase
        dark
        reverse
        eyebrow="Kitchen board"
        title="Tickets that flow, not pile up."
        body="Every order lands on the kitchen board with items, notes and timing, so the pass runs smoothly."
        points={[
          "New → preparing → ready",
          "Order timing visible",
          "Room-service flagged",
          "No handwritten chits",
        ]}
        mock="kot"
      />

      <Section tone="wine" eyebrow="How it works" title="One order, three places updated.">
        <Steps variant="line" dark
          items={[
            { title: "Order", desc: "Staff add items from a table or a guest room." },
            { title: "Cook", desc: "The kitchen board shows the ticket immediately." },
            { title: "Serve", desc: "Mark ready and deliver to the table or the room." },
            { title: "Bill", desc: "Settle at the table or post the charge to the guest folio." },
          ]}
        />
      </Section>

      <Section side eyebrow="Questions" title="Restaurant POS FAQ.">
        <div className="max-w-3xl">
          <FaqList variant="split"
            items={[
              {
                q: "Can I use it only for my restaurant?",
                a: "Wayinn is designed for hotels with restaurants, so the POS works best alongside the rest of the system. Talk to us about your setup.",
              },
              {
                q: "Do room-service orders reach the guest bill?",
                a: "Yes. Orders linked to a room can be posted to that guest's folio so they settle everything at checkout.",
              },
              {
                q: "Can I edit menu prices later?",
                a: "Yes. Menu items, variants and prices can be updated at any time.",
              },
            ]}
          />
        </div>
      </Section>
      <CtaBand variant="split" />
    </div>
  );
}
