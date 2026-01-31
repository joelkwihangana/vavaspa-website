import Container from "../layout/Container";
import Button from "../ui/Button";

// Update these paths to match your project
import signImg from "../../assets/real/sign.jpg";
import buildingImg from "../../assets/real/building.jpg";
import stairsImg from "../../assets/real/stairs.jpg";
import receptionImg from "../../assets/feature/intheroom.jpg";

function FeatureCard({
  eyebrow,
  title,
  description,
  image,
  ctaLabel,
  ctaHref,
  align = "right",
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
  align?: "left" | "right";
}) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-border bg-card shadow-soft">
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-[1100ms] ease-out group-hover:scale-[1.04] group-hover:translate-y-[-1%]"
          loading="lazy"
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />
        {/* Subtle brand tint */}
        <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div
        className={[
          "relative grid min-h-[420px] items-end p-7 sm:p-10",
          align === "left" ? "justify-items-start" : "justify-items-end",
        ].join(" ")}
      >
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.28em] text-white/70">
            {eyebrow}
          </p>

          <h3 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
            {title}
          </h3>

          <p className="mt-3 text-base sm:text-lg text-white/80 leading-relaxed">
            {description}
          </p>

          {/* CTA reveal on hover */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={ctaHref} className="relative">
              <span className="absolute inset-0 rounded-full bg-white/10 blur-xl opacity-0 transition group-hover:opacity-100" />
              <Button size="lg">{ctaLabel}</Button>
            </a>

            <a href="/gallery">
              <Button variant="secondary" size="lg">
                View gallery
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/15" />
    </div>
  );
}

function MiniPhoto({ src, label }: { src: string; label: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <img
        src={src}
        alt={label}
        className="h-44 w-full object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-90" />
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
        <p className="text-sm font-medium text-white/90">{label}</p>
        <span className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-xs text-white/80 backdrop-blur">
          Vava
        </span>
      </div>
    </div>
  );
}

export default function DiscoverVava() {
  return (
    <section className="section">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-muted">
              Discover
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
              A calm sanctuary in Kigali, built for comfort
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed">
              Real photos, real place. Clean rooms, welcoming staff, and
              professional treatments. Book fast on WhatsApp or via the contact
              form.
            </p>
          </div>

          <div className="hidden sm:flex gap-3">
            <a href="/contact#booking">
              <Button size="lg">Book now</Button>
            </a>
            <a href="/services">
              <Button variant="secondary" size="lg">
                Services
              </Button>
            </a>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FeatureCard
              eyebrow="Location"
              title="Easy to find, worth the visit"
              description="A peaceful space in Kigali where you can reset. Arrive, breathe, and let the stress drop."
              image={buildingImg}
              ctaLabel="Get directions"
              ctaHref="/contact#location"
              align="left"
            />
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-6">
              <FeatureCard
                eyebrow="Inside Vava"
                title="Clean rooms. Quiet atmosphere."
                description="Thoughtful setup and a welcoming team. We keep it simple, calm, and professional."
                image={receptionImg}
                ctaLabel="Book on WhatsApp"
                ctaHref="/contact#booking"
                align="right"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <MiniPhoto src={signImg} label="Vava Spa sign" />
                <MiniPhoto src={stairsImg} label="Entrance & stairs" />
              </div>

              {/* Mobile CTAs */}
              <div className="flex sm:hidden gap-3">
                <a href="/contact#booking" className="flex-1">
                  <Button size="lg" className="w-full">
                    Book now
                  </Button>
                </a>
                <a href="/services" className="flex-1">
                  <Button variant="secondary" size="lg" className="w-full">
                    Services
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
