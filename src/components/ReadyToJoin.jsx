import React from 'react';

/**
 * ReadyToJoin Component
 * The featured high-energy IEEE Day 2026 call to action displayed at the starting page.
 * Prominently invites students to discover the competitions and register.
 */
export default function ReadyToJoin() {
  const scrollToEvents = (e) => {
    e.preventDefault();
    const el = document.getElementById('events');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#events');
    }
  };

  return (
    <section id="ready-to-join" className="ready-to-join-section" aria-label="Ready to be part of IEEE Day 2026">
      <div className="container">
        <div className="ready-to-join-content text-center">
          {/* Top Pill Badge */}
          <div className="ready-pill-badge">
            ANNUAL CELEBRATION &bull; 06 OCTOBER 2026
          </div>

          {/* Main Huge Heading */}
          <h2 className="ready-heading">
            READY TO BE PART OF <br />
            <span className="ready-highlight">IEEE DAY 2026?</span>
          </h2>

          {/* Theme / Lead Quote */}
          <p className="ready-quote">
            &ldquo;Your journey starts here. Innovate, compete, and connect with tomorrow&rsquo;s leaders.&rdquo;
          </p>

          {/* Descriptive Body */}
          <p className="ready-description">
            Join hundreds of engineering students, visionaries, and researchers at Kongu Engineering College. Choose your competition, sign up with your team, and receive official IEEE certificates and prizes.
          </p>

          {/* Glowing Register Now Action */}
          <div className="ready-action-wrapper">
            <a 
              href="#events" 
              onClick={scrollToEvents} 
              className="btn-ready-register"
              id="start-register-btn"
            >
              <span>REGISTER NOW</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Benefits / Guarantees Strip */}
          <div className="ready-guarantees-row">
            <span className="ready-guarantee-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Free Student Registration</span>
            </span>

            <span className="ready-guarantee-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>IEEE Participation Certificates</span>
            </span>

            <span className="ready-guarantee-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Exciting Cash Prizes &amp; Trophies</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
