import React, { useState, useEffect } from 'react';
import javaAwardImg from '../assets/JavaAward.png';
import pimaDashboardImg from '../assets/dashboard1.png';
import { TreasureChestIcon, CompassRoseIcon } from './NauticalIcons';

export default function AchievementsSection({ achievements }) {
  const [showJavaModal, setShowJavaModal] = useState(false);

  useEffect(() => {
    if (!showJavaModal) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowJavaModal(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showJavaModal]);

  return (
    <section
      id="achievements"
      className="relative py-24 sm:py-28 bg-[#050E1D] overflow-hidden border-t border-[#D4AF37]/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono-code uppercase tracking-widest mb-3">
            <TreasureChestIcon className="w-4 h-4" />
            <span>Academic Hall of Records • Chapter V</span>
          </div>
          <h2 className="font-pirate text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5ECD7] tracking-wide">
            Achievements &amp; Certificates
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9FB3C8]">
            Showcasing my BS Information Technology capstone milestone, Java programming award, and technical training records
          </p>
        </div>

        {/* Balanced 3-Card Row on Desktop, Responsive on Tablet & Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {achievements.map((item) => (
            <article
              key={item.id}
              tabIndex={0}
              className={`parchment-poster rounded-2xl p-6 border-4 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between relative outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                item.isPlaceholder
                  ? 'border-dashed border-[#8B5A2B]/85'
                  : 'border-[#7A4B21] hover:border-[#D4AF37]'
              }`}
            >
              {/* Top Decorative Pin */}
              <div
                className="mx-auto -mt-2 mb-3 w-4 h-4 rounded-full bg-[#C81D25] border-2 border-[#D4AF37] shadow"
                aria-hidden="true"
              />

              <div className="flex flex-col flex-grow">
                {/* Card Header */}
                <div className="text-center border-b-2 border-[#5C3A18]/60 pb-2.5 mb-4">
                  <span className="block font-pirate font-black text-xl sm:text-2xl tracking-[0.18em] text-[#2A1808] leading-none">
                    {item.hasJavaAwardImage ? 'HONOR ROLL' : 'RECORD'}
                  </span>
                  <span className="block text-[10px] font-mono-code uppercase tracking-widest text-[#7C1D21] font-bold mt-1">
                    {item.posterCode} • {item.category}
                  </span>
                </div>

                {/* Visual Showcase Area: PIMA Dashboard Screenshot, JavaAward.png, OR Nautical Emblem Box */}
                {item.hasPimaDashboardImage ? (
                  <div className="mb-4">
                    <div className="w-full rounded-xl overflow-hidden bg-[#081528] border-2 border-[#D4AF37] shadow-md p-1.5 flex items-center justify-center">
                      <img
                        src={pimaDashboardImg}
                        alt="PIMA Guitars Capstone Project dashboard screenshot"
                        className="w-full h-auto max-h-60 object-contain rounded-lg"
                      />
                    </div>
                  </div>
                ) : item.hasJavaAwardImage ? (
                  <div className="mb-4">
                    <button
                      type="button"
                      onClick={() => setShowJavaModal(true)}
                      aria-label="View full-size Java Award certificate"
                      className="group relative w-full rounded-xl overflow-hidden bg-[#FFFDF9] border-2 border-[#5C3A18] hover:border-[#C81D25] shadow-md p-2 flex items-center justify-center cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                    >
                      <img
                        src={javaAwardImg}
                        alt="Java Award certificate presented to Jerry Rose Arellano"
                        className="w-full h-auto max-h-60 object-contain rounded transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <span className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-[#231407]/90 text-[#F5ECD7] border border-[#D4AF37] text-[10px] font-pirate font-bold uppercase tracking-wider opacity-90 group-hover:bg-[#C81D25] transition-colors">
                        Enlarge ⤢
                      </span>
                    </button>
                  </div>
                ) : (
                  <div className="w-full py-7 px-4 rounded-xl bg-gradient-to-b from-[#132C50] to-[#081528] border-2 border-[#5C3A18] flex flex-col items-center justify-center text-center mb-4 shadow-inner">
                    <CompassRoseIcon className="w-12 h-12 text-[#D4AF37] mb-2" />
                    <span className="px-3 py-1 rounded bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[11px] font-mono-code uppercase tracking-wider text-[#F5ECD7]">
                      {item.status}
                    </span>
                  </div>
                )}

                {/* Achievement Title */}
                <h3 className="font-pirate font-black text-xl text-[#231407] text-center leading-snug">
                  {item.title}
                </h3>

                {item.issuer && (
                  <p className="text-xs font-mono-code text-center text-[#7C1D21] font-semibold mt-1">
                    {item.issuer}
                  </p>
                )}

                <p className="mt-3 text-sm text-[#3A2714] leading-relaxed text-center">
                  {item.description}
                </p>
              </div>

              {/* Card Footer (No Fake Bounty Reward on Java Award) */}
              <div className="mt-6 pt-3.5 border-t-2 border-[#5C3A18]/60">
                <div className="flex items-center justify-between bg-[#E3CFA1]/80 border border-[#8B5A2B]/60 rounded-lg px-3 py-2">
                  <span className="text-[11px] font-pirate font-bold uppercase tracking-wider text-[#5C3A18]">
                    STATUS
                  </span>
                  <span className="font-mono-code font-bold text-xs text-[#231407]">
                    ⚓ {item.status}
                  </span>
                </div>

                <div className="mt-2.5 flex items-center justify-between text-xs font-mono-code text-[#5C3A18]">
                  <span>
                    {item.hasJavaAwardImage
                      ? 'Official Certificate Image'
                      : item.date}
                  </span>
                  {item.hasJavaAwardImage ? (
                    <button
                      type="button"
                      onClick={() => setShowJavaModal(true)}
                      className="font-bold text-[#C81D25] hover:underline cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded px-1"
                    >
                      View Certificate →
                    </button>
                  ) : item.credentialUrl ? (
                    <a
                      href={item.credentialUrl}
                      className="font-bold text-[#C81D25] hover:underline outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded px-1"
                    >
                      Inspect →
                    </a>
                  ) : (
                    <span>Editable Log</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full-Size Java Award Lightbox Modal */}
      {showJavaModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="java-award-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setShowJavaModal(false)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl bg-gradient-to-b from-[#0C203D] to-[#050E1D] border-2 border-[#D4AF37] p-4 sm:p-6 shadow-[0_25px_70px_rgba(0,0,0,0.9)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 pb-3 mb-4 border-b border-[#D4AF37]/30">
              <div>
                <span className="text-xs font-mono-code uppercase tracking-widest text-[#D4AF37]">
                  VERIFIED ACHIEVEMENT CERTIFICATE
                </span>
                <h3
                  id="java-award-modal-title"
                  className="font-pirate text-xl sm:text-2xl font-bold text-[#F5ECD7]"
                >
                  Java Award
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowJavaModal(false)}
                className="px-3.5 py-2 rounded-xl bg-[#C81D25] hover:bg-[#9E141B] text-[#F5ECD7] border border-[#D4AF37] font-pirate text-xs font-bold uppercase tracking-wider cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                ✕ Close
              </button>
            </div>

            <div className="bg-[#FFFDF9] rounded-xl p-2 sm:p-4 border border-[#D4AF37]/40 flex items-center justify-center max-h-[75vh] overflow-auto">
              <img
                src={javaAwardImg}
                alt="Java Award certificate presented to Jerry Rose Arellano"
                className="max-w-full max-h-[68vh] w-auto h-auto object-contain mx-auto"
              />
            </div>

            <p className="mt-3 text-center text-xs sm:text-sm text-[#D9E2EC]">
              Recognition for my Java programming achievement.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
