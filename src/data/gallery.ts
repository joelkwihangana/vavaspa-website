import interior1 from "../assets/real/building.webp";
import interior2 from "../assets/real/stairs.webp";
import interior3 from "../assets/feature/intheroom.webp";
import location1 from "../assets/real/sign.webp";
import treatment1 from "../assets/real/Treatment1.webp";
import team1 from "../assets/real/Team1.webp";
import team2 from "../assets/Last/vava4.webp";
import team3 from "../assets/Last/vava5.webp";
import team4 from "../assets/Last/Vava1.webp";
import chambre from "../assets/real/chambre.webp";
import chamber from "../assets/real/chamber.webp";

export type LayoutHint = "hero" | "wide" | "tall" | "standard";
export type Category = "all" | "interior" | "treatments" | "team" | "location";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: Exclude<Category, "all">;
  layoutHint: LayoutHint;
  note?: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g001",
    src: interior3,
    alt: "Serene treatment room with natural lighting",
    title: "Sanctuary Spaces",
    category: "interior",
    layoutHint: "hero",
    note: "Where silence becomes an experience",
    aspectRatio: 16 / 9,
  },

  {
    id: "g002",
    src: interior1,
    alt: "Minimalist spa lounge area",
    title: "The Lounge",
    category: "interior",
    layoutHint: "wide",
    aspectRatio: 4 / 3,
  },
  {
    id: "g003",
    src: interior2,
    alt: "Rustic wooden staircase",
    title: "Journey Within",
    category: "interior",
    layoutHint: "tall",
    note: "Every step towards tranquility",
    aspectRatio: 3 / 4,
  },
   {
    id: "g004",
    src: chambre,
    alt: "Silence in chamber",
    title: "Silence in chamber",
    category: "interior",
    layoutHint: "tall",
    note: "Moment of relaxation",
    aspectRatio: 3 / 4,
  },
  {
    id: "g005",
    src: chamber,
    alt: "Feel Renewed",
    title: "Feel Renewed",
    category: "interior",
    layoutHint: "tall",
    note: "Moment of relaxation",
    aspectRatio: 3 / 4,
  },


  {
    id: "g004",
    src: team2,
    alt: "Welcoming reception area detail",
    title: "First Impressions",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },

  {
    id: "g005",
    src: treatment1,
    alt: "Hot stone massage therapy",
    title: "The Art of Touch",
    category: "treatments",
    layoutHint: "tall",
    note: "Precision meets care",
    aspectRatio: 3 / 4,
  },
  {
    id: "g006",
    src: team3,
    alt: "Deep tissue massage session",
    title: "Tension Release",
    category: "treatments",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g007",
    src: team4,
    alt: "Facial treatment preparation",
    title: "Renewal Ritual",
    category: "treatments",
    layoutHint: "standard",
    aspectRatio: 1,
  },

  {
    id: "g008",
    src: team1,
    alt: "Professional spa therapists",
    title: "Your Wellness Team",
    category: "team",
    layoutHint: "wide",
    note: "Certified, caring, committed",
    aspectRatio: 4 / 3,
  },
  {
    id: "g009",
    src: team2,
    alt: "Team member portrait",
    title: "Meet the Experts",
    category: "team",
    layoutHint: "standard",
    aspectRatio: 1,
  },

  {
    id: "g010",
    src: interior1,
    alt: "Vava Spa exterior building",
    title: "Find Your Sanctuary",
    category: "location",
    layoutHint: "wide",
    note: "KN 36 Ave, Kiyovu, Kigali",
    aspectRatio: 16 / 10,
  },
  {
    id: "g011",
    src: location1,
    alt: "Vava Spa entrance signage",
    title: "Welcome Home",
    category: "location",
    layoutHint: "standard",
    aspectRatio: 1,
  },

  {
    id: "g012",
    src: interior3,
    alt: "Tranquil ambiance detail",
    title: "Details Matter",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g013",
    src: team3,
    alt: "Spa amenities corner",
    title: "Thoughtful Touches",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },
];

export const categoryMetadata: Record<
  Category,
  { label: string; count: number }
> = {
  all: { label: "All", count: galleryItems.length },
  interior: {
    label: "Interior",
    count: galleryItems.filter((i) => i.category === "interior").length,
  },
  treatments: {
    label: "Treatments",
    count: galleryItems.filter((i) => i.category === "treatments").length,
  },
  team: {
    label: "Team",
    count: galleryItems.filter((i) => i.category === "team").length,
  },
  location: {
    label: "Location",
    count: galleryItems.filter((i) => i.category === "location").length,
  },
};
