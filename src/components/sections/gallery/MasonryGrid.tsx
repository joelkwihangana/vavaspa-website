/**
 * Responsive Masonry Grid Component
 */

import { motion } from "framer-motion";
import type { GalleryItem, LayoutHint } from "../../../data/gallery";

interface MasonryGridProps {
  items: GalleryItem[];
  onItemClick: (item: GalleryItem) => void;
}

const getGridClasses = (layoutHint: LayoutHint): string => {
  const baseClasses =
    "relative overflow-hidden rounded-3xl bg-card border border-border group cursor-pointer";

  const mobileClasses =
    layoutHint === "hero" || layoutHint === "wide"
      ? "aspect-[4/3]"
      : layoutHint === "tall"
        ? "aspect-[3/4]"
        : "aspect-square";

  const tabletClasses =
    layoutHint === "hero" || layoutHint === "wide"
      ? "md:col-span-2 md:aspect-[16/10]"
      : layoutHint === "tall"
        ? "md:col-span-1 md:aspect-[3/4]"
        : "md:col-span-1 md:aspect-square";

  const desktopClasses =
    layoutHint === "hero"
      ? "lg:col-span-2 lg:row-span-2 lg:aspect-[4/3]"
      : layoutHint === "wide"
        ? "lg:col-span-2 lg:row-span-1 lg:aspect-[16/10]"
        : layoutHint === "tall"
          ? "lg:col-span-1 lg:row-span-2 lg:aspect-[3/4]"
          : "lg:col-span-1 lg:row-span-1 lg:aspect-square";

  return `${baseClasses} ${mobileClasses} ${tabletClasses} ${desktopClasses}`;
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.05,
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  }),
};

export default function MasonryGrid({ items, onItemClick }: MasonryGridProps) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-4 md:gap-6"
    >
      {items.map((item, index) => (
        <motion.article
          key={item.id}
          custom={index}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          layout
          onClick={() => onItemClick(item)}
          className={getGridClasses(item.layoutHint)}
          role="button"
          tabIndex={0}
          aria-label={`View ${item.title} in lightbox`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onItemClick(item);
            }
          }}
        >
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.92] group-hover:brightness-100"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="inline-block text-white/70 text-[9px] font-black uppercase tracking-[0.3em] mb-2">
                {item.category}
              </span>

              <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight leading-tight">
                {item.title}
              </h3>

              {item.note && (
                <p className="text-white/80 text-sm mt-3 line-clamp-2 font-medium">
                  {item.note}
                </p>
              )}

              <div className="mt-4 flex items-center gap-2 text-white/60 text-xs font-medium">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span className="uppercase tracking-wider">View</span>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 ring-4 ring-brand ring-offset-4 ring-offset-bg rounded-3xl opacity-0 focus-visible:opacity-100 transition-opacity pointer-events-none" />
        </motion.article>
      ))}
    </motion.div>
  );
}
