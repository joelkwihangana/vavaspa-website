import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ServicesHero from "../components/sections/services/ServicesHero";

export default function ServicesPage() {
  return (
    <div className="bg-bg text-text">
      <Navbar />
      <main>
        <ServicesHero />
        {/* Next features will come here */}
      </main>
      <Footer />
    </div>
  );
}
