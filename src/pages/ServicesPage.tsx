import ServicesHero from "../components/sections/services/ServicesHero";
import ServicesCatalog from "../components/sections/services/ServicesCatalog";
import ServicesMenu from "../components/sections/services/ServicesMenu";
import ServicesCtaBand from "../components/sections/services/ServicesCtaBand";

export default function ServicesPage() {
  return (
    <div className="bg-bg text-text">
      <main>
        <ServicesHero />
        <ServicesCatalog />
        <ServicesMenu />
        <ServicesCtaBand />
      </main>
    </div>
  );
}
