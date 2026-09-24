import React from 'react';

export default function EventCard({ event, onSelect }) {
  return (
    <article 
      className={`ticket-pass-card ticket-theme-${event.theme}`}
      id={`card-${event.id}`}
      style={{
        '--card-accent': event.accentColor,
        '--card-glow': event.glowColor,
        '--card-gradient': event.gradient
      }}
    >
      {/* Top Holographic / Color Glow Border */}
      <div className="ticket-pass-glow-bar" aria-hidden="true"></div>

      {/* Ticket Pass Header / Poster Zone (approx 55-60% height) */}
      <div className="ticket-pass-poster-zone">
        {/* Floating Top Badge */}
        <div className="ticket-pass-top-badge">
          <span className="badge-pulse-dot" aria-hidden="true"></span>
          IEEE DAY ’26
        </div>

        {/* Poster Wrapper with Aspect Ratio Preservation */}
        <div className="ticket-pass-poster-frame">
          <img 
            src={event.poster} 
            alt={`${event.title} Official Poster`} 
            className="ticket-pass-poster-img"
            loading="lazy"
          />
          <div className="ticket-pass-poster-overlay" aria-hidden="true"></div>
        </div>
      </div>

      {/* Perforated Ticket Stub Divider with Cutout Notches */}
      <div className="ticket-pass-divider" aria-hidden="true">
        <span className="ticket-notch ticket-notch-left"></span>
        <span className="ticket-dashed-line"></span>
        <span className="ticket-notch ticket-notch-right"></span>
      </div>

      {/* Ticket Pass Lower Body */}
      <div className="ticket-pass-body">
        {/* Badges Row: Category & Free Entry */}
        <div className="ticket-pass-badge-row">
          <span className="ticket-category-tag">{event.category}</span>
          <span className="ticket-free-badge">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            FREE ENTRY
          </span>
        </div>

        {/* Event Title */}
        <h3 className="ticket-pass-title">{event.title}</h3>

        {/* Society Line */}
        <p className="ticket-pass-society">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <span>{event.society}</span>
        </p>

        {/* Event Meta Row (Date & Venue) */}
        <div className="ticket-pass-meta-row">
          <div className="ticket-meta-block ticket-meta-date">
            <span className="ticket-meta-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </span>
            <span className="ticket-meta-text">{event.shortDate || "28 SEP 2026"}</span>
          </div>
          <div className="ticket-meta-block ticket-meta-venue" title={event.venue}>
            <span className="ticket-meta-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>
            <span className="ticket-meta-text">{event.venue}</span>
          </div>
        </div>

        {/* Action Row: View Event Details & Direct Register Button */}
        <div className="ticket-pass-action-row">
          <button
            type="button"
            onClick={() => onSelect && onSelect(event)}
            className="btn-ticket-view"
            aria-label={`View details for ${event.title}`}
          >
            <span>VIEW EVENT</span>
            <span className="btn-arrow" aria-hidden="true">→</span>
          </button>

          {event.formUrl && (
            <a
              href={event.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ticket-register-quick"
              title={`Register directly for ${event.title}`}
              aria-label={`Register for ${event.title}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span>REGISTER</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
