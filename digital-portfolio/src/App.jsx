import React from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import ZoroSanjiAnimation from './components/ZoroSanjiAnimation';
import Footer from './components/Footer';
import ChopperMascot from './components/ChopperMascot';
import NamiCompanion from './components/NamiCompanion';
import ShipBackground from './components/ShipBackground';

function App() {
  const {
    personal,
    about,
    skills,
    projects,
    experience,
    achievements,
    contact,
  } = portfolioData;

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#050d1a] text-[#F5ECD7] flex flex-col">
      {/* Sticky Nautical Navigation Bar */}
      <Navbar personal={personal} />

      {/* Main Adventure Content */}
      <main className="relative flex-grow">
        {/* Decorative Thousand Sunny & Going Merry Background Layer */}
        <ShipBackground />

        <HeroSection personal={personal} />
        <AboutSection about={about} personal={personal} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experience={experience} />
        <AchievementsSection achievements={achievements} />
        <ContactSection contact={contact} personal={personal} />
      </main>

      {/* Zoro vs Sanji Playful Rivalry Animation above Footer */}
      <ZoroSanjiAnimation gifSrc="/images/zoro-sanji.gif" enabled={true} />

      {/* Grand Line Footer */}
      <Footer personal={personal} />

      {/* Floating Nami Navigator Companion (Right Edge, Above Chopper) */}
      <NamiCompanion gifSrc="/images/nami.gif" enabled={true} />

      {/* Floating Tony Tony Chopper Mascot (Bottom-Right Corner) */}
      <ChopperMascot gifSrc="/images/chopper.gif" enabled={true} />
    </div>
  );
}

export default App;
