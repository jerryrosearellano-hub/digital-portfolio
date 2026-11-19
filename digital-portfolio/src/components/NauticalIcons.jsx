import React from 'react';

export function CompassRoseIcon({ className = "w-8 h-8" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 4" opacity="0.7" />
      <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="1.8" opacity="0.85" />
      <circle cx="50" cy="50" r="6" fill="currentColor" />
      {/* Main Points */}
      <polygon points="50,6 57,43 50,37 43,43" fill="currentColor" />
      <polygon points="50,94 57,57 50,63 43,57" fill="currentColor" opacity="0.65" />
      <polygon points="94,50 57,57 63,50 57,43" fill="currentColor" opacity="0.8" />
      <polygon points="6,50 43,57 37,50 43,43" fill="currentColor" opacity="0.8" />
      {/* Diagonal Points */}
      <polygon points="80,20 56,47 53,44" fill="currentColor" opacity="0.55" />
      <polygon points="20,20 44,47 47,44" fill="currentColor" opacity="0.55" />
      <polygon points="80,80 56,53 53,56" fill="currentColor" opacity="0.55" />
      <polygon points="20,80 44,53 47,56" fill="currentColor" opacity="0.55" />
    </svg>
  );
}

export function StrawHatEmblem({ className = "w-10 h-10" }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Crossed Anchor / Bones motif behind straw hat */}
      <line x1="22" y1="22" x2="98" y2="98" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" />
      <line x1="98" y1="22" x2="22" y2="98" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" />
      <circle cx="20" cy="20" r="6" fill="#D4AF37" />
      <circle cx="100" cy="20" r="6" fill="#D4AF37" />
      <circle cx="20" cy="100" r="6" fill="#D4AF37" />
      <circle cx="100" cy="100" r="6" fill="#D4AF37" />

      {/* Outer Ring */}
      <circle cx="60" cy="60" r="44" fill="#0A192F" stroke="#D4AF37" strokeWidth="4" />

      {/* Straw Hat Dome */}
      <path
        d="M32 64C32 45 43 34 60 34C77 34 88 45 88 64H32Z"
        fill="#E5B842"
        stroke="#2A1B0E"
        strokeWidth="3"
      />
      {/* Red Ribbon */}
      <path
        d="M33 58H87V65H33V58Z"
        fill="#C81D25"
        stroke="#2A1B0E"
        strokeWidth="2.5"
      />
      {/* Straw Hat Brim */}
      <ellipse
        cx="60"
        cy="66"
        rx="40"
        ry="9"
        fill="#F0C75E"
        stroke="#2A1B0E"
        strokeWidth="3"
      />
      {/* Code Brackets below hat */}
      <path
        d="M46 80L38 86L46 92M74 80L82 86L74 92M64 78L56 94"
        stroke="#F5ECD7"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PirateShipIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Mast & Flag */}
      <line x1="60" y1="10" x2="60" y2="68" stroke="#D4AF37" strokeWidth="3.5" />
      <path d="M60 10L82 17L60 24V10Z" fill="#C81D25" />
      {/* Main Sail */}
      <path
        d="M35 28C48 24 72 24 85 28C90 40 90 52 84 62C70 59 50 59 36 62C30 52 30 40 35 28Z"
        fill="#F5ECD7"
        stroke="#D4AF37"
        strokeWidth="2.5"
      />
      {/* Straw Hat Stripe on Sail */}
      <path d="M40 45H80" stroke="#C81D25" strokeWidth="4" strokeLinecap="round" />
      {/* Ship Hull */}
      <path
        d="M16 64H104L90 84H30L16 64Z"
        fill="#7C4A21"
        stroke="#D4AF37"
        strokeWidth="3"
      />
      {/* Gold Trim & Portholes */}
      <circle cx="45" cy="73" r="3" fill="#D4AF37" />
      <circle cx="60" cy="73" r="3" fill="#D4AF37" />
      <circle cx="75" cy="73" r="3" fill="#D4AF37" />
      {/* Waves */}
      <path
        d="M10 90Q25 84 40 90T70 90T100 90"
        stroke="#38BDF8"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function TreasureChestIcon({ className = "w-8 h-8" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Lid */}
      <path
        d="M10 26C10 17 18 12 32 12C46 12 54 17 54 26H10Z"
        fill="#8B4513"
        stroke="#D4AF37"
        strokeWidth="3"
      />
      {/* Base */}
      <rect
        x="10"
        y="26"
        width="44"
        height="26"
        rx="3"
        fill="#6B3410"
        stroke="#D4AF37"
        strokeWidth="3"
      />
      {/* Center Straps */}
      <rect x="20" y="13" width="4" height="39" fill="#D4AF37" />
      <rect x="40" y="13" width="4" height="39" fill="#D4AF37" />
      {/* Lock */}
      <rect x="28" y="23" width="8" height="10" rx="2" fill="#F59E0B" stroke="#2A1B0E" strokeWidth="1.5" />
      <circle cx="32" cy="28" r="1.5" fill="#2A1B0E" />
    </svg>
  );
}

export function AnchorIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="5" r="3" />
      <line x1="12" y1="22" x2="12" y2="8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </svg>
  );
}

export function BerrySymbol({ className = "inline-block w-4 h-4 mr-1" }) {
  return (
    <span
      className={`font-pirate font-black text-[#8B5A2B] select-none ${className}`}
      title="Belly / Berry Bounty Currency"
    >
      ฿
    </span>
  );
}

export function WaveDivider({ flip = false, color = "#071324" }) {
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${
        flip ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-10 sm:h-14 md:h-16 preserve-3d"
        preserveAspectRatio="none"
      >
        <path
          d="M0 36L60 41.3C120 47 240 57 360 54.7C480 52 600 36 720 33.3C840 31 960 41 1080 46.7C1200 52 1320 52 1380 52L1440 52V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V36Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

