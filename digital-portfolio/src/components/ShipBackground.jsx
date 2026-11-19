import React, { useState } from 'react';

/**
 * Custom SVG Illustration of the Thousand Sunny (Straw Hat Flagship).
 * Features the iconic Sunflower Lion figurehead, crimson & gold hull,
 * Soldier Dock System side wheel ("1"), and Straw Hat Jolly Roger main sail.
 */
function ThousandSunnyIllustration() {
  return (
    <svg
      viewBox="0 0 280 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_12px_25px_rgba(0,0,0,0.65)]"
      role="img"
      aria-label="Thousand Sunny pirate ship sailing across the Grand Line"
    >
      {/* Back Mast & Top Pennant */}
      <line x1="125" y1="22" x2="125" y2="140" stroke="#78350F" strokeWidth="5" />
      <path d="M125 22L88 30L125 38V22Z" fill="#C81D25" stroke="#D4AF37" strokeWidth="1.5" />

      {/* Fore Mast */}
      <line x1="175" y1="36" x2="175" y2="140" stroke="#78350F" strokeWidth="4" />

      {/* Crow's Nest Lookout Dome (Red & Yellow Stripes) */}
      <path
        d="M113 48C113 40 137 40 137 48H113Z"
        fill="#C81D25"
        stroke="#D4AF37"
        strokeWidth="2"
      />

      {/* Main Billowing Sail */}
      <path
        d="M68 54C104 46 154 46 190 54C202 80 202 106 188 126C150 120 106 120 70 126C56 106 56 80 68 54Z"
        fill="#F5ECD7"
        stroke="#D4AF37"
        strokeWidth="3"
      />

      {/* Straw Hat Jolly Roger Emblem on Main Sail */}
      <line x1="112" y1="74" x2="146" y2="108" stroke="#231407" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="146" y1="74" x2="112" y2="108" stroke="#231407" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="129" cy="91" r="13" fill="#231407" />
      {/* Mini Straw Hat Dome on Jolly Roger */}
      <path d="M116 89C116 80 142 80 142 89H116Z" fill="#FACC15" />
      <rect x="116" y="86" width="26" height="3" fill="#C81D25" />
      <ellipse cx="129" cy="89" rx="17" ry="3.5" fill="#FACC15" />

      {/* Rear Cabin & Lawn Deck */}
      <path
        d="M52 122H96V142H46L52 122Z"
        fill="#FEF3C7"
        stroke="#D4AF37"
        strokeWidth="2.5"
      />
      <path d="M50 122H98" stroke="#C81D25" strokeWidth="4" strokeLinecap="round" />

      {/* Main Crimson & White Ship Hull */}
      <path
        d="M40 138H216L194 178H64L40 138Z"
        fill="#B91C1C"
        stroke="#D4AF37"
        strokeWidth="3.5"
      />
      {/* White & Gold Hull Stripes */}
      <path d="M47 150H208" stroke="#F5ECD7" strokeWidth="5" />
      <path d="M54 162H201" stroke="#D4AF37" strokeWidth="3" />

      {/* Soldier Dock System Channel "1" Wheel Shield */}
      <circle
        cx="128"
        cy="158"
        r="18"
        fill="#FEF3C7"
        stroke="#D4AF37"
        strokeWidth="3.5"
      />
      <circle cx="128" cy="158" r="13" stroke="#C81D25" strokeWidth="2" />
      <text
        x="128"
        y="163"
        textAnchor="middle"
        fill="#7C1D21"
        fontSize="14"
        fontWeight="900"
        fontFamily="serif"
      >
        1
      </text>

      {/* Iconic Lion Figurehead (Sunny's Sunflower Mane) at Bow (Right Side) */}
      <g transform="translate(212, 134)">
        {/* Orange & Gold Sunflower Mane Petals */}
        <circle cx="0" cy="0" r="24" fill="#EA580C" stroke="#7C2D12" strokeWidth="2.5" />
        <circle
          cx="0"
          cy="0"
          r="21"
          stroke="#FACC15"
          strokeWidth="5"
          strokeDasharray="6 4"
        />
        {/* Golden Lion Face */}
        <circle cx="2" cy="0" r="14" fill="#FACC15" stroke="#78350F" strokeWidth="2" />
        {/* Lion Eyes & Smile */}
        <circle cx="-2" cy="-3" r="2" fill="#1F1209" />
        <circle cx="6" cy="-3" r="2" fill="#1F1209" />
        <ellipse cx="2" cy="1" rx="2.5" ry="1.8" fill="#78350F" />
        <path d="M-3 5Q2 9 7 5" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Subtle Waterline Foam Waves under Hull */}
      <path
        d="M28 180Q56 172 84 180T140 180T196 180T248 180"
        stroke="#38BDF8"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

/**
 * Custom SVG Illustration of the Going Merry (Classic Caravel).
 * Features the beloved white Sheep Figurehead with curved ram horns,
 * warm oak wood hull, triangular lateen tail sail, and Straw Hat main sail.
 */
function GoingMerryIllustration() {
  return (
    <svg
      viewBox="0 0 260 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_10px_22px_rgba(0,0,0,0.6)]"
      role="img"
      aria-label="Going Merry pirate ship sailing across the distant horizon"
    >
      {/* Main Center Mast & Top Flag */}
      <line x1="132" y1="24" x2="132" y2="140" stroke="#78350F" strokeWidth="4.5" />
      <path d="M132 24L165 31L132 38V24Z" fill="#1F1209" stroke="#D4AF37" strokeWidth="1.5" />

      {/* Rear Lateen Mast & Triangular Sail */}
      <line x1="188" y1="48" x2="188" y2="138" stroke="#78350F" strokeWidth="3.5" />
      <path
        d="M172 56L222 118H172V56Z"
        fill="#F5ECD7"
        stroke="#D4AF37"
        strokeWidth="2"
        opacity="0.9"
      />

      {/* Main Square Caravel Sail */}
      <path
        d="M78 52C110 45 154 45 182 52C190 76 190 102 180 122C150 117 112 117 80 122C70 102 70 76 78 52Z"
        fill="#F5ECD7"
        stroke="#D4AF37"
        strokeWidth="2.8"
      />

      {/* Straw Hat Emblem on Main Sail */}
      <circle cx="130" cy="87" r="12" fill="#231407" />
      <path d="M118 85C118 77 142 77 142 85H118Z" fill="#FACC15" />
      <rect x="118" y="83" width="24" height="2.5" fill="#C81D25" />
      <ellipse cx="130" cy="85" rx="15" ry="3" fill="#FACC15" />

      {/* Classic Wooden Caravel Hull (Sailing Leftward) */}
      <path
        d="M52 136H212L194 172H72L52 136Z"
        fill="#7C4A21"
        stroke="#D4AF37"
        strokeWidth="3"
      />
      <path d="M60 150H204" stroke="#9A5B2A" strokeWidth="4" />
      <circle cx="105" cy="154" r="3.5" fill="#D4AF37" />
      <circle cx="132" cy="154" r="3.5" fill="#D4AF37" />
      <circle cx="159" cy="154" r="3.5" fill="#D4AF37" />

      {/* Iconic White Sheep Figurehead (Merry) at Bow (Left Side) */}
      <g transform="translate(46, 122)">
        {/* Curved Neck Stem */}
        <path
          d="M14 22C6 16 4 6 6 0"
          stroke="#F8FAFC"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Fluffy Sheep Head */}
        <circle cx="2" cy="-4" r="14" fill="#F8FAFC" stroke="#475569" strokeWidth="2" />
        {/* Curled Ram Horns */}
        <path
          d="M6 -10C16 -14 20 -2 12 4C6 6 4 0 8 -2"
          stroke="#D6B88A"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Gentle Eyes & Nose */}
        <circle cx="-3" cy="-6" r="2" fill="#1E293B" />
        <path d="M-8 -1L-4 1" stroke="#475569" strokeWidth="1.8" strokeLinecap="round" />
      </g>

      {/* Waterline Waves */}
      <path
        d="M24 175Q52 168 80 175T136 175T192 175T236 175"
        stroke="#38BDF8"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}

