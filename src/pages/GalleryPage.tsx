import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

// === VITE STATIC IMPORTS ===
import img20260215_104657 from "../assets/optimized/20260215_104657.webp";
import img20260215_104705 from "../assets/optimized/20260215_104705.webp";
import img20260215_104728 from "../assets/optimized/20260215_104728.webp";
import img20260215_121932 from "../assets/optimized/20260215_121932.webp";
import img20260215_134754 from "../assets/optimized/20260215_134754.webp";
import img20260215_134845 from "../assets/optimized/20260215_134845.webp";
import img20260215_134856 from "../assets/optimized/20260215_134856.webp";
import img20260215_134954 from "../assets/optimized/20260215_134954.webp";
import img20260215_135006 from "../assets/optimized/20260215_135006.webp";
import imgAmeza from "../assets/optimized/ameza.webp";
import imgBuilding from "../assets/optimized/building.webp";
import imgCleanRooms from "../assets/optimized/cleanRooms.webp";
import imgEST8623 from "../assets/optimized/_EST8623.webp";
import imgEST8627 from "../assets/optimized/_EST8627.webp";
import imgEST8630 from "../assets/optimized/_EST8630.webp";
import imgEST8638 from "../assets/optimized/_EST8638.webp";
import imgEST8640 from "../assets/optimized/_EST8640.webp";
import imgEST8643 from "../assets/optimized/_EST8643.webp";
import imgEST8646 from "../assets/optimized/_EST8646.webp";
import imgEST8654 from "../assets/optimized/_EST8654.webp";
import imgEST8658 from "../assets/optimized/_EST8658.webp";
import imgEST8664 from "../assets/optimized/_EST8664.webp";
import imgEST8668 from "../assets/optimized/_EST8668.webp";
import imgEST8689 from "../assets/optimized/_EST8689.webp";
import imgEST8692 from "../assets/optimized/_EST8692.webp";
import imgEST8697 from "../assets/optimized/_EST8697.webp";
import imgEST8701 from "../assets/optimized/_EST8701.webp";
import imgEST8703 from "../assets/optimized/_EST8703.webp";
import imgEST8707 from "../assets/optimized/_EST8707.webp";
import imgEST8712 from "../assets/optimized/_EST8712.webp";
import imgEST8716 from "../assets/optimized/_EST8716.webp";
import imgEST8728 from "../assets/optimized/_EST8728.webp";
import imgEST8730 from "../assets/optimized/_EST8730.webp";
import imgEST8731 from "../assets/optimized/_EST8731.webp";
import imgEST8732 from "../assets/optimized/_EST8732.webp";
import imgEST8734 from "../assets/optimized/_EST8734.webp";
import imgEST8744 from "../assets/optimized/_EST8744.webp";
import imgEST8747 from "../assets/optimized/_EST8747.webp";
import imgEST8751 from "../assets/optimized/_EST8751.webp";
import imgEST8755 from "../assets/optimized/_EST8755.webp";
import imgFullBrand from "../assets/optimized/full-brand-vava.webp";
import imgIcyapa from "../assets/optimized/icyapa.webp";
import imgIMGWA0007 from "../assets/optimized/IMG-20260207-WA0007.webp";
import imgInTheRoom from "../assets/optimized/intheroom.webp";
import imgMassageBottles from "../assets/optimized/massage-bottles.webp";
import imgMassageDecoration from "../assets/optimized/massage-decoration-1.webp";
import imgMassageInAction from "../assets/optimized/massage-in-action.webp";
import imgMassageReady from "../assets/optimized/massage-ready.webp";
import imgMassageRestRoom from "../assets/optimized/massage-rest-room.webp";
import imgMassageRoomOneBed from "../assets/optimized/massage-room-one-bed.webp";
import imgMassageRoomTwoBeds from "../assets/optimized/massage-room-two-beds.webp";
import imgMucyumba1 from "../assets/optimized/mucyumba1.webp";
import imgReception from "../assets/optimized/reception.webp";
import imgRoadToVava from "../assets/optimized/road-to-vava.webp";
import imgRooftop from "../assets/optimized/rooftop.webp";
import imgSign from "../assets/optimized/sign.webp";
import imgStairsToTheRoom from "../assets/optimized/stairs-to-the-room.webp";
import imgStairs from "../assets/optimized/stairs.webp";
import imgWashingRoom from "../assets/optimized/washing-room.webp";

