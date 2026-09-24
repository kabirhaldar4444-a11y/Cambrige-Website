import React from 'react';

const CambridgeCrest = ({ size = 44, className = '' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`cambridge-crest ${className}`}
      aria-label="Cambridge Learning Services Crest"
    >
      <defs>
        <linearGradient id="cambridgeGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#E88226" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id="shieldNavy" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#103358" />
          <stop offset="100%" stopColor="#051221" />
        </linearGradient>
        <filter id="crestGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#E88226" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Outer Golden Laurel Accent Arc */}
      <circle cx="50" cy="50" r="46" stroke="url(#cambridgeGold)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />

      {/* Main Cambridge Shield Contour */}
      <path 
        d="M 50 10 
           C 68 10, 84 14, 84 32 
           C 84 62, 64 78, 50 90 
           C 36 78, 16 62, 16 32 
           C 16 14, 32 10, 50 10 Z" 
        fill="url(#shieldNavy)" 
        stroke="url(#cambridgeGold)" 
        strokeWidth="2.5"
        filter="url(#crestGlow)"
      />

      {/* Inner Shield Gold Inset Border */}
      <path 
        d="M 50 14 
           C 65 14, 79 18, 79 33 
           C 79 59, 61 73, 50 83 
           C 39 73, 21 59, 21 33 
           C 21 18, 35 14, 50 14 Z" 
        fill="none" 
        stroke="url(#cambridgeGold)" 
        strokeWidth="1" 
        opacity="0.7"
      />

      {/* Academic Open Book of Knowledge in Shield Center */}
      {/* Book Spine & Left Page */}
      <path 
        d="M 50 48 
           C 42 42, 32 43, 28 46 
           L 28 62 
           C 32 59, 42 58, 50 64 Z" 
        fill="#FFFFFF" 
        stroke="url(#cambridgeGold)" 
        strokeWidth="1.2" 
      />
      {/* Book Right Page */}
      <path 
        d="M 50 48 
           C 58 42, 68 43, 72 46 
           L 72 62 
           C 68 59, 58 58, 50 64 Z" 
        fill="#FFFFFF" 
        stroke="url(#cambridgeGold)" 
        strokeWidth="1.2" 
      />
      {/* Page Lines (Left) */}
      <line x1="32" y1="51" x2="46" y2="47" stroke="#103358" strokeWidth="1" strokeLinecap="round" />
      <line x1="32" y1="55" x2="46" y2="51" stroke="#103358" strokeWidth="1" strokeLinecap="round" />
      <line x1="32" y1="59" x2="44" y2="55" stroke="#103358" strokeWidth="1" strokeLinecap="round" />
      {/* Page Lines (Right) */}
      <line x1="54" y1="47" x2="68" y2="51" stroke="#103358" strokeWidth="1" strokeLinecap="round" />
      <line x1="54" y1="51" x2="68" y2="55" stroke="#103358" strokeWidth="1" strokeLinecap="round" />
      <line x1="54" y1="55" x2="66" y2="59" stroke="#103358" strokeWidth="1" strokeLinecap="round" />

      {/* Heraldic Cambridge Academic Cross / Star on Top */}
      <path 
        d="M 50 20 L 52 26 L 58 28 L 52 30 L 50 36 L 48 30 L 42 28 L 48 26 Z" 
        fill="url(#cambridgeGold)" 
      />
      <circle cx="34" cy="27" r="2" fill="url(#cambridgeGold)" />
      <circle cx="66" cy="27" r="2" fill="url(#cambridgeGold)" />

      {/* Graduation Cap / Ribbon at Base */}
      <path 
        d="M 42 70 Q 50 73 58 70 L 50 76 Z" 
        fill="url(#cambridgeGold)" 
      />
    </svg>
  );
};

export default CambridgeCrest;
