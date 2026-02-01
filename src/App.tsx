import { motion, useReducedMotion } from "framer-motion";


import heroImg from "./assets/services/massage.jpg";
import Container from "./components/layout/Container";

export default function ServicesHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Massage treatment at Vava Spa"
          className="h-[68vh] w-full object-cover sm:h-[78vh]"
          loading="lazy"
        />

        {/* Stronger cinematic grading */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
      </div>

      <Container className="relative">
        <div className="flex min-h-[68vh] items-end pb-16 sm:min-h-[78vh] sm:pb-20">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/75">
              Our services
            </p>

            {/* Headline */}
            <h1 className="mt-4 text-[2.25rem] font-semibold tracking-tight text-white leading-[1.15] sm:text-6xl">
              Treatments designed for real rest
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-2xl text-[15px] text-white/80 sm:text-lg leading-relaxed">
              Explore our massage treatments and spa services, delivered with
              cleanliness, quiet, and personalized care in a calm, welcoming
              environment.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
