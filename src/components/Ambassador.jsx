import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ambassadorsData } from '../data/ambassador.js';

export default function Ambassador() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smoothly scroll to a specific card index (one card at a time)
  const scrollToIndex = useCallback((index) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cards = container.querySelectorAll('.ambassador-card-spacious');
    if (cards[index]) {
      const card = cards[index];
      container.scrollTo({
        left: card.offsetLeft,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  }, []);

  const handlePrev = () => {
    const nextIdx = (activeIndex - 1 + ambassadorsData.length) % ambassadorsData.length;
    scrollToIndex(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % ambassadorsData.length;
    scrollToIndex(nextIdx);
  };

  // Sync active index when user scrolls or swipes
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.clientWidth;
    if (cardWidth > 0) {
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(0, index), ambassadorsData.length - 1));
    }
  };

  // Auto-move every 3 seconds (3000ms), pausing on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % ambassadorsData.length;
        scrollToIndex(next);
        return next;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, scrollToIndex]);

  return (
    <section id="ambassador" className="ambassador-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Meet Our <span className="gradient-text-rainbow">Ambassadors</span>
          </h2>
          <p className="section-subtitle">
            Empowering students to connect, innovate, and lead in the global IEEE ecosystem.
          </p>
        </div>

        {/* Single Featured Card Horizontal Slider */}
        <div 
          className="ambassadors-slider-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Track */}
          <div 
            ref={sliderRef}
            className="ambassadors-slider-track"
            onScroll={handleScroll}
            tabIndex="0"
            aria-label="Ambassadors showcase slider"
          >
            {ambassadorsData.map((ambassador, index) => (
              <div 
                key={ambassador.id} 
                className={`ambassador-card-spacious ${activeIndex === index ? 'ambassador-card-active' : ''}`}
              >
                {/* Top Accent Gradient Bar */}
                <div className="ambassador-card-bar" aria-hidden="true"></div>

                {/* Ambassador Photo Column */}
                <div className="ambassador-image-container">
                  <div className="ambassador-photo-glow" aria-hidden="true"></div>
                  <img 
                    src={ambassador.photo} 
                    alt={ambassador.name} 
                    className="ambassador-photo"
                    width="230"
                    height="230"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/ambassador/ambassador.jpg';
                    }}
                  />
                  <span className="ambassador-badge-tag">{ambassador.badge}</span>
                </div>

                {/* Ambassador Details Column */}
                <div className="ambassador-content">
                  <div className="ambassador-tagline">{ambassador.tagline}</div>
                  <h3 className="ambassador-name">{ambassador.name}</h3>
                  <div className="ambassador-designation">{ambassador.role}</div>
                  <div className="ambassador-org">
                    {ambassador.department} &bull; {ambassador.college}
                  </div>

                  <blockquote className="ambassador-quote">
                    &ldquo;{ambassador.quote}&rdquo;
                  </blockquote>

                  {/* Focus Area Tags */}
                  {ambassador.tags && (
                    <div className="ambassador-card-tags">
                      {ambassador.tags.map((tag, idx) => (
                        <span key={idx} className="ambassador-tag-chip">{tag}</span>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>

          {/* Slider Navigation & Pagination */}
          <div className="ambassador-slider-controls">
            <button 
              type="button" 
              className="ambassador-nav-btn ambassador-prev-btn"
              onClick={handlePrev}
              aria-label="Previous ambassador card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="ambassador-dots" role="tablist" aria-label="Ambassador slider navigation">
              {ambassadorsData.map((ambassador, idx) => (
                <button
                  key={ambassador.id}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === idx}
                  aria-label={`Go to ${ambassador.name}`}
                  className={`ambassador-dot ${activeIndex === idx ? 'active' : ''}`}
                  onClick={() => scrollToIndex(idx)}
                />
              ))}
            </div>

            <button 
              type="button" 
              className="ambassador-nav-btn ambassador-next-btn"
              onClick={handleNext}
              aria-label="Next ambassador card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
