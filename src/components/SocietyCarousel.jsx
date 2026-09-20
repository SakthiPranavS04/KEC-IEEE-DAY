import React from 'react';
import { societyLogos } from '../data/societies.js';

export default function SocietyCarousel() {
  // Duplicate array for continuous seamless infinite CSS scrolling
  const duplicatedSocieties = [...societyLogos, ...societyLogos];

  return (
    <div className="carousel-outer-wrapper" aria-label="IEEE Societies Rolling Carousel">
      <div className="carousel-track">
        {duplicatedSocieties.map((society, index) => (
          <a
            key={`${society.id}-${index}`}
            href={society.website}
            target="_blank"
            rel="noopener noreferrer"
            className="society-carousel-item"
            title={`Visit ${society.name} official site`}
            aria-label={`${society.name} website (opens in new tab)`}
          >
            <div className="society-logo-wrapper">
              <img
                src={society.logo}
                alt={`${society.name} Official Logo`}
                className="society-logo-img"
                loading="lazy"
              />
            </div>
            <span className="society-badge">{society.shortName}</span>
            <div className="society-name-title">{society.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
