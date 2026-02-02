import Container from "../layout/Container";
import Button from "../ui/Button";

import hero from "../../assets/about/about-hero.jpg";
import a1 from "../../assets/about/about-1.jpg";
import a2 from "../../assets/about/about-2.jpg";
import a3 from "../../assets/about/about-3.jpg";

function Pill({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
      <p className="text-xs tracking-wide text-white/70">{title}</p>
      <p className="mt-1 text-sm font-semibold text-white">{text}</p>
    </div>
  );
}

export default function AboutPreview() {
  return (
    <section id="about" className="section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
          {/* Story Card */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-soft">
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={hero}
                  alt="Vava Spa atmosphere"
                  className="h-full w-full object-cover transition duration-1000 ease-out hover:scale-[1.03]"
                  loading="lazy"
                />
                {/* Cinematic overlays */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/25 to-black/10" />
                <div className="absolute inset-0 bg-brand/10" />
              </div>

              {/* Content */}
              <div className="relative p-7 sm:p-10">
                <p className="text-xs tracking-[0.25em] uppercase text-white/70">
                  Who we are
                </p>

                <h2 className="mt-3 max-w-xl text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                  A quiet sanctuary in Kigali, designed for deep comfort
                </h2>

                <p className="mt-4 max-w-xl text-white/80 leading-relaxed">
                  Vava Spa is calm, clean, and welcoming. Every treatment is
                  delivered with intention, respect, and attention to detail so
                  you leave feeling lighter, refreshed, and cared for.
                </p>

                {/* Pills */}
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <Pill title="Experience" text="Professional therapists" />
                  <Pill title="Environment" text="Clean and quiet space" />
                  <Pill title="Promise" text="Care that feels personal" />
                </div>

                {/* CTA */}
                <div className="mt-8 sm:flex flex-wrap gap-3 hidden">
                  <a href="/#booking">
                    <Button size="lg">Book on WhatsApp</Button>
                  </a>
                  <a href="/#services">
                    <Button variant="secondary" size="lg">
                      Explore services
                    </Button>
                  </a>
                </div>
              </div>

              {/* Bottom glow line */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-white/15" />
            </div>
          </div>

          {/* Image strip + Vision/Mission */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Image strip */}
            <div className="grid grid-cols-3 gap-3">
              {[a1, a2, a3].map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-3xl border border-border bg-card"
                >
                  <img
                    src={img}
                    alt="Vava Spa"
                    className="h-28 w-full object-cover transition duration-700 hover:scale-[1.05]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Vision / Mission cards (more designed, less plain) */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-0.5">
                <p className="text-sm tracking-wide text-muted">Vision</p>
                <p className="mt-2 text-base font-semibold">
                  People remember how they felt.
                </p>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  To be the spa clients remember, not only for treatments, but
                  for the calm and confidence they leave with.
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-0.5">
                <p className="text-sm tracking-wide text-muted">Mission</p>
                <p className="mt-2 text-base font-semibold">
                  Restore body and mind with care.
                </p>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  To deliver professional massage and natural spa therapies in a
                  clean, welcoming environment built on trust.
                </p>
              </div>
            </div>

            {/* Mini callout */}
            <div className="rounded-3xl border border-border bg-bg p-6">
              <p className="text-sm text-muted">
                Visiting Rwanda? We welcome guests and travelers. Book easily on
                WhatsApp and we’ll confirm availability.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
