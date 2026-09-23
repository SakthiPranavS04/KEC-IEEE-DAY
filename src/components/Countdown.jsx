import React, { useState, useEffect } from 'react';

/**
 * Countdown Component
 * Displays live countdown to 06 October 2026 for the IEEE Day Celebration.
 * Styled in dark translucent blue conference cards with subtle glow.
 */
export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: September 28, 2026, 09:00:00 AM IST
    const targetDate = new Date('2026-09-28T09:00:00').getTime();

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
      <div className="container">
        <div className="countdown-wrapper">
          {/* Header Message */}
          <div className="countdown-header">
            <h2 className="countdown-title">The Celebration Begins Soon</h2>
            <p className="countdown-subtitle">
              Join thousands of engineers, researchers, and innovators celebrating IEEE Day worldwide on <strong>28 September 2026 at 9:00 AM</strong>.
            </p>
          </div>

          {/* Countdown Grid (Days, Hours, Minutes, Seconds) */}
          <div className="countdown-grid">
            <div className="countdown-card">
              <div className="countdown-number">{formatNumber(timeLeft.days)}</div>
              <div className="countdown-label">DAYS</div>
              <div className="countdown-card-glow" aria-hidden="true"></div>
            </div>

            <div className="countdown-card">
              <div className="countdown-number">{formatNumber(timeLeft.hours)}</div>
              <div className="countdown-label">HOURS</div>
              <div className="countdown-card-glow" aria-hidden="true"></div>
            </div>

            <div className="countdown-card">
              <div className="countdown-number">{formatNumber(timeLeft.minutes)}</div>
              <div className="countdown-label">MINUTES</div>
              <div className="countdown-card-glow" aria-hidden="true"></div>
            </div>

            <div className="countdown-card">
              <div className="countdown-number">{formatNumber(timeLeft.seconds)}</div>
              <div className="countdown-label">SECONDS</div>
              <div className="countdown-card-glow" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
