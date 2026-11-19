import React, { useState } from 'react';

const NAMI_GREETINGS = [
  'Hey, navigator! Welcome aboard! 🌊',
  'Ready to explore the Grand Line? 🧭',
  "Don't forget to check out the projects! 💰",
];

/**
 * Animated SVG Nami Navigator Fallback Illustration.
 * Displays automatically when `/images/nami.gif` has not yet been placed
 * in `public/images/`, so there is never a broken image icon.
 */
function AnimatedNamiPlaceholder() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_6px_12px_rgba(0,0,0,0.45)]"
      role="img"
      aria-label="Nami the Navigator smiling and waving with her Log Pose"
    >
      {/* Flowing Tangerine-Orange Hair Back */}
      <path
        d="M26 52C22 72 24 90 32 98H88C96 90 98 72 94 52C90 30 78 20 60 20C42 20 30 30 26 52Z"
        fill="#F97316"
        stroke="#7C2D12"
        strokeWidth="3"
      />

      {/* Hair Highlights */}
      <path
        d="M36 32C46 25 74 25 84 32"
        stroke="#FDBA74"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Nami Face */}
      <ellipse
        cx="60"
        cy="60"
        rx="22"
        ry="20"
        fill="#FDE0C8"
        stroke="#2A1808"
        strokeWidth="2.8"
      />

      {/* Tangerine Side Bangs & Forehead Locks */}
      <path
        d="M36 52C38 34 48 26 60 26C72 26 82 34 84 52C76 42 68 39 60 46C52 39 44 42 36 52Z"
        fill="#FB923C"
        stroke="#7C2D12"
        strokeWidth="2.5"
      />

      {/* Rosy Cheeks */}
      <ellipse cx="45" cy="64" rx="4" ry="2.2" fill="#FB7185" opacity="0.7" />
      <ellipse cx="75" cy="64" rx="4" ry="2.2" fill="#FB7185" opacity="0.7" />

      {/* Warm Brown Sparkling Eyes */}
      <circle cx="49" cy="57" r="3.8" fill="#431407" />
      <circle cx="47.8" cy="55.6" r="1.3" fill="#FFFFFF" />
      <circle cx="71" cy="57" r="3.8" fill="#431407" />
      <circle cx="69.8" cy="55.6" r="1.3" fill="#FFFFFF" />

      {/* Confident Navigator Smile */}
      <path
        d="M53 67Q60 73 67 67"
        stroke="#7C2D12"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Blue & White Navigator Outfit Top */}
      <path
        d="M44 80H76L80 102H40L44 80Z"
        fill="#0284C7"
        stroke="#2A1808"
        strokeWidth="2.5"
      />
      <path d="M43 88H77" stroke="#F8FAFC" strokeWidth="3.5" />
      {/* Gold Clima-Tact / Berry Coin Brooch */}
      <circle cx="60" cy="88" r="4.5" fill="#FACC15" stroke="#78350F" strokeWidth="1.5" />

      {/* Waving Arm with Glass Log Pose on Wrist */}
      <g className="animate-chopper-wave">
        <path
          d="M77 84C86 78 92 70 95 63"
          stroke="#FDE0C8"
          strokeWidth="6.5"
          strokeLinecap="round"
        />
        {/* Log Pose Wristband & Globe */}
        <circle
          cx="91"
          cy="70"
          r="5"
          fill="#E0F2FE"
          stroke="#D4AF37"
          strokeWidth="2"
        />
        <line x1="89" y1="70" x2="93" y2="70" stroke="#EF4444" strokeWidth="1.8" />
      </g>
    </svg>
  );
}

/**
 * Floating Nami Navigator Side Companion Component
 *
 * Positioned near the right edge above Chopper (`bottom-24 sm:bottom-32`) so
 * the two crewmates never overlap on desktop, tablet, or mobile.
 *
 * Props:
 * - gifSrc: Path to local image/GIF (defaults to "/images/nami.gif" inside public/images/)
 * - positionClass: Tailwind positioning classes for vertical/horizontal placement
 * - enabled: Set to false to hide Nami
 */
