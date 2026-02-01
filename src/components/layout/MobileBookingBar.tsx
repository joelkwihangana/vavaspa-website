import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, CalendarDays } from "lucide-react";
import Button from "../ui/Button";
import Container from "./Container";

const WHATSAPP_NUMBER = "250791746187"; // update if needed
const DEFAULT_MESSAGE =
  "Hello Vava Spa, I would like to book a session. Please share available times.";

function buildWhatsAppLink() {
  const msg = encodeURIComponent(DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

export default function MobileBookingBar() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { y: 18, opacity: 0 }}
      animate={reduce ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed inset-x-0 bottom-0 z-[60] sm:hidden"
    >
      <div className="absolute inset-0 bg-bg/85 backdrop-blur border-t border-border" />

      <Container className="relative py-3">
        <div className="grid grid-cols-2 gap-3">
          <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
            <Button size="lg" className="w-full">
              <span className="inline-flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                WhatsApp
              </span>
            </Button>
          </a>

          <a href="/contact#booking">
            <Button variant="secondary" size="lg" className="w-full">
              <span className="inline-flex items-center justify-center gap-2">
                <CalendarDays size={18} />
                Request
              </span>
            </Button>
          </a>
        </div>

        <p className="mt-2 text-[11px] text-muted text-center">
          Fast response on WhatsApp. Or request availability through the form.
        </p>
      </Container>
    </motion.div>
  );
}
