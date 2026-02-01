import ServicesHero from "../components/sections/services/ServicesHero";
import ServicesCatalog from "../components/sections/services/ServicesCatalog";
import ServicesCtaBand from "../components/sections/services/ServicesCtaBand";

export default function ServicesPage() {
  return (
    <div className="bg-bg text-text">
      <main>
        <ServicesHero />
        <ServicesCatalog />
        <ServicesCtaBand />
      </main>
    </div>
  );
}
