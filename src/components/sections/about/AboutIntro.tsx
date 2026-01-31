import { motion, useReducedMotion } from "framer-motion";
import Container from "../../layout/Container";

import introImg from "../../../assets/about/about-1.jpg";

export default function AboutIntro() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="py-18 sm:py-20 bg-bg">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-soft">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={introImg}
                  alt="Inside Vava Spa"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.06 }}
            className="lg:col-span-5"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-muted">
              About Vava Spa
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              A quiet sanctuary designed for real rest
            </h2>

            <p className="mt-4 text-base text-muted leading-relaxed">
              Our treatments are not rushed. We take time to understand your
              needs, respect your comfort, and deliver care that leaves your
              body lighter, your head clearer, and your energy renewed.
            </p>

            <div className="mt-7 grid gap-4">
              <InfoCard
                title="Vision"
                text="To be the spa people remember, not just for treatments, but for how they felt afterward."
              />
              <InfoCard
                title="Mission"
                text="To restore body and mind through professional massage, natural spa therapies, and a calm, welcoming environment."
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-soft p-5">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg text-brand">
          ●
        </div>
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p className="mt-1 text-sm text-muted leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}
