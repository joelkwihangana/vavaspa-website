import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "../ui/Button";
import { site, waLink } from "../../data/site";
import { cn } from "../../lib/cn";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition",
        scrolled
          ? "bg-bg/80 backdrop-blur border-b border-border"
          : "bg-transparent",
      )}
    >
      <Container className="flex items-center justify-between py-4">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-brand/10 border border-border grid place-items-center">
            <span className="text-brand font-semibold">V</span>
          </div>
          <div className="leading-tight">
            <p className="font-semibold tracking-tight">{site.name}</p>
            <p className="text-xs text-muted">{site.city}</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-text transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={waLink(site.whatsappPrimary, site.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
          >
            <Button size="md">Book on WhatsApp</Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden rounded-xl border border-border bg-card px-3 py-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur">
          <Container className="py-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block text-sm text-muted hover:text-text"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}

            <div className="pt-2">
              <a
                href={waLink(site.whatsappPrimary, site.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
              >
                <Button className="w-full">Book on WhatsApp</Button>
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
