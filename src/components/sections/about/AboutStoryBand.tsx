import { motion, useReducedMotion } from "framer-motion";
import Container from "../../layout/Container";
import Button from "../../ui/Button";

import approachImg from "../../../assets/services/massage.jpg";

export default function AboutApproachBand() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-bg py-18 sm:py-20">
      <Container>
        <div className="relative">
          {/* Big image frame */}
          <div className="overflow-hidden rounded-[36px] border border-border bg-card shadow-soft">
            <div className="relative aspect-[16/10] sm:aspect-[21/9]">
              <img
                src={approachImg}
                alt="The art of relaxation"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />

              {/* Cinematic overlays */}
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />

              {/* Overlap card */}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="absolute left-6 right-6 bottom-6 sm:left-10 sm:right-auto sm:bottom-10 sm:max-w-md"
              >
                <div className="rounded-[28px] border border-white/15 bg-[#F4EFE6] shadow-soft p-7 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">
                    Massage therapy
                  </p>

                  <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
                    The art of relaxation
                  </h3>

                  <p className="mt-4 text-sm text-muted leading-relaxed">
                    Every session begins with a brief consultation to understand
                    your comfort and preferences. Our therapists work with
                    attention and intention, allowing the treatment to flow
                    naturally so your body reaches a deeper state of calm.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href="/contact">
                      <Button size="lg">Book on WhatsApp</Button>
                    </a>
                    <a href="/#services">
                      <Button variant="secondary" size="lg">
                        Explore services
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom supporting row (quiet trust notes) */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-10 grid gap-6 lg:grid-cols-3"
          >
            <TrustCard
              title="Unhurried sessions"
              text="We focus on comfort and quality care so your body can truly release tension."
            />
            <TrustCard
              title="Clean, quiet rooms"
              text="A calm environment supports relaxation, privacy, and a consistent premium experience."
            />
            <TrustCard
              title="Professional technique"
              text="Therapists work with respectful care, guided by your needs and comfort."
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function TrustCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[28px] border border-border bg-card shadow-soft p-7">
      <p className="text-sm font-semibold tracking-tight">{title}</p>
      <p className="mt-3 text-sm text-muted leading-relaxed">{text}</p>
    </div>
  );
}
