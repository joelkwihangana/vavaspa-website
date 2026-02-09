// src/components/sections/Testimonials.tsx
import { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../layout/Container";
import { cn } from "../../lib/cn"; // Assuming you have a utility for class merging

type Testimonial = {
  quote: string;
  name: string;
  city: string;
  service?: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "The place is so quiet with nice decorations and a very calm smell. I've tried the massage service with an expert therapist and would recommend it to anyone looking for excellence.",
    name: "MAzS.",
    city: "Kigali",
    service: "Massage",
  },
  {
    quote: "Booking was fast on WhatsApp and they confirmed quickly. The atmosphere is calm and the care is top-level. Professionalism at its best.",
    name: "Daniel K.",
    city: "Kigali",
    service: "Deep Tissue",
  },
  {
    quote: "Very welcoming team. The room was spotless and the whole experience felt premium without being complicated. A hidden gem in Kigali.",
    name: "Sofia R.",
    city: "Visitor",
    service: "Spa",
  },
  // ... rest of your data
];

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();
  
  // 1. Embla setup with Autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-bg py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand">Guest Stories</span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            What it feels like to reset.
          </h2>
        </div>

        <div className="mt-16 relative">
          {/* Custom Navigation - Hidden on Mobile */}
          <div className="hidden lg:block">
            <button 
              onClick={() => emblaApi?.scrollPrev()}
              className="absolute -left-16 top-1/2 -translate-y-1/2 rounded-full p-4 transition-colors hover:bg-white"
              aria-label="Previous"
            >
              <svg className="h-6 w-6 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => emblaApi?.scrollNext()}
              className="absolute -right-16 top-1/2 -translate-y-1/2 rounded-full p-4 transition-colors hover:bg-white"
              aria-label="Next"
            >
              <svg className="h-6 w-6 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, i) => (
                <div 
                  key={i} 
                  className="min-w-0 flex-[0_0_100%] px-4 sm:flex-[0_0_60%] lg:flex-[0_0_45%]"
                >
                  <motion.div
                    animate={{ 
                      scale: selectedIndex === i ? 1 : 0.95,
                      opacity: selectedIndex === i ? 1 : 0.5
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative rounded-[32px] border border-border/50 bg-white p-8 shadow-sm sm:p-12"
                  >
                    {/* Quotation Mark Decoration */}
                    <span className="absolute right-10 top-10 text-6xl font-serif text-brand/5 leading-none">
                      ”
                    </span>

                    <div className="relative z-10">
                      <p className="text-lg leading-relaxed text-text sm:text-xl italic font-medium">
                        "{t.quote}"
                      </p>
                      
                      <div className="mt-10 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                          {t.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-text">{t.name}</p>
                          <p className="text-xs text-muted">
                            {t.city} {t.service && `• ${t.service}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="mt-12 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  selectedIndex === i ? "w-8 bg-brand" : "w-1.5 bg-border hover:bg-brand/40"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Hidden on Mobile: Secondary Context Link */}
        <div className="mt-12 hidden sm:flex justify-center">
           <p className="text-sm text-muted">
             Have questions about our sessions?{" "}
             <a href="/contact" className="font-semibold text-brand underline-offset-4 hover:underline">
               Chat with us on WhatsApp
             </a>
           </p>
        </div>
      </Container>
    </section>
  );
}