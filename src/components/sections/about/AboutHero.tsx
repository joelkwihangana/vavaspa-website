import { motion, useReducedMotion } from "framer-motion";
import Container from "../../layout/Container";

import heroImg from "../../../assets/about/about-hero.jpg";

export default function AboutHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden">
      {/* Full-bleed image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Vava Spa in Kigali"
          className="h-[72vh] w-full object-cover sm:h-[78vh]"
          loading="lazy"
        />

        {/* Calm cinematic grading */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
      </div>

      {/* Top fade line like editorial sites */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent" />

      <Container className="relative">
        <div className="flex min-h-[72vh] items-end pb-14 sm:min-h-[78vh] sm:pb-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              About us
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              A calm sanctuary in Kigali
            </h1>

            <p className="mt-5 max-w-2xl text-base text-white/75 sm:text-lg leading-relaxed">
              Created for people who want to slow down, breathe, and feel cared
              for. Clean rooms, quiet atmosphere, and professional treatments
              with a welcoming team.
            </p>

            {/* Minimal chips, optional but tasteful */}
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/75 backdrop-blur">
                Clean rooms
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/75 backdrop-blur">
                Quiet atmosphere
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/75 backdrop-blur">
                Professional care
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
