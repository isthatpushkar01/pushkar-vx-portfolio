/**
 * PUSHKAR.VX // SOUND SYSTEM (YOUTUBE EMBEDDED PLAYER ENGINE)
 * Official YouTube IFrame Player API integration.
 * Strictly compliant with YouTube API terms: uses official iframe player,
 * zero audio extraction or downloading.
 *
 * DOM Isolation Architecture:
 * Creates and owns an unmanaged child element inside a dedicated React-empty host
 * (`#yt-player-host`) so `YT.Player`'s internal `replaceChild(iframe, div)` never
 * mutates React-managed Fiber siblings or triggers `insertBefore` reconciliation errors.
 */

export interface TrackTheme {
  id: string;
  name: string;
  primaryAccent: string;
  accentLight: string;
  accentDeep: string;
  accentGlow: string;
  accentGlowSubtle: string;
  bgAmbient: string;
  selectionBg: string;
  buttonGradient: string;
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
      primaryAccent: '#3C0061',
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
      primaryAccent: '#5A262C',
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
  private needsSoundActivation: boolean = false;
  private hostId: string = 'yt-player-host';
  private isScriptLoading: boolean = false;
  private initScheduled: boolean = false;
  private autoplayCheckTimer: number | null = null;
  private idleTimerId: ReturnType<typeof setTimeout> | null = null;
  private idleCallbackId: number | null = null;
  private loadHandler: (() => void) | null = null;
  private interactionHandler: (() => void) | null = null;

