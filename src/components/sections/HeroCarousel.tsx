import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import Button from "../ui/Button";
import Container from "../layout/Container";
import { site, waLink } from "../../data/site";

import hero1 from "../../assets/hero/hero-1.jpg";
import hero2 from "../../assets/hero/hero-2.jpg";
import hero3 from "../../assets/hero/hero-3.jpg";

const slides = [hero1, hero2, hero3];

export default function HeroCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!embla) return;

    const interval = setInterval(() => {
      embla.scrollNext();
    }, 8000); // calm, slow

    return () => clearInterval(interval);
  }, [embla]);

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {/* Carousel */}
      <div ref={emblaRef} className="absolute inset-0">
        <div className="flex h-full">
          {slides.map((src, i) => (
            <div key={i} className="relative min-w-full h-full" aria-hidden>
              <img src={src} alt="" className="h-full w-full object-cover" />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/45" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <Container size="content">
          <div className="max-w-2xl text-white">
            <p className="text-sm tracking-wide text-white/80">{site.city}</p>

            <h1 className="mt-3 text-5xl font-semibold leading-tight">
              A private space to relax, restore, and reset
            </h1>

            <p className="mt-5 text-lg text-white/85">
              Professional massage and spa care in a calm, clean, and welcoming
              environment where your comfort comes first.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={waLink(site.whatsappPrimary, site.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
              >
                <Button size="lg">Book on WhatsApp</Button>
              </a>

              <Button
                variant="ghost"
                size="lg"
                className="bg-white/10 text-white hover:bg-white hover:text-text"
              >
                View Services
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
