import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { site, waLink } from "../../data/site";
import Button from "../ui/Button";
import Container from "../layout/Container";

// === VITE STATIC IMPORTS ===
import imgBuilding from "../../assets/optimized/building.webp";
import imgReception from "../../assets/feature/real-vava.webp";
import imgMassageTwoBeds from "../../assets/optimized/massage-room-two-beds.webp";
import imgMassageOneBed from "../../assets/optimized/massage-room-one-bed.webp";
import imgInAction from "../../assets/optimized/massage-in-action.webp";
import imgTechnique from "../../assets/optimized/_EST8697.webp";
import imgBottles from "../../assets/optimized/massage-bottles.webp";
import imgDecoration from "../../assets/optimized/massage-decoration-1.webp";
import imgRooftop from "../../assets/optimized/rooftop.webp";
import imgCleanRooms from "../../assets/optimized/cleanRooms.webp";

const slides = [
  { src: imgBuilding, alt: "Vava Spa - Premier wellness sanctuary in Kigali" },
  { src: imgReception, alt: "Welcoming reception area at Vava Spa" },
  {
    src: imgMassageTwoBeds,
    alt: "Tranquil massage rooms with dual treatment beds",
  },
  {
    src: imgMassageOneBed,
    alt: "Private single massage room for ultimate relaxation",
  },
  { src: imgInAction, alt: "Professional massage therapy in progress" },
  { src: imgTechnique, alt: "Expert massage techniques for deep relaxation" },
  { src: imgBottles, alt: "Premium massage oils and aromatherapy products" },
  { src: imgDecoration, alt: "Thoughtful spa decor and calming ambiance" },
  {
    src: imgRooftop,
    alt: "Exclusive rooftop sanctuary with Kigali city views",
  },
  {
    src: imgCleanRooms,
    alt: "Immaculate facilities maintained to highest standards",
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const whatsappHref = waLink(site.whatsappPrimary, site.whatsappMessage);

  return (
    /* FIX 1: h-[100svh] handles mobile browser bars. 
      FIX 2: Reduced min-height on mobile (min-h-[500px]) 
    */
    <section className="relative h-screen h-[100svh] min-h-[500px] sm:min-h-[700px] w-full overflow-hidden bg-neutral-950">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative h-full min-w-full flex-[0_0_100%]"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding={index === 0 ? "sync" : "async"}
                className={`
                  h-full w-full object-cover transition-transform duration-[10000ms] ease-out
                  ${selectedIndex === index ? "scale-110" : "scale-100"}
                `}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CONTENT LAYER */}
      {/* FIX 3: items-center on mobile to keep text in middle, items-end on desktop 
        FIX 4: Reduced padding-bottom (pb-12) so CTA isn't buried 
      */}
      <div className="relative z-10 flex h-full items-center sm:items-end pb-12 sm:pb-32">
        <Container>
          <div className="max-w-4xl">
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-400 sm:mb-4 sm:text-xs">
              {site.city} • Since 2020
            </div>

            {/* FIX 5: text-5xl on small mobile, text-6xl on medium, lg:text-9xl on desktop */}
            <h1 className="text-5xl font-bold leading-[0.95] tracking-tighter text-white sm:text-7xl lg:text-9xl">
              Where calm <br />
              <span className="text-white/50">meets care.</span>
            </h1>

            {/* FIX 6: text-base/lg on mobile, text-2xl on desktop. Reduced mt-4 for tighter spacing */}
            <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-zinc-300 sm:mt-8 sm:text-2xl">
              Professional massage therapy in a private sanctuary designed for
              your <span className="text-white">absolute comfort.</span>
            </p>

            <div className="mt-8 hidden sm:flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-8">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button
                  size="lg"
                  className="
                    w-full bg-emerald-600 px-8 py-5 text-base font-bold text-white
                    transition-all duration-300 hover:bg-emerald-500 
                    active:scale-[0.97] sm:px-10 sm:py-7 sm:text-lg
                  "
                >
                  Book Your Session
                  <svg
                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Button>
              </a>

              <a
                href="#services"
                className="group flex items-center justify-center gap-3 text-sm font-bold text-white/90 transition-colors hover:text-white sm:text-base"
              >
                Explore Services
                <div className="h-[2px] w-8 bg-emerald-500/50 transition-all group-hover:w-12 group-hover:bg-emerald-500 sm:w-12" />
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* PROGRESS INDICATORS - Slightly smaller for mobile */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 sm:bottom-12 sm:right-12 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`
              h-1 rounded-full transition-all duration-500
              ${selectedIndex === index ? "w-8 sm:w-12 bg-white" : "w-3 sm:w-4 bg-white/20 hover:bg-white/40"}
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
