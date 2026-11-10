import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Volume2, VolumeX, Sparkles, Terminal, Settings2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MechanicalConsoleProps {
  onOpenResume: () => void;
}

type SwitchType = 'blue' | 'brown' | 'red';

interface KeyConfig {
  id: string;
  char: string;
  label: string;
  description: string;
  sectionId: string;
  bg: string;
  sideColor: string;
  textColor: string;
  glowColor: string;
  width?: string;
  isSpecial?: boolean;
}

export const MechanicalConsole: React.FC<MechanicalConsoleProps> = ({ onOpenResume }) => {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [switchType, setSwitchType] = useState<SwitchType>('brown');
  const [hoveredKey, setHoveredKey] = useState<KeyConfig | null>(null);
  const [lastExecutedKey, setLastExecutedKey] = useState<string | null>(null);
  const [displayText, setDisplayText] = useState('');
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const consoleRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef<boolean>(true);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Typewriter phrases
  const phrases = [
    'PUSHKAR.VX // AI ENGINEER & INNOVATION BUILDER',
    'BUILDING INTELLIGENT SOLUTIONS.',
    'EXPLORING ARTIFICIAL INTELLIGENCE & LLMS.',
    'CREATING TECHNOLOGY THAT MATTERS.',
    'PRESS ANY KEYCAP TO ACTUATE DIGITAL DOSSIER.',
    'CGPA: 8.39 · VITS BHOPAL · GSA 2026'
  ];

  // Synthesized mechanical key click using Web Audio API with switch profiles
  const playMechanicalClick = (type: SwitchType = switchType) => {
    if (!soundEnabled) return;
    try {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtxClass) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtxClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const t = ctx.currentTime;

      if (type === 'blue') {
        // Cherry MX Blue: High-pitched click transient + bottom-out clack
        const clickOsc = ctx.createOscillator();
        const clickGain = ctx.createGain();
        clickOsc.type = 'triangle';
        clickOsc.frequency.setValueAtTime(3600, t);
        clickOsc.frequency.exponentialRampToValueAtTime(1200, t + 0.015);
        clickGain.gain.setValueAtTime(0.35, t);
        clickGain.gain.exponentialRampToValueAtTime(0.001, t + 0.02);
        clickOsc.connect(clickGain);
        clickGain.connect(ctx.destination);
        clickOsc.start(t);
        clickOsc.stop(t + 0.025);

        // Clack
        const thump = ctx.createOscillator();
        const thumpGain = ctx.createGain();
        thump.type = 'sine';
        thump.frequency.setValueAtTime(220, t);
        thump.frequency.exponentialRampToValueAtTime(65, t + 0.04);
        thumpGain.gain.setValueAtTime(0.2, t);
        thumpGain.gain.exponentialRampToValueAtTime(0.001, t + 0.045);
        thump.connect(thumpGain);
        thumpGain.connect(ctx.destination);
        thump.start(t);
        thump.stop(t + 0.05);

      } else if (type === 'brown') {
        // Cherry MX Brown: Rounded tactile thud + crisp slider friction
        const thump = ctx.createOscillator();
        const thumpGain = ctx.createGain();
        thump.type = 'triangle';
        thump.frequency.setValueAtTime(180, t);
        thump.frequency.exponentialRampToValueAtTime(50, t + 0.04);
        thumpGain.gain.setValueAtTime(0.3, t);
        thumpGain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
        thump.connect(thumpGain);
        thumpGain.connect(ctx.destination);
        thump.start(t);
        thump.stop(t + 0.045);

        // Tactile friction buffer
        const buf = ctx.createBuffer(1, ctx.sampleRate * 0.015, ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.4;
        const noise = ctx.createBufferSource();
        noise.buffer = buf;
        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.12, t);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.015);
        noise.connect(noiseGain);
        noiseGain.connect(ctx.destination);
        noise.start(t);
        noise.stop(t + 0.015);

      } else {
        // Cherry MX Red: Deep smooth bottom-out without click
        const thump = ctx.createOscillator();
        const thumpGain = ctx.createGain();
        thump.type = 'sine';
        thump.frequency.setValueAtTime(130, t);
        thump.frequency.exponentialRampToValueAtTime(35, t + 0.05);
        thumpGain.gain.setValueAtTime(0.28, t);
        thumpGain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
        thump.connect(thumpGain);
        thumpGain.connect(ctx.destination);
        thump.start(t);
        thump.stop(t + 0.055);
      }
    } catch {
      // Audio fallback
    }
  };

  // Keyboard navigation mapping
  const row1Keys: KeyConfig[] = [
    {
      id: 'key-p',
      char: 'P',
      label: 'Projects',
      description: 'Explore AI systems (SkillBridge, AgriSense, GhatShield)',
      sectionId: 'projects',
      bg: '#FF6A00',
      sideColor: '#B84500',
      textColor: '#FFFFFF',
      glowColor: 'rgba(255, 106, 0, 0.6)',
    },
    {
      id: 'key-o1',
      char: 'O',
      label: 'Overview',
      description: 'About Pushkar Vishwakarma & Core Philosophy',
      sectionId: 'about',
      bg: '#F5B900',
      sideColor: '#A87E00',
      textColor: '#0A0A0A',
      glowColor: 'rgba(245, 185, 0, 0.6)',
    },
    {
      id: 'key-r',
      char: 'R',
      label: 'Resume',
      description: 'View & Download Verified Curriculum Vitae',
      sectionId: 'resume',
      bg: '#F3E9D2',
      sideColor: '#BFB59D',
      textColor: '#1A1A1A',
      glowColor: 'rgba(243, 233, 210, 0.6)',
    },
    {
      id: 'key-t',
      char: 'T',
      label: 'Technology',
      description: 'Tech Arsenal: Python, Generative AI, Full-Stack',
      sectionId: 'skills',
      bg: '#174F37',
      sideColor: '#0C2A1D',
      textColor: '#FFFFFF',
      glowColor: 'rgba(23, 79, 55, 0.7)',
    },
    {
      id: 'key-f',
      char: 'F',
      label: 'Future',
      description: 'Chronological Journey (2023–2027 Milestones)',
      sectionId: 'journey',
      bg: '#A6E635',
      sideColor: '#6B991F',
      textColor: '#0A0A0A',
      glowColor: 'rgba(166, 230, 53, 0.6)',
    },
  ];

  const row2Keys: KeyConfig[] = [
    {
      id: 'key-o2',
      char: 'O',
      label: 'Operations',
      description: 'Founder Team Setu & Student Placement Coordination',
      sectionId: 'experience',
      bg: '#F08BAE',
      sideColor: '#A85772',
      textColor: '#0A0A0A',
      glowColor: 'rgba(240, 139, 174, 0.6)',
    },
    {
      id: 'key-l',
      char: 'L',
      label: 'Leadership',
      description: 'Google Student Ambassador & SAC Presidency',
      sectionId: 'experience',
      bg: '#9E3026',
      sideColor: '#5C1913',
      textColor: '#FFFFFF',
      glowColor: 'rgba(158, 48, 38, 0.6)',
    },
    {
      id: 'key-i',
      char: 'I',
      label: 'Innovation',
      description: 'National Hackathons & Top 5 Team in India',
      sectionId: 'innovation',
      bg: '#FF6A00',
      sideColor: '#B84500',
      textColor: '#FFFFFF',
      glowColor: 'rgba(255, 106, 0, 0.6)',
    },
    {
      id: 'key-o3',
      char: 'O',
      label: 'Outreach',
      description: 'Beyond The Screen: Bhopal, Solapur, Kolhapur',
      sectionId: 'explore',
      bg: '#F5B900',
      sideColor: '#A87E00',
      textColor: '#0A0A0A',
      glowColor: 'rgba(245, 185, 0, 0.6)',
    },
    {
      id: 'key-star',
      char: '★',
      label: 'Awards',
      description: 'Verified Honors, GSA 2026, 3K+ LinkedIn Network',
      sectionId: 'achievements',
      bg: '#F08BAE',
      sideColor: '#A85772',
      textColor: '#0A0A0A',
      glowColor: 'rgba(240, 139, 174, 0.6)',
    },
    {
      id: 'key-talk',
      char: "LET'S TALK",
      label: 'Contact',
      description: 'Direct Channels: Email, Phone & Collaboration Form',
      sectionId: 'contact',
      bg: '#1E1E22',
      sideColor: '#0E0E10',
      textColor: '#F5F5F5',
      glowColor: 'rgba(255, 106, 0, 0.8)',
      width: 'min-w-[130px] sm:min-w-[170px]',
      isSpecial: true,
    },
  ];

  // Typewriter loop with IntersectionObserver pause
  useEffect(() => {
    const el = consoleRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting && !document.hidden;
    }, { threshold: 0.1 });
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[displayIndex];
    let timer: NodeJS.Timeout;

    if (!isVisibleRef.current) {
      timer = setTimeout(() => {
        setDisplayIndex((prev) => (prev + 1) % phrases.length);
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        }, 55);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2400);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        }, 25);
      } else {
        setIsDeleting(false);
        setDisplayIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, displayIndex]);

  // Handle key activation (click or hardware press)
  const triggerKeyAction = (key: KeyConfig) => {
    setActiveKey(key.id);
    setLastExecutedKey(key.char);
    playMechanicalClick();

    // Dispatch pulse to 3D Neural Core
    window.dispatchEvent(new CustomEvent('portal-key-actuate', { detail: { keyId: key.id } }));

    setTimeout(() => {
      setActiveKey(null);
    }, 200);

    if (key.sectionId === 'resume') {
      onOpenResume();
      confetti({ particleCount: 45, spread: 65, origin: { y: 0.7 } });
    } else {
      const el = document.getElementById(key.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Physical keyboard key listener with comprehensive binding
  useEffect(() => {
    let oToggleIndex = 0;
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when user is typing in form inputs
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      const keyChar = e.key.toUpperCase();
      const allKeys = [...row1Keys, ...row2Keys];

      if (keyChar === 'O') {
        const oKeys = [row1Keys[1], row2Keys[0], row2Keys[3]]; // Overview, Operations, Outreach
        const chosen = oKeys[oToggleIndex % oKeys.length];
        oToggleIndex++;
        triggerKeyAction(chosen);
        return;
      }

      const matched = allKeys.find((k) => k.char === keyChar);
      if (matched) {
        triggerKeyAction(matched);
      } else if (e.key === 'Enter') {
        const talkKey = row2Keys.find((k) => k.id === 'key-talk');
        if (talkKey) triggerKeyAction(talkKey);
      } else if (keyChar === 'A') {
        const starKey = row2Keys.find((k) => k.id === 'key-star');
        if (starKey) triggerKeyAction(starKey);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [switchType, soundEnabled]);

  // Subtle 3D mouse parallax on console with direct DOM transform
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!consoleRef.current) return;
    const rect = consoleRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
    consoleRef.current.style.transform = `perspective(1200px) rotateX(${y.toFixed(2)}deg) rotateY(${x.toFixed(2)}deg)`;
  };

  const handleMouseLeave = () => {
    if (consoleRef.current) {
      consoleRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
    }
    setHoveredKey(null);
  };

  const switchDetails: Record<SwitchType, { name: string; color: string; desc: string }> = {
    brown: { name: 'CHERRY MX BROWN', color: '#F5B900', desc: 'Tactile bump · 45cN' },
    blue: { name: 'CHERRY MX BLUE', color: '#38BDF8', desc: 'Clicky auditory · 55cN' },
    red: { name: 'CHERRY MX RED', color: '#EF4444', desc: 'Smooth linear · 45cN' },
  };

  return (
    <div className="w-full flex flex-col items-center justify-center my-6 relative select-none">
      {/* 3D Container with Perspective */}
      <div
        ref={consoleRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg)',
          transition: 'transform 0.12s ease-out',
        }}
        className="relative w-full max-w-4xl p-5 sm:p-8 rounded-[32px] sm:rounded-[38px] metallic-chassis-silver border border-[#FFFFFF]/40 transition-shadow duration-300 will-change-transform"
      >
        {/* 4 Authentic Industrial Screws at Enclosure Corners */}
        <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
          <div className="screw-head" title="Chassis Fastener Torx T6" />
        </div>
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
          <div className="screw-head" title="Chassis Fastener Torx T6" />
        </div>
        <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
          <div className="screw-head" title="Chassis Fastener Torx T6" />
        </div>
        <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5">
          <div className="screw-head" title="Chassis Fastener Torx T6" />
        </div>

        {/* Top Digital Display Screen */}
        <div className="relative mb-5 sm:mb-6 rounded-2xl digital-crt-screen border border-[#2D2A20] p-4 sm:p-5 overflow-hidden">
          {/* Subtle CRT glass glare */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#302B1D] pb-2.5 mb-2.5">
            <div className="flex items-center gap-2">
              <span 
                className="w-2.5 h-2.5 rounded-full animate-pulse transition-all duration-300" 
                style={{ 
                  backgroundColor: 'var(--theme-accent, #FF6A00)', 
                  boxShadow: '0 0 8px var(--theme-accent, #FF6A00)' 
                }} 
              />
              <span className="text-[11px] font-mono tracking-widest text-[#F5B900] uppercase font-bold">
                SYSTEM: PUSHKAR.VX // INDUSTRIAL CONSOLE v2.7
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {/* Switch Type Selector */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const next: SwitchType = switchType === 'brown' ? 'blue' : switchType === 'blue' ? 'red' : 'brown';
                  setSwitchType(next);
                  playMechanicalClick(next);
                }}
                className="flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 border border-[#443C28] hover:border-[#F5B900] transition-colors cursor-pointer"
                title="Toggle mechanical switch acoustics"
              >
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ backgroundColor: switchDetails[switchType].color }}
                />
                <span className="text-white font-semibold">{switchDetails[switchType].name}</span>
              </button>

              {/* Audio Mute/Unmute */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSoundEnabled(!soundEnabled);
                }}
                className="flex items-center gap-1 text-[10px] font-mono text-[#F3E9D2]/80 hover:text-white bg-black/40 px-2 py-0.5 rounded border border-[#443C28] cursor-pointer transition-colors"
                title="Toggle mechanical key audio"
              >
                {soundEnabled ? <Volume2 className="w-3 h-3 text-[#A6E635]" /> : <VolumeX className="w-3 h-3 text-red-400" />}
                <span>{soundEnabled ? 'AUDIO ON' : 'MUTED'}</span>
              </button>
            </div>
          </div>

          {/* Animated Typewriter Terminal Line */}
          <div className="relative z-10 min-h-[32px] sm:min-h-[38px] flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-sm sm:text-lg font-mono font-bold tracking-wide text-[#F3E9D2] drop-shadow-[0_0_8px_rgba(245,185,0,0.3)]">
                &gt; {displayText}
              </span>
              <span 
                className="w-2.5 h-4 sm:h-5 ml-1 animate-pulse inline-block transition-colors duration-300" 
                style={{ backgroundColor: 'var(--theme-accent, #FF6A00)' }} 
              />
            </div>

            {lastExecutedKey && (
              <span className="hidden sm:inline text-[11px] font-mono text-[#A6E635] bg-[#112211] px-2 py-0.5 rounded border border-[#A6E635]/40 animate-pulse">
                ACTUATED: [{lastExecutedKey}]
              </span>
            )}
          </div>

          {/* Bottom telemetry readout */}
          <div className="relative z-10 mt-2 flex items-center justify-between text-[10px] font-mono text-[#F3E9D2]/50">
            <span>SWITCH: {switchDetails[switchType].desc}</span>
            <span className="hidden sm:inline">TYPE ANY HARDWARE KEY ON PHYSICAL KEYBOARD</span>
          </div>
        </div>

        {/* Illuminated Mechanical Component with Dynamic Theme */}
        <div className="relative mb-5 flex items-center justify-between px-3 sm:px-4 py-2 rounded-xl bg-[#121215] border border-[#2B2B30] shadow-inner">
          <div className="flex items-center gap-2.5">
            <div 
              className="w-3.5 h-3.5 rounded-full flex items-center justify-center animate-pulse transition-all duration-300"
              style={{
                backgroundColor: 'var(--theme-accent, #FF6A00)',
                boxShadow: '0 0 12px var(--theme-accent, #FF6A00)',
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
            <span className="text-[11px] font-mono text-[#F5F5F5] font-semibold tracking-wider">
              TACTILE SWITCH INTERFACE // CHERRY PROFILE
            </span>
          </div>

          {/* Key Tooltip Indicator */}
          <div 
            className="text-xs font-mono truncate max-w-[280px] sm:max-w-md transition-colors duration-300"
            style={{ color: 'var(--theme-accent-light, #FF6A00)' }}
          >
            {hoveredKey ? (
              <span className="flex items-center gap-1.5 animate-in fade-in">
                <span className="text-white font-bold">[{hoveredKey.char}]</span> {hoveredKey.label}: {hoveredKey.description}
              </span>
            ) : (
              <span className="text-[#8E8E93] text-[11px]">Hover or press keycap to actuate section</span>
            )}
          </div>
        </div>

        {/* Recessed Inner Keyboard Well with Dynamic Underglow */}
        <div className="p-3.5 sm:p-5 rounded-2xl inner-keyboard-well border border-black/80 space-y-3 sm:space-y-4 relative overflow-hidden">
          {/* Main Row: [P] [O] [R] [T] [F] */}
          <div className="grid grid-cols-5 gap-2.5 sm:gap-4">
            {row1Keys.map((key) => {
              const isPressed = activeKey === key.id;
              return (
                <button
                  key={key.id}
                  onClick={() => triggerKeyAction(key)}
                  onMouseEnter={() => setHoveredKey(key)}
                  onMouseLeave={() => setHoveredKey(null)}
                  className={`mechanical-key h-16 sm:h-22 rounded-xl text-xl sm:text-3xl font-display font-extrabold tracking-tight transition-all cursor-pointer relative ${
                    isPressed ? 'key-pressed' : ''
                  }`}
                  style={{
                    backgroundColor: key.bg,
                    color: key.textColor,
                    boxShadow: isPressed
                      ? `0 1px 0 ${key.sideColor}, 0 0 16px ${key.glowColor}, inset 0 2px 4px rgba(0,0,0,0.5)`
                      : `0 7px 0 ${key.sideColor}, 0 10px 14px rgba(0,0,0,0.7), inset 0 1px 1px rgba(255,255,255,0.4)`,
                    transform: isPressed ? 'translateY(5px) scale(0.98)' : undefined,
                  }}
                  aria-label={`${key.char} key for ${key.label}`}
                >
                  <div className="flex flex-col items-center justify-center">
                    <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">{key.char}</span>
                    <span className="text-[9px] sm:text-[11px] font-mono opacity-85 uppercase tracking-tighter -mt-0.5">
                      {key.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Second Row: [O] [L] [I] [O] [★] [LET'S TALK] */}
          <div className="flex gap-2.5 sm:gap-4 overflow-x-auto pb-1">
            {row2Keys.map((key) => {
              const isPressed = activeKey === key.id;
              const isWide = key.isSpecial;
              return (
                <button
                  key={key.id}
                  onClick={() => triggerKeyAction(key)}
                  onMouseEnter={() => setHoveredKey(key)}
                  onMouseLeave={() => setHoveredKey(null)}
                  className={`mechanical-key h-16 sm:h-22 rounded-xl font-display font-extrabold tracking-tight transition-all cursor-pointer relative ${
                    isWide
                      ? 'flex-1 min-w-[130px] sm:min-w-[190px] px-3 sm:px-5 text-sm sm:text-base border border-white/20'
                      : 'w-full text-xl sm:text-3xl'
                  } ${isPressed ? 'key-pressed' : ''}`}
                  style={{
                    backgroundColor: key.bg,
                    color: key.textColor,
                    boxShadow: isPressed
                      ? `0 1px 0 ${key.sideColor}, 0 0 16px ${key.glowColor}, inset 0 2px 4px rgba(0,0,0,0.5)`
                      : `0 7px 0 ${key.sideColor}, 0 10px 14px rgba(0,0,0,0.7), inset 0 1px 1px rgba(255,255,255,0.3)`,
                    transform: isPressed ? 'translateY(5px) scale(0.98)' : undefined,
                  }}
                  aria-label={`${key.char} key for ${key.label}`}
                >
                  {isWide ? (
                    <div className="flex items-center justify-center gap-2">
                      <span className="tracking-wider">{key.char}</span>
                      <ArrowUpRight className="w-4 h-4 transition-colors duration-300" style={{ color: 'var(--theme-accent-light, #FF6A00)' }} />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">{key.char}</span>
                      <span className="text-[9px] sm:text-[11px] font-mono opacity-85 uppercase tracking-tighter -mt-0.5">
                        {key.label}
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Chassis Lower Bevel & Brand Inscription */}
        <div className="mt-4 sm:mt-5 pt-3 border-t border-[#FFFFFF]/20 flex items-center justify-between text-[11px] font-mono text-[#55555A]">
          <span className="uppercase tracking-widest text-[#222222] font-extrabold">
            PUSHKAR.VX // PRECISION MECHANICAL INTERFACE
          </span>
          <span className="hidden sm:inline text-[#333333] font-semibold">
            SOLID ALUMINUM ENCLOSURE · GASKET MOUNT · HOT-SWAPPABLE
          </span>
        </div>
      </div>
    </div>
  );
};