const IMAGES = [
  { id: 1, src: imgMassageInAction, alt: "Expert Healing Hands" },
  { id: 2, src: imgEST8697, alt: "Tranquil Treatment Room" },
  { id: 3, src: imgRooftop, alt: "Rooftop Sanctuary" },
  { id: 4, src: imgMassageRoomTwoBeds, alt: "Couples Retreat" },
  { id: 5, src: imgEST8716, alt: "Professional Care" },

  { id: 6, src: imgBuilding, alt: "Your Destination" },
  { id: 7, src: imgSign, alt: "Welcome to Vava" },
  { id: 8, src: imgRoadToVava, alt: "The Journey Begins" },
  { id: 9, src: imgReception, alt: "Warm Welcome" },
  { id: 10, src: imgStairs, alt: "Ascend to Calm" },
  { id: 11, src: imgStairsToTheRoom, alt: "Your Path" },
  { id: 12, src: imgEST8751, alt: "Interior Elegance" },
  { id: 13, src: imgEST8755, alt: "Thoughtful Design" },

  { id: 14, src: imgMassageRoomOneBed, alt: "Private Sanctuary" },
  { id: 15, src: imgMassageReady, alt: "Prepared for You" },
  { id: 16, src: imgCleanRooms, alt: "Pristine Spaces" },
  { id: 17, src: imgInTheRoom, alt: "Your Treatment Space" },
  { id: 18, src: imgMassageRestRoom, alt: "Rest & Restore" },
  { id: 19, src: imgMucyumba1, alt: "Specialty Suite" },

  { id: 20, src: imgEST8623, alt: "Professional Technique" },
  { id: 21, src: imgEST8627, alt: "Skilled Therapists" },
  { id: 22, src: imgEST8630, alt: "Healing Touch" },
  { id: 23, src: imgEST8638, alt: "Expert Care" },
  { id: 24, src: imgEST8640, alt: "Therapeutic Massage" },
  { id: 25, src: imgEST8643, alt: "Restorative Session" },
  { id: 26, src: imgEST8646, alt: "Tailored Treatment" },

  { id: 27, src: imgMassageBottles, alt: "Premium Oils" },
  { id: 28, src: imgMassageDecoration, alt: "Spa Ambience" },
  { id: 29, src: imgWashingRoom, alt: "Complete Comfort" },
  { id: 30, src: imgAmeza, alt: "Thoughtful Touches" },
  { id: 31, src: imgIcyapa, alt: "Cultural Elements" },
  { id: 32, src: imgFullBrand, alt: "Vava Spa Kigali" },

  { id: 33, src: imgEST8654, alt: "Spa Details" },
  { id: 34, src: imgEST8658, alt: "Interior Accent" },
  { id: 35, src: imgEST8664, alt: "Design Element" },
  { id: 36, src: imgEST8668, alt: "Treatment Room Feature" },
  { id: 37, src: imgEST8689, alt: "Atmospheric Lighting" },
  { id: 38, src: imgEST8692, alt: "Ambient Glow" },
  { id: 39, src: imgEST8701, alt: "Decorative Detail" },
  { id: 40, src: imgEST8703, alt: "Interior Harmony" },
  { id: 41, src: imgEST8707, alt: "Design Precision" },
  { id: 42, src: imgEST8712, alt: "Spa Element" },
  { id: 43, src: imgEST8728, alt: "Room Accent" },
  { id: 44, src: imgEST8730, alt: "Visual Detail" },
  { id: 45, src: imgEST8731, alt: "Interior Feature" },
  { id: 46, src: imgEST8732, alt: "Design Touch" },
  { id: 47, src: imgEST8734, alt: "Spa Amenity" },
  { id: 48, src: imgEST8744, alt: "Treatment Detail" },
  { id: 49, src: imgEST8747, alt: "Finishing Touch" },

  { id: 50, src: img20260215_104657, alt: "Spa Interior" },
  { id: 51, src: img20260215_104705, alt: "Treatment Space" },
  { id: 52, src: img20260215_104728, alt: "Design Feature" },
  { id: 53, src: img20260215_121932, alt: "Interior View" },
  { id: 54, src: img20260215_134754, alt: "Spa Element" },
  { id: 55, src: img20260215_134845, alt: "Design Detail" },
  { id: 56, src: img20260215_134856, alt: "Spa Accent" },
  { id: 57, src: img20260215_134954, alt: "Interior Feature" },
  { id: 58, src: img20260215_135006, alt: "Visual Detail" },
  { id: 59, src: imgIMGWA0007, alt: "Vava Spa Moment" },
];

