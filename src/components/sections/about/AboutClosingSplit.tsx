import { motion, useReducedMotion, type Variants } from "framer-motion";
import Container from "../../layout/Container";
import Button from "../../ui/Button";
import { site, waLink } from "../../../data/site";

import leftImg from "../../../assets/real/icyapa.webp";

const easeLuxury: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function AboutClosingSplit() {
  const reduce = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.7, ease: easeLuxury },
    },
  };

  const primaryPhone = site.whatsappPrimary || "250788440979";
  const whatsappHref = waLink(primaryPhone, site.whatsappMessage);

  return (
    <section className="relative bg-bg">
      {/* Chapter divider (quiet, intentional) */}
      <div className="h-px w-full bg-border/70" />

      <div className="relative overflow-hidden">
        {/* Atmospheric background that makes it feel like a “footer chapter”, not stacked cards */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.95]"
        >
          <div className="absolute -top-24 left-[-10%] h-[520px] w-[520px] rounded-full bg-[rgba(16,90,66,0.14)] blur-[110px]" />
          <div className="absolute top-20 right-[-14%] h-[620px] w-[620px] rounded-full bg-[rgba(255,255,255,0.10)] blur-[120px]" />
          <div className="absolute inset-0 [background:radial-gradient(1200px_520px_at_50%_0%,rgba(255,255,255,0.10),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.45] [background:linear-gradient(to_bottom,rgba(0,0,0,0.02),transparent_30%,rgba(0,0,0,0.06))]" />
        </div>

        <Container className="section relative">
          {/* One composed layout: hero image + inset image + simple content, no card stacking */}
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Visual composition */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-7"
            >
              <div className="relative">
                {/* Main image (editorial) */}
                <div className="relative overflow-hidden rounded-[34px] border border-border bg-card shadow-soft">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={leftImg}
                      alt="Vava Spa location in Kigali"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Cinematic but light */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/18 to-transparent" />
                  <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />

                  {/* Caption */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                      Location
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
                      Easy to find in Kigali
                    </p>
                    <p className="mt-1.5 text-sm text-white/75">
                      Kibagabaga · House Number 10
                    </p>
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
              className="lg:col-span-5"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Real place, real calm
              </p>

              <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
                A calm space that feels like home
              </h2>

              <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
                Simple, clean, and welcoming. Designed for guests who want quiet
                rest and professional care.
              </p>

              {/* Minimal proof points (no card) */}
              <div className="mt-8 space-y-4">
                <ProofLine
                  title="Prepared rooms"
                  desc="Fresh setup for every session, with comfort-first details."
                />
                <ProofLine
                  title="Quiet flow"
                  desc="Minimal noise, soft atmosphere, and unhurried pacing."
                />
                <ProofLine
                  title="Professional care"
                  desc="Respectful therapists guided by your comfort and privacy."
                />
              </div>

              {/* Single primary CTA, secondary is a text link */}
              <div className="hidden mt-10 sm:flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  <Button size="lg">Book on WhatsApp</Button>
                </a>

                <a
                  href="/contact#quick-booking"
                  className="text-sm text-muted underline underline-offset-4 transition hover:text-text"
                >
                  Prefer Quick Booking first?
                </a>
              </div>

              <p className="mt-3 text-xs text-muted">
                Quick Booking helps us prepare your session before WhatsApp.
              </p>
            </motion.div>
          </div>

          {/* Quiet bottom spacing guard for the mobile bar */}
          <div className="safe-bottom" />
        </Container>
      </div>
    </section>
  );
}

function ProofLine({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-3">
      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />
      <div>
        <p className="text-sm font-semibold tracking-tight">{title}</p>
        <p className="mt-1 text-sm text-muted leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
