import Container from "./Container";
import logo from "../../assets/brand/logo.png";
import { site, waLink } from "../../data/site";

const FOOTER = {
  brandName: "Vava Spa",
  tagline: "Calm, clean, professional care in Kigali.",
  addressShort: "10 KG 292 St, Kibagabaga, Kigali",
  email: "info@vavaspa.com",
  links: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "X", href: "#" },
  ],
};

function cleanPhone(phone?: string) {
  if (!phone) return "";
  return phone.replace(/\+/g, "").replace(/\s+/g, "");
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

export default function Footer() {
  const year = new Date().getFullYear();

  // primary WhatsApp (real)
  const primaryPhone = cleanPhone(site.whatsappPrimary) || "250788440979";
  const whatsappHref = waLink(primaryPhone, site.whatsappMessage);

  return (
    <footer className="border-t border-border bg-bg text-text">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card">
                <img
                  src={logo}
                  alt={FOOTER.brandName}
                  className="h-7 w-7 object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight">
                  {FOOTER.brandName}
                </p>
                <p className="text-xs text-muted">{FOOTER.tagline}</p>
              </div>
            </div>

            <div className="mt-5 space-y-2 text-sm text-muted">
              <p>{FOOTER.addressShort}</p>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <a
                  href={`tel:+${primaryPhone}`}
                  className="text-text/90 hover:text-text transition"
                >
                  {formatPhonePretty(`+${primaryPhone}`)}
                </a>
                <span className="h-1 w-1 rounded-full bg-border" />
                <a
                  href={`mailto:${FOOTER.email}`}
                  className="text-text/90 hover:text-text transition"
                >
                  {FOOTER.email}
                </a>
              </div>
            </div>

            {/* One calm booking link (desktop only) */}
            <div className="mt-5 hidden sm:block">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-text transition hover:bg-bg"
              >
                <span className="h-2 w-2 rounded-full bg-brand" />
                Book on WhatsApp
              </a>
              <p className="mt-2 text-xs text-muted">
                On mobile, use the sticky booking bar.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-muted">
              Explore
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm">
              {FOOTER.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-text/90 hover:text-text transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Socials (small, subtle) */}
            <div className="mt-6 flex flex-wrap gap-2">
              {FOOTER.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted hover:text-text transition"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Hours (simple, not boxed heavy) */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.22em] text-muted">
              Hours
            </p>
            <div className="mt-4 space-y-2 text-sm text-muted">
              <div className="flex items-center justify-between gap-4">
                <span>Mon - Wed</span>
                <span className="text-text/90">10:00 - 21:00</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Thu - Sun</span>
                <span className="text-text/90">10:00 - 21:30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-border pt-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted">
              © {year} {FOOTER.brandName}. All rights reserved.
            </p>
            <p className="text-xs text-muted">
              Designed by{" "}
              <a
                href="https://codacre.com"
                target="_blank"
                rel="noreferrer"
                className="text-text/90 hover:text-text transition"
              >
                Codacre.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
