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
      {/* Futuristic Aurora Gradient Waves & Light Beams */}
      <div className="hero-orb hero-orb-1" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-2" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-3" aria-hidden="true"></div>
      <div className="hero-aurora-glow" aria-hidden="true"></div>
      <div className="hero-ambient-rays" aria-hidden="true"></div>
      <div className="hero-bg-pattern" aria-hidden="true"></div>

      <div className="container hero-content">

        {/* Organization Name & Prestige Badge */}
        <div className="hero-org-badge">
          <span className="hero-org-dot"></span>
          <span>KEC IEEE Student Branch &bull; Kongu Engineering College</span>
        </div>

        {/* Conference Label */}
        <div className="hero-flagship-pill">
          ANNUAL GLOBAL CELEBRATION &bull; 06 OCTOBER 2026
        </div>

        {/* Huge Conference Title */}
        <h1 className="hero-main-title">
          IEEE DAY <span className="hero-year-highlight">2026</span>
        </h1>

        {/* Theme Motto */}
        <p className="hero-theme-motto">
          &ldquo;Leveraging Technology for a Better Tomorrow&rdquo;
        </p>

        {/* Short, direct description */}
        <p className="hero-lead-punchy">
          Join us at Kongu Engineering College in celebrating IEEE Day — an international celebration of innovation, collaboration, and the global IEEE community.
        </p>

        {/* Conference Action Button */}
        <div className="hero-actions">
          <a 
            href="#events" 
            className="btn btn-primary-conference"
            onClick={(e) => scrollToSection(e, 'events')}
          >
            <span>Register Now</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
