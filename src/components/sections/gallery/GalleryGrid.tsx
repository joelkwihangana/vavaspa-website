import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import Container from "../../layout/Container";
// Using a standard button to avoid "missing component" errors
import type {  GalleryItem } from "../../../data/gallery";

type Category = "all" | "interior" | "treatments" | "team" | "location";

const easeLuxury = [0.19, 1, 0.22, 1] as const;

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<Category>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // const reduce = useReducedMotion();

  const filteredItems = useMemo(() => {
    return filter === "all" 
      ? items 
      : items.filter(item => item.category === filter);
  }, [filter, items]);

  const currentItem = openIndex !== null ? filteredItems[openIndex] : null;

  // Body scroll lock when lightbox is open
  useEffect(() => {
    if (openIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [openIndex]);

  return (
    <div className="bg-bg text-text pb-20">
      {/* 1. FILTER NAV */}
      <nav className="sticky top-0 z-50 bg-bg/80 backdrop-blur-xl border-y border-border mb-12">
        <Container className="py-4 flex items-center justify-between">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {["all", "interior", "treatments", "team", "location"].map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat as Category); setOpenIndex(null); }}
                className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? "bg-brand text-white shadow-lg" 
                    : "bg-card text-text/40 hover:text-text"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </nav>

      {/* 2. BENTO GRID */}
      <section>
        <Container>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const isHero = index === 0 && filter === "all"; 
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, ease: easeLuxury as any }}
                    onClick={() => setOpenIndex(index)}
                    className={`
                      relative overflow-hidden rounded-[2.5rem] bg-card border border-border group cursor-pointer
                      ${isHero ? "md:col-span-4 lg:col-span-8 aspect-video" : "md:col-span-2 lg:col-span-4 aspect-square"}
                    `}
                  >
                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-brand/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                       <span className="text-white/60 text-[9px] font-black uppercase tracking-[0.3em]">{item.category}</span>
                       <h3 className="text-white text-2xl font-bold tracking-tighter">{item.title}</h3>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* 3. LIGHTBOX */}
      <AnimatePresence>
        {currentItem && (
          <Lightbox 
            item={currentItem} 
            onClose={() => setOpenIndex(null)}
            onNext={() => setOpenIndex(prev => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : prev))}
            onPrev={() => setOpenIndex(prev => (prev !== null && prev > 0 ? prev - 1 : prev))}
            hasPrev={openIndex! > 0}
            hasNext={openIndex! < filteredItems.length - 1}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function Lightbox({ item, onClose, onNext, onPrev, hasPrev, hasNext }: any) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onNext, onPrev, onClose]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-2xl flex items-center justify-center p-4"
    >
      <button onClick={onClose} className="absolute top-10 right-10 text-text uppercase font-bold tracking-widest text-xs">Close (Esc)</button>
      
      <div className="relative w-full max-w-5xl flex flex-col items-center">
        <motion.img 
          key={item.src}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          src={item.src} alt={item.alt} className="max-h-[70vh] rounded-2xl shadow-2xl" 
        />
        <div className="mt-8 text-center">
          <h3 className="text-3xl font-bold tracking-tighter">{item.title}</h3>
          <p className="text-brand font-mono text-xs uppercase tracking-widest mt-2">{item.category}</p>
        </div>

        {/* Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 lg:-px-20">
          <button onClick={onPrev} disabled={!hasPrev} className={`p-4 rounded-full bg-card border border-border ${!hasPrev && 'opacity-0'}`}>Prev</button>
          <button onClick={onNext} disabled={!hasNext} className={`p-4 rounded-full bg-card border border-border ${!hasNext && 'opacity-0'}`}>Next</button>
        </div>
      </div>
    </motion.div>
  );
}