import { createFileRoute } from "@tanstack/react-router";
import { BedDouble, ChefHat, QrCode, Sparkles, Receipt, LineChart, Bot } from "lucide-react";
import { PageHero, SplitShowcase, CtaBand } from "@/components/site/Blocks";
import { Section, InfoCards, StatStrip } from "@/components/site/PageBlocks";
import restaurant from "@/assets/restaurant.jpg";
import housekeeping from "@/assets/housekeeping.jpg";
import guestQr from "@/assets/guest-qr.jpg";
import reception from "@/assets/reception.jpg";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "All Features — Wayinn" },
      {
        name: "description",
        content:
          "Explore every Wayinn module: reservations, restaurant POS, QR guest portal, housekeeping, billing, owner reports and AI automation.",
      },
      { property: "og:title", content: "All Features — Wayinn" },
      { property: "og:description", content: "Seven connected modules for running a small hotel." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything your hotel runs on, in one system."
        intro="Seven connected modules share the same guests, rooms and bills — so information entered once shows up everywhere it's needed."
        image={reception}
        imageAlt="Hotel front desk at dusk"
      />
      <StatStrip
        items={[
          { value: "7", label: "Connected modules" },
          { value: "≤ 50", label: "Rooms — our sweet spot" },
          { value: "1", label: "Guest folio for every stay" },
          { value: "0", label: "App downloads for guests" },
        ]}
      />

      <Section
        eyebrow="Modules"
        title="Pick a module to go deeper."
        intro="Each one works on its own and gets better when connected to the others."
      >
        <InfoCards
          items={[
            {
              to: "/hotel-management",
              icon: <BedDouble className="h-5 w-5" />,
              title: "Hotel & Room Management",
              desc: "Reservations, room allocation, check-in/out and live room status.",
            },
            {
              to: "/restaurant-pos",
              icon: <ChefHat className="h-5 w-5" />,
              title: "Restaurant POS",
              desc: "Menus, KOTs, table orders, room service and restaurant billing.",
            },
            {
              to: "/guest-portal",
              icon: <QrCode className="h-5 w-5" />,
              title: "QR Guest Portal",
              desc: "Guests order and request services from their own phone.",
            },
            {
              to: "/housekeeping",
              icon: <Sparkles className="h-5 w-5" />,
              title: "Housekeeping",
              desc: "Task assignments, priorities, inspections and maintenance.",
            },
            {
              to: "/billing",
              icon: <Receipt className="h-5 w-5" />,
              title: "Billing & Payments",
              desc: "Folios, invoices, payments and refunds with an audit trail.",
            },
            {
              to: "/reports",
              icon: <LineChart className="h-5 w-5" />,
              title: "Owner Reports",
              desc: "Occupancy, revenue and collections at a glance.",
            },
            {
              to: "/ai-automation",
              icon: <Bot className="h-5 w-5" />,
              title: "AI & Automation",
              desc: "Staff-reviewed summaries, alerts and message drafts.",
            },
          ]}
        />
      </Section>

      <SplitShowcase
        eyebrow="Rooms"
        title="Every room, live."
        body="See availability, allocate rooms and track status in real time."
        points={["Reservation calendar", "Check-in & checkout", "Guest profiles", "Room status"]}
        mock="calendar"
      />
      <SplitShowcase
        dark
        reverse
        eyebrow="Restaurant"
        title="Kitchen orders that flow."
        body="Orders from tables and rooms land on the kitchen board instantly."
        points={["Menus & variants", "KOT tickets", "Room-service orders", "Restaurant billing"]}
        image={restaurant}
        imageAlt="Chef plating dishes at the kitchen pass"
      />
      <SplitShowcase
        eyebrow="Guest portal"
        title="Guests ask from their phone."
        body="A QR code in every room opens menus and service requests."
        points={["Digital menus", "Amenity requests", "Maintenance requests", "Checkout help"]}
        image={guestQr}
        imageAlt="Guest scanning a QR code in a hotel room"
      />
      <SplitShowcase
        dark
        reverse
        eyebrow="Housekeeping"
        title="Clean rooms, faster turnover."
        body="Assign, prioritise and inspect every task."
        points={["Task assignments", "Priorities", "Inspections", "History"]}
        image={housekeeping}
        imageAlt="Housekeeper making a bed"
        mock="tasks"
      />
      <SplitShowcase
        eyebrow="Billing"
        title="One folio per stay."
        body="Every charge lands in the right place and every payment is recorded."
        points={["Itemised folios", "Invoices", "Payments & refunds", "Daily collections"]}
        mock="invoice"
      />
      <SplitShowcase
        dark
        reverse
        eyebrow="Reports & AI"
        title="Know your hotel every morning."
        body="Owner dashboards plus staff-reviewed AI summaries."
        points={["Occupancy", "Revenue", "Collections", "Daily summaries"]}
        mock="chart"
      />
      <CtaBand />
    </>
  );
}
