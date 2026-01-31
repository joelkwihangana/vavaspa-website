import Navbar from "../components/layout/Navbar";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

const spaServices = [
  {
    title: "Facial Treatment",
    desc: "Cleanse, exfoliate, and hydrate for a fresh, healthy glow.",
  },
  {
    title: "Body Scrub",
    desc: "Full-body exfoliation that leaves your skin smooth and renewed.",
  },
  {
    title: "Moroccan Bath",
    desc: "Deep cleansing ritual that refreshes skin and restores comfort.",
  },
  {
    title: "Waxing",
    desc: "Clean, gentle, and professional hair removal with discreet care.",
  },
];

function ServiceTile({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(0,0,0,0.10)]">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{desc}</p>
      <div className="mt-4">
        <a href="/#booking">
          <Button variant="secondary">Book this service</Button>
        </a>
      </div>
    </div>
  );
}

export default function SpaPage() {
  return (
    <div className="bg-bg text-text">
      <Navbar />

      <section className="section">
        <Container>
          <p className="text-sm tracking-wide text-muted">Spa Services</p>
          <h1 className="mt-2 text-5xl font-semibold tracking-tight">
            Exclusive Spa Services
          </h1>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            Cleanliness, comfort, and quiet care. Choose the service you want,
            and we will confirm availability.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {spaServices.map((s) => (
              <ServiceTile key={s.title} title={s.title} desc={s.desc} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
