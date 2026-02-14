/**
 * Gallery Empty State
 *
 * WHY THIS MATTERS:
 * - UX polish separates good from great
 * - Prevents user confusion when filters return nothing
 * - Provides clear path forward (reset filter)
 * - Maintains brand voice even in edge cases
 *
 * WHEN THIS SHOWS:
 * - Filter returns 0 results
 * - API fails to load images (future-proofing)
 */

import { motion } from "framer-motion";

interface EmptyStateProps {
  activeFilter: string;
  onReset: () => void;
}

export default function EmptyState({ activeFilter, onReset }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="col-span-full py-24 md:py-32 text-center"
    >
      {/* Icon */}
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-card border border-border flex items-center justify-center">
        <svg
          className="w-10 h-10 text-text/20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>

      {/* Message */}
      <h3 className="text-2xl font-bold text-text/80 mb-2">
        No {activeFilter !== "all" ? activeFilter : ""} images yet
      </h3>
      <p className="text-text/50 mb-8 max-w-md mx-auto">
        We're continuously adding new moments of tranquility. Try a different
        category or view all images.
      </p>

      {/* Reset Button */}
      <motion.button
        onClick={onReset}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-brand text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-brand/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        View All Images
      </motion.button>
    </motion.div>
  );
}
