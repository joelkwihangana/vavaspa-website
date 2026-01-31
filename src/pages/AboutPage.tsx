import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import AboutHero from "../components/sections/about/AboutHero";
import AboutIntro from "../components/sections/about/AboutIntro";
import AboutUnique from "../components/sections/about/AboutUnique";
import AboutValues from "../components/sections/about/AboutValues";
import AboutStoryBand from "../components/sections/about/AboutStoryBand";
import AboutApproachBand from "../components/sections/about/AboutApproachBand";
import AboutCta from "../components/sections/about/AboutCta";
import AboutStoryEditorial from "../components/sections/about/AboutStoryEditorial";

export default function AboutPage() {
  return (
    <div className="bg-bg text-text">
      <Navbar />
      <main>
        <AboutHero />
        <AboutIntro />
        <AboutUnique />
        <AboutStoryEditorial />
        <AboutValues />
        <AboutStoryBand />
        <AboutApproachBand />
        <AboutCta />
      </main>
      <Footer />
    </div>
  );
}
