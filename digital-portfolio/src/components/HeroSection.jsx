import React from 'react';
import profilePhoto from '../assets/Mee.png';
import {
  CompassRoseIcon,
  PirateShipIcon,
  BerrySymbol,
  AnchorIcon,
} from './NauticalIcons';

export default function HeroSection({ personal }) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center overflow-hidden bg-gradient-to-b from-[#040B16]/85 via-[#091A32]/80 to-[#071324]/85 nautical-grid"
    >
      {/* Background Nautical Compass Watermark */}
      <div
        className="pointer-events-none select-none absolute -right-28 -top-20 opacity-10 text-[#D4AF37]"
        aria-hidden="true"
      >
        <CompassRoseIcon className="w-[420px] h-[420px] sm:w-[580px] sm:h-[580px] animate-spin-slow" />
      </div>

      {/* Glowing Ambient Orbs */}
      <div
        className="pointer-events-none absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#C81D25]/15 blur-3xl animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Adventurous Hero Copy */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Top Log Pose Status Pill */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E2547]/90 border border-[#D4AF37]/50 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-ping" />
              <span className="text-xs sm:text-sm font-mono-code uppercase tracking-wider text-[#F5ECD7]">
                Log Pose Locked: <strong className="text-[#D4AF37]">{personal.school}</strong>
              </span>
            </div>

            {/* Subtitle / Pirate Class */}
            <p className="font-pirate text-sm sm:text-base uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
              ★ Grand Line Digital Portfolio • {personal.course} ★
            </p>

            {/* Main Heading */}
            <h1 className="font-pirate text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-[#F5ECD7] leading-[1.12]">
              Charting Digital Seas as{' '}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#F6D365] via-[#D4AF37] to-[#F59E0B] drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]">
                {personal.name}
              </span>
            </h1>

            {/* IT Student Introduction */}
            <p className="text-base sm:text-lg text-[#D9E2EC] leading-relaxed max-w-2xl">
              {personal.heroIntro}
            </p>

            {/* Quick Voyage Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0A192F]/90 border border-[#D4AF37]/30 text-xs sm:text-sm text-[#F5ECD7]">
                <AnchorIcon className="w-4 h-4 text-[#D4AF37]" />
                <span>
                  Degree: <strong className="text-[#D4AF37]">BS Information Technology</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0A192F]/90 border border-[#D4AF37]/30 text-xs sm:text-sm text-[#F5ECD7]">
                <PirateShipIcon className="w-5 h-5" />
                <span>
                  Capstone Flagship: <strong className="text-[#F59E0B]">PIMA Guitars</strong>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-pirate font-bold text-sm sm:text-base uppercase tracking-wider bg-gradient-to-r from-[#C81D25] via-[#B1161E] to-[#8F1016] text-[#F5ECD7] border-2 border-[#D4AF37] shadow-[0_10px_25px_rgba(200,29,37,0.45)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.45)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <CompassRoseIcon className="w-5 h-5 text-[#D4AF37]" />
                Explore Projects Island
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-pirate font-bold text-sm sm:text-base uppercase tracking-wider bg-[#0E2240]/90 hover:bg-[#16325B] text-[#F5ECD7] border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Send Message in a Bottle
              </a>
            </div>

            {/* Coordinates Footer Line */}
            <div className="pt-4 flex items-center gap-4 text-xs font-mono-code text-[#9FB3C8]">
              <span>COORDINATES: 13.1391° N, 123.7438° E</span>
              <span className="text-[#D4AF37]">•</span>
              <span>PORT: LEGAZPI CITY</span>
            </div>
          </div>

          {/* Right Column: Official One Piece Wanted Poster Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              {/* Floating Ship Badge on Top Corner */}
              <div className="absolute -top-6 -right-4 z-20 bg-[#0A192F] border-2 border-[#D4AF37] rounded-full p-2.5 shadow-xl animate-float-ship">
                <PirateShipIcon className="w-10 h-10" />
              </div>

              {/* Wanted Poster Frame */}
              <div className="parchment-poster rounded-xl p-5 sm:p-7 border-4 border-[#8B5A2B] relative transition-transform duration-300 group-hover:scale-[1.01]">
                {/* Corner Nails */}
                <span className="absolute top-3 left-3 w-3 h-3 rounded-full bg-[#4A2E12] border border-[#D4AF37]/60 shadow-inner" />
                <span className="absolute top-3 right-3 w-3 h-3 rounded-full bg-[#4A2E12] border border-[#D4AF37]/60 shadow-inner" />
                <span className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-[#4A2E12] border border-[#D4AF37]/60 shadow-inner" />
                <span className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-[#4A2E12] border border-[#D4AF37]/60 shadow-inner" />

                {/* WANTED Header */}
                <div className="text-center border-b-2 border-[#5C3A18]/60 pb-2 mb-3">
                  <h2 className="font-pirate font-black text-4xl sm:text-5xl tracking-[0.18em] text-[#2A1808] leading-none">
                    WANTED
                  </h2>
                  <p className="text-[11px] font-mono-code uppercase tracking-[0.22em] text-[#6B4423] mt-1 font-semibold">
                    STI COLLEGE LEGAZPI • IT FLEET DIVISION
                  </p>
                </div>

                {/* Profile Photo Frame */}
                <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden border-4 border-[#5C3A18] bg-gradient-to-b from-[#0E2749] via-[#13335C] to-[#081528] shadow-inner">
                  <img
                    src={personal.avatarUrl || profilePhoto}
                    alt={`${personal.name} portrait`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Bottom Banner Overlay */}
                  <div className="absolute bottom-2 left-2 right-2 z-20 bg-[#050d1a]/85 backdrop-blur-xs border border-[#D4AF37]/40 rounded px-2.5 py-1 flex items-center justify-between text-[11px] text-[#F5ECD7]">
                    <span className="font-semibold text-[#D4AF37]">CLASS: BSIT Developer</span>
                    <span className="font-mono-code">CAPSTONE: PIMA Guitars</span>
                  </div>
                </div>

                {/* DEAD OR ALIVE Stamp */}
                <div className="text-center my-2.5">
                  <span className="font-pirate font-extrabold text-sm sm:text-base tracking-[0.28em] text-[#4A2E12]">
                    ★ HIRE OR COLLABORATE ★
                  </span>
                </div>

                {/* Name on Poster */}
                <div className="text-center border-y-2 border-[#5C3A18]/70 py-2 my-2">
                  <h3 className="font-pirate font-black text-xl sm:text-2xl tracking-wider text-[#231407] uppercase">
                    {personal.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#7C1D21] uppercase tracking-widest mt-0.5">
                    &ldquo;{personal.moniker}&rdquo;
                  </p>
                </div>

                {/* Bounty Amount */}
                <div className="flex items-center justify-between bg-[#E3CFA1]/80 border border-[#8B5A2B]/60 rounded-lg px-3.5 py-2 mt-2">
                  <span className="font-pirate font-bold text-xs uppercase tracking-wider text-[#5C3A18]">
                    SKILL BOUNTY
                  </span>
                  <div className="font-pirate font-black text-lg sm:text-2xl text-[#231407] tracking-wider flex items-center">
                    <BerrySymbol className="text-lg sm:text-2xl mr-1 text-[#8B5A2B]" />
                    <span>{personal.bounty}</span>
                    <span className="ml-1 text-xs font-bold text-[#5C3A18]">-</span>
                  </div>
                </div>

                {/* Marine / Footer fine print */}
                <p className="text-[10px] font-mono-code text-center text-[#5C3A18] mt-2.5 tracking-wider uppercase">
                  ISSUED BY: GRAND LINE TECH HEADQUARTERS • STI LEGAZPI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

