import { createFileRoute } from "@tanstack/react-router";
import diningService from "@/assets/dining-service.jpg";
import { Hero } from "@/components/site/Hero";
import { VideoSection } from "@/components/site/VideoSection";
import { SplitShowcase, CtaBand } from "@/components/site/Blocks";
import housekeeping from "@/assets/housekeeping.jpg";
import guestQr from "@/assets/guest-qr.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wayinn — The Hotel Operating System for Small Hotels" },
      { name: "description", content: "Reservations, rooms, restaurant POS, housekeeping and billing in one connected system for hotels up to 50 rooms." },
      { property: "og:title", content: "Wayinn — The Hotel Operating System" },
      { property: "og:description", content: "One connected system for reservations, rooms, billing and restaurant operations." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <VideoSection />
      <SplitShowcase eyebrow="Rooms" title="Every room, live." body="See availability, allocate rooms and track status in real time." points={["Reservation calendar", "Check-in & checkout", "Guest profiles", "Room status"]} mock="calendar" />
      <SplitShowcase dark reverse eyebrow="Restaurant" title="Kitchen orders that flow." body="Orders from tables and rooms land on the kitchen board instantly." points={["Menus & variants", "KOT tickets", "Room-service orders", "Restaurant billing"]} image={diningService} imageAlt="Waiter serving guests in a hotel restaurant" mock="kot" />
      <SplitShowcase eyebrow="Guest portal" title="Guests ask from their phone." body="A QR code in every room opens menus and service requests." points={["Digital menus", "Amenity requests", "Maintenance requests", "Checkout help"]} image={guestQr} imageAlt="Guest scanning a QR code in a hotel room" />
      <SplitShowcase dark reverse eyebrow="Housekeeping" title="Clean rooms, faster turnover." body="Assign, prioritise and inspect every task." points={["Task assignments", "Priorities", "Inspections", "History"]} image={housekeeping} imageAlt="Housekeeper making a bed" mock="tasks" />
      <SplitShowcase eyebrow="Reports & AI" title="Know your hotel every morning." body="Owner dashboards plus staff-reviewed AI summaries." points={["Occupancy", "Revenue", "Collections", "Daily summaries"]} mock="chart" />
      <CtaBand />
    </>
  );
}
