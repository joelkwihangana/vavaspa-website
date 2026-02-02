import { useMemo, useState } from "react";
import { team } from "../../../data/team";

type TeamMember = (typeof team)[number];

const TRUST_TAGS = ["Hygiene-first", "Privacy respected", "Clear communication", "Comfort-led"] as const;

function getObjectPosition(member: TeamMember) {
  // Top-biased crop to keep faces visible in most portraits.
  // If later you add member.focus (e.g. "50% 18%") in data/team.ts,
  // we can use it here for perfect framing.
  return "50% 18%";
}

function getBio(member: TeamMember) {
  // Keep it human and calm. You can later tailor per member if you add fields.
  return "Comfort first, always. We explain before we begin and adjust pressure to your preference.";
}

export default function TeamSection() {
  const defaultActiveId = useMemo(() => team?.[0]?.id ?? "", []);
  const [activeId, setActiveId] = useState<string>(defaultActiveId);

  return (
    <section id="team" className="section bg-bg">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-7 max-w-2xl sm:mb-10">
          <p className="text-xs uppercase tracking-widest text-muted">Our Team</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Caring hands you can trust
          </h2>
          <p className="mt-3 text-muted">
            We understand that trust matters. Our therapists work with calm professionalism, clean
            standards, and respectful communication so you feel safe from the first moment.
          </p>
        </div>

        {/* Desktop: Editorial card + Hover-expand row */}
        <div className="hidden sm:block">
          <div className="grid gap-8 lg:grid-cols-[360px_1fr] lg:items-start">
            {/* Editorial card */}
            <aside className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className="text-xs uppercase tracking-widest text-muted">Meet your care team</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                Gentle, skilled, and discreet
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                You deserve a space where you can fully relax. We move at your pace, explain as we go,
                and keep comfort first. Hover a profile to learn more.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {TRUST_TAGS.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-xs text-muted">
                Tip: Hover a profile to expand it. Only one opens at a time.
              </p>
            </aside>

            {/* Hover-expand profiles */}
            <div className="flex h-[420px] gap-4 overflow-hidden" aria-label="Team members">
              {team.map((member) => {
                const isActive = member.id === activeId;

                return (
                  <article
                    key={member.id}
                    className={[
                      "relative h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft",
                      "transition-[flex-basis] duration-500 ease-out",
                      isActive ? "flex-[1_1_440px]" : "flex-[0_0_140px]",
                    ].join(" ")}
                    onMouseEnter={() => setActiveId(member.id)}
                  >
                    {/* Image */}
                    <div className="absolute inset-0">
                      <img
                        src={member.image}
                        alt={`${member.name}, ${member.role}`}
                        className="h-full w-full object-cover"
                        style={{ objectPosition: getObjectPosition(member) }}
                        loading="lazy"
                        decoding="async"
                      />
                      <div
                        className={[
                          "absolute inset-0",
                          isActive
                            ? "bg-gradient-to-t from-black/55 via-black/18 to-transparent"
                            : "bg-gradient-to-t from-black/45 via-black/12 to-transparent",
                        ].join(" ")}
                      />
                    </div>

                    {/* Overlay label */}
                    <div className="absolute inset-x-4 bottom-4">
                      <div
                        className={[
                          "rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur",
                          "transition-[padding] duration-500 ease-out",
                          isActive ? "p-5" : "p-4",
                        ].join(" ")}
                      >
                        <p className="text-sm font-semibold text-white">{member.name}</p>
                        <p className="mt-0.5 text-xs text-white/80">{member.role}</p>

                        {/* Expanded info */}
                        <div
                          className={[
                            "overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-out",
                            isActive ? "mt-3 max-h-44 opacity-100 translate-y-0" : "mt-0 max-h-0 opacity-0 translate-y-2",
                          ].join(" ")}
                        >
                          <p className="text-xs text-white/80 leading-relaxed">{getBio(member)}</p>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {["Calm guidance", "Respectful care"].map((chip) => (
                              <span
                                key={chip}
                                className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] text-white/80"
                              >
                                {chip}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Keyboard focus support */}
                    <button
                      type="button"
                      onFocus={() => setActiveId(member.id)}
                      className="absolute inset-0 cursor-pointer"
                      aria-label={`View ${member.name}`}
                    />
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile: stacked cards, tap to expand (NO carousel) */}
        <div className="sm:hidden">
          <div className="grid gap-4" aria-label="Team members list">
            {team.map((member) => {
              const isActive = member.id === activeId;

              return (
                <article
                  key={member.id}
                  className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
                >
                  <button
                    type="button"
                    onClick={() => setActiveId(member.id)}
                    className="w-full text-left"
                    aria-expanded={isActive}
                    aria-label={`Open ${member.name}`}
                  >
                    {/* Image block */}
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={member.image}
                        alt={`${member.name}, ${member.role}`}
                        className="h-full w-full object-cover"
                        style={{ objectPosition: getObjectPosition(member) }}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/18 to-transparent" />

                      {/* Always-visible label */}
                      <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur">
                        <p className="text-sm font-semibold text-white">{member.name}</p>
                        <p className="mt-0.5 text-xs text-white/80">{member.role}</p>
                      </div>
                    </div>

                    {/* Expandable details */}
                    <div
                      className={[
                        "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                        isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <div className="p-4">
                          <p className="text-sm text-muted leading-relaxed">
                            {getBio(member)}
                          </p>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {TRUST_TAGS.slice(0, 3).map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-muted"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>

          <p className="mt-3 text-xs text-muted">
            Tap a profile to learn more.
          </p>
        </div>
      </div>
    </section>
  );
}
