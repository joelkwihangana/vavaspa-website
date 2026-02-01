// src/data/gallery.ts
// Update the import paths to match your real images.
// Keep them lightweight (jpg/webp) for performance.

import interior1 from "../assets/real/building.jpg";
import interior2 from "../assets/real/stairs.jpg";
import interior3 from "../assets/feature/intheroom.jpg";
import location1 from "../assets/real/sign.jpg";

// Optional: if you have more real photos, add them here.
// import treatment1 from "../assets/real/treatment-1.jpg";
// import team1 from "../assets/real/team-1.jpg";

export type GalleryCategory =
  | "all"
  | "interior"
  | "treatments"
  | "team"
  | "location";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
  title?: string;
  note?: string;
};

export const galleryCategories: Array<{ key: GalleryCategory; label: string }> =
  [
    { key: "all", label: "All" },
    { key: "interior", label: "Interior" },
    { key: "treatments", label: "Treatments" },
    { key: "team", label: "Team" },
    { key: "location", label: "Location" },
  ];

export const galleryItems: GalleryItem[] = [
  {
    id: "interior-1",
    src: interior3,
    alt: "Relaxing treatment room at Vava Spa",
    category: "interior",
    title: "Treatment room",
    note: "Clean, calm, quiet",
  },
  {
    id: "location-1",
    src: location1,
    alt: "Vava Spa sign in Kigali",
    category: "location",
    title: "Find us in Kigali",
    note: "Easy to locate",
  },
  {
    id: "location-2",
    src: interior1,
    alt: "Vava Spa building exterior in Kigali",
    category: "location",
    title: "Exterior",
    note: "Real place, real team",
  },
  {
    id: "interior-2",
    src: interior2,
    alt: "Entrance and stairs at Vava Spa",
    category: "interior",
    title: "Entrance",
    note: "Welcoming arrival",
  },

  // Add more items as you like:
  // {
  //   id: "treat-1",
  //   src: treatment1,
  //   alt: "Massage treatment in progress",
  //   category: "treatments",
  //   title: "Massage",
  //   note: "Professional care",
  // },
  // {
  //   id: "team-1",
  //   src: team1,
  //   alt: "Vava Spa team welcoming guests",
  //   category: "team",
  //   title: "Welcoming team",
  //   note: "Warm and professional",
  // },
];
