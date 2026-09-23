import React, { useState } from 'react';
import EventCard from './EventCard.jsx';
import EventModal from './EventModal.jsx';
import { events } from '../data/events.js';

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleOpenEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <section id="events" className="events-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Official <span className="gradient-text-rainbow">Events</span>
          </h2>
          <p className="section-subtitle">
            Explore our official IEEE Day ’26 events and be part of the celebration.
          </p>
        </div>

        {/* 7 Events Grid (Desktop: 3 per row, Tablet: 2 per row, Mobile: 1 per row) */}
        <div className="ticket-events-grid">
          {events.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              onSelect={handleOpenEvent} 
            />
          ))}
        </div>
      </div>

      {/* Lightweight Event Details Modal */}
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
}
