import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeNeuralCoreProps {
  className?: string;
  interactive?: boolean;
}

let cachedWebGlProbe: { supported: boolean; isSoftware: boolean } | null = null;
function detectSoftwareWebGL(): { supported: boolean; isSoftware: boolean } {
  if (cachedWebGlProbe !== null) {
    return cachedWebGlProbe;
  }
  try {
    const probeCanvas = document.createElement('canvas');
    const gl = probeCanvas.getContext('webgl2') || probeCanvas.getContext('webgl');
    if (!gl) {
      cachedWebGlProbe = { supported: false, isSoftware: true };
      return cachedWebGlProbe;
    }
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
    const gpu = String(gl.getParameter(param) || '');
    const isSoftware = /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    cachedWebGlProbe = { supported: true, isSoftware };
    return cachedWebGlProbe;
  } catch {
    cachedWebGlProbe = { supported: false, isSoftware: true };
    return cachedWebGlProbe;
  }
}

export const ThreeNeuralCore: React.FC<ThreeNeuralCoreProps> = ({
  className = '',
  interactive = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [fallbackActive, setFallbackActive] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const { supported, isSoftware: isSoftwareGl } = detectSoftwareWebGL();
    if (!supported) {
      setFallbackActive(true);
      return;
    }

    let animationFrameId: number | null = null;
    let isDisposed = false;
    let isContextLost = false;
    let isIntersecting = true;
    let renderer: THREE.WebGLRenderer | null = null;

    let width = container.clientWidth || 400;
    let height = container.clientHeight || 400;

    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 7.5);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: !isSoftwareGl,
        powerPreference: 'high-performance',
      });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio || 1, 1.75));
      renderer.setSize(width, height);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;

      container.innerHTML = '';
      container.appendChild(renderer.domElement);

      const coreGroup = new THREE.Group();
      scene.add(coreGroup);

      const coreGeo = new THREE.IcosahedronGeometry(1.6, 2);
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0x111622,
        metalness: 0.9,
        roughness: 0.18,
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      coreGroup.add(coreMesh);

      const wireGeo = new THREE.IcosahedronGeometry(1.68, 2);
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0xff8a32,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const wireMesh = new THREE.Mesh(wireGeo, wireMat);
      coreGroup.add(wireMesh);

      const innerGeo = new THREE.SphereGeometry(0.9, 24, 24);
      const innerMat = new THREE.MeshBasicMaterial({
        color: 0xb6ff4a,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      });
      const innerMesh = new THREE.Mesh(innerGeo, innerMat);
      coreGroup.add(innerMesh);

      const ringGroup1 = new THREE.Group();
      const ringGroup2 = new THREE.Group();
      coreGroup.add(ringGroup1);
      coreGroup.add(ringGroup2);

      const ringGeo1 = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
      const ringMat1 = new THREE.MeshBasicMaterial({
        color: 0xff8a32,
        transparent: true,
        opacity: 0.5,
      });
      const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
      ring1.rotation.x = Math.PI / 3;
      ringGroup1.add(ring1);

      const ringGeo2 = new THREE.TorusGeometry(2.7, 0.018, 16, 100);
      const ringMat2 = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.4,
      });
      const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
      ring2.rotation.y = Math.PI / 4;
      ringGroup2.add(ring2);

      const nodeCount = 14;
      const nodeGeo = new THREE.SphereGeometry(0.06, 8, 8);
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0xb6ff4a });
      for (let i = 0; i < nodeCount; i++) {
        const node = new THREE.Mesh(nodeGeo, nodeMat);
        const angle = (i / nodeCount) * Math.PI * 2;
        const radius = 2.3;
        node.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
        ringGroup1.add(node);
      }

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const particleCount = prefersReducedMotion ? 50 : isSoftwareGl ? 80 : 180;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const colorA = new THREE.Color(0xff8a32);
      const colorB = new THREE.Color(0x38bdf8);
      const colorC = new THREE.Color(0xb6ff4a);

      for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 2.0 + Math.random() * 2.2;

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);

        const chosenColor = i % 3 === 0 ? colorA : i % 3 === 1 ? colorB : colorC;
        colors[i * 3] = chosenColor.r;
        colors[i * 3 + 1] = chosenColor.g;
        colors[i * 3 + 2] = chosenColor.b;
      }

      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMat = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      coreGroup.add(particles);

      const keyLight = new THREE.DirectionalLight(0xff8a32, 2.5);
      keyLight.position.set(5, 5, 5);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0x38bdf8, 2.0);
      fillLight.position.set(-5, -3, 3);
      scene.add(fillLight);

      const ambientLight = new THREE.AmbientLight(0x181824, 1.2);
      scene.add(ambientLight);

      let targetRotX = 0;
      let targetRotY = 0;
      let currentRotX = 0;
      let currentRotY = 0;
      let energyBoost = 0;
      let elapsedTime = 0;
      let lastFrameTime = performance.now();

      const handlePointerMove = (e: MouseEvent) => {
        if (!interactive) return;
        const rect = container.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
        targetRotY = x * 0.7;
        targetRotX = -y * 0.7;
      };

      const handleKeyActuation = () => {
        energyBoost = 1.0;
      };

      const handleResize = () => {
        if (!container || !renderer || isDisposed) return;
        width = container.clientWidth || 400;
        height = container.clientHeight || 400;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      const stopLoop = () => {
        if (animationFrameId !== null) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      };

      const shouldRun = () => !isDisposed && !isContextLost && isIntersecting && !document.hidden;

      const animate = (now: number) => {
        if (!shouldRun() || !renderer) {
          animationFrameId = null;
          return;
        }

        const rawDelta = (now - lastFrameTime) / 1000;
        lastFrameTime = now;
        const delta = Math.min(Math.max(rawDelta, 0), 0.05);
        elapsedTime += prefersReducedMotion ? delta * 0.25 : delta;

        energyBoost *= 0.94;
        currentRotX += (targetRotX - currentRotX) * 0.05;
        currentRotY += (targetRotY - currentRotY) * 0.05;

        const rotSpeed = 0.25 + energyBoost * 0.8;
        coreGroup.rotation.y = elapsedTime * rotSpeed + currentRotY;
        coreGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.1 + currentRotX;

        ringGroup1.rotation.z = elapsedTime * (0.35 + energyBoost * 0.5);
        ringGroup1.rotation.x = Math.sin(elapsedTime * 0.2) * 0.3 + Math.PI / 4;

        ringGroup2.rotation.y = -elapsedTime * (0.28 + energyBoost * 0.4);
        ringGroup2.rotation.z = Math.cos(elapsedTime * 0.25) * 0.2;

        const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.06 + energyBoost * 0.25;
        innerMesh.scale.set(pulse, pulse, pulse);
        particles.rotation.y = -elapsedTime * (0.08 + energyBoost * 0.2);

        renderer.render(scene, camera);

        if (isSoftwareGl) {
          // Software WebGL frame pacing via RAF skip without leaving stale non-null loop ID
          animationFrameId = requestAnimationFrame((nextNow) => {
            if (shouldRun()) {
              animationFrameId = requestAnimationFrame(animate);
            } else {
              animationFrameId = null;
            }
            void nextNow;
          });
        } else {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      const syncLoopState = () => {
        if (shouldRun()) {
          if (animationFrameId === null) {
            lastFrameTime = performance.now();
            animationFrameId = requestAnimationFrame(animate);
          }
        } else {
          stopLoop();
        }
      };

      const canvasEl = renderer.domElement;
      const handleContextLost = (e: Event) => {
        e.preventDefault();
        isContextLost = true;
        stopLoop();
        setFallbackActive(true);
      };
      const handleContextRestored = () => {
        isContextLost = false;
        setFallbackActive(false);
        syncLoopState();
      };

      canvasEl.addEventListener('webglcontextlost', handleContextLost);
      canvasEl.addEventListener('webglcontextrestored', handleContextRestored);

      const observer = new IntersectionObserver(
        ([entry]) => {
          isIntersecting = entry.isIntersecting;
          syncLoopState();
        },
        { threshold: 0.05 }
      );
      observer.observe(container);

      const handleVisibilityChange = () => {
        syncLoopState();
      };

      window.addEventListener('mousemove', handlePointerMove, { passive: true });
      window.addEventListener('portal-key-actuate', handleKeyActuation);
      window.addEventListener('resize', handleResize);
      document.addEventListener('visibilitychange', handleVisibilityChange);

      syncLoopState();

      return () => {
        isDisposed = true;
        stopLoop();
        observer.disconnect();
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('mousemove', handlePointerMove);
        window.removeEventListener('portal-key-actuate', handleKeyActuation);
        window.removeEventListener('resize', handleResize);
        canvasEl.removeEventListener('webglcontextlost', handleContextLost);
        canvasEl.removeEventListener('webglcontextrestored', handleContextRestored);

        if (container.contains(canvasEl)) {
          container.removeChild(canvasEl);
        }
        coreGeo.dispose();
        coreMat.dispose();
        wireGeo.dispose();
        wireMat.dispose();
        innerGeo.dispose();
        innerMat.dispose();
        ringGeo1.dispose();
        ringMat1.dispose();
        ringGeo2.dispose();
        ringMat2.dispose();
        nodeGeo.dispose();
        nodeMat.dispose();
        particleGeo.dispose();
        particleMat.dispose();
        renderer?.dispose();
      };
    } catch {
      setFallbackActive(true);
      renderer?.dispose();
    }
  }, [interactive]);

  if (fallbackActive) {
    return (
      <div
        className={`relative w-full h-full pointer-events-none flex items-center justify-center ${className}`}
        aria-hidden="true"
      >
        <div
          className="w-72 h-72 rounded-full border border-[#FF6A00]/25 flex items-center justify-center"
          style={{
            boxShadow: 'inset 0 0 60px rgba(255, 106, 0, 0.08), 0 0 60px rgba(56, 189, 248, 0.06)',
          }}
        >
          <div className="w-48 h-48 rounded-full border border-[#38BDF8]/25" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};
