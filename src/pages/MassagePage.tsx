import { useMemo, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

type Tone = "restore" | "release" | "renew";

type Massage = {
  title: string;
  desc: string;
  tone: Tone;
  durationHint: string;
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
    desc: "Traditional massage focused on circulation and holistic calm.",
    tone: "renew",
    durationHint: "60–90 min",
  },
  {
    title: "Back, Head, Neck & Shoulder",
    desc: "Perfect for office tension, headaches, and upper-body tightness.",
    tone: "release",
    durationHint: "30–60 min",
  },
  {
    title: "Reflexology",
    desc: "Foot pressure technique linked to whole-body relaxation.",
    tone: "restore",
    durationHint: "30–60 min",
  },
  {
    title: "Couple Massage",
    desc: "A shared relaxation experience for partners or friends.",
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

type Filter = "all" | Tone;

function toneLabel(t: Tone) {
  if (t === "restore") return "Restore";
  if (t === "release") return "Release";
  return "Renew";
}

function toneDot(t: Tone) {
  // No harsh colors. Use subtle brand tints.
  if (t === "restore") return "bg-brand/80";
  if (t === "release") return "bg-white/50";
  return "bg-brand/50";
}

export default function MassagePage() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("all");

  const fade: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: (d = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.55,
        delay: d,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const list = useMemo(() => {
    if (filter === "all") return massages;
    return massages.filter((m) => m.tone === filter);
  }, [filter]);

  return (
    <main className="bg-bg text-text">
      {/* HERO */}
      <section className="border-b border-border">
        <Container className="py-10 sm:py-12">
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={0}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-muted">
              Massage
            </p>

            <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
              Choose a massage in seconds.
              <span className="text-brand">
                {" "}
                <br />
                We tailor the rest.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm sm:text-lg text-muted leading-relaxed">
              Pick what you need today. In Quick Booking, you’ll add preferences
              and we confirm the best time.
            </p>

            {/* Single CTA (primary) */}
            <div className="mt-7">
              <a href="/contact">
                <Button size="lg">Start Quick Booking</Button>
              </a>
              <p className="mt-3 text-xs text-muted">
                No extra steps. You can tell us your preferred massage, time
                window, and any sensitive areas.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* FILTER + LIST */}
      <section>
        <Container className="py-10 sm:py-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                Massage options
              </h2>
              <p className="mt-2 text-sm text-muted">
                Filter by intention. Keep it simple.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <FilterChip
                active={filter === "all"}
                onClick={() => setFilter("all")}
              >
                All
              </FilterChip>
              <FilterChip
                active={filter === "restore"}
                onClick={() => setFilter("restore")}
              >
                Restore
              </FilterChip>
              <FilterChip
                active={filter === "release"}
                onClick={() => setFilter("release")}
              >
                Release
              </FilterChip>
              <FilterChip
                active={filter === "renew"}
                onClick={() => setFilter("renew")}
              >
                Renew
              </FilterChip>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((m, i) => (
              <motion.article
                key={m.title}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={Math.min(i * 0.03, 0.18)}
                className={[
                  "rounded-[22px] border border-border bg-card",
                  "p-5 sm:p-6",
                  "transition-colors",
                  "hover:bg-card/80",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold tracking-tight">
                    {m.title}
                  </h3>

                  <div className="shrink-0 text-right">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3 py-1 text-[11px] text-muted">
                      <span
                        className={`h-2 w-2 rounded-full ${toneDot(m.tone)}`}
                      />
                      {toneLabel(m.tone)}
                    </span>
                    <p className="mt-2 text-[11px] text-muted">
                      {m.durationHint}
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {m.desc}
                </p>

                <p className="mt-4 text-xs text-muted">
                  Add this preference in Quick Booking.
                </p>
              </motion.article>
            ))}
          </div>

          {/* ONE calm reassurance block (no CTA) */}
          <div className="mt-10 rounded-[24px] border border-border bg-card p-6 sm:p-7">
            <p className="text-sm font-semibold tracking-tight">Comfort note</p>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              If you have injuries, pregnancy, or sensitive areas, mention it in
              Quick Booking so we prepare properly.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "h-10 rounded-full px-4 text-sm transition",
        "border border-border",
        active ? "bg-brand text-white" : "bg-bg text-text hover:bg-card",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
