import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CtaBand } from "@/components/site/Blocks";
import { Section, PlanCards, FaqList, Checklist } from "@/components/site/PageBlocks";
import reception from "@/assets/reception.jpg";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Wayinn" },
      {
        name: "description",
        content:
          "Simple pricing based on the size of your hotel. Book a demo to get a quote tailored to your rooms and modules.",
      },
      { property: "og:title", content: "Pricing — Wayinn" },
      { property: "og:description", content: "Pricing that scales with your room count." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Pricing that grows with your property."
        intro="Wayinn is priced by the size of your hotel and the modules you need. Tell us about your rooms and we'll send a clear quote — no hidden extras."
        image={reception}
        imageAlt="Hotel front desk"
      />

      <Section
        eyebrow="Plans"
        title="Choose the size that fits."
        intro="Every plan includes onboarding support. Final pricing is confirmed after your demo."
      >
        <PlanCards
          plans={[
            {
              name: "Starter",
              rooms: "Up to 15 rooms",
              blurb: "For small guesthouses and budget stays getting off paper.",
              points: [
                "Hotel & room management",
                "Billing & invoices",
                "Staff roles",
                "Onboarding support",
              ],
            },
            {
              name: "Growth",
              rooms: "16 – 30 rooms",
              blurb: "For hotels adding a restaurant and a guest-facing experience.",
              points: [
                "Everything in Starter",
                "Restaurant POS & KOT",
                "QR guest portal",
                "Housekeeping & maintenance",
              ],
              featured: true,
            },
            {
              name: "Pro",
              rooms: "31 – 50 rooms",
              blurb: "For busy properties that want full visibility and automation.",
              points: [
                "Everything in Growth",
                "Owner reports",
                "AI & automation",
                "Priority support",
              ],
            },
          ]}
        />
      </Section>

      <Section eyebrow="Included" title="With every plan." dark>
        <div className="max-w-3xl">
          <Checklist
            dark
            items={[
              "Guided onboarding",
              "Staff training session",
              "Role-based access",
              "Secure cloud access",
              "Regular product updates",
              "Email support",
            ]}
          />
        </div>
      </Section>

      <Section eyebrow="Questions" title="Pricing FAQ.">
        <div className="max-w-3xl">
          <FaqList
            items={[
              {
                q: "Why isn't the price listed?",
                a: "Hotels differ in room count and the modules they need, so we prepare a quote after a short conversation to keep it fair and accurate.",
              },
              {
                q: "Are there setup fees?",
                a: "Any setup or onboarding charges will be listed clearly in your quote before you decide.",
              },
              {
                q: "Can I start with fewer modules?",
                a: "Yes. You can begin with the modules you need and add others later.",
              },
              {
                q: "Is there a contract lock-in?",
                a: "Terms are shared in your quote. Ask us during the demo and we'll walk you through them.",
              },
            ]}
          />
        </div>
      </Section>
      <CtaBand
        title="Get a quote for your hotel."
        body="Share your room count and what you need. We'll respond with a clear, tailored proposal."
      />
    </>
  );
}
