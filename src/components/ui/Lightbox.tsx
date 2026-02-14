import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import type { GalleryItem } from "../../data/gallery";

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
}

const useKeyboardNav = (
  isOpen: boolean,
  onClose: () => void,
  onNavigate: (dir: "prev" | "next") => void,
) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onNavigate("prev");
          break;
        case "ArrowRight":
          onNavigate("next");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNavigate]);
};

/**
 * Custom hook for touch gestures
 *
 * PERFORMANCE: Only calculates on touchend, not on every touchmove
 */
const useSwipeGesture = (
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  threshold = 50,
) => {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) < threshold) return; // Not a swipe, just a tap

    if (diff > 0) {
      onSwipeLeft(); // Swiped left, show next image
    } else {
      onSwipeRight(); // Swiped right, show previous image
    }
  };

  return { handleTouchStart, handleTouchEnd };
};

export default function Lightbox({
  item,
  items,
  onClose,
  onNavigate,
}: LightboxProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Reset loaded state when item changes
  useEffect(() => {
    setImageLoaded(false);
  }, [item?.id]);

  useKeyboardNav(!!item, onClose, onNavigate);

  const swipeHandlers = useSwipeGesture(
    () => onNavigate("next"),
    () => onNavigate("prev"),
  );

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === items.length - 1;

  const content = (
    <AnimatePresence mode="wait">
      {item && (
        <motion.div
          key="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={onClose}
          {...swipeHandlers}
        >
          {/* Close Button - Top Right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
            aria-label="Close lightbox"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation - Previous */}
          {!isFirst && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate("prev");
              }}
              className="absolute left-4 z-10 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden md:block"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Navigation - Next */}
          {!isLast && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate("next");
              }}
              className="absolute right-4 z-10 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden md:block"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Image Container */}
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-7xl max-h-[90vh] w-full mx-4 md:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Loading skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-white/5 animate-pulse rounded-2xl" />
            )}

            <img
              src={item.src}
              alt={item.alt}
              className={`w-full h-full object-contain rounded-2xl transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
            />

            {/* Image Info - Bottom Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl"
            >
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  {item.note && (
                    <p className="text-white/80 text-sm mt-2 max-w-md">
                      {item.note}
                    </p>
                  )}
                </div>
                <p className="text-white/40 text-sm font-mono hidden md:block">
                  {currentIndex + 1} / {items.length}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden">
            <p className="text-white/60 text-sm font-mono bg-black/50 px-4 py-2 rounded-full">
              {currentIndex + 1} / {items.length}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Render in portal to avoid z-index issues
  return createPortal(content, document.body);
}
