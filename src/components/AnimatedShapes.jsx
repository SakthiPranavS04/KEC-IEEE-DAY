import React from 'react';

/**
 * AnimatedShapes
 * Renders subtle, slow-moving blurred gradient blobs, floating circular orbs,
 * and translucent geometric accents in Purple, Blue, Cyan, and Pink.
 * Positioned fixed behind all content with pointer-events: none.
 */
export default function AnimatedShapes() {
  return (
    <div className="animated-shapes-container" aria-hidden="true">
      {/* 1. Large Purple Hero Ambient Blob (top-left) */}
      <div className="floating-shape shape-purple shape-hero-blob"></div>

      {/* 2. Floating Cyan Orb (top-right) */}
      <div className="floating-shape shape-cyan shape-cyan-orb"></div>

      {/* 3. Pink & Purple Blurred Gradient Shape (mid-left) */}
      <div className="floating-shape shape-pink shape-mid-blob"></div>

      {/* 4. Vibrant Electric Blue Glow Orb (mid-right) */}
      <div className="floating-shape shape-blue shape-mid-right-orb"></div>

      {/* 5. Deep Purple Ambient Base (lower-left) */}
      <div className="floating-shape shape-deep-purple shape-lower-blob"></div>

      {/* 6. Soft Cyan-Blue Accent (bottom-right) */}
      <div className="floating-shape shape-cyan-soft shape-bottom-orb"></div>

      {/* Translucent Geometric Tech Accents */}
      <div className="floating-geom geom-ring-primary"></div>
      <div className="floating-geom geom-ring-secondary"></div>
      <div className="floating-geom geom-diamond-tech"></div>
    </div>
  );
}
