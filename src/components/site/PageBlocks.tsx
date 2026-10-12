import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { z } from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { supabase } from "@/integrations/supabase/client";
import { Reveal, SectionHeading, TiltCard } from "./Reveal";

/* ------------------------------------------------------------------ */
/* Layout helpers                                                      */
/* ------------------------------------------------------------------ */

export function Section({
  eyebrow,
  title,
  intro,
  dark = false,
  center = false,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
  center?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={`${dark ? "bg-night" : ""} py-24`}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          light={dark}
          center={center}
          {...(intro ? { intro } : {})}
        />
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}

export function StatStrip({ items }: { items: { value: string; label: string }[] }) {
  return (
    <section className="border-y bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 py-10 md:grid-cols-4">
        {items.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="px-4 py-3 text-center">
            <p className="font-display text-3xl font-bold text-electric md:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Steps({
  items,
  dark = false,
}: {
  items: { title: string; desc: string }[];
  dark?: boolean;
}) {
  return (
    <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {items.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.08}>
          <li
            className={`h-full list-none rounded-2xl border p-6 ${dark ? "glass border-ivory/10" : "bg-card shadow-soft"}`}
          >
            <span className="font-display text-4xl font-bold text-gradient">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={`mt-3 text-lg font-semibold ${dark ? "text-ivory" : ""}`}>{s.title}</h3>
            <p
              className={`mt-2 text-sm leading-relaxed ${dark ? "text-slate" : "text-muted-foreground"}`}
            >
              {s.desc}
            </p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

export function InfoCards({
  items,
  dark = false,
  cols = 3,
}: {
  items: { title: string; desc: string; icon?: ReactNode; to?: string }[];
  dark?: boolean;
  cols?: 2 | 3 | 4;
}) {
  const grid = cols === 4 ? "lg:grid-cols-4" : cols === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <div className={`grid gap-5 md:grid-cols-2 ${grid}`}>
      {items.map((c, i) => {
        const body = (
          <div
            className={`group h-full rounded-2xl border p-6 transition-shadow ${dark ? "glass border-ivory/10 hover:bg-ivory/10" : "bg-card shadow-soft hover:shadow-deep"}`}
          >
            {c.icon && (
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${dark ? "bg-amber/20 text-amber" : "bg-electric/10 text-electric"}`}
              >
                {c.icon}
              </div>
            )}
            <h3 className={`mt-4 text-lg font-semibold ${dark ? "text-ivory" : ""}`}>{c.title}</h3>
            <p
              className={`mt-2 text-sm leading-relaxed ${dark ? "text-slate" : "text-muted-foreground"}`}
            >
              {c.desc}
            </p>
            {c.to && (
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-electric">
                Learn more{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            )}
          </div>
        );
        return (
          <Reveal key={c.title} delay={(i % 3) * 0.07}>
            <TiltCard max={4} className="h-full">
              {c.to ? (
                <Link to={c.to} className="block h-full">
                  {body}
                </Link>
              ) : (
                body
              )}
            </TiltCard>
          </Reveal>
        );
      })}
    </div>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="rounded-2xl border bg-card px-6 shadow-soft">
      {items.map((f, i) => (
        <AccordionItem key={f.q} value={`q-${i}`} className="last:border-b-0">
          <AccordionTrigger className="py-5 text-base font-semibold">{f.q}</AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function Checklist({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="grid gap-2.5 sm:grid-cols-2">
      {items.map((p) => (
        <li key={p} className={`flex gap-2 text-sm ${dark ? "text-ivory/90" : ""}`}>
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
          {p}
        </li>
      ))}
    </ul>
  );
}

export function PlanCards({
  plans,
}: {
  plans: { name: string; rooms: string; blurb: string; points: string[]; featured?: boolean }[];
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {plans.map((p, i) => (
        <Reveal key={p.name} delay={i * 0.1}>
          <div
            className={`relative flex h-full flex-col rounded-3xl border p-8 ${p.featured ? "bg-night border-electric/40 shadow-deep" : "bg-card shadow-soft"}`}
          >
            {p.featured && (
              <span className="absolute -top-3 left-8 rounded-full bg-amber px-3 py-1 text-xs font-bold text-navy">
                Most popular
              </span>
            )}
            <p className={`eyebrow ${p.featured ? "text-amber" : "text-electric"}`}>{p.name}</p>
            <h3 className={`mt-3 text-3xl font-bold ${p.featured ? "text-ivory" : ""}`}>
              {p.rooms}
            </h3>
            <p className={`mt-2 text-sm ${p.featured ? "text-slate" : "text-muted-foreground"}`}>
              {p.blurb}
            </p>
            <p
              className={`mt-6 font-display text-lg font-semibold ${p.featured ? "text-ivory" : ""}`}
            >
              Custom quote
            </p>
            <ul className="mt-6 flex-1 space-y-2.5">
              {p.points.map((pt) => (
                <li key={pt} className={`flex gap-2 text-sm ${p.featured ? "text-ivory/90" : ""}`}>
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  {pt}
                </li>
              ))}
            </ul>
            <Link to="/book-demo" className={`mt-8 ${p.featured ? "btn-amber" : "btn-primary"}`}>
              Get a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function ContactCard({
  icon,
  title,
  value,
  note,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border bg-card p-5 shadow-soft">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground">{value}</p>
        {note && <p className="mt-0.5 text-xs text-muted-foreground">{note}</p>}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Forms (write to the existing Supabase tables)                       */
/* ------------------------------------------------------------------ */

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(30).optional(),
  subject: z.string().trim().min(2, "Please add a subject").max(150),
  message: z.string().trim().min(5, "Message is too short").max(2000, "Max 2000 characters"),
});

export function ContactForm() {
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = contactSchema.safeParse({ ...raw, phone: raw["phone"] || undefined });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        next[String(i.path[0])] = i.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    setBusy(true);
    const { error } = await supabase.from("contact_messages").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone ?? null,
      subject: parsed.data.subject,
      message: parsed.data.message,
    });
    setBusy(false);
    if (error) {
      toast.error("We couldn't send your message. Please try again.");
      return;
    }
    toast.success("Message sent. We'll get back to you soon.");
    form.reset();
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-3xl border bg-card p-10 text-center shadow-soft">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="mt-4 text-2xl font-bold">Thank you — message received.</h3>
        <p className="mt-2 text-muted-foreground">Our team will reply to the email you provided.</p>
        <button onClick={() => setDone(false)} className="btn-outline mt-6">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-4 rounded-3xl border bg-card p-8 shadow-soft"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" error={errors["name"]}>
          <input name="name" className="field" autoComplete="name" />
        </Field>
        <Field label="Email" error={errors["email"]}>
          <input name="email" type="email" className="field" autoComplete="email" />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone (optional)" error={errors["phone"]}>
          <input name="phone" type="tel" className="field" autoComplete="tel" />
        </Field>
        <Field label="Subject" error={errors["subject"]}>
          <input name="subject" className="field" />
        </Field>
      </div>
      <Field label="Message" error={errors["message"]}>
        <textarea name="message" rows={6} className="field resize-y" />
      </Field>
      <button type="submit" disabled={busy} className="btn-primary w-full sm:w-auto">
        {busy ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send message <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}

const demoFeatures = [
  "Reservations & rooms",
  "Restaurant POS",
  "QR guest portal",
  "Housekeeping",
  "Billing & invoices",
  "Owner reports",
  "AI & automation",
];

const demoSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  hotel_name: z.string().trim().min(2, "Enter your hotel name").max(150),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Enter a phone number").max(30),
  location: z.string().trim().min(2, "Enter city / location").max(150),
  rooms: z.coerce
    .number({ invalid_type_error: "Enter number of rooms" })
    .int()
    .min(1, "At least 1 room")
    .max(500, "Max 500"),
  current_system: z.string().trim().max(150).optional(),
  preferred_date: z.string().optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Please accept to continue" }) }),
});

export function DemoForm() {
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [features, setFeatures] = useState<string[]>([]);

  const toggle = (f: string) =>
    setFeatures((cur) => (cur.includes(f) ? cur.filter((x) => x !== f) : [...cur, f]));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw = Object.fromEntries(fd) as Record<string, string>;
    const parsed = demoSchema.safeParse({
      ...raw,
      current_system: raw["current_system"] || undefined,
      preferred_date: raw["preferred_date"] || undefined,
      consent: fd.get("consent") === "on",
    });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        next[String(i.path[0])] = i.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    setBusy(true);
    const d = parsed.data;
    const { error } = await supabase.from("demo_requests").insert({
      name: d.name,
      hotel_name: d.hotel_name,
      email: d.email,
      phone: d.phone,
      location: d.location,
      rooms: d.rooms,
      current_system: d.current_system ?? null,
      features,
      preferred_date: d.preferred_date ?? null,
      consent: true,
    });
    setBusy(false);
    if (error) {
      toast.error("We couldn't submit your request. Please try again.");
      return;
    }
    toast.success("Demo request received!");
    form.reset();
    setFeatures([]);
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-3xl border bg-card p-10 text-center shadow-soft">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="mt-4 text-2xl font-bold">You're on our demo calendar.</h3>
        <p className="mt-2 text-muted-foreground">
          We'll contact you shortly to confirm a time for your guided walkthrough.
        </p>
        <Link to="/features" className="btn-primary mt-6">
          Explore features meanwhile
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-4 rounded-3xl border bg-card p-8 shadow-soft"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" error={errors["name"]}>
          <input name="name" className="field" autoComplete="name" />
        </Field>
        <Field label="Hotel name" error={errors["hotel_name"]}>
          <input name="hotel_name" className="field" autoComplete="organization" />
        </Field>
        <Field label="Work email" error={errors["email"]}>
          <input name="email" type="email" className="field" autoComplete="email" />
        </Field>
        <Field label="Phone / WhatsApp" error={errors["phone"]}>
          <input name="phone" type="tel" className="field" autoComplete="tel" />
        </Field>
        <Field label="City / location" error={errors["location"]}>
          <input name="location" className="field" />
        </Field>
        <Field label="Number of rooms" error={errors["rooms"]}>
          <input name="rooms" type="number" min={1} max={500} className="field" />
        </Field>
        <Field label="Current system (optional)" error={errors["current_system"]}>
          <input
            name="current_system"
            className="field"
            placeholder="Excel, paper register, other software…"
          />
        </Field>
        <Field label="Preferred demo date (optional)" error={errors["preferred_date"]}>
          <input name="preferred_date" type="date" className="field" />
        </Field>
      </div>
      <fieldset>
        <legend className="mb-2 text-sm font-medium">What would you like to see?</legend>
        <div className="flex flex-wrap gap-2">
          {demoFeatures.map((f) => {
            const on = features.includes(f);
            return (
              <button
                type="button"
                key={f}
                onClick={() => toggle(f)}
                aria-pressed={on}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${on ? "border-electric bg-electric/10 text-electric" : "hover:border-electric/50"}`}
              >
                {on && <Check className="mr-1 inline h-3.5 w-3.5" />}
                {f}
              </button>
            );
          })}
        </div>
      </fieldset>
      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input name="consent" type="checkbox" className="mt-1 h-4 w-4 accent-[var(--electric)]" />
        <span>
          I agree that Wayinn may contact me about this demo request and process my details as
          described in the{" "}
          <Link to="/privacy-policy" className="font-medium text-electric underline">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
      {errors["consent"] && <p className="text-xs text-destructive">{errors["consent"]}</p>}
      <button type="submit" disabled={busy} className="btn-primary w-full sm:w-auto">
        {busy ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
          </>
        ) : (
          <>
            Request my demo <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
