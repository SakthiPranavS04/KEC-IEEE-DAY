import React from 'react';
import SocietyCarousel from './SocietyCarousel.jsx';
import { societyLogos } from '../data/societies.js';

export default function Societies() {
  return (
    <section id="societies" className="societies-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Technical Chapters</span>
          <h2 className="section-title">Our Societies</h2>
          <p className="section-subtitle">
            KEC IEEE Student Branch proudly hosts 7 specialized society chapters, fostering domain-specific excellence, research, and industry collaboration.
          </p>
        </div>
      </div>

      {/* Infinite Rolling Society Logo Carousel */}
      <SocietyCarousel />

      {/* Grid Explorer for individual society deep dive */}
      <div className="container">
        <div className="societies-grid-explorer">
          {societyLogos.map((soc) => (
            <a
              key={soc.id}
              href={soc.website}
              target="_blank"
              rel="noopener noreferrer"
              className="society-grid-card"
              title={`Explore ${soc.name}`}
            >
              <div className="society-grid-logo-box">
                <img
                  src={soc.logo}
                  alt={`${soc.name} Logo`}
                  className="society-grid-logo-img"
                  loading="lazy"
                />
              </div>
              <div className="society-grid-details">
                <span className="society-badge" style={{ marginBottom: '0.25rem', display: 'inline-block' }}>
                  {soc.shortName}
                </span>
                <h3 className="society-grid-title">{soc.name}</h3>
                <p className="society-grid-desc">{soc.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
