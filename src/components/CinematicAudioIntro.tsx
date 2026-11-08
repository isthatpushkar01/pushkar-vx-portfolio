import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Terminal, Disc3 } from 'lucide-react';
import { youtubeSoundSystem } from '../audio/youtubeSoundSystem';

export const CinematicAudioIntro: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    try {
      const alreadyVisited = sessionStorage.getItem('vx_visited');
      if (!alreadyVisited) {
        setIsOpen(true);
      }
    } catch {
      // Storage fallback
    }
  }, []);

  const handleEnterWithSound = () => {
    try {
      sessionStorage.setItem('vx_visited', 'true');
    } catch {
      // Storage fallback
    }

    youtubeSoundSystem.setMuted(false);
    youtubeSoundSystem.play();

    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 400);
  };

  const handleContinueSilently = () => {
    try {
      sessionStorage.setItem('vx_visited', 'true');
    } catch {
      // Storage fallback
    }

    youtubeSoundSystem.pause();
    youtubeSoundSystem.setMuted(true);

    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#050507]/92 backdrop-blur-2xl transition-all duration-500 ${
        isClosing ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Ambient Cybernetic Lighting */}
      <div className="absolute inset-0 bg-radial from-[#FF6A00]/15 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Futuristic Console Chassis Modal */}
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0D0D12] border-2 border-[#2B2B38] shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_35px_rgba(255,106,0,0.15)] overflow-hidden">
        {/* Top Metallic Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#171720] via-[#111116] to-[#171720] border-b border-[#252532]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A6E635] animate-ping shadow-[0_0_8px_#A6E635]" />
            <span className="font-mono text-xs tracking-widest text-[#FF6A00] font-bold">
              PUSHKAR.VX // SOUND SYSTEM INITIALIZATION
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#323242]" />
            <span className="w-2 h-2 rounded-full bg-[#323242]" />
            <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
          </div>
        </div>

        {/* Modal Interior */}
        <div className="p-6 sm:p-8 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15151E] border border-[#2B2B3C] text-[11px] font-mono text-[#8E8E93]">
            <Disc3 className="w-3.5 h-3.5 text-[#FF6A00] animate-spin" />
            <span>CURATED SOUNDTRACK EXPERIENCE</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white uppercase">
              ENTER PUSHKAR.VX EXPERIENCE
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#FF6A00] font-semibold tracking-wider uppercase">
              AI ENGINEER • INNOVATION BUILDER
            </p>
            <p className="text-xs sm:text-sm font-mono text-[#A1A1AA] pt-1 max-w-md mx-auto leading-relaxed">
              Experience the portfolio with your selected curated tracks via the official embedded YouTube sound system.
            </p>
          </div>

          {/* Interactive Entry Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={handleEnterWithSound}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-b from-[#FF7A1A] to-[#E05500] hover:from-[#FF8C33] hover:to-[#EB6000] text-black font-mono text-xs font-black tracking-wider uppercase transition-all shadow-[0_6px_24px_rgba(255,106,0,0.45)] active:translate-y-0.5 cursor-pointer"
            >
              <Volume2 className="w-4 h-4 stroke-[2.5]" />
              <span>ENTER WITH SOUND</span>
            </button>

            <button
              onClick={handleContinueSilently}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-b from-[#1E1E28] to-[#121218] hover:from-[#282834] hover:to-[#171720] text-[#D4D4D8] hover:text-white font-mono text-xs font-bold tracking-wider uppercase border border-[#323242] hover:border-[#666675] transition-all shadow-md active:translate-y-0.5 cursor-pointer"
            >
              <VolumeX className="w-4 h-4 text-[#8E8E93]" />
              <span>CONTINUE SILENTLY</span>
            </button>
          </div>

          <p className="text-[10px] font-mono text-[#55555A]">
            You can switch tracks, pause, or adjust volume anytime from the sound console.
          </p>
        </div>

        {/* Bottom Accent Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent" />
      </div>
    </div>
  );
};
