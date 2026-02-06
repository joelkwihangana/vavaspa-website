import { useMemo, useState } from "react";
import { site, waLink } from "../data/site";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

const services = [
  "Massage Therapy",
  "Spa Treatments",
  "Waxing",
  "Couple Massage",
  "Other",
];

/**
 * Use the official Google "Embed a map" URL for the BUSINESS listing.
 * How to get it:
 * Google Maps -> open your business -> Share -> Embed a map -> copy the src.
 */
const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Vava%27s%20Spa%20Kigali&output=embed";

/**
 * Open link to the actual business listing (your long link is fine, but this is cleaner).
 * This opens the place panel and reviews on Google Maps.
 */
const MAP_OPEN_URL =
  "https://www.google.com/maps/search/?api=1&query=Vava%27s%20Spa%20Kigali";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [service, setService] = useState(services[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");

  const whatsappHref = useMemo(() => {
    const msg = [
      `Hello ${site.name}, I would like to book a session.`,
      name ? `Name: ${name}` : "",
      service ? `Service: ${service}` : "",
      date ? `Preferred date: ${date}` : "",
      time ? `Preferred time: ${time}` : "",
      note ? `Note: ${note}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return waLink(site.whatsappPrimary, msg);
  }, [name, service, date, time, note]);

  return (
    <main className="bg-bg">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 opacity-[0.55]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.18),transparent_45%),radial-gradient(circle_at_80%_40%,rgba(0,0,0,0.12),transparent_50%),radial-gradient(circle_at_35%_85%,rgba(16,185,129,0.10),transparent_45%)]" />
        </div>

        <Container className="relative py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Contact
              </p>
              <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
                Book calmly. We reply fast.
              </h1>
              <p className="mt-4 max-w-xl text-sm sm:text-lg text-muted leading-relaxed">
                Share your preferred service and time. We will confirm quickly
                on WhatsApp.
              </p>
            </div>

            {/* Mini info row (no CTA spam) */}
            <div className="lg:col-span-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <InfoChip title="Location" value={site.city} />
                <InfoChip title="WhatsApp" value={`+${site.whatsappPrimary}`} />
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
                    Fill this once, then send directly to WhatsApp with one
                    click.
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <Field label="Your name (optional)">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11 w-full rounded-xl border border-border bg-bg px-4 text-sm outline-none focus:ring-2 focus:ring-brand/25"
                    placeholder="e.g. Joel"
                  />
                </Field>

                <Field label="Service">
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="h-11 w-full rounded-xl border border-border bg-bg px-4 text-sm outline-none focus:ring-2 focus:ring-brand/25"
                  >
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Preferred date (optional)">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="h-11 w-full rounded-xl border border-border bg-bg px-4 text-sm outline-none focus:ring-2 focus:ring-brand/25"
                  />
                </Field>

                <Field label="Preferred time (optional)">
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="h-11 w-full rounded-xl border border-border bg-bg px-4 text-sm outline-none focus:ring-2 focus:ring-brand/25"
                  />
                </Field>

                <div className="sm:col-span-2">
                  <Field label="Note (optional)">
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      rows={4}
                      className="w-full resize-none rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand/25"
                      placeholder="Anything we should know?"
                    />
                  </Field>
                </div>
              </div>

              {/* Single primary CTA */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted">
                  You will be redirected to WhatsApp with your message ready.
                </p>

                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  <Button size="lg">Send on WhatsApp</Button>
                </a>
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
                  a="Yes. Mention it in the note and we will confirm availability."
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

function InfoChip({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card px-5 py-4">
      <p className="text-xs uppercase tracking-[0.28em] text-muted">{title}</p>
      <p className="mt-2 text-sm font-medium">{value}</p>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
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
