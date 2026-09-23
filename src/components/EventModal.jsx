import React, { useEffect } from 'react';

export default function EventModal({ event, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Lock body scroll while modal is open
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!event) return null;

  return (
    <div 
      className="event-modal-backdrop" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modal-event-title"
    >
      <div 
        className="event-modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{
          '--modal-accent': event.accentColor,
          '--modal-glow': event.glowColor
        }}
      >
        {/* Close Button */}
        <button 
          className="event-modal-close-btn" 
          onClick={onClose} 
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="event-modal-grid">
          {/* Left Column: Full Event Poster */}
          <div className="event-modal-poster-col">
            <div className="event-modal-poster-frame">
              <img 
                src={event.poster} 
                alt={`${event.title} Official Poster`} 
                className="event-modal-poster-img"
              />
              <div className="event-modal-poster-badge">IEEE DAY ’26</div>
            </div>
          </div>

          {/* Right Column: Event Details & Specifications */}
          <div className="event-modal-info-col">
            {/* Top Badges */}
            <div className="event-modal-badges">
              <span className="event-modal-category-tag">{event.category}</span>
              <span className="event-modal-type-tag">{event.type}</span>
              <span className="event-modal-free-badge">FREE ENTRY</span>
            </div>

            {/* Event Title */}
            <h2 id="modal-event-title" className="event-modal-title">{event.title}</h2>
            
            {/* Society Organizer */}
            <p className="event-modal-society">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>{event.fullSociety || event.society}</span>
            </p>

            {/* Description */}
            <div className="event-modal-desc-box">
              <h3 className="event-modal-section-label">About the Event</h3>
              <p className="event-modal-description">{event.description}</p>
            </div>

            {/* Event Key Highlights / Perks */}
            <div className="event-modal-perks">
              <div className="event-modal-perk-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>E-Certificates will be provided</span>
              </div>
              <div className="event-modal-perk-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>Limited spots available</span>
              </div>
              <div className="event-modal-perk-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>100% Free Registration</span>
              </div>
            </div>

            {/* Date & Venue Box */}
            <div className="event-modal-meta-grid">
              <div className="event-modal-meta-box">
                <div className="event-modal-meta-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <span className="event-modal-meta-label">Date</span>
                  <strong className="event-modal-meta-val">{event.date}</strong>
                </div>
              </div>

              <div className="event-modal-meta-box">
                <div className="event-modal-meta-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className="event-modal-meta-label">Venue</span>
                  <strong className="event-modal-meta-val">{event.venue}</strong>
                </div>
              </div>
            </div>

            {/* Contact Persons */}
            {event.contacts && event.contacts.length > 0 && (
              <div className="event-modal-contacts-section">
                <h3 className="event-modal-section-label">For Further Queries / Coordinators</h3>
                <div className="event-modal-contacts-list">
                  {event.contacts.map((contact, idx) => (
                    <div key={idx} className="event-modal-contact-item">
                      <span className="contact-name">{contact.name}</span>
                      <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="contact-phone">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span>{contact.phone}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom Action Bar with Register Now Button */}
            <div className="event-modal-action-bar">
              <button 
                type="button" 
                className="btn-modal-close" 
                onClick={onClose}
              >
                Close
              </button>

              {event.formUrl ? (
                <a 
                  href={event.formUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-modal-register"
                  id={`modal-register-btn-${event.id}`}
                >
                  <span>REGISTER NOW</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              ) : (
                <span className="modal-coming-soon-note">Registration Opening Soon</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
