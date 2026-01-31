import { motion, useReducedMotion } from "framer-motion";
import Container from "../../layout/Container";

import leftImg from "../../../assets/real/icyapa.jpg";
import rightImg from "../../../assets/real/cleanRooms.jpg";

export default function AboutClosingSplit() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-bg py-18 sm:py-20">
      <Container>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Real place, real calm
          </p>
          <h3 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
            A calm space that feels like home
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
            Simple, clean, and welcoming. Designed for guests who want quiet
            rest and professional care.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <SplitImageCard
            image={leftImg}
            eyebrow="Location"
            title="Easy to find in Kigali"
            subtitle="Kibagabaga · House Number 10"
          />
          <SplitImageCard
            image={rightImg}
            eyebrow="Inside Vava"
            title="Clean rooms. Quiet atmosphere."
            subtitle="A calm flow, welcoming team"
          />
        </div>

        {/* Tiny navigation dots hint, like your reference */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-6 rounded-full bg-brand" />
          <span className="h-2 w-2 rounded-full bg-border" />
        </div>
      </Container>
    </section>
  );
}

function SplitImageCard({
  image,
  eyebrow,
  title,
  subtitle,
}: {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 10 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[36px] border border-border bg-card shadow-soft"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />

        <div className="absolute bottom-7 left-7 right-7">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            {eyebrow}
          </p>
          <h4 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            {title}
          </h4>
          <p className="mt-2 text-sm text-white/75">{subtitle}</p>
        </div>
      </div>
    </motion.article>
  );
}
