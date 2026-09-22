import React, { useEffect, useState } from 'react';

export default function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Lock scroll during splash screen
    document.body.style.overflow = 'hidden';

    // Begin smooth fade-out at 2.6 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2600);

    // Unmount splash screen at 3.0 seconds
    const finishTimer = setTimeout(() => {
      document.body.style.overflow = '';
      if (onFinish) onFinish();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = '';
    };
  }, [onFinish]);

  return (
    <div 
      id="splash-screen" 
      className={`splash-overlay ${fadeOut ? 'splash-fade-out' : ''}`}
      role="status"
      aria-label="Loading IEEE Day Celebration"
    >
      <div className="splash-content">
        {/* Official IEEE Day Image */}
        <div className="splash-image-wrapper">
          <div className="splash-image-glow" aria-hidden="true"></div>
          <img 
            src="/assets/ieee-day-splash.jpg" 
            alt="IEEE Day - Leveraging Technology for a Better Tomorrow" 
            className="splash-image"
            width="640"
            height="240"
          />
        </div>

        {/* Title Below Image as requested */}
        <h1 className="splash-title">IEEE DAY CELEBRATION</h1>
        <p className="splash-subtitle">KEC IEEE Student Branch</p>

        {/* 3-Second Animated Progress Bar */}
        <div className="splash-progress-track" aria-hidden="true">
          <div className="splash-progress-bar"></div>
        </div>
      </div>
    </div>
  );
}
