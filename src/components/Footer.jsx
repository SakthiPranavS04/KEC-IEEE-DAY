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
                width="84"
                height="32"
              />
              <div className="footer-org-name">KEC IEEE Student Branch</div>
            </div>

            <p className="footer-tagline">
              Empowering student engineers, nurturing innovation, and advancing technology for humanity at Kongu Engineering College under IEEE Madras Section.
            </p>

            {/* Social Links */}
            <div className="footer-social-links">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/school/kongu-engineering-college/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="KEC IEEE on LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/kec_ieee/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="KEC IEEE on Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@IEEEAP-S" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="KEC IEEE on YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
                </svg>
              </a>
            </div>
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
                  All 7 Events
                </a>
              </li>
              <li>
                <a href="#ambassador" className="footer-nav-link" onClick={(e) => scrollToSection(e, 'ambassador')}>
                  Meet Our Ambassador
                </a>
              </li>
              <li>
                <a href="#societies" className="footer-nav-link" onClick={(e) => scrollToSection(e, 'societies')}>
                  Our 7 Societies
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
            &copy; 2026 KEC IEEE Student Branch, Kongu Engineering College. All Rights Reserved.
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
