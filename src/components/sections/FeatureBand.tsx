import Container from "../layout/Container";
import Button from "../ui/Button";

import f1 from "../../assets/feature/real-vava.webp";
import f2 from "../../assets/feature/icyapa.webp";

function EditorialBlock({
  label,
  title,
  desc,
  cta,
  image,
  align = "right",
  showCtaDesktop = true,
}: {
  label: string;
  title: string;
  desc: string;
  cta?: { label: string; href: string };
  image: string;
  align?: "left" | "right";
  showCtaDesktop?: boolean;
}) {
  const cardAlign =
    align === "right" ? "lg:justify-end lg:pr-10" : "lg:justify-start lg:pl-9";

  const cardOffset =
    align === "right" ? "lg:-translate-y-10" : "lg:translate-y-10";

  return (
    <div className="relative">
      {/* Image frame */}
      <div className="relative overflow-hidden rounded-[2.25rem] border border-border bg-card">
        <img
          src={image}
          alt={title}
          className="h-[20rem] w-full object-cover sm:h-[26rem] lg:h-[32rem]"
          loading="lazy"
        />


        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </div>


      <div
        className={[
          "relative mt-4 flex md:-mt-10",
          "px-4 sm:px-6 lg:px-0",
          cardAlign,
        ].join(" ")}
      >
        <div
          className={[
            "w-full max-w-xl",
            "rounded-[2rem] border border-border bg-bg/90 backdrop-blur",
            "p-6 sm:p-8",
            "shadow-none", 
            cardOffset,
          ].join(" ")}
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-border" />
            <p className="text-xs tracking-[0.25em] uppercase text-muted">
              {label}
            </p>
          </div>

          <h3 className="mt-4 text-2xl sm:text-4xl font-semibold tracking-tight leading-tight">
            {title}
          </h3>

          <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
            {desc}
          </p>

         
          {showCtaDesktop && cta ? (
            <div className="mt-7 hidden sm:block">
              <a href={cta.href}>
                <Button size="lg">{cta.label}</Button>
              </a>
            </div>
          ) : null}

          {/* Mobile hint (no button) */}
          <p className="mt-5 text-xs text-muted sm:hidden">
            Use the booking bar below to request availability in minutes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FeatureBand() {
  return (
    <section className="section">
      <Container>
        <div className="space-y-14 lg:space-y-24">
       
          <EditorialBlock
            label="Experience"
            title="Unhurried sessions, real relaxation"
            desc="We focus on comfort, cleanliness, and quiet care so you can truly reset. Share your preferences in Quick Booking and we will confirm the best time."
            cta={{ label: "Begin Quick Booking", href: "/contact" }}
            image={f1}
            align="right"
            showCtaDesktop
          />

        
          <EditorialBlock
            label="Wellness"
            title="A calm space that feels like home"
            desc="From the first moment you arrive, our approach is gentle and respectful. Explore services, then request availability when ready."
            image={f2}
            align="right"
            showCtaDesktop={false}
          />
        </div>
      </Container>
    </section>
  );
}
