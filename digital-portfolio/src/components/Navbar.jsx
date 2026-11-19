import React, { useState, useEffect } from 'react';
import { StrawHatEmblem, CompassRoseIcon } from './NauticalIcons';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ personal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sections = NAV_LINKS.map((item) => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050d1a]/95 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-[0_8px_30px_rgba(0,0,0,0.6)] py-2.5'
          : 'bg-gradient-to-b from-[#050d1a]/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Go to Home section"
        >
          <div className="relative flex items-center justify-center">
            <StrawHatEmblem className="w-10 h-10 sm:w-11 sm:h-11 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
          </div>
          <div>
            <span className="block font-pirate font-bold text-base sm:text-lg tracking-wider text-[#F5ECD7] group-hover:text-[#D4AF37] transition-colors">
              JERRY ROSE
            </span>
            <span className="block text-[10px] sm:text-xs font-mono-code uppercase tracking-widest text-[#D4AF37]/90">
              {personal.school} • BSIT
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {NAV_LINKS.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/40 shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                    : 'text-[#F5ECD7]/85 hover:text-[#D4AF37] hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-pirate text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#C81D25] to-[#9E141B] text-[#F5ECD7] border border-[#D4AF37]/70 shadow-[0_4px_15px_rgba(200,29,37,0.4)] hover:shadow-[0_6px_22px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <CompassRoseIcon className="w-4 h-4 text-[#D4AF37] animate-spin-slow" />
            Join Crew
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-lg text-[#F5ECD7] hover:text-[#D4AF37] hover:bg-[#0D213F] border border-[#D4AF37]/30 focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#061224]/98 backdrop-blur-xl border-b-2 border-[#D4AF37]/40 px-4 pt-3 pb-6 shadow-2xl">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {NAV_LINKS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold tracking-wide transition-colors ${
                    isActive
                      ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40'
                      : 'text-[#F5ECD7] hover:bg-white/5 hover:text-[#D4AF37]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono-code text-[#D4AF37]/70">→</span>
                </a>
              );
            })}
            <div className="pt-3">
              <a
                href="#projects"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-pirate text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#C81D25] to-[#9E141B] text-[#F5ECD7] border border-[#D4AF37]"
              >
                <CompassRoseIcon className="w-4 h-4 text-[#D4AF37]" />
                Explore PIMA Guitars Capstone
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

