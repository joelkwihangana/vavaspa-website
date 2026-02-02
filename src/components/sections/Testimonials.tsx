import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container";

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

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
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

  // Autoplay configuration
  const AUTOPLAY_MS = 3500;
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);
  const [progress, setProgress] = useState(0);

  const stopTimer = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  }, []);

  const resetProgress = useCallback(() => {
    startRef.current = performance.now();
    setProgress(0);
  }, []);

  const next = useCallback(() => embla?.scrollNext(), [embla]);
  const prev = useCallback(() => embla?.scrollPrev(), [embla]);

  const scrollTo = useCallback(
    (index: number) => embla?.scrollTo(clampIndex(index, snapCount)),
    [embla, snapCount],
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    resetProgress();
  }, [embla, resetProgress]);

  // Update counts + selection
  useEffect(() => {
    if (!embla) return;
    setSnapCount(embla.scrollSnapList().length);
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
  }, [embla, onSelect]);

  // Pause on user interaction
  useEffect(() => {
    if (!embla) return;

    const onPointerDown = () => {
      pausedRef.current = true;
    };
    const onPointerUp = () => {
      pausedRef.current = false;
      resetProgress();
    };

    embla.on("pointerDown", onPointerDown);
    embla.on("pointerUp", onPointerUp);

    return () => {
      embla.off("pointerDown", onPointerDown);
      embla.off("pointerUp", onPointerUp);
    };
  }, [embla, resetProgress]);

  // Pause when tab is hidden
  useEffect(() => {
    const onVis = () => {
      pausedRef.current = document.hidden;
      if (!document.hidden) resetProgress();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [resetProgress]);

  // Autoplay loop using RAF (smooth progress)
  useEffect(() => {
    if (!embla || reduce) return;

    stopTimer();
    resetProgress();

    const tick = (now: number) => {
      if (!embla) return;

      if (!pausedRef.current) {
        const elapsed = now - startRef.current;
        const p = Math.min(1, elapsed / AUTOPLAY_MS);
        setProgress(p);

        if (p >= 1) {
          next();
          startRef.current = now;
          setProgress(0);
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => stopTimer();
  }, [embla, next, reduce, resetProgress, stopTimer]);

  const dots = useMemo(() => Array.from({ length: snapCount }), [snapCount]);

  return (
    <section className="py-18 sm:py-20 bg-bg">
      <Container >
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
            Customers feedback &amp; reviews
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
            Calm spaces. Professional care. Here is what guests say after their
            sessions at Vava Spa.
          </p>
        </div>

        <div
          className="mt-10 sm:mt-12"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
            resetProgress();
          }}
        >
          <div className="relative">
            {/* Arrows (desktop only) */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full border border-border bg-card/90 backdrop-blur shadow-soft hover:bg-bg transition"
            >
              <span className="text-lg">‹</span>
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full border border-border bg-card/90 backdrop-blur shadow-soft hover:bg-bg transition"
            >
              <span className="text-lg">›</span>
            </button>

            {/* Viewport */}
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
                                scale: isActive ? 1 : 0.985,
                                opacity: isActive ? 1 : 0.88,
                              }
                        }
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="relative h-full rounded-[28px] border border-border bg-card shadow-soft px-7 py-9 sm:px-10 sm:py-11"
                      >
                        <p className="absolute left-6 top-6 text-3xl text-muted/40">
                          “
                        </p>

                        <p className="text-base sm:text-lg text-text/90 leading-relaxed text-center">
                          {t.quote}
                        </p>

                        <div className="mt-9 flex flex-col items-center">
                          <div className="h-14 w-14 rounded-full border border-border bg-bg flex items-center justify-center shadow-soft">
                            <span className="text-sm font-semibold text-muted">
                              {initials(t.name)}
                            </span>
                          </div>

                          <p className="mt-4 text-base sm:text-lg font-semibold">
                            {t.name}
                          </p>
                          <p className="mt-1 text-sm text-muted">
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

            {/* Progress bar (subtle wow) */}
            {!reduce && (
              <div className="mx-auto mt-7 max-w-sm">
                <div className="h-1.5 rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full bg-brand rounded-full transition-[width] duration-150"
                    style={{ width: `${Math.round(progress * 100)}%` }}
                    aria-hidden="true"
                  />
                </div>
                
              </div>
            )}
            <p className="mt-2 text-center text-[12px] text-muted">
            Hover to pause.
            </p>
            {/* Dots */}
            <div className="mt-6 flex items-center justify-center gap-3">
              {dots.map((_, i) => {
                const active = i === selectedIndex;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      scrollTo(i);
                      resetProgress();
                    }}
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

            {/* Micro-link only, no buttons */}
            <div className="mt-6 hidden sm:flex justify-center">
              <a
                href="/contact"
                className="text-sm text-muted underline decoration-border underline-offset-4 transition hover:text-text hover:decoration-muted"
              >
                Want to book? Use Quick Booking on the Contact page
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
