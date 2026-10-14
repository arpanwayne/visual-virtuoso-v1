import { createFileRoute } from "@tanstack/react-router";
import { PageHero, FeatureGrid, SplitShowcase, CtaBand } from "@/components/site/Blocks";
import { Section, Steps, FaqList } from "@/components/site/PageBlocks";
import reception from "@/assets/reception.jpg";

export const Route = createFileRoute("/hotel-management")({
  head: () => ({
    meta: [
      { title: "Hotel & Room Management — Wayinn" },
      {
        name: "description",
        content:
          "Reservations, room allocation, check-in and checkout, guest profiles and live room status for small hotels.",
      },
      { property: "og:title", content: "Hotel & Room Management — Wayinn" },
      {
        property: "og:description",
        content: "Reservations, rooms, check-in and guest profiles in one live system.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero variant="split" chips={["Reservation calendar","Live room status","Guest profiles"]}
        eyebrow="Hotel & Room Management"
        title="Every reservation, every room, always up to date."
        intro="Wayinn gives your front desk one live view of bookings, arrivals, departures and room status — so nobody double-books, and nobody has to walk to the housekeeping closet to ask what's ready."
        image={reception}
        imageAlt="Front-desk associate using a tablet at a hotel reception at dusk"
      />

      <Section
        eyebrow="What's inside"
        title="Built around how a front desk actually works."
        intro="From the first enquiry to the final invoice, the guest journey lives in one place."
      >
        <FeatureGrid
          items={[
            {
              title: "Reservation calendar",
              desc: "A visual calendar of bookings across all your rooms. Drag, extend or move a stay without retyping anything.",
              points: [
                "Day, week and month views",
                "Colour-coded by status",
                "Quick-add walk-in bookings",
              ],
            },
            {
              title: "Check-in & checkout",
              desc: "Speed through arrivals with pre-filled guest details, and close out departures with the bill already prepared.",
              points: [
                "Arrival & departure lists",
                "ID and document notes",
                "Early / late checkout handling",
              ],
            },
            {
              title: "Room allocation",
              desc: "Assign rooms by type, floor or preference and re-assign when plans change, with conflicts flagged immediately.",
              points: ["Room types & rates", "Upgrade and room moves", "Overbooking protection"],
            },
            {
              title: "Guest profiles",
              desc: "Keep stay history, preferences and contact details together so returning guests feel recognised.",
              points: [
                "Repeat-guest history",
                "Notes and preferences",
                "Contact details in one place",
              ],
            },
            {
              title: "Live room status",
              desc: "Vacant, occupied, dirty or under maintenance — updated the moment housekeeping or the front desk changes it.",
              points: ["Four clear statuses", "Instant updates", "Linked to housekeeping tasks"],
            },
            {
              title: "Staff roles",
              desc: "Give reception, managers and owners the access they need and nothing they don't.",
              points: [
                "Role-based access",
                "Shift-friendly logins",
                "Activity visible to managers",
              ],
            },
          ]}
        />
      </Section>

      <SplitShowcase
        dark
        eyebrow="Reservation calendar"
        title="See the whole month at a glance."
        body="Plan arrivals, spot gaps between stays and fill them before they go empty."
        points={[
          "Occupancy at a glance",
          "Spot gaps and back-to-back stays",
          "Move bookings in two taps",
          "Linked to billing",
        ]}
        mock="calendar"
      />
      <SplitShowcase
        reverse
        eyebrow="Room status"
        title="One tap to update a room."
        body="Front desk and housekeeping share the same board, so the room you promise is the room that's ready."
        points={[
          "Vacant · Occupied · Dirty · Maintenance",
          "No more radio calls",
          "Status history per room",
          "Works on phone or desktop",
        ]}
        mock="rooms"
      />

      <Section eyebrow="How it works" title="From booking to checkout in four steps.">
        <Steps
          items={[
            {
              title: "Book",
              desc: "Create or import a reservation and assign a room type and rate.",
            },
            {
              title: "Arrive",
              desc: "Check the guest in from the arrivals list with their details already filled.",
            },
            {
              title: "Stay",
              desc: "Post room charges, restaurant orders and service requests to one folio.",
            },
            {
              title: "Depart",
              desc: "Close the folio, take payment and mark the room for cleaning automatically.",
            },
          ]}
        />
      </Section>

      <Section eyebrow="Questions" title="Hotel management FAQ.">
        <div className="max-w-3xl">
          <FaqList
            items={[
              {
                q: "Can I manage different room types and rates?",
                a: "Yes. You can set up room types, floors and rates, and assign rooms to each reservation.",
              },
              {
                q: "What happens if a room is double-booked?",
                a: "Wayinn flags conflicts when you allocate a room, so you can resolve them before the guest arrives.",
              },
              {
                q: "Is it usable on a phone?",
                a: "The interface is responsive, so your team can check status and arrivals from a phone or tablet.",
              },
            ]}
          />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
