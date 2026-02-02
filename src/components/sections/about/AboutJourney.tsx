import { motion, useReducedMotion, type Variants } from "framer-motion";
import Container from "../../layout/Container";

import introImg from "../../../assets/about/about-1.jpg";
import stepImg1 from "../../../assets/feature/icyapa.jpg";
import stepImg2 from "../../../assets/feature/intheroom.jpg";
import benefit1 from "../../../assets/feature/feature-1.jpg";
import benefit2 from "../../../assets/feature/feature-2.jpg";
import benefit3 from "../../../assets/services/waxing.jpg";

export default function AboutJourney() {
  const reduce = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.07 } },
  };

  return (
    <section className="bg-[#F4EFE6]">
      <Container className="section">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-2xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            The experience
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
            A calm flow, from arrival to reset
          </h2>
          <p className="mt-4 text-sm sm:text-lg text-muted leading-relaxed">
            Simple, clean, and unhurried. We begin with listening, then shape
            the session to your comfort.
          </p>
        </motion.div>

        {/* Intro split */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-soft">
              <div className="aspect-[16/12] sm:aspect-[4/5] overflow-hidden">
                <img
                  src={introImg}
                  alt="Relaxation at Vava Spa"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="grid gap-3 sm:grid-cols-3">
              <Pill>Clean rooms</Pill>
              <Pill>Quiet atmosphere</Pill>
              <Pill>Professional care</Pill>
            </div>

            <p className="mt-5 max-w-2xl text-sm sm:text-lg text-muted leading-relaxed">
              A short check in helps us understand what you need today. Then we
              guide you into a session that feels calm, private, and consistent.
            </p>

            {/* Small proof row (no big CTAs) */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <MiniImage image={stepImg1} label="Quiet atmosphere" />
              <MiniImage image={stepImg2} label="Clean rooms" />
            </div>
          </motion.div>
        </div>

        {/* Steps */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          <Step
            fade={fadeUp}
            eyebrow="Step 01"
            title="Arrive and exhale"
            text="We welcome you calmly, confirm preferences, and help you settle in."
          />
          <Step
            fade={fadeUp}
            eyebrow="Step 02"
            title="Release tension"
            text="Comfort first techniques, adapted to your body and boundaries."
          />
          <Step
            fade={fadeUp}
            eyebrow="Step 03"
            title="Leave lighter"
            text="A calm close, so you leave grounded and refreshed."
          />
        </motion.div>

        {/* Benefits */}
        <div className="mt-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              The benefits
            </p>
            <h3 className="mt-3 text-2xl sm:text-4xl font-semibold tracking-tight">
              What guests feel after
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-lg text-muted leading-relaxed">
              A quieter mind. Softer muscles. More space to breathe.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <Benefit
              fade={fadeUp}
              image={benefit1}
              title="Disconnect"
              text="Step away from noise and slow down."
            />
            <Benefit
              fade={fadeUp}
              image={benefit2}
              title="Cultivate silence"
              text="Quiet supports deeper calm."
            />
            <Benefit
              fade={fadeUp}
              image={benefit3}
              title="Return to balance"
              text="Consistency makes relaxation last."
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Pill({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full border border-border bg-bg px-4 py-2 text-xs text-muted">
      {children}
    </span>
  );
}

function MiniImage({ image, label }: { image: string; label: string }) {
  return (
    <div className="group relative overflow-hidden rounded-[22px] border border-border bg-card shadow-soft">
      <div className="aspect-[16/11] overflow-hidden">
        <img
          src={image}
          alt={label}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      <div className="absolute bottom-4 left-4">
        <p className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/85 backdrop-blur">
          {label}
        </p>
      </div>
    </div>
  );
}

function Step({
  eyebrow,
  title,
  text,
  fade,
}: {
  eyebrow: string;
  title: string;
  text: string;
  fade: Variants;
}) {
  return (
    <motion.article
      variants={fade}
      className="rounded-[24px] border border-border bg-card shadow-soft p-7"
    >
      <p className="text-xs uppercase tracking-[0.28em] text-muted">{eyebrow}</p>
      <h4 className="mt-3 text-xl font-semibold tracking-tight">{title}</h4>
      <p className="mt-3 text-sm text-muted leading-relaxed">{text}</p>
    </motion.article>
  );
}

function Benefit({
  image,
  title,
  text,
  fade,
}: {
  image: string;
  title: string;
  text: string;
  fade: Variants;
}) {
  return (
    <motion.article
      variants={fade}
      className="overflow-hidden rounded-[24px] border border-border bg-card shadow-soft"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <h4 className="text-lg font-semibold tracking-tight">{title}</h4>
        <p className="mt-3 text-sm text-muted leading-relaxed">{text}</p>
      </div>
    </motion.article>
  );
}
