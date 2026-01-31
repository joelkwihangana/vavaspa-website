import Container from "../layout/Container";
import Button from "../ui/Button";

type Block = {
  eyebrow?: string;
  title: string;
  desc: string;
  cta: { label: string; href: string };
  image: { src: string; alt: string };
  reverse?: boolean;
};

function EditorialBlock({
  eyebrow = "Vava Spa",
  title,
  desc,
  cta,
  image,
  reverse,
}: Block) {
  return (
    <div className="relative">
      {/* Layout row */}
      <div
        className={[
          "grid items-center gap-6 lg:gap-10",
          "lg:grid-cols-12",
          reverse ? "" : "",
        ].join(" ")}
      >
        {/* Image */}
        <div
          className={[
            "lg:col-span-8",
            reverse ? "lg:order-2" : "lg:order-1",
          ].join(" ")}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card">
            <img
              src={image.src}
              alt={image.alt}
              className="h-[16rem] w-full object-cover sm:h-[20rem] lg:h-[26rem]"
              loading="lazy"
            />

            {/* Soft cinematic overlay for text contrast when card overlaps */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-black/10 to-transparent" />

            {/* Tiny highlight line for premium look */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/15" />
          </div>
        </div>

        {/* Card */}
        <div
          className={[
            "lg:col-span-6",
            reverse ? "lg:order-1" : "lg:order-2",
          ].join(" ")}
        >
          {/* On mobile: normal flow. On desktop: overlap the image */}
          <div
            className={[
              "relative",
              "mt-4 lg:mt-0",
              reverse ? "lg:-mr-10 xl:-mr-16" : "lg:-ml-10 xl:-ml-16",
            ].join(" ")}
          >
            <div
              className={[
                "rounded-[1.75rem] border border-border",
                "bg-card/90 backdrop-blur",
                "p-6 sm:p-8",
                "shadow-[0_18px_50px_rgba(0,0,0,0.10)]",
                "transition-transform duration-500",
                "hover:-translate-y-1",
              ].join(" ")}
            >
              <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-muted">
                {eyebrow}
              </p>

              <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight leading-tight">
                {title}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                {desc}
              </p>

              <div className="mt-6">
                <a href={cta.href}>
                  <Button size="lg">{cta.label}</Button>
                </a>
              </div>

              {/* Subtle “premium” motion detail */}
              <div className="pointer-events-none absolute -right-6 -top-6 hidden lg:block h-24 w-24 rounded-full bg-brand/10 blur-2xl animate-floaty" />
            </div>
          </div>
        </div>
      </div>

      {/* Spacer so overlaps never collide */}
      <div className="h-10 sm:h-14 lg:h-20" />
    </div>
  );
}

export default function EditorialOverlaps({ blocks }: { blocks: Block[] }) {
  return (
    <section className="section">
      <Container>
        <div>
          {blocks.map((b, idx) => (
            <EditorialBlock key={idx} {...b} />
          ))}
        </div>
      </Container>
    </section>
  );
}
