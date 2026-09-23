import React from 'react';

/**
 * Hero Component
 * Redesigned with the colorful gradient atmosphere, huge typography,
 * animated orbs, glassmorphic highlight pills, and dual CTA buttons.
 */
export default function Hero() {
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <section id="home" className="hero-section" aria-label="IEEE Day 2026 Hero">
      {/* Dynamic colorful gradient orbs within the Hero viewport */}
      <div className="hero-gradient-mesh" aria-hidden="true">
        <div className="hero-mesh-orb hero-mesh-purple"></div>
        <div className="hero-mesh-orb hero-mesh-cyan"></div>
        <div className="hero-mesh-orb hero-mesh-pink"></div>
        <div className="hero-mesh-grid-pattern"></div>
      </div>

      <div className="container hero-content">
        {/* 1. Organization & College Prestige Badge */}
        <div className="hero-org-badge">
          <span className="hero-org-dot" aria-hidden="true"></span>
          <span className="hero-org-text">KEC IEEE STUDENT BRANCH &bull; KONGU ENGINEERING COLLEGE</span>
        </div>

        {/* 2. Flagship Event Date Pill */}
        <div className="hero-flagship-pill">
          <span className="flagship-star" aria-hidden="true">✦</span>
          <span>ANNUAL GLOBAL CELEBRATION &bull; 06 OCTOBER 2026</span>
          <span className="flagship-star" aria-hidden="true">✦</span>
        </div>

        {/* 3. Main Headline: IEEE DAY 2026 */}
        <h1 className="hero-main-title">
          <span className="hero-title-base">IEEE DAY</span>{' '}
          <span className="hero-title-gradient">2026</span>
        </h1>

        {/* 4. Theme Motto */}
        <p className="hero-theme-motto">
          &ldquo;LEVERAGING TECHNOLOGY FOR A BETTER TOMORROW&rdquo;
        </p>

        {/* 5. Punchy Lead Description */}
        <p className="hero-lead-punchy">
          Join us at Kongu Engineering College in celebrating IEEE Day — an international celebration of innovation, collaboration, and engineering excellence across the global IEEE community.
        </p>

        {/* 6. Dual Functional CTA Buttons */}
        <div className="hero-actions">
          <a 
            href="#events" 
            className="btn btn-primary-gradient"
            onClick={(e) => scrollToSection(e, 'events')}
            id="hero-explore-events-btn"
          >
            <span>Explore Events</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>

          <a 
            href="#about" 
            className="btn btn-secondary-glass"
            onClick={(e) => scrollToSection(e, 'about')}
            id="hero-about-btn"
          >
            <span>About IEEE Day</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 16 12 12 12 8"></polyline>
              <line x1="12" y1="20" x2="12.01" y2="20"></line>
            </svg>
          </a>
        </div>

        {/* 7. Key Event Highlights Strip in Refined Glassmorphism */}
        <div className="hero-stats-strip">
          <div className="hero-stat-glass-card glass-cyan">
            <span className="stat-glass-icon" aria-hidden="true">📅</span>
            <div className="stat-glass-text">
              <strong>06 October 2026</strong>
              <span>Full Day Tech Fest</span>
            </div>
          </div>

          <div className="hero-stat-glass-card glass-purple">
            <span className="stat-glass-icon" aria-hidden="true">📍</span>
            <div className="stat-glass-text">
              <strong>Kongu Engineering College</strong>
              <span>Perundurai Campus</span>
            </div>
          </div>

          <div className="hero-stat-glass-card glass-pink">
            <span className="stat-glass-icon" aria-hidden="true">⚡</span>
            <div className="stat-glass-text">
              <strong>7 Competitions</strong>
              <span>Certificates &amp; Prizes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
