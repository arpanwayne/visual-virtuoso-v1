import { createFileRoute } from "@tanstack/react-router";
import { Building2, Hotel, Gem, UtensilsCrossed } from "lucide-react";
import { PageHero, SplitShowcase, CtaBand } from "@/components/site/Blocks";
import { Section, InfoCards, Checklist } from "@/components/site/PageBlocks";
import reception from "@/assets/reception.jpg";
import restaurant from "@/assets/restaurant.jpg";
import housekeeping from "@/assets/housekeeping.jpg";
import guestQr from "@/assets/guest-qr.jpg";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions for Every Small Hotel — Wayinn" },
      {
        name: "description",
        content:
          "Wayinn fits budget hotels, independent hotels, boutique hotels and hotels with restaurants — up to 50 rooms.",
      },
      { property: "og:title", content: "Solutions — Wayinn" },
      {
        property: "og:description",
        content: "Hotel software that fits the way your property runs.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero variant="light"
        eyebrow="Solutions"
        title="Built for hotels with up to 50 rooms."
        intro="Big-chain software is too heavy. Spreadsheets are too fragile. Wayinn sits in between: simple enough for a small team, complete enough to run the whole property."
        image={reception}
        imageAlt="Boutique hotel reception"
      />

      <Section eyebrow="Who it's for" title="Four kinds of hotels, one connected system.">
        <InfoCards
          cols={4}
          items={[
            {
              icon: <Hotel className="h-5 w-5" />,
              title: "Budget hotels",
              desc: "Fast check-ins, clear room status and simple billing for high-turnover properties.",
            },
            {
              icon: <Building2 className="h-5 w-5" />,
              title: "Independent hotels",
              desc: "Run reservations, staff and finances without a head-office IT team.",
            },
            {
              icon: <Gem className="h-5 w-5" />,
              title: "Boutique hotels",
              desc: "Personal service at scale with guest profiles, preferences and a smooth digital experience.",
            },
            {
              icon: <UtensilsCrossed className="h-5 w-5" />,
              title: "Hotels with restaurants",
              desc: "Rooms and restaurant on one system, with room-service charges on the guest folio.",
            },
          ]}
        />
      </Section>

      <SplitShowcase
        eyebrow="Budget hotels"
        title="Speed where it matters."
        body="Quick check-ins, a clear view of which rooms are ready and invoices that don't take a minute to prepare."
        points={[
          "Fast arrivals & departures",
          "Live room status",
          "Simple billing",
          "Easy to train new staff",
        ]}
        mock="rooms"
      />
      <SplitShowcase
        dark
        reverse
        eyebrow="Independent hotels"
        title="Run the whole property from one place."
        body="Owners get visibility without being on site; managers get tools their teams will actually use."
        points={[
          "Owner dashboards",
          "Role-based access",
          "Staff activity log",
          "Works on phone and desktop",
        ]}
        image={housekeeping}
        imageAlt="Housekeeping team at an independent hotel"
        mock="chart"
      />
      <SplitShowcase
        eyebrow="Boutique hotels"
        title="Make every guest feel known."
        body="Keep preferences and stay history handy, and let guests ask for what they need from their phone."
        points={["Guest profiles", "QR guest portal", "Amenity requests", "Stay history"]}
        image={guestQr}
        imageAlt="Guest using a phone in a boutique hotel room"
      />
      <SplitShowcase
        dark
        reverse
        eyebrow="Hotels with restaurants"
        title="One bill, one system."
        body="Tables, kitchen, room service and the guest folio all talk to each other."
        points={["Restaurant POS", "KOT tickets", "Room-service to folio", "Item-wise sales"]}
        image={restaurant}
        imageAlt="Restaurant kitchen in a hotel"
      />

      <Section side tone="tint" eyebrow="Fit check" title="Wayinn is a great fit if…">
        <div className="max-w-3xl rounded-3xl border bg-card p-8 shadow-soft">
          <Checklist
            items={[
              "You have up to 50 rooms",
              "You're still using registers or spreadsheets",
              "Your restaurant and rooms use different systems",
              "You want to see your numbers without waiting for a report",
              "Your team needs something quick to learn",
              "You'd like guests to request services from their phone",
            ]}
          />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
