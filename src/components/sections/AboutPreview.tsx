import Container from "../layout/Container";
import Button from "../ui/Button";

import a1 from "../../assets/about/about-1.jpg";
import a2 from "../../assets/about/about-2.jpg";
import a3 from "../../assets/about/about-3.jpg";
import a4 from "../../assets/about/about-4.jpg";

export default function AboutPreview() {
  return (
    <section id="about" className="section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src={a1}
                alt="Vava Spa space"
                className="h-48 w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-56"
                loading="lazy"
              />
            </div>

            <div className="overflow-hidden rounded-3xl border border-border translate-y-6">
              <img
                src={a2}
                alt="Treatment room"
                className="h-48 w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-56"
                loading="lazy"
              />
            </div>

            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src={a3}
                alt="Spa detail"
                className="h-48 w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-56"
                loading="lazy"
              />
            </div>

            <div className="overflow-hidden rounded-3xl border border-border translate-y-6">
              <img
                src={a4}
                alt="Spa environment"
                className="h-48 w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-56"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm tracking-wide text-muted">Who we are</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight">
              Professional care in a place that feels like home
            </h2>

            <p className="mt-4 text-muted leading-relaxed">
              Vava Spa is a calm, clean, and welcoming environment where every
              client is treated with respect and intention. From the first
              moment you arrive, our focus is your comfort.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <p className="font-semibold">Vision</p>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  To be the spa people remember, not only for treatments, but
                  for how they felt afterward.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <p className="font-semibold">Mission</p>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  To restore body and mind through professional massage, natural
                  spa therapies, and a calm environment built on trust.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/#booking">
                <Button size="lg">Book now</Button>
              </a>
              <a href="/#contact">
                <Button variant="secondary" size="lg">
                  Contact us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
