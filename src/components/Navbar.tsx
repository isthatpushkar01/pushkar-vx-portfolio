import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Send, Menu, X, Radio } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SoundSystem } from './SoundSystem';
import { RecognitionStrip } from './RecognitionStrip';

interface NavbarProps {
  onOpenResume: () => void;
}

interface NavItem {
  id: string;
  label: string;
  targetId: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const p = PORTFOLIO_DATA.personal;
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { id: 'console', label: 'CONSOLE', targetId: 'hero' },
    { id: 'timeline', label: 'TIMELINE', targetId: 'journey' },
    { id: 'experience', label: 'EXPERIENCE', targetId: 'experience' },
    { id: 'projects', label: 'PROJECTS', targetId: 'projects' },
    { id: 'stack', label: 'STACK', targetId: 'skills' },
    { id: 'expeditions', label: 'EXPEDITIONS', targetId: 'explore' },
    { id: 'publications', label: 'PUBLICATIONS', targetId: 'publications' },
    { id: 'certificates', label: 'CERTIFICATES', targetId: 'certifications' },
    { id: 'contact', label: 'CONTACT', targetId: 'contact' },
  ];

  // Synthesized mechanical click sound
  const playButtonSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();

      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(480, t);
      osc.frequency.exponentialRampToValueAtTime(140, t + 0.025);

      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.025);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.03);
    } catch {
      // Audio fallback
    }
  };

  // Scroll spy to highlight active section
  useEffect(() => {
    const sectionIds = ['hero', 'journey', 'experience', 'projects', 'skills', 'explore', 'publications', 'certifications', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollY >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (targetId: string, itemId: string) => {
    playButtonSound();
    setClickedItem(itemId);
    setActiveSection(targetId);
    setMobileMenuOpen(false);

    setTimeout(() => {
      setClickedItem(null);
    }, 180);

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08090B]/90 backdrop-blur-xl border-b border-[#202028] shadow-2xl">
      {/* Absolute Top: Recognition and Achievements Brand Strip */}
      <RecognitionStrip />

      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Left: Brand Identity */}
        <a 
          href="#hero" 
          onClick={() => handleNavClick('hero', 'console')}
          className="flex items-center gap-2.5 group shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6A00] to-[#F5B900] flex items-center justify-center font-display font-black text-black text-xs shadow-[0_0_12px_rgba(255,106,0,0.5)] group-hover:scale-105 transition-transform">
            VX
          </div>
          <div className="hidden sm:block">
            <div className="text-xs font-display font-extrabold text-white tracking-widest flex items-center gap-1.5">
              <span>PUSHKAR.VX</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#A6E635] inline-block animate-pulse shadow-[0_0_6px_#A6E635]" />
            </div>
            <p className="text-[9px] font-mono text-[#8E8E93] tracking-wider leading-none">
              AI SYSTEM // CONSOLE
            </p>
          </div>
        </a>

        {/* Center: Desktop Mechanical Navigation Row */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.targetId;
            const isPressed = clickedItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.targetId, item.id)}
                className={`group relative px-2.5 py-1.5 rounded-md font-mono text-[10px] xl:text-[11px] font-bold tracking-wider uppercase transition-all duration-100 cursor-pointer select-none flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-b from-[#252532] to-[#14141B] text-[#FF6A00] border border-[#FF6A00] shadow-[0_0_12px_rgba(255,106,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] translate-y-0.5'
                    : 'bg-gradient-to-b from-[#1E1E26] via-[#16161D] to-[#0F0F14] text-[#C4C4C8] hover:text-white border border-[#32323E] hover:border-[#FF6A00]/70 shadow-[0_2.5px_0_#09090C,0_4px_6px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 hover:shadow-[0_4px_0_#09090C,0_0_12px_rgba(255,106,0,0.25)]'
                } ${isPressed ? 'translate-y-1 shadow-[0_0_0_#09090C,inset_0_2px_4px_rgba(0,0,0,0.6)] !border-[#FF6A00]' : ''}`}
                style={{
                  textShadow: isActive ? '0 0 8px rgba(255, 106, 0, 0.4)' : undefined,
                }}
                title={`Navigate to ${item.label}`}
              >
                {/* Active Indicator LED */}
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse shadow-[0_0_6px_#FF6A00] shrink-0" />
                )}

                <span>{item.label}</span>

                {/* Bottom Active Glow Bar */}
                {isActive && (
                  <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-[#FF6A00] rounded-full shadow-[0_0_6px_#FF6A00]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Action Triggers (Sound System, Resume & Connect) */}
        <div className="flex items-center gap-2 shrink-0">
          {/* PUSHKAR.VX // SOUND SYSTEM (YouTube Audio Player) */}
          <SoundSystem />

          <button
            onClick={() => {
              playButtonSound();
              onOpenResume();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gradient-to-b from-[#22222C] to-[#121218] hover:from-[#2B2B38] hover:to-[#171720] border border-[#3E3E4C] hover:border-[#F5B900] text-[#F5B900] text-[11px] font-mono font-bold tracking-wider shadow-[0_2px_0_#0A0A0E,0_3px_6px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 transition-all cursor-pointer active:translate-y-0.5"
            title="Open Verified Curriculum Vitae"
          >
            <FileText className="w-3.5 h-3.5 text-[#F5B900]" />
            <span className="hidden sm:inline">RESUME</span>
          </button>

          <a
            href="#contact"
            onClick={() => handleNavClick('contact', 'contact')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gradient-to-b from-[#FF7A1A] to-[#E05500] hover:from-[#FF8C33] hover:to-[#EB6000] text-black text-[11px] font-mono font-black tracking-wider uppercase shadow-[0_2.5px_0_#803000,0_4px_10px_rgba(255,106,0,0.4)] hover:-translate-y-0.5 transition-all active:translate-y-0.5 cursor-pointer"
          >
            <Send className="w-3 h-3 text-black stroke-[3]" />
            <span>CONNECT</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md bg-[#16161D] border border-[#30303C] text-white hover:text-[#FF6A00] transition-colors cursor-pointer"
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF6A00]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Control Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#252530] bg-[#0A0A0F]/98 backdrop-blur-2xl p-4 animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.targetId;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.targetId, item.id)}
                  className={`p-2.5 rounded-md font-mono text-xs font-bold tracking-wider uppercase text-left flex items-center justify-between transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1E1E28] text-[#FF6A00] border border-[#FF6A00] shadow-[0_0_10px_rgba(255,106,0,0.25)]'
                      : 'bg-[#121217] text-[#C4C4C8] hover:text-white border border-[#2B2B36]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
