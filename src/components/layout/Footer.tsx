import Container from "./Container";
import Button from "../ui/Button";
import logo from "../../assets/brand/logo.png";
import { site, waLink } from "../../data/site";

const FOOTER = {
  brandName: "Vava Spa",
  tagline:
    "A calm and welcoming spa dedicated to relaxation, renewal, and professional care.",
  description:
    "Experience refined massage and spa services in a clean, quiet environment where your comfort comes first.",

  addressTitle: "Head Office",
  addressLines: ["10 KG 292 St, Kigali", "Kibagabaga - House Number 10"],

  phones: ["+250791746187", "+250788440979"],
  email: "info@vavaspa.com",

  hours: [
    { label: "Mon - Wed", value: "10:00 AM - 9:00 PM" },
    { label: "Thu - Sun", value: "10:00 AM - 9:30 PM" },
  ],

  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "X", href: "#" },
  ],

  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],

  services: [
    { label: "Massage Treatments", href: "/services?tab=massage" },
    { label: "Spa Services", href: "/services?tab=spa" },
    { label: "Waxing", href: "/services?tab=spa" },
    { label: "Couple Massage", href: "/services?tab=massage" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  const primaryPhone =
    site.whatsappPrimary || FOOTER.phones[0].replace("+", "");
  const whatsappHref = waLink(primaryPhone, site.whatsappMessage);

  return (
    <footer className="border-t border-black/5 bg-[#071813] text-[#F4EFE6]">
      {/* Single CTA zone (ONLY place buttons live) */}
      <div className="bg-[#0B1F19]">
        <Container className="py-10 sm:py-12">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.28em] text-white/60">
                Ready when you are
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Book in minutes. Arrive calm.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
                Fast replies on WhatsApp, or send a request via the contact
                form. We keep it simple, quiet, and professional.
              </p>
            </div>

            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  <Button size="lg" className="w-full sm:w-auto">
                    Book on WhatsApp
                  </Button>
                </a>
                <a href="/contact">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Request via form
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main footer content (NO buttons here) */}
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt={FOOTER.brandName}
                className="h-12 w-12 rounded-2xl bg-white/10 p-2"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold tracking-tight text-white">
                  {FOOTER.brandName}
                </p>
                <p className="text-xs text-white/65">{FOOTER.tagline}</p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75">
              {FOOTER.description}
            </p>

            {/* Hours */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-white/60">
                Working hours
              </p>
              <div className="mt-3 space-y-2 text-sm">
                {FOOTER.hours.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-white/80">{h.label}</span>
                    <span className="text-white/65">{h.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="mt-6 flex flex-wrap gap-2">
              {FOOTER.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-white/12 bg-white/5 px-3 py-2 text-xs text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <FooterColumn title="Quick links" links={FOOTER.quickLinks} />
            <div className="mt-8">
              <FooterColumn title="Services" links={FOOTER.services} />
            </div>
          </div>

          {/* Contact (info only, no CTAs) */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-white">Contact</p>

              <div className="mt-4 space-y-5 text-sm text-white/75">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/55">
                    {FOOTER.addressTitle}
                  </p>
                  <div className="mt-2 space-y-1">
                    {FOOTER.addressLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/55">
                    Phone
                  </p>
                  <div className="mt-2 space-y-1">
                    {FOOTER.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p}`}
                        className="block text-white/75 transition hover:text-white"
                      >
                        {formatPhonePretty(p)}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/55">
                    Email
                  </p>
                  <a
                    href={`mailto:${FOOTER.email}`}
                    className="mt-2 block text-white/75 transition hover:text-white"
                  >
                    {FOOTER.email}
                  </a>
                </div>

                <p className="text-xs text-white/55">
                  Prefer WhatsApp? Use the booking buttons above.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/55">
              © {year} {FOOTER.brandName}. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-white/55">
              <a className="transition hover:text-white" href="/privacy">
                Privacy
              </a>
              <a className="transition hover:text-white" href="/terms">
                Terms
              </a>
              <a className="transition hover:text-white" href="/contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.22em] text-white/55">
        {title}
      </p>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={`${l.href}-${l.label}`}>
            <a
              className="text-white/75 transition hover:text-white"
              href={l.href}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function formatPhonePretty(raw: string) {
  const cleaned = raw.replace(/\s+/g, "");
  if (!cleaned.startsWith("+250")) return raw;
  const rest = cleaned.replace("+250", "");
  const a = rest.slice(0, 3);
  const b = rest.slice(3, 6);
  const c = rest.slice(6, 9);
  return `+250 ${a} ${b} ${c}`;
}
