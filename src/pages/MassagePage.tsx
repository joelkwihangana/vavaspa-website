import Navbar from "../components/layout/Navbar";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

const massages = [
  {
    title: "Swedish Massage",
    desc: "Gentle full-body relaxation to calm the nervous system and ease stress.",
  },
  {
    title: "Deep Tissue Massage",
    desc: "Targets deeper muscle layers to release tension and soreness.",
  },
  {
    title: "Thai Massage",
    desc: "Stretch-based therapy that improves flexibility and alignment.",
  },
  {
    title: "Lomi-Lomi Massage",
    desc: "Flowing rhythmic technique for deep relaxation and renewal.",
  },
  {
    title: "Shiatsu Massage",
    desc: "Pressure-point therapy to restore balance and reduce fatigue.",
  },
  {
    title: "Ayurvedic Massage",
    desc: "Traditional massage focused on detox, circulation, and holistic calm.",
  },
  {
    title: "Back, Head, Neck & Shoulder Massage",
    desc: "Perfect for office tension, headaches, and upper-body tightness.",
  },
  {
    title: "Reflexology",
    desc: "Foot pressure technique linked to whole-body wellness and relaxation.",
  },
  {
    title: "Couple Massage",
    desc: "A shared relaxation experience for partners, friends, or special moments.",
  },
  {
    title: "Hot Stone Therapy",
    desc: "Warm stones ease tightness and promote deep comfort.",
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

export default function MassagePage() {
  return (
    <div className="bg-bg text-text">
      <Navbar />

      <section className="section">
        <Container>
          <p className="text-sm tracking-wide text-muted">Massage Treatment</p>
          <h1 className="mt-2 text-5xl font-semibold tracking-tight">
            Exclusive Massage Services
          </h1>
          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            Our therapists work with intention and care. Choose the massage that
            fits your body today, and we will confirm your preferred time.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {massages.map((m) => (
              <ServiceTile key={m.title} title={m.title} desc={m.desc} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
