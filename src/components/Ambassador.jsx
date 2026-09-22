import React from 'react';
import { ambassadorsData } from '../data/ambassador.js';

export default function Ambassador() {
  return (
    <section id="ambassador" className="ambassador-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag section-tag-amber">Leadership &amp; Mentorship</span>
          <h2 className="section-title">
            Meet Our <span className="gradient-text-amber">Ambassadors</span>
          </h2>
          <p className="section-subtitle">
            Empowering students to connect, innovate, and lead in the global IEEE ecosystem.
          </p>
        </div>

        {/* 5 Ambassadors Grid */}
        <div className="ambassadors-grid">
          {ambassadorsData.map((ambassador) => (
            <div key={ambassador.id} className="ambassador-card-modern">
              {/* Top Accent Gradient Bar */}
              <div className="ambassador-card-bar" aria-hidden="true"></div>

              {/* Ambassador Photo Header */}
              <div className="ambassador-card-header">
                <div className="ambassador-avatar-wrapper">
                  <div className="ambassador-avatar-glow" aria-hidden="true"></div>
                  <img 
                    src={ambassador.photo} 
                    alt={ambassador.name} 
                    className="ambassador-card-avatar"
                    width="120"
                    height="120"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/ambassador/ambassador.jpg';
                    }}
                  />
                  <span className="ambassador-badge-tag">{ambassador.badge}</span>
                </div>
              </div>

              {/* Ambassador Details */}
              <div className="ambassador-card-body">
                <div className="ambassador-tagline">{ambassador.tagline}</div>
                <h3 className="ambassador-card-name">{ambassador.name}</h3>
                <div className="ambassador-card-role">{ambassador.role}</div>
                <div className="ambassador-card-dept">{ambassador.department}</div>
                <div className="ambassador-card-org">{ambassador.college}</div>

                <blockquote className="ambassador-card-quote">
                  &ldquo;{ambassador.quote}&rdquo;
                </blockquote>

                {/* Focus Area Tags */}
                {ambassador.tags && (
                  <div className="ambassador-card-tags">
                    {ambassador.tags.map((tag, idx) => (
                      <span key={idx} className="ambassador-tag-chip">{tag}</span>
                    ))}
                  </div>
                )}

                {/* Social Links */}
                <div className="ambassador-card-socials">
                  <a 
                    href={ambassador.socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-circle-btn social-btn-linkedin"
                    aria-label={`${ambassador.name} LinkedIn profile`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>

                  <a 
                    href={ambassador.socials.email} 
                    className="social-circle-btn social-btn-email"
                    aria-label={`Email ${ambassador.name}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </a>

                  <a 
                    href={ambassador.socials.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-circle-btn social-btn-instagram"
                    aria-label="KEC IEEE Instagram"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
