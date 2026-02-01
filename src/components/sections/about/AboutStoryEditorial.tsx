import { motion, useReducedMotion } from "framer-motion";
import Container from "../../layout/Container";
import Button from "../../ui/Button";

import imgWide from "../../../assets/real/building.jpg";
import imgTall from "../../../assets/about/about-3.jpg";
import imgSmall from "../../../assets/real/stairs.jpg";

export default function AboutStoryEditorial() {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.65, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-bg">
      <Container className="py-18 sm:py-20">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-10"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            A bit of history
          </p>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
            From vision to reality
          </h2>
        </motion.div>

        {/* Editorial grid */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left: story text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-6"
          >
            <div className="max-w-xl">
              <p className="text-base sm:text-lg text-muted leading-relaxed">
                Vava Spa was created to offer calm, clean, and professional care
                in Kigali. Our approach is simple: a quiet environment,
                respectful therapists, and treatments that are never rushed.
              </p>

              <div className="mt-6 space-y-4 text-sm text-muted leading-relaxed">
                <p>
                  We focus on the details guests feel immediately: hygiene,
                  atmosphere, and thoughtful service. From the first greeting to
                  the last moment of the session, everything is designed to help
                  you relax deeply.
                </p>
                <p>
                  Over time, we refined our treatments, improved our space, and
                  strengthened our service so each visit feels consistent, calm,
                  and premium.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/contact">
                  <Button size="lg">Book now</Button>
                </a>
                <a href="/gallery">
                  <Button variant="secondary" size="lg">
                    View gallery
                  </Button>
                </a>
              </div>

              {/* Editorial quote */}
              <div className="mt-10 rounded-[22px] border border-border bg-card shadow-soft p-6">
                <p className="text-sm text-muted leading-relaxed">
                  “Luxury is not about being loud. It is about feeling cared for
                  in a calm space that respects your time and comfort.”
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted">
                  Vava Spa philosophy
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: image composition */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-6"
          >
            <div className="grid gap-6">
              {/* Wide image */}
              <div className="overflow-hidden rounded-[32px] border border-border bg-card shadow-soft">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={imgWide}
                    alt="Vava Spa exterior"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Tall + small pairing */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[32px] border border-border bg-card shadow-soft">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={imgTall}
                      alt="Inside the spa"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-soft">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={imgSmall}
                        alt="Entrance details"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Micro trust panel */}
                  <div className="rounded-[28px] border border-border bg-card shadow-soft p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted">
                      What guests feel
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted">
                      <li>• Clean rooms prepared for every session</li>
                      <li>• Quiet atmosphere with a calm flow</li>
                      <li>• Respectful, professional care</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Awards / press row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14"
        >
          <div className="h-px w-full bg-border" />
          <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Trusted & recognized
              </p>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                A calm brand presence is built with consistency. This space is
                real, professional, and designed for guests who value quality.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <PressChip label="Wellness Experience" />
                <PressChip label="Clean & Professional" />
                <PressChip label="Kigali Location" />
                <PressChip label="Guest Satisfaction" />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function PressChip({ label }: { label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-soft px-5 py-4 text-center">
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}
