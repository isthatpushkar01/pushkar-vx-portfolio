/**
 * PUSHKAR.VX // SOUND SYSTEM (YOUTUBE EMBEDDED PLAYER ENGINE)
 * Official YouTube IFrame Player API integration.
 * Strictly compliant with YouTube API terms: uses official iframe player,
 * zero audio extraction or downloading.
 */

export interface TrackTheme {
  id: string;
  name: string;
  primaryAccent: string;     // Base color (#FF6A00, #3C0061, #5A262C)
  accentLight: string;       // High-contrast readable tone against black
  accentDeep: string;        // Deep accent shade
  accentGlow: string;        // Box-shadow glow
  accentGlowSubtle: string;  // Ambient subtle glow
  bgAmbient: string;         // Spotlight overlay & backdrop ambient
  selectionBg: string;       // Browser selection background
  buttonGradient: string;    // Gradient for primary buttons
  buttonHoverGradient: string;
  buttonShadow: string;
  badgeBg: string;
  badgeText: string;
}

export interface Track {
  id: string;
  videoId: string;
  title: string;
  artist: string;
  tag: string;
  url: string;
  theme: TrackTheme;
}

export const TRACKS: Track[] = [
  {
    id: 'track-1',
    videoId: 'LGLS4ARe-vw',
    title: 'Loser (Theatre Version)',
    artist: 'Tame Impala',
    tag: 'TRACK 01 // ORANGE THEME',
    url: 'https://youtu.be/LGLS4ARe-vw?si=u5_f5cY2a47efHN9',
    theme: {
      id: 'orange',
      name: 'CYBER ORANGE',
      primaryAccent: '#FF6A00',
      accentLight: '#FF8A32',
      accentDeep: '#D45500',
      accentGlow: 'rgba(255, 106, 0, 0.45)',
      accentGlowSubtle: 'rgba(255, 106, 0, 0.16)',
      bgAmbient: 'rgba(255, 106, 0, 0.05)',
      selectionBg: 'rgba(255, 106, 0, 0.3)',
      buttonGradient: 'linear-gradient(to bottom, #FF7A1A, #E05500)',
      buttonHoverGradient: 'linear-gradient(to bottom, #FF8C33, #EB6000)',
      buttonShadow: '0 6px 20px rgba(255, 106, 0, 0.4)',
      badgeBg: '#FF6A00',
      badgeText: '#000000',
    },
  },
  {
    id: 'track-2',
    videoId: 'LiXIoqGXfh8',
    title: 'Timeless (Instrumental)',
    artist: 'The Weeknd',
    tag: 'TRACK 02 // PURPLE THEME',
    url: 'https://youtu.be/LiXIoqGXfh8?si=RciHNT_HlSCtFwzx',
    theme: {
      id: 'purple',
      name: 'DEEP PURPLE',
      // Strict exact primary accent: #3C0061
      primaryAccent: '#3C0061',
      // High-contrast luminous purple for readable text/borders on pure black
      accentLight: '#A855F7',
      accentDeep: '#26003E',
      accentGlow: 'rgba(168, 85, 247, 0.45)',
      accentGlowSubtle: 'rgba(60, 0, 97, 0.35)',
      bgAmbient: 'rgba(140, 30, 220, 0.07)',
      selectionBg: 'rgba(168, 85, 247, 0.3)',
      buttonGradient: 'linear-gradient(to bottom, #A855F7, #3C0061)',
      buttonHoverGradient: 'linear-gradient(to bottom, #C084FC, #4F0080)',
      buttonShadow: '0 6px 20px rgba(168, 85, 247, 0.35)',
      badgeBg: '#A855F7',
      badgeText: '#FFFFFF',
    },
  },
  {
    id: 'track-3',
    videoId: '07fhkAoCnig',
    title: 'The Color Violet',
    artist: 'Tory Lanez',
    tag: 'TRACK 03 // BURGUNDY THEME',
    url: 'https://youtu.be/07fhkAoCnig?si=QiePSxTXdKVUNxhM',
    theme: {
      id: 'burgundy',
      name: 'DEEP BURGUNDY',
      // Strict exact primary accent: #5A262C
      primaryAccent: '#5A262C',
      // High-contrast luminous burgundy-rose for readable text/borders on pure black
      accentLight: '#C04A55',
      accentDeep: '#3B181C',
      accentGlow: 'rgba(192, 74, 85, 0.45)',
      accentGlowSubtle: 'rgba(90, 38, 44, 0.35)',
      bgAmbient: 'rgba(192, 74, 85, 0.07)',
      selectionBg: 'rgba(192, 74, 85, 0.3)',
      buttonGradient: 'linear-gradient(to bottom, #C04A55, #5A262C)',
      buttonHoverGradient: 'linear-gradient(to bottom, #E05A65, #732F37)',
      buttonShadow: '0 6px 20px rgba(192, 74, 85, 0.35)',
      badgeBg: '#C04A55',
      badgeText: '#FFFFFF',
    },
  },
];

