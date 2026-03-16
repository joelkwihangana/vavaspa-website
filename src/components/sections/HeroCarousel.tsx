import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { site, waLink } from "../../data/site";
import Button from "../ui/Button";
import Container from "../layout/Container";
import imgInAction from "../../assets/optimized/massage-ready.webp";
import imgReception from "../../assets/feature/real-vava.webp";
import Hero3 from "../../assets/hero/hero-1.webp";
import Massagebed from "../../assets/optimized/int11.webp";
import Hero2 from "../../assets/hero/hero-2.webp";

const SLIDES: { src: string; alt: string; label: string; blurFaces?: boolean }[] = [

  { src: imgReception,
    alt: "Vava Spa Reception",
    label: "Lobby"
  },

  {
    src: Hero2,
    alt: "Vava Spa session",
    label: "The Experience",
    blurFaces: true,
  },

  {
    src: imgInAction,
    alt: "Professional massage therapy",
    label: "Signature Care",
  },

  { src: Massagebed,
    alt: "Massage room",
    label: "Private Suite"
  },

  {
    src: Hero3,
    alt: "Professional massage therapy",
    label: "Signature Care",
  },

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
      // Explicitly check the autoplay plugin status
      const autoplay = emblaApi.plugins().autoplay;
      setIsPlaying(autoplay.isPlaying());
    };

    emblaApi.on("select", update);
    emblaApi.on("autoplay:play", () => setIsPlaying(true));
    emblaApi.on("autoplay:stop", () => setIsPlaying(false));

    return () => {
      emblaApi.off("select", update);
    };
  }, [emblaApi]);

  const toggleAutoplay = () => {
    const autoplay = emblaApi?.plugins().autoplay;
    if (!autoplay) return;
    if (autoplay.isPlaying()) autoplay.stop();
    else autoplay.play();
  };

  return (
    <section className="relative h-[85svh] w-full overflow-hidden bg-neutral-950 sm:h-[90svh]">
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
              {/* Face anonymisation overlay — only on slides with people */}
              {slide.blurFaces && (
                <div
                  className="absolute"
                  style={{
                    top: "5%",
                    left: "10%",
                    width: "80%",
                    height: "55%",
                    backdropFilter: "blur(28px)",
                    WebkitBackdropFilter: "blur(28px)",
                  }}
                />
              )}
              {/* Heavy Scrim for maximum text clarity on mobile */}
              <div className="absolute inset-0 bg-black/40 sm:bg-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex h-full items-center justify-center pb-12 text-center sm:items-end sm:pb-24 sm:text-left sm:justify-start">
        <Container>
          <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-4xl">
            <div className="mb-4 flex items-center justify-center gap-3 sm:justify-start">
              <span className="h-px w-8 bg-emerald-400" />
              <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-emerald-400 sm:text-xs">
                Kigali • Since 2020
              </span>
            </div>

            {/* FOCUSED: Massive mobile text size for the "Big & Friendly" look */}
            <h1 className="px-4 text-5xl font-black leading-[1.05] tracking-tighter text-white drop-shadow-2xl sm:px-0 sm:text-7xl lg:text-6xl">
              Relax the Mind <br />
              <span className="text-emerald-600">Renew the Body.</span>
              <br />
              Revive the Soul
            </h1>

            <p className="mx-auto mt-6 max-w-[300px] text-lg font-medium leading-relaxed text-white/90 drop-shadow-lg sm:mx-0 sm:max-w-xl sm:text-2xl">
              Professional sanctuary for your
              <span className="text-white"> absolute comfort.</span>
            </p>

            {/* Desktop Actions */}
            <div className="mt-10 hidden sm:flex items-center gap-8">
              <a
                href={waLink(site.whatsappPrimary, site.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-emerald-600 px-10 py-7 text-lg font-bold shadow-2xl hover:bg-emerald-500"
                >
                  Book on WhatsApp
                </Button>
              </a>
              <a
                href="#services"
                className="text-base font-bold text-white/90 hover:text-white transition-colors"
              >
                Explore Services →
              </a>
            </div>

            {/* Controls: Now utilizing the isPlaying state to fix the build error */}
            <div className="mt-12 hidden sm:flex items-center justify-center gap-6 sm:justify-start">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => emblaApi?.scrollPrev()}
                  className="p-3 text-white/40 hover:text-white transition-colors"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={toggleAutoplay}
                  className="p-3 text-white/40 hover:text-white transition-colors"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <button
                  onClick={() => emblaApi?.scrollNext()}
                  className="p-3 text-white/40 hover:text-white transition-colors"
                >
                  <ChevronRight size={28} />
                </button>
              </div>

              <div className="flex gap-2.5">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      selectedIndex === i
                        ? "w-12 bg-emerald-400"
                        : "w-4 bg-white/20"
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
