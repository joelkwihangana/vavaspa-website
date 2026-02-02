import Container from "./Container";
import logo from "../../assets/brand/logo.png";
import { site, waLink } from "../../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  const phone = site.whatsappPrimary || "250788440979";
  const whatsappHref = waLink(phone, site.whatsappMessage);

  return (
    <footer className="relative bg-[#0B1412] text-[#E7ECEA]">
      {/* subtle top separator */}
      <div className="h-px w-full bg-white/10" />

      {/* soft ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[rgba(31,122,95,0.18)] blur-[120px]" />
      </div>

      <Container className="relative py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                <img
                  src={logo}
                  alt="Vava Spa"
                  className="h-7 w-7 object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight">
                  Vava Spa
                </p>
                <p className="text-xs text-white/65">
                  Calm. Clean. Professional care.
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              A quiet spa in Kigali designed for deep relaxation, comfort, and
              respectful professional care.
            </p>

            <div className="mt-5 text-sm text-white/70">
              <p>10 KG 292 St, Kibagabaga</p>
              <p>Kigali, Rwanda</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.28em] text-white/50">
              Navigate
            </p>

            <ul className="mt-4 space-y-2 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/75 hover:text-white transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.28em] text-white/50">
              Contact
            </p>

            <div className="mt-4 space-y-3 text-sm text-white/70">
              <a
                href={`tel:+${phone}`}
                className="block hover:text-white transition"
              >
                +250 788 440 979
              </a>

              <a
                href={`mailto:info@vavaspa.com`}
                className="block hover:text-white transition"
              >
                info@vavaspa.com
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
              >
                <span className="h-2 w-2 rounded-full bg-[#1F7A5F]" />
                WhatsApp booking
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/50">
              © {year} Vava Spa. All rights reserved.
            </p>

            <p className="text-xs text-white/50">
              Designed by{" "}
              <a
                href="https://codacre.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/70 hover:text-white transition"
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
