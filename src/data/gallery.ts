/**
 * gallery.ts — Vava Spa Gallery Data
 *
 * ALL images come from assets/optimized/
 *
 * Category mapping (matches GalleryPage.tsx filter pills exactly):
 *   "interior"   → treatment rooms, indoor spaces, clean rooms
 *   "treatments" → massage-*, massage action, tools, bottles
 *   "team"       → brand shots, professional photos (_EST8734, 20260215_*, icyapa)
 *   "location"   → exterior, building, sign, road, rooftop, stairs
 *
 * Layout hints — used by GalleryPage bento grid logic:
 *   "hero"     → index 0, spans 8 cols (one per page)
 *   "wide"     → landscape, 4:3 or 16:9
 *   "tall"     → portrait, 3:4
 *   "standard" → square or near-square
 *
 * Why explicit layout hints instead of deriving from index?
 * Because when the user filters by category, index resets.
 * The hero slot (index === 0 && filter === "All") is handled in GalleryPage.
 * All other hints are purely visual rhythm — vary them so the grid breathes.
 */

// ─── Imports ──────────────────────────────────────────────────────────────────
// Using Vite static imports so the bundler fingerprints files for cache busting.
// If you were using /public/, you'd use string paths instead.

// Brand / Team shots
import team1 from "../assets/Last/vava4.webp";
import team2 from "../assets/real/Team1.webp";
// Location / Exterior
import building       from "../assets/optimized/building.webp";
import ext1           from "../assets/optimized/Ext1.webp";
import ext2           from "../assets/optimized/Ext2.webp";
import ext3           from "../assets/optimized/Ext3.webp";
import ext4           from "../assets/optimized/ext4.webp";
import ext5           from "../assets/optimized/ext5.webp";
import ext6           from "../assets/optimized/Ext6.webp";
import ext7           from "../assets/optimized/Ext7.webp";
import mucyumba1      from "../assets/optimized/mucyumba1.webp";
import roadToVava     from "../assets/optimized/road-to-vava.webp";
import rooftop        from "../assets/optimized/rooftop.webp";
import sign           from "../assets/optimized/sign.webp";
import stairsToRoom   from "../assets/optimized/stairs-to-the-room.webp";
import stairs         from "../assets/optimized/stairs.webp";

// Reception (maps to "interior" category — it's an indoor space)
import reception      from "../assets/optimized/reception.webp";
import ameza          from "../assets/optimized/ameza.webp";

// Interior rooms
import cleanRooms     from "../assets/optimized/cleanRooms.webp";
import int1           from "../assets/optimized/Int1.webp";
import int2           from "../assets/optimized/Int2.webp";
import int3           from "../assets/optimized/int3.webp";
import int4           from "../assets/optimized/int4.webp";
import int6           from "../assets/optimized/int6.webp";
import int7           from "../assets/optimized/int7.webp";
import int8           from "../assets/optimized/int8.webp";
import int9           from "../assets/optimized/int9.webp";
import int10          from "../assets/optimized/int10.webp";
import int11          from "../assets/optimized/int11.webp";
import int12          from "../assets/optimized/int12.webp";
import int13          from "../assets/optimized/int13.webp";
import int16          from "../assets/optimized/int16.webp";
import int17          from "../assets/optimized/int17.webp";
import int18          from "../assets/optimized/int18.webp";
import int19          from "../assets/optimized/int19.webp";
import int20          from "../assets/optimized/int20.webp";
import int21          from "../assets/optimized/int21.webp";
import int22          from "../assets/optimized/int22.webp";
import int23          from "../assets/optimized/int23.webp";
import int24          from "../assets/optimized/int24.webp";
import int25          from "../assets/optimized/int25.webp";
import int26          from "../assets/optimized/int26.webp";
import int27          from "../assets/optimized/int27.webp";
import int29          from "../assets/optimized/int29.webp";
import inte15         from "../assets/optimized/inte15.webp";
import intheroom      from "../assets/optimized/intheroom.webp";

// Treatments
import massageBottles       from "../assets/optimized/massage-bottles.webp";
import massageDecoration    from "../assets/optimized/massage-decoration-1.webp";
import massageInAction      from "../assets/optimized/massage-in-action.webp";
import massageReady         from "../assets/optimized/massage-ready.webp";
import massageRestRoom      from "../assets/optimized/massage-rest-room.webp";
import massageRoomOneBed    from "../assets/optimized/massage-room-one-bed.webp";
import massageRoomTwoBeds   from "../assets/optimized/massage-room-two-beds.webp";

// ─── Types ────────────────────────────────────────────────────────────────────
// Keep these identical to what GalleryPage.tsx already imports/uses

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

// ─── Gallery Items ────────────────────────────────────────────────────────────
// Order matters — index 0 is the hero when filter === "All"
// Rhythm: hero → wide → tall → standard → standard → tall → wide → ...
// This creates visual breathing in the bento grid.

