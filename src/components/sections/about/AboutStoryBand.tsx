import { motion, useReducedMotion } from "framer-motion";
import Container from "../../layout/Container";
import Button from "../../ui/Button";

import storyImg from "../../../assets/real/building.jpg";

export default function AboutStoryBand() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0">
        <img
          src={storyImg}
          alt="Our story"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/15" />
        <div className="absolute inset-0 bg-brand/12 mix-blend-multiply" />
      </div>

      <Container className="relative">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-white/70">
            Our Story
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Built on calm, care, and consistency
          </h2>

          <div className="mt-5 space-y-4 text-base text-white/75 leading-relaxed">
            <p>
              Since 2020, Vava Spa has been dedicated to creating a calm and
              welcoming space where people truly relax.
            </p>
            <p>
              We focus on cleanliness, comfort, and professional care. From the
              beginning, our goal has been simple: to deliver high-quality spa
              and massage services in an environment where every guest feels
              safe, respected, and at ease.
            </p>
            <p>
              Every visit reflects our commitment to quality, professionalism,
              and warm hospitality.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/contact">
              <Button size="lg">Contact us</Button>
            </a>
            <a href="/gallery">
              <Button variant="secondary" size="lg">
                View gallery
              </Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
