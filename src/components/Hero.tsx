import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Terminal, FileText, Cpu, MapPin, Award, CheckCircle } from 'lucide-react';
import { MechanicalConsole } from './MechanicalConsole';
import { ThreeNeuralCore } from './ThreeNeuralCore';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import pushkarActualPortrait from '../assets/images/pushkar_actual_portrait.jpeg';
import pushkarTransparentPortrait from '../assets/images/pushkar_portrait_transparent.png';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const p = PORTFOLIO_DATA.personal;
  const [mouseParallax, setMouseParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setMouseParallax({ x, y });
        frameId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-[96vh] flex flex-col items-center justify-start pt-28 sm:pt-32 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background 3D Neural Core Simulation */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-25 sm:opacity-35 pointer-events-none">
        <div className="w-[500px] h-[500px] sm:w-[650px] sm:h-[650px]">
          <ThreeNeuralCore />
        </div>
      </div>

      {/* Ambient Cybernetic Lighting */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] blur-3xl rounded-full pointer-events-none -z-10 transition-all duration-700" 
        style={{
          background: 'radial-gradient(circle, var(--theme-accent-glow, rgba(255,106,0,0.15)) 0%, var(--theme-accent-glow-subtle, rgba(245,185,0,0.05)) 50%, transparent 70%)',
        }}
      />

      {/* 1. TOP SPLIT HERO SECTION: LEFT PERSONAL INTRO & RIGHT PROMINENT PHOTOGRAPH */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 sm:mb-12">
        {/* Left Column: Personal Introduction */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
          {/* Top Status Capsule */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D0D14]/90 border border-[#2B2B36] backdrop-blur-md shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#A6E635] animate-ping shadow-[0_0_8px_#A6E635]" />
            <span className="text-[11px] font-mono tracking-widest text-[#A6E635] font-bold">
              STATUS: ACTIVE // OPEN TO OPPORTUNITIES
            </span>
            <span className="text-[#55555A]">|</span>
            <span className="text-[11px] font-mono text-[#8E8E93] hidden sm:inline">
              BHOPAL, MP, INDIA
            </span>
          </div>

          {/* Personal Identity */}
          <div className="space-y-1.5">
            <p 
              className="text-xs sm:text-sm font-mono tracking-widest uppercase font-bold flex items-center justify-center lg:justify-start gap-2 transition-colors duration-300"
              style={{ color: 'var(--theme-accent-light, #FF6A00)' }}
            >
              <span className="w-2 h-0.5" style={{ backgroundColor: 'var(--theme-accent, #FF6A00)' }} />
              <span>PUSHKAR.VX // PORTFOLIO</span>
              <span className="w-2 h-0.5 lg:hidden" style={{ backgroundColor: 'var(--theme-accent, #FF6A00)' }} />
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              PUSHKAR VISHWAKARMA
            </h1>

            <p 
              className="text-xs sm:text-sm font-mono tracking-wider font-bold uppercase flex items-center justify-center lg:justify-start gap-2 transition-colors duration-300"
              style={{ color: 'var(--theme-accent-light, #FF6A00)' }}
            >
              <span>AI ENGINEER</span>
              <span className="text-[#55555A]">|</span>
              <span className="text-[#F5B900]">GENERATIVE AI DEVELOPER</span>
            </p>
          </div>

          {/* Punchline */}
          <div className="space-y-1">
            <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white leading-tight">
              Building Intelligent Solutions.
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-[#D4D4D8] leading-tight">
              Leading Innovation.
            </p>
          </div>

          {/* Bio sentence */}
          <p className="text-xs sm:text-sm font-mono text-[#A1A1AA] leading-relaxed max-w-xl">
            A developer passionate about Artificial Intelligence, Generative AI, and building technology that creates real-world impact.
          </p>

          {/* Two Stylish Interactive Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-white font-mono text-xs font-black tracking-wider uppercase transition-all active:translate-y-0.5"
              style={{
                background: 'linear-gradient(to bottom, var(--theme-accent-light, #FF7A1A), var(--theme-accent, #E05500))',
                boxShadow: '0 6px 20px var(--theme-accent-glow-subtle, rgba(255,106,0,0.35))',
              }}
            >
              <Sparkles className="w-4 h-4 stroke-[2.5]" />
              <span>EXPLORE MY WORK</span>
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-b from-[#181822] to-[#0D0D14] hover:from-[#222230] hover:to-[#14141E] text-white font-mono text-xs font-bold tracking-wider uppercase border border-[#32323E] hover:border-[var(--theme-accent,#FF6A00)] transition-all shadow-md active:translate-y-0.5"
            >
              <span 
                className="w-2 h-2 rounded-full transition-colors" 
                style={{ backgroundColor: 'var(--theme-accent-light, #38BDF8)' }}
              />
              <span>LET'S CONNECT</span>
            </a>
          </div>
        </div>

        {/* Right Column: Prominent Transparent Portrait Cutout (50% Opacity & Feathered Edge Blend) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[400px] sm:max-w-[460px] lg:max-w-[500px] flex justify-center lg:justify-end">
            {/* Soft Ambient Rim Glow */}
            <div 
              className="absolute inset-0 blur-3xl rounded-full scale-120 pointer-events-none transition-all duration-700" 
              style={{
                background: 'radial-gradient(circle, var(--theme-accent-glow, rgba(255,106,0,0.24)) 0%, var(--theme-accent-glow-subtle, rgba(245,185,0,0.08)) 50%, transparent 70%)',
              }}
            />

            <div 
              className="relative w-[300px] sm:w-[370px] md:w-[420px] lg:w-[450px] xl:w-[490px] transition-transform duration-500 ease-out select-none animate-in fade-in duration-1000"
              style={{
                transform: `translate3d(${mouseParallax.x * -10}px, ${mouseParallax.y * -8}px, 0)`,
              }}
            >
              <img
                src={pushkarTransparentPortrait}
                alt="Pushkar Vishwakarma - AI Engineer"
                className="w-full h-auto object-contain opacity-55 contrast-[1.03] brightness-[0.98] saturate-[1.02] drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] drop-shadow-[0_0_35px_rgba(255,106,0,0.15)]"
                style={{
                  maskImage: `
                    radial-gradient(ellipse 84% 84% at 52% 42%, black 48%, rgba(0,0,0,0.8) 72%, transparent 98%),
                    linear-gradient(to bottom, black 74%, transparent 99%),
                    linear-gradient(to left, black 72%, transparent 98%)
                  `,
                  WebkitMaskImage: `
                    radial-gradient(ellipse 84% 84% at 52% 42%, black 48%, rgba(0,0,0,0.8) 72%, transparent 98%),
                    linear-gradient(to bottom, black 74%, transparent 99%),
                    linear-gradient(to left, black 72%, transparent 98%)
                  `,
                }}
              />

              {/* 4-Way Smooth Cinematic Edge Blending into Pure Black Theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent opacity-95 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#08090B] via-transparent to-transparent opacity-75 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#08090B]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. LOWER CENTRAL AREA: EXISTING HERO HEADING & SUBTITLE (MOVED DOWNWARD WITH AMPLE SPACING) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-3 mb-6 pt-6 border-t border-[#1C1C26]/70">
        <div className="space-y-1.5 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            ENGINEERING INTELLIGENCE
          </h2>

          <p className="text-xs sm:text-base font-mono text-[#D4D4D8] font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Building Intelligent Solutions. Leading Innovation.
          </p>
        </div>

        {/* Professional Identity Subtitle */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#8E8E93] bg-[#0E0E14]/85 px-4 py-1.5 rounded-full border border-[#22222C] backdrop-blur-sm">
          <span className="text-white font-semibold">AI ENGINEER</span>
          <span style={{ color: 'var(--theme-accent-light, #FF6A00)' }} className="font-bold">•</span>
          <span style={{ color: 'var(--theme-accent-light, #FF6A00)' }} className="font-semibold">GENERATIVE AI DEVELOPER</span>
          <span style={{ color: 'var(--theme-accent-light, #FF6A00)' }} className="font-bold">•</span>
          <span className="text-white font-semibold">INNOVATION BUILDER</span>
        </div>
      </div>

      {/* 3. SIGNATURE 3D METALLIC MECHANICAL KEYBOARD CONSOLE */}
      <div className="relative z-10 w-full max-w-4xl mx-auto" id="console">
        <MechanicalConsole onOpenResume={onOpenResume} />
      </div>

      {/* 6. BOTTOM PROFILE SUMMARY & TELEMETRY BADGE BAR */}
      <div className="relative z-10 mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-4xl mx-auto">
        {/* Profile Card */}
        <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#0D0D12]/95 border border-[#262630] backdrop-blur-md shadow-lg">
          <img
            src={pushkarActualPortrait}
            alt="Pushkar Vishwakarma"
            className="w-12 h-12 rounded-xl object-cover object-top border border-[#3E3E48] shadow-md shrink-0"
          />
          <div className="text-left overflow-hidden">
            <p className="text-xs font-display font-bold text-white truncate">Pushkar Vishwakarma</p>
            <p className="text-[11px] font-mono text-[#8E8E93] truncate">{p.location}</p>
            <p className="text-[10px] font-mono font-semibold truncate" style={{ color: 'var(--theme-accent-light, #FF6A00)' }}>Founder @ Team Setu</p>
          </div>
        </div>

        {/* Academic & Ambassador Telemetry */}
        <div className="flex flex-col justify-center p-3 rounded-2xl bg-[#0D0D12]/95 border border-[#262630] backdrop-blur-md shadow-lg text-left font-mono">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[#8E8E93]">ACADEMIC CGPA:</span>
            <span className="text-[#A6E635] font-bold">8.39 / 10.0</span>
          </div>
          <div className="flex items-center justify-between text-[11px] mt-1">
            <span className="text-[#8E8E93]">AMBASSADOR:</span>
            <span className="text-[#38BDF8] font-semibold">GSA 2026</span>
          </div>
          <div className="flex items-center justify-between text-[10px] text-[#8E8E93] mt-1 truncate">
            <span>INSTITUTE:</span>
            <span className="text-white">VITS Bhopal</span>
          </div>
        </div>

        {/* Primary Action Triggers */}
        <div className="flex items-center gap-2 p-3 rounded-2xl bg-[#0D0D12]/95 border border-[#262630] backdrop-blur-md shadow-lg">
          <a
            href="#projects"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-white text-xs font-mono font-black uppercase transition-all shadow-md active:translate-y-0.5"
            style={{
              background: 'linear-gradient(to bottom, var(--theme-accent-light, #FF7A1A), var(--theme-accent, #E05500))',
            }}
          >
            <Terminal className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Projects</span>
          </a>
          <button
            onClick={onOpenResume}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-b from-[#1E1E28] to-[#121218] hover:from-[#262634] hover:to-[#181820] text-white text-xs font-mono font-bold uppercase border border-[#30303E] hover:border-[#F5B900] transition-all active:translate-y-0.5 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#F5B900]" />
            <span>Resume</span>
          </button>
        </div>
      </div>

      {/* Downward Navigation Hint */}
      <a
        href="#about"
        className="relative z-10 mt-8 flex items-center gap-1.5 text-xs font-mono text-[#8E8E93] hover:text-white transition-colors"
      >
        <span>EXPLORE DOSSIER</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" style={{ color: 'var(--theme-accent-light, #FF6A00)' }} />
      </a>
    </section>
  );
};
