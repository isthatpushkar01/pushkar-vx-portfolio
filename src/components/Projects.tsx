import React, { useState } from 'react';
import { Terminal, ExternalLink, Github, Layers, Cpu, ArrowUpRight, CheckCircle2, Play, Activity } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import skillbridgeImg from '../assets/images/skillbridge_ai_preview_1794061672635.jpg';
import agrisenseImg from '../assets/images/agrisense_ai_preview_1794061673877.jpg';
import ghatshieldImg from '../assets/images/ghatshield_ai_preview_1794061673742.jpg';

export const Projects: React.FC = () => {
  const projects = PORTFOLIO_DATA.projects;
  const [activeTabMap, setActiveTabMap] = useState<Record<string, 'features' | 'pipeline' | 'telemetry'>>({});
  const [simulatingMap, setSimulatingMap] = useState<Record<string, boolean>>({});

  const projectImages: Record<string, string> = {
    skillbridge: skillbridgeImg,
    agrisense: agrisenseImg,
    ghatshield: ghatshieldImg,
  };

  const projectSimulations: Record<string, { label: string; result: string }> = {
    skillbridge: {
      label: 'RUN NLP RESUME MATCH',
      result: 'SIMULATION RESULT: Parsed vector profile · 94.2% Job Fit · Auto-generated 4-week roadmap in 218ms',
    },
    agrisense: {
      label: 'QUERY N-P-K SOIL SENSOR',
      result: 'SIMULATION RESULT: Telemetry N=45, P=28, K=110 · Optimal: Soybean · Dialect: Hindi Audio Stream Ready',
    },
    ghatshield: {
      label: 'STREAM RIVERINE TELEMETRY',
      result: 'SIMULATION RESULT: Upper Lake pH=7.8 | DO=6.2mg/L · Audit generated & compiled in 1.1s via Claude 3.5',
    },
  };

  const handleSimulate = (id: string) => {
    setSimulatingMap((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setSimulatingMap((prev) => ({ ...prev, [id]: false }));
    }, 2500);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#1C1C22]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF6A00] uppercase tracking-wider mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // PRODUCTION SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
            THINGS I'VE BUILT.
          </h2>
        </div>
        <p className="text-xs font-mono text-[#8E8E93]">
          AUTONOMOUS AGENTS · FULL-STACK PLATFORMS · IOT TELEMETRY
        </p>
      </div>

      <div className="space-y-12">
        {projects.map((proj, idx) => {
          const img = projectImages[proj.id] || skillbridgeImg;
          const currentTab = activeTabMap[proj.id] || 'features';
          const isSimulating = !!simulatingMap[proj.id];
          const simData = projectSimulations[proj.id] || {
            label: 'TEST PIPELINE',
            result: 'Pipeline execution nominal · Status OK',
          };

          return (
            <div
              key={proj.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#0D0D12] border border-[#24242A] hover:border-[#FF6A00]/50 transition-all duration-300 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Project Details & Interactive Tabs */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-[#FF6A00] bg-[#FF6A00]/10 px-2.5 py-1 rounded-md border border-[#FF6A00]/30">
                      PROJECT_0{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-[#A6E635] bg-[#A6E635]/10 px-2.5 py-1 rounded-md border border-[#A6E635]/30">
                      {proj.status}
                    </span>
                    <span className="text-xs font-mono text-[#8E8E93]">
                      {proj.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    {proj.title}
                  </h3>

                  <p className="text-sm font-mono text-[#F5B900]">
                    {proj.category} · Role: {proj.role}
                  </p>

                  <p className="text-sm text-[#8E8E93] leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Interactive Sub-Tabs */}
                  <div className="pt-2 border-t border-[#1C1C22]">
                    <div className="flex items-center gap-2 mb-3 font-mono text-xs">
                      <button
                        onClick={() => setActiveTabMap((prev) => ({ ...prev, [proj.id]: 'features' }))}
                        className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                          currentTab === 'features'
                            ? 'bg-[#FF6A00] text-black font-bold'
                            : 'bg-[#14141C] text-[#8E8E93] hover:text-white border border-[#262634]'
                        }`}
                      >
                        FEATURES
                      </button>
                      <button
                        onClick={() => setActiveTabMap((prev) => ({ ...prev, [proj.id]: 'pipeline' }))}
                        className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                          currentTab === 'pipeline'
                            ? 'bg-[#FF6A00] text-black font-bold'
                            : 'bg-[#14141C] text-[#8E8E93] hover:text-white border border-[#262634]'
                        }`}
                      >
                        PIPELINE
                      </button>
                      <button
                        onClick={() => setActiveTabMap((prev) => ({ ...prev, [proj.id]: 'telemetry' }))}
                        className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                          currentTab === 'telemetry'
                            ? 'bg-[#FF6A00] text-black font-bold'
                            : 'bg-[#14141C] text-[#8E8E93] hover:text-white border border-[#262634]'
                        }`}
                      >
                        LIVE TELEMETRY
                      </button>
                    </div>

                    {/* Tab 1: Core Capabilities */}
                    {currentTab === 'features' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F5F5F5] animate-in fade-in duration-150">
                        {proj.coreFeatures.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 bg-[#121218] p-2.5 rounded-lg border border-[#1E1E24]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#A6E635] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tab 2: Architecture Pipeline */}
                    {currentTab === 'pipeline' && (
                      <div className="p-3.5 rounded-xl bg-[#09090D] border border-[#1E1E26] font-mono text-xs space-y-2 animate-in fade-in duration-150">
                        <p className="text-[11px] text-[#FF6A00] font-semibold">// DATAFLOW STAGES</p>
                        {proj.pipelineSteps && proj.pipelineSteps.length > 0 ? (
                          <ol className="space-y-1.5 text-[#8E8E93] text-[11px]">
                            {proj.pipelineSteps.map((step, sIdx) => (
                              <li key={sIdx} className="flex items-center gap-2">
                                <span className="text-[#A6E635] font-bold">0{sIdx + 1}.</span>
                                <span className="text-white">{step}</span>
                              </li>
                            ))}
                          </ol>
                        ) : (
                          <p className="text-[#8E8E93] text-[11px]">Autonomous event-driven pipeline with async micro-services.</p>
                        )}
                      </div>
                    )}

                    {/* Tab 3: Live Telemetry Daemon */}
                    {currentTab === 'telemetry' && (
                      <div className="p-3.5 rounded-xl bg-[#09090D] border border-[#1E1E26] font-mono text-xs space-y-2 animate-in fade-in duration-150">
                        <div className="flex items-center justify-between text-[#A6E635]">
                          <span className="flex items-center gap-1.5">
                            <Activity className="w-3.5 h-3.5 animate-pulse" />
                            SYS_DAEMON_MONITOR
                          </span>
                          <span>LATENCY: &lt; 380ms</span>
                        </div>
                        <div className="p-2 rounded bg-black/60 border border-[#22222A] text-[11px] text-[#8E8E93] space-y-1">
                          <p>&gt; INFERENCE_NODE: GPU Accelerated // Torch Tensor RT</p>
                          <p className="text-white">&gt; ACTIVE_SESSION_POOL: Nominal (Thread Pool OK)</p>
                          <p className="text-[#FF6A00]">&gt; ENCRYPTION: TLS 1.3 / AES-256 Vector Store</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Interactive Simulation Trigger Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleSimulate(proj.id)}
                      disabled={isSimulating}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#14141E] hover:bg-[#1E1E2A] text-xs font-mono text-[#A6E635] border border-[#282838] transition-colors cursor-pointer disabled:opacity-50"
                    >
                      <Play className="w-3 h-3 text-[#FF6A00]" />
                      <span>{isSimulating ? 'SIMULATING EXECUTION...' : simData.label}</span>
                    </button>
                    {isSimulating && (
                      <div className="mt-2 p-2.5 rounded-lg bg-[#0F1E14] border border-[#A6E635]/40 text-xs font-mono text-[#A6E635] animate-in fade-in">
                        {simData.result}
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                      {proj.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-[#16161E] text-white border border-[#262632]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="pt-4 flex flex-wrap gap-3">
                    <a
                      href={proj.githubUrl || 'https://github.com/isthatpushkar01'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#181822] hover:bg-[#20202E] text-white text-xs font-mono font-semibold border border-[#2A2A36] transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>SOURCE CODE</span>
                    </a>
                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-black text-xs font-mono font-bold transition-colors shadow-md"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>LIVE SYSTEM</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Architecture Preview Graphic */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="overflow-hidden rounded-2xl border border-[#2D2D38] relative shadow-2xl group">
                    <img
                      src={img}
                      alt={proj.title}
                      className="w-full h-56 sm:h-64 object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                      <span className="px-2 py-0.5 rounded bg-black/70 text-[#FF6A00] border border-[#FF6A00]/40">
                        GUI TELEMETRY
                      </span>
                      <span className="text-[#A6E635] bg-black/70 px-2 py-0.5 rounded">
                        ONLINE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
