import { useState, useMemo, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../components/layout/Container";
import GalleryHero from "../components/sections/gallery/GalleryHero";
import FilterNav from "../components/sections/gallery/FilterNav";
import MasonryGrid from "../components/sections/gallery/MasonryGrid";
import EmptyState from "../components/sections/gallery/EmptyState";
import Lightbox from "../components/ui/Lightbox";
import { galleryItems, type Category } from "../data/gallery";

const easeLuxury = [0.19, 1, 0.22, 1] as const;

export default function GalleryPage() {
  // State: Filter selection
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  // State: Lightbox
  const [selectedItem, setSelectedItem] = useState<
    (typeof galleryItems)[0] | null
  >(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const handleNavigate = useCallback(
    (direction: "prev" | "next") => {
      if (!selectedItem) return;

      const currentIndex = filteredItems.findIndex(
        (item) => item.id === selectedItem.id,
      );
      let nextIndex: number;

      if (direction === "next") {
        nextIndex =
          currentIndex + 1 >= filteredItems.length ? 0 : currentIndex + 1;
      } else {
        nextIndex =
          currentIndex - 1 < 0 ? filteredItems.length - 1 : currentIndex - 1;
      }

      setSelectedItem(filteredItems[nextIndex]);
    },
    [selectedItem, filteredItems],
  );

  const handleCloseLightbox = useCallback(() => {
    setSelectedItem(null);
  }, []);

  return (
    <div className="bg-bg text-text min-h-screen">
      {/* Hero Section */}
      <GalleryHero />

      {/* Filter Navigation - Sticky */}
      <FilterNav
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        totalItems={filteredItems.length}
      />

      {/* Gallery Grid */}
      <section className="py-12 md:py-16">
        <Container>
          {/* Animate filter changes */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: easeLuxury as any }}
            >
              {filteredItems.length > 0 ? (
                <MasonryGrid
                  items={filteredItems}
                  onItemClick={setSelectedItem}
                />
              ) : (
                <EmptyState
                  activeFilter={activeFilter}
                  onReset={() => setActiveFilter("all")}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-brand text-white text-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeLuxury as any }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Ready to experience?
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Book your sanctuary time today and discover why our guests return
              again and again.
            </p>
            <motion.a
              href="https://wa.me/250788408978"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-white text-brand rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
            >
              Book on WhatsApp
            </motion.a>
          </motion.div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedItem}
        items={filteredItems}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
