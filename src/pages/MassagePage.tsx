// src/pages/MassagePage.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type {  Variants } from "framer-motion";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import { cn } from "../lib/cn";

// Assets
import heroImg from "../assets/services/massage.webp";
import imgRoom from "../assets/feature/intheroom.webp";

/**
 * PRODUCTION TYPES & DATA
 */
type Tone = "restore" | "release" | "renew";

interface Massage {
  title: string;
  desc: string;
  tone: Tone;
  durationHint: string;
}

const easeLuxury: [number, number, number, number] = [0.19, 1, 0.22, 1];

const massages: Massage[] = [
  {
    title: "Swedish Massage",
    desc: "Gentle full-body relaxation to calm the nervous system and ease stress.",
    tone: "restore",
    durationHint: "60–90 min",
  },
  {
    title: "Deep Tissue Massage",
    desc: "Targets deeper muscle layers to release tension and soreness.",
    tone: "release",
    durationHint: "60–90 min",
  },
  {
    title: "Thai Massage",
    desc: "Stretch-based therapy that improves flexibility and alignment.",
    tone: "renew",
    durationHint: "60–90 min",
  },
  {
    title: "Lomi-Lomi Massage",
    desc: "Flowing rhythmic technique for deep relaxation and renewal.",
    tone: "renew",
    durationHint: "60–90 min",
  },
  {
    title: "Shiatsu Massage",
    desc: "Pressure-point therapy to restore balance and reduce fatigue.",
    tone: "restore",
    durationHint: "60 min",
  },
  {
    title: "Ayurvedic Massage",
    desc: "Traditional massage focused on detox, circulation, and holistic calm.",
    tone: "renew",
    durationHint: "60–90 min",
  },
  {
    title: "Back, Head, Neck & Shoulder Massage",
    desc: "Perfect for office tension, headaches, and upper-body tightness.",
    tone: "release",
    durationHint: "30–60 min",
  },
  {
    title: "Reflexology",
    desc: "Foot pressure technique linked to whole-body wellness and relaxation.",
    tone: "restore",
    durationHint: "30–60 min",
  },
  {
    title: "Couple Massage",
    desc: "A shared relaxation experience for partners, friends, or special moments.",
    tone: "renew",
    durationHint: "60–90 min",
  },
  {
    title: "Hot Stone Therapy",
    desc: "Warm stones ease tightness and promote deep comfort.",
    tone: "restore",
    durationHint: "60–90 min",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.05, ease: easeLuxury },
  }),
};

/**
 * SUB-COMPONENT: SERVICE CARD
 */
function ServiceCard({ item, index, active, onClick }: { 
  item: Massage; 
  index: number; 
  active: boolean; 
  onClick: () => void 
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      onClick={onClick}
      className={cn(
        "group cursor-pointer rounded-[2rem] border transition-all duration-500",
        active 
          ? "border-brand bg-brand/[0.03] p-8 shadow-2xl shadow-brand/5" 
          : "border-border bg-card p-6 hover:border-brand/30"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand/60">
            {item.durationHint}
          </span>
          <h3 className="mt-1 text-xl font-medium tracking-tight text-text">
            {item.title}
          </h3>
        </div>
        <div className={cn(
          "h-10 w-10 rounded-full border border-border flex items-center justify-center transition-all duration-300",
          active ? "rotate-45 bg-brand text-white border-brand" : "group-hover:bg-bg"
        )}>
          <span className="text-xl">+</span>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeLuxury }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-base leading-relaxed text-muted">
              {item.desc}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="/contact">
                <Button size="sm" className="rounded-full px-8">Book Session</Button>
              </a>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted/40">
                {item.tone} focus
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/**
 * MAIN PAGE COMPONENT
 */
export default function MassagePage() {
  const [activeId, setActiveId] = useState<string | null>("Swedish Massage");

  return (
    <div className="bg-bg min-h-screen">
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: easeLuxury }}
          src={heroImg}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-bg" />
        
        <Container className="absolute inset-0 flex items-end pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: easeLuxury }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                Vava Signature Treatments
              </span>
              <h1 className="mt-6 text-5xl font-semibold tracking-tighter text-white sm:text-7xl lg:text-8xl leading-[0.95]">
                A calmer body,<br />a clearer mind.
              </h1>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 2. THE SELECTION GRID */}
      <section className="py-24 lg:py-40">
        <Container>
          <div className="grid gap-20 lg:grid-cols-12 lg:items-start">
            
            {/* Left: Sticky Info */}
            <div className="lg:sticky lg:top-32 lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-brand" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand">Selection</p>
              </div>
              <h2 className="mt-6 text-4xl font-medium tracking-tight text-text sm:text-5xl">
                Choose your<br />treatment.
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Browse our treatments calmly. Every session is customized—you'll share your preferences during the quick booking process.
              </p>
              
              <div className="mt-12 hidden lg:block rounded-3xl border border-border bg-card/50 p-8">
                <p className="text-sm font-semibold italic text-text">"The session doesn't start on the table; it starts when you decide to prioritize your recovery."</p>
              </div>
            </div>

            {/* Right: Interactive List */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {massages.map((m, i) => (
                <ServiceCard 
                  key={m.title} 
                  item={m} 
                  index={i} 
                  active={activeId === m.title}
                  onClick={() => setActiveId(activeId === m.title ? null : m.title)}
                />
              ))}
            </div>

          </div>
        </Container>
      </section>

      {/* 3. ATMOSPHERE SECTION */}
      <section className="py-24 bg-card border-y border-border overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-[3rem] border border-border shadow-2xl">
                   <img 
                    src={imgRoom} 
                    className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-1000" 
                    alt="Treatment Room"
                   />
                </div>
             </div>
             <div className="w-full lg:w-1/2">
                <span className="text-brand font-bold text-[10px] uppercase tracking-[0.4em]">The Space</span>
                <h3 className="text-4xl sm:text-5xl font-medium mt-6 tracking-tight">Clean rooms.<br />Quiet minds.</h3>
                <p className="mt-8 text-lg text-muted leading-relaxed max-w-lg">
                  We maintain a strict protocol of silence and presence. Our rooms are prepared with organic oils and high-thread-count linens to ensure your physical comfort is absolute.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a href="/gallery">
                    <Button variant="secondary" className="rounded-full px-8">Explore Atmosphere</Button>
                  </a>
                </div>
             </div>
          </div>
        </Container>
      </section>
    </div>
  );
}