const AUTO_PLAY_INTERVAL = 5000;
const WHATSAPP_LINK = "https://wa.me/250788408978";

export default function GalleryPage() {
  const prefersReducedMotion = useReducedMotion();

  const [index, setIndex] = useState(0);

  // Autoplay only after user interaction, and never for reduced motion.
  const [isPlaying, setIsPlaying] = useState(() => !prefersReducedMotion);
  const [hasInteracted, setHasInteracted] = useState(false);

  const markInteraction = useCallback(() => setHasInteracted(true), []);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % IMAGES.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  const nextSafe = useCallback(() => {
    markInteraction();
    next();
  }, [markInteraction, next]);

  const prevSafe = useCallback(() => {
    markInteraction();
    prev();
  }, [markInteraction, prev]);

  const togglePlay = useCallback(() => {
    markInteraction();
    setIsPlaying((p) => !p);
  }, [markInteraction]);

  // Reliable swipe on phones: distance OR velocity threshold
  const onDragEnd = useCallback(
    (_: unknown, info: PanInfo) => {
      markInteraction();

      const offsetX = info.offset.x;
      const velocityX = info.velocity.x;

      const isSwipeLeft = offsetX < -80 || velocityX < -800;
      const isSwipeRight = offsetX > 80 || velocityX > 800;

      if (isSwipeLeft) next();
      if (isSwipeRight) prev();
    },
    [markInteraction, next, prev],
  );

  // Preload next + prev for instant-feeling transitions on mobile networks
  useEffect(() => {
    const preload = (src: string) => {
      const img = new Image();
      img.decoding = "async";
      img.src = src;
    };

    const nextIndex = (index + 1) % IMAGES.length;
    const prevIndex = (index - 1 + IMAGES.length) % IMAGES.length;

    preload(IMAGES[nextIndex].src);
    preload(IMAGES[prevIndex].src);
  }, [index]);

  // Auto-play effect (only after interaction, and never for reduced motion)
  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!isPlaying) return;
    if (!hasInteracted) return;

    const interval = window.setInterval(next, AUTO_PLAY_INTERVAL);
    return () => window.clearInterval(interval);
  }, [prefersReducedMotion, isPlaying, hasInteracted, next]);

  // Keyboard navigation (do not hijack when user is typing)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const active = document.activeElement as HTMLElement | null;
      const isTyping =
        active?.tagName === "INPUT" ||
        active?.tagName === "TEXTAREA" ||
        active?.isContentEditable;

      if (isTyping) return;

      if (e.key === "ArrowLeft") prevSafe();
      if (e.key === "ArrowRight") nextSafe();
      if (e.key === " ") {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSafe, prevSafe, togglePlay]);

  return (
    <div className="min-h-screen bg-neutral-50 overflow-x-hidden">
      {/* === HERO SECTION WITH BRAND TAGLINE === */}
      <section className="relative overflow-hidden flex min-h-screen flex-col items-center justify-center bg-emerald-950 px-6 py-20 text-center">
        {/* Ambient background glow (responsive width, clipped) */}
        <div className="absolute left-1/2 top-1/2 h-[min(800px,100vw)] w-[min(800px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="relative z-10 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="mb-12 font-serif text-6xl font-light italic tracking-tight text-white md:text-8xl"
          >
            Vava Spa
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-6 text-emerald-100"
          >
            <p className="text-2xl font-light md:text-4xl">Relax the mind</p>
            <div className="mx-auto h-[1px] w-16 bg-emerald-400/40" />
            <p className="text-2xl font-light md:text-4xl">Renew the body</p>
            <div className="mx-auto h-[1px] w-16 bg-emerald-400/40" />
            <p className="text-2xl font-light md:text-4xl">Revive the soul</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-400/80">
              Explore Our Sanctuary
            </p>
            <motion.div
              animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }
              className="mx-auto h-12 w-[1px] bg-gradient-to-b from-emerald-400/80 to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* === CINEMATIC GALLERY === */}
      <section className="relative h-[75vh] w-full overflow-hidden bg-neutral-950 md:h-[90vh]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={IMAGES[index].src}
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={onDragEnd}
          >
            <motion.img
              src={IMAGES[index].src}
              alt={IMAGES[index].alt}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={index === 0 ? "high" : "auto"}
              draggable={false}
              initial={prefersReducedMotion ? false : { scale: 1.1 }}
              animate={prefersReducedMotion ? undefined : { scale: 1 }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 1.5, ease: [0.19, 1, 0.22, 1] }
              }
              className="pointer-events-none h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        <div className="absolute bottom-0 left-0 z-20 w-full p-6 md:p-12">
          <div className="flex flex-col gap-6">
            <div className="space-y-1">
              <motion.p
                key={`count-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-400/90"
              >
                {String(index + 1).padStart(2, "0")} / {IMAGES.length}
              </motion.p>

              <motion.h3
                key={`title-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-2xl font-light italic leading-tight text-white md:text-5xl"
              >
                {IMAGES[index].alt}
              </motion.h3>

              {!hasInteracted && (
                <p className="text-xs tracking-wide text-white/60">
                  Swipe to explore. Tap play when ready.
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-4 py-2 shadow-2xl backdrop-blur-xl">
                <button
                  onClick={prevSafe}
                  className="rounded-full p-3 text-white/80 transition-all hover:text-emerald-400 active:scale-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400/60 md:p-2"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="mx-1 h-4 w-[1px] bg-white/10" />

                <button
                  onClick={togglePlay}
                  className="rounded-full p-3 text-white/80 transition-all hover:text-emerald-400 active:scale-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400/60 md:p-2"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>

                <div className="mx-1 h-4 w-[1px] bg-white/10" />

                <button
                  onClick={nextSafe}
                  className="rounded-full p-3 text-white/80 transition-all hover:text-emerald-400 active:scale-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400/60 md:p-2"
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/5">
            <motion.div
              key={`bar-${index}-${isPlaying}-${hasInteracted}`}
              initial={{ width: 0 }}
              animate={
                isPlaying && hasInteracted && !prefersReducedMotion
                  ? { width: "100%" }
                  : { width: "0%" }
              }
              transition={
                isPlaying && hasInteracted && !prefersReducedMotion
                  ? { duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }
                  : { duration: 0.2, ease: "linear" }
              }
              className="h-full bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.4)]"
            />
          </div>
        </div>

        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Showing image {index + 1} of {IMAGES.length}: {IMAGES[index].alt}
        </div>
      </section>

      {/* === BOOKING CTA === */}
      <section className="relative overflow-hidden bg-emerald-950 py-24 md:py-40">
        {/* Ambient glow (responsive width, clipped) */}
        <div className="absolute left-1/2 top-0 h-[min(500px,100vw)] w-[min(500px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-emerald-400"
          >
            Your Sanctuary Awaits
          </motion.span>

          <h2 className="mb-8 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Ready to{" "}
            <span className="font-serif italic text-emerald-200">
              experience
            </span>
            ?
          </h2>

          <p className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-emerald-100/70 md:text-xl">
            Every treatment is tailored to your body's unique needs. Join us in
            Kigali for a session of pure restoration.
          </p>

          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-sm font-bold uppercase tracking-widest text-emerald-950 transition-shadow hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)]"
          >
            Book on WhatsApp
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525L2 22L7.54751 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </div>
      </section>
    </div>
  );
}
