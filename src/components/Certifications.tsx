import React from 'react';
import { ShieldCheck, Award, FileCheck, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const certifications = PORTFOLIO_DATA.certifications;

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#1C1C22]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
            <FileCheck className="w-3.5 h-3.5" />
            <span>09 // CREDENTIAL VAULT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
            LEARNING NEVER STOPS.
          </h2>
        </div>
        <p className="text-xs font-mono text-[#8E8E93]">
          8 VERIFIED INDUSTRY CREDENTIALS &amp; SIMULATIONS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {certifications.map((c) => (
          <div
            key={c.id}
            className="p-5 rounded-2xl bg-[#09090D] border border-[#202028] hover:border-[#333340] transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-[#181820] mb-3">
                <span className="text-[10px] font-mono text-[#8E8E93] uppercase font-bold">
                  {c.issuer}
                </span>
                <span className="text-[10px] font-mono text-[#A6E635]">
                  {c.year}
                </span>
              </div>

              <h3 className="text-sm font-display font-bold text-white mb-1.5">
                {c.title}
              </h3>

              <p className="text-xs text-[#8E8E93] leading-relaxed">
                {c.credentialNote}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#16161E] flex items-center justify-between text-[10px] font-mono text-[#55555A]">
              <span>{c.category}</span>
              <span className="text-[#A6E635] flex items-center gap-1 font-semibold">
                <CheckCircle className="w-3 h-3" />
                VERIFIED
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
