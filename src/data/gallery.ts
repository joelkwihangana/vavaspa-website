import interior1 from "../assets/real/building.webp";
import interior2 from "../assets/real/stairs.webp";
import interior3 from "../assets/feature/intheroom.webp";
import location1 from "../assets/real/sign.webp";
import treatment1 from "../assets/real/Treatment1.webp";
import team1 from "../assets/real/Team1.webp";
import team2 from "../assets/Last/vava4.webp";
import team3 from "../assets/Last/vava5.webp";
import team4 from "../assets/Last/Vava1.webp";

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
  {
    id: "treat-1",
    src: treatment1,
    alt: "Massage treatment in progress",
    category: "treatments",
    title: "Massage",
    note: "Professional care",
  },
   {
    id: "team-1",
    src: team1,
    alt: "Vava Spa team welcoming guests",
    category: "team",
    title: "Welcoming team",
    note: "Warm and professional",
  },
   {
    id: "team-2",
    src: team2,
    alt: "Vava Spa team welcoming guests",
    category: "team",
    title: "Welcoming team",
    note: "Warm and professional",
  },
  {
    id: "team-3",
    src: team3,
    alt: "Vava Spa team welcoming guests",
    category: "team",
    title: "Welcoming team",
    note: "Warm and professional",
  },
    {
    id: "team-3",
    src: team4,
    alt: "Vava Spa team welcoming guests",
    category: "team",
    title: "Welcoming team",
    note: "Warm and professional",
  },
];
