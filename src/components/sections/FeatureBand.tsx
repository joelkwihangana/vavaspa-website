import Container from "../layout/Container";
import Button from "../ui/Button";

import f1 from "../../assets/feature/real-vava.png";
import f2 from "../../assets/feature/icyapa.jpg";

function EditorialBlock({
  label,
  title,
  desc,
  cta,
  image,
  align = "right",
}: {
  label: string;
  title: string;
  desc: string;
  cta: { label: string; href: string };
  image: string;
  align?: "left" | "right";
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
          className="h-[22rem] w-full object-cover sm:h-[26rem] lg:h-[32rem]"
          loading="lazy"
        />

        {/* Calm gradient for readability, not heavy */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
      </div>

      {/* Editorial card (integrated, low shadow) */}
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
            "rounded-[2rem] border border-border bg-bg/80 backdrop-blur",
            "p-7 sm:p-9",
            "shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
            cardOffset,
          ].join(" ")}
        >
          {/* label line */}
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-border" />
            <p className="text-xs tracking-[0.25em] uppercase text-muted">
              {label}
            </p>
          </div>

          <h3 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
            {title}
          </h3>

          <p className="mt-4 text-muted leading-relaxed">{desc}</p>

          <div className="mt-7">
            <a href={cta.href}>
              <Button size="lg">{cta.label}</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeatureBand() {
  return (
    <section className="section">
      <Container>
        <div className="space-y-16 lg:space-y-24">
          <EditorialBlock
            label="Experience"
            title="Unhurried sessions, real relaxation"
            desc="We focus on comfort, cleanliness, and quiet care so you can truly reset. Book on WhatsApp and we will confirm your preferred time."
            cta={{ label: "Book on WhatsApp", href: "/#booking" }}
            image={f1}
            align="right"
          />

          <EditorialBlock
            label="Wellness"
            title="A calm space that feels like home"
            desc="From the first moment you arrive, our approach is gentle and respectful. Choose a service and we will guide you."
            cta={{ label: "Explore services", href: "/#services" }}
            image={f2}
            align="right"
          />
        </div>
      </Container>
    </section>
  );
}
