import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import Container from "../components/layout/Container";
import { galleryItems } from "../data/gallery";

type Category = "All" | "interior" | "treatments" | "team" | "location" | "menu";

const easeLuxury = [0.19, 1, 0.22, 1] as const;

export default function GalleryPage() {
  const [filter, setFilter] = useState<Category>("All");
  const [zoomedMenu, setZoomedMenu] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <div className="bg-bg text-text min-h-screen">
      {/* 1. EDITORIAL HERO: Separation of concerns for clarity */}
      <section className="pt-32 pb-16 bg-bg">
        <Container>
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-brand font-black uppercase tracking-[0.4em] text-[10px]"
            >
              The Vava Sanctuary
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeLuxury as any }}
              className="mt-6 text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85]"
            >
              Captured <br />
              <span className="text-brand italic">Silence.</span>
            </motion.h1>
          </div>
        </Container>
      </section>

      {/* 2. PILL NAVIGATION: Modern & Scannable */}
      <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-xl border-y border-border">
        <Container className="py-4 flex items-center justify-between">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {(
              [
                "All",
                "interior",
                "treatments",
                "team",
                "location",
                "menu",
              ] as Category[]
            ).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                  filter === cat
                    ? "bg-brand text-white shadow-lg shadow-brand/20"
                    : "bg-card text-text/40 hover:text-text"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="hidden md:block text-[10px] font-mono text-text/20 uppercase tracking-tighter">
            Curated Assets // {filteredItems.length}
          </p>
        </Container>
      </nav>

      {/* 3. BENTO MASONRY: Responsive Grid Logic */}
      <section className="py-16">
        <Container>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                /**
                 * BENTO LOGIC:
                 * We define specific spans based on index to create a rhythmic layout.
                 * 1st item: Large Hero (8 columns)
                 * 5th item: Tall Portrait (4 columns)
                 * Others: Balanced squares/rectangles
                 */
                const isHero = index === 0 && filter === "All";
                const isTall = index === 4 || index === 7;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, ease: easeLuxury as any }}
                    onClick={item.category === "menu" ? () => setZoomedMenu(item.src) : undefined}
                    className={`
                      relative overflow-hidden rounded-[2.5rem] bg-card border border-border group
                      ${item.category === "menu" ? "cursor-zoom-in" : ""}
                      ${isHero ? "md:col-span-4 lg:col-span-8 aspect-video lg:aspect-auto" : "md:col-span-2 lg:col-span-4"}
                      ${isTall ? "lg:row-span-2 aspect-[3/4]" : "aspect-square"}
                    `}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.9] group-hover:brightness-100"
                      loading="lazy"
                    />

                    {/* MINIMALIST OVERLAY: No "smoke", just clean typography on brand color */}
                    <div className="absolute inset-0 bg-brand/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                      <motion.div
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                      >
                        <span className="text-white/60 text-[9px] font-black uppercase tracking-[0.3em]">
                          {item.category}
                        </span>
                        <h3 className="text-white text-3xl font-bold tracking-tighter mt-1 leading-none">
                          {item.title}
                        </h3>
                        {item.note && (
                          <p className="text-white/80 text-sm mt-4 font-medium border-l border-white/20 pl-4 italic">
                            {item.note}
                          </p>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* Menu Zoom Overlay */}
      {zoomedMenu && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-start justify-center overflow-y-auto p-4 md:p-8"
          onClick={() => setZoomedMenu(null)}
        >
          <button
            onClick={() => setZoomedMenu(null)}
            className="fixed top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={zoomedMenu}
            alt="Vava Spa Menu"
            className="w-full max-w-3xl rounded-2xl shadow-2xl my-8 cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}

      {/* 4. CALL TO ACTION: Brand Anchor */}
      <section className="py-32 bg-brand text-white text-center">
        <Container>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Ready to experience?
          </h2>
          <p className="mt-6 text-white/70 max-w-md mx-auto text-lg">
            Book your sanctuary time today.
          </p>
        </Container>
      </section>
    </div>
  );
}
