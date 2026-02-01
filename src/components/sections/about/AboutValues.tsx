import { motion, useReducedMotion } from "framer-motion";
import Container from "../../layout/Container";

const values = [
  {
    title: "Guest Experience",
    text: "From arrival to departure, you are welcomed with warmth and care. Every session flows naturally, so you feel fully relaxed and satisfied.",
  },
  {
    title: "Our Environment",
    text: "Quiet, clean, and thoughtfully designed. Our space supports deep relaxation, peace of mind, and total comfort.",
  },
  {
    title: "Our Promise",
    text: "We deliver high-quality experiences that meet international standards, with calm professionalism and consistent care.",
  },
];

export default function AboutValues() {
  const reduce = useReducedMotion();

  return (
    <section className="py-18 sm:py-20 bg-[#F4EFE6]">
      <Container>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-muted">
            What we value
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            We value our clients
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
            Small details matter. Comfort, hygiene, and a calm environment shape
            the experience.
          </p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid gap-6 lg:grid-cols-3"
        >
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-[28px] border border-border bg-card shadow-soft p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-bg text-brand">
                ✓
              </div>
              <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {v.text}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
