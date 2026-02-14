/**
 * Gallery Filter Navigation
 *
 * WHY THIS PATTERN:
 * - Sticky navigation keeps filters accessible while scrolling
 * - Pill-based design is touch-friendly (44px minimum tap target)
 * - Shows item counts to set expectations
 * - Smooth transitions between filter states
 *
 * ACCESSIBILITY:
 * - aria-pressed for toggle state
 * - Keyboard navigation
 * - Focus indicators
 * - Screen reader announcements
 */

import { motion } from "framer-motion";
import type { Category } from "../../../data/gallery";
import { categoryMetadata } from "../../../data/gallery";

interface FilterNavProps {
  activeFilter: Category;
  onFilterChange: (category: Category) => void;
  totalItems: number;
}

const categories: Category[] = [
  "all",
  "interior",
  "treatments",
  "team",
  "location",
];

export default function FilterNav({
  activeFilter,
  onFilterChange,
  totalItems,
}: FilterNavProps) {
  return (
    <nav
      className="sticky top-0 z-40 bg-bg/90 backdrop-blur-xl border-b border-border/50"
      aria-label="Gallery filter navigation"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 gap-4">
          {/* Filter Pills */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0 -mx-1 px-1">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              const { label, count } = categoryMetadata[category];

              return (
                <motion.button
                  key={category}
                  onClick={() => onFilterChange(category)}
                  aria-pressed={isActive}
                  aria-label={`Filter by ${label}, ${count} items`}
                  className={`
                    relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest
                    transition-all duration-300 whitespace-nowrap
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2
                    ${
                      isActive
                        ? "bg-brand text-white shadow-lg shadow-brand/20"
                        : "bg-card text-text/50 hover:text-text hover:bg-card/80"
                    }
                  `}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Active indicator underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-brand rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Label + Count */}
                  <span className="relative z-10 flex items-center gap-2">
                    {label}
                    <span
                      className={`
                      text-[9px] font-mono px-1.5 py-0.5 rounded
                      ${isActive ? "bg-white/20" : "bg-text/5"}
                    `}
                    >
                      {count}
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Results Counter - Hidden on mobile */}
          <motion.p
            key={totalItems}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block text-xs font-mono text-text/30 uppercase tracking-wider whitespace-nowrap"
          >
            {totalItems} {totalItems === 1 ? "Image" : "Images"}
          </motion.p>
        </div>
      </div>
    </nav>
  );
}
