import { motion, useReducedMotion } from "framer-motion";
import Container from "../../layout/Container";

import heroImg from "../../../assets/services/massage.jpg";

export default function ServicesHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Vava Spa Services"
          className="h-[65vh] w-full object-cover sm:h-[72vh]"
          loading="lazy"
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
      </div>

      <Container className="relative">
        <div className="flex min-h-[65vh] items-end pb-14 sm:min-h-[72vh] sm:pb-18">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              Our services
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Treatments designed for real rest
            </h1>

            <p className="mt-5 max-w-2xl text-base text-white/75 sm:text-lg leading-relaxed">
              Explore our massage treatments and spa services, delivered with
              cleanliness, quiet, and personalized care in a calm environment.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
