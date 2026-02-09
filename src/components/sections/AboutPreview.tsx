// src/components/sections/AboutPreview.tsx
import Container from "../layout/Container";
import Button from "../ui/Button";

import hero from "../../assets/about/about-hero.webp";
import a1 from "../../assets/about/about-1.webp";


// 1. Move reusable sub-components out of the main render for cleaner logic
function Pill({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex flex-col rounded-xl border border-border/50 bg-white p-4 shadow-sm transition-colors hover:border-brand/20">
      <span className="text-[10px] uppercase tracking-widest text-muted">{title}</span>
      <span className="mt-1 text-sm font-semibold text-text">{text}</span>
    </div>
  );
}

export default function AboutPreview() {
  return (
    <section id="about" className="bg-bg py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          
          {/* Left: Content & Story (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="max-w-2xl">
              <span className="text-sm font-medium tracking-wide text-brand">Our Story</span>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
                A quiet sanctuary in Kigali, designed for deep comfort.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                At Vava Spa, we believe true relaxation begins with trust. Every treatment is 
                delivered with intention and respect, ensuring you leave feeling lighter 
                and fully restored.
              </p>

              {/* Functional Pills: Now using the light-themed design */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <Pill title="Experience" text="Certified Therapists" />
                <Pill title="Environment" text="Clean & Quiet Space" />
                <Pill title="Our Promise" text="Personalized Care" />
              </div>

             <div className="mt-10 hidden flex-wrap gap-4 sm:flex">
                <a href="/#booking">
                  <Button size="lg" className="px-8">Book on WhatsApp</Button>
                </a>
                <a href="/#services">
                  <Button variant="secondary" size="lg">Explore Services</Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right: The Visual Collage (5 Columns) */}
          <div className="lg:col-span-5">
            <div className="relative grid grid-cols-2 gap-4">
              {/* Main Image: Large and vertical */}
              <div className="col-span-1 row-span-2 overflow-hidden rounded-3xl border border-border">
                <img 
                  src={hero} 
                  alt="Vava Spa interior" 
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" 
                />
              </div>
              
              {/* Accents: Two smaller images to show variety */}
              <div className="overflow-hidden rounded-3xl border border-border">
                <img src={a1} alt="Therapy room" className="aspect-square w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-3xl border border-border bg-brand/5 p-6">
                 <p className="text-sm font-medium text-brand-dark">
                    "Restore body and mind with care."
                 </p>
                 <p className="mt-4 text-xs text-muted">— Our Mission</p>
              </div>

              {/* Floating Decoration: Adds a sense of depth */}
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-brand/10 blur-3xl" />
            </div>
          </div>

        </div>

        {/* Vision/Mission: Refactored into a subtle horizontal bar */}
        <div className="mt-24 grid gap-8 border-t border-border pt-16 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-text">Vision</h4>
            <p className="mt-4 text-muted leading-relaxed">
              To be the spa clients remember, not only for treatments, but 
              for the calm and confidence they leave with.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-text">Mission</h4>
            <p className="mt-4 text-muted leading-relaxed">
              To deliver professional massage and natural spa therapies in a 
              clean, welcoming environment built on trust.
            </p>
          </div>
          <div className="rounded-2xl bg-card p-6">
            <p className="text-sm font-medium text-text">Traveling to Rwanda?</p>
            <p className="mt-2 text-sm text-muted">
              We offer discreet, professional service for international guests. 
              Confirm your availability via WhatsApp.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}