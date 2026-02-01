import Navbar from "../components/layout/Navbar";
import ServicesHero from "../components/sections/services/ServicesHero";
import ServicesCatalog from "../components/sections/services/ServicesCatalog";

export default function ServicesPage() {
  return (
    <div className="bg-bg text-text">
      <Navbar />
      <main>
        <ServicesHero />
          <ServicesCatalog />
      </main>

    </div>
  );
}
