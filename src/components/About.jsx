import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Descriptive Story */}
          <div className="about-left">
            <span className="section-tag">About IEEE Day</span>
            <h2 className="about-title">
              Celebrating Global Innovation & Student Engineering Excellence
            </h2>

            <p className="about-p">
              <strong>IEEE Day</strong> commemorates the historic moment in 1884 when worldwide engineers and technical pioneers gathered for the very first time to share technical ideas, foster collaboration, and leverage technology for the benefit of humanity.
            </p>

            <p className="about-p">
              Today, this annual celebration unites thousands of students, researchers, industry leaders, and educators across the globe. At <strong>KEC IEEE Student Branch</strong> (Kongu Engineering College), IEEE Day is our flagship stage to celebrate student innovation, technological exploration, and multidisciplinary collaboration.
            </p>

            <p className="about-p">
              Whether through hands-on hackathons, technical paper discussions, hardware project exhibitions, or networking forums, our active society chapters empower students to build real-world competencies and contribute to the worldwide IEEE technical ecosystem.
            </p>

            <div className="about-features-list">
              <div className="about-feature-item">
                <svg className="about-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="about-feature-text">
                  <strong>Global Connectivity:</strong> Direct access to IEEE Xplore digital library, international conferences, and technical mentors.
                </span>
              </div>

              <div className="about-feature-item">
                <svg className="about-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="about-feature-text">
                  <strong>Student Branch Excellence:</strong> Active society chapters across CS, PES, RAS, APS, ComSoc, WIE, and PELS.
                </span>
              </div>

              <div className="about-feature-item">
                <svg className="about-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="about-feature-text">
                  <strong>Hands-on Empowerment:</strong> Practical workshops, innovation challenges, and career acceleration for engineers.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal IEEE-Themed Card */}
          <div className="about-right">
            <div className="about-card">
              <div className="about-card-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <span>IEEE Madras Section</span>
              </div>

              <h3 className="about-card-title">
                KEC IEEE Student Branch Highlights
              </h3>

              <div className="about-stats-grid">
                <div className="about-stat-box">
                  <div className="about-stat-number">400K+</div>
                  <div className="about-stat-label">Global IEEE Members</div>
                </div>

                <div className="about-stat-box">
                  <div className="about-stat-number">160+</div>
                  <div className="about-stat-label">Countries Represented</div>
                </div>

                <div className="about-stat-box">
                  <div className="about-stat-number">7</div>
                  <div className="about-stat-label">Active KEC Chapters</div>
                </div>

                <div className="about-stat-box">
                  <div className="about-stat-number">100%</div>
                  <div className="about-stat-label">Student Driven</div>
                </div>
              </div>

              <div className="about-card-footer">
                <img 
                  src="/assets/logos/ieee-master.svg" 
                  alt="IEEE Logo" 
                  style={{ height: '28px', width: 'auto' }} 
                />
                <div>
                  <div className="about-branch-code">Branch Code: STB29741</div>
                  <div className="about-branch-sub">Kongu Engineering College, Perundurai</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
