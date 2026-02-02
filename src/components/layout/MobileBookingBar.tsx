import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, ClipboardList } from "lucide-react";

import Button from "../ui/Button";
import Container from "./Container";
import { site, waLink } from "../../data/site";

type Mode = "visible" | "hidden";

export default function MobileBookingBar() {
  const reduce = useReducedMotion();

  const [mode, setMode] = useState<Mode>("visible");
  const [nearBottom, setNearBottom] = useState(false);

  const lastY = useRef(0);
  const lastMoveAt = useRef(0);
  const raf = useRef<number | null>(null);

  const whatsappHref = useMemo(() => {
    const phone = site.whatsappPrimary || "250788440979";
    return waLink(phone, site.whatsappMessage);
  }, []);

  useEffect(() => {
    if (reduce) return;

    lastY.current = window.scrollY;

    const onScroll = () => {
      if (raf.current) return;

      raf.current = window.requestAnimationFrame(() => {
        raf.current = null;

        const y = window.scrollY;
        const dy = y - lastY.current;
        lastY.current = y;

        const now = performance.now();
        lastMoveAt.current = now;

        // Near bottom: keep visible, user is ready to act
        const doc = document.documentElement;
        const remaining = doc.scrollHeight - (y + window.innerHeight);
        const isNearBottom = remaining < 220;
        setNearBottom(isNearBottom);

        if (isNearBottom) {
          setMode("visible");
          return;
        }

        // If user is scrolling down (reading), hide bar to reduce clutter
        if (dy > 6) {
          setMode("hidden");
          return;
        }

        // If user scrolls up (seeking action/nav), show bar
        if (dy < -6) {
          setMode("visible");
        }
      });
    };

    // If user stops scrolling, show bar after a brief pause (gentle)
    const idleTick = window.setInterval(() => {
      const now = performance.now();
      const idleFor = now - lastMoveAt.current;
      if (idleFor > 650) setMode("visible");
    }, 250);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearInterval(idleTick);
      if (raf.current) window.cancelAnimationFrame(raf.current);
    };
  }, [reduce]);

  // Motion variants
  const animate =
    reduce || mode === "visible" ? { y: 0, opacity: 1 } : { y: 18, opacity: 0 };

  return (
    <motion.div
      initial={reduce ? false : { y: 18, opacity: 0 }}
      animate={reduce ? { y: 0, opacity: 1 } : animate}
      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 bottom-0 z-[70] sm:hidden"
    >
      {/* Soft glass base */}
      <div className="absolute inset-0 border-t border-border bg-bg/88 backdrop-blur" />

      {/* Edge fade so it feels embedded, not “pasted” */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-t from-bg/60 to-transparent"
      />

      <Container className="relative py-3">
        <div className="grid grid-cols-2 gap-3">
          <a href="/contact#quick-booking" aria-label="Open Quick Booking form">
            <Button size="lg" className="w-full">
              <span className="inline-flex items-center justify-center gap-2">
                <ClipboardList size={18} />
                Book Now
              </span>
            </Button>
          </a>

          <a href={whatsappHref} target="_blank" rel="noreferrer">
            <Button variant="secondary" size="lg" className="w-full">
              <span className="inline-flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                WhatsApp
              </span>
            </Button>
          </a>
        </div>

        <p className="mt-2 text-center text-[11px] text-muted">
          Quick Booking helps us prepare your session before WhatsApp.
        </p>

        {/* Small state hint when near bottom (optional but nice) */}
        {!reduce && nearBottom && (
          <p className="mt-1 text-center text-[10px] text-muted/80">
            You’re near the end. Ready to book?
          </p>
        )}
      </Container>
    </motion.div>
  );
}