  constructor() {
    try {
      const savedVol = sessionStorage.getItem('vx_yt_volume');
      if (savedVol !== null) {
        const parsed = parseInt(savedVol, 10);
        if (!Number.isNaN(parsed)) this.volume = Math.max(0, Math.min(100, parsed));
      }

      const savedMute = sessionStorage.getItem('vx_yt_muted');
      if (savedMute !== null) this.isMuted = savedMute === 'true';
    } catch {
      // Storage fallback
    }

    applyTrackTheme(this.currentTrackIndex);
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((l) => {
      try {
        l();
      } catch {
        // Isolate subscriber failures
      }
    });
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

  public getNeedsSoundActivation(): boolean {
    return this.needsSoundActivation;
  }

  public togglePlaylistMode(): void {
    this.playlistMode = !this.playlistMode;
    this.notify();
  }

  private unbindFirstInteraction(): void {
    if (!this.interactionHandler || typeof window === 'undefined') return;
    window.removeEventListener('pointerdown', this.interactionHandler, true);
    window.removeEventListener('keydown', this.interactionHandler, true);
    this.interactionHandler = null;
  }

  private bindFirstInteractionFallback(): void {
    if (this.interactionHandler || typeof window === 'undefined') return;

    const handleFirstInteraction = () => {
      this.unbindFirstInteraction();

      if (this.hasUserPaused || !this.needsSoundActivation) return;

      this.needsSoundActivation = false;
      this.isMuted = false;

      if (this.player && this.isReady) {
        try {
          this.player.unMute();
          this.player.setVolume(this.volume);
          this.player.playVideo();
        } catch {
          // Ignore browser restriction
        }
      } else {
        this.pendingPlay = true;
        this.loadApiAndCreatePlayer();
      }
      this.notify();
    };

    this.interactionHandler = handleFirstInteraction;
    window.addEventListener('pointerdown', handleFirstInteraction, { capture: true, passive: true });
    window.addEventListener('keydown', handleFirstInteraction, { capture: true, passive: true });
  }

  public initPlayer(hostId: string): void {
    if (typeof window === 'undefined') return;
    this.hostId = hostId;
    applyTrackTheme(this.currentTrackIndex);

    if (this.player || this.initScheduled) return;
    this.initScheduled = true;

    const scheduleInit = () => {
      this.loadHandler = null;
      const win = window as Window & {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      };
      if (typeof win.requestIdleCallback === 'function') {
        this.idleCallbackId = win.requestIdleCallback(
          () => {
            this.idleCallbackId = null;
            this.loadApiAndCreatePlayer();
          },
          { timeout: 1500 }
        );
      } else {
        this.idleTimerId = globalThis.setTimeout(() => {
          this.idleTimerId = null;
          this.loadApiAndCreatePlayer();
        }, 800);
      }
    };

    if (document.readyState === 'complete') {
      scheduleInit();
    } else {
      this.loadHandler = scheduleInit;
      window.addEventListener('load', scheduleInit, { once: true });
    }
  }

  private createUnmanagedMountNode(): HTMLElement | null {
    const host = document.getElementById(this.hostId);
    if (!host) return null;
    host.innerHTML = '';
    const mount = document.createElement('div');
    mount.id = 'yt-embedded-soundtrack-player';
    host.appendChild(mount);
    return mount;
  }

  private loadApiAndCreatePlayer(): void {
    if (this.player || this.isScriptLoading || typeof window === 'undefined') return;
    if (!document.getElementById(this.hostId)) return;
    this.isScriptLoading = true;

    const onScriptLoaded = () => {
      if (!window.YT || !window.YT.Player || this.player) return;
      const mountNode = this.createUnmanagedMountNode();
      if (!mountNode) {
        this.isScriptLoading = false;
        return;
      }

      try {
        this.player = new window.YT.Player(mountNode, {
          videoId: TRACKS[this.currentTrackIndex].videoId,
          playerVars: {
            autoplay: 1,
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
              this.isScriptLoading = false;
              event.target.setVolume(this.volume);
              if (this.isMuted) {
                event.target.mute();
              } else {
                event.target.unMute();
              }

              if (!this.hasUserPaused) {
                event.target.playVideo();

                if (this.autoplayCheckTimer !== null) {
                  window.clearTimeout(this.autoplayCheckTimer);
                }
                this.autoplayCheckTimer = window.setTimeout(() => {
                  this.autoplayCheckTimer = null;
                  if (!this.player || !this.isReady || this.hasUserPaused) return;
                  try {
                    const state = this.player.getPlayerState();
                    const yt = window.YT?.PlayerState;
                    const active = yt ? state === yt.PLAYING || state === yt.BUFFERING : state === 1 || state === 3;
                    if (!active) {
                      this.player.mute();
                      this.player.playVideo();
                      this.isMuted = true;
                      this.needsSoundActivation = true;
                      this.bindFirstInteractionFallback();
                      this.notify();
                    }
                  } catch {
                    this.needsSoundActivation = true;
                    this.bindFirstInteractionFallback();
                    this.notify();
                  }
                }, 1100);
              } else if (this.pendingPlay) {
                this.pendingPlay = false;
                event.target.playVideo();
              }
              this.notify();
            },
            onStateChange: (event) => {
              if (!window.YT) return;
              if (event.data === window.YT.PlayerState.PLAYING) {
                this.isPlaying = true;
                this.hasError = false;
                try {
                  this.isMuted = Boolean(this.player?.isMuted());
                  if (!this.isMuted) {
                    this.needsSoundActivation = false;
                  }
                } catch {
                  // Ignore read error
                }
              } else if (event.data === window.YT.PlayerState.PAUSED) {
                this.isPlaying = false;
              } else if (event.data === window.YT.PlayerState.ENDED) {
                this.isPlaying = false;
                if (this.playlistMode) {
                  this.nextTrack();
                }
              }
              this.notify();
            },
            onError: () => {
              this.hasError = true;
              this.isPlaying = false;
              this.isScriptLoading = false;
              this.notify();
            },
          },
        });
      } catch {
        this.isScriptLoading = false;
        this.hasError = true;
        this.notify();
      }
    };

    if (window.YT && window.YT.Player) {
      onScriptLoaded();
    } else {
      const existingScript = document.getElementById('youtube-iframe-api');
      if (!existingScript) {
        const tag = document.createElement('script');
        tag.id = 'youtube-iframe-api';
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.async = true;
        tag.onerror = () => {
          this.isScriptLoading = false;
          this.hasError = true;
          this.notify();
        };
        const firstScriptTag = document.getElementsByTagName('script')[0];
        if (firstScriptTag?.parentNode) {
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        } else {
          document.head.appendChild(tag);
        }
      }
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        onScriptLoaded();
      };
    }
  }

  public enableSoundFromPrompt(): void {
    this.hasError = false;
    this.hasUserPaused = false;
    this.needsSoundActivation = false;
    this.isMuted = false;
    this.unbindFirstInteraction();

    try {
      sessionStorage.setItem('vx_yt_muted', 'false');
    } catch {
      // Fallback
    }

    if (this.player && this.isReady) {
      this.player.unMute();
      this.player.setVolume(this.volume);
      this.player.playVideo();
      this.isPlaying = true;
    } else {
      this.pendingPlay = true;
      this.loadApiAndCreatePlayer();
    }
    this.notify();
  }

  public play(): void {
    this.hasError = false;
    this.hasUserPaused = false;
    this.needsSoundActivation = false;
    if (this.player && this.isReady) {
      if (!this.isMuted) {
        this.player.unMute();
      }
      this.player.playVideo();
      this.isPlaying = true;
    } else {
      this.pendingPlay = true;
      this.loadApiAndCreatePlayer();
    }
    this.notify();
  }

  public pause(): void {
    this.hasUserPaused = true;
    this.needsSoundActivation = false;
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
    this.hasUserPaused = false;
    this.needsSoundActivation = false;

    applyTrackTheme(index);

    if (this.player && this.isReady) {
      try {
        this.player.stopVideo();
      } catch {
        // Ignore stop before switch
      }
      this.player.loadVideoById(TRACKS[index].videoId);
      if (this.isMuted) {
        this.isMuted = false;
        this.player.unMute();
      }
      this.isPlaying = true;
    } else {
      this.pendingPlay = true;
      this.loadApiAndCreatePlayer();
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
    if (!muted) {
      this.needsSoundActivation = false;
    }
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
        this.player.setVolume(this.volume);
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

  public destroy(): void {
    if (this.autoplayCheckTimer !== null) {
      window.clearTimeout(this.autoplayCheckTimer);
      this.autoplayCheckTimer = null;
    }
    if (this.idleTimerId !== null) {
      clearTimeout(this.idleTimerId);
      this.idleTimerId = null;
    }
    if (this.idleCallbackId !== null && typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
      (window as Window & { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(this.idleCallbackId);
      this.idleCallbackId = null;
    }
    if (this.loadHandler && typeof window !== 'undefined') {
      window.removeEventListener('load', this.loadHandler);
      this.loadHandler = null;
    }
    this.unbindFirstInteraction();

    if (this.player) {
      try {
        this.player.destroy();
      } catch {
        // Ignore
      }
      this.player = null;
    }
    const host = typeof document !== 'undefined' ? document.getElementById(this.hostId) : null;
    if (host) {
      host.innerHTML = '';
    }
    this.isReady = false;
    this.isPlaying = false;
    this.isScriptLoading = false;
    this.initScheduled = false;
  }
}

export const youtubeSoundSystem = new YouTubeSoundSystem();
