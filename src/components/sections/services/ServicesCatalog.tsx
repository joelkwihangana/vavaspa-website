import { useMemo, useState } from "react";
import Container from "../../layout/Container";
import Button from "../../ui/Button";
import type { ServiceCategory, ServiceItem } from "../../../data/services";
import { SERVICES} from "../../../data/services";
import { site, waLink } from "../../../data/site";
import ServiceDetailDrawer from "../../ui/ServiceDetailDrawer";


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
  onSelect,
}: {
  category: ServiceCategory;
  onSelect: (category: ServiceCategory, item: ServiceItem) => void;
}) {
  const catalog = SERVICES[category];

  const waHref = useMemo(() => {
    return waLink(site.whatsappPrimary, site.whatsappMessage, {
      service: catalog.title,
    });
  }, [catalog.title]);

  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
      {/* Visual card */}
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
              <a href={waHref} target="_blank" rel="noreferrer">
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

      {/* Interactive list */}
      <div className="lg:col-span-7">
        <div className="rounded-[28px] border border-border bg-card shadow-soft p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Included options
          </p>

          <div className="mt-2 flex items-end justify-between gap-4">
            <h4 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Tap a service to view details
            </h4>
            <a href="/contact" className="hidden sm:block">
              <Button variant="secondary">Request availability</Button>
            </a>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {catalog.items.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelect(category, item)}
                className="text-left rounded-2xl border border-border bg-bg px-4 py-4 hover:bg-card transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium leading-snug">{item.name}</p>
                    {item.duration ? (
                      <p className="mt-1 text-xs text-muted">{item.duration}</p>
                    ) : null}
                    <p className="mt-2 text-xs text-muted line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <span className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted">
                    Details
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-7 flex sm:hidden gap-3">
            <a href="/contact" className="flex-1">
              <Button variant="secondary" className="w-full">
                Request availability
              </Button>
            </a>
            <a href={waHref} target="_blank" rel="noreferrer" className="flex-1">
              <Button className="w-full">WhatsApp</Button>
            </a>
          </div>

          <p className="mt-5 text-xs text-muted">
            Faster response on WhatsApp. Or request availability through the form.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesCatalog() {
  const [active, setActive] = useState<ServiceCategory>("massage");

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [selectedItem, setSelectedItem] = useState<ServiceItem | null>(null);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function onSelect(category: ServiceCategory, item: ServiceItem) {
    setSelectedCategory(category);
    setSelectedItem(item);
    setDrawerOpen(true);
  }

  function closeDrawer() {
    setDrawerOpen(false);
  }

  return (
    <section className="section">
      <Container>
        <SectionHeader
          eyebrow="Explore"
          title="Massage treatments and spa services"
          subtitle="Choose a category, explore options, and tap any service to view details. Book on WhatsApp or request through the form."
        />

        <div className="mt-6 flex flex-wrap gap-3">
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

       <div id="massage-treatments" className="mt-10 scroll-mt-28">
  <ServiceCard category="massage" onSelect={onSelect} />
</div>


<div id="spa-services" className="mt-10 scroll-mt-28">
  <ServiceCard category="spa" onSelect={onSelect} />
</div>
      </Container>

      <ServiceDetailDrawer
        open={drawerOpen}
        onClose={closeDrawer}
        item={selectedItem}
        category={selectedCategory}
      />
    </section>
  );
}
