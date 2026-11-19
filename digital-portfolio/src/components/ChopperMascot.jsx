import React, { useState } from 'react';

/**
 * Animated SVG Chopper fallback placeholder.
 * Automatically renders when `/images/chopper.gif` has not been added yet,
 * so there is never a broken image icon.
 */
function AnimatedChopperPlaceholder() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_6px_12px_rgba(0,0,0,0.45)]"
      role="img"
      aria-label="Tony Tony Chopper waving happily"
    >
      {/* Left Antler */}
      <path
        d="M28 38C18 32 15 22 19 16C21 23 26 26 32 29"
        stroke="#6B3E26"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path d="M22 27L16 24" stroke="#6B3E26" strokeWidth="3.5" strokeLinecap="round" />

      {/* Right Antler */}
      <path
        d="M92 38C102 32 105 22 101 16C99 23 94 26 88 29"
        stroke="#6B3E26"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path d="M98 27L104 24" stroke="#6B3E26" strokeWidth="3.5" strokeLinecap="round" />

      {/* Chopper's Pink Medical Hat Dome */}
      <path
        d="M30 48C30 28 43 18 60 18C77 18 90 28 90 48H30Z"
        fill="#F472B6"
        stroke="#2A1808"
        strokeWidth="3"
      />
      {/* White Medical Cross on Hat */}
      <path
        d="M57 26H63V33H70V39H63V46H57V39H50V33H57V26Z"
        fill="#FFFDF9"
        stroke="#2A1808"
        strokeWidth="1.5"
      />
      {/* Hat Brim */}
      <ellipse
        cx="60"
        cy="49"
        rx="38"
        ry="7"
        fill="#EC4899"
        stroke="#2A1808"
        strokeWidth="3"
      />

      {/* Chubby Reindeer Face */}
      <ellipse
        cx="60"
        cy="69"
        rx="24"
        ry="19"
        fill="#D99B66"
        stroke="#2A1808"
        strokeWidth="3"
      />

      {/* Rosy Cheeks */}
      <ellipse cx="44" cy="72" rx="4.5" ry="2.5" fill="#FB7185" opacity="0.8" />
      <ellipse cx="76" cy="72" rx="4.5" ry="2.5" fill="#FB7185" opacity="0.8" />

      {/* Happy Sparkling Eyes */}
      <circle cx="49" cy="65" r="4" fill="#1F1209" />
      <circle cx="47.8" cy="63.5" r="1.4" fill="#FFFFFF" />
      <circle cx="71" cy="65" r="4" fill="#1F1209" />
      <circle cx="69.8" cy="63.5" r="1.4" fill="#FFFFFF" />

      {/* Iconic Blue Nose */}
      <ellipse
        cx="60"
        cy="70"
        rx="4"
        ry="3"
        fill="#3B82F6"
        stroke="#1E3A8A"
        strokeWidth="1.5"
      />

      {/* Happy Open Smile */}
      <path
        d="M54 76Q60 82 66 76"
        stroke="#2A1808"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="#FB7185"
      />

      {/* Little Body / Outfit */}
      <path
        d="M46 86H74L77 104H43L46 86Z"
        fill="#991B1B"
        stroke="#2A1808"
        strokeWidth="2.5"
      />

      {/* Waving Hoof / Paw */}
      <g className="animate-chopper-wave">
        <path
          d="M75 88C84 82 91 75 94 69"
          stroke="#D99B66"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <circle cx="95" cy="68" r="4" fill="#4A2C11" />
      </g>
    </svg>
  );
}

/**
 * Floating Tony Tony Chopper Mascot Component
 *
 * Props:
 * - gifSrc: Path to local GIF (defaults to "/images/chopper.gif" inside public/images/)
 * - positionClass: Tailwind positioning classes so you can reposition easily
 * - enabled: Set to false to hide the mascot completely
 */
export default function ChopperMascot({
  gifSrc = '/images/chopper.gif',
  positionClass = 'bottom-4 right-4 sm:bottom-6 sm:right-6',
  enabled = true,
}) {
  const [isDismissed, setIsDismissed] = useState(false);
  const [bubblePinned, setBubblePinned] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [gifAvailable, setGifAvailable] = useState(true);

  if (!enabled || isDismissed) {
    return null;
  }

  const showBubble = isHovered || bubblePinned;

  return (
    <aside
      aria-label="Tony Tony Chopper Floating Mascot"
      className={`fixed ${positionClass} z-40 flex flex-col items-end pointer-events-none select-none`}
    >
      {/* Speech Bubble */}
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-auto mb-2.5 max-w-[220px] sm:max-w-[240px] rounded-2xl bg-[#FFF8E7] text-[#231407] border-2 border-[#EC4899] px-3.5 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition-all duration-200 origin-bottom-right ${
          showBubble
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-90 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex items-start justify-between gap-2">
          <p className="text-xs sm:text-[13px] font-bold leading-snug text-[#2A1808]">
            <span className="text-[#DB2777] font-pirate uppercase tracking-wider block text-[10px] mb-0.5">
              ★ Ship Doctor Chopper ★
            </span>
            &ldquo;Hehe! Welcome aboard, nakama!&rdquo; 🩷🌸
          </p>
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            title="Hide Chopper mascot"
            aria-label="Hide Chopper mascot"
            className="text-[11px] text-[#7C1D21] hover:text-[#C81D25] font-bold px-1 rounded cursor-pointer"
          >
            ✕
          </button>
        </div>

        {!gifAvailable && (
          <p className="mt-1.5 pt-1.5 border-t border-[#EC4899]/25 text-[10px] font-mono-code text-[#6B4423]">
            Tip: Drop <code className="font-bold">chopper.gif</code> in{' '}
            <code className="font-bold">public/images/</code> to use your custom GIF!
          </p>
        )}

        {/* Speech bubble pointer triangle */}
        <span
          className="absolute -bottom-2 right-7 w-3.5 h-3.5 bg-[#FFF8E7] border-r-2 border-b-2 border-[#EC4899] rotate-45"
          aria-hidden="true"
        />
      </div>

      {/* Chopper Interactive Mascot Button */}
      <div
        className="pointer-events-auto relative group flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          type="button"
          onClick={() => setBubblePinned((prev) => !prev)}
          aria-expanded={showBubble}
          aria-label="Tony Tony Chopper mascot waving happily. Click to toggle speech bubble: Hehe! Welcome aboard, nakama!"
          className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-[#172E54]/90 to-[#091528]/95 border-2 border-[#D4AF37] hover:border-[#F59E0B] shadow-[0_8px_24px_rgba(212,175,55,0.3)] p-1.5 flex items-center justify-center transition-transform duration-200 hover:scale-105 outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] cursor-pointer animate-chopper-bounce"
        >
          {/* Floating Sakura / Heart Badge */}
          <span
            className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-[#EC4899] text-white text-[10px] flex items-center justify-center shadow border border-white/60"
            aria-hidden="true"
          >
            🩷
          </span>

          {gifAvailable ? (
            <img
              src={gifSrc}
              alt="Animated Tony Tony Chopper waving and bouncing happily as the portfolio mascot"
              onError={() => setGifAvailable(false)}
              className="w-full h-full object-contain rounded-full"
            />
          ) : (
            <AnimatedChopperPlaceholder />
          )}
        </button>
      </div>
    </aside>
  );
}

