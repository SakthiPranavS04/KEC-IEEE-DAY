import React, { useEffect, useRef } from 'react';

/**
 * GlobalNetworkCanvas
 * Lightweight, high-performance HTML5 Canvas component that renders
 * subtle digital network connection nodes and connecting line arcs.
 * Communicates: "IEEE connects people, technology and ideas globally."
 * 
 * Features:
 * - Dynamic density based on device width (optimized for mobile)
 * - Auto-pauses on document visibility change (battery saving)
 * - Respects prefers-reduced-motion
 * - High DPI canvas resolution
 */
export default function GlobalNetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let particles = [];

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      // Mobile: fewer particles (~22), Desktop: ~48
      const particleCount = width < 768 ? 22 : 48;
      initParticles(particleCount);
    };

    const initParticles = (count) => {
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.8 + 1.2,
          alpha: Math.random() * 0.5 + 0.35,
          // Color variety: IEEE blue, cyan, and subtle violet
          colorType: i % 3 === 0 ? 'cyan' : i % 3 === 1 ? 'blue' : 'purple'
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Max connection distance
      const maxDist = width < 768 ? 95 : 135;

      // Draw connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Gradient connection stroke
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, `rgba(0, 229, 255, ${lineAlpha})`);
            gradient.addColorStop(1, `rgba(139, 92, 246, ${lineAlpha * 0.8})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // Draw glowing nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Glow halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
        if (p.colorType === 'cyan') {
          ctx.fillStyle = `rgba(0, 229, 255, ${p.alpha * 0.18})`;
        } else if (p.colorType === 'blue') {
          ctx.fillStyle = `rgba(0, 163, 224, ${p.alpha * 0.18})`;
        } else {
          ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha * 0.18})`;
        }
        ctx.fill();

        // Node center
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        if (p.colorType === 'cyan') {
          ctx.fillStyle = `rgba(0, 240, 255, ${p.alpha})`;
        } else if (p.colorType === 'blue') {
          ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        } else {
          ctx.fillStyle = `rgba(167, 139, 250, ${p.alpha})`;
        }
        ctx.fill();

        // Move particle unless reduced motion is requested
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          else if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          else if (p.y > height) p.y = 0;
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    if (prefersReducedMotion) {
      draw(); // Render single static constellation
    } else {
      animationFrameId = requestAnimationFrame(draw);
    }

    // Pause animation when tab is inactive to save battery
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="global-network-canvas"
      aria-hidden="true"
    />
  );
}