export default function NamiCompanion({
  gifSrc = '/images/nami.gif',
  positionClass = 'bottom-24 right-4 sm:bottom-32 sm:right-6',
  enabled = true,
}) {
  const [isDismissed, setIsDismissed] = useState(false);
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isReacting, setIsReacting] = useState(false);
  const [gifAvailable, setGifAvailable] = useState(true);

  if (!enabled || isDismissed) {
    return null;
  }

  const handleCompanionClick = () => {
    // Trigger playful bounce reaction
    setIsReacting(true);
    window.setTimeout(() => setIsReacting(false), 560);

    if (!bubbleOpen) {
      setBubbleOpen(true);
    } else {
      // Rotate through the 3 greetings on each click, or close after cycling
      const nextIdx = (greetingIndex + 1) % NAMI_GREETINGS.length;
      setGreetingIndex(nextIdx);
    }
  };

  return (
    <aside
      aria-label="Nami Navigator Side Companion"
      className={`fixed ${positionClass} z-40 flex flex-col items-end pointer-events-none select-none animate-nami-entrance`}
    >
      {/* Speech Bubble */}
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-auto mb-2.5 max-w-[225px] sm:max-w-[250px] rounded-2xl bg-[#FFF8E7] text-[#231407] border-2 border-[#D4AF37] px-3.5 py-2.5 shadow-[0_12px_28px_rgba(0,0,0,0.55)] transition-all duration-200 origin-bottom-right ${
          bubbleOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-90 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-[#D97706] font-pirate font-bold uppercase tracking-wider block text-[10px] mb-0.5">
              ★ Navigator Nami ({greetingIndex + 1}/{NAMI_GREETINGS.length}) ★
            </span>
            <p className="text-xs sm:text-[13px] font-bold leading-snug text-[#2A1808]">
              &ldquo;{NAMI_GREETINGS[greetingIndex]}&rdquo;
            </p>
          </div>

          <button
            type="button"
            onClick={() => setBubbleOpen(false)}
            title="Close greeting bubble"
            aria-label="Close Nami greeting bubble"
            className="text-[11px] text-[#7C1D21] hover:text-[#C81D25] font-bold px-1 rounded cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            ✕
          </button>
        </div>

        <div className="mt-2 pt-1.5 border-t border-[#D4AF37]/35 flex items-center justify-between text-[10px] font-mono-code text-[#6B4423]">
          <button
            type="button"
            onClick={() =>
              setGreetingIndex((prev) => (prev + 1) % NAMI_GREETINGS.length)
            }
            className="font-bold text-[#B45309] hover:underline cursor-pointer outline-none"
          >
            Next Tip ↻
          </button>
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            className="text-[#7C1D21] hover:underline cursor-pointer outline-none"
          >
            Dismiss Nami
          </button>
        </div>

        {/* Speech bubble pointer triangle */}
        <span
          className="absolute -bottom-2 right-6 w-3.5 h-3.5 bg-[#FFF8E7] border-r-2 border-b-2 border-[#D4AF37] rotate-45"
          aria-hidden="true"
        />
      </div>

      {/* Nami Interactive Companion Button */}
      <div className="pointer-events-auto relative flex items-center">
        <button
          type="button"
          onClick={handleCompanionClick}
          aria-expanded={bubbleOpen}
          aria-label="Nami Navigator companion. Click to hear a Grand Line greeting from Nami!"
          className={`relative w-14 h-14 sm:w-18 sm:h-18 rounded-full bg-gradient-to-b from-[#172E54]/95 to-[#091528]/95 border-2 border-[#D4AF37] hover:border-[#F59E0B] shadow-[0_0_22px_rgba(245,158,11,0.38)] hover:shadow-[0_0_28px_rgba(212,175,55,0.6)] p-1.5 flex items-center justify-center transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
            isReacting ? 'animate-nami-react' : 'animate-nami-float'
          }`}
        >
          {/* Floating Tangerine / Compass Badge */}
          <span
            className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-gradient-to-br from-[#F97316] to-[#D97706] text-white text-[10px] flex items-center justify-center shadow border border-[#FDE68A]"
            aria-hidden="true"
          >
            🧭
          </span>

          {gifAvailable ? (
            <img
              src={gifSrc}
              alt="Nami from One Piece floating companion"
              onError={() => setGifAvailable(false)}
              className="w-full h-full object-contain rounded-full"
            />
          ) : (
            <AnimatedNamiPlaceholder />
          )}
        </button>
      </div>
    </aside>
  );
}

