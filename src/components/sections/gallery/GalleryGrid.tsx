import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../../layout/Container";
import Button from "../../ui/Button";
import type { GalleryCategory, GalleryItem } from "../../../data/gallery";
import { galleryCategories } from "../../../data/gallery";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function useBodyLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<GalleryCategory>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (active === "all") return items;
    return items.filter((i) => i.category === active);
  }, [active, items]);

  const openItem = (idx: number) => setOpenIndex(idx);
  const close = () => setOpenIndex(null);

  const current = openIndex === null ? null : filtered[openIndex];

  useBodyLock(openIndex !== null);

  // Keyboard support
  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();

      if (e.key === "ArrowRight") {
        setOpenIndex((prev) => {
          if (prev === null) return prev;
          return Math.min(prev + 1, filtered.length - 1);
        });
      }

      if (e.key === "ArrowLeft") {
        setOpenIndex((prev) => {
          if (prev === null) return prev;
          return Math.max(prev - 1, 0);
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, filtered.length]);

  return (
    <section className="section">
      <Container>
        {/* Header + filters */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-muted">
              Explore
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
              A real look inside Vava Spa
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed">
              Browse interior, treatments, team, and location. Tap any photo to
              view full size.
            </p>
          </div>

          {/* Filter chips */}
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((c) => {
              const isActive = active === c.key;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setActive(c.key)}
                  className={cx(
                    "rounded-full px-4 py-2 text-sm transition",
                    "border",
                    isActive
                      ? "bg-brand text-white border-brand"
                      : "bg-card text-text border-border hover:bg-black/5",
                  )}
                  aria-pressed={isActive}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8">
          {/* Masonry via CSS columns: simple + fast */}
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
            {filtered.map((item, idx) => (
              <motion.figure
                key={item.id}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-4 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => openItem(idx)}
                  className={cx(
                    "group relative w-full overflow-hidden rounded-3xl",
                    "border border-border bg-card",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                    "ring-offset-[rgb(var(--bg))]",
                  )}
                  aria-label={`Open image: ${item.alt}`}
                >
                  {/* Aspect ratios vary naturally, keeps it editorial */}
                  <div className="relative">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className={cx(
                        "h-auto w-full object-cover",
                        "transition duration-700 ease-out group-hover:scale-[1.03]",
                      )}
                    />

                    {/* Subtle bottom info panel (no white fog) */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0">
                      <div className="bg-gradient-to-t from-black/70 via-black/25 to-transparent p-4">
                        <div className="flex items-end justify-between gap-3">
                          <div className="min-w-0 text-left">
                            {item.title ? (
                              <p className="truncate text-sm font-medium text-white/90">
                                {item.title}
                              </p>
                            ) : null}
                            {item.note ? (
                              <p className="truncate text-xs text-white/70">
                                {item.note}
                              </p>
                            ) : null}
                          </div>

                          <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] text-white/80 backdrop-blur">
                            View
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </motion.figure>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-border bg-card p-8 text-center">
              <p className="text-text font-medium">No photos yet.</p>
              <p className="mt-2 text-muted">
                Add images to <code>src/data/gallery.ts</code> to populate this
                gallery.
              </p>
            </div>
          ) : null}
        </div>
      </Container>

      {/* Lightbox */}
      {current ? (
        <Lightbox
          item={current}
          canPrev={openIndex !== null && openIndex > 0}
          canNext={openIndex !== null && openIndex < filtered.length - 1}
          onClose={close}
          onPrev={() =>
            setOpenIndex((p) => (p === null ? p : Math.max(p - 1, 0)))
          }
          onNext={() =>
            setOpenIndex((p) =>
              p === null ? p : Math.min(p + 1, filtered.length - 1),
            )
          }
        />
      ) : null}
    </section>
  );
}

function Lightbox({
  item,
  canPrev,
  canNext,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem;
  canPrev: boolean;
  canNext: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const reduce = useReducedMotion();
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-label="Close preview"
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10, scale: 0.99 }}
        animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={cx(
          "relative w-full max-w-5xl overflow-hidden rounded-3xl",
          "border border-white/10 bg-[#0b0f0d]",
        )}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-white/90">
              {item.title ?? "Photo"}
            </p>
            <p className="truncate text-xs text-white/60">{item.alt}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              ref={closeBtnRef}
              className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs text-white/80 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              Close (Esc)
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-[70vh] w-full object-contain bg-black"
          />

          {/* Nav buttons */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 sm:px-4">
            <div className="pointer-events-auto">
              <Button
                variant="secondary"
                size="lg"
                onClick={onPrev}
                disabled={!canPrev}
              >
                Prev
              </Button>
            </div>
            <div className="pointer-events-auto">
              <Button
                variant="secondary"
                size="lg"
                onClick={onNext}
                disabled={!canNext}
              >
                Next
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom hint */}
        <div className="border-t border-white/10 px-4 py-3 text-xs text-white/60 sm:px-5">
          Tip: Use Left and Right arrow keys to navigate.
        </div>
      </motion.div>
    </div>
  );
}
