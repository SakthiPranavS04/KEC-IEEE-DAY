import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Heading & Pillars */}
          <div className="about-left">
            <span className="section-tag section-tag-blue">GLOBAL HERITAGE</span>
            <h2 className="about-title">
              A Global Celebration of <span className="gradient-text-blue">People, Ideas &amp; Technology</span>
            </h2>

            <p className="about-punchy-lead">
              What is IEEE Day? Commemorating 1884 when worldwide engineers first united to share technical ideas and advance technology for humanity.
            </p>

            {/* 3 Elevated Feature Cards */}
            <div className="about-quick-cards">
              <div className="quick-card quick-card-cyan">
                <div className="quick-card-icon">🚀</div>
                <div>
                  <h4>Innovation</h4>
                  <p>Fostering cutting-edge research, design sprints, and real-world breakthroughs.</p>
                </div>
              </div>

              <div className="quick-card quick-card-purple">
                <div className="quick-card-icon">🤝</div>
                <div>
                  <h4>Collaboration</h4>
                  <p>Uniting students, faculty, and industry pioneers worldwide.</p>
                </div>
              </div>

              <div className="quick-card quick-card-emerald">
                <div className="quick-card-icon">💡</div>
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
                <div className="about-stat-box stat-gradient-cyan">
                  <div className="about-stat-number">400K+</div>
                  <div className="about-stat-label">Global Members</div>
                </div>

                <div className="about-stat-box stat-gradient-amber">
                  <div className="about-stat-number">160+</div>
                  <div className="about-stat-label">Countries</div>
                </div>

                <div className="about-stat-box stat-gradient-emerald">
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

        {/* IEEE Heritage Timeline (1884 -> Today -> Tomorrow) */}
        <div className="timeline-container" aria-label="IEEE Day Heritage Timeline">
          <div className="timeline-header">
            <span className="timeline-eyebrow">HISTORIC EVOLUTION</span>
            <h3 className="timeline-title">The IEEE Legacy &bull; Then, Now &amp; Next</h3>
          </div>

          <div className="timeline-track">
            {/* Step 1: 1884 */}
            <div className="timeline-step">
              <div className="timeline-node">
                <span className="timeline-year">1884</span>
              </div>
              <div className="timeline-content">
                <h4 className="timeline-step-title">The Beginning</h4>
                <p className="timeline-step-desc">
                  Worldwide engineers first united to share technical ideas, forming the roots of modern electrical &amp; electronics engineering.
                </p>
              </div>
            </div>

            {/* Connecting Bar */}
            <div className="timeline-connector" aria-hidden="true"></div>

            {/* Step 2: Today */}
            <div className="timeline-step">
              <div className="timeline-node timeline-node-active">
                <span className="timeline-year">Today</span>
              </div>
              <div className="timeline-content">
                <h4 className="timeline-step-title">The Global Community</h4>
                <p className="timeline-step-desc">
                  Over 400,000 members across 160+ countries advancing humanity through thousands of student branches and societies.
                </p>
              </div>
            </div>

            {/* Connecting Bar */}
            <div className="timeline-connector" aria-hidden="true"></div>

            {/* Step 3: Tomorrow */}
            <div className="timeline-step">
              <div className="timeline-node">
                <span className="timeline-year">Tomorrow</span>
              </div>
              <div className="timeline-content">
                <h4 className="timeline-step-title">The Impact</h4>
                <p className="timeline-step-desc">
                  Empowering the next generation to pioneer AI, robotics, renewable energy, and ethical technologies for a better world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
