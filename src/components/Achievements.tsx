import React from 'react';
import { Award, ShieldCheck, Trophy, Users, Cpu, Star } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const achievements = PORTFOLIO_DATA.achievements;

  const plaqueIcons: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#38BDF8]" />,
    Trophy: <Trophy className="w-5 h-5 text-[#FF6A00]" />,
    Users: <Users className="w-5 h-5 text-[#A6E635]" />,
    Cpu: <Cpu className="w-5 h-5 text-[#F5B900]" />,
    Award: <Award className="w-5 h-5 text-[#F08BAE]" />,
    Star: <Star className="w-5 h-5 text-[#FF6A00]" />,
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#1C1C22]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#F5B900] uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>08 // DISTINCTIONS &amp; HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
            MILESTONES THAT MATTER.
          </h2>
        </div>
        <p className="text-xs font-mono text-[#8E8E93]">
          OFFICIAL RECOGNITIONS &amp; VERIFIED PLAQUES
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((ach, idx) => (
          <div
            key={ach.id}
            className="p-6 rounded-2xl bg-[#0D0D12] border border-[#24242C] hover:border-[#FF6A00]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#1E1E24] mb-4">
                <span className="text-[10px] font-mono font-bold text-[#FF6A00] tracking-wider uppercase">
                  PLAQUE #0{idx + 1}
                </span>
                <div className="p-2 rounded-lg bg-[#14141C] border border-[#262634]">
                  {plaqueIcons[ach.iconName] || <Award className="w-5 h-5 text-[#FF6A00]" />}
                </div>
              </div>

              <h3 className="text-lg font-display font-bold text-white group-hover:text-[#FF6A00] transition-colors mb-1">
                {ach.title}
              </h3>

              <p className="text-xs font-mono text-[#A6E635] mb-3">
                {ach.organization} · {ach.year}
              </p>

              <p className="text-xs text-[#8E8E93] leading-relaxed">
                {ach.detail}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-[#1C1C22] flex items-center justify-between text-[11px] font-mono text-[#55555A]">
              <span>VERIFIED MILESTONE</span>
              <span className="text-[#A6E635]">ACCREDITED</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
