import React, { useState } from 'react';
import { CompassRoseIcon, TreasureChestIcon } from './NauticalIcons';

function SkillSymbolIcon({ type, className = 'w-5 h-5' }) {
  switch (type) {
    case 'code':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'layers':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case 'database':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case 'compass':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
      );
    case 'palette':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
      );
    case 'layout':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      );
    case 'communication':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case 'collaboration':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'problem-solving':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
  }
}

export default function SkillsSection({ skills }) {
  const [activeTab, setActiveTab] = useState('all');

  const showTechnical = activeTab === 'all' || activeTab === 'technical';
  const showSoft = activeTab === 'all' || activeTab === 'soft';

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-28 bg-gradient-to-b from-[#071324] via-[#0A1C36] to-[#071324] nautical-grid border-t border-[#D4AF37]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono-code uppercase tracking-widest mb-3">
            <TreasureChestIcon className="w-4 h-4" />
            <span>Navigator&apos;s Arsenal • Chapter II</span>
          </div>
          <h2 className="font-pirate text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5ECD7] tracking-wide">
            Collectible Skill Deck
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9FB3C8]">
            Technical, design, and crew collaboration abilities honed through BS Information Technology coursework and capstone development
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-xl bg-[#050E1D] border border-[#D4AF37]/30">
            {[
              { id: 'all', label: 'All Collectible Cards' },
              { id: 'technical', label: 'Technical & Design Arsenal' },
              { id: 'soft', label: 'Crew & Soft Skills' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-pirate text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#C81D25] to-[#9E141B] text-[#F5ECD7] border border-[#D4AF37] shadow-md'
                    : 'text-[#9FB3C8] hover:text-[#D4AF37] hover:bg-white/5 border border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Technical & Design Skill Cards */}
        {showTechnical && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6 border-b border-[#D4AF37]/25 pb-2">
              <h3 className="font-pirate text-xl sm:text-2xl font-bold text-[#D4AF37] flex items-center gap-2.5">
                <CompassRoseIcon className="w-6 h-6 text-[#D4AF37]" />
                <span>Technical &amp; Design Arsenal Cards</span>
              </h3>
              <span className="text-xs font-mono-code text-[#9FB3C8]">
                {skills.technical.length} EQUIPPED CARDS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.technical.map((skill, index) => (
                <article
                  key={skill.id}
                  tabIndex={0}
                  className="group relative rounded-2xl p-6 bg-gradient-to-b from-[#0F2749] to-[#08162B] border-2 border-[#D4AF37]/45 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(0,0,0,0.45)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.2)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:border-[#D4AF37]"
                >
                  {/* Top Card Rarity Header */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-2.5 py-1 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[11px] font-mono-code uppercase tracking-wider text-[#D4AF37] font-semibold">
                        CARD #{String(index + 1).padStart(2, '0')} • {skill.badge}
                      </span>
                      <span className="text-xs font-pirate font-bold text-[#F59E0B]">
                        ★ {skill.rank}
                      </span>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-[#050E1D] border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center shrink-0 shadow-inner group-hover:bg-[#D4AF37] group-hover:text-[#050E1D] transition-colors">
                        <SkillSymbolIcon type={skill.iconType} className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-mono-code uppercase tracking-wider text-[#38BDF8] mb-0.5">
                          {skill.category}
                        </p>
                        <h4 className="font-pirate text-xl font-bold text-[#F5ECD7] group-hover:text-[#D4AF37] transition-colors leading-snug">
                          {skill.name}
                        </h4>
                      </div>
                    </div>

                    <p className="mt-3.5 text-sm text-[#C4D1E0] leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Card Footer: Non-Numeric Proficiency Status & Tags */}
                  <div className="mt-6 pt-4 border-t border-[#D4AF37]/20">
                    <div className="flex items-center justify-between text-xs font-mono-code mb-3 px-3 py-1.5 rounded-lg bg-[#050E1D]/70 border border-[#D4AF37]/30">
                      <span className="text-[#9FB3C8] uppercase">STATUS</span>
                      <span className="text-[#D4AF37] font-semibold">
                        ⚓ {skill.proficiencyLabel || 'Active Arsenal'}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#050E1D]/90 border border-[#D4AF37]/25 text-xs font-mono-code text-[#F5ECD7]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Soft Skill Collectible Parchment Cards */}
        {showSoft && (
          <div>
            <div className="flex items-center justify-between mb-6 border-b border-[#D4AF37]/25 pb-2">
              <h3 className="font-pirate text-xl sm:text-2xl font-bold text-[#D4AF37] flex items-center gap-2.5">
                <TreasureChestIcon className="w-6 h-6" />
                <span>Crew Spirit &amp; Soft Skill Cards</span>
              </h3>
              <span className="text-xs font-mono-code text-[#9FB3C8]">
                {skills.soft.length} CREW TRAITS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.soft.map((soft, idx) => (
                <article
                  key={soft.id}
                  tabIndex={0}
                  className="parchment-card rounded-xl p-5 border-2 border-[#8B5A2B] hover:border-[#D4AF37] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-[#8B5A2B]/40 pb-2.5 mb-3.5">
                      <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#7C1D21]">
                        SPIRIT 0{idx + 1}
                      </span>
                      <span className="text-xs font-pirate font-bold text-[#5C3A18]">
                        {soft.archetype}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-9 h-9 rounded-lg bg-[#231407] text-[#D4AF37] border border-[#D4AF37]/60 flex items-center justify-center shrink-0">
                        <SkillSymbolIcon type={soft.iconType} className="w-4 h-4" />
                      </div>
                      <h4 className="font-pirate text-lg font-black text-[#231407] leading-snug">
                        {soft.name}
                      </h4>
                    </div>

                    <p className="text-sm text-[#3A2714] leading-relaxed">
                      {soft.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-dashed border-[#8B5A2B]/50 flex items-center justify-between">
                    <span className="text-[11px] font-mono-code uppercase font-bold text-[#5C3A18]">
                      CREW TRAIT:
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-[#C81D25] text-[#F5ECD7] font-pirate font-bold text-[11px]">
                      {soft.highlight}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
