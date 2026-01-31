import Navbar from "./components/layout/Navbar";
import HeroCarousel from "./components/sections/HeroCarousel";
import BookingSection from "./components/sections/BookingSection";

export default function App() {
  return (
    <div className="bg-bg text-text">
      <Navbar />
      <HeroCarousel />
      <BookingSection />
    </div>
  );
}
