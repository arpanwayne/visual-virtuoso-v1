export const productLinks = [
  { to: "/hotel-management", label: "Hotel & Room Management", desc: "Reservations, rooms, check-in" },
  { to: "/restaurant-pos", label: "Restaurant POS", desc: "Menus, KOTs, room service" },
  { to: "/guest-portal", label: "QR Guest Portal", desc: "Guests order and request from their phone" },
  { to: "/housekeeping", label: "Housekeeping", desc: "Tasks, inspections, maintenance" },
  { to: "/billing", label: "Billing & Payments", desc: "Folios, invoices, refunds" },
  { to: "/reports", label: "Owner Reports", desc: "Occupancy, revenue, collections" },
  { to: "/ai-automation", label: "AI & Automation", desc: "Summaries, alerts, drafts" },
] as const;

export const solutionLinks = [
  { to: "/solutions", label: "Budget hotels" },
  { to: "/solutions", label: "Independent hotels" },
  { to: "/solutions", label: "Boutique hotels" },
  { to: "/solutions", label: "Hotels with restaurants" },
] as const;

export const companyLinks = [
  { to: "/about", label: "About Wayinn" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
  { to: "/book-demo", label: "Book a demo" },
] as const;

export const supportLinks = [
  { to: "/support", label: "Product support" },
  { to: "/faq", label: "FAQ" },
  { to: "/integrations", label: "Integrations" },
  { to: "/features", label: "All features" },
] as const;

export const legalLinks = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms" },
  { to: "/refund-policy", label: "Refund Policy" },
] as const;
