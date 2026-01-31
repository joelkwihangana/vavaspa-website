import Container from "../layout/Container";
import Button from "../ui/Button";

import spaImg from "../../assets/feature/feature-2.jpg";

export default function BookingPreview() {
  return (
    <section className="py-20 bg-bg">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-border bg-card shadow-soft">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={spaImg}
              alt="Relaxing spa atmosphere"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/25" />
            <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
          </div>

          {/* Content */}
          <div className="relative grid gap-8 p-8 sm:p-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                Booking
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
                Ready when you are
              </h2>

              <p className="mt-3 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
                Book in under a minute on WhatsApp, or request availability via
                our contact form. We reply quickly and confirm your preferred
                time.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="/contact#booking" className="relative">
                  <span className="absolute inset-0 rounded-full bg-white/10 blur-xl opacity-0 transition hover:opacity-100" />
                  <Button size="lg">Book on WhatsApp</Button>
                </a>

                <a href="/contact#booking">
                  <Button variant="secondary" size="lg">
                    Request via form
                  </Button>
                </a>
              </div>
            </div>

            {/* Mini trust chips */}
            <div className="lg:col-span-5">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <TrustChip title="Clean rooms" sub="Prepared for every guest" />
                <TrustChip title="Quiet atmosphere" sub="Relax without noise" />
                <TrustChip title="Kigali, Rwanda" sub="Easy to find" />
              </div>
            </div>
          </div>

          {/* Bottom border line */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/12" />
        </div>
      </Container>
    </section>
  );
}

function TrustChip({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur">
      <p className="text-sm font-medium text-white/90">{title}</p>
      <p className="mt-1 text-xs text-white/70">{sub}</p>
    </div>
  );
}
