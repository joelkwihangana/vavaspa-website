import { useMemo } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

import heroImg from "../assets/services/massage.jpg";
import imgQuiet from "../assets/feature/icyapa.jpg";
import imgRoom from "../assets/feature/intheroom.jpg";

type Tone = "restore" | "release" | "renew";

type Massage = {
  title: string;
  desc: string;
  tone: Tone;
  durationHint: string;
};

const easeLuxury: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: easeLuxury },
  }),
};

const massages: Massage[] = [
  {
    title: "Swedish Massage",
    desc: "Gentle full-body relaxation to calm the nervous system and ease stress.",
    tone: "restore",
    durationHint: "60–90 min",
  },
  {
    title: "Deep Tissue Massage",
    desc: "Targets deeper muscle layers to release tension and soreness.",
    tone: "release",
    durationHint: "60–90 min",
  },
  {
    title: "Thai Massage",
    desc: "Stretch-based therapy that improves flexibility and alignment.",
    tone: "renew",
    durationHint: "60–90 min",
  },
  {
    title: "Lomi-Lomi Massage",
    desc: "Flowing rhythmic technique for deep relaxation and renewal.",
    tone: "renew",
    durationHint: "60–90 min",
  },
  {
    title: "Shiatsu Massage",
    desc: "Pressure-point therapy to restore balance and reduce fatigue.",
    tone: "restore",
    durationHint: "60 min",
  },
  {
    title: "Ayurvedic Massage",
    desc: "Traditional massage focused on detox, circulation, and holistic calm.",
    tone: "renew",
    durationHint: "60–90 min",
  },
  {
    title: "Back, Head, Neck & Shoulder Massage",
    desc: "Perfect for office tension, headaches, and upper-body tightness.",
    tone: "release",
    durationHint: "30–60 min",
  },
  {
    title: "Reflexology",
    desc: "Foot pressure technique linked to whole-body wellness and relaxation.",
    tone: "restore",
    durationHint: "30–60 min",
  },
  {
    title: "Couple Massage",
    desc: "A shared relaxation experience for partners, friends, or special moments.",
    tone: "renew",
    durationHint: "60–90 min",
  },
  {
    title: "Hot Stone Therapy",
    desc: "Warm stones ease tightness and promote deep comfort.",
    tone: "restore",
    durationHint: "60–90 min",
  },
];

function toneLabel(tone: Tone) {
  if (tone === "restore") return "Restore";
  if (tone === "release") return "Release";
  return "Renew";
}

function toneChip(tone: Tone) {
  if (tone === "restore") return "bg-[rgba(16,90,66,0.12)] text-text";
  if (tone === "release") return "bg-[rgba(16,24,20,0.06)] text-text";
  return "bg-[rgba(16,90,66,0.08)] text-text";
}

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs uppercase tracking-[0.3em] text-muted">{children}</p>
  );
}

function ServiceCard({ item, index }: { item: Massage; index: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      custom={reduce ? 0 : Math.min(index * 0.035, 0.2)}
      className="rounded-[22px] border border-border bg-card p-6 sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-[15px] sm:text-base font-semibold tracking-tight">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
        </div>

        <div className="shrink-0 text-right">
          <span
            className={[
              "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium",
              "border border-border",
              toneChip(item.tone),
            ].join(" ")}
          >
            {toneLabel(item.tone)}
          </span>
          <p className="mt-2 text-[11px] text-muted">{item.durationHint}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-[12px] text-muted/90">
          Add preferences in Quick Booking.
        </p>
        <span className="text-[12px] text-muted">
          Calm, tailored, respectful
        </span>
      </div>
    </motion.article>
  );
}

