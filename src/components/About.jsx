import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Punchy, Visual Highlights */}
          <div className="about-left">
            <span className="section-tag section-tag-cyan">Global Heritage</span>
            <h2 className="about-title">
              What is <span className="gradient-text-blue">IEEE Day?</span>
            </h2>

            <p className="about-punchy-lead">
              Commemorating 1884 when worldwide engineers first united to share technical ideas and advance technology for humanity.
            </p>

            {/* 3 Colorful Feature Cards instead of long paragraphs */}
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

          {/* Right Column: Colorful IEEE Stat Card */}
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
      </div>
    </section>
  );
}
