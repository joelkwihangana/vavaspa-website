import HeroCarousel from "../components/sections/HeroCarousel";
import SignatureServices from "../components/sections/SignatureServices";
import BookingSection from "../components/sections/BookingSection";
import AboutPreview from "../components/sections/AboutPreview";
import DiscoverVava from "../components/sections/DiscoverVava";
import Testimonials from "../components/sections/Testimonials";
import FeatureBand from "../components/sections/FeatureBand";

export default function HomePage() {
  return (
    <div className="bg-bg text-text">
      <HeroCarousel />
      <SignatureServices />
      <BookingSection />
      <AboutPreview />
      <DiscoverVava />
      <Testimonials />
      <FeatureBand />
    </div>
  );
}
