import AboutHero from "../components/sections/about/AboutHero";
import AboutIntro from "../components/sections/about/AboutIntro";
import TeamSection from "../components/sections/team/TeamSection";
import AboutJourney from "../components/sections/about/AboutJourney";
import AboutStoryEditorial from "../components/sections/about/AboutStoryEditorial";
import AboutClosingSplit from "../components/sections/about/AboutClosingSplit";

export default function AboutPage() {
  return (
    <div className="bg-bg text-text">
      <main>
        <AboutHero />

        {/* Chapter 1: Identity */}
        <section className="section-tight">
          <AboutIntro />
        </section>

        {/* Chapter 2: Trust (move team up) */}
        <section className="section-tight">
          <TeamSection />
        </section>

        <div className="section-divider" />

        {/* Chapter 3: How we care (progressive disclosure, reduces scroll) */}
        <section className="section-tight">
          <AboutJourney />
        </section>

        <div className="section-divider" />

        {/* Chapter 4: Vision and credibility */}
        <section className="section-tight">
          <AboutStoryEditorial />
        </section>

        {/* Final CTA */}
        <section className="section-tight safe-bottom">
          <AboutClosingSplit />
        </section>
      </main>
    </div>
  );
}
