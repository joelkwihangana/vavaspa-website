export const site = {
  name: "Vava Spa",
  city: "Kigali, Rwanda",

  // Primary booking line (WhatsApp)
  whatsappPrimary: "250788440979",
  // Optional secondary number
  whatsappSecondary: "250791746187",

  // Default WhatsApp booking message
  whatsappMessage:
    "Hello Vava Spa, I would like to book a session. Please share available times.",
};

export function waLink(
  phone: string,
  message: string,
  extras?: { service?: string; date?: string; time?: string },
) {
  const parts = [
    message,
    extras?.service ? `Service: ${extras.service}` : "",
    extras?.date ? `Preferred date: ${extras.date}` : "",
    extras?.time ? `Preferred time: ${extras.time}` : "",
  ].filter(Boolean);

  return `https://wa.me/${phone}?text=${encodeURIComponent(parts.join("\n"))}`;
}
