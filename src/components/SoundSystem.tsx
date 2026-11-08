import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  ListMusic,
  ExternalLink,
  Disc3,
  Repeat,
  AlertCircle,
  X,
  Radio,
} from 'lucide-react';
import { youtubeSoundSystem, TRACKS } from '../audio/youtubeSoundSystem';

export const SoundSystem: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(youtubeSoundSystem.getIsPlaying());
  const [isMuted, setIsMuted] = useState(youtubeSoundSystem.getIsMuted());
  const [volume, setVolume] = useState(youtubeSoundSystem.getVolume());
  const [currentTrack, setCurrentTrack] = useState(youtubeSoundSystem.getCurrentTrack());
  const [currentIndex, setCurrentIndex] = useState(youtubeSoundSystem.getCurrentTrackIndex());
  const [hasError, setHasError] = useState(youtubeSoundSystem.getHasError());
  const [playlistMode, setPlaylistMode] = useState(youtubeSoundSystem.getPlaylistMode());
  const [isExpanded, setIsExpanded] = useState(false);
  const [eqHeights, setEqHeights] = useState([3, 5, 8, 4]);

  useEffect(() => {
    // Initialize YouTube player in the persistent DOM node
    youtubeSoundSystem.initPlayer('yt-embedded-soundtrack-player');

    const unsubscribe = youtubeSoundSystem.subscribe(() => {
      setIsPlaying(youtubeSoundSystem.getIsPlaying());
      setIsMuted(youtubeSoundSystem.getIsMuted());
      setVolume(youtubeSoundSystem.getVolume());
      setCurrentTrack(youtubeSoundSystem.getCurrentTrack());
      setCurrentIndex(youtubeSoundSystem.getCurrentTrackIndex());
      setHasError(youtubeSoundSystem.getHasError());
      setPlaylistMode(youtubeSoundSystem.getPlaylistMode());
    });

    return unsubscribe;
  }, []);

  // Animated equalizer when playing
  useEffect(() => {
    if (!isPlaying || isMuted) {
      setEqHeights([3, 3, 3, 3]);
      return;
    }

    const interval = setInterval(() => {
      setEqHeights([
        Math.floor(Math.random() * 11) + 3,
        Math.floor(Math.random() * 13) + 3,
        Math.floor(Math.random() * 12) + 3,
        Math.floor(Math.random() * 10) + 3,
      ]);
    }, 120);

    return () => clearInterval(interval);
  }, [isPlaying, isMuted]);

  return (
    <div className="relative">
      {/* 1. COMPACT NAVBAR CONTROL BAR */}
      <div className="flex items-center rounded-md bg-gradient-to-b from-[#1C1C24] via-[#14141B] to-[#0D0D12] border border-[#2E2E3C] hover:border-[#FF6A00]/70 shadow-[0_2px_0_#07070A,0_3px_6px_rgba(0,0,0,0.6)] p-0.5 select-none transition-all">
        {/* Play/Pause & Equalizer Trigger */}
        <button
          onClick={() => youtubeSoundSystem.togglePlay()}
          className={`flex items-center gap-1.5 px-2 py-1 rounded font-mono text-[10px] font-bold tracking-wider uppercase transition-colors cursor-pointer ${
            isPlaying && !isMuted ? 'text-[#FF6A00]' : 'text-[#8E8E93] hover:text-white'
          }`}
          title={isPlaying ? 'Pause Music' : 'Play Selected YouTube Soundtrack'}
        >
          {/* Animated Equalizer Waveform */}
          <div className="flex items-end gap-0.5 h-3.5 w-3.5 pb-0.5" aria-hidden="true">
            <span
              className={`w-0.5 rounded-full transition-all duration-100 ${
                isPlaying && !isMuted ? 'bg-[#FF6A00]' : 'bg-[#4B4B58]'
              }`}
              style={{ height: `${eqHeights[0]}px` }}
            />
            <span
              className={`w-0.5 rounded-full transition-all duration-100 ${
                isPlaying && !isMuted ? 'bg-[#FF8C33]' : 'bg-[#4B4B58]'
              }`}
              style={{ height: `${eqHeights[1]}px` }}
            />
            <span
              className={`w-0.5 rounded-full transition-all duration-100 ${
                isPlaying && !isMuted ? 'bg-[#FF6A00]' : 'bg-[#4B4B58]'
              }`}
              style={{ height: `${eqHeights[2]}px` }}
            />
            <span
              className={`w-0.5 rounded-full transition-all duration-100 ${
                isPlaying && !isMuted ? 'bg-[#F5B900]' : 'bg-[#4B4B58]'
              }`}
              style={{ height: `${eqHeights[3]}px` }}
            />
          </div>

          <span className="hidden xl:inline truncate max-w-[110px]">
            {isPlaying ? currentTrack.title : 'SOUND'}
          </span>
        </button>

        {/* Quick Prev / Next Track Steppers */}
        <button
          onClick={() => youtubeSoundSystem.prevTrack()}
          className="p-1 rounded text-[#8E8E93] hover:text-white transition-colors cursor-pointer"
          title="Previous Track"
        >
          <SkipBack className="w-2.5 h-2.5" />
        </button>

        <button
          onClick={() => youtubeSoundSystem.nextTrack()}
          className="p-1 rounded text-[#8E8E93] hover:text-white transition-colors cursor-pointer"
          title="Next Track"
        >
          <SkipForward className="w-2.5 h-2.5" />
        </button>

        {/* Mute/Unmute */}
        <button
          onClick={() => youtubeSoundSystem.toggleMute()}
          className="p-1 rounded text-[#8E8E93] hover:text-white transition-colors cursor-pointer"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted || !isPlaying ? (
            <VolumeX className="w-3 h-3 text-[#71717A]" />
          ) : (
            <Volume2 className="w-3 h-3 text-[#FF6A00]" />
          )}
        </button>

        {/* Expand Playlist Popover Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`p-1 rounded transition-colors cursor-pointer ${
            isExpanded ? 'text-[#FF6A00]' : 'text-[#8E8E93] hover:text-white'
          }`}
          title="Open PUSHKAR.VX // SOUND SYSTEM Console"
        >
          <ListMusic className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 2. EXPANDABLE FUTURISTIC MUSIC PLAYER CONSOLE */}
      {isExpanded && (
        <div className="absolute top-full right-0 mt-2.5 w-[330px] sm:w-[360px] rounded-2xl bg-[#0C0C12] border-2 border-[#262634] shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_25px_rgba(255,106,0,0.15)] z-[60] overflow-hidden backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150">
          {/* Header */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-gradient-to-r from-[#161622] via-[#101016] to-[#161622] border-b border-[#242432]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-ping shadow-[0_0_8px_#FF6A00]" />
              <span className="text-[10px] font-mono font-black tracking-widest text-white uppercase">
                PUSHKAR.VX // SOUND SYSTEM
              </span>
            </div>

            <button
              onClick={() => setIsExpanded(false)}
              className="text-[#71717A] hover:text-white transition-colors cursor-pointer p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Current Track Display */}
          <div className="p-3.5 bg-[#09090E] border-b border-[#1E1E28]">
            <div className="flex items-center justify-between text-[9px] font-mono text-[#8E8E93] mb-1">
              <span className="text-[#FF6A00] font-bold">{currentTrack.tag}</span>
              <span className="flex items-center gap-1 text-[#A6E635]">
                <Radio className="w-2.5 h-2.5 animate-pulse" />
                <span>OFFICIAL YOUTUBE STREAM</span>
              </span>
            </div>

            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-display font-black text-white truncate">
                  {currentTrack.title}
                </p>
                <p className="text-xs font-mono text-[#A1A1AA] truncate">
                  {currentTrack.artist}
                </p>
              </div>

              {/* Spinning Disc Indicator */}
              <div
                className={`w-9 h-9 rounded-full bg-gradient-to-br from-[#1F1F2C] to-[#111116] border border-[#353545] flex items-center justify-center shrink-0 shadow-md ${
                  isPlaying && !isMuted ? 'animate-spin' : ''
                }`}
                style={{ animationDuration: '4s' }}
              >
                <Disc3 className="w-5 h-5 text-[#FF6A00]" />
              </div>
            </div>

            {/* Error / Restriction notification with YouTube link fallback */}
            {hasError && (
              <div className="mt-2.5 p-2 rounded-lg bg-[#2A1515] border border-[#802525] text-left space-y-1">
                <p className="text-[10px] font-mono text-[#FF7A7A] flex items-center gap-1.5 font-bold">
                  <AlertCircle className="w-3 h-3 text-[#FF4D4D] shrink-0" />
                  <span>EMBEDDED PLAYBACK RESTRICTED BY CREATOR</span>
                </p>
                <a
                  href={currentTrack.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] font-mono text-[#38BDF8] hover:underline"
                >
                  <span>Open & Listen directly on YouTube</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            )}
          </div>

          {/* Player Transport Controls */}
          <div className="p-3 bg-[#0E0E14] flex items-center justify-between border-b border-[#1E1E28]">
            <div className="flex items-center gap-1.5">
              {/* Prev */}
              <button
                onClick={() => youtubeSoundSystem.prevTrack()}
                className="p-2 rounded-lg bg-[#181822] hover:bg-[#222230] text-[#D4D4D8] hover:text-white border border-[#2B2B3A] transition-colors cursor-pointer active:translate-y-0.5"
                title="Previous Track"
              >
                <SkipBack className="w-3.5 h-3.5" />
              </button>

              {/* Play / Pause */}
              <button
                onClick={() => youtubeSoundSystem.togglePlay()}
                className="px-4 py-2 rounded-lg bg-gradient-to-b from-[#FF7A1A] to-[#E05500] hover:from-[#FF8C33] hover:to-[#EB6000] text-black font-mono font-black text-xs uppercase transition-all shadow-[0_2px_10px_rgba(255,106,0,0.4)] active:translate-y-0.5 cursor-pointer flex items-center gap-1.5"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-black" />
                    <span>PAUSE</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-black" />
                    <span>PLAY</span>
                  </>
                )}
              </button>

              {/* Next */}
              <button
                onClick={() => youtubeSoundSystem.nextTrack()}
                className="p-2 rounded-lg bg-[#181822] hover:bg-[#222230] text-[#D4D4D8] hover:text-white border border-[#2B2B3A] transition-colors cursor-pointer active:translate-y-0.5"
                title="Next Track"
              >
                <SkipForward className="w-3.5 h-3.5" />
              </button>

              {/* Auto Playlist Loop Toggle */}
              <button
                onClick={() => youtubeSoundSystem.togglePlaylistMode()}
                className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                  playlistMode
                    ? 'bg-[#1F1812] border-[#FF6A00] text-[#FF6A00]'
                    : 'bg-[#181822] border-[#2B2B3A] text-[#71717A] hover:text-white'
                }`}
                title={playlistMode ? 'Continuous Playlist: ACTIVE' : 'Continuous Playlist: OFF'}
              >
                <Repeat className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-1.5 pl-2">
              <button
                onClick={() => youtubeSoundSystem.toggleMute()}
                className="text-[#8E8E93] hover:text-white transition-colors cursor-pointer"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-3.5 h-3.5 text-[#71717A]" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5 text-[#FF6A00]" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={isMuted ? 0 : volume}
                onChange={(e) => youtubeSoundSystem.setVolume(parseFloat(e.target.value))}
                className="w-16 accent-[#FF6A00] h-1 bg-[#22222E] rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Three Selected Track List */}
          <div className="p-2.5 space-y-1.5 max-h-52 overflow-y-auto">
            <p className="text-[9px] font-mono text-[#8E8E93] tracking-widest uppercase px-1">
              SELECTED CURATED TRACKS (3)
            </p>

            {TRACKS.map((t, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={t.id}
                  onClick={() => youtubeSoundSystem.selectTrack(idx)}
                  className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#221B14] to-[#17130F] border-[#FF6A00] shadow-[0_0_10px_rgba(255,106,0,0.2)]'
                      : 'bg-[#121218] hover:bg-[#181822] border-[#22222C] text-[#D4D4D8]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`w-5 h-5 rounded-md flex items-center justify-center font-mono text-[10px] font-bold ${
                        isSelected
                          ? 'bg-[#FF6A00] text-black font-black'
                          : 'bg-[#1C1C26] text-[#8E8E93]'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <div className="min-w-0">
                      <p
                        className={`text-xs font-display font-bold truncate ${
                          isSelected ? 'text-[#FF6A00]' : 'text-white'
                        }`}
                      >
                        {t.title}
                      </p>
                      <p className="text-[10px] font-mono text-[#8E8E93] truncate">{t.artist}</p>
                    </div>
                  </div>

                  {isSelected && isPlaying && !isMuted ? (
                    <span className="w-2 h-2 rounded-full bg-[#A6E635] animate-pulse shrink-0" />
                  ) : (
                    <span className="text-[10px] font-mono text-[#71717A] uppercase shrink-0">
                      {idx === 0 ? '01' : idx === 1 ? '02' : '03'}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="px-3 py-2 bg-[#08080C] border-t border-[#1C1C24] flex items-center justify-between text-[9px] font-mono text-[#55555E]">
            <span>OFFICIAL YOUTUBE AUDIO</span>
            <a
              href={currentTrack.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8E8E93] hover:text-[#FF6A00] flex items-center gap-1 transition-colors"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
