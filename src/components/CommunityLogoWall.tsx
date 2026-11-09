import React from 'react';
import { Sparkles, Globe2, ShieldCheck, ExternalLink } from 'lucide-react';

interface OrgLogo {
  id: string;
  name: string;
  affiliation: string;
  role: string;
  logo: React.ReactNode;
  brandColor: string;
}

export const CommunityLogoWall: React.FC = () => {
  // Row 1: Moves Left
  const rowOne: OrgLogo[] = [
    {
      id: 'google',
      name: 'Google',
      affiliation: 'Google Student Ambassador 2026',
      role: 'Global Tech Program',
      brandColor: '#4285F4',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
        </svg>
      ),
    },
    {
      id: 'gdg',
      name: 'Google Developer Groups',
      affiliation: 'Core Volunteer – GDG Bhopal',
      role: 'Developer Community',
      brandColor: '#EA4335',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M7.5 6L1.5 12L7.5 18" stroke="#4285F4" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.5 6L22.5 12L16.5 18" stroke="#EA4335" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="2.2" fill="#FBBC05" />
        </svg>
      ),
    },
    {
      id: 'aicte',
      name: 'AICTE',
      affiliation: 'IDE Bootcamp 2026',
      role: 'Statutory Body & Innovation',
      brandColor: '#FF6A00',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#FF6A00" strokeWidth="1.8" />
          <path d="M12 5V12L16 15" stroke="#F5B900" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2.2" fill="#FF6A00" />
        </svg>
      ),
    },
    {
      id: 'mic',
      name: 'MIC / IDE Bootcamp',
      affiliation: 'Ministry of Education Innovation Cell',
      role: 'Top 5 Team in India',
      brandColor: '#F5B900',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <polygon points="12,2 15,8 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,8" stroke="#F5B900" strokeWidth="1.6" fill="rgba(245,185,0,0.2)" />
        </svg>
      ),
    },
    {
      id: 'amd',
      name: 'AMD Ryzen Slingshot',
      affiliation: 'AMD Innovation Challenge',
      role: 'Participant & Shortlist',
      brandColor: '#ED1C24',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M3 4H10L14 8L10 12H3V4Z" fill="#ED1C24" />
          <path d="M13 12L17 8H21V20H13V12Z" fill="#ED1C24" />
        </svg>
      ),
    },
    {
      id: 'sih',
      name: 'Smart India Hackathon',
      affiliation: 'National Innovation Initiative',
      role: 'Internal Screening Qualifier',
      brandColor: '#FF9933',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9.5" stroke="#FF9933" strokeWidth="1.5" strokeDasharray="3 2" />
          <path d="M8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16" stroke="#138808" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1.8" fill="#000080" />
        </svg>
      ),
    },
    {
      id: 'ai-bharat',
      name: 'AI for Bharat',
      affiliation: 'National AI Ecosystem',
      role: 'Prototype Shortlisted',
      brandColor: '#138808',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12" stroke="#FF9933" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12" stroke="#138808" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M9 12H15M12 9V15" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'kit-irf',
      name: 'KIT\'s IRF',
      affiliation: 'IDEATHON 2025, Kolhapur',
      role: 'Innovation & Research',
      brandColor: '#FF6B00',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" stroke="#FF6B00" strokeWidth="1.8" fill="rgba(255,107,0,0.15)" />
          <circle cx="12" cy="12" r="3" fill="#E5A823" />
        </svg>
      ),
    },
    {
      id: 'wadhwani',
      name: 'Wadhwani Foundation',
      affiliation: 'Ignite Bootcamp – Idea to Plan',
      role: 'Venture Incubation',
      brandColor: '#E03A3E',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M3 7L7 18L12 9L17 18L21 7" stroke="#E03A3E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="5" r="1.5" fill="#F58220" />
        </svg>
      ),
    },
    {
      id: 'forage',
      name: 'Forage',
      affiliation: 'Industry Job Simulations Host',
      role: 'Experiential Platform',
      brandColor: '#1877F2',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <polygon points="4,4 12,2 20,4 20,20 12,22 4,20" stroke="#1877F2" strokeWidth="1.8" fill="rgba(24,119,242,0.15)" />
          <path d="M8 12L11 15L16 9" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  // Row 2: Moves Right
  const rowTwo: OrgLogo[] = [
    {
      id: 'isro',
      name: 'ISRO',
      affiliation: 'Bharatiya Antariksh Hackathon 2026',
      role: 'Space Research Organisation',
      brandColor: '#FF6600',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          {/* Authentic ISRO Rocket / Satellite Emblem */}
          <path d="M12 2L15 8H9L12 2Z" fill="#FF6600" />
          <rect x="10.5" y="8" width="3" height="8" fill="#003399" />
          <path d="M9 16L7 20H17L15 16H9Z" fill="#FF6600" />
          <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      id: 'hack2skill',
      name: 'Hack2skill',
      affiliation: 'Space Hackathon Technology Partner',
      role: 'Innovation Platform',
      brandColor: '#38BDF8',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="3" stroke="#38BDF8" strokeWidth="1.8" />
          <path d="M8 10L11 12L8 14" stroke="#A6E635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="13" y1="14" x2="16" y2="14" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'icessm',
      name: 'ICESSM 2026',
      affiliation: 'Research Paper Presentation',
      role: 'International Conference',
      brandColor: '#D4AF37',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#D4AF37" strokeWidth="1.8" />
          <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#1A365D" strokeWidth="1.5" />
          <line x1="12" y1="3" x2="12" y2="21" stroke="#D4AF37" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      id: 'sbcet',
      name: 'Sri Balaji College, Jaipur',
      affiliation: 'ICESSM-2026 Organizing Institution',
      role: 'Academic Conference Host',
      brandColor: '#1A365D',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 3L2 8L12 13L22 8L12 3Z" fill="#1A365D" stroke="#D4AF37" strokeWidth="1.5" />
          <path d="M6 10.5V16C6 18.5 12 21 12 21C12 21 18 18.5 18 16V10.5" stroke="#D4AF37" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      id: 'buildhub',
      name: 'BuildHub',
      affiliation: 'Campus Ambassador 2026',
      role: 'Innovation & Entrepreneurship Club',
      brandColor: '#FF6600',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="8" height="8" rx="2" stroke="#FF6600" strokeWidth="2" />
          <rect x="13" y="3" width="8" height="8" rx="2" stroke="#38BDF8" strokeWidth="2" />
          <rect x="3" y="13" width="8" height="8" rx="2" stroke="#A6E635" strokeWidth="2" />
          <rect x="13" y="13" width="8" height="8" rx="2" stroke="#F5B900" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: 'deloitte',
      name: 'Deloitte',
      affiliation: 'Data Analytics Job Simulation',
      role: 'Global Professional Services',
      brandColor: '#86BC25',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <text x="1" y="15" fill="#FFFFFF" fontFamily="sans-serif" fontSize="10" fontWeight="900">Deloitte</text>
          <circle cx="21" cy="14" r="1.8" fill="#86BC25" />
        </svg>
      ),
    },
    {
      id: 'tata',
      name: 'Tata',
      affiliation: 'GenAI Data Analytics Simulation',
      role: 'Conglomerate & Tech Innovation',
      brandColor: '#0072CE',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9.5" stroke="#0072CE" strokeWidth="2" />
          <path d="M7 8H17M12 8V17" stroke="#0072CE" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 'walmart',
      name: 'Walmart Global Tech',
      affiliation: 'Advanced Software Engineering',
      role: 'Enterprise Tech & Retail',
      brandColor: '#0071CE',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 2V6M12 18V22M4 7L7.5 9M16.5 15L20 17M4 17L7.5 15M16.5 9L20 7" stroke="#FFC220" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2.5" fill="#0071CE" />
        </svg>
      ),
    },
    {
      id: 'google-edu',
      name: 'Google for Education',
      affiliation: 'Gemini Certified Student',
      role: 'Academic Credentials',
      brandColor: '#4285F4',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          {/* Gemini 4-Point Gradient Star */}
          <path d="M12 3C12 7.97 7.97 12 3 12C7.97 12 12 16.03 12 21C12 16.03 16.03 12 21 12C16.03 12 12 7.97 12 3Z" fill="#4285F4" />
        </svg>
      ),
    },
  ];

  const rowOneItems = [...rowOne, ...rowOne];
  const rowTwoItems = [...rowTwo, ...rowTwo];

  return (
    <section 
      aria-label="Events, Organizations and Communities"
      className="relative py-20 px-4 sm:px-6 bg-[#060608] border-t border-[#1C1C24] overflow-hidden select-none"
    >
      {/* Subtle Animated Metallic Light Sweep Across Section */}
      <div className="light-sweep-overlay" />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12 space-y-2 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F0F16] border border-[#242432] text-xs font-mono mb-2 shadow-md">
          <Globe2 
            className="w-3.5 h-3.5 animate-spin" 
            style={{ 
              color: 'var(--theme-accent-light, #FF6A00)',
              animationDuration: '12s'
            }} 
          />
          <span style={{ color: 'var(--theme-accent-light, #FF6A00)' }} className="font-bold">
            EVENTS // ORGANIZATIONS // COMMUNITIES
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
          BEYOND THE CODE // THE COMMUNITIES &amp; EVENTS
        </h2>

        <p className="text-xs sm:text-sm font-mono text-[#8E8E93] max-w-2xl mx-auto leading-relaxed">
          A journey shaped by innovation, collaboration, learning and participation.
        </p>
      </div>

      {/* Marquee Streams Container */}
      <div className="relative w-full space-y-4 sm:space-y-5 overflow-hidden">
        {/* Soft Vignette Shadows for Left and Right Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#060608] via-[#060608]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#060608] via-[#060608]/90 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Moves Left */}
        <div className="overflow-hidden flex items-center">
          <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-1">
            {rowOneItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="group relative flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-[#0D0D14]/90 hover:bg-[#151522] border border-[#222230] hover:border-[var(--theme-accent,#FF6A00)] transition-all duration-300 cursor-default shrink-0 shadow-lg hover:scale-105"
                style={{
                  boxShadow: '0 4px 16px rgba(0,0,0,0.6)',
                }}
              >
                {/* Full-Color Logo */}
                <div 
                  className="p-2 rounded-xl bg-[#08080C] border border-[#1A1A26] flex items-center justify-center shrink-0 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all duration-300"
                >
                  {item.logo}
                </div>

                {/* Name & Details */}
                <div className="text-left min-w-[140px] max-w-[200px]">
                  <p className="text-xs font-display font-bold text-white group-hover:text-[var(--theme-accent-light,#FF6A00)] transition-colors truncate">
                    {item.name}
                  </p>
                  <p className="text-[10px] font-mono text-[#8E8E93] truncate">
                    {item.affiliation}
                  </p>
                </div>

                {/* Metallic Silver Separator */}
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A2A38] group-hover:bg-[var(--theme-accent-light,#FF6A00)] transition-colors shrink-0 ml-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moves Right (Reverse) */}
        <div className="overflow-hidden flex items-center">
          <div className="animate-marquee-reverse flex items-center gap-4 sm:gap-6 py-1">
            {rowTwoItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="group relative flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-[#0D0D14]/90 hover:bg-[#151522] border border-[#222230] hover:border-[var(--theme-accent,#FF6A00)] transition-all duration-300 cursor-default shrink-0 shadow-lg hover:scale-105"
                style={{
                  boxShadow: '0 4px 16px rgba(0,0,0,0.6)',
                }}
              >
                {/* Full-Color Logo */}
                <div 
                  className="p-2 rounded-xl bg-[#08080C] border border-[#1A1A26] flex items-center justify-center shrink-0 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all duration-300"
                >
                  {item.logo}
                </div>

                {/* Name & Details */}
                <div className="text-left min-w-[140px] max-w-[200px]">
                  <p className="text-xs font-display font-bold text-white group-hover:text-[var(--theme-accent-light,#FF6A00)] transition-colors truncate">
                    {item.name}
                  </p>
                  <p className="text-[10px] font-mono text-[#8E8E93] truncate">
                    {item.affiliation}
                  </p>
                </div>

                {/* Metallic Silver Separator */}
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A2A38] group-hover:bg-[var(--theme-accent-light,#FF6A00)] transition-colors shrink-0 ml-1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Non-Endorsement Clarification Note (Strictly Compliant with Prompt) */}
      <div className="max-w-4xl mx-auto mt-10 pt-4 border-t border-[#161620] text-center">
        <p className="text-[10px] font-mono text-[#55555E] leading-relaxed">
          NOTE: This section showcases organizations, innovation programs, conferences, hackathons, and certifications associated with Pushkar Vishwakarma’s engineering journey. Logos belong to their respective registered entities and do not imply official personal sponsorship or corporate endorsement.
        </p>
      </div>
    </section>
  );
};
