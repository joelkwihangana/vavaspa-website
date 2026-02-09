import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import { cn } from "../lib/cn";

// Assets
import heroImg from "../assets/spa/bb.jpg";
import waxImg from "../assets/services/waxing.webp";
import detailImg from "../assets/spa/ee.jpg";


const transition = { 
  duration: 1.2, 
  ease: [0.19, 1, 0.22, 1] as const 
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition }
};

const services = [
  {
    title: "Moroccan Bath",
    tag: "Purify Ritual",
    desc: "A deep cleansing ritual rooted in tradition. This treatment uses black soap and steam to refresh the skin and restore a profound sense of physical comfort.",
    duration: "60–90 min",
    image: heroImg,
  },
  {
    title: "Facial Treatment",
    tag: "Glow Ritual",
    desc: "A meticulous process to cleanse, exfoliate, and hydrate. We use premium organic extracts to ensure your skin leaves with a visible, healthy glow.",
    duration: "45–75 min",
    image: detailImg,
  },
  {
    title: "Body Scrub",
    tag: "Reset Ritual",
    desc: "Full-body exfoliation that removes dullness and tension alike. Designed to leave your skin exceptionally smooth and your mind completely reset.",
    duration: "45–60 min",
    image: heroImg,
  },
  {
    title: "Waxing",
    tag: "Smooth Ritual",
    desc: "Clean, gentle, and professional hair removal. We prioritize your privacy and use high-quality waxes for a discreet and efficient experience.",
    duration: "15–45 min",
    image: waxImg,
  },
];

export default function SpaPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-bg selection:bg-brand/10">
      {/* 1. HERO: CLEANED & HIGH CONTRAST */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-zinc-950">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.85 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] as const }}
          src={heroImg}
          className="h-full w-full object-cover"
        />
        
        {/* SINGLE CLEAN OVERLAY: No "smoke", just bottom-weighted shadow for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        
        <Container className="absolute inset-0 flex items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/50">The Sanctuary</span>
            <h1 className="mt-6 text-6xl font-bold tracking-tighter text-white sm:text-8xl leading-[0.85]">
              Rituals for glow,<br />and renewal.
            </h1>
          </motion.div>
        </Container>
      </section>

      {/* 2. EDITORIAL TREATMENT GRID: Staggered entrance */}
      <section className="py-32 lg:py-56">
        <Container className="flex flex-col gap-40 lg:gap-64">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={containerVariants}
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className={cn(
                "flex flex-col items-center gap-12 lg:flex-row lg:gap-24",
                i % 2 !== 0 && "lg:flex-row-reverse"
              )}
            >
              {/* Image with subtle reveal */}
              <div className="w-full lg:w-1/2">
                <motion.div 
                  variants={itemVariants} 
                  className="overflow-hidden rounded-[2.5rem] bg-zinc-100 shadow-xl shadow-black/5"
                >
                  <img src={s.image} alt={s.title} className="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] h-full w-full object-cover" />
                </motion.div>
              </div>

              {/* Text with staggered entrance */}
              <div className="w-full lg:w-1/2">
                <motion.div variants={itemVariants} className="max-w-lg lg:mx-auto">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-brand/30" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand">{s.tag}</span>
                  </div>
                  
                  <h2 className="mt-6 text-4xl font-medium tracking-tight text-text sm:text-5xl">{s.title}</h2>
                  <p className="mt-8 text-lg leading-relaxed text-muted">{s.desc}</p>
                  
                  <div className="mt-10 flex items-center gap-10">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted/40">Duration</span>
                      <span className="text-sm font-semibold">{s.duration}</span>
                    </div>
                    <Button variant="secondary" className="rounded-full px-10 border-border/50 hover:bg-brand hover:text-white transition-all">
                      Book Session
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </Container>
      </section>

      {/* 3. SANCTUARY CALLOUT: Stripe-inspired Glassmorphism */}
      <section className="pb-32 lg:pb-56">
        <Container>
          <div className="relative">
            <div className="ml-auto w-full lg:w-10/12 overflow-hidden rounded-[3rem] shadow-2xl">
                <img src={heroImg} className="h-[60vh] w-full object-cover" alt="The Sanctuary" />
            </div>

            {/* Floating Glass Card: High-end look without "smoke" */}
            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] as const }}
              className="mt-[-80px] lg:mt-0 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 w-full max-w-xl 
                         bg-white/90 backdrop-blur-xl p-10 lg:p-16 rounded-[2.5rem] 
                         border border-white shadow-[0_30px_60px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-6 bg-brand/40" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand">The Space</span>
              </div>
              <h3 className="text-4xl font-medium tracking-tight text-text lg:text-5xl">
                A calm sanctuary that feels like home.
              </h3>
              <p className="mt-8 text-lg text-muted leading-relaxed">
                Cleanliness is our foundation. From high-thread-count linens to the subtle scent of organic oils, 
                every detail is engineered to restore your peace.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}