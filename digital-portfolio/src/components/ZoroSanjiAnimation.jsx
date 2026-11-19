import React, { useState } from 'react';

/**
 * Animated SVG Chibi Duel Fallback for Roronoa Zoro vs Vinsmoke Sanji.
 * Displays automatically when `/images/zoro-sanji.gif` is not yet placed in `public/images/`,
 * preserving aspect ratio and preventing broken image links.
 */
function AnimatedZoroSanjiPlaceholder() {
  return (
    <div
      className="relative w-full max-w-[380px] aspect-[16/9] mx-auto flex items-center justify-between px-4 sm:px-6 py-3 select-none"
      role="img"
      aria-label="Animated Roronoa Zoro and Sanji playfully clashing and arguing"
    >
      {/* Left Fighter: Roronoa Zoro (Moss-Green Hair & Three Swords Aura) */}
      <div className="animate-zoro-clash flex flex-col items-center">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24">
          <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Green Aura */}
            <circle cx="52" cy="58" r="38" fill="#22C55E" opacity="0.16" />
            {/* Spiky Moss-Green Hair */}
            <path
              d="M24 44L18 28L34 32L42 18L54 30L68 20L72 35L84 32L76 48H24Z"
              fill="#22C55E"
              stroke="#14532D"
              strokeWidth="2.5"
            />
            {/* Head */}
            <circle cx="52" cy="54" r="20" fill="#F3C69F" stroke="#2A1808" strokeWidth="2.5" />
            {/* Bandana Forehead Strap */}
            <path d="M33 43H71V49H33V43Z" fill="#14532D" />
            {/* Left Eye Scar */}
            <line x1="43" y1="45" x2="43" y2="60" stroke="#7F1D1D" strokeWidth="2" />
            {/* Fierce Right Eye */}
            <circle cx="60" cy="53" r="2.8" fill="#1F1209" />
            <path d="M54 48L66 50" stroke="#14532D" strokeWidth="2.5" strokeLinecap="round" />
            {/* Three Gold Earrings on Left Ear */}
            <circle cx="31" cy="58" r="1.8" fill="#FACC15" />
            <circle cx="31" cy="62" r="1.8" fill="#FACC15" />
            <circle cx="31" cy="66" r="1.8" fill="#FACC15" />
            {/* Gritted Teeth / Mouth Sword (Wado Ichimonji) */}
            <rect x="44" y="62" width="46" height="4" rx="1.5" fill="#E2E8F0" stroke="#475569" strokeWidth="1.2" />
            <rect x="38" y="60" width="8" height="8" rx="1" fill="#FACC15" stroke="#2A1808" strokeWidth="1.2" />
            {/* Green Coat & Haramaki */}
            <path d="M36 74H68L72 96H32L36 74Z" fill="#15803D" stroke="#2A1808" strokeWidth="2.5" />
            {/* Forward Clashing Katana Blade */}
            <path
              d="M66 78L105 44"
              stroke="#F8FAFC"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <path
              d="M66 78L105 44"
              stroke="#4ADE80"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span className="mt-1 px-2.5 py-0.5 rounded-full bg-[#14532D]/90 border border-[#4ADE80]/60 text-[10px] font-mono-code font-bold text-[#86EFAC]">
          ⚔️ ZORO: &ldquo;Curly Brow!&rdquo;
        </span>
      </div>

      {/* Center Clash Spark Burst */}
      <div className="animate-spark-flash flex flex-col items-center justify-center z-10 -mx-3">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 sm:w-16 sm:h-16">
          <polygon
            points="40,4 48,27 73,18 56,38 76,54 50,52 44,76 34,53 10,60 26,40 8,22 32,28"
            fill="#FACC15"
            stroke="#C81D25"
            strokeWidth="2.5"
          />
          <circle cx="40" cy="40" r="9" fill="#FFFBEB" />
        </svg>
        <span className="text-[10px] font-pirate font-black uppercase tracking-widest text-[#FACC15] drop-shadow">
          CLASH!!
        </span>
      </div>

      {/* Right Fighter: Vinsmoke Sanji (Blonde Hair, Curly Brow & Diable Jambe Flame Kick) */}
      <div className="animate-sanji-clash flex flex-col items-center">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24">
          <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Golden Flame Aura */}
            <circle cx="58" cy="58" r="38" fill="#F59E0B" opacity="0.16" />
            {/* Head */}
            <circle cx="58" cy="54" r="20" fill="#F3C69F" stroke="#2A1808" strokeWidth="2.5" />
            {/* Blonde Hair Covering Side */}
            <path
              d="M36 48C36 30 48 24 62 24C74 24 82 34 80 50C72 44 64 42 56 54C48 48 42 48 36 48Z"
              fill="#FACC15"
              stroke="#A16207"
              strokeWidth="2.5"
            />
            {/* Iconic Swirly Eyebrow */}
            <path
              d="M44 47C48 43 54 45 53 49C52 51 49 51 49 49"
              stroke="#1F1209"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Fierce Visible Eye */}
            <circle cx="49" cy="54" r="2.8" fill="#1F1209" />
            {/* Goatee & Gritted Expression */}
            <path d="M48 63H62" stroke="#2A1808" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M55 70V74" stroke="#2A1808" strokeWidth="2.5" strokeLinecap="round" />
            {/* Black Suit & Yellow Shirt / Tie */}
            <path d="M42 74H74L78 96H38L42 74Z" fill="#0F172A" stroke="#D4AF37" strokeWidth="2" />
            <polygon points="58,74 53,88 58,93 63,88" fill="#FACC15" />
            <line x1="58" y1="75" x2="58" y2="89" stroke="#0F172A" strokeWidth="2.5" />
            {/* Diable Jambe Flaming Kick Leg */}
            <path
              d="M44 80L7 46"
              stroke="#F97316"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M44 80L7 46"
              stroke="#FEF08A"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span className="mt-1 px-2.5 py-0.5 rounded-full bg-[#78350F]/90 border border-[#FACC15]/60 text-[10px] font-mono-code font-bold text-[#FDE047]">
          🔥 SANJI: &ldquo;Moss Head!&rdquo;
        </span>
      </div>
    </div>
  );
}

