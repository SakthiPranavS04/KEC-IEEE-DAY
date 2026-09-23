import React from 'react';
import SocietyCarousel from './SocietyCarousel.jsx';

export default function Societies() {
  return (
    <section id="societies" className="societies-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Technical Societies</span>
          <h2 className="section-title">
            Our <span className="gradient-text-rainbow">Societies</span>
          </h2>
          <p className="section-subtitle">
            Hover over any chapter to pause and explore our specialized IEEE technical societies.
          </p>
        </div>
      </div>

      {/* Infinite Rolling Society Logo Carousel */}
      <SocietyCarousel />
    </section>
  );
}
