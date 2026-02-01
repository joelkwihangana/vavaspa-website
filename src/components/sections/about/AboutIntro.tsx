import { motion, useReducedMotion, type Variants } from "framer-motion";
import Container from "../../layout/Container";
import Button from "../../ui/Button";

import imgA from "../../../assets/about/about-1.jpg";
import imgB from "../../../assets/about/about-2.jpg";
import imgC from "../../../assets/about/about-3.jpg";

export default function AboutIntro() {
  const reduce = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section bg-bg">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Image collage */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-6"
          >
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-12 lg:items-stretch">
              {/* Main image */}
              <div className="order-1 lg:order-2 lg:col-span-7">
                <div className="overflow-hidden rounded-[28px] sm:rounded-[34px] border border-border bg-card">
                  <div className="relative aspect-[16/11] sm:aspect-[4/5]">
                    <img
                      src={imgC}
                      alt="Vava Spa experience"
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Supporting images */}
              <div className="order-2 lg:order-1 lg:col-span-5">
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
                We created Vava Spa as a calm space where stress fades and
                comfort comes first. Every detail is intentional, from
                cleanliness to atmosphere.
              </p>

              <div className="mt-8 grid gap-4">
                <Bullet
                  title="Clean rooms"
                  text="Prepared carefully for every session so you can relax with confidence."
                />
                <Bullet
                  title="Quiet atmosphere"
                  text="Soft lighting, minimal noise, and a calm flow throughout."
                />
                <Bullet
                  title="Professional care"
                  text="Treatments guided by your comfort, not the clock."
                />
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button as="a" href="/contact" size="lg">
                  Book now
                </Button>
                <Button as="a" href="/#services" variant="secondary" size="lg">
                  Explore services
                </Button>
              </div>

              <p className="mt-4 text-xs text-muted">
                Fast booking via WhatsApp or request availability through the
                form.
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
    <div className="overflow-hidden rounded-[22px] sm:rounded-[28px] border border-border bg-card">
      <div className="relative aspect-[4/3]">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function Bullet({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg text-sm font-semibold">
        ✓
      </span>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-2 text-sm text-muted leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
