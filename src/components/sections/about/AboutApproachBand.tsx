import { motion, useReducedMotion } from "framer-motion";
import Container from "../../layout/Container";
import Button from "../../ui/Button";

import approachImg from "../../../assets/about/about-3.jpg";

export default function AboutApproachBand() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0">
        <img
          src={approachImg}
          alt="Our treatment approach"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-black/15" />
        <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
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
            Our approach
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Treatments guided by comfort, not the clock
          </h2>

          <p className="mt-5 text-base text-white/75 leading-relaxed">
            Every session begins with a brief consultation to understand your
            comfort and preferences. Our therapists work with attention and
            intention, so the treatment flows naturally and you reach a deeper
            state of relaxation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/contact">
              <Button size="lg">Book now</Button>
            </a>
            <a href="/#services">
              <Button variant="secondary" size="lg">
                Explore services
              </Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
