import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, MessageCircle, CalendarDays } from "lucide-react";
import Button from "./Button";
import { site, waLink } from "../../data/site";
import type { ServiceItem, ServiceCategory } from "../../data/services";

export default function ServiceDetailDrawer({
  open,
  onClose,
  item,
  category,
}: {
  open: boolean;
  onClose: () => void;
  item: ServiceItem | null;
  category: ServiceCategory | null;
}) {
  const reduce = useReducedMotion();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!item || !category) return null;

  const waHref = waLink(site.whatsappPrimary, site.whatsappMessage, {
    service: item.name,
  });

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80]"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
        >
          {/* Overlay */}
          <button
            onClick={onClose}
            className="absolute inset-0 bg-black/45"
            aria-label="Close service details"
          />

          {/* Panel */}
          <motion.aside
            initial={reduce ? false : { x: 24, opacity: 0 }}
            animate={reduce ? undefined : { x: 0, opacity: 1 }}
            exit={reduce ? undefined : { x: 24, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={[
              "absolute right-0 top-0 h-full w-full sm:w-[520px]",
              "bg-bg border-l border-border shadow-soft",
              "flex flex-col",
            ].join(" ")}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 p-6 sm:p-7 border-b border-border">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  {category === "massage" ? "Massage treatment" : "Spa service"}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  {item.name}
                </h3>
                {item.duration ? (
                  <p className="mt-2 text-sm text-muted">{item.duration}</p>
                ) : null}
              </div>

              <button
                onClick={onClose}
                className="rounded-full border border-border bg-card p-2 hover:bg-bg transition"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-7 overflow-auto">
              <p className="text-base text-muted leading-relaxed">
                {item.description}
              </p>

              {item.goodFor?.length ? (
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted">
                    Good for
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.goodFor.map((g) => (
                      <span
                        key={g}
                        className="rounded-full border border-border bg-card px-4 py-2 text-xs text-muted"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-8 grid gap-3">
                <a href={waHref} target="_blank" rel="noreferrer">
                  <Button size="lg" className="w-full">
                    <span className="inline-flex items-center justify-center gap-2">
                      <MessageCircle size={18} />
                      Book this on WhatsApp
                    </span>
                  </Button>
                </a>

                <a href="/contact">
                  <Button variant="secondary" size="lg" className="w-full">
                    <span className="inline-flex items-center justify-center gap-2">
                      <CalendarDays size={18} />
                      Request via form
                    </span>
                  </Button>
                </a>

                <p className="text-center text-[11px] text-muted">
                  Add your preferred date and time in your message.
                </p>
              </div>
            </div>

            {/* Bottom safe area for mobile */}
            <div className="h-6 sm:h-0" />
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
