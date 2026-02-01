import { useMemo, useState } from "react";
import Container from "../../layout/Container";
import Button from "../../ui/Button";
import type{ ServiceCategory } from "../../../data/services";
import { SERVICES } from "../../../data/services";
function buildWhatsAppLink(message: string) {
  const WHATSAPP_NUMBER = "250791746187"; // update if needed
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.3em] text-muted">{eyebrow}</p>
      <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
        {title}
      </h2>
      <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}

function NavPill({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full px-5 py-2 text-sm transition border",
        active
          ? "bg-brand text-white border-brand"
          : "bg-bg text-text border-border hover:bg-card",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function ServiceCard({
  category,
}: {
  category: ServiceCategory;
}) {
  const catalog = SERVICES[category];

  const waMsg = useMemo(() => {
    const names = catalog.items.slice(0, 4).map((i) => i.name).join(", ");
    return `Hello Vava Spa, I would like to book a ${catalog.title}. My preferred service is: ____ . Available options include: ${names}. Please share available times.`;
  }, [catalog]);

  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
      {/* Featured visual card */}
      <div className="lg:col-span-5">
        <div className="group relative overflow-hidden rounded-[32px] border border-border bg-card shadow-soft">
          <div className="absolute inset-0">
            <img
              src={catalog.image}
              alt={catalog.title}
              className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
            <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
          </div>

          <div className="relative p-7 sm:p-9">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              {category === "massage" ? "Massage" : "Spa"}
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              {catalog.title}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
              {catalog.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {catalog.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur"
                >
                  {h}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={buildWhatsAppLink(waMsg)} target="_blank" rel="noreferrer">
                <Button size="lg">Book on WhatsApp</Button>
              </a>
              <a href="/contact">
                <Button size="lg" variant="secondary">
                  Request via form
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Clean list */}
      <div className="lg:col-span-7">
        <div className="rounded-[28px] border border-border bg-card shadow-soft p-6 sm:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                Included options
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight">
                Choose your preferred service
              </h4>
            </div>

            <a href="/contact" className="hidden sm:block">
              <Button variant="secondary">Request availability</Button>
            </a>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {catalog.items.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-between gap-3 rounded-2xl border border-border bg-bg px-4 py-4"
              >
                <div>
                  <p className="font-medium leading-snug">{item.name}</p>
                  {item.duration ? (
                    <p className="mt-1 text-xs text-muted">{item.duration}</p>
                  ) : null}
                </div>

                {/* <span className="mt-1 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted">
                  Vava
                </span> */}
              </div>
            ))}
          </div>

          <div className="mt-7 flex sm:hidden gap-3">
            <a href="/contact" className="flex-1">
              <Button variant="secondary" className="w-full">
                Request availability
              </Button>
            </a>
            <a
              href={buildWhatsAppLink(waMsg)}
              target="_blank"
              rel="noreferrer"
              className="flex-1"
            >
              <Button className="w-full">WhatsApp</Button>
            </a>
          </div>

          <p className="mt-5 text-xs text-muted">
            You can book via WhatsApp for faster response. Or request availability through the form.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesCatalog() {
  const [active, setActive] = useState<ServiceCategory>("massage");

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="section">
      <Container>
        <div className="flex flex-col gap-8 lg:gap-10">
          <SectionHeader
            eyebrow="Explore"
            title="Massage treatments and spa services"
            subtitle="Choose a category, explore the options, and book in seconds via WhatsApp or request through the form."
          />

          {/* Navigator */}
          <div className="flex flex-wrap items-center gap-3">
            <NavPill
              active={active === "massage"}
              label="Massage treatments"
              onClick={() => {
                setActive("massage");
                scrollTo("massage-treatments");
              }}
            />
            <NavPill
              active={active === "spa"}
              label="Spa services"
              onClick={() => {
                setActive("spa");
                scrollTo("spa-services");
              }}
            />
          </div>

          {/* Massage */}
          <div id="massage-treatments" className="scroll-mt-28">
            <ServiceCard category="massage" />
          </div>

          {/* Spa */}
          <div id="spa-services" className="scroll-mt-28">
            <ServiceCard category="spa" />
          </div>
        </div>
      </Container>
    </section>
  );
}
