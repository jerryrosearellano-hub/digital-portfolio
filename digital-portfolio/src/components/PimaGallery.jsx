import React, { useEffect } from 'react';
import dashboard1Img from '../assets/dashboard1.png';
import dashboard2Img from '../assets/dashboard2.png';
import dashboard3Img from '../assets/dashboard3.png';
import dashboard4Img from '../assets/dashboard4.png';
import dashboard5Img from '../assets/dashboard5.png';
import dashboard6Img from '../assets/dashboard6.png';
import contactUsImg from '../assets/Contact us.png';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import { CompassRoseIcon } from './NauticalIcons';

const PIMA_SCREENSHOTS = [
  {
    id: 'dashboard1',
    title: 'Main Dashboard & Storefront Overview',
    badge: 'Main Preview • Screen 01',
    caption: 'Main PIMA Guitars dashboard and storefront interface showcasing featured guitars and navigation.',
    src: dashboard1Img,
    isMainPreview: true,
  },
  {
    id: 'dashboard2',
    title: 'Product & Inventory View',
    badge: 'Screen 02',
    caption: 'Product and inventory-related section displaying guitar and audio listings.',
    src: dashboard2Img,
  },
  {
    id: 'dashboard3',
    title: 'Product Catalog',
    badge: 'Screen 03',
    caption: 'Product browsing and catalog section for exploring available instruments and gear.',
    src: dashboard3Img,
  },
  {
    id: 'dashboard4',
    title: 'Product Details',
    badge: 'Screen 04',
    caption: 'Detailed product view presenting specifications and item presentation.',
    src: dashboard4Img,
  },
  {
    id: 'dashboard5',
    title: 'In-Stock Products',
    badge: 'Screen 05',
    caption: 'In-stock guitars, pro audio products, and available store offerings.',
    src: dashboard5Img,
  },
  {
    id: 'dashboard6',
    title: 'Website Information',
    badge: 'Screen 06',
    caption: 'Footer and store information section of the PIMA Guitars website.',
    src: dashboard6Img,
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    badge: 'Screen 07',
    caption: 'Customer inquiry and contact section of the PIMA Guitars website.',
    src: contactUsImg,
  },
];

const PIMA_TECH_ICONS = {
  React: reactLogo,
  Vite: viteLogo,
};

export function PimaTechPill({ tech }) {
  const iconSrc = PIMA_TECH_ICONS[tech];
  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#122C52] border border-[#D4AF37]/45 text-xs font-mono-code text-[#F5ECD7]">
      {iconSrc && (
        <img
          src={iconSrc}
          alt={`${tech} icon`}
          className="w-4 h-4 object-contain"
        />
      )}
      <span>{tech}</span>
    </span>
  );
}

