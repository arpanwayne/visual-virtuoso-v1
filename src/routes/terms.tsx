import { createFileRoute, Link } from "@tanstack/react-router";
import { Prose } from "@/components/site/Blocks";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Wayinn" },
      {
        name: "description",
        content: "The terms that apply when you use the Wayinn website and hotel operating system.",
      },
      { property: "og:title", content: "Terms of Service — Wayinn" },
      { property: "og:description", content: "Terms for using Wayinn." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Prose title="Terms of Service" updated="Last updated: [date to be confirmed]">
      <p>
        These Terms govern your use of this website and the Wayinn service provided by Wayne E
        Solutions ("we", "us"). By using Wayinn you agree to these Terms.
      </p>

      <h2>1. The service</h2>
      <p>
        Wayinn is a cloud-based hotel operating system that includes reservations, room management,
        restaurant POS, guest portal, housekeeping, billing, reports and optional AI features.
        Features may vary by plan.
      </p>

      <h2>2. Accounts and access</h2>
      <ul>
        <li>You must provide accurate information and keep login details secure.</li>
        <li>
          The hotel is responsible for activity under its staff accounts and for assigning roles
          appropriately.
        </li>
      </ul>

      <h2>3. Acceptable use</h2>
      <ul>
        <li>
          Do not misuse the service, attempt to break its security or access data you are not
          allowed to see.
        </li>
        <li>Do not use Wayinn for unlawful purposes.</li>
        <li>You are responsible for the data you enter and for having the right to use it.</li>
      </ul>

      <h2>4. Fees</h2>
      <p>
        Fees are set out in your quote or order. Payment terms, billing cycles and taxes [to be
        confirmed].
      </p>

      <h2>5. Your data</h2>
      <p>
        You keep ownership of the data you enter. We process it to provide the service as described
        in our{" "}
        <Link to="/privacy-policy" className="font-medium text-electric underline">
          Privacy Policy
        </Link>
        .
      </p>

      <h2>6. AI features</h2>
      <p>
        AI output may contain mistakes. You and your staff are responsible for reviewing it before
        relying on it or sharing it with guests.
      </p>

      <h2>7. Availability</h2>
      <p>
        We work to keep Wayinn available but cannot guarantee uninterrupted service. Planned
        maintenance and service levels [to be confirmed].
      </p>

      <h2>8. Liability</h2>
      <p>
        To the extent permitted by law, our liability is limited as set out in the customer
        agreement [to be confirmed by legal counsel].
      </p>

      <h2>9. Termination</h2>
      <p>
        You may stop using Wayinn in line with your agreement. We may suspend access for serious
        breaches of these Terms. Data export and deletion terms [to be confirmed].
      </p>

      <h2>10. Governing law</h2>
      <p>These Terms are governed by the laws of [jurisdiction to be confirmed].</p>

      <h2>11. Contact</h2>
      <p>
        Questions?{" "}
        <Link to="/contact" className="font-medium text-electric underline">
          Contact us
        </Link>
        .
      </p>
    </Prose>
  );
}
