import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Centered Section Name & Header */}
        <div className="section-header">
          <h2 className="section-title">
            About <span className="gradient-text-rainbow">IEEE Day</span>
          </h2>
          <p className="section-subtitle">
            A Global Celebration of People, Ideas &amp; Technology
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Information & Pillars */}
          <div className="about-left">
            <h3 className="about-subtitle">
              Commemorating Global Engineering Excellence Since 1884
            </h3>

            <p className="about-punchy-lead">
              IEEE Day commemorates the historic 1884 meeting where engineers worldwide first united to share technical knowledge and leverage technology for humanity.
            </p>

            {/* 3 Feature Cards with Clean Outline SVG Icons */}
            <div className="about-quick-cards">
              <div className="quick-card quick-card-blue">
                <div className="quick-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </svg>
                </div>
                <div>
                  <h4>Innovation</h4>
                  <p>Fostering cutting-edge research, design sprints, and real-world breakthroughs.</p>
                </div>
              </div>

              <div className="quick-card quick-card-pink">
                <div className="quick-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h4>Collaboration</h4>
                  <p>Uniting students, faculty, and industry pioneers worldwide.</p>
                </div>
              </div>

              <div className="quick-card quick-card-violet">
                <div className="quick-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="9" y1="18" x2="15" y2="18"></line>
                    <line x1="10" y1="22" x2="14" y2="22"></line>
                    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
                  </svg>
                </div>
                <div>
                  <h4>Technology</h4>
                  <p>Hands-on coding, hardware labs, and multidisciplinary skills.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Elevated Stat Card */}
          <div className="about-right">
            <div className="about-card-vibrant">
              <div className="about-vibrant-header">
                <span className="badge-madras">IEEE Madras Section</span>
                <span className="badge-code">STB29741</span>
              </div>

              <h3 className="about-card-title">KONGU ENGINEERING COLLEGE</h3>

              <div className="about-stats-grid">
                <div className="about-stat-box stat-gradient-emerald">
                  <div className="about-stat-number">400K+</div>
                  <div className="about-stat-label">Global Members</div>
                </div>

                <div className="about-stat-box stat-gradient-amber">
                  <div className="about-stat-number">160+</div>
                  <div className="about-stat-label">Countries</div>
                </div>

                <div className="about-stat-box stat-gradient-rose">
                  <div className="about-stat-number">1884</div>
                  <div className="about-stat-label">Legacy Year</div>
                </div>
              </div>

              <div className="about-card-footer">
                <img 
                  src="/assets/logos/ieee-master.svg" 
                  alt="IEEE Logo" 
                  style={{ height: '32px', width: 'auto' }} 
                />
                <span className="about-college-text">Kongu Engineering College, Perundurai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
