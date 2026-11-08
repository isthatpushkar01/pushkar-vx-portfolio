import React from 'react';
import { Trophy, Award, Target, Flame, Flag, Star } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Innovation: React.FC = () => {
  const hackathons = PORTFOLIO_DATA.hackathons;

  return (
    <section id="innovation" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#1C1C22] relative">
      <div id="publications" className="absolute -top-20" />
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF6A00] uppercase tracking-wider mb-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>06 // COMPETITIONS, RESEARCH &amp; INNOVATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
            WHERE IDEAS MEET EXECUTION.
          </h2>
        </div>
        <p className="text-xs font-mono text-[#8E8E93]">
          NATIONAL HACKATHONS · INCUBATION SPRINTS · PODIUM FINISHES
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hackathons.map((h) => (
          <div
            key={h.id}
            className="p-6 rounded-2xl bg-[#0D0D12] border border-[#222228] hover:border-[#FF6A00]/50 transition-all duration-300 flex flex-col justify-between shadow-md"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#1E1E24] mb-4">
                <span className="text-[10px] font-mono font-bold text-[#FF6A00] bg-[#FF6A00]/10 px-2.5 py-0.5 rounded border border-[#FF6A00]/30">
                  {h.location}
                </span>
                <span className="text-[11px] font-mono text-[#A6E635] font-semibold">
                  {h.tag}
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-white mb-1">
                {h.title}
              </h3>

              <p className="text-xs font-mono text-[#F5B900] mb-3">
                {h.roleOrResult}
              </p>

              <p className="text-xs text-[#8E8E93] leading-relaxed">
                {h.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-[#1C1C22] flex items-center justify-between text-[11px] font-mono text-[#55555A]">
              <span>YEAR: {h.year}</span>
              <span className="text-[#A6E635] flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                <span>OFFICIAL PODIUM</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
