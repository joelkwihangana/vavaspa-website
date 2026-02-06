import { useMemo, useState } from "react";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { site, waLink } from "../../data/site";

type FormState = {
  fullName: string;
  phone: string;
  serviceType: "Massage Treatment" | "Spa Services" | "";
  serviceName: string;
  date: string;
  time: string;
  message: string;
};

const initial: FormState = {
  fullName: "",
  phone: "",
  serviceType: "",
  serviceName: "",
  date: "",
  time: "",
  message: "",
};

const massageOptions = [
  "Swedish Massage",
  "Deep Tissue Massage",
  "Thai Massage",
  "Lomi-Lomi Massage",
  "Shiatsu Massage",
  "Ayurvedic Massage",
  "Back, Head, Neck & Shoulder Massage",
  "Reflexology",
  "Couple Massage",
  "Hot Stone Therapy",
];

const spaOptions = ["Facial Treatment", "Body Scrub", "Moroccan Bath", "Waxing"];

function FieldLabel({ children }: { children: string }) {
  return <p className="text-sm font-medium text-text">{children}</p>;
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={
        "mt-2 w-full rounded-xl border border-border/60 bg-card px-4 py-3 text-sm " +
        "placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-brand/25"
      }
    />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={
        "mt-2 w-full rounded-xl border border-border/60 bg-card px-4 py-3 text-sm " +
        "focus:outline-none focus:ring-2 focus:ring-brand/25"
      }
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={
        "mt-2 w-full rounded-xl border border-border/60 bg-card px-4 py-3 text-sm " +
        "placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-brand/25"
      }
    />
  );
}

export default function BookingSection() {
  const [form, setForm] = useState<FormState>(initial);

  const serviceChoices = useMemo(() => {
    if (form.serviceType === "Massage Treatment") return massageOptions;
    if (form.serviceType === "Spa Services") return spaOptions;
    return [];
  }, [form.serviceType]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  // Build a clear, high-quality WhatsApp message (single source of truth)
  const whatsappMessage = useMemo(() => {
    const lines = [
      `Hello ${site.name}, I would like to request availability for a booking.`,
      "",
      form.fullName ? `Full name: ${form.fullName}` : "",
      form.phone ? `Phone: ${form.phone}` : "",
      form.serviceType ? `Service type: ${form.serviceType}` : "",
      form.serviceName ? `Service: ${form.serviceName}` : "",
      form.date ? `Preferred date: ${form.date}` : "",
      form.time ? `Preferred time: ${form.time}` : "",
      form.message ? `Message: ${form.message}` : "",
    ].filter(Boolean);

    return lines.join("\n");
  }, [
    form.fullName,
    form.phone,
    form.serviceType,
    form.serviceName,
    form.date,
    form.time,
    form.message,
  ]);

  const whatsappPrefill = useMemo(() => {
    return waLink(site.whatsappPrimary, whatsappMessage);
  }, [whatsappMessage]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Open WhatsApp with prefilled message
    window.open(whatsappPrefill, "_blank", "noopener,noreferrer");

    // Optional: reset after sending
    setForm(initial);
  }

  const canSubmit =
    Boolean(form.fullName.trim()) &&
    Boolean(form.phone.trim()) &&
    Boolean(form.serviceType) &&
    Boolean(form.serviceName) &&
    Boolean(form.date) &&
    Boolean(form.time);

  return (
    <section id="booking" className="section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left: content */}
          <div>
            <p className="text-sm tracking-wide text-muted">Booking</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Book your session
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Reserve your preferred time using the form. When you submit, your
              details are sent directly to WhatsApp so we can confirm quickly.
            </p>

            <div className="mt-6 rounded-2xl bg-card border border-border/60 p-6 shadow-soft">
              <p className="font-medium">What happens next?</p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• We confirm availability and reply with time options.</li>
                <li>• You choose the best time and we lock in your booking.</li>
                <li>• You arrive, relax, and we take care of the rest.</li>
              </ul>

              <div className="mt-5">
                <a href={whatsappPrefill} target="_blank" rel="noreferrer">
                  <Button variant="secondary">Book via WhatsApp</Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl bg-white/70 backdrop-blur border border-border/60 p-6 sm:p-8">
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
                      const nextType = e.target.value as FormState["serviceType"];
                      update("serviceType", nextType);
                      update("serviceName", "");
                    }}
                    required
                  >
                    <option value="">Select</option>
                    <option value="Massage Treatment">Massage Treatment</option>
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

              <div className="flex flex-wrap items-center gap-3">
                <Button type="submit" size="lg" variant="primary" disabled={!canSubmit}>
                  Request availability
                </Button>

                {/*<a href={whatsappPrefill} target="_blank" rel="noreferrer">
                  <Button variant="secondary" size="lg">
                    WhatsApp instead
                  </Button>
                </a>

                {!canSubmit && (
                <span className="text-sm text-muted">
                  Fill required fields to send on WhatsApp.
                </span>
                )}*/}
               
              </div>

              <p className="text-xs text-muted leading-relaxed">
                By submitting, you agree to be contacted to confirm your
                booking.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
