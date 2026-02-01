import GalleryHero from "../components/sections/gallery/GalleryHero";
import GalleryGrid from "../components/sections/gallery/GalleryGrid";

import { galleryItems } from "../data/gallery";

// Pick a strong hero image from your real set.
// If you want, replace this with a dedicated hero image.
import heroImg from "../assets/feature/real-vava.png";

export default function GalleryPage() {
  return (
    <div className="bg-bg text-text">
      <main>
        <GalleryHero image={heroImg} />
        <GalleryGrid items={galleryItems} />
      </main>
    </div>
  );
}
