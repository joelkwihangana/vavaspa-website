import Container from "../layout/Container";
import Button from "../ui/Button";

import massageImg from "../../assets/services/massage.webp";
import spaImg from "../../assets/services/spa.webp";
import waxingImg from "../../assets/services/waxing.webp";

type ServiceHeroCard = {
  title: string;
  subtitle: string;
  bullets: string[];
  image: string;
  href: string;
};

const cards: ServiceHeroCard[] = [
  {
    title: "Massage Treatments",
    subtitle: "Release tension. Restore calm.",
    bullets: [
      "Swedish, Deep Tissue, Thai, Lomi-Lomi",
      "Shiatsu, Ayurvedic, Reflexology",
      "Back, Head, Neck & Shoulder, Couple",
    ],
    image: massageImg,
    href: "/massage",
  },
  {
    title: "Spa Services",
    subtitle: "Refresh skin. Renew confidence.",
    bullets: ["Facial Treatment", "Body Scrub", "Moroccan Bath"],
    image: spaImg,
    href: "/spa",
  },
  {
    title: "Waxing Services",
    subtitle: "Clean, gentle, professional.",
    bullets: ["Smooth results", "Hygienic care", "Discreet service"],
    image: waxingImg,
    href: "/waxing",
  },
];

function ServiceCard({ item }: { item: ServiceHeroCard }) {
  return (
    <a
      href={item.href}
      className="
        group relative overflow-hidden rounded-3xl border border-border
        bg-card shadow-soft transition
        hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/30
      "
    >
      {/* Background image */}
      <div className="relative h-[22rem] sm:h-[26rem]">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="
            h-full w-full object-cover
            transition duration-1000 ease-out
            group-hover:scale-[1.08]
          "
        />

        {/* Vignette overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/70 via-black/30 to-black/10
            transition duration-700
            group-hover:from-black/80 group-hover:via-black/40
          "
        />

        {/* Subtle brand tint */}
        <div className="absolute inset-0 bg-brand/10 opacity-0 transition duration-700 group-hover:opacity-100" />

        {/* Shine sweep */}
        <div
          className="
            pointer-events-none absolute inset-0
            opacity-0 transition duration-700 group-hover:opacity-100
          "
        >
          <div
            className="
              absolute -left-1/2 top-0 h-full w-1/2
              bg-gradient-to-r from-transparent via-white/12 to-transparent
              rotate-12
              translate-x-[-60%]
              transition duration-1000 ease-out
              group-hover:translate-x-[220%]
            "
          />
        </div>

        {/* Top label */}
        <div className="absolute left-6 top-6">
          <span className="inline-flex items-center rounded-full bg-white/12 px-3 py-1 text-xs text-white/85 backdrop-blur">
            Signature
          </span>
        </div>

        {/* Base content */}
        <div
          className="
    absolute inset-0 flex flex-col items-center justify-center
    px-7 text-center
    transition duration-500
    group-hover:opacity-0 group-hover:translate-y-2
  "
        >
          <p className="text-white/85 text-sm sm:text-base tracking-wide">
            {item.subtitle}
          </p>

          <h3 className="mt-4 max-w-[18ch] text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.05]">
            {item.title}
          </h3>

          {/* Divider for visual order */}
          <div className="mt-5 h-px w-16 bg-white/25" />

          {/* Bullets: left-aligned inside a centered container (premium look) */}
          <ul className="mt-5 w-full max-w-[26rem] space-y-2 text-left text-sm sm:text-base text-white/85 leading-relaxed">
            {item.bullets.slice(0, 3).map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70 shrink-0" />
                <span className="break-words">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hover CTA panel */}
        <div
          className="
            absolute inset-x-5 bottom-5
            translate-y-8 opacity-0
            transition duration-500 ease-out
            group-hover:translate-y-0 group-hover:opacity-100
          "
        >
          <div
            className="
              rounded-2xl border border-white/15 bg-white/10
              backdrop-blur-md p-5
            "
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-white/80">
                  Explore details and availability
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  {item.title}
                </p>
              </div>

              <Button
                variant="secondary"
                size="lg"
                className="
                  shrink-0 px-7
                  transition
                  hover:shadow-[0_12px_40px_rgba(0,0,0,0.20)]
                "
              >
                Read more
              </Button>
            </div>
          </div>
        </div>

        {/* Corner accent line */}
        <div
          className="
            pointer-events-none absolute left-0 top-0 h-24 w-24
            border-l-2 border-t-2 border-white/0
            transition duration-700
            group-hover:border-white/25
          "
        />
      </div>
    </a>
  );
}

export default function SignatureServices() {
  return (
    <section id="services" className="section">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm tracking-wide text-muted">
              Signature Services
            </p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight">
              Our signature care, designed for comfort
            </h2>
            <p className="mt-3 max-w-2xl text-muted leading-relaxed">
              True relaxation begins with trust. Choose from our massage
              treatments and spa services, delivered with cleanliness, quiet,
              and personalized care.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cards.map((c) => (
            <ServiceCard key={c.title} item={c} />
          ))}
        </div>
      </Container>
    </section>
  );
}
