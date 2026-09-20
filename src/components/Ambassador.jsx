import React from 'react';
import { ambassadorData } from '../data/ambassador.js';

export default function Ambassador() {
  return (
    <section id="ambassador" className="ambassador-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag section-tag-amber">Leadership & Mentorship</span>
          <h2 className="section-title">
            Meet Our <span className="gradient-text-amber">Ambassador</span>
          </h2>
          <p className="section-subtitle">
            Guiding students into the global IEEE ecosystem and fostering collaborative excellence.
          </p>
        </div>

        {/* Colorful Ambassador Card */}
        <div className="ambassador-container">
          <div className="ambassador-card-colorful">
            {/* Ambassador Photo Column */}
            <div className="ambassador-image-container">
              <div className="ambassador-photo-glow"></div>
              <img 
                src={ambassadorData.photo} 
                alt={ambassadorData.name} 
                className="ambassador-photo"
                width="220"
                height="220"
                loading="lazy"
              />
              <span className="ambassador-badge-tag">{ambassadorData.role}</span>
            </div>

            {/* Ambassador Details Column */}
            <div className="ambassador-content">
              <div className="ambassador-tagline">Official Representative</div>
              <h3 className="ambassador-name">{ambassadorData.name}</h3>
              <div className="ambassador-designation">{ambassadorData.role}</div>
              <div className="ambassador-org">{ambassadorData.organization} &bull; {ambassadorData.college}</div>

              <blockquote className="ambassador-quote">
                &ldquo;{ambassadorData.quote}&rdquo;
              </blockquote>

              {/* Social Links */}
              <div className="ambassador-socials">
                <a 
                  href={ambassadorData.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-circle-btn social-btn-linkedin"
                  aria-label="Ambassador LinkedIn profile"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>

                <a 
                  href={ambassadorData.socials.email} 
                  className="social-circle-btn social-btn-email"
                  aria-label="Email Ambassador"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>

                <a 
                  href={ambassadorData.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-circle-btn social-btn-instagram"
                  aria-label="Branch Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
