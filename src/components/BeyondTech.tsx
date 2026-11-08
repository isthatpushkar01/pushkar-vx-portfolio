import React from 'react';
import { Users, Mic, Calendar, HeartHandshake, Lightbulb, Zap } from 'lucide-react';

export const BeyondTech: React.FC = () => {
  const pillars = [
    {
      icon: <Users className="w-5 h-5 text-[#FF6A00]" />,
      title: 'Team Leadership',
      desc: 'Directing 250+ student members across multiple project squads. Translating ambiguous objectives into actionable GitHub issues, sprint milestones, and high-velocity shipping culture.',
    },
    {
      icon: <Mic className="w-5 h-5 text-[#A6E635]" />,
      title: 'Public Speaking',
      desc: 'Delivering technical keynotes, AI architecture walkthroughs, and opening presidential addresses before collegiate auditoriums of 800+ attendees.',
    },
    {
      icon: <Calendar className="w-5 h-5 text-[#F5B900]" />,
      title: 'Event Management',
      desc: 'Spearheading logistics, finance, stage engineering, and speaker curation for institutional technical festivals and state-level hackathon qualifiers.',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#38BDF8]" />,
      title: 'Community Building',
      desc: 'Scaling grassroots engineering communities from zero to thriving networks through open knowledge sharing, peer programming, and mutual accountability.',
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-[#F08BAE]" />,
      title: 'First-Principles Problem Solving',
      desc: 'Deconstructing intractable real-world roadblocks—from student placement preparedness to regional water quality monitoring—into structured engineering pipelines.',
    },
    {
      icon: <Zap className="w-5 h-5 text-[#A6E635]" />,
      title: 'High-Stakes Hackathons',
      desc: 'Thriving under 24-hour sprint limits. Leading product teams through sleep deprivation, unexpected API depreciation, and 3-minute high-pressure jury pitches.',
    },
  ];

  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#1C1C22]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#F08BAE] uppercase tracking-wider mb-2">
            <Users className="w-3.5 h-3.5" />
            <span>10 // COMMUNITY &amp; LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
            MORE THAN JUST CODE.
          </h2>
        </div>
        <p className="text-xs font-mono text-[#8E8E93]">
          EXECUTIVE EXECUTION · ORATORY · HIGH-VELOCITY CULTURE
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((p, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#0D0D12] border border-[#222228] hover:border-[#383844] transition-colors"
          >
            <div className="p-3 w-fit rounded-xl bg-[#14141C] border border-[#22222E] mb-4">
              {p.icon}
            </div>
            <h3 className="text-lg font-display font-bold text-white mb-2">
              {p.title}
            </h3>
            <p className="text-xs text-[#8E8E93] leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
