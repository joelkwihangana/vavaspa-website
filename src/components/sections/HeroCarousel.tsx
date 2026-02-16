import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { site, waLink } from "../../data/site";
import Button from "../ui/Button";
import Container from "../layout/Container";

// Optimized assets for the best first impression
import imgInAction from "../../assets/optimized/massage-in-action.webp";
import imgMassageTwoBeds from "../../assets/optimized/massage-room-two-beds.webp";
import imgReception from "../../assets/feature/real-vava.webp";

const SLIDES = [
  {
    src: imgInAction,
    alt: "Professional massage therapy",
    label: "Signature Care",
  },
  { src: imgMassageTwoBeds, alt: "Massage room", label: "Private Suite" },
  { src: imgReception, alt: "Vava Spa Reception", label: "Lobby" },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 35 }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setIsPlaying(emblaApi.plugins().autoplay.isPlaying());
    };
    emblaApi.on("select", update);
    emblaApi.on("autoplay:play", update);
    emblaApi.on("autoplay:stop", update);
    return () => {
      emblaApi.off("select", update);
    };
  }, [emblaApi]);

  return (
    <section className="relative h-[85svh] w-full overflow-hidden bg-neutral-950 sm:h-[85svh]">
      {/* BACKGROUND IMAGES */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide, index) => (
            <div
              key={index}
              className="relative h-full min-w-full flex-[0_0_100%]"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover"
              />
              {/* Luxury Scrim: Darker at bottom for legibility, subtle vignette overall */}
              <div className="absolute inset-0 bg-black/30 sm:bg-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
            </div>
          ))}
        </div>
      </div>

      {/* TEXT CONTENT: Centered for Mobile, Left-aligned for Desktop */}
      <div className="relative z-10 flex h-full items-center justify-center pb-10 text-center sm:items-end sm:pb-24 sm:text-left sm:justify-start">
        <Container>
          <div className="mx-auto max-w-xl sm:mx-0 sm:max-w-3xl">
            {/* Header Hint */}
            <div className="mb-4 flex items-center justify-center gap-3 sm:justify-start">
              <span className="h-px w-6 bg-emerald-400 sm:w-8" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-400 sm:text-xs">
                Kigali • Premier Wellness
              </span>
            </div>

            {/* Headline: Significantly increased for mobile visibility */}
            <h1 className="px-2 text-[2.75rem] font-bold leading-[1.05] tracking-tight text-white drop-shadow-sm sm:px-0 sm:text-6xl lg:text-7xl">
              A private space to <br />
              relax & restore.
            </h1>

            {/* Subtext: Better contrast and size */}
            <p className="mx-auto mt-6 max-w-[280px] text-base font-medium leading-relaxed text-white/90 drop-shadow-md sm:mx-0 sm:max-w-lg sm:text-xl">
              Professional therapy in a sanctuary designed for your
              <span className="text-white font-bold"> absolute comfort.</span>
            </p>

            {/* DESKTOP-ONLY ACTIONS */}
            <div className="mt-10 hidden sm:flex items-center gap-6">
              <a
                href={waLink(site.whatsappPrimary, site.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-emerald-600 px-8 py-6 text-base font-bold shadow-xl hover:bg-emerald-500"
                >
                  Begin Quick Booking
                </Button>
              </a>
              <a
                href="#services"
                className="text-sm font-bold text-white transition-colors hover:text-emerald-400"
              >
                Explore Services →
              </a>
            </div>

            {/* COMPACT CONTROLS: Placed lower so they don't block the main message */}
            <div className="mt-12 flex items-center justify-center gap-6 sm:justify-start">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => emblaApi?.scrollPrev()}
                  className="p-2 text-white/50 hover:text-white"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => emblaApi?.scrollNext()}
                  className="p-2 text-white/50 hover:text-white"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Progress Bar Style Dots */}
              <div className="flex gap-2">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      selectedIndex === i
                        ? "w-10 bg-emerald-400"
                        : "w-3 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
