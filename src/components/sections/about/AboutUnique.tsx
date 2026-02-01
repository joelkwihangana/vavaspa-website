import { motion, useReducedMotion, type Variants } from "framer-motion";
import Container from "../../layout/Container";

import u1 from "../../../assets/feature/feature-1.jpg";
import u2 from "../../../assets/feature/feature-2.jpg";
import u3 from "../../../assets/real/reception.jpg";
import u4 from "../../../assets/real/sign.jpg";

type UniqueItem = {
  title: string;
  description: string;
  image: string;
};

const items: UniqueItem[] = [
  {
    title: "Iconic setting",
    description:
      "A calm space in Kigali designed to help your body slow down and your mind settle.",
    image: u1,
  },
  {
    title: "Relaxation",
    description:
      "Unhurried sessions guided by comfort. We focus on quality care, not the clock.",
    image: u2,
  },
  {
    title: "Professional care",
    description:
      "Clean rooms, respectful therapists, and thoughtful service from start to finish.",
    image: u3,
  },
  {
    title: "Silence & calm",
    description:
      "A quiet atmosphere with minimal noise, soft lighting, and a peaceful flow.",
    image: u4,
  },
];

export default function AboutUnique() {
  const reduce = useReducedMotion();

  const wrap: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.08,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-[#F4EFE6] py-16 sm:py-20">
      <Container>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Our values
          </p>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
            What makes us unique
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
            A calm, clean environment with professional care, designed to help
            you fully reset.
          </p>
        </div>

        <motion.div
          variants={wrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((x) => (
            <motion.article key={x.title} variants={item} className="group">
              <div className="overflow-hidden rounded-[22px] border border-border bg-card shadow-soft">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={x.image}
                    alt={x.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </div>

              <h3 className="mt-5 text-base font-semibold tracking-tight">
                {x.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {x.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
