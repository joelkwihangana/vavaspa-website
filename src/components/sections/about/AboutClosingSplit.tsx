import { motion, useReducedMotion, type Variants } from "framer-motion";
import Container from "../../layout/Container";

import leftImg from "../../../assets/real/icyapa.jpg";
import rightImg from "../../../assets/real/cleanRooms.jpg";

export default function AboutClosingSplit() {
  const reduce = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="bg-bg">
      <Container className="section">
        {/* Editorial closing header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            The Vava promise
          </p>
          <h3 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
            Quiet care, done properly
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-lg text-muted leading-relaxed">
            A real place in Kigali built for comfort, privacy, and clean,
            professional treatments.
          </p>
        </motion.div>

        {/* Photo spread (feels premium, not “two cards”) */}
        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7"
          >
            <PhotoPanel
              image={leftImg}
              eyebrow="Location"
              title="Easy to reach, calm inside"
              subtitle="Kibagabaga · House Number 10"
              tall
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="grid h-full gap-6">
              <PhotoPanel
                image={rightImg}
                eyebrow="Inside Vava"
                title="Clean rooms. Quiet atmosphere."
                subtitle="Prepared carefully for every session"
              />

              {/* Micro-proof block */}
              <div className="rounded-[28px] border border-border bg-card shadow-soft p-7 sm:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-muted">
                  What guests notice
                </p>

                <ul className="mt-5 space-y-3 text-sm text-muted">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>Respectful therapists and comfort-first pacing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand/70" />
                    <span>Clean setup and a calm flow throughout the visit.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand/50" />
                    <span>Simple booking, quick confirmation, no noise.</span>
                  </li>
                </ul>

                {/* Soft “next” links, not CTA buttons */}
                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
                  <a
                    href="/services"
                    className="text-sm font-medium text-text underline decoration-border underline-offset-[6px] hover:decoration-muted"
                  >
                    Explore services
                  </a>

                  <a
                    href="/contact#quick-booking"
                    className="text-sm font-medium text-text underline decoration-border underline-offset-[6px] hover:decoration-muted"
                  >
                    Open Quick Booking
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quiet final line */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted"
        >
          Designed to feel calm from the first scroll to the final confirmation.
        </motion.p>
      </Container>
    </section>
  );
}

function PhotoPanel({
  image,
  eyebrow,
  title,
  subtitle,
  tall,
}: {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  tall?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 10 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: reduce ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-[32px] border border-border bg-card shadow-soft"
    >
      <div
        className={[
          "relative overflow-hidden",
          tall ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[16/11]",
        ].join(" ")}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/18 to-transparent" />
        <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />

        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            {eyebrow}
          </p>
          <h4 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            {title}
          </h4>
          <p className="mt-2 text-sm text-white/75">{subtitle}</p>
        </div>
      </div>
    </motion.article>
  );
}
