// src/components/sections/DiscoverVava.tsx
import Container from "../layout/Container";

import signImg from "../../assets/real/sign.webp";
import buildingImg from "../../assets/real/building.webp";
import stairsImg from "../../assets/real/stairs.webp";
import receptionImg from "../../assets/feature/intheroom.webp";

// Internal sub-component for links. 
function DiscoveryLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white/70 transition hover:text-white"
    >
      {label}
      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  );
}

export default function DiscoverVava() {
  return (
    <section id="discover" className="bg-white py-24 sm:py-32">
      <Container>
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand">Atmosphere</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
              Real space. Real comfort.
            </h2>
            <p className="mt-4 text-lg text-muted">
              We believe in transparency. What you see here is exactly what you’ll 
              experience. 
              A clean, professional, and welcoming sanctuary in the heart of Kigali.
            </p>
          </div>
          
          {/* Desktop-only secondary navigation */}
          <div className="hidden sm:block">
            <a href="/gallery" className="group flex items-center gap-2 text-sm font-medium text-text">
              View Full Gallery
              <div className="h-px w-8 bg-brand/30 transition-all group-hover:w-12 group-hover:bg-brand" />
            </a>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:h-[600px]">
          
          {/* 1. The Anchor: Main building/Location (Large) */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card sm:col-span-2 lg:row-span-2">
            <img src={buildingImg} alt="Vava Spa Building" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Location</span>
              <h3 className="text-2xl font-semibold text-white">Easy to find, hard to leave.</h3>
              <div className="mt-4">
                <DiscoveryLink href="/contact#location" label="Get Directions" />
              </div>
            </div>
          </div>

          {/* 2. The Vibe: Interior (Medium) */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card lg:col-span-2">
            <img src={receptionImg} alt="Interior Room" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-semibold text-white">Clean & Private Rooms</h3>
            </div>
          </div>

          {/* 3. Detail: The Sign (Small) */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card">
            <img src={signImg} alt="Vava Spa Sign" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-brand/10 mix-blend-overlay" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="text-xs font-bold uppercase tracking-widest text-white">The Brand</span>
            </div>
          </div>

          {/* 4. Detail: The Entrance (Small) */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card">
            <img src={stairsImg} alt="Entrance Stairs" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute bottom-4 left-4">
              <span className="text-xs font-medium text-white/90">Main Entrance</span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}