import React from 'react';

/**
 * AnimatedShapes
 * Renders vibrant, colorful floating gradient shapes, morphing mesh blobs,
 * and glowing geometric accents in the background across the webpage.
 */
export default function AnimatedShapes() {
  return (
    <div className="animated-shapes-container" aria-hidden="true">
      {/* Colorful Gradient Blobs with floating keyframe animations */}
      <div className="floating-shape shape-cyan-blue shape-blob-1"></div>
      <div className="floating-shape shape-purple-pink shape-blob-2"></div>
      <div className="floating-shape shape-amber-gold shape-blob-3"></div>
      <div className="floating-shape shape-emerald-cyan shape-blob-4"></div>
      <div className="floating-shape shape-magenta-violet shape-blob-5"></div>
      
      {/* Tech Geometrics / Rings */}
      <div className="floating-geom geom-ring-1"></div>
      <div className="floating-geom geom-ring-2"></div>
      <div className="floating-geom geom-diamond-1"></div>
    </div>
  );
}
