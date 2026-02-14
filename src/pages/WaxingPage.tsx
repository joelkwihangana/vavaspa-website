import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";

// Assets (Keep your existing imports)
import waxHero from "../assets/services/waxing.webp";
import roomImg from "../assets/feature/intheroom.webp";
import { site, waLink } from "../data/site";

export default function WaxingPage() {
  const whatsappHref = waLink(site.whatsappPrimary, site.whatsappMessage);
  return (
    <div className="bg-white text-zinc-950 selection:bg-brand/10">
      {/* 1. HERO - High Visibility & Desktop-Only CTAs */}
      <section className="relative h-[80vh] flex items-center bg-zinc-950 overflow-hidden">
        <img
          src={waxHero}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          alt="Vava Spa Waxing"
        />

        {/* HIGH-CONTRAST SCRIM: Essential for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-brand uppercase tracking-[0.4em] font-extrabold text-[10px] drop-shadow-sm">
              The Smooth Ritual
            </span>
            <h1 className="mt-4 text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.95] drop-shadow-md">
              Expert care. <br /> Effortless skin.
            </h1>
            <p className="mt-8 max-w-lg text-zinc-200 text-lg font-medium leading-relaxed drop-shadow-sm">
              Experience Kigali’s most discreet waxing service. No shortcuts
              just perfectly smooth results in a sanctuary of calm.
            </p>

            {/* DESKTOP-ONLY CTA: Hidden on mobile (sm/md) */}
            <div className="mt-12 hidden lg:flex gap-4">
              {/* <Button
                size="lg"
                className="rounded-full px-12 font-bold shadow-2xl"
              >
                Request an Appointment
              </Button> */}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 2. THE STANDARDS - Focus on Content Narrative */}
      <section className="py-24 bg-white border-b border-zinc-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
                A higher standard <br /> of hygiene.
              </h2>
              <p className="mt-8 text-zinc-600 leading-relaxed text-lg">
                We follow strict medical-grade protocols. Every room is
                sterilized before your arrival to ensure total safety and peace
                of mind.
              </p>

              <div className="mt-12 space-y-10">
                {[
                  {
                    t: "No Double-Dipping",
                    d: "A fresh applicator for every single pull.",
                  },
                  {
                    t: "Premium Hard Wax",
                    d: "Our wax grips the hair, not the skin, for a 50% gentler experience.",
                  },
                  {
                    t: "Private Suites",
                    d: "Your session takes place in a fully enclosed, sound-treated room.",
                  },
                ].map((item) => (
                  <div key={item.t} className="group">
                    <h4 className="font-bold text-zinc-900 text-xl tracking-tight group-hover:text-brand transition-colors">
                      {item.t}
                    </h4>
                    <p className="text-zinc-500 mt-2 max-w-sm">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="overflow-hidden rounded-[3rem] shadow-2xl bg-zinc-100">
                <img
                  src={roomImg}
                  className="w-full object-cover aspect-[4/5] lg:aspect-square"
                  alt="Sanitized Private Room"
                />
              </div>
              {/* Quality Label - Visible only on Desktop to keep mobile clean */}
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-zinc-50 hidden lg:block">
                <p className="text-4xl font-bold text-brand italic tracking-tighter">
                  "Kigali's <br /> Elite."
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. FINAL CONVERSION - Desktop Only */}
      <section className="py-20 lg:py-32 bg-zinc-50">
        <Container className="text-center">
          <h3 className="text-3xl font-bold tracking-tight">Ready to start?</h3>
          <p className="mt-4 text-zinc-500 max-w-md mx-auto">
            Book your session and we will prepare the room for your specific
            needs.
          </p>

          {/* Hidden on mobile to keep the "narrative" focus */}
          <div className="mt-10 hidden lg:block">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <Button
                size="lg"
                className="px-8 py-6 text-base shadow-2xl transition-all hover:scale-105 active:scale-95"
              >
                Begin Quick Booking
              </Button>
            </a>
          </div>

          <p className="mt-6 text-[10px] font-bold uppercase tracking-widest text-zinc-400 lg:hidden">
            Book or Visit us in Kibagabaga
          </p>
        </Container>
      </section>
    </div>
  );
}
