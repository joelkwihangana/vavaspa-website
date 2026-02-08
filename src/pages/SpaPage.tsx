import { motion, useReducedMotion } from "framer-motion";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

import heroImg from "../assets/services/spa.webp";
import waxImg from "../assets/services/waxing.webp";
import detailImg from "../assets/about/about-3.webp";

type RitualTone = "Glow" | "Purify" | "Smooth" | "Reset";

type SpaService = {
  title: string;
  desc: string;
  tone: RitualTone;
  durationHint: string;
  image: string;
};

const easeLuxury: [number, number, number, number] = [0.16, 1, 0.3, 1];

const services: SpaService[] = [
  {
    title: "Facial Treatment",
    desc: "Cleanse, exfoliate, and hydrate for a fresh, healthy glow.",
    tone: "Glow",
    durationHint: "45–75 min",
    image: detailImg,
  },
  {
    title: "Body Scrub",
    desc: "Full-body exfoliation that leaves your skin smooth and renewed.",
    tone: "Reset",
    durationHint: "45–60 min",
    image: heroImg,
  },
  {
    title: "Moroccan Bath",
    desc: "Deep cleansing ritual that refreshes skin and restores comfort.",
    tone: "Purify",
    durationHint: "60–90 min",
    image: heroImg,
  },
  {
    title: "Waxing",
    desc: "Clean, gentle, and professional hair removal with discreet care.",
    tone: "Smooth",
    durationHint: "15–45 min",
    image: waxImg,
  },
];

function toneStyles(tone: RitualTone) {
  switch (tone) {
    case "Glow":
      return "bg-[rgba(16,90,66,0.10)] text-text ring-1 ring-[rgba(16,90,66,0.22)]";
    case "Purify":
      return "bg-[rgba(255,255,255,0.55)] text-text ring-1 ring-border";
    case "Smooth":
      return "bg-[rgba(16,90,66,0.07)] text-text ring-1 ring-[rgba(16,90,66,0.18)]";
    default:
      return "bg-[rgba(255,255,255,0.35)] text-text ring-1 ring-border";
  }
}

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p
      className="text-xs uppercase trackin
g-[0.3em] text-muted"
    >
      {children}
    </p>
  );
}

function ServiceCard({ s, index }: { s: SpaService; index: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 10 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: reduce ? 0 : 0.65,
        delay: Math.min(index * 0.04, 0.2),
        ease: easeLuxury,
      }}
      className={[
        "group relative overflow-hidden rounded-[22px] border border-border bg-card",
        "transition-transform duration-300 will-change-transform",
        "hover:-translate-y-[2px]",
      ].join(" ")}
    >
      {/* Image header */}
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={s.image}
          alt={s.title}
          className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/12 to-transparent" />
        <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>

          <div className="shrink-0 text-right">
            <span
              className={[
                "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium",
                toneStyles(s.tone),
              ].join(" ")}
            >
              {s.tone}
            </span>
            <p className="mt-2 text-[11px] text-muted">{s.durationHint}</p>
          </div>
        </div>

        <p className="mt-3 text-sm text-muted leading-relaxed">{s.desc}</p>

        {/* Desktop-only micro action (kept subtle, not spammy) */}
        <div className="mt-5 hidden sm:flex items-center justify-between">
          <p className="text-[12px] text-muted">
            Choose it in Quick Booking on Contact.
          </p>
          <span className="text-[12px] text-muted group-hover:text-text transition-colors">
            Calm, clean, discreet
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function SpaPage() {
  const reduce = useReducedMotion();

  return (
    <div className="bg-bg text-text">
      <main>
        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="Spa services at Vava Spa"
              className="h-[62vh] w-full object-cover sm:h-[70vh]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
          </div>

          <Container className="relative">
            <div className="flex min-h-[62vh] items-end pb-12 sm:min-h-[70vh] sm:pb-14">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: reduce ? 0 : 0.7, ease: easeLuxury }}
                className="max-w-3xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  Spa Services
                </p>

                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl leading-[1.05]">
                  Rituals for glow, comfort, and renewal
                </h1>

                <p className="mt-5 max-w-2xl text-base text-white/75 sm:text-lg leading-relaxed">
                  Cleanliness, comfort, and quiet care. Choose your treatment,
                  tell us your preferences in Quick Booking, and we confirm the
                  best time.
                </p>

                {/* Desktop-only CTA (mobile uses fixed bar) */}
                <div className="mt-8 hidden sm:flex flex-wrap gap-3">
                  <a href="/contact#quick-booking">
                    <Button size="lg">Start Quick Booking</Button>
                  </a>
                  <a href="/gallery">
                    <Button variant="secondary" size="lg">
                      View gallery
                    </Button>
                  </a>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/75 backdrop-blur">
                    Clean rooms
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/75 backdrop-blur">
                    Discreet care
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/75 backdrop-blur">
                    Calm atmosphere
                  </span>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* HOW IT WORKS */}
        <section className="section-tight">
          <Container>
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <SectionEyebrow>How it works</SectionEyebrow>
                <h2 className="mt-3 text-2xl sm:text-4xl font-semibold tracking-tight">
                  Simple, calm, and confirmed fast
                </h2>
                <p className="mt-4 text-sm sm:text-lg text-muted leading-relaxed">
                  You do not need to guess. Tell us what you want, add your
                  preferred time, and we confirm availability.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[20px] border border-border bg-card p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted">
                      Step 01
                    </p>
                    <p className="mt-2 text-sm font-semibold tracking-tight">
                      Pick a treatment
                    </p>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      Choose what fits your intention today.
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-border bg-card p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted">
                      Step 02
                    </p>
                    <p className="mt-2 text-sm font-semibold tracking-tight">
                      Add preferences
                    </p>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      Comfort notes, timing, and any sensitivities.
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-border bg-card p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted">
                      Step 03
                    </p>
                    <p className="mt-2 text-sm font-semibold tracking-tight">
                      We confirm
                    </p>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      You get a clear time confirmation quickly.
                    </p>
                  </div>
                </div>

                <div className="mt-5 hidden sm:flex">
                  <a href="/contact#quick-booking">
                    <Button size="lg">Start Quick Booking</Button>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SERVICES GRID */}
        <section className="section">
          <Container>
            <div className="flex items-end justify-between gap-6">
              <div className="max-w-2xl">
                <SectionEyebrow>Treatment library</SectionEyebrow>
                <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
                  Spa services
                </h2>
                <p className="mt-4 text-sm sm:text-lg text-muted leading-relaxed">
                  Designed for comfort, cleanliness, and quiet confidence.
                </p>
              </div>

              {/* Desktop-only secondary action */}
              <div className="hidden sm:block">
                <a href="/contact#quick-booking">
                  <Button variant="secondary" size="lg">
                    Request availability
                  </Button>
                </a>
              </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => (
                <ServiceCard key={s.title} s={s} index={i} />
              ))}
            </div>

            {/* Calm note */}
            <div className="mt-10 rounded-[22px] border border-border bg-card p-6 sm:p-7">
              <p className="text-sm font-semibold tracking-tight">
                A note on comfort and discretion
              </p>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If you have preferences, sensitive areas, or a specific timing
                request, add it in Quick Booking. It helps us prepare a calm,
                respectful session.
              </p>
            </div>
          </Container>
        </section>
      </main>

    </div>
  );
}
