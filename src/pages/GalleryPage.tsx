import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
// 1. Use 'import type' for PanInfo to satisfy verbatimModuleSyntax
import type { PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

// === VITE STATIC IMPORTS ===
import imgBuilding from "../assets/optimized/building.webp";
import imgReception from "../assets/optimized/reception.webp";
import imgMassageTwoBeds from "../assets/optimized/massage-room-two-beds.webp";
import imgMassageOneBed from "../assets/optimized/massage-room-one-bed.webp";
import imgInAction from "../assets/optimized/massage-in-action.webp";
import imgTechnique from "../assets/optimized/_EST8697.webp";
import imgBottles from "../assets/optimized/massage-bottles.webp";
import imgDecoration from "../assets/optimized/massage-decoration-1.webp";
import imgRooftop from "../assets/optimized/rooftop.webp";
import imgCleanRooms from "../assets/optimized/cleanRooms.webp";
import imgRoad from "../assets/optimized/road-to-vava.webp";
import imgStairs from "../assets/optimized/stairs-to-the-room.webp";
import imgSign from "../assets/optimized/sign.webp";
import imgAmeza from "../assets/optimized/ameza.webp";
import imgRestRoom from "../assets/optimized/massage-rest-room.webp";

const IMAGES = [
  { id: 1, src: imgInAction, alt: "Professional Massage" },
  { id: 2, src: imgReception, alt: "Vava Spa Reception" },
  { id: 3, src: imgMassageTwoBeds, alt: "Couples Suite" },
  { id: 4, src: imgRooftop, alt: "Rooftop Sanctuary" },
  { id: 5, src: imgMassageOneBed, alt: "Private Treatment Room" },
  { id: 6, src: imgBuilding, alt: "Vava Spa Exterior" },
  { id: 7, src: imgTechnique, alt: "Professional Technique" },
  { id: 8, src: imgBottles, alt: "Essential Oils" },
  { id: 10, src: imgCleanRooms, alt: "Pristine Rooms" },
  { id: 11, src: imgRoad, alt: "The Road to Vava" },
  { id: 12, src: imgStairs, alt: "Interior Design" },
  { id: 13, src: imgSign, alt: "Vava Spa Kigali" },
  { id: 14, src: imgAmeza, alt: "Interior Details" },
  { id: 15, src: imgRestRoom, alt: "Relaxation Area" },
  { id: 16, src: imgDecoration, alt: "Spa Ambience" },
];

const AUTO_PLAY_INTERVAL = 5000;

export default function CinematicGallery() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % IMAGES.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  // 2. Remove 'any'. Use PointerEvent (standard) and PanInfo (Framer)
  const onDragEnd = (
    _: PointerEvent | MouseEvent | TouchEvent,
    { offset, velocity }: PanInfo,
  ) => {
    const swipe = Math.abs(offset.x) * velocity.x;
    if (swipe < -10000) next();
    else if (swipe > 10000) prev();
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [isPlaying, next]);

  return (
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
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="h-full w-full object-cover pointer-events-none"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

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
              className="text-2xl font-light text-white md:text-5xl italic font-serif leading-tight"
            >
              {IMAGES[index].alt}
            </motion.h3>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 shadow-2xl">
              <button
                onClick={prev}
                className="p-2 text-white/80 hover:text-emerald-400 active:scale-90 transition-all"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="w-[1px] h-4 bg-white/10 mx-1" />
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 text-white/80 hover:text-emerald-400 active:scale-90 transition-all"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <div className="w-[1px] h-4 bg-white/10 mx-1" />
              <button
                onClick={next}
                className="p-2 text-white/80 hover:text-emerald-400 active:scale-90 transition-all"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/5">
          <motion.div
            key={`bar-${index}-${isPlaying}`}
            initial={{ width: 0 }}
            animate={isPlaying ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
            className="h-full bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.4)]"
          />
        </div>
      </div>
    </section>
  );
}
