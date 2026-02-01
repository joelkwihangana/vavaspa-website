import { motion, useReducedMotion } from "framer-motion";
import Container from "../../layout/Container";

type Props = {
  title?: string;
  subtitle?: string;
  image: string;
};

export default function GalleryHero({
  title = "Gallery",
  subtitle = "Real moments from Vava Spa. Clean rooms, calm atmosphere, and professional care in Kigali.",
  image,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Vava Spa gallery hero"
          className="h-[52vh] w-full object-cover sm:h-[58vh]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
      </div>

      <Container className="relative">
        <div className="flex min-h-[52vh] items-end pb-10 sm:min-h-[58vh] sm:pb-14">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/75">
              Vava Spa
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg leading-relaxed">
              {subtitle}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur">
                Real photos
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur">
                Kigali
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur">
                Clean rooms
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
