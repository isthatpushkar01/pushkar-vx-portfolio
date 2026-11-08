import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeNeuralCoreProps {
  className?: string;
  interactive?: boolean;
}

export const ThreeNeuralCore: React.FC<ThreeNeuralCoreProps> = ({
  className = '',
  interactive = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;
    let width = container.clientWidth || 400;
    let height = container.clientHeight || 400;

    // Detect software GL
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return true;
      }
    })();

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Master Group for 3D Neural Core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Metallic Icosahedron Core
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x111622,
      metalness: 0.9,
      roughness: 0.18,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // 2. Wireframe Lattice Cage (Neon Orange & Cyber Accents)
    const wireGeo = new THREE.IcosahedronGeometry(1.68, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xFF8A32,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireMesh);

    // 3. Inner Pulsing Core
    const innerGeo = new THREE.SphereGeometry(0.9, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xB6FF4A,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // 4. Concentric Orbital Rings (Gimbal rings)
    const ringGroup1 = new THREE.Group();
    const ringGroup2 = new THREE.Group();
    coreGroup.add(ringGroup1);
    coreGroup.add(ringGroup2);

    const ringGeo1 = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xFF8A32,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ringGroup1.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.7, 0.018, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.4,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ringGroup2.add(ring2);

    // 5. Orbital Data Nodes (Little orbiting cubes/spheres)
    const nodeCount = 14;
    const nodeGeo = new THREE.SphereGeometry(0.06, 8, 8);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xB6FF4A });
    const nodes: THREE.Mesh[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 2.3;
      node.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
      ringGroup1.add(node);
      nodes.push(node);
    }

    // 6. Particle Cloud (Neural Dust / Synaptic points)
    const particleCount = isSoftwareGl ? 120 : 380;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorA = new THREE.Color(0xFF8A32);
    const colorB = new THREE.Color(0x38BDF8);
    const colorC = new THREE.Color(0xB6FF4A);

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

    // Studio Lights
    const keyLight = new THREE.DirectionalLight(0xFF8A32, 2.5);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x38BDF8, 2.0);
    fillLight.position.set(-5, -3, 3);
    scene.add(fillLight);

    const ambientLight = new THREE.AmbientLight(0x181824, 1.2);
    scene.add(ambientLight);

    // Mouse Interaction
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let energyBoost = 0;

    const handlePointerMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.7;
      targetRotX = -y * 0.7;
    };

    const handleKeyActuation = () => {
      energyBoost = 1.0;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('portal-key-actuate', handleKeyActuation);

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Render loop
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Decay energy boost smoothly
      energyBoost *= 0.94;

      // Damped rotation interpolation
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      const rotSpeed = 0.25 + energyBoost * 0.8;
      coreGroup.rotation.y = elapsedTime * rotSpeed + currentRotY;
      coreGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.1 + currentRotX;

      // Orbiting rings at distinct speeds and axes
      ringGroup1.rotation.z = elapsedTime * (0.35 + energyBoost * 0.5);
      ringGroup1.rotation.x = Math.sin(elapsedTime * 0.2) * 0.3 + Math.PI / 4;

      ringGroup2.rotation.y = -elapsedTime * (0.28 + energyBoost * 0.4);
      ringGroup2.rotation.z = Math.cos(elapsedTime * 0.25) * 0.2;

      // Inner pulse + reactive expansion
      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.06 + energyBoost * 0.25;
      innerMesh.scale.set(pulse, pulse, pulse);

      // Subtle particle swirl
      particles.rotation.y = -elapsedTime * (0.08 + energyBoost * 0.2);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('portal-key-actuate', handleKeyActuation);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
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
      renderer.dispose();
    };
  }, [interactive]);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};
