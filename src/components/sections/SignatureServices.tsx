import Container from "../layout/Container";
import Button from "../ui/Button";

import massageImg from "../../assets/services/massage.jpg";
import spaImg from "../../assets/services/spa.jpg";
import waxingImg from "../../assets/services/waxing.jpg";

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
    href: "#massage",
  },
  {
    title: "Spa Services",
    subtitle: "Refresh skin. Renew confidence.",
    bullets: ["Facial Treatment", "Body Scrub", "Moroccan Bath"],
    image: spaImg,
    href: "#spa",
  },
  {
    title: "Waxing Services",
    subtitle: "Clean, gentle, professional.",
    bullets: ["Smooth results", "Hygienic care", "Discreet service"],
    image: waxingImg,
    href: "#spa",
  },
];

function ServiceCard({ item }: { item: ServiceHeroCard }) {
  return (
    <a
      href={item.href}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
    >
      {/* Image */}
      <div className="relative h-80 sm:h-96">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35 transition duration-500 group-hover:bg-black/55" />
      </div>

      {/* Base content (default) */}
      <div className="absolute inset-0 grid place-items-center p-6 text-center transition duration-300 group-hover:opacity-0">
        <div className="max-w-sm">
          <p className="text-white/85 text-base sm:text-lg">{item.subtitle}</p>

          <h3 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            {item.title}
          </h3>

          <div className="mt-4 space-y-2 text-base sm:text-lg text-white/85 leading-relaxed">
            {item.bullets.slice(0, 3).map((b) => (
              <p key={b}>{b}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Hover content (revealed on hover) */}
      <div className="absolute inset-0 grid place-items-center p-6 text-center opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="translate-y-6 transition duration-500 group-hover:translate-y-0">
          <p className="text-white/80 text-base sm:text-lg">
            Explore details, pricing, and what to expect
          </p>

          <h4 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
            {item.title}
          </h4>

          <div className="mt-6 flex justify-center">
            <Button variant="secondary" size="lg" className="px-8">
              Read more
            </Button>
          </div>
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

          <div className="flex flex-wrap gap-3">
            <a href="#booking">
              <Button>Book now</Button>
            </a>
            <a href="#contact">
              <Button variant="secondary">Contact us</Button>
            </a>
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