export function PimaHeroPreview({ onOpenLightbox }) {
  const mainShot = PIMA_SCREENSHOTS[0];

  return (
    <div className="relative group rounded-2xl bg-gradient-to-br from-[#061224] via-[#0F294D] to-[#09182E] border-2 border-[#D4AF37] p-3 sm:p-4 shadow-[0_14px_34px_rgba(0,0,0,0.65)] overflow-hidden">
      {/* Top Browser-Style Nautical Frame Bar */}
      <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-[#D4AF37]/30 px-1">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C81D25]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
          <span className="ml-2 text-[11px] font-mono-code text-[#D4AF37] font-semibold">
            {mainShot.badge} — {mainShot.title}
          </span>
        </div>
        <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#9FB3C8]">
          Click to Enlarge ⤢
        </span>
      </div>

      {/* Main Dashboard Preview Image Button */}
      <button
        type="button"
        onClick={() => onOpenLightbox(0)}
        aria-label={`View larger screenshot of PIMA Guitars ${mainShot.title}`}
        className="relative w-full rounded-xl overflow-hidden bg-[#040B16] border border-[#D4AF37]/40 flex items-center justify-center aspect-[16/10] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      >
        <img
          src={mainShot.src}
          alt={`PIMA Guitars — ${mainShot.title} screenshot`}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#050d1a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C81D25] text-[#F5ECD7] border border-[#D4AF37] font-pirate text-xs font-bold uppercase tracking-wider shadow-lg">
            <CompassRoseIcon className="w-4 h-4 text-[#D4AF37]" />
            Inspect Full Screenshot
          </span>
        </div>
      </button>

      <div className="mt-2.5 flex items-center justify-between gap-2 px-1">
        <p className="text-xs text-[#C4D1E0] truncate">{mainShot.caption}</p>
        <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[10px] font-mono-code text-[#D4AF37]">
          1 of {PIMA_SCREENSHOTS.length}
        </span>
      </div>
    </div>
  );
}

export default function PimaGallery({ activeIndex, onOpenLightbox, onCloseLightbox, onSelectIndex }) {
  const activeShot = activeIndex !== null ? PIMA_SCREENSHOTS[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onCloseLightbox();
      } else if (e.key === 'ArrowRight') {
        onSelectIndex((activeIndex + 1) % PIMA_SCREENSHOTS.length);
      } else if (e.key === 'ArrowLeft') {
        onSelectIndex(
          (activeIndex - 1 + PIMA_SCREENSHOTS.length) % PIMA_SCREENSHOTS.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, onCloseLightbox, onSelectIndex]);

  return (
    <div id="pima-gallery" className="mt-8 pt-8 border-t border-[#D4AF37]/30">
      {/* Gallery Subheader */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <span className="text-xs font-mono-code uppercase tracking-widest text-[#F59E0B] font-semibold">
            ★ CAPSTONE INTERFACE CASE STUDY • {PIMA_SCREENSHOTS.length} VERIFIED SCREENS ★
          </span>
          <h4 className="font-pirate text-xl sm:text-2xl font-bold text-[#F5ECD7] mt-0.5">
            PIMA Guitars Project Screenshot Gallery
          </h4>
          <p className="text-xs sm:text-sm text-[#9FB3C8] mt-1">
            These screenshots demonstrate the actual PIMA Guitars website interface and project pages. Click any card to inspect the full-size view.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenLightbox(0)}
          className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#122C52] hover:bg-[#1B3F73] text-[#D4AF37] border border-[#D4AF37]/50 font-pirate text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
        >
          <CompassRoseIcon className="w-4 h-4" />
          Open Lightbox Viewer ({PIMA_SCREENSHOTS.length})
        </button>
      </div>

      {/* Responsive Grid of All 7 Screenshots (dashboard1 through Contact us) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {PIMA_SCREENSHOTS.map((shot, index) => (
          <article
            key={shot.id}
            className="group rounded-xl bg-[#061224]/95 border border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-[0_10px_24px_rgba(0,0,0,0.45)] hover:shadow-[0_14px_30px_rgba(212,175,55,0.2)] transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
          >
            <button
              type="button"
              onClick={() => onOpenLightbox(index)}
              aria-label={`Open larger view of ${shot.title}`}
              className="text-left w-full flex flex-col flex-grow cursor-pointer focus:outline-none"
            >
              {/* Screenshot Thumbnail Viewport preserving aspect ratio */}
              <div className="relative w-full aspect-[16/10] bg-[#030811] border-b border-[#D4AF37]/25 overflow-hidden flex items-center justify-center p-1.5">
                <img
                  src={shot.src}
                  alt={`PIMA Guitars — ${shot.title}`}
                  loading="lazy"
                  className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#050d1a]/85 border border-[#D4AF37]/50 text-[10px] font-mono-code text-[#D4AF37]">
                  {shot.badge}
                </span>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-[#C81D25]/90 text-[#F5ECD7] text-[10px] font-pirate font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  View ⤢
                </span>
              </div>

              {/* Card Title & Caption */}
              <div className="p-3.5 flex-grow flex flex-col justify-between">
                <div>
                  <h5 className="font-pirate font-bold text-base text-[#F5ECD7] group-hover:text-[#D4AF37] transition-colors">
                    {shot.title}
                  </h5>
                  <p className="mt-1 text-xs text-[#9FB3C8] leading-relaxed line-clamp-2">
                    {shot.caption}
                  </p>
                </div>
              </div>
            </button>
          </article>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeShot && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="pima-lightbox-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm"
          onClick={onCloseLightbox}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl bg-gradient-to-b from-[#0C203D] to-[#050E1D] border-2 border-[#D4AF37] p-4 sm:p-6 shadow-[0_25px_70px_rgba(0,0,0,0.9)] max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 border-b border-[#D4AF37]/30">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#C81D25] text-[#F5ECD7] font-mono-code text-xs font-bold">
                    {activeShot.badge}
                  </span>
                  <span className="text-xs font-mono-code text-[#D4AF37]">
                    Image {activeIndex + 1} of {PIMA_SCREENSHOTS.length}
                  </span>
                </div>
                <h3
                  id="pima-lightbox-title"
                  className="font-pirate text-xl sm:text-2xl font-bold text-[#F5ECD7] mt-1"
                >
                  PIMA Guitars — {activeShot.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onCloseLightbox}
                aria-label="Close screenshot viewer and return to project page"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#C81D25] hover:bg-[#9E141B] text-[#F5ECD7] border border-[#D4AF37] font-pirate text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                <span>✕ Close Viewer</span>
              </button>
            </div>

            {/* Main Lightbox Image Container */}
            <div className="relative flex-grow min-h-[240px] max-h-[65vh] bg-[#030811] rounded-xl border border-[#D4AF37]/30 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
              <img
                src={activeShot.src}
                alt={`PIMA Guitars — ${activeShot.title}`}
                className="max-w-full max-h-[60vh] w-auto h-auto object-contain rounded-lg mx-auto"
              />
            </div>

            {/* Caption & Previous / Next Controls */}
            <div className="mt-4 pt-3 border-t border-[#D4AF37]/25 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs sm:text-sm text-[#D9E2EC] text-center sm:text-left">
                {activeShot.caption}
              </p>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    onSelectIndex(
                      (activeIndex - 1 + PIMA_SCREENSHOTS.length) %
                        PIMA_SCREENSHOTS.length
                    )
                  }
                  className="px-3.5 py-2 rounded-xl bg-[#0A192F] hover:bg-[#132C50] text-[#D4AF37] border border-[#D4AF37]/40 font-pirate text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  ← Previous
                </button>
                <button
                  type="button"
                  onClick={() =>
                    onSelectIndex((activeIndex + 1) % PIMA_SCREENSHOTS.length)
                  }
                  className="px-3.5 py-2 rounded-xl bg-[#0A192F] hover:bg-[#132C50] text-[#D4AF37] border border-[#D4AF37]/40 font-pirate text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
