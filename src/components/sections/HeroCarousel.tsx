import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import Button from "../ui/Button";
import Container from "../layout/Container";
import { site, waLink } from "../../data/site";

import hero1 from "../../assets/hero/hero-1.jpg";
import hero2 from "../../assets/hero/hero-2.jpg";
import hero3 from "../../assets/hero/hero-3.jpg";

const slides = [
  { src: hero1, alt: "Vava Spa relaxing atmosphere" },
  { src: hero2, alt: "Massage experience at Vava Spa" },
  { src: hero3, alt: "Calm spa environment in Kigali" },
];

export default function HeroCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!embla) return;

    const interval = setInterval(() => {
      embla.scrollNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [embla]);

  const whatsappHref = waLink(site.whatsappPrimary, site.whatsappMessage);

  return (
    <section className="relative h-[82vh] min-h-[560px] overflow-hidden">
      {/* Carousel */}
      <div ref={emblaRef} className="absolute inset-0">
        <div className="flex h-full">
          {slides.map((s, i) => (
            <div
              key={i}
              className="relative h-full min-w-full"
              aria-hidden="true"
            >
              <img
                src={s.src}
                alt={s.alt}
                className="h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />

              {/* Premium overlay */}
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_20%,rgba(255,255,255,0.16),transparent_60%)]" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-end pb-14 sm:items-center sm:pb-0">
        <Container size="content">
          <div className="max-w-2xl text-white">
            <p className="text-xs uppercase tracking-[0.28em] text-white/70">
              {site.city}
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              A private space to relax, restore, and reset
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Professional massage and spa care in a calm, clean, and welcoming
              environment where your comfort comes first.
            </p>

            {/* Desktop-only CTA zone: ONE primary CTA */}
            <div className="mt-8 hidden items-center gap-5 sm:flex">
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <Button size="lg">Begin Quick Booking</Button>
              </a>

              {/* Secondary action as a text link, not a second button */}
              <a
                href="#booking"
                className="text-sm text-white/75 underline decoration-white/25 underline-offset-4 transition hover:text-white hover:decoration-white/45"
              >
                See booking details
              </a>
            </div>

            {/* Mobile hint (since MobileBookingBar is the CTA on mobile) */}
            <p className="mt-6 text-xs text-white/70 sm:hidden">
              Use the booking bar below to request availability.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
