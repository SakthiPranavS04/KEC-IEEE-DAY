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
      className={`splash-fullscreen-viewport ${fadeOut ? 'splash-fade-out' : ''}`}
      role="status"
      aria-label="Loading IEEE Day Celebration"
    >
      {/* 1. Full-screen Edge-to-Edge Image (No Card, No Borders, Zero Pixel Drop) */}
      <img 
        src="/assets/ieee-day-splash-fullscreen.jpg" 
        alt="IEEE Day - Leveraging Technology for a Better Tomorrow" 
        className="splash-fullscreen-wallpaper"
        width="1376"
        height="768"
      />

      {/* 2. Seamless gradient scrim at bottom to ensure text and progress bar pop */}
      <div className="splash-bottom-scrim" aria-hidden="true"></div>

      {/* 3. Title & 3-Second Loading Bar (Directly on screen, No Card Frame) */}
      <div className="splash-bottom-bar">
        <h1 className="splash-hero-title">IEEE DAY CELEBRATION</h1>
        <p className="splash-hero-subtitle">KEC IEEE Student Branch</p>

        {/* 3-Second Progress Bar */}
        <div className="splash-progress-track" aria-hidden="true">
          <div className="splash-progress-bar"></div>
        </div>
      </div>
    </div>
  );
}
