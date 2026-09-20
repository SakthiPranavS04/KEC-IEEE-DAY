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
      {/* Background Subtle Tech Matrix / Grid */}
      <div className="hero-bg-pattern" aria-hidden="true"></div>

      {/* Abstract Circuit Geometric SVG Accent */}
      <svg 
        className="hero-circuit-svg" 
        viewBox="0 0 400 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M50 20 H200 L250 70 H350" stroke="#00629B" strokeWidth="1.5" strokeDasharray="4 4" />
        <path d="M100 120 H220 L270 170 H380" stroke="#00A3E0" strokeWidth="1.5" />
        <path d="M20 200 H150 L190 240 H320" stroke="#00629B" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="200" cy="20" r="4" fill="#00629B" />
        <circle cx="250" cy="70" r="4" fill="#00A3E0" />
        <circle cx="220" cy="120" r="4" fill="#00629B" />
        <circle cx="270" cy="170" r="5" fill="#00A3E0" />
        <circle cx="190" cy="240" r="3" fill="#00629B" />
      </svg>

      <div className="container hero-content">
        {/* Status Pill Badge */}
        <div className="hero-pill">
          <span className="hero-pill-dot"></span>
          <span className="hero-pill-text">Annual Flagship Celebration &bull; October 2026</span>
        </div>

        {/* Supporting Heading */}
        <h2 className="hero-org-title">KEC IEEE Student Branch</h2>

        {/* Main Heading */}
        <h1 className="hero-main-title">
          IEEE Day <span>Celebration</span>
        </h1>

        {/* Description as requested */}
        <p className="hero-lead">
          Join us in celebrating IEEE Day — a celebration of innovation, collaboration, technology and the global IEEE community.
        </p>

        <p className="hero-description">
          Bringing together students, innovators, technology enthusiasts, and IEEE members to exchange pioneering ideas, showcase groundbreaking engineering projects, and shape the technological future together.
        </p>

        {/* CTA Buttons - Both scroll on the same page */}
        <div className="hero-actions">
          <a 
            href="#events" 
            className="btn btn-primary"
            onClick={(e) => scrollToSection(e, 'events')}
          >
            <span>Explore Events</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </a>

          <a 
            href="#events" 
            className="btn btn-secondary"
            onClick={(e) => scrollToSection(e, 'events')}
          >
            <span>Register Now</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        {/* Key Event Metadata Bar */}
        <div className="hero-meta-bar">
          <div className="hero-meta-item">
            <div className="hero-meta-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div>
              <div className="hero-meta-label">Date & Time</div>
              <div className="hero-meta-value">October 2026 &bull; Full Day</div>
            </div>
          </div>

          <div className="hero-meta-item">
            <div className="hero-meta-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div>
              <div className="hero-meta-label">Venue</div>
              <div className="hero-meta-value">Kongu Engineering College, Perundurai</div>
            </div>
          </div>

          <div className="hero-meta-item">
            <div className="hero-meta-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <div>
              <div className="hero-meta-label">Activities</div>
              <div className="hero-meta-value">7 Specialized Events & Contests</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
