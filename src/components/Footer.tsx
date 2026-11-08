import React from 'react';
import { Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const p = PORTFOLIO_DATA.personal;

  return (
    <footer className="border-t border-[#1C1C22] bg-[#070709] py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs">
        {/* Brand & Identity */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
            <span className="font-display font-bold text-white tracking-widest text-sm">
              PUSHKAR.VX // AI ENGINEER
            </span>
          </div>
          <p className="text-[#8E8E93] text-center md:text-left text-[11px]">
            © {new Date().getFullYear()} Pushkar Vishwakarma. All telemetry logged.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[#8E8E93]">
          <a href="#about" className="hover:text-white transition-colors">
            ABOUT
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            PROJECTS
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            STACK
          </a>
          <a href="#journey" className="hover:text-white transition-colors">
            JOURNEY
          </a>
          <a href="#contact" className="hover:text-[#FF6A00] transition-colors">
            CONNECT
          </a>
        </div>
      </div>
    </footer>
  );
};
