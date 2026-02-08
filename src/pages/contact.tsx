import React, { useMemo, useState } from "react";
import { site, waLink } from "../data/site";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

// Update extension if yours differs
import vava4 from "../assets/Last/vava4.webp";

/**
 * Use the official Google "Embed a map" URL for the BUSINESS listing.
 * How to get it:
 * Google Maps -> open your business -> Share -> Embed a map -> copy the src.
 */
const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Vava%27s%20Spa%20Kigali&output=embed";

/**
 * Opens the business listing on Google Maps.
 */
const MAP_OPEN_URL =
  "https://www.google.com/maps/search/?api=1&query=Vava%27s%20Spa%20Kigali";

type ServiceType = "" | "Massage Treatment" | "Spa Services";

type FormState = {
  fullName: string;
  phone: string;
  serviceType: ServiceType;
  serviceName: string;
  date: string;
  time: string;
  message: string;
};

const MASSAGE_TREATMENTS = [
  "Swedish Massage",
  "Deep Tissue Massage",
  "Hot Stone Massage",
  "Couple Massage",
  "Sports Massage",
];

const SPA_SERVICES = ["Facial", "Body Scrub", "Steam / Sauna", "Waxing", "Other"];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    phone: "",
    serviceType: "",
    serviceName: "",
    date: "",
    time: "",
    message: "",
  });

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const serviceChoices = useMemo(() => {
    if (form.serviceType === "Massage Treatment") return MASSAGE_TREATMENTS;
    if (form.serviceType === "Spa Services") return SPA_SERVICES;
    return [];
  }, [form.serviceType]);

  const canSubmit =
    !!form.fullName.trim() &&
    !!form.phone.trim() &&
    !!form.serviceType &&
    !!form.serviceName &&
    !!form.date &&
    !!form.time;

  const whatsappPrefill = useMemo(() => {
    const msg = [
      `Hello ${site.name}, I would like to request availability.`,
      `Full name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      `Service type: ${form.serviceType}`,
      `Service: ${form.serviceName}`,
      `Preferred date: ${form.date}`,
      `Preferred time: ${form.time}`,
      form.message.trim() ? `Message: ${form.message.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return waLink(site.whatsappPrimary, msg);
  }, [form]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    window.open(whatsappPrefill, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="bg-bg">
      {/* Hero (style updated only, content unchanged) */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${vava4})`,
            backgroundPosition: "75% 35%",
          }}
        />

        {/* Dark overlay for readability (keeps content readable like your example) */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Subtle vignette / depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45" />

        {/* Slight left-to-right bias so text stays crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/15 to-transparent" />

        <Container className="relative py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                Contact
              </p>
              <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-white">
                Book calmly. We reply fast.
              </h1>
              <p className="mt-4 max-w-xl text-sm sm:text-lg text-white/80 leading-relaxed">
                Share your preferred service and time. We will confirm quickly
                on WhatsApp.
              </p>
            </div>

            {/* Mini info row (same content, styled to match hero) */}
            <div className="lg:col-span-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <InfoChipHero title="Location" value={site.city} />
                <InfoChipHero
                  title="WhatsApp"
                  value={`+${site.whatsappPrimary}`}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main content */}
      <Container className="py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Form */}
          <section className="lg:col-span-7">
            <div className="rounded-[24px] border border-border bg-card p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                    Quick booking
                  </h2>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    Fill this once, then send directly to WhatsApp.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="mt-7 rounded-2xl bg-white/70 backdrop-blur border border-border/60 p-6 sm:p-8">
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <FieldLabel>Full name</FieldLabel>
                      <Input
                        value={form.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <FieldLabel>Phone number</FieldLabel>
                      <Input
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="+250 ..."
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <FieldLabel>Service type</FieldLabel>
                      <Select
                        value={form.serviceType}
                        onChange={(e) => {
                          const nextType = e.target.value as ServiceType;
                          update("serviceType", nextType);
                          update("serviceName", "");
                        }}
                        required
                      >
                        <option value="">Select</option>
                        <option value="Massage Treatment">
                          Massage Treatment
                        </option>
                        <option value="Spa Services">Spa Services</option>
                      </Select>
                    </div>

                    <div>
                      <FieldLabel>Service</FieldLabel>
                      <Select
                        value={form.serviceName}
                        onChange={(e) => update("serviceName", e.target.value)}
                        disabled={!form.serviceType}
                        required
                      >
                        <option value="">
                          {form.serviceType
                            ? "Choose service"
                            : "Choose service type first"}
                        </option>
                        {serviceChoices.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <FieldLabel>Date</FieldLabel>
                      <Input
                        type="date"
                        value={form.date}
                        onChange={(e) => update("date", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <FieldLabel>Preferred time</FieldLabel>
                      <Input
                        type="time"
                        value={form.time}
                        onChange={(e) => update("time", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <FieldLabel>Message (optional)</FieldLabel>
                    <Textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Any preferences or special requests?"
                    />
                  </div>

                  {/* Button + helper text (helper on the right) */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      type="submit"
                      size="lg"
                      variant="primary"
                      disabled={!canSubmit}
                      className="rounded-full bg-emerald-600 hover:bg-emerald-700 disabled:hover:bg-emerald-600 text-white"
                    >
                      Request availability
                    </Button>

                    {!canSubmit && (
                      <span className="text-sm text-muted sm:text-right">
                        Fill required fields to send on WhatsApp.
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-muted leading-relaxed">
                    By submitting, you agree to be contacted to confirm your
                    booking.
                  </p>
                </form>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-8 rounded-[24px] border border-border bg-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold tracking-tight">
                Quick answers
              </h3>
              <div className="mt-5 space-y-3">
                <Faq
                  q="How fast do you reply?"
                  a="Usually within minutes during working hours."
                />
                <Faq
                  q="Can I book for two people?"
                  a="Yes. Mention it in the message and we will confirm availability."
                />
                <Faq
                  q="Do you accept walk-ins?"
                  a="We recommend booking first to guarantee your preferred time."
                />
              </div>
            </div>
          </section>

          {/* Right rail */}
          <aside className="lg:col-span-5">
            <div className="rounded-[24px] border border-border bg-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold tracking-tight">
                Contact details
              </h3>

              <div className="mt-6 space-y-5 text-sm">
                <Row title="Address" value="10 KG 292 St, Kigali (Kibagabaga)" />
                <Row title="WhatsApp" value="+250 788 440 979" />
                <Row title="Email" value="info@vavaspa.com" />
                <Row
                  title="Hours"
                  value="Mon - Wed: 10:00 - 21:00 | Thu - Sun: 10:00 - 21:30"
                />
              </div>

              {/* Map embed area */}
              <div className="mt-7 overflow-hidden rounded-[18px] border border-border bg-bg">
                <div className="relative h-[240px] w-full">
                  <iframe
                    src={MAP_EMBED_SRC}
                    className="absolute inset-0 h-full w-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vava Spa on Google Maps"
                  />
                </div>

                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <p className="text-xs text-muted">
                    Open Vava’s Spa on Google Maps.
                  </p>

                  <a
                    href={MAP_OPEN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0"
                  >
                    <Button variant="secondary" size="sm">
                      Open in Maps
                    </Button>
                  </a>
                </div>
              </div>

              <p className="mt-4 text-xs text-muted">
                We keep the page calm. One form, one action, done.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}

/* UI helpers */

function InfoChipHero({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur px-5 py-4">
      <p className="text-xs uppercase tracking-[0.28em] text-white/70">
        {title}
      </p>
      <p className="mt-2 text-sm font-medium text-white">{value}</p>
    </div>
  );
}

function Row({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <p className="text-xs uppercase tracking-[0.28em] text-muted">{title}</p>
      <p className="text-sm text-right text-text">{value}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-2xl border border-border bg-bg px-5 py-4">
      <summary className="cursor-pointer text-sm font-medium">{q}</summary>
      <p className="mt-3 text-sm text-muted leading-relaxed">{a}</p>
    </details>
  );
}

/* Form atoms */

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-medium text-muted">{children}</p>;
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={[
        "mt-2 h-11 w-full rounded-xl border border-border bg-bg px-4 text-sm outline-none",
        "focus:ring-2 focus:ring-brand/25 disabled:opacity-60 disabled:cursor-not-allowed",
        props.className ?? "",
      ].join(" ")}
    />
  );
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;
function Select(props: SelectProps) {
  return (
    <select
      {...props}
      className={[
        "mt-2 h-11 w-full rounded-xl border border-border bg-bg px-4 text-sm outline-none",
        "focus:ring-2 focus:ring-brand/25 disabled:opacity-60 disabled:cursor-not-allowed",
        props.className ?? "",
      ].join(" ")}
    />
  );
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
function Textarea(props: TextareaProps) {
  return (
    <textarea
      {...props}
      className={[
        "mt-2 w-full resize-none rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none",
        "focus:ring-2 focus:ring-brand/25 disabled:opacity-60 disabled:cursor-not-allowed",
        props.className ?? "",
      ].join(" ")}
    />
  );
}
