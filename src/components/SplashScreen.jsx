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
      className={`splash-fullscreen-stage ${fadeOut ? 'splash-fade-out' : ''}`}
      role="status"
      aria-label="Loading IEEE Day Celebration"
    >
      {/* 1. Full-screen ambient atmospheric layer filling entire 100vw x 100vh */}
      <img 
        src="/assets/ieee-day-splash-hd.png" 
        alt="" 
        className="splash-ambient-bg" 
        aria-hidden="true" 
      />

      {/* 2. Soft radial lighting scrim */}
      <div className="splash-stage-scrim" aria-hidden="true"></div>

      {/* 3. Main Center Stage (Banner + Title + Loader) */}
      <div className="splash-stage-wrapper">
        {/* Crisp, Full-Width, Unbroken 3K High-Definition Banner */}
        <div className="splash-banner-box">
          <img 
            src="/assets/ieee-day-splash-hd.png" 
            alt="IEEE Day - Leveraging Technology for a Better Tomorrow" 
            className="splash-banner-sharp"
            width="3072"
            height="768"
          />
        </div>

        {/* Title Below Image */}
        <div className="splash-text-group">
          <h1 className="splash-fullscreen-title">IEEE DAY CELEBRATION</h1>
          <p className="splash-fullscreen-subtitle">KEC IEEE Student Branch</p>

          {/* 3-Second Visual Progress Indicator */}
          <div className="splash-progress-track" aria-hidden="true">
            <div className="splash-progress-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
