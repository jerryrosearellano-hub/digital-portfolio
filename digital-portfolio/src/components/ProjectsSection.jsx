import React, { useState } from 'react';
import {
  PirateShipIcon,
  CompassRoseIcon,
  TreasureChestIcon,
  AnchorIcon,
} from './NauticalIcons';
import PimaGallery, {
  PimaHeroPreview,
  PimaTechPill,
} from './PimaGallery';

export default function ProjectsSection({ projects }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const featuredProject = projects.find((p) => p.featured) || projects[0];

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-28 bg-[#050E1D] overflow-hidden border-t border-[#D4AF37]/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono-code uppercase tracking-widest mb-3">
            <PirateShipIcon className="w-5 h-5" />
            <span>Charted Islands • Chapter III</span>
          </div>
          <h2 className="font-pirate text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5ECD7] tracking-wide">
            Featured Capstone Project
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9FB3C8]">
            Showcasing my flagship BS Information Technology capstone project—{' '}
            <strong className="text-[#D4AF37]">PIMA Guitars</strong>
          </p>
        </div>

        {/* FEATURED CAPSTONE ISLAND: PIMA GUITARS */}
        {featuredProject && (
          <article className="relative rounded-2xl bg-gradient-to-br from-[#0D2342] via-[#09182E] to-[#061020] border-2 border-[#D4AF37] p-6 sm:p-9 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
            {/* Top Island Coordinate Ribbon */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-[#D4AF37]/30">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-lg bg-[#C81D25] text-[#F5ECD7] font-pirate font-bold text-xs sm:text-sm uppercase tracking-wider border border-[#D4AF37]">
                  {featuredProject.islandNumber}
                </span>
                <span className="text-xs font-mono-code text-[#D4AF37] hidden sm:inline">
                  {featuredProject.coordinates}
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/50 text-xs font-mono-code text-[#F5ECD7]">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                {featuredProject.status}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Visual Showcase: Prominent Main Dashboard Screenshot Preview */}
              <div className="lg:col-span-6">
                <PimaHeroPreview
                  onOpenLightbox={(idx) => setLightboxIndex(idx)}
                />
              </div>

              {/* Right Capstone Details */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <p className="text-xs sm:text-sm font-mono-code uppercase tracking-widest text-[#F59E0B] font-semibold">
                    Type: {featuredProject.subtitle}
                  </p>
                  <h3 className="font-pirate text-3xl sm:text-4xl font-black text-[#F5ECD7] mt-1">
                    Project: {featuredProject.title}
                  </h3>
                </div>

                <p className="text-[#D9E2EC] text-base leading-relaxed">
                  {featuredProject.description}
                </p>

                {featuredProject.galleryNote && (
                  <p className="text-xs sm:text-sm text-[#9FB3C8] bg-[#050E1D]/70 border-l-4 border-[#D4AF37] px-3.5 py-2.5 rounded-r-lg">
                    {featuredProject.galleryNote}
                  </p>
                )}

                {/* Key Capstone Highlights */}
                <div className="bg-[#050E1D]/80 border border-[#D4AF37]/30 rounded-xl p-4 sm:p-5">
                  <h4 className="font-pirate font-bold text-sm uppercase tracking-wider text-[#D4AF37] mb-3 flex items-center gap-2">
                    <TreasureChestIcon className="w-4 h-4" />
                    <span>Island Discovery Log &amp; Project Overview</span>
                  </h4>
                  <ul className="space-y-2 text-sm text-[#C4D1E0]">
                    {featuredProject.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#D4AF37] font-bold mt-0.5">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills with React & Vite Asset Icons */}
                <div>
                  <span className="block text-xs font-mono-code uppercase tracking-wider text-[#D4AF37] mb-2">
                    Technologies Used:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.techStack.map((tech) => (
                      <PimaTechPill key={tech} tech={tech} />
                    ))}
                  </div>
                </div>

                {/* Capstone Action Links */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(0)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-pirate font-bold text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-[#C81D25] to-[#9E141B] text-[#F5ECD7] border border-[#D4AF37] shadow-lg hover:shadow-[0_8px_25px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <CompassRoseIcon className="w-4 h-4 text-[#D4AF37]" />
                    Inspect Full Gallery
                  </button>
                  <a
                    href={featuredProject.liveUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-pirate font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#0A192F] hover:bg-[#132C50] text-[#F5ECD7] border border-[#D4AF37]/60 transition-all"
                  >
                    <AnchorIcon className="w-4 h-4 text-[#D4AF37]" />
                    Jump to Screenshot Grid
                  </a>
                </div>
              </div>
            </div>

            {/* Dedicated PIMA Guitars Screenshot Gallery & Lightbox */}
            <PimaGallery
              activeIndex={lightboxIndex}
              onOpenLightbox={(idx) => setLightboxIndex(idx)}
              onCloseLightbox={() => setLightboxIndex(null)}
              onSelectIndex={(idx) => setLightboxIndex(idx)}
            />
          </article>
        )}
      </div>
    </section>
  );
}
