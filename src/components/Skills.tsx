import React, { useState } from 'react';
import { Cpu, Terminal, Sparkles, Layers, Database, Wrench, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FloatingAssistantDrone } from './CyberneticEasterEggs';

export const Skills: React.FC = () => {
  const skillCategories = PORTFOLIO_DATA.skills;
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; projectLinked?: string[] } | null>(null);

  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming Languages': <Terminal className="w-4 h-4 text-[#FF6A00]" />,
    'AI & Machine Learning': <Cpu className="w-4 h-4 text-[#A6E635]" />,
    'Frameworks & Web': <Layers className="w-4 h-4 text-[#38BDF8]" />,
    'Libraries & Data': <Database className="w-4 h-4 text-[#F08BAE]" />,
    'AI Platforms & Cloud': <Sparkles className="w-4 h-4 text-[#F5B900]" />,
    'Developer Tools': <Wrench className="w-4 h-4 text-[#C6C6C6]" />,
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#1C1C22]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#A6E635] uppercase tracking-wider mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>05 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
            MY TECHNOLOGY STACK.
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <FloatingAssistantDrone />
          <p className="text-xs font-mono text-[#8E8E93]">
            TACTILE SWITCHES · MODULAR LIBRARIES · HARDWARE ACCELERATION
          </p>
        </div>
      </div>

      {/* Interactive Active Skill Inspector Banner */}
      <div className="mb-8 p-4 rounded-xl bg-[#0C0C12] border border-[#242430] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF6A00] animate-pulse" />
          <span className="text-[#8E8E93]">SKILL_INSPECTOR:</span>
          {selectedSkill ? (
            <span className="text-white font-bold bg-[#1C1C28] px-2.5 py-1 rounded border border-[#303040]">
              {selectedSkill.name}
            </span>
          ) : (
            <span className="text-[#8E8E93] italic">Click or hover any skill below to inspect project linkage</span>
          )}
        </div>

        {selectedSkill && selectedSkill.projectLinked && (
          <div className="flex items-center gap-2 text-xs text-[#A6E635] flex-wrap">
            <span className="text-[#8E8E93]">POWERING:</span>
            {selectedSkill.projectLinked.map((proj, idx) => (
              <span key={idx} className="bg-[#122218] px-2 py-0.5 rounded border border-[#A6E635]/40 text-white font-semibold">
                {proj}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#0D0D12] border border-[#222228] hover:border-[#383842] transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-[#1E1E24] mb-4">
                <div className="p-2 rounded-lg bg-[#14141A] border border-[#262632]">
                  {categoryIcons[cat.category] || <Terminal className="w-4 h-4 text-[#FF6A00]" />}
                </div>
                <div>
                  <h3 className="text-sm font-display font-bold text-white">
                    {cat.category}
                  </h3>
                  <span className="text-[10px] font-mono text-[#8E8E93]">
                    {cat.skills.length} MODULES READY
                  </span>
                </div>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => {
                  const isInspected = selectedSkill?.name === skill.name;
                  return (
                    <button
                      key={sIdx}
                      onClick={() => setSelectedSkill(skill)}
                      onMouseEnter={() => setSelectedSkill(skill)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        isInspected
                          ? 'bg-[#FF6A00] text-black font-bold shadow-[0_0_12px_rgba(255,106,0,0.4)] scale-105'
                          : 'bg-[#14141C] text-[#E5E2E1] border border-[#242430] hover:border-[#FF6A00]/50'
                      }`}
                    >
                      {skill.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#1C1C22] flex items-center justify-between text-[11px] font-mono text-[#55555A]">
              <span>ACTIVE IN PRODUCTION</span>
              <span className="text-[#A6E635]">100%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
