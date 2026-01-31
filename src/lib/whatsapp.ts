type WhatsAppPayload = {
  phoneE164: string; // e.g. "2507XXXXXXXX"
  name?: string;
  service?: string;
  date?: string;
  time?: string;
  message?: string;
};

export function buildWhatsAppLink(payload: WhatsAppPayload) {
  const lines: string[] = [];

  lines.push("Hello Vava Spa, I’d like to book a session.");
  if (payload.name) lines.push(`Name: ${payload.name}`);
  if (payload.service) lines.push(`Service: ${payload.service}`);
  if (payload.date) lines.push(`Preferred date: ${payload.date}`);
  if (payload.time) lines.push(`Preferred time: ${payload.time}`);
  if (payload.message) lines.push(`Notes: ${payload.message}`);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${payload.phoneE164}?text=${text}`;
}
