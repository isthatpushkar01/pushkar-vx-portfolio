import React, { useState, useEffect } from 'react';

/**
 * PUSHKAR.VX // ORIGINAL CINEMATIC EASTER EGGS
 * 100% Original Vector Art & Cybernetic Silhouettes.
 * Strictly non-infringing, subtle, and non-intrusive.
 */

export const WebSlingingCyberHero: React.FC = () => {
  const [isSwinging, setIsSwinging] = useState(false);

  useEffect(() => {
    // Periodically trigger a quick 3.5-second distant swing across the deep background
    const interval = setInterval(() => {
      setIsSwinging(true);
      setTimeout(() => setIsSwinging(false), 3800);
    }, 42000);

    return () => clearInterval(interval);
  }, []);

  if (!isSwinging) return null;

  return (
    <div 
      className="fixed top-24 left-0 right-0 h-44 pointer-events-none z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div 
        className="absolute top-0 flex items-center will-change-transform"
        style={{
          animation: 'cyberSwing 3.8s cubic-bezier(0.45, 0.05, 0.55, 0.95) forwards',
        }}
      >
        {/* Subtle luminous energetic grappling line */}
        <svg className="w-[180px] h-[120px] -rotate-12 opacity-40 overflow-visible" viewBox="0 0 180 120">
          <path
            d="M 0,0 Q 90,60 170,110"
            stroke="var(--theme-accent-light, #FF6A00)"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            fill="none"
          />
        </svg>

        {/* Original Cybernetic Hero Silhouette with Glowing Visor */}
        <div className="relative -ml-3 mt-16 scale-75 opacity-60 filter drop-shadow-[0_0_8px_var(--theme-accent-glow)]">
          <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
            {/* Cybernetic hooded cape silhouette */}
            <path
              d="M12 10C12 7 16 4 20 4C24 4 28 7 28 10L32 26L20 23L8 26L12 10Z"
              fill="#181822"
              stroke="#2E2E3E"
              strokeWidth="1"
            />
            {/* Dynamic acrobatic pose */}
            <circle cx="20" cy="11" r="5" fill="#1C1C26" />
            {/* Theme-colored glowing futuristic visor */}
            <ellipse cx="20" cy="11" rx="3.5" ry="1.2" fill="var(--theme-accent-light, #FF6A00)" />
            {/* Acrobatic limbs */}
            <path d="M15 15L8 22M25 15L32 20M17 23L12 33M23 23L27 31" stroke="#252535" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes cyberSwing {
          0% {
            transform: translate3d(-150px, -20px, 0) rotate(-25deg);
            opacity: 0;
          }
          20% {
            opacity: 0.7;
          }
          50% {
            transform: translate3d(50vw, 80px, 0) rotate(5deg);
            opacity: 0.8;
          }
          80% {
            opacity: 0.6;
          }
          100% {
            transform: translate3d(115vw, -30px, 0) rotate(25deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export const FloatingAssistantDrone: React.FC = () => {
  const [greeting, setGreeting] = useState(false);

  return (
    <div 
      className="hidden md:inline-flex items-center gap-2 group cursor-pointer select-none transition-transform duration-300"
      onClick={() => setGreeting(!greeting)}
      title="Cybernetic Assistant Drone v2.4 (Click to ping)"
    >
      {/* Friendly Drone Silhouette */}
      <div className="relative animate-bounce" style={{ animationDuration: '3.2s' }}>
        <svg className="w-6 h-6 filter drop-shadow-[0_0_8px_var(--theme-accent-glow)]" viewBox="0 0 24 24" fill="none">
          {/* Quad hover propellers */}
          <ellipse cx="6" cy="7" rx="3.5" ry="1" stroke="#484858" strokeWidth="1" />
          <ellipse cx="18" cy="7" rx="3.5" ry="1" stroke="#484858" strokeWidth="1" />
          {/* Drone chassis */}
          <rect x="7" y="8" width="10" height="9" rx="3" fill="#14141E" stroke="#333344" strokeWidth="1.2" />
          {/* Glowing scanner eye */}
          <circle cx="12" cy="12.5" r="2.5" fill="var(--theme-accent-light, #FF6A00)" className="animate-pulse" />
          <circle cx="12" cy="12.5" r="0.8" fill="#FFFFFF" />
          {/* Antenna */}
          <line x1="12" y1="8" x2="12" y2="4" stroke="#484858" strokeWidth="1.2" />
          <circle cx="12" cy="3.5" r="1" fill="#A6E635" />
        </svg>
      </div>

      {greeting && (
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101018] border border-[var(--theme-accent,#FF6A00)] text-white animate-in fade-in slide-in-from-left-1 duration-150">
          SYS // ONLINE
        </span>
      )}
    </div>
  );
};

export const OrbitalResearchSatellite: React.FC = () => {
  return (
    <div 
      aria-hidden="true"
      className="relative inline-flex items-center opacity-65 hover:opacity-100 transition-opacity"
      title="Deep Research Orbital Node"
    >
      <svg className="w-7 h-7 animate-pulse" style={{ animationDuration: '4s' }} viewBox="0 0 32 32" fill="none">
        {/* Solar arrays */}
        <rect x="2" y="13" width="7" height="6" rx="1" fill="#121824" stroke="#38BDF8" strokeWidth="1" />
        <line x1="5.5" y1="13" x2="5.5" y2="19" stroke="#38BDF8" strokeWidth="0.8" />
        <rect x="23" y="13" width="7" height="6" rx="1" fill="#121824" stroke="#38BDF8" strokeWidth="1" />
        <line x1="26.5" y1="13" x2="26.5" y2="19" stroke="#38BDF8" strokeWidth="0.8" />
        {/* Core bus */}
        <rect x="11" y="11" width="10" height="10" rx="2" fill="#1E1E28" stroke="#4E4E60" strokeWidth="1.2" />
        {/* Parabolic dish */}
        <path d="M16 6C13 6 11 9 11 11H21C21 9 19 6 16 6Z" fill="#2E2E3E" stroke="#5E5E72" strokeWidth="1" />
        {/* Telemetry LED */}
        <circle cx="16" cy="16" r="1.5" fill="#A6E635" />
      </svg>
    </div>
  );
};
