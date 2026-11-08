import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Sliders } from 'lucide-react';
import { ambientAudio } from '../audio/ambientEngine';

export const AudioControl: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(ambientAudio.getIsPlaying());
  const [isMuted, setIsMuted] = useState(ambientAudio.getIsMuted());
  const [volume, setVolume] = useState(ambientAudio.getVolume());
  const [showSlider, setShowSlider] = useState(false);
  const [freqBars, setFreqBars] = useState<number[]>([4, 8, 5, 10]);

  useEffect(() => {
    const unsubscribe = ambientAudio.subscribe(() => {
      setIsPlaying(ambientAudio.getIsPlaying());
      setIsMuted(ambientAudio.getIsMuted());
      setVolume(ambientAudio.getVolume());
    });
    return unsubscribe;
  }, []);

  // Equalizer animation frame loop
  useEffect(() => {
    if (!isPlaying || isMuted) {
      setFreqBars([3, 3, 3, 3]);
      return;
    }

    let frameId: number;
    const updateBars = () => {
      const data = ambientAudio.getAudioFrequencyData();
      if (data && data.length >= 4) {
        // Map first 4 bands into heights between 3 and 14px
        const b0 = Math.max(3, Math.min(14, (data[1] / 255) * 14));
        const b1 = Math.max(4, Math.min(14, (data[3] / 255) * 14));
        const b2 = Math.max(3, Math.min(14, (data[5] / 255) * 14));
        const b3 = Math.max(4, Math.min(14, (data[7] / 255) * 14));
        setFreqBars([b0, b1, b2, b3]);
      } else {
        // Fallback procedural oscillation
        const t = Date.now() / 300;
        setFreqBars([
          4 + Math.sin(t * 1.5) * 3,
          8 + Math.cos(t * 2.1) * 4,
          6 + Math.sin(t * 2.8) * 4,
          9 + Math.cos(t * 1.7) * 4,
        ]);
      }
      frameId = requestAnimationFrame(updateBars);
    };

    frameId = requestAnimationFrame(updateBars);
    return () => cancelAnimationFrame(frameId);
  }, [isPlaying, isMuted]);

  const handleToggle = () => {
    if (!isPlaying) {
      ambientAudio.start();
    } else {
      ambientAudio.togglePlay();
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    ambientAudio.toggleMute();
  };

  return (
    <div className="relative flex items-center">
      {/* Main Mechanical Audio Capsule Button */}
      <div className="flex items-center rounded-md bg-gradient-to-b from-[#1E1E26] via-[#16161D] to-[#0F0F14] border border-[#32323E] hover:border-[#FF6A00]/70 shadow-[0_2px_0_#09090C,0_3px_6px_rgba(0,0,0,0.5)] p-0.5 transition-all select-none">
        {/* Play / Pause Toggle Button */}
        <button
          onClick={handleToggle}
          className={`flex items-center gap-1.5 px-2 py-1 rounded font-mono text-[10px] font-bold tracking-wider uppercase transition-colors cursor-pointer ${
            isPlaying && !isMuted ? 'text-[#FF6A00]' : 'text-[#8E8E93] hover:text-white'
          }`}
          title={isPlaying ? 'Pause background soundtrack' : 'Play ambient sci-fi soundtrack'}
        >
          {/* Animated Equalizer Waveform Bars */}
          <div className="flex items-end gap-0.5 h-3.5 w-3.5 pb-0.5" aria-hidden="true">
            <span
              className={`w-0.5 rounded-full transition-all duration-75 ${
                isPlaying && !isMuted ? 'bg-[#FF6A00]' : 'bg-[#55555E]'
              }`}
              style={{ height: `${freqBars[0]}px` }}
            />
            <span
              className={`w-0.5 rounded-full transition-all duration-75 ${
                isPlaying && !isMuted ? 'bg-[#FF8C33]' : 'bg-[#55555E]'
              }`}
              style={{ height: `${freqBars[1]}px` }}
            />
            <span
              className={`w-0.5 rounded-full transition-all duration-75 ${
                isPlaying && !isMuted ? 'bg-[#FF6A00]' : 'bg-[#55555E]'
              }`}
              style={{ height: `${freqBars[2]}px` }}
            />
            <span
              className={`w-0.5 rounded-full transition-all duration-75 ${
                isPlaying && !isMuted ? 'bg-[#F5B900]' : 'bg-[#55555E]'
              }`}
              style={{ height: `${freqBars[3]}px` }}
            />
          </div>

          <span className="hidden xl:inline">
            {isPlaying && !isMuted ? 'AUDIO: ON' : 'AUDIO'}
          </span>
        </button>

        {/* Mute / Unmute Quick Button */}
        <button
          onClick={handleMuteToggle}
          className="p-1 rounded text-[#8E8E93] hover:text-white transition-colors cursor-pointer"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted || !isPlaying ? (
            <VolumeX className="w-3 h-3 text-[#71717A]" />
          ) : (
            <Volume2 className="w-3 h-3 text-[#FF6A00]" />
          )}
        </button>

        {/* Volume Popover Trigger */}
        <button
          onClick={() => setShowSlider(!showSlider)}
          className={`p-1 rounded transition-colors cursor-pointer ${
            showSlider ? 'text-[#FF6A00]' : 'text-[#71717A] hover:text-white'
          }`}
          title="Adjust soundtrack volume"
        >
          <Sliders className="w-2.5 h-2.5" />
        </button>
      </div>

      {/* Volume Slider Popover */}
      {showSlider && (
        <div className="absolute top-full right-0 mt-2 p-2.5 rounded-lg bg-[#0E0E14] border border-[#2B2B38] shadow-2xl z-50 flex items-center gap-2 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-100">
          <span className="text-[10px] font-mono text-[#8E8E93]">VOL</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              ambientAudio.setVolume(val);
              if (isMuted && val > 0) ambientAudio.setMuted(false);
            }}
            className="w-20 accent-[#FF6A00] h-1 bg-[#22222E] rounded-lg cursor-pointer"
          />
          <span className="text-[10px] font-mono text-[#FF6A00] w-6 text-right font-bold">
            {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
          </span>
        </div>
      )}
    </div>
  );
};
