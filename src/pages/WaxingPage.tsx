import { motion, useReducedMotion } from "framer-motion";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

import waxHero from "../assets/services/waxing.jpg";
import spaImg from "../assets/services/spa.jpg";
import roomImg from "../assets/feature/intheroom.jpg";
import signImg from "../assets/real/sign.jpg";

type WaxingService = {
  title: string;
  desc: string;
  timeHint: string;
  note?: string;
};

const easeLuxury: [number, number, number, number] = [0.16, 1, 0.3, 1];

const services: WaxingService[] = [
  {
    title: "Full Body Waxing",
    desc: "A clean, professional full-body service designed for comfort and discretion.",
    timeHint: "45–90 min",
  },
  {
    title: "Arms Waxing",
    desc: "Smooth finish with gentle technique and careful prep.",
    timeHint: "15–25 min",
  },
  {
    title: "Legs Waxing",
    desc: "Clean result with a calm, unhurried approach.",
    timeHint: "20–40 min",
  },
  {
    title: "Underarm Waxing",
    desc: "Quick, discreet, and done with care.",
    timeHint: "10–15 min",
  },
  {
    title: "Bikini Waxing",
    desc: "Discreet care with comfort-first technique.",
    timeHint: "15–25 min",
    note: "You can share preferences in Quick Booking.",
  },
  {
    title: "Brazilian Waxing",
    desc: "Professional, discreet service in a clean space with respectful care.",
    timeHint: "20–35 min",
    note: "Tell us comfort notes in Quick Booking.",
  },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs uppercase tracking-[0.3em] text-muted">{children}</p>
  );
}

function WaxCard({ s, i }: { s: WaxingService; i: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 10 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: reduce ? 0 : 0.6,
        delay: Math.min(i * 0.04, 0.2),
        ease: easeLuxury,
      }}
      className="rounded-[22px] border border-border bg-card p-6 sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
        <span className="shrink-0 rounded-full border border-border bg-bg px-3 py-1 text-[11px] text-muted">
          {s.timeHint}
        </span>
      </div>
      <p className="mt-3 text-sm text-muted leading-relaxed">{s.desc}</p>
      {s.note ? (
        <p className="mt-3 text-[12px] text-muted/90 leading-relaxed">
          {s.note}
        </p>
      ) : null}
    </motion.article>
  );
}

export default function WaxingPage() {
  const reduce = useReducedMotion();

  return (
    <div className="bg-bg text-text">
      <main>
        {/* HERO */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={waxHero}
              alt="Waxing services at Vava Spa"
              className="h-[62vh] w-full object-cover sm:h-[70vh]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/18 to-transparent" />
            <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
          </div>

          {/* subtle editorial top fade */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent" />

          <Container className="relative">
            <div className="flex min-h-[62vh] items-end pb-12 sm:min-h-[70vh] sm:pb-14">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: reduce ? 0 : 0.75, ease: easeLuxury }}
                className="max-w-3xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  Waxing
                </p>

                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl leading-[1.05]">
                  Smooth results, discreet care, calm comfort
                </h1>

                <p className="mt-5 max-w-2xl text-base text-white/75 sm:text-lg leading-relaxed">
                  Clean space. Respectful service. A comfort-first approach from
                  start to finish.
                </p>

                {/* Desktop-only CTA */}
                <div className="mt-8 hidden sm:flex flex-wrap gap-3">
                  <a href="/contact#quick-booking">
                    <Button size="lg">Start Quick Booking</Button>
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
                    Comfort-first
                  </span>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* TRUST + BENTO */}
        <section className="section-tight">
          <Container>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <Eyebrow>What to expect</Eyebrow>
                <h2 className="mt-3 text-2xl sm:text-4xl font-semibold tracking-tight">
                  Calm, clean, professional
                </h2>
                <p className="mt-4 text-sm sm:text-lg text-muted leading-relaxed">
                  We keep the process simple. You tell us what you want. We
                  confirm a time. The session is done with care and discretion.
                </p>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-[18px] border border-border bg-card p-5">
                    <p className="text-sm font-semibold tracking-tight">
                      Hygiene-first setup
                    </p>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      Clean preparation and a quiet environment for confidence.
                    </p>
                  </div>

                  <div className="rounded-[18px] border border-border bg-card p-5">
                    <p className="text-sm font-semibold tracking-tight">
                      Comfort-led technique
                    </p>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      Gentle pacing with respectful communication.
                    </p>
                  </div>

                  <div className="rounded-[18px] border border-border bg-card p-5">
                    <p className="text-sm font-semibold tracking-tight">
                      Clear confirmation
                    </p>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      Use Quick Booking to share preferences and timing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-6 lg:grid-cols-12">
                  <div className="lg:col-span-7 overflow-hidden rounded-[28px] border border-border bg-card">
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <img
                        src={roomImg}
                        alt="Clean room"
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur">
                          Clean rooms
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 grid gap-6">
                    <div className="overflow-hidden rounded-[28px] border border-border bg-card">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={spaImg}
                          alt="Spa atmosphere"
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur">
                            Quiet atmosphere
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="overflow-hidden rounded-[28px] border border-border bg-card">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={signImg}
                          alt="Vava Spa sign"
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur">
                            Real place, Kigali
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop-only single CTA, not noisy */}
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
            <div className="flex items-end justify-between gap-6">
              <div className="max-w-2xl">
                <Eyebrow>Waxing library</Eyebrow>
                <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
                  Choose your service
                </h2>
                <p className="mt-4 text-sm sm:text-lg text-muted leading-relaxed">
                  Add preferences in Quick Booking and we confirm the best time.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <WaxCard key={s.title} s={s} i={i} />
              ))}
            </div>

            <div className="mt-10 rounded-[22px] border border-border bg-card p-6 sm:p-7">
              <p className="text-sm font-semibold tracking-tight">
                Comfort note
              </p>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                If you have sensitive skin or comfort preferences, include them
                in Quick Booking. We will prepare accordingly.
              </p>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
