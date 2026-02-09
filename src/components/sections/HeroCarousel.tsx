// src/components/sections/HeroCarousel.tsx
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { site, waLink } from "../../data/site";
import Button from "../ui/Button";
import Container from "../layout/Container";

import hero1 from "../../assets/hero/hero-1.webp";
import hero2 from "../../assets/hero/hero-2.webp";
import hero3 from "../../assets/hero/hero-3.webp";
import hero4 from "../../assets/Last/vava4.webp";

const slides = [
  { src: hero1, alt: "Vava Spa relaxing atmosphere" },
  { src: hero2, alt: "Massage experience at Vava Spa" },
  { src: hero3, alt: "Calm spa environment in Kigali" },
  { src: hero4, alt: "A calm sanctuary, built for comfort" },
];

export default function HeroCarousel() {
  // Production Tip: Use the Autoplay plugin instead of manual setInterval.
  // It handles tab-switching and interactions automatically to save CPU/Battery.
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 8000, stopOnInteraction: false })
  ]);

  const whatsappHref = waLink(site.whatsappPrimary, site.whatsappMessage);

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-neutral-900">
      {/* 1. The Carousel Layer */}
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((s, i) => (
            <div key={i} className="relative h-full min-w-full overflow-hidden">
              <img
                src={s.src}
                alt={s.alt}
                // LCP Optimization: fetchPriority="high" for the first image
                {...(i === 0 ? { fetchpriority: "high" } : {})}
                loading={i === 0 ? "eager" : "lazy"}
                className={`
                  h-full w-full object-cover transition-transform duration-[10000ms] ease-linear
                  ${/* Cinematic scale effect: images slowly grow while active */ ""}
                  group-data-[selected=true]:scale-110
                `}
              />
              
              {/* 2. The Multi-Layer Overlay (The "Stripe" approach to legibility) */}
              {/* Layer A: Base dimming */}
              <div className="absolute inset-0 bg-black/40" />
              {/* Layer B: Vertical gradient to anchor the text at the bottom/center */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              {/* Layer C: Subtle texture/vignette to reduce "flat" digital look */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
            </div>
          ))}
        </div>
      </div>

      {/* 3. The Content Layer (Fixed above the sliding images) */}
      <div className="relative z-10 flex h-full flex-col justify-center">
        <Container>
          <div className="max-w-3xl">
            {/* Visual Hierarchy: Small, wide-tracked eyebrow text */}
            <span className="inline-block animate-fade-in text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">
              {site.city} • Premier Wellness
            </span>

            <h1 className="mt-6 animate-slide-up text-5xl font-semibold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
              A private space to <br className="hidden sm:block" />
              <span className="text-white/90">relax, restore, and reset.</span>
            </h1>

            <p className="mt-8 max-w-xl animate-slide-up-delayed text-lg leading-relaxed text-white/70 sm:text-xl">
              Professional massage and spa care in a sanctuary designed for 
              cleanliness, quiet, and your absolute comfort.
            </p>

            <div className="mt-10 sm:flex sm:flex-wrap items-center gap-6 animate-slide-up-delayed hidden">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="group">
                <Button size="lg" className="px-8 py-6 text-base shadow-2xl transition-all hover:scale-105 active:scale-95">
                  Begin Quick Booking
                </Button>
              </a>

              <a
                href="#booking"
                className="group flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                <span className="border-b border-white/20 pb-0.5 transition-colors group-hover:border-white">
                  See booking details
                </span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* 4. Scroll Indicator (UX Pattern: Guides the user down) */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
  <span className="text-[10px] uppercase tracking-[0.2em] text-white">Scroll</span>
  <div className="relative h-9 w-5 rounded-full border-2 border-white">
    {/* The 'Wheel' animation */}
    <div className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white animate-scroll-dot" />
  </div>
</div>
    </section>
  );
}