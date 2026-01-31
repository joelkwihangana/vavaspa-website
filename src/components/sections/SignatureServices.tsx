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
      <div className="relative h-72 sm:h-80">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/50" />
      </div>

      {/* Default content (visible) */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <p className="text-white/85 text-sm">{item.subtitle}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
          {item.title}
        </h3>

        <div className="mt-3 text-sm text-white/85">
          {item.bullets.slice(0, 2).map((b) => (
            <p key={b} className="leading-relaxed">
              {b}
            </p>
          ))}
        </div>

        {/* Hover reveal */}
        <div className="mt-5 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Button className="w-fit" variant="secondary">
            Learn more
          </Button>
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
