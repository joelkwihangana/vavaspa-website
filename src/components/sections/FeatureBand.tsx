// src/components/sections/FeatureBrand.tsx
import { motion} from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { cn } from "../../lib/cn";

import f1 from "../../assets/feature/real-vava.webp";
import f2 from "../../assets/feature/icyapa.webp";
import type { Variants } from "framer-motion"

interface EditorialProps {
  label: string;
  title: string;
  desc: string;
  cta?: { label: string; href: string };
  image: string;
  reverse?: boolean;
}

/**
 * Animation Variants
 * Explicitly typed as 'Variants' to resolve the 'ease' property assignment error.
 */
const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.02 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } 
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] } 
  }
};

function EditorialBlock({ label, title, desc, cta, image, reverse = false }: EditorialProps) {
  return (
    <div className={cn(
      "relative flex flex-col lg:flex-row lg:items-center",
      reverse ? "lg:flex-row-reverse" : ""
    )}>
      
      {/* 1. Image Container
          Added a subtle border to the frame to prevent the 'floating' look in your screenshot.
      */}
      <motion.div 
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-0 w-full lg:w-[65%]"
      >
        <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-border/40 shadow-sm sm:aspect-[16/10] lg:aspect-[16/11]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-[3s] hover:scale-105"
            loading="lazy"
          />
        </div>
        {/* Subtle vignette for depth */}
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </motion.div>

      {/* 2. Content Card
          Innovative overlap for mobile (-mt-20) and desktop (-ml-24).
          Uses multi-layered shadows to fix the 'border clipping' visual bug.
      */}
      <motion.div 
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className={cn(
          "relative z-10 -mt-20 w-[90%] self-center sm:-mt-32 lg:mt-0 lg:w-[42%] lg:self-auto",
          reverse ? "lg:-mr-24" : "lg:-ml-24"
        )}
      >
        <div className="rounded-[2.5rem] border border-white/40 bg-white/90 p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] backdrop-blur-2xl sm:p-12 lg:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)]">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brand" />
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand">
              {label}
            </p>
          </div>

          <h3 className="mt-6 text-3xl font-semibold leading-[1.15] tracking-tight text-text sm:text-4xl">
            {title}
          </h3>

          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            {desc}
          </p>

          {/* Desktop Call to Action */}
          {cta && (
            <div className="mt-10 hidden sm:block">
              <a href={cta.href}>
                <Button size="lg" className="rounded-full px-10 shadow-lg shadow-brand/10 hover:shadow-brand/20">
                  {cta.label}
                </Button>
              </a>
            </div>
          )}

          {/* Mobile Innovation: Status Indicator instead of generic text */}
          <div className="mt-8 flex items-center gap-2.5 sm:hidden">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
              Vava Signature Care
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function FeatureBrand() {
  return (
    <section className="bg-bg py-24 sm:py-32 lg:py-48 overflow-hidden">
      <Container>
        {/* We use large gap-48 to give each 'ritual' room to breathe */}
        <div className="flex flex-col gap-40 lg:gap-64">
          
          <EditorialBlock
            label="The Ritual"
            title="Unhurried sessions, intentional care."
            desc="We don't rush the process. Every session at Vava Spa starts with a moment of transition—a chance to leave the bustle of Kigali behind before the first touch begins."
            cta={{ label: "Begin Quick Booking", href: "/contact" }}
            image={f1}
            reverse={false}
          />

          <EditorialBlock
            label="The Space"
            title="A calm sanctuary that feels like home."
            desc="Cleanliness is our foundation. From high-thread-count linens to the subtle scent of organic oils, every detail is engineered to lower your cortisol and restore your peace."
            image={f2}
            reverse={true}
          />
          
        </div>
      </Container>
    </section>
  );
}