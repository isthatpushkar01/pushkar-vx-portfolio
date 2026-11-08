/**
 * PUSHKAR.VX // SOUND SYSTEM (YOUTUBE EMBEDDED PLAYER ENGINE)
 * Official YouTube IFrame Player API integration.
 * Strictly compliant with YouTube API terms: uses official iframe player,
 * zero audio extraction or downloading.
 */

export interface Track {
  id: string;
  videoId: string;
  title: string;
  artist: string;
  tag: string;
  url: string;
}

export const TRACKS: Track[] = [
  {
    id: 'track-1',
    videoId: 'LGLS4ARe-vw',
    title: 'Loser (Theatre Version)',
    artist: 'Tame Impala',
    tag: 'TRACK 01 // PSYCH SYNTH',
    url: 'https://youtu.be/LGLS4ARe-vw?si=u5_f5cY2a47efHN9',
  },
  {
    id: 'track-2',
    videoId: 'LiXIoqGXfh8',
    title: 'Timeless (Instrumental)',
    artist: 'The Weeknd',
    tag: 'TRACK 02 // DARK AMBIENT',
    url: 'https://youtu.be/LiXIoqGXfh8?si=RciHNT_HlSCtFwzx',
  },
  {
    id: 'track-3',
    videoId: '07fhkAoCnig',
    title: 'The Color Violet',
    artist: 'Tory Lanez',
    tag: 'TRACK 03 // RETRO SYNTH',
    url: 'https://youtu.be/07fhkAoCnig?si=QiePSxTXdKVUNxhM',
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

class YouTubeSoundSystem {
  private player: YTPlayerInstance | null = null;
  private currentTrackIndex: number = 0;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private volume: number = 70;
  private isReady: boolean = false;
  private hasError: boolean = false;
  private playlistMode: boolean = true;
  private listeners: Set<() => void> = new Set();
  private pendingPlay: boolean = false;

  constructor() {
    try {
      const savedVol = sessionStorage.getItem('vx_yt_volume');
      if (savedVol !== null) this.volume = parseInt(savedVol, 10);

      const savedMute = sessionStorage.getItem('vx_yt_muted');
      if (savedMute !== null) this.isMuted = savedMute === 'true';

      const savedTrack = sessionStorage.getItem('vx_yt_track');
      if (savedTrack !== null) {
        const idx = parseInt(savedTrack, 10);
        if (idx >= 0 && idx < TRACKS.length) this.currentTrackIndex = idx;
      }
    } catch {
      // Storage fallback
    }
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
    if (this.player && this.isReady) {
      this.player.playVideo();
      this.isPlaying = true;
    } else {
      this.pendingPlay = true;
    }
    this.notify();
  }

  public pause(): void {
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

    try {
      sessionStorage.setItem('vx_yt_track', String(index));
    } catch {
      // Fallback
    }

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
