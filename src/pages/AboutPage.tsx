import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import AboutHero from "../components/sections/about/AboutHero";
import AboutIntro from "../components/sections/about/AboutIntro";
import AboutUnique from "../components/sections/about/AboutUnique";
import AboutJourney from "../components/sections/about/AboutJourney";
import AboutApproachBand from "../components/sections/about/AboutApproachBand";
import AboutStoryEditorial from "../components/sections/about/AboutStoryEditorial";
import AboutClosingSplit from "../components/sections/about/AboutClosingSplit";
import AboutCta from "../components/sections/about/AboutCta";
import TeamSection from "../components/sections/team/TeamSection";

export default function AboutPage() {
  return (
    <div className="bg-bg text-text">
      <Navbar />
      <main>
        <AboutHero />
        <AboutIntro />
        <AboutUnique />
        <TeamSection />
        <AboutJourney />
        <AboutApproachBand />
        <AboutStoryEditorial />
        <AboutClosingSplit />
        <AboutCta />
      </main>
      <Footer />
    </div>
  );
}
