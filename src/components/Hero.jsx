import React from 'react';

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
    <section id="home" className="hero-section">
      {/* Dynamic Colorful Mesh Gradient Orbs */}
      <div className="hero-orb hero-orb-1" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-2" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-3" aria-hidden="true"></div>
      <div className="hero-bg-pattern" aria-hidden="true"></div>

      <div className="container hero-content">

        {/* Organization Name */}
        <div className="hero-org-badge">
          <span className="hero-org-dot"></span>
          <span>KONGU ENGINEERING COLLEGE</span>
        </div>

        {/* Main Title with Radiant Gradient */}
        <h1 className="hero-main-title">
          IEEE Day <span className="gradient-text-celebration">Celebration</span>
        </h1>

        {/* Short, direct description as required */}
        <p className="hero-lead-punchy">
          Join us in celebrating IEEE Day — a celebration of innovation, collaboration, technology and the global IEEE community.
        </p>

        {/* Vibrant Action Button */}
        <div className="hero-actions">
          <a 
            href="#events" 
            className="btn btn-gradient-glow"
            onClick={(e) => scrollToSection(e, 'events')}
          >
            <span>Register Now</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>

        {/* Vibrant Key Event Highlights Strip */}
        <div className="hero-stats-strip">
          <div className="hero-stat-pill pill-cyan">
            <span className="pill-icon">📅</span>
            <div>
              <strong>October 2026</strong>
              <span>Full Day Tech Fest</span>
            </div>
          </div>

          <div className="hero-stat-pill pill-amber">
            <span className="pill-icon">📍</span>
            <div>
              <strong>Kongu Engineering College</strong>
              <span>Perundurai Campus</span>
            </div>
          </div>

          <div className="hero-stat-pill pill-emerald">
            <span className="pill-icon">⚡</span>
            <div>
              <strong>7 Competitions</strong>
              <span>Certificates & Prizes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