/**
 * Reusable Decorative ShipBackground Component
 *
 * Displays:
 * 1. The Thousand Sunny sailing near the bottom ocean horizon of the Hero / Upper Grand Line sea.
 * 2. The Going Merry sailing in the opposite direction along the distant lower Grand Line horizon.
 * 3. Subtle low-opacity stars, mist, and ocean wave layers.
 *
 * Automatically loads `/images/thousand-sunny.png` and `/images/going-merry.png` if placed in
 * `public/images/`, falling back seamlessly to custom SVG illustrations with zero broken links.
 */
export default function ShipBackground({
  sunnySrc = '/images/thousand-sunny.png',
  merrySrc = '/images/going-merry.png',
}) {
  const [sunnyImgAvailable, setSunnyImgAvailable] = useState(true);
  const [merryImgAvailable, setMerryImgAvailable] = useState(true);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-0 overflow-hidden z-[1]"
    >
      {/* Distant Starlight & Grand Line Sea Mist */}
      <div className="absolute top-24 left-1/4 w-1.5 h-1.5 rounded-full bg-[#FDE68A]/40" />
      <div className="absolute top-48 right-1/3 w-1 h-1 rounded-full bg-[#F5ECD7]/35" />
      <div className="absolute top-80 left-1/3 w-1.5 h-1.5 rounded-full bg-[#D4AF37]/30" />
      <div className="absolute top-[1150px] right-1/4 w-1.5 h-1.5 rounded-full bg-[#FDE68A]/30" />
      <div className="absolute top-[2200px] left-1/5 w-1.5 h-1.5 rounded-full bg-[#38BDF8]/30" />

      {/* =====================================================================
          1. THOUSAND SUNNY — Hero Section Bottom Horizon (Sailing Eastward)
         ===================================================================== */}
      <div className="absolute top-[520px] sm:top-[560px] lg:top-[540px] left-4 sm:left-12 lg:left-[8%] opacity-25 sm:opacity-35 lg:opacity-40 transition-opacity duration-500">
        <div className="w-36 h-28 sm:w-52 sm:h-40 lg:w-64 lg:h-48 animate-sunny-voyage">
          {sunnyImgAvailable ? (
            <img
              src={sunnySrc}
              alt=""
              onError={() => setSunnyImgAvailable(false)}
              className="w-full h-full object-contain"
            />
          ) : (
            <ThousandSunnyIllustration />
          )}
        </div>
      </div>

      {/* Subtle Hero Horizon Ocean Wave Silhouette */}
      <svg
        viewBox="0 0 1440 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[640px] sm:top-[690px] left-0 w-full h-16 opacity-15 animate-ocean-wave"
        preserveAspectRatio="none"
      >
        <path
          d="M0 45Q180 15 360 45T720 45T1080 45T1440 45V90H0V45Z"
          fill="#38BDF8"
        />
      </svg>

      {/* =====================================================================
          2. GOING MERRY — Distant Lower Sea Horizon (Sailing Westward)
         ===================================================================== */}
      <div className="absolute top-[2450px] sm:top-[2350px] lg:top-[2250px] right-6 sm:right-20 lg:right-[10%] opacity-20 sm:opacity-30 lg:opacity-35 transition-opacity duration-500">
        <div className="w-32 h-24 sm:w-44 sm:h-36 lg:w-56 lg:h-44 animate-merry-voyage">
          {merryImgAvailable ? (
            <img
              src={merrySrc}
              alt=""
              onError={() => setMerryImgAvailable(false)}
              className="w-full h-full object-contain"
            />
          ) : (
            <GoingMerryIllustration />
          )}
        </div>
      </div>

      {/* Distant Lower Ocean Wave Layer near Experience / Achievements */}
      <svg
        viewBox="0 0 1440 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[2560px] sm:top-[2470px] lg:top-[2390px] left-0 w-full h-14 opacity-10 animate-ocean-wave"
        preserveAspectRatio="none"
      >
        <path
          d="M0 50Q240 20 480 50T960 50T1440 50V90H0V50Z"
          fill="#D4AF37"
        />
      </svg>
    </div>
  );
}
