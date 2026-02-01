import { motion, useReducedMotion } from "framer-motion";
import Container from "../../layout/Container";
import Button from "../../ui/Button";
import { MessageCircle, CalendarDays, Sparkles } from "lucide-react";
import { site, waLink } from "../../../data/site";

export default function ServicesCtaBand() {
  const reduce = useReducedMotion();

  const waHref = waLink(site.whatsappPrimary, site.whatsappMessage);

  return (
    <section className="section-tight">
      <Container>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px] border border-border bg-card shadow-soft"
        >
          <div className="absolute inset-0">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand-2/40 blur-3xl" />
          </div>

          <div className="relative p-7 sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3 py-2">
                  <Sparkles size={16} className="text-brand" />
                  <span className="text-xs uppercase tracking-[0.28em] text-muted">
                    Ready when you are
                  </span>
                </div>

                <h3 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
                  Book your session in minutes
                </h3>

                <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed">
                  Fast response on WhatsApp, or request availability through the
                  contact form. We’ll confirm the best time for you.
                </p>
              </div>

              <div className="grid w-full gap-3 sm:max-w-md">
                <a href={waHref} target="_blank" rel="noreferrer">
                  <Button size="lg" className="w-full">
                    <span className="inline-flex items-center justify-center gap-2">
                      <MessageCircle size={18} />
                      Book on WhatsApp
                    </span>
                  </Button>
                </a>

                <a href="/contact">
                  <Button variant="secondary" size="lg" className="w-full">
                    <span className="inline-flex items-center justify-center gap-2">
                      <CalendarDays size={18} />
                      Request via form
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
