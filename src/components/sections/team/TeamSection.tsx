import { team } from "../../../data/team";


export default function TeamSection() {
  return (
    <section className="section bg-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-muted">
            Our Team
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Caring hands you can trust
          </h2>
          <p className="mt-4 text-muted">
            Our therapists are trained professionals who value cleanliness,
            discretion, and genuine care. You are always in safe hands.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {team.map((member) => (
            <div
              key={member.id}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.role}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-medium">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
