import { useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { site, waLink } from "../../data/site";
import Button from "../ui/Button";
import Container from "../layout/Container";

// ASSETS: Ensure Slide 0 is an interior shot (like imgMassageTwoBeds)
import imgInAction from "../../assets/optimized/massage-in-action.webp";
import imgMassageTwoBeds from "../../assets/optimized/massage-room-two-beds.webp";
// import imgRooftop from "../../assets/optimized/rooftop.webp";
import imgReception from "../../assets/feature/real-vava.webp";
// import imgCleanRooms from "../../assets/optimized/cleanRooms.webp";
import imgBuilding from "../../assets/optimized/building.webp";

type Slide = {
  src: string;
  alt: string;
  label: string;
};

const SLIDES: Slide[] = [
  {
    src: imgMassageTwoBeds,
    alt: "Tranquil couples massage room with dual treatment beds",
    label: "Couples Room",
  },
  {
    src: imgInAction,
    alt: "Professional massage therapy in progress at Vava Spa Kigali",
    label: "Signature Massage",
  },
  {
    src: imgReception,
    alt: "Welcoming reception area at Vava Spa",
    label: "Warm Welcome",
  },
  {
    src: imgBuilding,
    alt: "Vava Spa building exterior in Kigali",
    label: "Our Location",
  },
];

const AUTOPLAY_DELAY = 6000;

export default function HeroCarousel() {
  const autoplay = useMemo(
    () => Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: true }),
    [],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    autoplay,
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const whatsappHref = waLink(site.whatsappPrimary, site.whatsappMessage);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    // Sync play state with plugin
    emblaApi.on("autoplay:play", () => setIsPlaying(true));
    emblaApi.on("autoplay:stop", () => setIsPlaying(false));
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const togglePlay = () => {
    if (autoplay.isPlaying()) autoplay.stop();
    else autoplay.play();
  };

  return (
    <section className="relative h-[85svh] min-h-[550px] w-full overflow-hidden bg-neutral-950">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide, index) => (
            <div
              key={slide.src}
              className="relative h-full min-w-full flex-[0_0_100%]"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className={`h-full w-full object-cover transition-transform duration-[7000ms] ease-out ${
                  selectedIndex === index ? "scale-105" : "scale-100"
                }`}
              />
              {/* Overlay: Stronger at bottom for text, lighter at top for "air" */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 flex h-full items-end pb-16 sm:pb-24">
        <Container>
          <div className="max-w-3xl">
            {/* Breadcrumb / Location */}
            <div className="mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-emerald-500/60" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400 sm:text-xs">
                {site.city} • Premier Wellness
              </span>
            </div>

            {/* Headline: Responsive & Fluid */}
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              A private space to <br />
              <span className="text-emerald-400">relax & restore.</span>
            </h1>

            {/* Sub-text: Limited width for better readability */}
            <p className="mt-5 max-w-lg text-base font-medium leading-relaxed text-zinc-200/90 sm:text-xl">
              Professional massage and spa care in a sanctuary designed for
              cleanliness, quiet, and your{" "}
              <span className="text-white font-semibold">
                absolute comfort.
              </span>
            </p>

            {/* DESKTOP ACTIONS */}
            <div className="mt-10 hidden sm:flex items-center gap-5">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-emerald-600 px-8 py-6 text-base hover:bg-emerald-500 transition-all"
                >
                  Begin Quick Booking
                </Button>
              </a>
              <a
                href="#services"
                className="text-sm font-bold text-white/80 hover:text-white transition-colors flex items-center gap-2"
              >
                See booking details <ChevronRight size={16} />
              </a>
            </div>

            {/* <div className="mt-8 flex sm:hidden">
              <a href={whatsappHref} className="w-full">
                <Button className="w-full bg-emerald-600 py-6 text-sm font-bold">
                  Book on WhatsApp
                </Button>
              </a>
            </div> */}

            {/* CONTROLS */}
            <div className="mt-10 flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => emblaApi?.scrollPrev()}
                  className="p-2 text-white/50 hover:text-white transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={togglePlay}
                  className="p-2 text-white/50 hover:text-white transition-colors"
                  aria-label="Toggle Autoplay"
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button
                  onClick={() => emblaApi?.scrollNext()}
                  className="p-2 text-white/50 hover:text-white transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Progress Dots */}
              <div className="ml-4 flex gap-2">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      selectedIndex === i
                        ? "w-8 bg-emerald-500"
                        : "w-2 bg-white/20"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
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
