import React from 'react';
import { Award, BookOpen, GraduationCap, MapPin, Sparkles, User, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const p = PORTFOLIO_DATA.personal;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#1C1C22]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF6A00] uppercase tracking-wider mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // IDENTITY DOSSIER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
            BEYOND CODE. BEYOND LIMITS.
          </h2>
        </div>
        <p className="text-xs font-mono text-[#8E8E93]">
          SYS_ID: PUSHKAR-VISHWAKARMA // REV: 2026.4
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Bio Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0D0D12] border border-[#222228] space-y-4">
            <h3 className="text-xl font-display font-bold text-white">
              Pushkar Vishwakarma — Engineering Intelligence, Architecting Communities.
            </h3>
            <p className="text-sm sm:text-base text-[#8E8E93] leading-relaxed">
              I am an Artificial Intelligence and Machine Learning student, developer, and innovation-driven student leader based in Bhopal, India. Currently pursuing B.Tech in Artificial Intelligence &amp; Machine Learning at Vaishnavi Institute of Technology &amp; Science, Bhopal (2023–2027) with an academic CGPA of <span className="text-[#A6E635] font-mono font-bold">8.39</span>.
            </p>
            <p className="text-sm sm:text-base text-[#8E8E93] leading-relaxed">
              My journey revolves around building end-to-end intelligent applications, exploring emerging Generative AI architectures, participating in national hackathons, and empowering student developer communities.
            </p>
            <p className="text-sm sm:text-base text-[#8E8E93] leading-relaxed">
              From founding <span className="text-white font-semibold">Team Setu</span> to serving as <span className="text-white font-semibold">President of the Student Activity Council</span> and representing our institution as a <span className="text-[#FF6A00] font-semibold">Google Student Ambassador (2026)</span>, I believe in learning by building, leading through action, and creating technology that makes a tangible real-world difference.
            </p>

            {/* Quick Metrics */}
            <div className="pt-4 border-t border-[#1E1E24] grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono">
              <div>
                <p className="text-xs text-[#8E8E93]">LOCATION</p>
                <p className="text-sm font-semibold text-white">Bhopal, MP, India</p>
              </div>
              <div>
                <p className="text-xs text-[#8E8E93]">NETWORK</p>
                <p className="text-sm font-semibold text-[#A6E635]">{p.communitySize}</p>
              </div>
              <div>
                <p className="text-xs text-[#8E8E93]">STATUS</p>
                <p className="text-sm font-semibold text-[#38BDF8]">Open to Internships</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Verified Hardware Spec Sheet */}
        <div className="lg:col-span-5 space-y-4 font-mono">
          <div className="p-6 rounded-2xl bg-[#09090D] border border-[#26262E] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#202026]">
              <span className="text-xs text-[#FF6A00] font-bold uppercase tracking-wider">
                HARDWARE SPEC SHEET
              </span>
              <span className="text-[10px] text-[#8E8E93]">SPEC: 2026-DEV</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-start justify-between py-1.5 border-b border-[#18181E]">
                <span className="text-[#8E8E93]">INSTITUTION:</span>
                <span className="text-white text-right font-sans font-medium">{p.education.institution}</span>
              </div>
              <div className="flex items-start justify-between py-1.5 border-b border-[#18181E]">
                <span className="text-[#8E8E93]">DEGREE:</span>
                <span className="text-white text-right font-sans font-medium">{p.education.degree}</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[#18181E]">
                <span className="text-[#8E8E93]">CUMULATIVE CGPA:</span>
                <span className="text-[#A6E635] font-bold text-sm">8.39 / 10.0</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[#18181E]">
                <span className="text-[#8E8E93]">CAMPUS INITIATIVE:</span>
                <span className="text-white font-semibold">Founder @ Team Setu</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[#18181E]">
                <span className="text-[#8E8E93]">STUDENT COUNCIL:</span>
                <span className="text-white font-semibold">President – SAC VITS</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[#18181E]">
                <span className="text-[#8E8E93]">AMBASSADOR:</span>
                <span className="text-[#FF6A00] font-semibold">Google Student Ambassador '26</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-[#8E8E93]">COMMUNITY ROLE:</span>
                <span className="text-white font-semibold">Core Volunteer, GDG Bhopal</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#121218] border border-[#202028] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#A6E635]">
                <span className="w-2 h-2 rounded-full bg-[#A6E635] animate-pulse" />
                <span>SYS_DIAGNOSTIC: VERIFIED</span>
              </div>
              <span className="text-[#8E8E93]">T&amp;P CELL DELEGATE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
