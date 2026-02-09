import { useMemo, useState } from "react";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { site, waLink } from "../../data/site";
import { FormField } from "../ui/Input";

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
    <section id="booking" className="bg-bg py-24 sm:py-32">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-12">
          
          {/* Content Column: The "Why" (40% width) */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-semibold tracking-tight text-text">
              Begin your journey to wellness.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Select your preferred service and time. Our team will coordinate 
              with our therapists and confirm your booking via WhatsApp within minutes.
            </p>
            
            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">1</div>
                <div>
                  <h4 className="font-medium text-text">Request</h4>
                  <p className="text-sm text-muted">Fill the form with your details.</p>
                </div>
              </div>
              {/* Add steps 2 and 3 similarly... */}
            </div>
          </div>

          {/* Form Column: The "Action" (70% width) */}
          <div className="rounded-3xl border border-border/40 bg-white p-8 shadow-soft lg:col-span-7">
            <form onSubmit={onSubmit} className="space-y-6">
              
              {/* Identity Group */}
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField 
                  label="Full Name" 
                  placeholder="Jane Doe"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  required 
                />
                <FormField 
                  label="Phone Number" 
                  placeholder="+250..." 
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  required 
                />
              </div>

              {/* Service Selection Group */}
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField 
                  as="select" 
                  label="Service Category"
                  value={form.serviceType}
                  onChange={(e) => {
                    update("serviceType", e.target.value as any);
                    update("serviceName", "");
                  }}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Massage Treatment">Massage</option>
                  <option value="Spa Services">Spa</option>
                </FormField>

                <FormField 
                  as="select" 
                  label="Specific Service"
                  disabled={!form.serviceType}
                  value={form.serviceName}
                  onChange={(e) => update("serviceName", e.target.value)}
                  required
                >
                  <option value="">{form.serviceType ? "Select Service" : "Waiting for category..."}</option>
                  {serviceChoices.map(s => <option key={s} value={s}>{s}</option>)}
                </FormField>
              </div>

              {/* Logistics Group */}
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField 
                  type="date" 
                  label="Preferred Date" 
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  required 
                />
                <FormField 
                  type="time" 
                  label="Preferred Time" 
                  value={form.time}
                  onChange={(e) => update("time", e.target.value)}
                  required 
                />
              </div>

              <FormField 
                as="textarea" 
                label="Special Requests" 
                placeholder="Let us know about allergies or specific focus areas..." 
                rows={3}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
              />

              <Button 
                type="submit" 
                disabled={!canSubmit} 
                className="w-full py-4 text-base shadow-lg transition-transform active:scale-[0.98]"
              >
                Request Availability via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
