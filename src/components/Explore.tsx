import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Radio, CheckCircle, ArrowRight, Play, RotateCcw } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Explore: React.FC = () => {
  const locations = PORTFOLIO_DATA.locations;
  const [activeLoc, setActiveLoc] = useState(locations[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simProgress, setSimProgress] = useState(0);

  const startTransitSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimProgress(0);

    const interval = setInterval(() => {
      setSimProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSimulating(false);
          setActiveLoc(locations[1]);
          return 100;
        }
        return prev + 5;
      });
    }, 80);
  };

  return (
    <section id="explore" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#1C1C22]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#F5B900] uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>07 // EXPEDITIONS &amp; LOGISTICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight uppercase">
            BEYOND THE SCREEN.
          </h2>
        </div>
        <p className="text-xs font-mono text-[#8E8E93]">
          FIELD TELEMETRY · STATE-WIDE TRAVEL · IN-PERSON PODIUM VALIDATION
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Telemetry Log & Metrics */}
        <div className="lg:col-span-6 space-y-6">
          <div className="p-6 rounded-2xl bg-[#09090E] border border-[#262632] space-y-3 font-mono text-xs relative overflow-hidden">
            <div className="flex items-center justify-between text-[#FF6A00] pb-2 border-b border-[#1E1E26]">
              <span className="flex items-center gap-2 font-bold">
                <Radio className="w-3.5 h-3.5 animate-pulse text-[#FF6A00]" />
                EXPEDITION TELEMETRY LOG
              </span>
              <span className="text-[#A6E635]">GRID: IN-CENTRAL</span>
            </div>
            <div className="space-y-1.5 text-[#8E8E93]">
              <p><span className="text-white">ORIGIN:</span> Bhopal, MP [23.2599° N, 77.4126° E] // BASE HQ</p>
              <p><span className="text-white">WAYPOINT 01:</span> Solapur, MH [17.6599° N, 75.9064° E] (IDE BOOTCAMP)</p>
              <p><span className="text-white">WAYPOINT 02:</span> Kolhapur, MH [16.7050° N, 74.2433° E] (IRF IDEATHON)</p>
            </div>

            {/* Interactive transit progress bar */}
            {isSimulating && (
              <div className="pt-2">
                <div className="flex justify-between text-[11px] text-[#FF6A00] mb-1">
                  <span>TRANSIT PACKET PROPAGATION:</span>
                  <span>{simProgress}%</span>
                </div>
                <div className="w-full bg-[#181820] h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-[#FF6A00] to-[#A6E635] h-full transition-all duration-75"
                    style={{ width: `${simProgress}%` }}
                  />
                </div>
              </div>
            )}

            <div className="pt-2 border-t border-[#1E1E26] text-[#A6E635] flex items-center justify-between text-[11px]">
              <span>TOTAL TRAVEL LOGGED: 1,840+ KM</span>
              <button
                onClick={startTransitSimulation}
                disabled={isSimulating}
                className="flex items-center gap-1 text-[10px] text-[#FF6A00] hover:text-white bg-[#1A1A24] px-2 py-0.5 rounded border border-[#2E2E3E] cursor-pointer transition-colors disabled:opacity-50"
              >
                <Play className="w-2.5 h-2.5" />
                <span>{isSimulating ? 'SIMULATING...' : 'SIMULATE TRANSIT'}</span>
              </button>
            </div>
          </div>

          <p className="text-sm text-[#8E8E93] leading-relaxed">
            Engineering isn't isolated to desktop screens. Travelling across state borders to test systems directly against diverse regional hardware constraints has defined my execution philosophy: robust, fault-tolerant, and socially grounded.
          </p>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-4 rounded-xl bg-[#0D0D12] border border-[#202028] hover:border-[#FF6A00]/40 transition-colors">
              <div className="text-2xl font-display font-extrabold text-[#FF6A00]">1,840+</div>
              <div className="text-xs font-mono text-[#8E8E93]">Kms Logged</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0D0D12] border border-[#202028] hover:border-[#A6E635]/40 transition-colors">
              <div className="text-2xl font-display font-extrabold text-[#A6E635]">3 States</div>
              <div className="text-xs font-mono text-[#8E8E93]">Represented</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0D0D12] border border-[#202028] hover:border-white/40 transition-colors">
              <div className="text-2xl font-display font-extrabold text-white">Top 5</div>
              <div className="text-xs font-mono text-[#8E8E93]">National Finish</div>
            </div>
          </div>
        </div>

        {/* Right: Vector Route Schematic with Animated Nodes */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#09090D] border border-[#22222A] relative min-h-[300px] flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-[#1E1E26] text-xs font-mono">
            <span className="text-white font-bold">EXPEDITIONS VECTOR MAP</span>
            <span className="text-[#A6E635] flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#A6E635] animate-ping" />
              RADAR ACTIVE
            </span>
          </div>

          {/* Schematic Stations */}
          <div className="my-6 space-y-4">
            {locations.map((loc, idx) => {
              const isActive = activeLoc.id === loc.id;
              return (
                <div
                  key={loc.id}
                  onClick={() => setActiveLoc(loc)}
                  className={`p-3.5 rounded-xl transition-all cursor-pointer border relative overflow-hidden ${
                    isActive
                      ? 'bg-[#14141E] border-[#FF6A00] shadow-[0_0_20px_rgba(255,106,0,0.25)] scale-[1.01]'
                      : 'bg-[#0E0E14] border-[#1E1E26] hover:border-[#333340]'
                  }`}
                >
                  {/* Subtle active pulse ring */}
                  {isActive && (
                    <div className="absolute top-4 left-4 w-8 h-8 rounded-lg border-2 border-[#FF6A00] radar-ring pointer-events-none" />
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs relative z-10 ${
                        idx === 0 ? 'bg-[#FF6A00] text-black' : idx === 1 ? 'bg-[#A6E635] text-black' : 'bg-[#38BDF8] text-black'
                      }`}>
                        {idx === 0 ? 'HQ' : `WP${idx}`}
                      </div>
                      <div>
                        <h4 className="text-sm font-display font-bold text-white">
                          {loc.city} ({loc.state})
                        </h4>
                        <p className="text-xs font-mono text-[#8E8E93]">
                          {loc.label} · {loc.role}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#FF6A00] translate-x-1.5' : 'text-[#55555A]'}`} />
                  </div>

                  {isActive && (
                    <div className="mt-3 pt-2 border-t border-[#20202C] text-xs text-[#A6E635] font-mono animate-in fade-in">
                      {loc.highlights.join(' · ')}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#1C1C24] flex items-center justify-between text-[11px] font-mono text-[#55555A]">
            <span>FIELD OPERATIONS: CONFIRMED</span>
            <span className="text-[#FF6A00] font-semibold">TELEMETRY_SYNC: OK</span>
          </div>
        </div>
      </div>
    </section>
  );
};
