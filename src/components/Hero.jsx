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
          ANNUAL GLOBAL CELEBRATION &bull; 28 SEPTEMBER 2026
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

        {/* Vibrant Key Event Highlights Strip (Clean Outline Icons, No Emojis) */}
        <div className="hero-stats-strip">
          <div className="hero-stat-pill pill-cyan">
            <span className="pill-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </span>
            <div>
              <strong>28 September 2026</strong>
              <span>Full Day Tech Fest</span>
            </div>
          </div>

          <div className="hero-stat-pill pill-amber">
            <span className="pill-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>
            <div>
              <strong>Kongu Engineering College</strong>
              <span>Perundurai Campus</span>
            </div>
          </div>

          <div className="hero-stat-pill pill-emerald">
            <span className="pill-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </span>
            <div>
              <strong>7 Competitions</strong>
              <span>Certificates &amp; Prizes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
