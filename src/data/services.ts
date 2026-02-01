import massageTreatments from "/src/assets/services/massage.jpg";
import spa from "/src/assets/services/spa.jpg";

export type ServiceCategory = "massage" | "spa";

export type ServiceItem = {
  id: string;
  name: string;
  description: string;
  duration?: string;
  goodFor?: string[];
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
    image: massageTreatments,
    highlights: ["Deep relaxation", "Professional technique", "Quiet rooms"],
    items: [
      {
        id: "swedish",
        name: "Swedish Massage",
        duration: "60 min",
        description:
          "A classic full-body massage to relax muscles, improve circulation, and reset the nervous system.",
        goodFor: [
          "Stress relief",
          "General relaxation",
          "Light muscle tension",
        ],
      },
      {
        id: "deep-tissue",
        name: "Deep Tissue Massage",
        duration: "60 min",
        description:
          "Focused pressure to release deeper tension points and improve mobility in tight muscle groups.",
        goodFor: ["Chronic tension", "Stiffness", "Posture-related soreness"],
      },
      {
        id: "thai",
        name: "Thai Massage",
        duration: "60 min",
        description:
          "A stretch-based massage that combines pressure and assisted movement to improve flexibility and ease tension.",
        goodFor: ["Flexibility", "Full-body reset", "Tight hips/back"],
      },
      {
        id: "lomi",
        name: "Lomi-Lomi Massage",
        duration: "60 min",
        description:
          "Flowing, rhythmic strokes designed to calm the mind and soften the body with a deeply relaxing pace.",
        goodFor: ["Deep relaxation", "Mind-body reset", "Gentle recovery"],
      },
      {
        id: "shiatsu",
        name: "Shiatsu Massage",
        duration: "60 min",
        description:
          "Pressure-point therapy that supports circulation, reduces tension, and encourages balanced energy.",
        goodFor: ["Tension release", "Stress", "Neck/shoulder tightness"],
      },
      {
        id: "ayurvedic",
        name: "Ayurvedic Massage",
        duration: "60 min",
        description:
          "A restorative approach inspired by traditional wellness practices, focused on calming and balance.",
        goodFor: ["Relaxation", "Recovery", "Overall wellbeing"],
      },
      {
        id: "back-neck",
        name: "Back, Head, Neck & Shoulder Massage",
        duration: "45 min",
        description:
          "Targeted work for the areas where tension collects most. Perfect for busy weeks and screen fatigue.",
        goodFor: [
          "Head/neck tension",
          "Office fatigue",
          "Upper-back tightness",
        ],
      },
      {
        id: "reflexology",
        name: "Reflexology",
        duration: "45 min",
        description:
          "Foot-focused therapy using pressure points to support relaxation and overall wellbeing.",
        goodFor: ["Stress relief", "Relaxation", "Foot fatigue"],
      },
      {
        id: "hot-stone",
        name: "Hot Stone Massage",
        duration: "60 min",
        description:
          "Warm stones combined with massage strokes to soften muscle tension and deepen relaxation.",
        goodFor: ["Deep relaxation", "Muscle softness", "Stress relief"],
      },
      {
        id: "couple",
        name: "Couple Massage",
        duration: "60 min",
        description:
          "A shared calm experience for two, designed for comfort, privacy, and quiet restoration.",
        goodFor: ["Partners", "Special occasions", "Shared relaxation"],
      },
    ],
  },

  spa: {
    category: "spa",
    title: "Spa Services",
    subtitle:
      "Clean, gentle, professional. Skin and body care designed to renew confidence.",
    image: spa,
    highlights: ["Clean & hygienic", "Gentle care", "Discreet service"],
    items: [
      {
        id: "facial",
        name: "Facial Treatment",
        description:
          "A fresh-skin reset with cleansing, care, and a calming finish tailored to your comfort.",
        goodFor: ["Glow", "Skin refresh", "Relaxation"],
      },
      {
        id: "body-scrub",
        name: "Body Scrub",
        description:
          "Exfoliation and smoothing care that leaves skin soft, clean, and renewed.",
        goodFor: ["Soft skin", "Refresh", "Even texture"],
      },
      {
        id: "moroccan-bath",
        name: "Moroccan Bath",
        description:
          "A classic cleansing ritual designed to deeply refresh and leave you feeling renewed.",
        goodFor: ["Deep cleanse", "Reset", "Skin refresh"],
      },
      {
        id: "waxing",
        name: "Waxing Services",
        description:
          "Clean, discreet, and professional service with a focus on hygiene and comfort.",
        goodFor: ["Smooth results", "Hygienic care", "Discreet service"],
      },
    ],
  },
};
