import { motion } from "framer-motion";
import Container from "../../layout/Container";

const easeLuxury = [0.19, 1, 0.22, 1] as const;

export default function GalleryHero() {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-bg">
      <Container>
        <div className="max-w-4xl">
          {/* Overline - Brand identifier */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-brand font-black uppercase tracking-[0.4em] text-[10px] block mb-6"
          >
            The Vava Sanctuary
          </motion.span>

          {/* Main Headline - Fluid typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeLuxury as any, delay: 0.1 }}
            className="text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[1.1] tracking-[-0.02em]"
          >
            Captured{" "}
            <span className="text-brand italic block md:inline">Silence.</span>
          </motion.h1>

          {/* Subheadline - Context */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeLuxury as any, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-text/60 max-w-2xl leading-relaxed"
          >
            A visual journey through spaces designed for tranquility, treatments
            crafted with care, and moments of pure serenity.
          </motion.p>

          {/* Optional: Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 flex items-center gap-3 text-text/40"
          >
            <div className="w-6 h-10 border-2 border-text/20 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-2 bg-text/40 rounded-full"
              />
            </div>
            <span className="text-xs uppercase tracking-wider font-medium">
              Scroll to explore
            </span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
