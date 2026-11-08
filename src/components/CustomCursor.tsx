import React, { useEffect, useRef } from 'react';

/**
 * PUSHKAR.VX // HIGH-PERFORMANCE LOW-LATENCY MECHANICAL CURSOR
 * 
 * Performance architecture:
 * 1. ZERO React state updates on mousemove — eliminates all virtual DOM reconciliation lag.
 * 2. Direct DOM mutation via translate3d for hardware-accelerated compositor rendering.
 * 3. 1:1 instantaneous center dot tracking + snappily tuned outer ring easing.
 * 4. Single requestAnimationFrame loop with clean lifecycle teardown.
 * 5. Event-delegated pointerover/pointerout for zero per-pixel hit testing.
 * 6. Native text cursor restoration on inputs/editable regions.
 * 7. Automatically disabled on touchscreens and coarse pointers.
 */

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 1. Disable on touchscreens and mobile devices
    const isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0;

    if (isTouch) return;

    // 2. Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Coordinate storage (pure numbers, zero re-renders)
    let mouseX = -200;
    let mouseY = -200;
    let ringX = -200;
    let ringY = -200;
    let isVisible = false;
    let isClicking = false;
    let isHovered = false;
    let isTextTarget = false;
    let animFrameId: number | null = null;

    const dotEl = dotRef.current;
    const ringEl = ringRef.current;
    const containerEl = containerRef.current;

    if (!dotEl || !ringEl || !containerEl) return;

    // Make visible on first mouse movement
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        ringX = mouseX;
        ringY = mouseY;
        containerEl.style.opacity = '1';
      }
    };

    const onMouseDown = () => {
      isClicking = true;
      ringEl.classList.add('cursor-clicking');
    };

    const onMouseUp = () => {
      isClicking = false;
      ringEl.classList.remove('cursor-clicking');
    };

    const onMouseLeave = () => {
      isVisible = false;
      containerEl.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible = true;
      containerEl.style.opacity = '1';
    };

    // Event-delegated hover detection (only fires on element boundary crossings)
    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isText = target.closest('input, textarea, select, [contenteditable="true"]');
      if (isText) {
        isTextTarget = true;
        isHovered = false;
        containerEl.style.opacity = '0';
        return;
      }

      if (isTextTarget) {
        isTextTarget = false;
        containerEl.style.opacity = '1';
      }

      const isInteractive = target.closest(
        'button, a, [role="button"], .mechanical-key, [data-interactive="true"], summary'
      );

      if (isInteractive) {
        isHovered = true;
        ringEl.classList.add('cursor-hovered');
      }
    };

    const onPointerOut = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest(
        'button, a, [role="button"], .mechanical-key, [data-interactive="true"], summary'
      );

      if (isInteractive) {
        isHovered = false;
        ringEl.classList.remove('cursor-hovered');
      }

      const isText = target.closest('input, textarea, select, [contenteditable="true"]');
      if (isText) {
        isTextTarget = false;
        containerEl.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter, { passive: true });
    window.addEventListener('pointerover', onPointerOver, { passive: true });
    window.addEventListener('pointerout', onPointerOut, { passive: true });

    // Single requestAnimationFrame Render Loop
    // Tight lerpFactor = 0.45 gives high-precision responsive tracking with zero perceived lag
    const lerpFactor = prefersReducedMotion ? 1.0 : 0.45;

    const render = () => {
      if (isVisible && !isTextTarget) {
        // 1. Instant 1:1 hardware tracking for center reticle
        dotEl.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

        // 2. High-speed smooth easing for outer metallic ring
        ringX += (mouseX - ringX) * lerpFactor;
        ringY += (mouseY - ringY) * lerpFactor;

        // Prevent micro-jitter when stationary
        if (Math.abs(mouseX - ringX) < 0.1) ringX = mouseX;
        if (Math.abs(mouseY - ringY) < 0.1) ringY = mouseY;

        ringEl.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('pointerover', onPointerOver);
      window.removeEventListener('pointerout', onPointerOut);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none opacity-0 transition-opacity duration-150"
      aria-hidden="true"
    >
      {/* 1. Thin Metallic Outer Targeting Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-7 h-7 rounded-full border border-[#8E8E93]/80 shadow-[0_0_8px_rgba(255,106,0,0.2)] will-change-transform flex items-center justify-center transition-[width,height,border-color,background-color,box-shadow] duration-150 ease-out"
      >
        {/* Subtle crosshairs appearing on hover via CSS */}
        <span className="crosshair-indicator crosshair-v-top" />
        <span className="crosshair-indicator crosshair-v-bottom" />
        <span className="crosshair-indicator crosshair-h-left" />
        <span className="crosshair-indicator crosshair-h-right" />
      </div>

      {/* 2. Precision Center Core Dot (Instant 1:1 Track) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#FF6A00] shadow-[0_0_8px_#FF6A00] will-change-transform"
      />
    </div>
  );
};
