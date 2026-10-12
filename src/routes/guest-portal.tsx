import { createFileRoute } from "@tanstack/react-router";
import { PageHero, FeatureGrid, SplitShowcase, CtaBand } from "@/components/site/Blocks";
import { Section, Steps, FaqList } from "@/components/site/PageBlocks";
import guestQr from "@/assets/guest-qr.jpg";

export const Route = createFileRoute("/guest-portal")({
  head: () => ({
    meta: [
      { title: "QR Guest Portal — Wayinn" },
      {
        name: "description",
        content:
          "A QR code in every room lets guests view menus, order food and request amenities or maintenance from their own phone.",
      },
      { property: "og:title", content: "QR Guest Portal — Wayinn" },
      {
        property: "og:description",
        content: "Guests order and request from their phone — no app download.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="QR Guest Portal"
        title="Your front desk, in every guest's pocket."
        intro="Guests scan the QR code in their room and get menus, service requests and checkout help on their own phone — no app to install, no phone calls to the desk."
        image={guestQr}
        imageAlt="Guest scanning a QR code in a hotel room"
      />

      <Section
        eyebrow="What guests can do"
        title="Fewer calls. Faster service."
        intro="Every request goes straight to the right team and is tracked until it's done."
      >
        <FeatureGrid
          items={[
            {
              title: "Digital menus",
              desc: "Always-current restaurant and room-service menus, with items that are out of stock hidden automatically.",
              points: ["Photos and descriptions", "Variants and add-ons", "Live availability"],
            },
            {
              title: "Room-service ordering",
              desc: "Guests place an order and it appears on the kitchen board, charged to their room.",
              points: ["Orders to the kitchen", "Posted to room folio", "Delivery updates"],
            },
            {
              title: "Amenity requests",
              desc: "Extra towels, pillows, toiletries — requested in two taps and routed to housekeeping.",
              points: [
                "Pre-set request types",
                "Routed to the right team",
                "Status visible to staff",
              ],
            },
            {
              title: "Maintenance requests",
              desc: "Report a leaking tap or a faulty AC with a short note, and the issue is logged for your team.",
              points: ["Simple issue form", "Logged against the room", "Tracked to completion"],
            },
            {
              title: "Checkout help",
              desc: "Guests can ask for late checkout or a bill in advance without queuing at the desk.",
              points: ["Late-checkout requests", "Bill request", "Reduced desk queues"],
            },
            {
              title: "Your branding",
              desc: "A clean, mobile-first portal that carries your hotel's name and contact details.",
              points: ["Hotel name and details", "Mobile-first design", "Multi-language ready"],
            },
          ]}
        />
      </Section>

      <SplitShowcase
        dark
        eyebrow="On the guest's phone"
        title="Simple enough that nobody needs instructions."
        body="A short, friendly flow: scan, tap what you need, done. Staff get the request instantly."
        points={[
          "No app download",
          "Works on any modern phone",
          "One QR per room",
          "Requests tracked end to end",
        ]}
        mock="phone"
      />

      <Section eyebrow="How it works" title="Scan, request, delivered.">
        <Steps
          items={[
            { title: "Scan", desc: "The guest scans the QR code placed in their room." },
            { title: "Choose", desc: "They pick a menu item, amenity or service request." },
            {
              title: "Route",
              desc: "Wayinn sends it to the kitchen, housekeeping or maintenance.",
            },
            { title: "Done", desc: "Staff mark it complete and any charge goes to the folio." },
          ]}
        />
      </Section>

      <Section eyebrow="Questions" title="Guest portal FAQ.">
        <div className="max-w-3xl">
          <FaqList
            items={[
              {
                q: "Do guests need to install an app?",
                a: "No. The portal opens in the phone's browser when the QR code is scanned.",
              },
              {
                q: "Can I decide which requests guests can make?",
                a: "Yes. You choose which menus and request types are available.",
              },
              {
                q: "Where do requests go?",
                a: "Orders go to the kitchen board; amenity and maintenance requests go to the relevant team's task list.",
              },
            ]}
          />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