declare global {
  interface Window {
    YT?: {
      Player: new (
        elementId: string | HTMLElement,
        config: {
          videoId?: string;
          playerVars?: Record<string, unknown>;
          events?: {
            onReady?: (event: { target: YTPlayerInstance }) => void;
            onStateChange?: (event: { data: number }) => void;
            onError?: (event: { data: number }) => void;
          };
        }
      ) => YTPlayerInstance;
      PlayerState: {
        UNSTARTED: number;
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
        BUFFERING: number;
        CUED: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

export interface YTPlayerInstance {
  playVideo: () => void;
  pauseVideo: () => void;
  stopVideo: () => void;
  loadVideoById: (videoId: string) => void;
  cueVideoById: (videoId: string) => void;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  setVolume: (volume: number) => void;
  getVolume: () => number;
  getPlayerState: () => number;
  destroy: () => void;
}

/**
 * Apply dynamic CSS custom properties corresponding to the chosen track theme.
 */
export function applyTrackTheme(trackIndex: number): void {
  if (typeof document === 'undefined') return;
  const track = TRACKS[trackIndex] || TRACKS[0];
  const theme = track.theme;
  const root = document.documentElement;

  root.style.setProperty('--theme-accent', theme.primaryAccent);
  root.style.setProperty('--theme-accent-light', theme.accentLight);
  root.style.setProperty('--theme-accent-deep', theme.accentDeep);
  root.style.setProperty('--theme-accent-glow', theme.accentGlow);
  root.style.setProperty('--theme-accent-glow-subtle', theme.accentGlowSubtle);
  root.style.setProperty('--theme-bg-ambient', theme.bgAmbient);
  root.style.setProperty('--theme-selection', theme.selectionBg);
  root.setAttribute('data-theme', theme.id);
}

class YouTubeSoundSystem {
  private player: YTPlayerInstance | null = null;
  // Requirement 3: Random Track Selection on Every Visit with 1/3 equal probability
  private currentTrackIndex: number = Math.floor(Math.random() * TRACKS.length);
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private volume: number = 70;
  private isReady: boolean = false;
  private hasError: boolean = false;
  private playlistMode: boolean = true;
  private listeners: Set<() => void> = new Set();
  private pendingPlay: boolean = false;
  private hasUserPaused: boolean = false;

  constructor() {
    try {
      const savedVol = sessionStorage.getItem('vx_yt_volume');
      if (savedVol !== null) this.volume = parseInt(savedVol, 10);

      const savedMute = sessionStorage.getItem('vx_yt_muted');
      if (savedMute !== null) this.isMuted = savedMute === 'true';
    } catch {
      // Storage fallback
    }

    // Apply the theme of the randomly selected track immediately
    applyTrackTheme(this.currentTrackIndex);
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((l) => l());
  }

  public getCurrentTrack(): Track {
    return TRACKS[this.currentTrackIndex];
  }

  public getCurrentTrackIndex(): number {
    return this.currentTrackIndex;
  }

  public getCurrentTheme(): TrackTheme {
    return TRACKS[this.currentTrackIndex].theme;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public getVolume(): number {
    return this.volume;
  }

  public getHasError(): boolean {
    return this.hasError;
  }

  public getPlaylistMode(): boolean {
    return this.playlistMode;
  }

  public togglePlaylistMode(): void {
    this.playlistMode = !this.playlistMode;
    this.notify();
  }

  public initPlayer(containerId: string): void {
    if (this.player || typeof window === 'undefined') return;

    // Apply active theme immediately on player initialization
    applyTrackTheme(this.currentTrackIndex);

    const onScriptLoaded = () => {
      if (!window.YT || !window.YT.Player) return;

      this.player = new window.YT.Player(containerId, {
        videoId: TRACKS[this.currentTrackIndex].videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            this.isReady = true;
            event.target.setVolume(this.volume);
            if (this.isMuted) event.target.mute();

            // Attempt non-blocking autoplay on initial load
            try {
              event.target.playVideo();
            } catch {
              // Browser policy will withhold playback until interaction; track is queued
            }

            if (this.pendingPlay) {
              this.pendingPlay = false;
              event.target.playVideo();
            }
            this.notify();
          },
          onStateChange: (event) => {
            if (window.YT) {
              if (event.data === window.YT.PlayerState.PLAYING) {
                this.isPlaying = true;
                this.hasError = false;
              } else if (event.data === window.YT.PlayerState.PAUSED) {
                this.isPlaying = false;
              } else if (event.data === window.YT.PlayerState.ENDED) {
                this.isPlaying = false;
                if (this.playlistMode) {
                  this.nextTrack();
                }
              }
            }
            this.notify();
          },
          onError: () => {
            this.hasError = true;
            this.isPlaying = false;
            this.notify();
          },
        },
      });
    };

    // Listen for subtle first user interaction to unlock audible playback smoothly
    const handleFirstUserInteraction = () => {
      if (this.player && this.isReady && !this.isPlaying && !this.hasUserPaused) {
        try {
          this.player.playVideo();
        } catch {
          // Ignore
        }
      }
    };
    window.addEventListener('pointerdown', handleFirstUserInteraction, { once: true });
    window.addEventListener('keydown', handleFirstUserInteraction, { once: true });

    if (window.YT && window.YT.Player) {
      onScriptLoaded();
    } else {
      const existingScript = document.getElementById('youtube-iframe-api');
      if (!existingScript) {
        const tag = document.createElement('script');
        tag.id = 'youtube-iframe-api';
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      }
      window.onYouTubeIframeAPIReady = () => {
        onScriptLoaded();
      };
    }
  }

  public play(): void {
    this.hasError = false;
    this.hasUserPaused = false;
    if (this.player && this.isReady) {
      this.player.playVideo();
      this.isPlaying = true;
    } else {
      this.pendingPlay = true;
    }
    this.notify();
  }

  public pause(): void {
    this.hasUserPaused = true;
    if (this.player && this.isReady) {
      this.player.pauseVideo();
    }
    this.isPlaying = false;
    this.notify();
  }

  public togglePlay(): void {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  public selectTrack(index: number): void {
    if (index < 0 || index >= TRACKS.length) return;
    this.currentTrackIndex = index;
    this.hasError = false;

    // Immediately activate the corresponding theme for the selected track
    applyTrackTheme(index);

    if (this.player && this.isReady) {
      this.player.loadVideoById(TRACKS[index].videoId);
      this.isPlaying = true;
    } else {
      this.pendingPlay = true;
    }
    this.notify();
  }

  public nextTrack(): void {
    const nextIdx = (this.currentTrackIndex + 1) % TRACKS.length;
    this.selectTrack(nextIdx);
  }

  public prevTrack(): void {
    const prevIdx = (this.currentTrackIndex - 1 + TRACKS.length) % TRACKS.length;
    this.selectTrack(prevIdx);
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
    try {
      sessionStorage.setItem('vx_yt_muted', String(muted));
    } catch {
      // Fallback
    }

    if (this.player && this.isReady) {
      if (muted) {
        this.player.mute();
      } else {
        this.player.unMute();
      }
    }
    this.notify();
  }

  public toggleMute(): void {
    this.setMuted(!this.isMuted);
  }

  public setVolume(vol: number): void {
    this.volume = Math.max(0, Math.min(100, Math.round(vol)));
    try {
      sessionStorage.setItem('vx_yt_volume', String(this.volume));
    } catch {
      // Fallback
    }

    if (this.player && this.isReady) {
      this.player.setVolume(this.volume);
      if (this.isMuted && this.volume > 0) {
        this.setMuted(false);
      }
    }
    this.notify();
  }
}

export const youtubeSoundSystem = new YouTubeSoundSystem();
