import Container from "../layout/Container";

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
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-soft hover:border-brand/20"
    >
      {/* 1. Image Container: Fixed aspect ratio for consistency */}
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* 2. Content Area: Structured hierarchy using the 8px grid */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-text sm:text-2xl">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {item.subtitle}
          </p>
        </div>

        {/* 3. Features List: Muted but readable */}
        <ul className="mb-8 space-y-2">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm text-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand/40" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* 4. Action: Always visible, subtle "Stripe-style" arrow on hover */}
        <div className="mt-auto flex items-center gap-2 text-sm font-medium text-brand">
          <span>Explore Service</span>
          <svg 
            className="h-4 w-4 transition-transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
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
