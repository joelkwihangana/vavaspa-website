import { motion, useReducedMotion } from "framer-motion";
import Container from "../../layout/Container";
import Button from "../../ui/Button";

import heroImg from "../../../assets/about/about-4.jpg";
import introImg from "../../../assets/about/about-1.jpg";
import stepImg1 from "../../../assets/feature/icyapa.jpg";
import stepImg2 from "../../../assets/feature/intheroom.jpg";
import tileBody from "../../../assets/services/massage.jpg";
import tileMind from "../../../assets/services/spa.jpg";
import benefit1 from "../../../assets/feature/feature-1.jpg";
import benefit2 from "../../../assets/feature/feature-2.jpg";
import benefit3 from "../../../assets/services/waxing.jpg";

export default function AboutJourney() {
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
    <section className="bg-[#F4EFE6]">
      {/* Banner: reduce height on mobile */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Your journey"
            className="h-[36vh] w-full object-cover sm:h-[50vh]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
        </div>

        <Container className="relative">
          <div className="flex min-h-[36vh] items-end pb-10 sm:min-h-[50vh] sm:pb-14">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                Your journey
              </p>
              <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-white">
                A journey towards relaxation
              </h2>
              <p className="mt-3 text-sm sm:text-lg text-white/75 leading-relaxed">
                Calm sessions designed to help you slow down, release tension, and reset.
              </p>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Intro split */}
      <Container className="section">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-[28px] sm:rounded-[32px] border border-border bg-card shadow-soft">
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
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Step into calm
            </p>
            <h3 className="mt-3 text-2xl sm:text-4xl font-semibold tracking-tight">
              Designed for body, mind, and comfort
            </h3>
            <p className="mt-4 text-sm sm:text-lg text-muted leading-relaxed max-w-2xl">
              We start with a short consultation to understand your needs. Then we guide
              you into a session that flows naturally, in a clean and quiet space.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/contact#booking">
                <Button size="lg">Book now</Button>
              </a>
              <a href="/#services">
                <Button variant="secondary" size="lg">
                  Explore services
                </Button>
              </a>
            </div>

            {/* On mobile: simple row, not boxed cards */}
            <div className="mt-8 flex flex-wrap gap-2 text-xs text-muted">
              <span className="rounded-full border border-border bg-bg px-4 py-2">Clean rooms</span>
              <span className="rounded-full border border-border bg-bg px-4 py-2">Quiet atmosphere</span>
              <span className="rounded-full border border-border bg-bg px-4 py-2">Professional care</span>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Steps + images */}
      <Container className="section-tight">
        <div className="grid gap-10 lg:grid-cols-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7"
          >
            <JourneyStep
              eyebrow="Your session"
              title="Arrive and exhale"
              text="We welcome you calmly, confirm preferences, and help you settle in."
            />
            <JourneyStep
              eyebrow="Your care"
              title="Release tension"
              text="Professional techniques tailored to your comfort. The goal is deep rest."
            />
            <JourneyStep
              eyebrow="Your reset"
              title="Leave feeling lighter"
              text="You leave with a calmer mind, relaxed muscles, and renewed energy."
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="grid gap-6">
              <ImageCard image={stepImg1} label="Quiet atmosphere" />
              <ImageCard image={stepImg2} label="Clean rooms" />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Body / Mind */}
      <Container className="section-tight">
        <div className="grid gap-6 lg:grid-cols-2">
          <BigTile
            image={tileBody}
            tag="Body"
            title="Support recovery and comfort"
            text="Relieve tension and support healthy circulation."
          />
          <BigTile
            image={tileMind}
            tag="Mind"
            title="Support calm and clarity"
            text="Reduce stress and restore balance."
          />
        </div>
      </Container>

      {/* Benefits */}
      <Container className="section">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            The benefits
          </p>
          <h3 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
            Maximize the benefits
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-lg text-muted leading-relaxed">
            Give your body and mind time to reset.
          </p>
        </div>

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <BenefitCard image={benefit1} title="Disconnect" text="Step away from noise and slow down." fade={fadeUp} />
          <BenefitCard image={benefit2} title="Cultivate silence" text="Quiet supports deeper calm." fade={fadeUp} />
          <BenefitCard image={benefit3} title="Return to balance" text="Consistency makes relaxation last." fade={fadeUp} />
        </motion.div>
      </Container>
    </section>
  );
}

function JourneyStep({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[18px] sm:rounded-[28px] border-none shadow-none bg-transparent sm:border sm:border-border sm:bg-card sm:shadow-soft p-0 sm:p-8 mb-6 last:mb-0">
      <p className="text-xs uppercase tracking-[0.3em] text-muted">{eyebrow}</p>
      <h4 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight">{title}</h4>
      <p className="mt-2 text-sm text-muted leading-relaxed">{text}</p>
    </div>
  );
}

function ImageCard({ image, label }: { image: string; label: string }) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-border bg-card shadow-soft">
      <div className="aspect-[16/11] sm:aspect-[16/12] overflow-hidden">
        <img
          src={image}
          alt={label}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      <div className="absolute bottom-5 left-5">
        <p className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur">
          {label}
        </p>
      </div>
    </div>
  );
}

function BigTile({
  image,
  tag,
  title,
  text,
}: {
  image: string;
  tag: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-border bg-card shadow-soft">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-xs uppercase tracking-[0.3em] text-white/70">{tag}</p>
        <h4 className="mt-2 text-2xl font-semibold tracking-tight text-white">
          {title}
        </h4>
        <p className="mt-2 text-sm text-white/75 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function BenefitCard({
  image,
  title,
  text,
  fade,
}: {
  image: string;
  title: string;
  text: string;
  fade: any;
}) {
  return (
    <motion.article
      variants={fade}
      className="overflow-hidden rounded-[24px] sm:rounded-[28px] border border-border bg-card shadow-soft"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="p-6 sm:p-7">
        <h4 className="text-lg font-semibold tracking-tight">{title}</h4>
        <p className="mt-3 text-sm text-muted leading-relaxed">{text}</p>
      </div>
    </motion.article>
  );
}
