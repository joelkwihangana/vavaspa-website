import AboutHero from "../components/sections/about/AboutHero";
import AboutIntro from "../components/sections/about/AboutIntro";
import AboutUnique from "../components/sections/about/AboutUnique";
import AboutJourney from "../components/sections/about/AboutJourney";
import AboutStoryEditorial from "../components/sections/about/AboutStoryEditorial";
import AboutClosingSplit from "../components/sections/about/AboutClosingSplit";
import TeamSection from "../components/sections/team/TeamSection";

export default function AboutPage() {
  return (
    <div className="bg-bg text-text">
      <main>
        <AboutHero />

        <div className="section-tight">
          <AboutIntro />
        </div>

        <div className="section-divider" />

        <div className="section-tight">
          <AboutUnique />
        </div>

        <div className="section-divider" />

        <div className="section-tight">
          <TeamSection />
        </div>

        <div className="section-divider" />

        <div className="section">
          <AboutJourney />
        </div>

        <div className="section-divider" />

        <div className="section-tight">
          <AboutStoryEditorial />
        </div>

        <div className="section-divider" />

        <div className="section-tight safe-bottom">
          <AboutClosingSplit />
        </div>
      </main>
    </div>
  );
}
