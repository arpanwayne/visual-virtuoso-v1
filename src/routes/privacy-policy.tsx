import { createFileRoute, Link } from "@tanstack/react-router";
import { Prose } from "@/components/site/Blocks";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Wayinn" },
      {
        name: "description",
        content: "How Wayinn collects, uses and protects personal information.",
      },
      { property: "og:title", content: "Privacy Policy — Wayinn" },
      { property: "og:description", content: "How Wayinn handles your information." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Prose title="Privacy Policy" updated="Last updated: [date to be confirmed]">
      <p>
        This Privacy Policy explains how Wayne E Solutions ("we", "us") collects, uses and protects
        personal information when you visit this website or use Wayinn, our hotel operating system.
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li>
          <strong>Information you give us:</strong> name, email, phone number, hotel name, location,
          number of rooms and the messages you send through our contact and demo forms.
        </li>
        <li>
          <strong>Information from using Wayinn:</strong> data your hotel enters into the product,
          such as bookings, guest details, orders, tasks and billing records.
        </li>
        <li>
          <strong>Technical information:</strong> basic device and browser data and usage
          information needed to run and secure the service.
        </li>
      </ul>

      <h2>2. How we use information</h2>
      <ul>
        <li>To respond to enquiries and arrange demos.</li>
        <li>To provide, maintain and improve Wayinn.</li>
        <li>To provide support and communicate about your account.</li>
        <li>To keep the service secure and prevent misuse.</li>
        <li>To meet legal obligations.</li>
      </ul>

      <h2>3. Hotels and guest data</h2>
      <p>
        Hotels using Wayinn decide what guest information they enter. In most cases the hotel is
        responsible for that data and Wayne E Solutions processes it on the hotel's behalf to
        provide the service. Details are set out in the customer agreement [to be confirmed].
      </p>

      <h2>4. AI features</h2>
      <p>
        Where AI features are enabled, they generate drafts and summaries from data the signed-in
        user is allowed to access. Output is reviewed by staff before it is used. Details of AI
        providers and processing [to be confirmed].
      </p>

      <h2>5. Sharing</h2>
      <p>
        We do not sell personal information. We may share information with service providers who
        help us run the service (for example hosting and email), and where required by law. A list
        of providers [to be confirmed].
      </p>

      <h2>6. Retention</h2>
      <p>
        We keep information for as long as needed for the purposes above or as required by law.
        Specific retention periods [to be confirmed].
      </p>

      <h2>7. Security</h2>
      <p>
        We use access controls and secure infrastructure to protect information. No system is
        perfectly secure, but we work to reduce risk.
      </p>

      <h2>8. Your rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct or delete your
        information. To make a request,{" "}
        <Link to="/contact" className="font-medium text-electric underline">
          contact us
        </Link>
        .
      </p>

      <h2>9. Changes</h2>
      <p>We may update this policy. The date at the top shows when it was last revised.</p>

      <h2>10. Contact</h2>
      <p>Wayne E Solutions, [registered address to be confirmed]. Email: [to be confirmed].</p>
    </Prose>
  );
}
