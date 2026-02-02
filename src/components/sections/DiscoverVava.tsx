import Container from "../layout/Container";

// Update these paths to match your project
import signImg from "../../assets/real/sign.jpg";
import buildingImg from "../../assets/real/building.jpg";
import stairsImg from "../../assets/real/stairs.jpg";
import receptionImg from "../../assets/feature/intheroom.jpg";

function SoftLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 text-sm text-white/85 underline decoration-white/25 underline-offset-4 transition hover:text-white hover:decoration-white/60"
    >
      {children}
      <span aria-hidden="true" className="text-white/70">
        →
      </span>
    </a>
  );
}

function FeatureCard({
  eyebrow,
  title,
  description,
  image,
  footerLinks,
  align = "right",
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  footerLinks?: { label: string; href: string }[];
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
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

          {/* Calm links only */}
          {!!footerLinks?.length && (
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              {footerLinks.map((l) => (
                <SoftLink key={l.href} href={l.href}>
                  {l.label}
                </SoftLink>
              ))}
            </div>
          )}
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-90" />
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
        <p className="text-sm font-medium text-white/90">{label}</p>
        {/* <span className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-xs text-white/80 backdrop-blur">
          Real photo
        </span> */}
      </div>
    </div>
  );
}

export default function DiscoverVava() {
  return (
    <section className="section">
      <Container>
        <div className="mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-muted">
              Discover
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
              A calm sanctuary in Kigali, built for comfort
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed">
              Real place, real photos. Clean rooms, welcoming staff, and
              professional care. If you want to book, use Quick Booking on the
              Contact page.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FeatureCard
              eyebrow="Location"
              title="Easy to find, worth the visit"
              description="A peaceful space in Kigali where you can reset. Arrive, breathe, and let the stress drop."
              image={buildingImg}
              footerLinks={[
                { label: "Get directions", href: "/contact#location" },
                { label: "View gallery", href: "/gallery" },
              ]}
              align="left"
            />
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-6">
              <FeatureCard
                eyebrow="Inside Vava"
                title="Clean rooms. Quiet atmosphere."
                description="Thoughtful setup and a welcoming team. Everything is designed to feel calm, private, and consistent."
                image={receptionImg}
                footerLinks={[{ label: "See more photos", href: "/gallery" }]}
                align="right"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <MiniPhoto src={signImg} label="Vava Spa sign" />
                <MiniPhoto src={stairsImg} label="Entrance & stairs" />
              </div>

              {/* No mobile buttons here.
                  Mobile booking is handled by MobileBookingBar. */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
