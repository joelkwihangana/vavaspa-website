import Container from "../../layout/Container";
import Button from "../../ui/Button";

export default function AboutCta() {
  return (
    <section className="py-18 sm:py-20 bg-bg">
      <Container>
        <div className="rounded-[32px] border border-border bg-card shadow-soft p-8 sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.28em] text-muted">
                Ready to relax
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
                Book your session in minutes
              </h2>
              <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed">
                Book instantly on WhatsApp or request availability through the
                form. We reply quickly and confirm your preferred time.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="/contact">
                <Button size="lg">Book on WhatsApp</Button>
              </a>
              <a href="/contact">
                <Button variant="secondary" size="lg">
                  Request via form
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