function ImageTile({
  src,
  label,
  index,
}: {
  src: string;
  label: string;
  index: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 10 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: reduce ? 0 : 0.6,
        delay: Math.min(index * 0.05, 0.15),
        ease: easeLuxury,
      }}
      className="group relative overflow-hidden rounded-[26px] border border-border bg-card"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={src}
          alt={label}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur">
            {label}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function MassagePage() {
  const grouped = useMemo(() => {
    const signature = massages.filter((m) =>
      [
        "Swedish Massage",
        "Deep Tissue Massage",
        "Hot Stone Therapy",
        "Couple Massage",
      ].includes(m.title),
    );
    const targeted = massages.filter((m) =>
      [
        "Back, Head, Neck & Shoulder Massage",
        "Reflexology",
        "Shiatsu Massage",
      ].includes(m.title),
    );
    const rituals = massages.filter((m) =>
      ["Thai Massage", "Lomi-Lomi Massage", "Ayurvedic Massage"].includes(
        m.title,
      ),
    );

    const picked = new Set(
      [...signature, ...targeted, ...rituals].map((m) => m.title),
    );
    const rest = massages.filter((m) => !picked.has(m.title));

    return { signature, targeted, rituals: [...rituals, ...rest] };
  }, []);

  return (
    <div className="bg-bg text-text">
      <main>
        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="Massage Treatment at Vava Spa"
              className="h-[62vh] w-full object-cover sm:h-[70vh]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/22" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/18 to-transparent" />
            <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
          </div>

          <Container className="relative">
            <div className="flex min-h-[62vh] items-end pb-12 sm:min-h-[70vh] sm:pb-14">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={0}
                className="max-w-3xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  Massage Treatment
                </p>

                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl leading-[1.05]">
                  A calmer body, a clearer mind
                </h1>

                <p className="mt-5 max-w-2xl text-base text-white/75 sm:text-lg leading-relaxed">
                  Choose what your body needs today. We adapt the session to
                  your comfort, then confirm a time that fits your week.
                </p>

                {/* Desktop-only CTA */}
                <div className="mt-8 hidden sm:flex">
                  <a href="/contact#quick-booking">
                    <Button size="lg">Start Quick Booking</Button>
                  </a>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/75 backdrop-blur">
                    Clean rooms
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/75 backdrop-blur">
                    Quiet atmosphere
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/75 backdrop-blur">
                    Comfort-first
                  </span>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* HOW IT WORKS */}
        <section className="section-tight">
          <Container>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <Eyebrow>How it works</Eyebrow>
                <h2 className="mt-3 text-2xl sm:text-4xl font-semibold tracking-tight">
                  Simple, calm, professional
                </h2>
                <p className="mt-4 text-sm sm:text-lg text-muted leading-relaxed">
                  A quick check-in, a clean room, and a session shaped around
                  your comfort. No rush. No noise.
                </p>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-[18px] border border-border bg-card p-5">
                    <p className="text-sm font-semibold tracking-tight">
                      1) Tell us your preference
                    </p>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      Choose a massage and add comfort notes in Quick Booking.
                    </p>
                  </div>
                  <div className="rounded-[18px] border border-border bg-card p-5">
                    <p className="text-sm font-semibold tracking-tight">
                      2) We confirm the time
                    </p>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      We reply with available slots and confirm your booking.
                    </p>
                  </div>
                  <div className="rounded-[18px] border border-border bg-card p-5">
                    <p className="text-sm font-semibold tracking-tight">
                      3) Arrive and reset
                    </p>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      Calm welcome, clean room, professional care.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-6 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <ImageTile src={imgRoom} label="Clean rooms" index={0} />
                  </div>
                  <div className="lg:col-span-5">
                    <div className="grid gap-6">
                      <ImageTile
                        src={imgQuiet}
                        label="Quiet atmosphere"
                        index={1}
                      />
                      <div className="rounded-[22px] border border-border bg-card p-6 sm:p-7">
                        <p className="text-sm font-semibold tracking-tight">
                          Comfort note
                        </p>
                        <p className="mt-2 text-sm text-muted leading-relaxed">
                          If you have injuries or sensitivities, add them in
                          Quick Booking. We will adapt your session
                          respectfully.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop-only minimal CTA */}
                <div className="mt-6 hidden sm:flex justify-end">
                  <a href="/contact#quick-booking">
                    <Button variant="secondary" size="lg">
                      Request availability
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SERVICE LIBRARY */}
        <section className="section">
          <Container>
            <div className="max-w-2xl">
              <Eyebrow>Massage library</Eyebrow>
              <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
                Choose your service
              </h2>
              <p className="mt-4 text-sm sm:text-lg text-muted leading-relaxed">
                Browse calmly. You will select your preference inside Quick
                Booking once you are ready.
              </p>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <div className="flex items-end justify-between gap-3">
                  <p className="text-sm font-semibold tracking-tight">
                    Signature
                  </p>
                  <p className="text-[12px] text-muted">Most requested</p>
                </div>
                <div className="mt-4 grid gap-4">
                  {grouped.signature.map((m, i) => (
                    <ServiceCard key={m.title} item={m} index={i} />
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="grid gap-10">
                  <div>
                    <div className="flex items-end justify-between gap-3">
                      <p className="text-sm font-semibold tracking-tight">
                        Targeted relief
                      </p>
                      <p className="text-[12px] text-muted">Focused areas</p>
                    </div>
                    <div className="mt-4 grid gap-4">
                      {grouped.targeted.map((m, i) => (
                        <ServiceCard key={m.title} item={m} index={i + 10} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-end justify-between gap-3">
                      <p className="text-sm font-semibold tracking-tight">
                        Restorative rituals
                      </p>
                      <p className="text-[12px] text-muted">Flow and renewal</p>
                    </div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {grouped.rituals.map((m, i) => (
                        <ServiceCard key={m.title} item={m} index={i + 20} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-[22px] border border-border bg-card p-6 sm:p-7">
              <p className="text-sm font-semibold tracking-tight">
                A note on comfort
              </p>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Add injuries, sensitivities, or preferences in Quick Booking. It
                helps us prepare a session that feels safe, respectful, and
                restorative.
              </p>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
