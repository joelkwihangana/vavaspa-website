import { motion, useReducedMotion } from "framer-motion";
import Container from "../../layout/Container";
import Button from "../../ui/Button";

import imgA from "../../../assets/about/about-1.jpg";
import imgB from "../../../assets/about/about-2.jpg";
import imgC from "../../../assets/about/about-3.jpg";

export default function AboutIntro() {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.65, ease: "easeOut" },
    },
  };

  return (
    <section className="section bg-bg">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Collage: mobile = clean stacked, desktop = collage */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-6"
          >
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-12 lg:items-stretch">
              {/* Large image first on mobile (better visual anchor) */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="overflow-hidden rounded-[28px] sm:rounded-[34px] border border-border bg-card shadow-soft">
                  <div className="relative aspect-[16/11] sm:aspect-[4/5] overflow-hidden">
                    <img
                      src={imgC}
                      alt="Vava Spa experience"
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              {/* Two small images: on mobile side-by-side, on desktop stacked */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 sm:gap-6">
                  <CollageCard src={imgA} alt="Care and details" />
                  <CollageCard src={imgB} alt="Calm atmosphere" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-6"
          >
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                About Vava Spa
              </p>

              <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
                A quiet sanctuary designed for real rest
              </h2>

              <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
                We created Vava Spa as a calm space where stress fades and comfort
                comes first. Every detail, from cleanliness to atmosphere, is designed
                to help you fully let go.
              </p>

              {/* Bullets: mobile becomes lighter (less “boxed”) */}
              <div className="mt-8 grid gap-3 sm:gap-4">
                <Bullet
                  title="Clean rooms"
                  text="Prepared carefully for every session so you can relax with confidence."
                />
                <Bullet
                  title="Quiet atmosphere"
                  text="A calm flow, soft lighting, and minimal noise for deeper relaxation."
                />
                <Bullet
                  title="Professional care"
                  text="Treatments guided by your comfort, not the clock."
                />
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href="/contact#booking">
                  <Button size="lg">Book now</Button>
                </a>
                <a href="/#services">
                  <Button variant="secondary" size="lg">
                    Explore services
                  </Button>
                </a>
              </div>

              <p className="mt-4 text-xs text-muted">
                Fast booking via WhatsApp. You can also request availability through the form.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function CollageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group overflow-hidden rounded-[22px] sm:rounded-[28px] border border-border bg-card shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
    </div>
  );
}

function Bullet({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[18px] sm:rounded-[22px] border-none shadow-none bg-transparent sm:border sm:border-border sm:bg-card sm:shadow-soft p-0 sm:p-6">
      <div className="flex items-start gap-4">
        <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg text-sm font-semibold">
          ✓
        </span>
        <div>
          <p className="text-sm font-semibold tracking-tight">{title}</p>
          <p className="mt-2 text-sm text-muted leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}
