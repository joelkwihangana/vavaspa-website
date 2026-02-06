import Container from "./Container";
import logo from "../../assets/brand/logo.png";
import { site, waLink } from "../../data/site";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const phone = site.whatsappPrimary || "250788440979";
  const whatsappHref = waLink(phone, site.whatsappMessage);

  return (
    <footer className="relative overflow-hidden bg-[#0F2A22] text-[#E7ECEA]">
      {/* top separator */}
      <div className="h-px w-full bg-white/10" />

      {/* soft green ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[360px] w-[520px] -translate-x-1/2 rounded-full bg-[rgba(31,122,95,0.35)] blur-[160px]" />
      </div>

      <Container className="relative py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
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
                <p className="text-xs text-white/70">
                  Calm. Clean. Professional care.
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80">
              A quiet spa in Kigali designed for deep relaxation, comfort, and
              respectful professional care.
            </p>

            <div className="mt-5 space-y-1 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-[#6FD1B2]" />
                <div>
                  <p>10 KG 292 St, Kibagabaga</p>
                  <p>Kigali, Rwanda</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.28em] text-white/70">
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
                    className="group inline-flex items-center gap-2 text-white/80 transition hover:text-white"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-[#6FD1B2] opacity-70 transition group-hover:opacity-100" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.28em] text-white/70">
              Contact
            </p>

            <div className="mt-4 space-y-3 text-sm text-white/80">
              <a
                href={`tel:+${phone}`}
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Phone className="h-4 w-4 text-[#6FD1B2]" />
                +250 788 440 979
              </a>

              <a
                href="mailto:info@vavaspa.com"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-[#6FD1B2]" />
                info@vavaspa.com
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/90 transition hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-[#1F7A5F]" />
                WhatsApp booking
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/15 pt-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/60">
              © {year} Vava Spa. All rights reserved.
            </p>

            <p className="text-xs text-white/60">
              Designed by{" "}
              <a
                href="https://codacre.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white transition"
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
