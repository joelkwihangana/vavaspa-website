import massageTreatments from "/src/assets/services/massage.webp";
import spa from "/src/assets/services/spa.webp";

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
        id: "lomi",
        name: "Lomi-Lomi Massage",
        duration: "60 min",
        description:
          "Flowing, rhythmic strokes designed to calm the mind and soften the body with a deeply relaxing pace.",
        goodFor: ["Deep relaxation", "Mind-body reset", "Gentle recovery"],
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
        id: "aromatherapy",
        name: "Aromatherapy",
        duration: "60 min",
        description:
          "A soothing massage using carefully blended essential oils to promote deep relaxation and balance.",
        goodFor: ["Relaxation", "Stress relief", "Mood balance"],
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
        id: "4-hands",
        name: "4 Hands Massage",
        duration: "60 min",
        description:
          "A synchronised treatment performed by two therapists simultaneously, delivering an immersive and deeply relaxing experience.",
        goodFor: ["Deep relaxation", "Full-body coverage", "Special occasions"],
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
        id: "couple",
        name: "Couple Massage",
        duration: "60 min",
        description:
          "A shared calm experience for two, designed for comfort, privacy, and quiet restoration.",
        goodFor: ["Partners", "Special occasions", "Shared relaxation"],
      },
      {
        id: "reflexology",
        name: "Reflexology",
        duration: "60 min",
        description:
          "Foot-focused therapy using pressure points to support relaxation and overall wellbeing.",
        goodFor: ["Stress relief", "Relaxation", "Foot fatigue"],
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
        id: "hot-stone",
        name: "Hot Stone Massage",
        duration: "60 min",
        description:
          "Warm stones combined with massage strokes to soften muscle tension and deepen relaxation.",
        goodFor: ["Deep relaxation", "Muscle softness", "Stress relief"],
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
        duration: "60 min",
        description:
          "A fresh-skin reset with cleansing, care, and a calming finish tailored to your comfort.",
        goodFor: ["Glow", "Skin refresh", "Relaxation"],
      },
      {
        id: "body-scrub",
        name: "Body Scrub",
        duration: "60 min",
        description:
          "Exfoliation and smoothing care that leaves skin soft, clean, and renewed.",
        goodFor: ["Soft skin", "Refresh", "Even texture"],
      },
      {
        id: "moroccan-bath",
        name: "Moroccan Bath",
        duration: "60 min",
        description:
          "A classic cleansing ritual designed to deeply refresh and leave you feeling renewed.",
        goodFor: ["Deep cleanse", "Reset", "Skin refresh"],
      },
      {
        id: "hot-stones-spa",
        name: "Hot Stones",
        duration: "60 min",
        description:
          "Warm volcanic stones placed and moved along the body to melt deep tension and promote profound relaxation.",
        goodFor: ["Deep relaxation", "Muscle softness", "Stress relief"],
      },
      {
        id: "moroccan-massage",
        name: "Moroccan + Massage",
        description:
          "The full Moroccan bath ritual followed by a personalised massage — a complete body reset in one session.",
        goodFor: ["Full-body renewal", "Deep cleanse", "Total relaxation"],
      },
      {
        id: "scrub-massage",
        name: "Scrub + Massage",
        description:
          "Full-body exfoliation combined with a tailored massage for smooth skin and relieved tension.",
        goodFor: ["Smooth skin", "Muscle relief", "Complete renewal"],
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
