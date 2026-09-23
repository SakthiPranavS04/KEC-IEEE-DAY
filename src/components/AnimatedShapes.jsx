import React from 'react';

/**
 * AnimatedShapes
 * Glassmorphism floating ambient shapes:
 * Clean, translucent frosted glass orbs in Emerald, Amber, Rose, and Luminous Silver.
 * Zero blue or violet tones.
 */
export default function AnimatedShapes() {
  return (
    <div className="animated-shapes-container" aria-hidden="true">
      {/* Animated Floating Blue Shapes & Auras on White Background */}
      <div className="floating-shape shape-blue-1"></div>
      <div className="floating-shape shape-blue-2"></div>
      <div className="floating-shape shape-blue-3"></div>
      <div className="floating-shape shape-blue-4"></div>
      <div className="floating-shape shape-blue-5"></div>
      
      {/* Geometric Blue Rings & Animated Diamond Prisms */}
      <div className="floating-geom geom-ring-1"></div>
      <div className="floating-geom geom-ring-2"></div>
      <div className="floating-geom geom-diamond-1"></div>
    </div>
  );
}
