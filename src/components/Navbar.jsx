import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo & Name */}
        <a 
          href="#home" 
          className="navbar-brand" 
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="KONGU ENGINEERING COLLEGE IEEE Day"
        >
          <img 
            src="/assets/logos/ieee-master.svg" 
            alt="IEEE Logo" 
            className="navbar-logo-img" 
            width="88" 
            height="32"
          />
          <div className="navbar-brand-divider" aria-hidden="true"></div>
          <div className="navbar-brand-text">
            <span className="navbar-brand-name">KONGU ENGINEERING COLLEGE</span>
            <span className="navbar-brand-sub">KEC IEEE Student Branch</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="navbar-nav">
            <li>
              <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>
                About
              </a>
            </li>
            <li>
              <a href="#timeline" className="nav-link" onClick={(e) => handleNavClick(e, 'timeline')}>
                Timeline
              </a>
            </li>
            <li>
              <a href="#events" className="nav-link" onClick={(e) => handleNavClick(e, 'events')}>
                Events
              </a>
            </li>
            <li>
              <a href="#gallery" className="nav-link" onClick={(e) => handleNavClick(e, 'gallery')}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#ambassador" className="nav-link" onClick={(e) => handleNavClick(e, 'ambassador')}>
                Ambassador
              </a>
            </li>
            <li>
              <a href="#societies" className="nav-link" onClick={(e) => handleNavClick(e, 'societies')}>
                Societies
              </a>
            </li>
            <li>
              <a href="#events" className="btn-nav-register-gradient" onClick={(e) => handleNavClick(e, 'events')}>
                <span>Register Now</span>
                <span className="nav-btn-arrow" aria-hidden="true">&rarr;</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu Drawer (Glassmorphic) */}
      <nav 
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <a href="#home" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'home')}>
          <span>Home</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
        <a href="#about" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'about')}>
          <span>About IEEE Day</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
        <a href="#timeline" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'timeline')}>
          <span>Heritage Timeline</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
        <a href="#events" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'events')}>
          <span>Events &amp; Competitions</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
        <a href="#gallery" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'gallery')}>
          <span>Celebration Gallery</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
        <a href="#ambassador" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'ambassador')}>
          <span>Meet Our Ambassador</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
        <a href="#societies" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'societies')}>
          <span>Our Societies</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
        <a href="#contact" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'contact')}>
          <span>Contact &amp; Location</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
        <a 
          href="#events" 
          className="btn-nav-register-gradient mobile-register-cta"
          onClick={(e) => handleNavClick(e, 'events')}
        >
          <span>Register for IEEE Day 2026</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
      </nav>
    </header>
  );
}
