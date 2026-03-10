import { useEffect, useState } from "react";
import { Menu, X, Instagram, Phone } from "lucide-react";
import Container from "./Container";
import Button from "../ui/Button";
import { site, waLink } from "../../data/site";
import { cn } from "../../lib/cn";
import logo from "../../assets/brand/logo.png";

/**
 * NAVBAR UX PRINCIPLES:
 *
 * 1. VISUAL HIERARCHY
 *    - Logo is primary (brand recognition)
 *    - Navigation is secondary (discoverability)
 *    - CTA is tertiary but prominent (conversion)
 *
 * 2. PROGRESSIVE DISCLOSURE
 *    - Desktop: All links visible (low cognitive load)
 *    - Mobile: Menu behind toggle (clean, focused)
 *
 * 3. FEEDBACK & STATE
 *    - Scroll = backdrop blur (depth perception)
 *    - Hover = color shift (interactivity confirmation)
 *    - Active = underline (current location awareness)
 *
 * 4. ACCESSIBILITY
 *    - Keyboard navigation (tab order logical)
 *    - ARIA labels (screen reader support)
 *    - Focus indicators (visible outlines)
 *    - Touch targets 44px+ (mobile-friendly)
 */

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/vavasppl/",
    icon: Instagram,
    label: "@vava_spa",
  },
  {
    name: "Phone",
    href: "tel:+250788408978",
    icon: Phone,
    label: "+250 788 440 979",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for backdrop blur effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on ESC key
  useEffect(() => {
    if (!open) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-neutral-200/60 bg-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <Container className="flex items-center justify-between py-4">
        {/* === BRAND === */}
        <a
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-80"
          aria-label="Vava Spa home"
        >
          <img
            src={logo}
            alt="Vava Spa logo"
            className="h-10 w-auto transition-transform group-hover:scale-105"
            loading="eager"
          />
        </a>

        {/* === DESKTOP NAVIGATION === */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium text-neutral-600 transition-colors hover:text-emerald-700",
                "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-emerald-600 after:transition-all after:duration-300",
                "hover:after:w-full",
                // Active state (you'll need to add active detection logic)
                // "aria-current:text-emerald-700 aria-current:after:w-full"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* === DESKTOP CTA & SOCIAL === */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Social links */}
          <div className="flex items-center gap-2 border-r border-neutral-200 pr-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full p-2 transition-colors hover:bg-emerald-50"
                aria-label={`Visit ${social.name}`}
                title={social.label}
              >
                <social.icon
                  size={18}
                  className="text-neutral-500 transition-colors group-hover:text-emerald-600"
                />
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={waLink(site.whatsappPrimary, site.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="md">Book on WhatsApp</Button>
          </a>
        </div>

        {/* === MOBILE TOGGLE === */}
        <button
          className={cn(
            "rounded-xl border border-neutral-200 bg-white px-3 py-2 transition-all md:hidden",
            "hover:bg-neutral-50 active:scale-95",
            open && "bg-emerald-50 border-emerald-200",
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <X size={18} className="text-emerald-700" />
          ) : (
            <Menu size={18} className="text-neutral-700" />
          )}
        </button>
      </Container>

      {/* === MOBILE MENU === */}
      {open && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 top-[73px] z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Menu content */}
          <div className="fixed inset-x-0 top-[73px] z-50 max-h-[calc(100vh-73px)] overflow-y-auto border-t border-neutral-200 bg-white shadow-2xl md:hidden">
            <Container className="space-y-6 py-6">
              {/* Navigation links */}
              <nav className="space-y-1" aria-label="Mobile navigation">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Social links */}
              <div className="space-y-3 border-t border-neutral-200 pt-6">
                <p className="px-4 text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Connect With Us
                </p>
                <div className="space-y-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-emerald-50"
                      onClick={() => setOpen(false)}
                    >
                      <social.icon size={20} className="text-emerald-600" />
                      <div>
                        <p className="text-sm font-medium text-neutral-900">
                          {social.name}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {social.label}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="border-t border-neutral-200 pt-6">
                <a
                  href={waLink(site.whatsappPrimary, site.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <Button className="w-full" size="lg">
                    Book on WhatsApp
                  </Button>
                </a>
              </div>
            </Container>
          </div>
        </>
      )}
    </header>
  );
}
