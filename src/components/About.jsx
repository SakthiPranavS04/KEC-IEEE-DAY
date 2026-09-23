import React from 'react';

/**
 * About Component
 * Bright/light surface section featuring:
 * - LEFT: Large heading & 4 Feature cards (People, Ideas, Technology, Better Tomorrow)
 * - RIGHT: Elevated statistics & credentials card
 * - TIMELINE (ID: timeline): 1884 -> Today -> Tomorrow with colorful gradient track
 */
export default function About() {
  return (
    <section id="about" className="about-section" aria-label="About IEEE Day">
      {/* Decorative subtle ambient soft glows */}
      <div className="about-ambient-glows" aria-hidden="true">
        <div className="about-glow-blob blob-purple"></div>
        <div className="about-glow-blob blob-cyan"></div>
        <div className="about-glow-blob blob-pink"></div>
      </div>

      <div className="container">
        {/* Main Grid: Left Feature Pillars + Right Credentials Card */}
        <div className="about-grid">
          {/* Left Column: Heading & 4 Distinct Pillars */}
          <div className="about-left">
            <span className="section-tag-gradient">GLOBAL HERITAGE</span>
            <h2 className="about-title">
              A Global Celebration of{' '}
              <span className="gradient-text-purple-cyan">People, Ideas &amp; Technology</span>
            </h2>

            <p className="about-punchy-lead">
              What is IEEE Day? Commemorating 1884 when engineers first gathered worldwide to share technical ideas, spark innovation, and leverage technology for a better tomorrow.
            </p>

            {/* 4 Feature Cards (People, Ideas, Technology, Better Tomorrow) */}
            <div className="about-pillars-grid">
              <div className="pillar-card pillar-purple">
                <div className="pillar-icon-box">👥</div>
                <div className="pillar-content">
                  <h4>People</h4>
                  <p>Uniting thousands of student members, educators, and global researchers.</p>
                </div>
              </div>

              <div className="pillar-card pillar-cyan">
                <div className="pillar-icon-box">💡</div>
                <div className="pillar-content">
                  <h4>Ideas</h4>
                  <p>Fostering cutting-edge technical creativity, bold pitches, and innovation.</p>
                </div>
              </div>

              <div className="pillar-card pillar-blue">
                <div className="pillar-icon-box">⚡</div>
                <div className="pillar-content">
                  <h4>Technology</h4>
                  <p>Practical coding, hardware prototyping, circuits, and antennas labs.</p>
                </div>
              </div>

              <div className="pillar-card pillar-pink">
                <div className="pillar-icon-box">🌱</div>
                <div className="pillar-content">
                  <h4>Better Tomorrow</h4>
                  <p>Building sustainable, ethical, and inclusive engineering solutions for humanity.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Elevated Stat & Credentials Card */}
          <div className="about-right">
            <div className="about-credentials-card">
              <div className="credentials-card-header">
                <span className="badge-madras-gradient">IEEE Madras Section</span>
                <span className="badge-code-pill">STB29741</span>
              </div>

              <h3 className="credentials-card-title">KONGU ENGINEERING COLLEGE</h3>
              <p className="credentials-card-sub">IEEE Student Branch &bull; Perundurai, Erode</p>

              {/* 3 Impact Statistics */}
              <div className="about-stats-grid">
                <div className="about-stat-box stat-card-purple">
                  <div className="about-stat-number">400K+</div>
                  <div className="about-stat-label">Global Members</div>
                </div>

                <div className="about-stat-box stat-card-blue">
                  <div className="about-stat-number">160+</div>
                  <div className="about-stat-label">Countries</div>
                </div>

                <div className="about-stat-box stat-card-pink">
                  <div className="about-stat-number">1884</div>
                  <div className="about-stat-label">Legacy Year</div>
                </div>
              </div>

              <div className="credentials-card-footer">
                <img 
                  src="/assets/logos/ieee-master.svg" 
                  alt="IEEE Logo" 
                  className="credentials-ieee-logo"
                  width="90" 
                  height="34" 
                />
                <span className="credentials-footer-text">Advancing Technology for Humanity</span>
              </div>
            </div>
          </div>
        </div>

        {/* IEEE Heritage Timeline (1884 -> Today -> Tomorrow) */}
        <div id="timeline" className="timeline-container" aria-label="IEEE Day Heritage Timeline">
          <div className="timeline-header">
            <span className="timeline-eyebrow-gradient">HISTORIC EVOLUTION</span>
            <h3 className="timeline-title">The IEEE Legacy &bull; 1884 &rarr; Today &rarr; Tomorrow</h3>
            <p className="timeline-subtitle">From the foundations of electrical engineering to tomorrow's frontier technologies.</p>
          </div>

          {/* Timeline Track with Multi-Color Gradient Connector */}
          <div className="timeline-track">
            {/* Step 1: 1884 */}
            <div className="timeline-step">
              <div className="timeline-node node-purple">
                <span className="timeline-year">1884</span>
              </div>
              <div className="timeline-content">
                <h4 className="timeline-step-title">The Beginning</h4>
                <p className="timeline-step-desc">
                  Worldwide engineers first united in 1884 to share technical ideas, laying the bedrock for electrical and computer engineering.
                </p>
              </div>
            </div>

            {/* Connecting Line 1 */}
            <div className="timeline-connector connector-purple-blue" aria-hidden="true"></div>

            {/* Step 2: Today */}
            <div className="timeline-step">
              <div className="timeline-node node-active-gradient">
                <span className="timeline-year">Today</span>
              </div>
              <div className="timeline-content">
                <h4 className="timeline-step-title">The Global Community</h4>
                <p className="timeline-step-desc">
                  Over 400,000 members across 160+ nations advancing technology through research publications, standards, and student conferences.
                </p>
              </div>
            </div>

            {/* Connecting Line 2 */}
            <div className="timeline-connector connector-blue-pink" aria-hidden="true"></div>

            {/* Step 3: Tomorrow */}
            <div className="timeline-step">
              <div className="timeline-node node-pink">
                <span className="timeline-year">Tomorrow</span>
              </div>
              <div className="timeline-content">
                <h4 className="timeline-step-title">The Impact</h4>
                <p className="timeline-step-desc">
                  Empowering the next generation to pioneer AI, robotics, quantum tech, and renewable energy for a resilient global future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
