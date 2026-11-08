import React from 'react';

interface RecognitionItem {
  id: string;
  name: string;
  sub: string;
  icon: React.ReactNode;
}

export const RecognitionStrip: React.FC = () => {
  const recognitions: RecognitionItem[] = [
    {
      id: 'gsa',
      name: 'Google Student Ambassador',
      sub: '2026',
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            fill="#EA4335"
          />
        </svg>
      ),
    },
    {
      id: 'gdg',
      name: 'Google Developer Groups',
      sub: 'Bhopal Community',
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          {/* Official GDG brackets < > */}
          <path d="M7.5 7L2.5 12L7.5 17" stroke="#4285F4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.5 7L21.5 12L16.5 17" stroke="#EA4335" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="1.75" fill="#FBBC05" />
        </svg>
      ),
    },
    {
      id: 'aicte',
      name: 'AICTE – MIC IDE Bootcamp',
      sub: '2026 Cohort',
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#FF6A00" strokeWidth="1.5" />
          <path d="M12 6V12L16 15" stroke="#F5B900" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2" fill="#FF6A00" />
        </svg>
      ),
    },
    {
      id: 'amd',
      name: 'AMD Ryzen Slingshot',
      sub: 'Innovation Participant',
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          {/* Official AMD Chevron Arrow Mark */}
          <path d="M3 4H10L14 8L10 12H3V4Z" fill="#ED1C24" />
          <path d="M13 12L17 8H21V20H13V12Z" fill="#ED1C24" />
        </svg>
      ),
    },
    {
      id: 'sih',
      name: 'Smart India Hackathon',
      sub: 'SIH Nationwide',
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#FF9933" strokeWidth="1.5" strokeDasharray="3 2" />
          <path d="M8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16" stroke="#138808" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1.5" fill="#000080" />
        </svg>
      ),
    },
    {
      id: 'ai-bharat',
      name: 'AI for Bharat',
      sub: 'Initiative & Ecosystem',
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12" stroke="#FF9933" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12" stroke="#138808" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 12H15M12 9V15" stroke="#38BDF8" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'kit',
      name: 'KIT IRF Ideathon',
      sub: 'Kolhapur',
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" stroke="#A6E635" strokeWidth="1.5" fill="none" />
          <path d="M12 7V17M7 10L17 14M7 14L17 10" stroke="#A6E635" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'icessm',
      name: 'ICESSM 2026',
      sub: 'Research Paper Presentation',
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="3" width="16" height="18" rx="2" stroke="#38BDF8" strokeWidth="1.5" />
          <path d="M8 8H16M8 12H16M8 16H13" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="16" cy="16" r="2" fill="#FF6A00" />
        </svg>
      ),
    },
    {
      id: 'mp-summit',
      name: 'Madhya Pradesh Startup Summit',
      sub: '2026 Edition',
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M12 3L4 9V20H20V9L12 3Z" stroke="#F5B900" strokeWidth="1.5" />
          <polygon points="12,7 14.5,12 20,12.5 16,16 17.5,21 12,18 6.5,21 8,16 4,12.5 9.5,12" fill="#FF6A00" />
        </svg>
      ),
    },
    {
      id: 'buildhub',
      name: 'BuildHub Campus Ambassador',
      sub: '2026 Leader',
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#FF6A00" strokeWidth="1.5" />
          <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="#38BDF8" strokeWidth="1.5" />
          <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#A6E635" strokeWidth="1.5" />
          <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="#F5B900" strokeWidth="1.5" />
        </svg>
      ),
    },
  ];

  // Duplicate items for continuous marquee loop
  const marqueeItems = [...recognitions, ...recognitions];

  return (
    <div 
      aria-label="Achievements and Recognition Brand Strip"
      className="relative z-50 w-full bg-[#070709] border-b border-[#1E1E26] shadow-md flex items-center overflow-hidden select-none h-10 sm:h-11"
    >
      {/* 1. Left Fixed Branding Label */}
      <div className="shrink-0 flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-[#0D0D12] border-r border-[#262634] z-20 shadow-xl">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse shadow-[0_0_8px_#FF6A00]" />
        <div className="flex flex-col text-left">
          <span className="text-[9px] sm:text-[10px] font-mono font-black tracking-widest text-white uppercase whitespace-nowrap">
            RECOGNITION // EVENTS // INNOVATION
          </span>
          <span className="text-[7px] sm:text-[8px] font-mono text-[#8E8E93] tracking-wider hidden lg:inline whitespace-nowrap">
            A JOURNEY OF BUILDING, LEARNING & LEADING.
          </span>
        </div>
      </div>

      {/* 2. Horizontal Infinite Scrolling Logo Marquee */}
      <div className="relative flex-1 overflow-hidden h-full flex items-center">
        {/* Soft Left & Right Fade Vignettes */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#070709] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#070709] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6 sm:gap-8 px-4">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group flex items-center gap-2.5 shrink-0 px-2.5 py-1 rounded-md bg-[#0F0F14]/70 hover:bg-[#181820] border border-[#22222E] hover:border-[#FF6A00]/60 transition-all duration-200 cursor-default"
              title={`${item.name} (${item.sub})`}
            >
              {/* Logo / Emblem with Muted -> Full Color Hover State */}
              <div className="filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200">
                {item.icon}
              </div>

              {/* Recognition Name and Category / Year */}
              <div className="flex items-center gap-2 text-left">
                <span className="text-[11px] font-mono font-bold text-[#D4D4D8] group-hover:text-white transition-colors whitespace-nowrap">
                  {item.name}
                </span>

                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#1A1A24] group-hover:bg-[#FF6A00]/15 text-[#8E8E93] group-hover:text-[#FF6A00] font-semibold border border-[#2D2D3A] group-hover:border-[#FF6A00]/40 transition-colors whitespace-nowrap">
                  {item.sub}
                </span>
              </div>

              {/* Metallic Separator Dot */}
              <span className="w-1 h-1 rounded-full bg-[#323240] ml-2 group-hover:bg-[#FF6A00] transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
