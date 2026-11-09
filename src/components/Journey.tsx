import React, { useState, useRef, useEffect } from 'react';
import {
  Calendar,
  ChevronRight,
  Sparkles,
  Award,
  BookOpen,
  Users,
  Compass,
  ArrowRight,
  Shield,
  FileText,
  CheckCircle,
  Zap,
  Rocket,
} from 'lucide-react';
import { PORTFOLIO_DATA, TimelineMilestone } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const milestones = PORTFOLIO_DATA.timeline;
  const [selectedYear, setSelectedYear] = useState<string>('2026');
  const [isZooming, setIsZooming] = useState<boolean>(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const activeMilestone: TimelineMilestone =
    milestones.find((m) => m.year === selectedYear) || milestones[0];

  const handleYearSelect = (year: string) => {
    if (year === selectedYear) return;
    setIsZooming(true);
    setSelectedYear(year);

    setTimeout(() => {
      setIsZooming(false);
      // Smoothly ensure the panel is nicely in view
      if (panelRef.current) {
        panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 180);
  };

  // Keyboard navigation for year selector
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in input/textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      const years = milestones.map((m) => m.year);
      const currentIndex = years.indexOf(selectedYear);

      if (e.key === 'ArrowRight' && currentIndex < years.length - 1) {
        handleYearSelect(years[currentIndex + 1]);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        handleYearSelect(years[currentIndex - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedYear, milestones]);

  const yearMetadata: Record<string, { status: string; quote: string; accent: string }> = {
    '2023': {
      status: 'ACADEMIC FOUNDATION LOGGED',
      quote: 'Where curiosity met discipline — establishing fundamental machine learning rigor.',
      accent: '#38BDF8',
    },
    '2024': {
      status: 'LEADERSHIP INITIATED',
      quote: 'Building Team Setu and institutional placement workflows — innovation through collaboration.',
      accent: '#A6E635',
    },
    '2025': {
      status: 'NATIONAL HACKATHONS & ENTERPRISE SIMULATIONS',
      quote: 'Rapid prototyping, SIH institutional screening, Gemini certification, and enterprise simulations.',
      accent: '#F5B900',
    },
    '2026': {
      status: 'FLAGSHIP AMBASSADORSHIP & APEX LEADERSHIP',
      quote: 'Google Student Ambassador, SAC President, Top 5 Team in India, and peer-reviewed 5G research.',
      accent: 'var(--theme-accent-light, #FF6A00)',
    },
    '2027': {
      status: 'GRADUATION & HORIZON ROADMAP',
      quote: 'B.Tech AI & ML completion and scaling enterprise deep-tech solutions.',
      accent: '#C084FC',
    },
  };

  return (
    <section 
      id="journey" 
      className="py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#1C1C26] relative overflow-hidden select-none"
    >
      {/* Dynamic Ambient Background Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] blur-3xl rounded-full pointer-events-none -z-10 transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, var(--theme-accent-glow, rgba(255,106,0,0.12)) 0%, transparent 70%)',
        }}
      />

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-2.5">
            <span 
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: 'var(--theme-accent-light, #FF6A00)' }}
            />
            <span style={{ color: 'var(--theme-accent-light, #FF6A00)' }} className="font-bold">
              02 // CHRONOLOGICAL LOGS & STRATEGIC MILESTONES
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase">
            THE JOURNEY SO FAR.
          </h2>

          <p className="text-xs sm:text-sm font-mono text-[#A1A1AA] mt-2 max-w-2xl leading-relaxed">
            Click any year to activate its chronological logs, hackathon achievements, certifications and leadership milestones.
          </p>
        </div>

        {/* Easter Egg: Subtle Space / Hero Rocket Telemetry */}
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0D0D14] border border-[#222230] shadow-md font-mono text-xs text-[#8E8E93] self-start md:self-end">
          <Rocket 
            className="w-4 h-4 animate-bounce" 
            style={{ color: 'var(--theme-accent-light, #FF6A00)' }} 
          />
          <span>TIMELINE PROGRESSION:</span>
          <span className="text-white font-bold">2023 ➔ 2027</span>
        </div>
      </div>

      {/* 1. INTERACTIVE YEAR SELECTOR BAR */}
      <div className="mb-10 p-2 sm:p-3 rounded-2xl bg-[#0B0B10] border border-[#22222E] shadow-2xl relative">
        <div className="grid grid-cols-5 gap-2 sm:gap-3">
          {milestones.map((m) => {
            const isSelected = selectedYear === m.year;
            return (
              <button
                key={m.year}
                onClick={() => handleYearSelect(m.year)}
                className={`group relative py-3.5 sm:py-4 px-2 sm:px-4 rounded-xl font-display font-black tracking-tight transition-all duration-200 cursor-pointer flex flex-col items-center justify-center ${
                  isSelected
                    ? 'translate-y-[-3px] text-white'
                    : 'bg-[#121218] hover:bg-[#181822] text-[#8E8E93] hover:text-white border border-[#20202A]'
                }`}
                style={{
                  background: isSelected
                    ? 'linear-gradient(145deg, #1A1A24 0%, #12121A 100%)'
                    : undefined,
                  borderColor: isSelected
                    ? 'var(--theme-accent, #FF6A00)'
                    : undefined,
                  borderWidth: isSelected ? '2px' : undefined,
                  boxShadow: isSelected
                    ? '0 10px 25px -4px rgba(0,0,0,0.8), 0 0 20px var(--theme-accent-glow, rgba(255,106,0,0.35))'
                    : undefined,
                }}
                aria-label={`Select Year ${m.year}`}
              >
                {/* Year Label */}
                <span 
                  className={`text-lg sm:text-2xl md:text-3xl transition-transform duration-200 ${
                    isSelected ? 'scale-110' : 'group-hover:scale-105'
                  }`}
                  style={{
                    color: isSelected ? 'var(--theme-accent-light, #FF6A00)' : undefined,
                    textShadow: isSelected ? '0 0 12px var(--theme-accent-glow)' : undefined,
                  }}
                >
                  {m.year}
                </span>

                {/* Subtitle / Phase Tag */}
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#71717A] mt-1 hidden sm:inline">
                  {m.year === '2026' ? 'ACTIVE PHASE' : m.year === '2027' ? 'HORIZON' : 'ARCHIVED'}
                </span>

                {/* Active Indicator LED Bar */}
                {isSelected && (
                  <span 
                    className="absolute bottom-1 w-6 sm:w-10 h-1 rounded-full animate-pulse transition-all"
                    style={{
                      backgroundColor: 'var(--theme-accent-light, #FF6A00)',
                      boxShadow: '0 0 8px var(--theme-accent-light, #FF6A00)',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Small Navigation Hint */}
        <div className="mt-3 pt-2 border-t border-[#181822] flex items-center justify-between text-[10px] font-mono text-[#55555A] px-2">
          <span>SELECT YEAR TO REVEAL CORRESPONDING DOSSIER LOGS</span>
          <span className="hidden sm:inline">KEYBOARD NAV: USE [◀ LEFT] [RIGHT ▶] ARROWS</span>
        </div>
      </div>

      {/* 2. DYNAMIC CONTENT PANEL (GENUINELY CHANGES ACCORDING TO SELECTED YEAR) */}
      <div 
        ref={panelRef}
        className={`rounded-3xl bg-[#09090E] border-2 border-[#262634] p-5 sm:p-8 md:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.95)] transition-all duration-300 relative overflow-hidden ${
          isZooming ? 'opacity-40 scale-[0.98]' : 'opacity-100 scale-100'
        }`}
        style={{
          borderColor: 'var(--theme-accent, #262634)',
          boxShadow: '0 25px 70px rgba(0,0,0,0.95), 0 0 35px var(--theme-accent-glow-subtle)',
        }}
      >
        {/* Panel Accent Header Ribbon */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#1E1E28]">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <span 
                className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight"
                style={{
                  color: 'var(--theme-accent-light, #FF6A00)',
                  textShadow: '0 0 20px var(--theme-accent-glow)',
                }}
              >
                YEAR {activeMilestone.year}
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#161622] text-[#A6E635] border border-[#2B2B3C] font-bold">
                {activeMilestone.highlight}
              </span>
            </div>

            <h3 className="text-lg sm:text-2xl font-display font-black text-white">
              {activeMilestone.title}
            </h3>

            <p className="text-xs sm:text-sm font-mono text-[#8E8E93]">
              {yearMetadata[selectedYear]?.quote || activeMilestone.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-center">
            <span className="text-[11px] font-mono text-[#8E8E93] bg-[#12121A] px-3 py-1.5 rounded-xl border border-[#22222E]">
              STATUS: <strong className="text-white">{yearMetadata[selectedYear]?.status}</strong>
            </span>
          </div>
        </div>

        {/* 2-Column Content Layout: Left = Core Chronological Bulletins, Right = Activities & Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Key Chronological Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4D4D8] flex items-center gap-2 pb-2 border-b border-[#1A1A24]">
              <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--theme-accent-light, #FF6A00)' }} />
              <span>CHRONOLOGICAL HIGHLIGHTS</span>
            </h4>

            <div className="space-y-3">
              {activeMilestone.points.map((pt, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#101016] border border-[#1E1E28] hover:border-[#333342] transition-colors flex items-start gap-3"
                >
                  <span 
                    className="w-5 h-5 rounded-md flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5"
                    style={{
                      backgroundColor: 'rgba(255,106,0,0.15)',
                      color: 'var(--theme-accent-light, #FF6A00)',
                      border: '1px solid var(--theme-accent, #FF6A00)',
                    }}
                  >
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
                    {pt}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Activity & Milestone Cards */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4D4D8] flex items-center justify-between pb-2 border-b border-[#1A1A24]">
              <div className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>MILESTONES, RECOGNITIONS &amp; SIMULATIONS</span>
              </div>
              <span className="text-[10px] text-[#71717A] font-mono">
                {activeMilestone.activities?.length || 0} RECORDS
              </span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[460px] overflow-y-auto pr-1">
              {activeMilestone.activities?.map((act, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#0E0E15] border border-[#20202C] hover:border-[var(--theme-accent,#FF6A00)] transition-all duration-200 flex flex-col justify-between group shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-[#181822]">
                      <span className="text-[9px] font-mono uppercase font-bold text-[#A6E635] px-2 py-0.5 rounded bg-[#132015] border border-[#1E3A20]">
                        {act.category}
                      </span>
                      {act.date && (
                        <span className="text-[10px] font-mono text-[#8E8E93]">
                          {act.date}
                        </span>
                      )}
                    </div>

                    <h5 className="text-xs sm:text-sm font-display font-bold text-white group-hover:text-[var(--theme-accent-light,#FF6A00)] transition-colors mb-1.5 leading-snug">
                      {act.title}
                    </h5>

                    <p className="text-xs text-[#8E8E93] leading-relaxed line-clamp-3">
                      {act.detail}
                    </p>
                  </div>

                  {act.badge && (
                    <div className="mt-3 pt-2 border-t border-[#161620] flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#FF8A32] font-semibold truncate">
                        {act.badge}
                      </span>
                      <CheckCircle className="w-3.5 h-3.5 text-[#A6E635] shrink-0" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Panel Bottom Footer Bar */}
        <div className="mt-8 pt-4 border-t border-[#1C1C26] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#71717A]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A6E635]" />
            <span>AUTHENTICATED LOG ENTRY FOR YEAR {selectedYear}</span>
          </div>

          <a 
            href="#certifications"
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            style={{ color: 'var(--theme-accent-light, #FF6A00)' }}
          >
            <span>VIEW VERIFIED CERTIFICATES IN GALLERY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
