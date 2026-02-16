import { useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { site, waLink } from "../../data/site";
import Button from "../ui/Button";
import Container from "../layout/Container";

// Homepage carousel should be tight and high-signal (mobile-first).
import imgInAction from "../../assets/optimized/massage-in-action.webp";
import imgMassageTwoBeds from "../../assets/optimized/massage-room-two-beds.webp";
import imgRooftop from "../../assets/optimized/rooftop.webp";
import imgReception from "../../assets/feature/real-vava.webp";
import imgCleanRooms from "../../assets/optimized/cleanRooms.webp";
import imgBuilding from "../../assets/optimized/building.webp";

type Slide = {
  src: string;
  alt: string;
  label: string;
};

const SLIDES: Slide[] = [
  {
    src: imgInAction,
    alt: "Professional massage therapy in progress at Vava Spa Kigali",
    label: "Signature Massage",
  },
  {
    src: imgMassageTwoBeds,
    alt: "Tranquil couples massage room with dual treatment beds",
    label: "Couples Room",
  },
  {
    src: imgRooftop,
    alt: "Exclusive rooftop sanctuary with Kigali city views",
    label: "Rooftop Calm",
  },
  {
    src: imgReception,
    alt: "Welcoming reception area at Vava Spa",
    label: "Warm Welcome",
  },
  {
    src: imgCleanRooms,
    alt: "Immaculate facilities maintained to high standards",
    label: "Clean & Private",
  },
  {
    src: imgBuilding,
    alt: "Vava Spa building exterior in Kigali",
    label: "In Kigali",
  },
];

const AUTOPLAY_DELAY = 6500;

function isTypingTarget(el: Element | null) {
  if (!el) return false;
  const tag = (el as HTMLElement).tagName;
  const editable = (el as HTMLElement).isContentEditable;
  return tag === "INPUT" || tag === "TEXTAREA" || editable;
}

export default function HeroCarousel() {
  // Autoplay is cinematic, but user control must win.
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: AUTOPLAY_DELAY,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    [],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      duration: 28,
      dragFree: false,
      containScroll: "trimSnaps",
    },
    [autoplay],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const whatsappHref = waLink(site.whatsappPrimary, site.whatsappMessage);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    setIsPlaying(autoplay.isPlaying());

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, autoplay]);

  // Keyboard support for desktop without hijacking typing.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!emblaApi) return;
      if (isTypingTarget(document.activeElement)) return;

      if (e.key === "ArrowLeft") emblaApi.scrollPrev();
      if (e.key === "ArrowRight") emblaApi.scrollNext();
      if (e.key === " ") {
        e.preventDefault();
        if (autoplay.isPlaying()) autoplay.stop();
        else autoplay.play();
        setIsPlaying(autoplay.isPlaying());
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [emblaApi, autoplay]);

  const goTo = (i: number) => emblaApi?.scrollTo(i);
  const prev = () => emblaApi?.scrollPrev();
  const next = () => emblaApi?.scrollNext();

  const togglePlay = () => {
    if (autoplay.isPlaying()) autoplay.stop();
    else autoplay.play();
    setIsPlaying(autoplay.isPlaying());
  };

  return (
    <section className="relative min-h-[560px] h-[100svh] w-full overflow-hidden bg-neutral-950">
      {/* BACKGROUND CAROUSEL */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide, index) => (
            <div
              key={slide.src}
              className="relative h-full min-w-full flex-[0_0_100%]"
              aria-hidden={selectedIndex !== index}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
                className={[
                  "h-full w-full object-cover",
                  "transition-transform duration-[9000ms] ease-out",
                  selectedIndex === index ? "scale-110" : "scale-100",
                ].join(" ")}
              />

              {/* Legibility layers */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/15"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(16,185,129,0.14),transparent_55%)]"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CONTENT
          Mobile note: your fixed CTA buttons appear on mobile, so we leave space at the bottom.
      */}
      <div className="relative z-10 flex h-full items-end pb-24 sm:pb-24">
        <Container>
          <div className="max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/85 sm:text-emerald-300">
                {site.city} • Since 2020
              </div>

              {/* Slide label (desktop only, keeps mobile clean) */}
              <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/75 backdrop-blur">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                {SLIDES[selectedIndex]?.label}
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-bold leading-[0.95] tracking-tighter text-white sm:text-7xl lg:text-8xl">
              Relax the Mind
              <br />
              <span className="text-white/55">Renew the Body</span>
              <br />
              <span className="text-emerald-400">Revive the Soul.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-zinc-200/90 sm:mt-7 sm:text-xl">
              Professional massage therapy in a private sanctuary designed for
              your <span className="text-white">absolute comfort.</span>
            </p>

            {/* Mobile micro-hint (because CTA is fixed elsewhere) */}
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/65 sm:hidden">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
              Swipe to explore photos
            </div>

            {/* CTAs: DESKTOP ONLY (mobile CTAs are handled by your fixed component) */}
            <div className="mt-10 hidden sm:flex flex-row items-center gap-6">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button
                  size="lg"
                  className="
                    bg-emerald-600 px-9 py-7 text-base font-bold text-white
                    transition-all duration-300 hover:bg-emerald-500
                    active:scale-[0.98]
                  "
                >
                  Book on WhatsApp
                </Button>
              </a>

              <a
                href="#services"
                className="group inline-flex items-center gap-3 rounded-full border border-white/12 bg-black/25 px-7 py-5 text-sm font-bold text-white/90 backdrop-blur transition-colors hover:text-white"
              >
                Explore Services
                <span className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 transition-colors group-hover:bg-white/15">
                  <ChevronRight size={16} />
                </span>
              </a>
            </div>

            {/* Controls: visible on all sizes, but positioned so it does not fight the fixed mobile CTA bar */}
            <div className="mt-7 flex items-center gap-2 sm:mt-10 sm:gap-3">
              <button
                onClick={prev}
                className="rounded-full border border-white/10 bg-black/30 p-3 text-white/85 backdrop-blur transition-colors hover:bg-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400/60"
                aria-label="Previous slide"
                type="button"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={togglePlay}
                className="rounded-full border border-white/10 bg-black/30 p-3 text-white/85 backdrop-blur transition-colors hover:bg-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400/60"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                type="button"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>

              <button
                onClick={next}
                className="rounded-full border border-white/10 bg-black/30 p-3 text-white/85 backdrop-blur transition-colors hover:bg-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400/60"
                aria-label="Next slide"
                type="button"
              >
                <ChevronRight size={18} />
              </button>

              {/* Dots: tap-friendly */}
              <div className="ml-2 flex items-center gap-2 sm:ml-4">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={[
                      "h-2 rounded-full transition-all duration-300",
                      selectedIndex === i
                        ? "w-10 bg-white"
                        : "w-3 bg-white/25 hover:bg-white/40",
                    ].join(" ")}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={selectedIndex === i ? "true" : undefined}
                    type="button"
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Screen reader announcement */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {selectedIndex + 1} of {SLIDES.length}:{" "}
        {SLIDES[selectedIndex]?.alt}
      </div>
    </section>
  );
}
