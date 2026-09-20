import React from 'react';
import EventCard from './EventCard.jsx';
import { events } from '../data/events.js';

export default function Events() {
  const firstSixEvents = events.slice(0, 6);
  const seventhEvent = events[6];

  return (
    <section id="events" className="events-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Celebration Lineup</span>
          <h2 className="section-title">Events</h2>
          <p className="section-subtitle">
            Explore our exciting events and be part of the IEEE Day celebration.
          </p>
        </div>

        {/* 3 + 3 + 1 Responsive Event Cards Grid */}
        <div className="events-grid">
          {firstSixEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}

          {/* 7th Event Card: Centered on Desktop (3+3+1 requirement) */}
          {seventhEvent && (
            <div className="events-card-wrapper-featured">
              <EventCard event={seventhEvent} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
