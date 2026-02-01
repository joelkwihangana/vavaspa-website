import Navbar from "../components/layout/Navbar";
import HeroCarousel from "../components/sections/HeroCarousel";
import BookingSection from "../components/sections/BookingSection";
import SignatureServices from "../components/sections/SignatureServices";
import AboutPreview from "../components/sections/AboutPreview";
import FeatureBand from "../components/sections/FeatureBand";
import DiscoverVava from "../components/sections/DiscoverVava";
import BookingPreview from "../components/sections/BookingPreview";
import Testimonials from "../components/sections/Testimonials";
// import ExperienceAtmosphere from "../components/sections/ExperienceAtmosphere";

export default function HomePage() {
  return (
    <div className="bg-bg text-text">
      <Navbar />
      <HeroCarousel />
      <BookingSection />
      <SignatureServices />
      {/* <ExperienceAtmosphere /> */}
      <AboutPreview />
      <Testimonials />
      <FeatureBand />
      <DiscoverVava />
      <BookingPreview />
     
    </div>
  );
}
