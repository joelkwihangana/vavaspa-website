import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useReducedMotion } from "framer-motion";

import Container from "../layout/Container";
import Button from "../ui/Button";

type T = {
  quote: string;
  name: string;
  city: string;
  service?: string;
};

const testimonials: T[] = [
  {
    quote:
      "Clean, quiet, and professional. The therapist listened carefully and the session felt truly restorative.",
    name: "Aline M.",
    city: "Kigali",
    service: "Massage",
  },
  {
    quote:
      "Booking was fast on WhatsApp and they confirmed quickly. The atmosphere is calm and the care is top-level.",
    name: "Daniel K.",
    city: "Kigali",
    service: "Deep Tissue",
  },
  {
    quote:
      "Very welcoming team. The room was spotless and the whole experience felt premium without being complicated.",
    name: "Sofia R.",
    city: "Visitor",
    service: "Spa",
  },
  {
    quote:
      "Respectful and professional service. Clean setup and great attention to comfort and privacy.",
    name: "Jeannette U.",
    city: "Kigali",
    service: "Waxing",
  },
  {
    quote:
      "Quiet environment, smooth experience, and real relaxation. I left feeling refreshed and lighter.",
    name: "Eric N.",
    city: "Kigali",
    service: "Relaxation Massage",
  },
];

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return Math.max(0, Math.min(i, len - 1));
}

export default function Testimonials() {
  const reduce = useReducedMotion();

  const [viewportRef, embla] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(testimonials.length);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    setSnapCount(embla.scrollSnapList().length);
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
  }, [embla, onSelect]);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  const scrollTo = useCallback(
    (index: number) => embla?.scrollTo(clampIndex(index, snapCount)),
    [embla, snapCount],
  );

  const dots = useMemo(() => Array.from({ length: snapCount }), [snapCount]);

  return (
    <section className="py-20 bg-bg">
      <Container>
        {/* Top eyebrow + title (like your reference) */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">
            Testimonial
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
            Customers Feedback &amp; Reviews
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
            Calm, clean spaces. Professional care. Here is what guests say after
            their sessions at Vava Spa.
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-12">
          <div className="relative">
            {/* Left arrow */}
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full border border-border bg-card shadow-soft hover:bg-bg transition"
            >
              <span className="text-lg">‹</span>
            </button>

            {/* Right arrow */}
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full border border-border bg-card shadow-soft hover:bg-bg transition"
            >
              <span className="text-lg">›</span>
            </button>

            {/* Embla viewport */}
            <div ref={viewportRef} className="overflow-hidden">
              <div className="flex">
                {testimonials.map((t, idx) => {
                  const isActive = idx === selectedIndex;
                  return (
                    <div
                      key={`${t.name}-${idx}`}
                      className="min-w-0 flex-[0_0_92%] sm:flex-[0_0_64%] lg:flex-[0_0_44%] px-3"
                    >
                      <motion.div
                        initial={false}
                        animate={
                          reduce
                            ? {}
                            : {
                                scale: isActive ? 1 : 0.98,
                                opacity: isActive ? 1 : 0.85,
                              }
                        }
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-[28px] border border-border bg-card shadow-soft px-8 py-10 sm:px-10 sm:py-12"
                      >
                        <p className="text-base sm:text-lg text-text/90 leading-relaxed text-center">
                          {t.quote}
                        </p>

                        {/* Avatar + name */}
                        <div className="mt-10 flex flex-col items-center">
                          <div className="h-16 w-16 rounded-full border border-border bg-bg flex items-center justify-center shadow-soft">
                            <span className="text-lg font-semibold text-muted">
                              {initials(t.name)}
                            </span>
                          </div>

                          <p className="mt-5 text-lg font-semibold text-brand">
                            {t.name}
                          </p>
                          <p className="mt-1 text-sm text-muted italic">
                            {t.city}
                            {t.service ? ` · ${t.service}` : ""}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots */}
            <div className="mt-8 flex items-center justify-center gap-3">
              {dots.map((_, i) => {
                const active = i === selectedIndex;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={[
                      "h-2.5 rounded-full transition",
                      active
                        ? "w-7 bg-brand"
                        : "w-2.5 bg-border hover:bg-muted",
                    ].join(" ")}
                  />
                );
              })}
            </div>
          </div>

          {/* Bottom CTA (simple and premium) */}
          <div className="mt-12 hidden sm:flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="/contact">
              <Button size="lg">Book on WhatsApp</Button>
            </a>
            <a href="/contact">
              <Button variant="secondary" size="lg">
                Request via form
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}
