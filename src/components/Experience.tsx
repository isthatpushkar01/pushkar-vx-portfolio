import React from 'react';
import { Briefcase, Users, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const experiences = PORTFOLIO_DATA.experience;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#1C1C22]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#A6E635] uppercase tracking-wider mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>03 // LEADERSHIP &amp; ENGAGEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
            LEADERSHIP IS BUILT THROUGH ACTION.
          </h2>
        </div>
        <p className="text-xs font-mono text-[#8E8E93]">
          ACTIVE ROLES &amp; INSTITUTIONAL RESPONSIBILITIES
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="p-6 rounded-2xl bg-[#0D0D12] border border-[#222228] hover:border-[#FF6A00]/50 transition-all duration-300 flex flex-col justify-between group shadow-md"
          >
            <div>
              <div className="flex items-start justify-between gap-2 pb-3 border-b border-[#1E1E24] mb-4">
                <div>
                  <span className="text-[10px] font-mono text-[#FF6A00] font-bold uppercase tracking-wider">
                    {exp.badge || 'LEADERSHIP'}
                  </span>
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-[#FF6A00] transition-colors">
                    {exp.title}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#8E8E93] shrink-0 bg-[#14141A] px-2 py-0.5 rounded border border-[#222228]">
                  {exp.period}
                </span>
              </div>

              <p className="text-xs font-mono text-[#F5B900] mb-3">
                {exp.organization}
              </p>

              <p className="text-xs text-[#8E8E93] leading-relaxed mb-4">
                {exp.description}
              </p>

              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <ul className="space-y-1.5 text-xs text-[#8E8E93] pt-2 border-t border-[#181820]">
                  {exp.responsibilities.slice(0, 3).map((r, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#A6E635] font-bold">›</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-6 pt-3 border-t border-[#1C1C22] flex items-center justify-between text-[11px] font-mono text-[#55555A]">
              <span>VERIFIED APPOINTMENT</span>
              <span className="text-[#A6E635] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ACTIVE</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
