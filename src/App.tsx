import Navbar from "./components/layout/Navbar";
import HeroCarousel from "./components/sections/HeroCarousel";

export default function App() {
  return (
    <div className="bg-bg text-text">
      <Navbar />
      <HeroCarousel />
    </div>
  );
}
