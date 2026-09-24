import React from 'react';

export default function Footer() {
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <footer id="contact" className="footer-contact-section">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand & Mission Column */}
          <div className="footer-brand-column">
            <div className="footer-logo-row">
              <img 
                src="/assets/logos/ieee-master.svg" 
                alt="IEEE Logo" 
                className="footer-ieee-logo"
                width="82"
                height="30"
              />
              <img 
                src="/assets/logos/ieee-day-logo.png" 
                alt="IEEE Day Logo" 
                className="footer-ieee-day-logo" 
                width="34" 
                height="34"
              />
              <div className="footer-brand-divider" aria-hidden="true"></div>
              <div className="footer-brand-text">
                <span className="footer-brand-name">IEEE STUDENT BRANCH</span>
                <span className="footer-brand-sub">KONGU ENGINEERING COLLEGE</span>
              </div>
            </div>

            <p className="footer-tagline">
              Empowering student engineers, nurturing innovation, and advancing technology for humanity at Kongu Engineering College under IEEE Madras Section.
            </p>

          </div>

          {/* Quick Smooth Navigation Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#home" className="footer-nav-link" onClick={(e) => scrollToSection(e, 'home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="footer-nav-link" onClick={(e) => scrollToSection(e, 'about')}>
                  About IEEE Day
                </a>
              </li>
              <li>
                <a href="#events" className="footer-nav-link" onClick={(e) => scrollToSection(e, 'events')}>
                  All Events
                </a>
              </li>
              <li>
                <a href="#ambassador" className="footer-nav-link" onClick={(e) => scrollToSection(e, 'ambassador')}>
                  Meet Our Ambassador
                </a>
              </li>
              <li>
                <a href="#societies" className="footer-nav-link" onClick={(e) => scrollToSection(e, 'societies')}>
                  Our Societies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="footer-heading">Contact Information</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>
                  Kongu Engineering College, Perundurai, Erode &ndash; 638060, Tamil Nadu, India.
                </span>
              </li>
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:ieeesb@kongu.edu" className="footer-contact-link">
                  ieeesb@kongu.edu
                </a>
              </li>
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="footer-contact-link">
                  +91 (04294) 226555
                </span>
              </li>
              <li className="footer-contact-item">
                <svg className="footer-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <span>Branch Code: STB29741</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            &copy; 2026 KONGU ENGINEERING COLLEGE. All Rights Reserved.
          </div>

          <button 
            type="button" 
            className="footer-back-to-top"
            onClick={(e) => scrollToSection(e, 'home')}
          >
            <span>Back to top</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
