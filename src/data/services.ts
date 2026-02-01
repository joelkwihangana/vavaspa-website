export type ServiceCategory = "massage" | "spa";

export type ServiceItem = {
  id: string;
  name: string;
  description?: string;
  duration?: string;
};

export type ServiceCatalog = {
  category: ServiceCategory;
  title: string;
  subtitle: string;
  image: string;
  highlights: string[];
  items: ServiceItem[];
};

export const SERVICES: Record<ServiceCategory, ServiceCatalog> = {
  massage: {
    category: "massage",
    title: "Massage Treatments",
    subtitle:
      "Release tension. Restore calm. Treatments guided by comfort, not the clock.",
    image: "/src/assets/services/massage.jpg",
    highlights: ["Deep relaxation", "Professional technique", "Quiet rooms"],
    items: [
      { id: "swedish", name: "Swedish Massage", duration: "60 min" },
      { id: "deep-tissue", name: "Deep Tissue Massage", duration: "60 min" },
      { id: "thai", name: "Thai Massage", duration: "60 min" },
      { id: "lomi", name: "Lomi-Lomi Massage", duration: "60 min" },
      { id: "shiatsu", name: "Shiatsu Massage", duration: "60 min" },
      { id: "ayurvedic", name: "Ayurvedic Massage", duration: "60 min" },
      { id: "back-neck", name: "Back, Head, Neck & Shoulder Massage", duration: "45 min" },
      { id: "reflexology", name: "Reflexology", duration: "45 min" },
      { id: "hot-stone", name: "Hot Stone Massage", duration: "60 min" },
      { id: "couple", name: "Couple Massage", duration: "60 min" },
    ],
  },

  spa: {
    category: "spa",
    title: "Spa Services",
    subtitle:
      "Clean, gentle, professional. Skin and body care designed to renew confidence.",
    image: "/src/assets/services/spa.jpg",
    highlights: ["Clean & hygienic", "Gentle care", "Discreet service"],
    items: [
      { id: "facial", name: "Facial Treatment" },
      { id: "body-scrub", name: "Body Scrub" },
      { id: "moroccan-bath", name: "Moroccan Bath" },
      { id: "waxing", name: "Waxing Services" },
    ],
  },
};
