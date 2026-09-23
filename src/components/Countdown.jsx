import React, { useState, useEffect } from 'react';

/**
 * Countdown Component
 * Displays live countdown to 06 October 2026 for the IEEE Day Celebration.
 * Visually impressive gradient section (Purple → Blue → Cyan) with glassmorphism cards.
 */
export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: October 6, 2026, 09:00:00 AM IST
    const targetDate = new Date('2026-10-06T09:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <section id="countdown" className="countdown-section" aria-label="Conference Countdown">
      {/* Background Animated Gradient Mesh Glow */}
      <div className="countdown-bg-mesh" aria-hidden="true">
        <div className="countdown-orb-purple"></div>
        <div className="countdown-orb-blue"></div>
        <div className="countdown-orb-cyan"></div>
      </div>

      <div className="container">
        <div className="countdown-wrapper">
          {/* Header Message */}
          <div className="countdown-header">
            <span className="countdown-tag-glass">GLOBAL COUNTDOWN</span>
            <h2 className="countdown-title">THE CELEBRATION BEGINS IN</h2>
            <p className="countdown-subtitle">
              Join thousands of engineers, researchers, and innovators celebrating IEEE Day worldwide on <strong>06 October 2026</strong>.
            </p>
          </div>

          {/* Glassmorphism Countdown Cards Grid */}
          <div className="countdown-grid">
            <div className="countdown-card-glass">
              <div className="countdown-card-inner">
                <span className="countdown-number">{formatNumber(timeLeft.days)}</span>
                <span className="countdown-label">DAYS</span>
              </div>
              <div className="countdown-card-glow" aria-hidden="true"></div>
            </div>

            <div className="countdown-card-glass">
              <div className="countdown-card-inner">
                <span className="countdown-number">{formatNumber(timeLeft.hours)}</span>
                <span className="countdown-label">HOURS</span>
              </div>
              <div className="countdown-card-glow" aria-hidden="true"></div>
            </div>

            <div className="countdown-card-glass">
              <div className="countdown-card-inner">
                <span className="countdown-number">{formatNumber(timeLeft.minutes)}</span>
                <span className="countdown-label">MINUTES</span>
              </div>
              <div className="countdown-card-glow" aria-hidden="true"></div>
            </div>

            <div className="countdown-card-glass">
              <div className="countdown-card-inner">
                <span className="countdown-number">{formatNumber(timeLeft.seconds)}</span>
                <span className="countdown-label">SECONDS</span>
              </div>
              <div className="countdown-card-glow" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
