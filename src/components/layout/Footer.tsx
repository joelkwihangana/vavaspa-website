import Container from "./Container";
import Button from "../ui/Button";
import logo from "../../assets/brand/logo.png";

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
  // Replace these later with real URLs if you have them
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "X", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Massage", href: "/massage" },
    { label: "Spa", href: "/spa" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Massage Therapy", href: "/massage" },
    { label: "Spa Treatments", href: "/spa" },
    { label: "Waxing", href: "/#services" },
    { label: "Couple Massage", href: "/#services" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  const primaryPhone = FOOTER.phones[0];

  // WhatsApp deep link with a clean premium message
  const waLink = `https://wa.me/${primaryPhone.replace(/\+/g, "")}?text=${encodeURIComponent(
    "Hello Vava Spa, I’d like to book a session. Please share available time options.",
  )}`;

  return (
    <footer className="bg-[#0B1F19] text-[#F4EFE6]">
      {/* Top divider */}
      <div className="h-px w-full bg-white/10" />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left: Brand + Description + CTA */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt={FOOTER.brandName}
                className="h-12 w-12 rounded-2xl bg-white/10 p-2"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold tracking-tight">
                  {FOOTER.brandName}
                </p>
                <p className="text-xs text-white/70">{FOOTER.tagline}</p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75">
              {FOOTER.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={waLink} target="_blank" rel="noreferrer">
                <Button size="lg">Book on WhatsApp</Button>
              </a>
              <a href="/contact#booking">
                <Button variant="secondary" size="lg">
                  Request via form
                </Button>
              </a>
            </div>

            {/* Socials */}
            <div className="mt-7 flex flex-wrap items-center gap-2">
              {FOOTER.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/70 hover:text-white hover:bg-white/10 transition"
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* Working Hours card */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-white/60">
                Working Hours
              </p>
              <div className="mt-3 space-y-2 text-sm text-white/75">
                {FOOTER.hours.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-white/85">{h.label}</span>
                    <span className="text-white/70">{h.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle: Links */}
          <div className="lg:col-span-3">
            <FooterColumn title="Quick Links" links={FOOTER.quickLinks} />
            <div className="mt-10">
              <FooterColumn title="Our Services" links={FOOTER.services} />
            </div>
          </div>

          {/* Right: Contact card (premium framed) */}
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-[28px] border border-[#B08D57]/35 bg-[#0E2A22] shadow-soft">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />

              <div className="relative p-7 sm:p-9">
                <div className="mb-6 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10">
                    <span className="text-lg">✉️</span>
                  </div>
                </div>

                <h3 className="text-center text-2xl font-semibold tracking-tight">
                  Reach Out To Us
                </h3>

                <div className="mt-7 space-y-6 text-sm text-white/80">
                  <ContactRow
                    title={FOOTER.addressTitle}
                    lines={FOOTER.addressLines}
                    icon="📍"
                  />

                  <ContactRow
                    title="Call Us"
                    lines={FOOTER.phones.map(formatPhonePretty)}
                    icon="📞"
                    linkPrefix="tel:"
                    linkValues={FOOTER.phones}
                  />

                  <ContactRow
                    title="Email us"
                    lines={[FOOTER.email]}
                    icon="📨"
                    linkPrefix="mailto:"
                    linkValues={[FOOTER.email]}
                  />
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <a href={waLink} target="_blank" rel="noreferrer">
                    <Button size="lg" className="w-full">
                      Book on WhatsApp
                    </Button>
                  </a>
                  <a href="/contact#booking">
                    <Button variant="secondary" size="lg" className="w-full">
                      Request via form
                    </Button>
                  </a>
                </div>

                <p className="mt-4 text-center text-xs text-white/60">
                  Fast replies. Calm experience. Professional care.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14">
          <div className="h-px w-full bg-white/10" />
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/60">
              © {year} {FOOTER.brandName}. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-white/60">
              <a className="hover:text-white transition" href="/privacy">
                Privacy
              </a>
              <a className="hover:text-white transition" href="/terms">
                Terms
              </a>
              <a className="hover:text-white transition" href="/contact">
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
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/75">
        {links.map((l) => (
          <li key={l.href}>
            <a className="hover:text-white transition" href={l.href}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactRow({
  title,
  lines,
  icon,
  linkPrefix,
  linkValues,
}: {
  title: string;
  lines: string[];
  icon: string;
  linkPrefix?: string;
  linkValues?: string[];
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/10">
        <span>{icon}</span>
      </div>
      <div>
        <p className="font-medium text-white/90">{title}</p>

        <div className="mt-1 space-y-1">
          {lines.map((line, idx) => {
            const href =
              linkPrefix && linkValues && linkValues[idx]
                ? `${linkPrefix}${linkValues[idx]}`
                : undefined;

            if (href) {
              return (
                <a
                  key={`${title}-${idx}`}
                  href={href}
                  className="block text-white/75 hover:text-white transition"
                >
                  {line}
                </a>
              );
            }

            return (
              <p key={`${title}-${idx}`} className="text-white/75">
                {line}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function formatPhonePretty(raw: string) {
  // +250791746187 -> +250 791 746 187
  const cleaned = raw.replace(/\s+/g, "");
  if (!cleaned.startsWith("+250")) return raw;
  const rest = cleaned.replace("+250", "");
  const a = rest.slice(0, 3);
  const b = rest.slice(3, 6);
  const c = rest.slice(6, 9);
  return `+250 ${a} ${b} ${c}`;
}
