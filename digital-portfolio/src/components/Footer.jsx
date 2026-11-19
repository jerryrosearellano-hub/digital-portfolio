import React from 'react';
import { StrawHatEmblem, CompassRoseIcon } from './NauticalIcons';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ personal }) {
  return (
    <footer className="relative bg-[#030811] border-t-2 border-[#D4AF37]/40 text-[#F5ECD7] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Emblem */}
          <a href="#home" className="group inline-flex flex-col items-center gap-2">
            <StrawHatEmblem className="w-14 h-14 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-pirate font-black text-xl tracking-widest text-[#F5ECD7] group-hover:text-[#D4AF37] transition-colors">
              {personal.name}
            </span>
            <span className="text-xs font-mono-code text-[#9FB3C8]">
              {personal.course} • {personal.school}
            </span>
          </a>

          {/* Required Tagline */}
          <div className="max-w-2xl mx-auto px-6 py-4 rounded-2xl bg-[#09182E]/90 border border-[#D4AF37]/50 shadow-[0_0_25px_rgba(212,175,55,0.12)]">
            <p className="font-pirate font-bold text-base sm:text-xl text-[#D4AF37] tracking-wide">
              &ldquo;Dream Big. Keep Learning. Find Your Own Grand Line.&rdquo;
            </p>
          </div>

          {/* Quick Jump Links */}
          <nav
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-pirate uppercase tracking-wider text-[#9FB3C8]"
            aria-label="Footer Navigation"
          >
            <a href="#home" className="hover:text-[#D4AF37] transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">
              About Me
            </a>
            <a href="#skills" className="hover:text-[#D4AF37] transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-[#D4AF37] transition-colors">
              Projects (PIMA Guitars)
            </a>
            <a href="#experience" className="hover:text-[#D4AF37] transition-colors">
              Experience
            </a>
            <a href="#achievements" className="hover:text-[#D4AF37] transition-colors">
              Achievements
            </a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
              Contact
            </a>
          </nav>

          {/* Bottom Copyright & Back to Top */}
          <div className="w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9FB3C8]">
            <p className="font-mono-code">
              © {CURRENT_YEAR} {personal.name}. Built with React, Vite &amp; Tailwind CSS.
            </p>
            <a
              href="#home"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A192F] hover:bg-[#132C50] text-[#D4AF37] border border-[#D4AF37]/40 font-pirate font-bold uppercase tracking-wider transition-colors"
            >
              <CompassRoseIcon className="w-4 h-4" />
              Return to Top Port ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