export const galleryItems: GalleryItem[] = [

  // ── HERO (index 0) — only shown as hero when filter === "All" ──────────────
  {
    id: "g001",
    src: intheroom,
    alt: "Serene treatment room bathed in natural light",
    title: "Sanctuary Spaces",
    category: "interior",
    layoutHint: "hero",
    note: "Where silence becomes an experience",
    aspectRatio: 16 / 9,
  },

  // ── LOCATION ───────────────────────────────────────────────────────────────
  {
    id: "g002",
    src: building,
    alt: "Vava Spa building exterior",
    title: "Find Your Sanctuary",
    category: "location",
    layoutHint: "wide",
    note: "Kiyovu, Kigali",
    aspectRatio: 4 / 3,
  },
  {
    id: "g003",
    src: sign,
    alt: "Vava Spa entrance sign",
    title: "Welcome Home",
    category: "location",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g004",
    src: roadToVava,
    alt: "The road leading to Vava Spa",
    title: "The Journey",
    category: "location",
    layoutHint: "wide",
    note: "Every path leads somewhere beautiful",
    aspectRatio: 4 / 3,
  },
  {
    id: "g005",
    src: rooftop,
    alt: "Panoramic rooftop view over Kigali",
    title: "Above the City",
    category: "location",
    layoutHint: "wide",
    note: "Kigali from a different perspective",
    aspectRatio: 16 / 9,
  },
  {
    id: "g006",
    src: ext1,
    alt: "Spa exterior view 1",
    title: "First Impressions",
    category: "location",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g007",
    src: ext2,
    alt: "Spa exterior view 2",
    title: "The Grounds",
    category: "location",
    layoutHint: "tall",
    aspectRatio: 3 / 4,
  },
  {
    id: "g008",
    src: ext3,
    alt: "Spa exterior view 3",
    title: "Arrival",
    category: "location",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g009",
    src: ext4,
    alt: "Exterior detail 4",
    title: "Garden Paths",
    category: "location",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g010",
    src: ext5,
    alt: "Exterior detail 5",
    title: "Open Air",
    category: "location",
    layoutHint: "wide",
    aspectRatio: 4 / 3,
  },
  {
    id: "g011",
    src: ext6,
    alt: "Exterior view 6",
    title: "Natural Setting",
    category: "location",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g012",
    src: ext7,
    alt: "Exterior view 7",
    title: "Serenity Outside",
    category: "location",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g013",
    src: mucyumba1,
    alt: "Spa garden and grounds",
    title: "Garden Retreat",
    category: "location",
    layoutHint: "wide",
    aspectRatio: 4 / 3,
  },
  {
    id: "g014",
    src: stairsToRoom,
    alt: "Stairs leading to treatment rooms",
    title: "The Ascent",
    category: "location",
    layoutHint: "tall",
    note: "Every step towards tranquility",
    aspectRatio: 3 / 4,
  },
  {
    id: "g015",
    src: stairs,
    alt: "Spa staircase detail",
    title: "Journey Within",
    category: "location",
    layoutHint: "standard",
    aspectRatio: 1,
  },

  // ── INTERIOR ───────────────────────────────────────────────────────────────
  {
    id: "g016",
    src: reception,
    alt: "Vava Spa reception area",
    title: "A Warm Welcome",
    category: "interior",
    layoutHint: "wide",
    note: "Your journey begins here",
    aspectRatio: 4 / 3,
  },
  {
    id: "g017",
    src: ameza,
    alt: "Consultation desk and seating",
    title: "The Consultation",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g018",
    src: cleanRooms,
    alt: "Immaculately prepared treatment rooms",
    title: "Prepared for You",
    category: "interior",
    layoutHint: "wide",
    note: "Pristine. Always.",
    aspectRatio: 4 / 3,
  },
  {
    id: "g019",
    src: int1,
    alt: "Treatment room interior",
    title: "Room One",
    category: "interior",
    layoutHint: "tall",
    aspectRatio: 3 / 4,
  },
  {
    id: "g020",
    src: int2,
    alt: "Treatment room with soft lighting",
    title: "Soft Light",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g021",
    src: int3,
    alt: "Interior room detail",
    title: "Details Matter",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g022",
    src: int4,
    alt: "Interior room 4",
    title: "The Quiet Room",
    category: "interior",
    layoutHint: "tall",
    aspectRatio: 3 / 4,
  },
  {
    id: "g023",
    src: int6,
    alt: "Interior room 6",
    title: "Stillness",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g024",
    src: int7,
    alt: "Interior room 7",
    title: "Room Seven",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g025",
    src: int8,
    alt: "Interior room 8",
    title: "Green Calm",
    category: "interior",
    layoutHint: "wide",
    aspectRatio: 4 / 3,
  },
  {
    id: "g026",
    src: int9,
    alt: "Interior room 9",
    title: "Natural Tones",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g027",
    src: int10,
    alt: "Interior room 10",
    title: "Balanced Space",
    category: "interior",
    layoutHint: "tall",
    aspectRatio: 3 / 4,
  },
  {
    id: "g028",
    src: int11,
    alt: "Interior room 11",
    title: "Curated Comfort",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g029",
    src: int12,
    alt: "Interior room 12",
    title: "Restful Corner",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g030",
    src: int13,
    alt: "Interior room 13",
    title: "Warm Interior",
    category: "interior",
    layoutHint: "wide",
    aspectRatio: 4 / 3,
  },
  {
    id: "g031",
    src: int16,
    alt: "Interior room 16",
    title: "The Sixteenth",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g032",
    src: int17,
    alt: "Interior room 17",
    title: "Symmetry",
    category: "interior",
    layoutHint: "tall",
    aspectRatio: 3 / 4,
  },
  {
    id: "g033",
    src: int18,
    alt: "Interior room 18",
    title: "Layered Light",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g034",
    src: int19,
    alt: "Interior room 19",
    title: "Tranquil Space",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g035",
    src: int20,
    alt: "Interior room 20",
    title: "Open Calm",
    category: "interior",
    layoutHint: "wide",
    aspectRatio: 4 / 3,
  },
  {
    id: "g036",
    src: int21,
    alt: "Interior room 21",
    title: "Warm Walls",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g037",
    src: int22,
    alt: "Interior room 22",
    title: "The Nook",
    category: "interior",
    layoutHint: "tall",
    aspectRatio: 3 / 4,
  },
  {
    id: "g038",
    src: int23,
    alt: "Interior room 23",
    title: "Minimalist Room",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g039",
    src: int24,
    alt: "Interior room 24",
    title: "Soft Sanctuary",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g040",
    src: int25,
    alt: "Interior room 25",
    title: "Gentle Light",
    category: "interior",
    layoutHint: "wide",
    aspectRatio: 4 / 3,
  },
  {
    id: "g041",
    src: int26,
    alt: "Interior room 26",
    title: "Breathe",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g042",
    src: int27,
    alt: "Interior room 27",
    title: "Quiet Corners",
    category: "interior",
    layoutHint: "tall",
    aspectRatio: 3 / 4,
  },
  {
    id: "g043",
    src: int29,
    alt: "Interior room 29",
    title: "Room Twenty-Nine",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g044",
    src: inte15,
    alt: "Interior room 15",
    title: "Earthy Tones",
    category: "interior",
    layoutHint: "standard",
    aspectRatio: 1,
  },

  // ── TREATMENTS ─────────────────────────────────────────────────────────────
  {
    id: "g045",
    src: massageInAction,
    alt: "Therapist performing massage treatment",
    title: "The Art of Touch",
    category: "treatments",
    layoutHint: "wide",
    note: "Precision meets care",
    aspectRatio: 4 / 3,
  },
  {
    id: "g046",
    src: massageReady,
    alt: "Massage table prepared and ready",
    title: "Ready for You",
    category: "treatments",
    layoutHint: "tall",
    note: "Every detail prepared with intention",
    aspectRatio: 3 / 4,
  },
  {
    id: "g047",
    src: massageRoomOneBed,
    alt: "Single bed massage room",
    title: "Private Ritual",
    category: "treatments",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g048",
    src: massageRoomTwoBeds,
    alt: "Couples massage room with two beds",
    title: "Together in Silence",
    category: "treatments",
    layoutHint: "wide",
    note: "The couples experience",
    aspectRatio: 4 / 3,
  },
  {
    id: "g049",
    src: massageRestRoom,
    alt: "Rest room after massage session",
    title: "After the Session",
    category: "treatments",
    layoutHint: "standard",
    aspectRatio: 1,
  },
  {
    id: "g050",
    src: massageDecoration,
    alt: "Treatment room with rose petal decoration",
    title: "Thoughtful Details",
    category: "treatments",
    layoutHint: "tall",
    note: "The details that make the difference",
    aspectRatio: 3 / 4,
  },
  {
    id: "g051",
    src: massageBottles,
    alt: "Curated massage oil collection",
    title: "The Essentials",
    category: "treatments",
    layoutHint: "standard",
    note: "Sourced for your skin",
    aspectRatio: 1,
  },

  // ── TEAM / BRAND ───────────────────────────────────────────────────────────
  // "team" category in GalleryPage — these are brand identity shots
  {
    id: "g052",
    src: team1,
    alt: "Vava Spa full brand visual",
    title: "The Vava Vision",
    category: "team",
    layoutHint: "wide",
    note: "More than a spa — a philosophy",
    aspectRatio: 16 / 9,
  },
  {
    id: "g053",
    src: team2,
    alt: "Best Treatment",
    title: "Team",
    category: "team",
    layoutHint: "tall",
    note: "Our signature African ritual",
    aspectRatio: 3 / 4,
  },
 
];

// ─── Category Metadata ────────────────────────────────────────────────────────
// Counts are computed from the source array — never manually synced.
// This pattern is the right call: single source of truth.

export const categoryMetadata: Record<Category, { label: string; count: number }> = {
  all:        { label: "All",        count: galleryItems.length },
  interior:   { label: "Interior",   count: galleryItems.filter((i) => i.category === "interior").length },
  treatments: { label: "Treatments", count: galleryItems.filter((i) => i.category === "treatments").length },
  team:       { label: "Team",       count: galleryItems.filter((i) => i.category === "team").length },
  location:   { label: "Location",   count: galleryItems.filter((i) => i.category === "location").length },
};