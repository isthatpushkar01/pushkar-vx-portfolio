import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenResume?: () => void;
}

const INSTAGRAM_URL =
  'https://www.instagram.com/_is.that.pushkar_?psln=MW9yZ29jeXlsejVpbw==';

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const p = PORTFOLIO_DATA.personal;

  return (
    <footer className="border-t border-[#1C1C22] bg-[#070709] py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs">
        {/* Brand & Identity */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--theme-accent-light, #FF6A00)' }}
            />
            <span className="font-display font-bold text-white tracking-widest text-sm">
              PUSHKAR.VX // AI ENGINEER
            </span>
          </div>
          <p className="text-[#8E8E93] text-center md:text-left text-[11px]">
            © {new Date().getFullYear()} Pushkar Vishwakarma. All rights reserved.
          </p>
        </div>

        {/* Navigation & Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-[#8E8E93]">
          <a href="#about" className="hover:text-white transition-colors">
            ABOUT
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            PROJECTS
          </a>
          <a href="#publications" className="hover:text-white transition-colors">
            RESEARCH
          </a>
          <a href="#certifications" className="hover:text-white transition-colors">
            CERTIFICATES
          </a>
          {onOpenResume && (
            <button
              type="button"
              onClick={onOpenResume}
              className="hover:text-white transition-colors cursor-pointer"
            >
              RESUME
            </button>
          )}
          <a
            href={p.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white hover:text-[var(--theme-accent-light,#FF6A00)] transition-colors"
            aria-label="Connect with Pushkar on Instagram"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
            </svg>
            <span>INSTAGRAM</span>
          </a>
          <a
            href="#contact"
            className="transition-colors font-bold"
            style={{ color: 'var(--theme-accent-light, #FF6A00)' }}
          >
            CONNECT
          </a>
        </div>
      </div>
    </footer>
  );
};