/**
 * Zoro vs Sanji Playful Fighting Animation Component
 *
 * Placed in a dedicated decorative strip above the footer so it never blocks
 * text, project cards, or buttons, and scales cleanly on mobile & desktop.
 *
 * Props:
 * - gifSrc: Path to local transparent GIF (defaults to "/images/zoro-sanji.gif" inside public/images/)
 * - enabled: Set to false to hide this decorative section
 */
export default function ZoroSanjiAnimation({
  gifSrc = '/images/zoro-sanji.gif',
  enabled = true,
}) {
  const [gifAvailable, setGifAvailable] = useState(true);

  if (!enabled) {
    return null;
  }

  return (
    <section
      aria-label="Zoro versus Sanji playful crew rivalry animation"
      className="relative py-8 sm:py-10 bg-gradient-to-b from-[#040B16] to-[#030811] border-t border-[#D4AF37]/25 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Decorative Deck Arena Container */}
        <div className="w-full max-w-md sm:max-w-lg rounded-2xl bg-[#081529]/80 border border-[#D4AF37]/40 px-4 py-4 sm:px-6 sm:py-5 shadow-[0_12px_30px_rgba(0,0,0,0.55)]">
          {/* Top Mini Header */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/40 text-[10px] font-mono-code uppercase tracking-wider text-[#4ADE80]">
              ⚔️ Santoryu
            </span>
            <span className="text-xs font-pirate font-bold text-[#D4AF37]">VS</span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/40 text-[10px] font-mono-code uppercase tracking-wider text-[#FBBF24]">
              🔥 Black Leg
            </span>
          </div>

          {/* Animation Viewport — preserves original aspect ratio without stretching */}
          <div className="flex items-center justify-center min-h-[120px] sm:min-h-[150px]">
            {gifAvailable ? (
              <img
                src={gifSrc}
                alt="Roronoa Zoro and Sanji playfully fighting and arguing on the ship deck"
                onError={() => setGifAvailable(false)}
                className="max-h-32 sm:max-h-44 w-auto h-auto object-contain mx-auto select-none"
              />
            ) : (
              <AnimatedZoroSanjiPlaceholder />
            )}
          </div>

          {/* Required Caption */}
          <p className="mt-2.5 font-pirate font-bold text-xs sm:text-sm text-[#F5ECD7] tracking-wide">
            &ldquo;The crew&apos;s daily arguments 😂&rdquo;
          </p>

          {!gifAvailable && (
            <p className="mt-1.5 text-[11px] font-mono-code text-[#9FB3C8]/80">
              Ready for your custom GIF: place{' '}
              <code className="text-[#D4AF37]">zoro-sanji.gif</code> inside{' '}
              <code className="text-[#D4AF37]">public/images/</code>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

