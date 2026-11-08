/**
 * PUSHKAR.VX // PROCEDURAL CINEMATIC AMBIENT AUDIO ENGINE
 * Original, royalty-free futuristic electronic atmosphere.
 * Synthesizes deep cinematic synth pads, analog sub-drones,
 * soft digital harmonics, and mechanical air textures.
 */

class AmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private masterGain: GainNode | null = null;
  private analyser: AnalyserNode | null = null;
  private volume: number = 0.45;
  private activeNodes: { stop?: () => void; disconnect?: () => void }[] = [];
  private shimmerInterval: number | null = null;
  private listeners: Set<() => void> = new Set();

  constructor() {
    // Load persisted preferences
    try {
      const savedMute = sessionStorage.getItem('vx_audio_muted');
      if (savedMute !== null) this.isMuted = savedMute === 'true';

      const savedVol = sessionStorage.getItem('vx_audio_volume');
      if (savedVol !== null) this.volume = parseFloat(savedVol);
    } catch {
      // Storage access fallback
    }
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((l) => l());
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

  public getAudioFrequencyData(): Uint8Array {
    if (!this.analyser || !this.isPlaying || this.isMuted) {
      return new Uint8Array(16);
    }
    const data = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(data);
    return data;
  }

  private initContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);

      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
      this.analyser.smoothingTimeConstant = 0.8;

      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    return this.ctx;
  }

  public async start(): Promise<void> {
    if (this.isPlaying) return;

    try {
      const ctx = this.initContext();
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }

      this.isPlaying = true;
      this.buildAudioGraph(ctx);
      this.notify();
    } catch {
      // Audio playback handle
    }
  }

  private buildAudioGraph(ctx: AudioContext) {
    if (!this.masterGain) return;
    this.stopAudioGraph();

    const t = ctx.currentTime;

    // Smooth master fade-in
    this.masterGain.gain.cancelScheduledValues(t);
    this.masterGain.gain.setValueAtTime(0, t);
    this.masterGain.gain.linearRampToValueAtTime(this.isMuted ? 0 : this.volume, t + 2.0);

    // 1. Warm Analog Sub-Bass Drone (F1 = 43.65Hz & C2 = 65.41Hz)
    const subOsc1 = ctx.createOscillator();
    const subOsc2 = ctx.createOscillator();
    const subFilter = ctx.createBiquadFilter();
    const subGain = ctx.createGain();

    subOsc1.type = 'triangle';
    subOsc1.frequency.setValueAtTime(43.65, t); // F1

    subOsc2.type = 'sine';
    subOsc2.frequency.setValueAtTime(65.41, t); // C2

    subFilter.type = 'lowpass';
    subFilter.frequency.setValueAtTime(90, t);

    subGain.gain.setValueAtTime(0.35, t);

    subOsc1.connect(subFilter);
    subOsc2.connect(subFilter);
    subFilter.connect(subGain);
    subGain.connect(this.masterGain);

    subOsc1.start(t);
    subOsc2.start(t);
    this.activeNodes.push(subOsc1, subOsc2, subGain, subFilter);

    // 2. Cinematic Ambient Chords (F Minor / Ab Maj Cyberpunk Pad)
    // Notes: F2 (87.3Hz), C3 (130.8Hz), Eb3 (155.6Hz), Ab3 (207.65Hz), C4 (261.6Hz)
    const chordFreqs = [87.3, 130.81, 155.56, 207.65, 261.63];

    chordFreqs.forEach((freq, idx) => {
      const oscA = ctx.createOscillator();
      const oscB = ctx.createOscillator();
      const padFilter = ctx.createBiquadFilter();
      const padGain = ctx.createGain();

      oscA.type = 'sawtooth';
      oscA.frequency.setValueAtTime(freq, t);
      oscA.detune.setValueAtTime(-4 + idx, t);

      oscB.type = 'triangle';
      oscB.frequency.setValueAtTime(freq, t);
      oscB.detune.setValueAtTime(4 - idx, t);

      padFilter.type = 'lowpass';
      padFilter.frequency.setValueAtTime(260 + idx * 40, t);
      padFilter.Q.setValueAtTime(1.5, t);

      // Slow filter sweep modulation
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(0.06 + idx * 0.02, t);
      lfoGain.gain.setValueAtTime(80, t);
      lfo.connect(padFilter.frequency);
      lfo.start(t);

      padGain.gain.setValueAtTime(0.045 / chordFreqs.length, t);

      oscA.connect(padFilter);
      oscB.connect(padFilter);
      padFilter.connect(padGain);
      padGain.connect(this.masterGain!);

      oscA.start(t);
      oscB.start(t);
      this.activeNodes.push(oscA, oscB, lfo, padFilter, padGain, lfoGain);
    });

    // 3. Mechanical Low Air & Turbine Hum
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(180, t);
    noiseFilter.Q.setValueAtTime(3.0, t);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.015, t);

    whiteNoise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.masterGain);

    whiteNoise.start(t);
    this.activeNodes.push(whiteNoise, noiseFilter, noiseGain);

    // 4. Subtle Celestial / Tech Shimmer Glints
    const shimmerNotes = [523.25, 622.25, 698.46, 783.99, 932.33, 1046.5]; // C5, Eb5, F5, G5, Bb5, C6
    const triggerShimmer = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;
      const now = this.ctx.currentTime;
      const sOsc = this.ctx.createOscillator();
      const sGain = this.ctx.createGain();
      const sFilter = this.ctx.createBiquadFilter();

      const note = shimmerNotes[Math.floor(Math.random() * shimmerNotes.length)];
      sOsc.type = 'sine';
      sOsc.frequency.setValueAtTime(note, now);

      sFilter.type = 'bandpass';
      sFilter.frequency.setValueAtTime(note, now);
      sFilter.Q.setValueAtTime(2.0, now);

      sGain.gain.setValueAtTime(0, now);
      sGain.gain.linearRampToValueAtTime(0.018, now + 0.15);
      sGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.0);

      sOsc.connect(sFilter);
      sFilter.connect(sGain);
      sGain.connect(this.masterGain);

      sOsc.start(now);
      sOsc.stop(now + 3.2);
    };

    this.shimmerInterval = window.setInterval(() => {
      if (Math.random() > 0.3) {
        triggerShimmer();
      }
    }, 4500);
  }

  private stopAudioGraph() {
    if (this.shimmerInterval !== null) {
      clearInterval(this.shimmerInterval);
      this.shimmerInterval = null;
    }

    this.activeNodes.forEach((node) => {
      try {
        if ('stop' in node && typeof node.stop === 'function') node.stop();
        if ('disconnect' in node && typeof node.disconnect === 'function') node.disconnect();
      } catch {
        // Safe disposal
      }
    });
    this.activeNodes = [];
  }

  public stop(): void {
    if (!this.isPlaying || !this.masterGain || !this.ctx) return;

    const t = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(t);
    this.masterGain.gain.linearRampToValueAtTime(0, t + 1.2);

    setTimeout(() => {
      this.stopAudioGraph();
      this.isPlaying = false;
      this.notify();
    }, 1250);
  }

  public togglePlay(): void {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
    try {
      sessionStorage.setItem('vx_audio_muted', String(muted));
    } catch {
      // Storage fallback
    }

    if (this.masterGain && this.ctx) {
      const t = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(t);
      this.masterGain.gain.linearRampToValueAtTime(this.isMuted ? 0 : this.volume, t + 0.15);
    }
    this.notify();
  }

  public toggleMute(): void {
    this.setMuted(!this.isMuted);
  }

  public setVolume(vol: number): void {
    this.volume = Math.max(0, Math.min(1, vol));
    try {
      sessionStorage.setItem('vx_audio_volume', String(this.volume));
    } catch {
      // Storage fallback
    }

    if (this.masterGain && this.ctx && !this.isMuted) {
      const t = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(t);
      this.masterGain.gain.linearRampToValueAtTime(this.volume, t + 0.1);
    }
    this.notify();
  }
}

export const ambientAudio = new AmbientAudioEngine();
