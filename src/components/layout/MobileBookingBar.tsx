import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, ClipboardList } from "lucide-react";
import Button from "../ui/Button";
import Container from "./Container";

const WHATSAPP_NUMBER = "250788440979";
const DEFAULT_MESSAGE =
  "Hello Vava Spa, I’d like to book a session. Please share available time options.";

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
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 bottom-0 z-[60] sm:hidden"
    >
      <div className="absolute inset-0 border-t border-border bg-bg/88 backdrop-blur" />

      <Container className="relative py-3">
        <div className="grid grid-cols-2 gap-3">
          <a href="/contact#quick-booking" aria-label="Open Quick Booking form">
            <Button size="lg" className="w-full">
              <span className="inline-flex items-center justify-center gap-2">
                <ClipboardList size={18} />
                Book Now
              </span>
            </Button>
          </a>

          <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
            <Button variant="secondary" size="lg" className="w-full">
              <span className="inline-flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                WhatsApp
              </span>
            </Button>
          </a>
        </div>

        <p className="mt-2 text-center text-[11px] text-muted">
          Quick Booking helps us prepare your session before WhatsApp.
        </p>
      </Container>
    </motion.div>
  );
}
