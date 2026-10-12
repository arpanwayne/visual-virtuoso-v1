import { createFileRoute, Link } from "@tanstack/react-router";
import { Prose } from "@/components/site/Blocks";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Wayinn" },
      {
        name: "description",
        content: "How cancellations and refunds work for Wayinn subscriptions and services.",
      },
      { property: "og:title", content: "Refund Policy — Wayinn" },
      { property: "og:description", content: "Our approach to cancellations and refunds." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Prose title="Refund Policy" updated="Last updated: [date to be confirmed]">
      <p>
        We want you to be happy with Wayinn. This policy explains how cancellations and refunds are
        handled for fees paid to Wayne E Solutions.
      </p>

      <h2>1. Demo and evaluation</h2>
      <p>
        Demos are free. Any trial or evaluation period, if offered, will be described in your quote.
      </p>

      <h2>2. Subscription fees</h2>
      <ul>
        <li>Subscription fees are billed as set out in your quote or order.</li>
        <li>Cancellation notice period [to be confirmed].</li>
        <li>Refund eligibility for unused periods [to be confirmed].</li>
      </ul>

      <h2>3. Setup and onboarding</h2>
      <p>
        Where setup, onboarding or custom work is charged separately, refund terms for that work
        will be stated in your quote [to be confirmed].
      </p>

      <h2>4. Billing errors</h2>
      <p>
        If you believe you were charged incorrectly, tell us promptly and we'll investigate and
        correct genuine errors.
      </p>

      <h2>5. How to request a refund</h2>
      <p>
        Please{" "}
        <Link to="/contact" className="font-medium text-electric underline">
          contact us
        </Link>{" "}
        with your hotel name, the invoice reference and the reason for your request. Processing time
        and refund method [to be confirmed].
      </p>

      <h2>6. Guest refunds</h2>
      <p>
        Refunds recorded by hotels for their own guests inside Wayinn are the hotel's responsibility
        and are governed by the hotel's own policies.
      </p>
    </Prose>
  );
}
