import React, { useState } from 'react';
import { Calendar, ChevronRight, Sparkles, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const milestones = PORTFOLIO_DATA.timeline;
  const [selectedYear, setSelectedYear] = useState<string>('2026');

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#1C1C22]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#F5B900] uppercase tracking-wider mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>02 // CHRONOLOGICAL LOGS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
            THE JOURNEY SO FAR.
          </h2>
        </div>
        <p className="text-xs font-mono text-[#8E8E93]">
          ACTIVE TIMELINE: 2023 – 2027 HORIZON
        </p>
      </div>

      {/* Year Selection Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-8 font-mono">
        {milestones.map((m) => {
          const isSelected = selectedYear === m.year;
          return (
            <button
              key={m.year}
              onClick={() => setSelectedYear(m.year)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#FF6A00] text-black shadow-[0_0_15px_rgba(255,106,0,0.4)]'
                  : 'bg-[#121216] text-[#8E8E93] hover:text-white border border-[#222228]'
              }`}
            >
              YEAR {m.year}
            </button>
          );
        })}
      </div>

      {/* Timeline Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {milestones.map((m) => {
          const isSelected = selectedYear === m.year;
          return (
            <div
              key={m.year}
              className={`p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#101015] border-2 border-[#FF6A00]/70 shadow-[0_0_25px_rgba(255,106,0,0.15)] scale-[1.02]'
                  : 'bg-[#0D0D11] border border-[#202026] opacity-80 hover:opacity-100'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#202026] mb-4">
                  <span className="text-2xl font-display font-black text-white">
                    {m.year}
                  </span>
                  <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                    m.year === '2026'
                      ? 'bg-[#A6E635]/10 text-[#A6E635] border border-[#A6E635]/30'
                      : 'bg-[#181820] text-[#8E8E93]'
                  }`}>
                    {m.highlight || 'PHASE'}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-white mb-1">
                  {m.title}
                </h3>
                <p className="text-xs font-mono text-[#FF6A00] mb-4">
                  {m.subtitle}
                </p>

                <ul className="space-y-2 text-xs text-[#8E8E93]">
                  {m.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-[#FF6A00] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-[#1C1C22] flex items-center justify-between text-[11px] font-mono text-[#55555A]">
                <span>ENTRY #{m.year}</span>
                <span>STATUS: ARCHIVED</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
