/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Innovation } from './components/Innovation';
import { Explore } from './components/Explore';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { BeyondTech } from './components/BeyondTech';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CustomCursor } from './components/CustomCursor';
import { CommunityLogoWall } from './components/CommunityLogoWall';
import { WebSlingingCyberHero } from './components/CyberneticEasterEggs';
import { Terminal, Keyboard, Sparkles } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [hudVisible, setHudVisible] = useState(true);

  useEffect(() => {
    let frameId: number | null = null;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    const handlePointer = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!frameId) {
        frameId = requestAnimationFrame(() => {
          document.documentElement.style.setProperty('--mouse-x', `${targetX}px`);
          document.documentElement.style.setProperty('--mouse-y', `${targetY}px`);
          frameId = null;
        });
      }
    };

    window.addEventListener('mousemove', handlePointer, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handlePointer);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-[#08090B] text-[#F5F5F5] relative selection:bg-[var(--theme-selection,rgba(255,106,0,0.3))] selection:text-white"
    >
      {/* Premium Custom Mechanical Reticle Cursor */}
      <CustomCursor />

      {/* Subtle Distant Cybernetic Easter Egg */}
      <WebSlingingCyberHero />

      {/* Official YouTube IFrame Player Persistent Node */}
      <div 
        id="yt-embedded-soundtrack-player" 
        aria-hidden="true" 
        className="fixed -top-[9999px] -left-[9999px] w-1 h-1 opacity-0 pointer-events-none" 
      />

      {/* Dynamic ambient mouse spotlight */}
      <div className="fixed inset-0 spotlight-overlay z-30 pointer-events-none" />

      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Journey />
        <Experience />
        <Projects />
        <Skills />
        <Innovation />
        <Explore />
        <Achievements />
        <Certifications />
        <BeyondTech />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Distinctive Animated Bottom Community Logo Wall (Requirement 5) */}
      <CommunityLogoWall />

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating Interactive Keyboard Helper HUD */}
      {hudVisible && (
        <aside 
          aria-label="Keyboard Shortcuts HUD"
          className="fixed bottom-4 right-4 z-40 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#111116]/90 border border-[#2B2B36] backdrop-blur-md shadow-2xl text-[11px] font-mono text-[#8E8E93]"
        >
          <Keyboard className="w-3.5 h-3.5 text-[var(--theme-accent-light,#FF6A00)]" />
          <span>KEYBOARD NAV:</span>
          <span className="text-white font-bold bg-[#1C1C24] px-1.5 py-0.5 rounded border border-[#333340]">[P]</span>
          <span className="text-white font-bold bg-[#1C1C24] px-1.5 py-0.5 rounded border border-[#333340]">[O]</span>
          <span className="text-white font-bold bg-[#1C1C24] px-1.5 py-0.5 rounded border border-[#333340]">[R]</span>
          <span className="text-white font-bold bg-[#1C1C24] px-1.5 py-0.5 rounded border border-[#333340]">[T]</span>
          <span className="text-white font-bold bg-[#1C1C24] px-1.5 py-0.5 rounded border border-[#333340]">[F]</span>
          <button
            onClick={() => setHudVisible(false)}
            className="ml-2 text-[#55555A] hover:text-white transition-colors cursor-pointer"
            title="Dismiss HUD"
          >
            ✕
          </button>
        </aside>
      )}
    </div>
  );
}
