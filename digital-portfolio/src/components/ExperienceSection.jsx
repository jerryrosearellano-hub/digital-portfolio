import React from 'react';
import { CompassRoseIcon, PirateShipIcon, AnchorIcon } from './NauticalIcons';

export default function ExperienceSection({ experience }) {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-28 bg-gradient-to-b from-[#071324]/85 via-[#0B1E38]/80 to-[#071324]/85 nautical-grid border-t border-[#D4AF37]/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono-code uppercase tracking-widest mb-3">
            <CompassRoseIcon className="w-4 h-4" />
            <span>Log Pose Route • Chapter IV</span>
          </div>
          <h2 className="font-pirate text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5ECD7] tracking-wide">
            Grand Line Voyage Timeline
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9FB3C8]">
            Tracking my BS Information Technology academic milestones and capstone development at STI College Legazpi
          </p>
        </div>

        {/* Vertical Nautical Sea Route Timeline */}
        <div className="relative">
          {/* Center / Left Dotted Sea Route Line */}
          <div
            className="absolute left-5 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-1 border-l-2 border-dashed border-[#D4AF37]/60"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experience.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Compass / Port Node on the Timeline */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-20 w-11 h-11 rounded-full bg-[#050E1D] border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center text-[#D4AF37]">
                    {idx === 0 ? (
                      <PirateShipIcon className="w-6 h-6" />
                    ) : (
                      <AnchorIcon className="w-5 h-5" />
                    )}
                  </div>

                  {/* Timeline Content Card */}
                  <div
                    className={`w-full pl-14 md:pl-0 md:w-1/2 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <article
                      tabIndex={0}
                      className="rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-[#0F2749] to-[#08162B] border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] shadow-[0_14px_34px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-xs font-mono-code text-[#D4AF37] font-semibold">
                          {item.era}
                        </span>
                        <span className="text-xs font-pirate font-bold uppercase px-2.5 py-0.5 rounded bg-[#C81D25] text-[#F5ECD7]">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="font-pirate text-xl sm:text-2xl font-bold text-[#F5ECD7]">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-mono-code text-[#F59E0B] mt-1">
                        {item.organization} • {item.location}
                      </p>

                      <p className="mt-3 text-sm text-[#D9E2EC] leading-relaxed">
                        {item.description}
                      </p>

                      {item.milestones && item.milestones.length > 0 && (
                        <ul className="mt-4 pt-3 border-t border-white/10 space-y-2 text-xs sm:text-sm text-[#C4D1E0]">
                          {item.milestones.map((m, mIdx) => (
                            <li key={mIdx} className="flex items-start gap-2">
                              <span className="text-[#D4AF37] font-bold">⚓</span>
                              <span>{m}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
