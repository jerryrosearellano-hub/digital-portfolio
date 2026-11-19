import React from 'react';
import { CompassRoseIcon, AnchorIcon } from './NauticalIcons';

export default function AboutSection({ about, personal }) {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-28 bg-[#071324] overflow-hidden border-t border-[#D4AF37]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono-code uppercase tracking-widest mb-3">
            <CompassRoseIcon className="w-4 h-4" />
            <span>Explorer&apos;s Logbook • Chapter I</span>
          </div>
          <h2 className="font-pirate text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5ECD7] tracking-wide">
            About the Navigator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9FB3C8]">
            Chronicling the academic voyage and technical mission of {personal.name}
          </p>
        </div>

        {/* Pirate Journal / Explorer Logbook Container */}
        <div className="parchment-card rounded-2xl border-4 border-[#8B5A2B] p-6 sm:p-10 lg:p-12 relative">
          {/* Decorative Journal Binding Spine in center on large screens */}
          <div
            className="hidden lg:block absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#8B5A2B]/30 via-[#5C3A18]/60 to-[#8B5A2B]/30"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Page: Narrative Log Entries */}
            <div className="lg:col-span-7 lg:pr-6 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#8B5A2B]/40 pb-3">
                <span className="font-mono-code text-xs uppercase tracking-widest text-[#7C1D21] font-bold">
                  {about.logDate}
                </span>
                <span className="text-xs font-pirate font-bold text-[#5C3A18] bg-[#E3CFA1] px-3 py-1 rounded border border-[#8B5A2B]/40">
                  WEATHER: CLEAR GRAND LINE SKIES
                </span>
              </div>

              <h3 className="font-pirate text-2xl sm:text-3xl font-black text-[#231407]">
                {about.journalTitle}
              </h3>

              <div className="space-y-4 text-[#2E1F10] text-base leading-relaxed">
                {about.paragraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={
                      idx === 0
                        ? 'first-letter:font-pirate first-letter:text-4xl first-letter:font-black first-letter:text-[#C81D25] first-letter:mr-2 first-letter:float-left first-letter:leading-none'
                        : ''
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Captain's Oath Callout */}
              <blockquote className="mt-6 p-4 sm:p-5 rounded-xl bg-[#E7D4A7]/80 border-l-4 border-[#C81D25] text-[#2A1B0E] italic text-sm sm:text-base shadow-xs">
                &ldquo;{about.captainQuote}&rdquo;
                <footer className="mt-2 not-italic font-pirate font-bold text-xs uppercase tracking-wider text-[#7C1D21]">
                  — {personal.name}, {personal.school}
                </footer>
              </blockquote>
            </div>

            {/* Right Page: Crew Dossier & Navigation Stats */}
            <div className="lg:col-span-5 lg:pl-6 space-y-6">
              <div className="bg-[#E6D4AA]/75 border-2 border-[#8B5A2B] rounded-xl p-5 sm:p-6 shadow-inner">
                <div className="flex items-center justify-between border-b-2 border-[#8B5A2B]/50 pb-3 mb-4">
                  <div>
                    <h4 className="font-pirate font-black text-lg sm:text-xl text-[#231407] uppercase tracking-wider">
                      Navigator&apos;s Dossier
                    </h4>
                    <p className="text-xs font-mono-code text-[#5C3A18]">
                      Verified Student Crew Record
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#C81D25] text-[#F5ECD7] flex items-center justify-center border-2 border-[#D4AF37] shadow">
                    <AnchorIcon className="w-5 h-5" />
                  </div>
                </div>

                <dl className="divide-y divide-[#8B5A2B]/30">
                  {about.quickFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                    >
                      <dt className="text-xs font-mono-code uppercase tracking-wider text-[#6B4423] font-semibold">
                        {fact.label}
                      </dt>
                      <dd className="text-sm font-bold text-[#231407] sm:text-right">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Wax Seal Stamp & Quick CTA */}
                <div className="mt-6 pt-4 border-t-2 border-dashed border-[#8B5A2B]/40 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#9E141B] text-[#F5ECD7] font-pirate font-black text-xs border-2 border-[#D4AF37] shadow">
                      STI
                    </span>
                    <span className="text-xs font-semibold text-[#4A2E12]">
                      Official College Portfolio Log
                    </span>
                  </div>
                  <a
                    href="#projects"
                    className="text-xs font-pirate font-bold uppercase tracking-wider text-[#C81D25] hover:text-[#7C1D21] underline underline-offset-4"
                  >
                    View Capstone →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

