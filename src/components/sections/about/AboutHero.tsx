import { motion, useReducedMotion } from "framer-motion";
import Container from "../../layout/Container";

import heroImg from "../../../assets/about/about-hero.jpg";

export default function AboutHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Vava Spa - About"
          className="h-[56vh] w-full object-cover sm:h-[64vh]"
          loading="lazy"
        />
        {/* Wivana-like dark wash */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
      </div>

      <Container className="relative">
        <div className="flex min-h-[56vh] flex-col items-center justify-center pt-16 text-center sm:min-h-[64vh]">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              About Us
            </h1>

            <div className="mt-5 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.28em] text-white/70">
              <a href="/" className="transition hover:text-white">
                Home
              </a>
              <span className="h-[1px] w-6 bg-white/30" />
              <span className="text-white/85">About Us</span>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-base text-white/75 sm:text-lg leading-relaxed">
              Calm, clean, and professional care in Kigali. A quiet sanctuary built
              for real rest.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
