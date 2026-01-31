import Container from "../layout/Container";
import Button from "../ui/Button";

import roomImg from "../../assets/real/reception.jpg";
import massageImg from "../../assets/real/icyapa.jpg";
import teamImg from "../../assets/feature/reception.jpg";

export default function ExperienceAtmosphere() {
  return (
    <section className="bg-bg py-20">
      <Container>
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted">
            The Experience
          </p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            A calm space designed for comfort
          </h2>
          <p className="mt-4 text-muted">
            From the moment you arrive, everything is designed to help you slow
            down, feel comfortable, and relax deeply.
          </p>
        </div>

        {/* Experience grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Clean rooms */}
          <ExperienceCard
            image={roomImg}
            title="Clean rooms"
            description="Immaculate treatment rooms prepared carefully for every guest, ensuring comfort, hygiene, and peace of mind."
          />

          {/* Quiet atmosphere */}
          <ExperienceCard
            image={massageImg}
            title="Quiet atmosphere"
            description="A peaceful environment with minimal noise, soft lighting, and calm energy so you can fully relax."
          />

          {/* Welcoming team */}
          <ExperienceCard
            image={teamImg}
            title="Welcoming team"
            description="Professional, respectful therapists who guide you gently and make you feel at home."
          />
        </div>

        {/* Soft CTA */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-muted">
            Experience thoughtful care in a calm, professional environment.
          </p>
          <Button as="a" href="#booking" variant="primary">
            Book your session
          </Button>
        </div>
      </Container>
    </section>
  );
}

function ExperienceCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-2 text-sm text-muted">{description}</p>
      </div>
    </div>
  );
}
