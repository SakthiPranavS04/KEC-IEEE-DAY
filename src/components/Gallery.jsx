import React, { useState } from 'react';

const galleryItems = [
  {
    id: 1,
    title: 'Hackathon Innovation',
    category: 'Events & Contests',
    tag: 'Hack Spark',
    image: '/assets/events/hack-spark.jpg',
    description: 'Participants transforming ideas into rapid prototypes under intense time constraints.'
  },
  {
    id: 2,
    title: 'Leadership & Mentorship',
    category: 'Team & Leadership',
    tag: 'Student Branch',
    image: '/assets/ambassador/ambassador.jpg',
    description: 'Guiding student engineers to build technical communities and explore international opportunities.'
  },
  {
    id: 3,
    title: 'Web Coding Sprint',
    category: 'Events & Contests',
    tag: 'Code-Relay',
    image: '/assets/events/code-relay.jpg',
    description: 'Web development challenges testing problem-solving, UI craft, and algorithm logic.'
  },
  {
    id: 4,
    title: 'Project Expo Demonstrations',
    category: 'Events & Contests',
    tag: 'Astra ’26',
    image: '/assets/events/astra.jpg',
    description: 'Showcasing real-world hardware prototypes, antenna simulations, and embedded systems.'
  },
  {
    id: 5,
    title: 'Community Collaboration',
    category: 'Team & Leadership',
    tag: 'Delegates',
    image: '/assets/ambassador/ambassador-2.jpg',
    description: 'Cross-departmental teams bonding over shared passions for science, math, and engineering.'
  },
  {
    id: 6,
    title: 'Circuit Debugging Challenge',
    category: 'Workshops',
    tag: 'Circuit Quest',
    image: '/assets/events/circuit-quest.jpg',
    description: 'Hands-on troubleshooting, circuit theory analysis, and power electronics debugging.'
  },
  {
    id: 7,
    title: 'Technical Paper Presentation',
    category: 'Workshops',
    tag: 'Paper Pixel',
    image: '/assets/events/paper-pixel.jpg',
    description: 'Scholarly presentations by student researchers celebrating scientific discovery.'
  },
  {
    id: 8,
    title: 'Annual IEEE Day Celebration',
    category: 'Team & Leadership',
    tag: 'Celebration',
    image: '/assets/ambassador/ambassador-3.jpg',
    description: 'Celebrating 25 years of engineering excellence and student leadership at KEC IEEE.'
  }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const categories = ['All', 'Events & Contests', 'Team & Leadership', 'Workshops'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="gallery-section" aria-label="Moments from IEEE Day">
      {/* Background Soft Glows */}
      <div className="gallery-bg-glows" aria-hidden="true">
        <div className="gallery-glow-purple"></div>
        <div className="gallery-glow-cyan"></div>
        <div className="gallery-glow-pink"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-tag-gradient">PHOTO SHOWCASE</span>
          <h2 className="section-title">
            Moments from <span className="gradient-text-purple-pink">IEEE Day</span>
          </h2>
          <p className="section-subtitle">
            Capturing the energy, innovation, and leadership of our students, events, and workshops across Kongu Engineering College.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="gallery-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`gallery-filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="gallery-card"
              onClick={() => setActiveModalItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setActiveModalItem(item); }}
              aria-label={`View photo: ${item.title}`}
            >
              <div className="gallery-image-frame">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-image-overlay">
                  <div className="gallery-overlay-badge">{item.tag}</div>
                  <h3 className="gallery-overlay-title">{item.title}</h3>
                  <p className="gallery-overlay-desc">{item.description}</p>
                  <span className="gallery-overlay-prompt">Click to zoom &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      {activeModalItem && (
        <div 
          className="gallery-lightbox-backdrop" 
          onClick={() => setActiveModalItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="gallery-lightbox-close"
              onClick={() => setActiveModalItem(null)}
              aria-label="Close photo preview"
            >
              &times;
            </button>
            <div className="gallery-lightbox-image-wrap">
              <img 
                src={activeModalItem.image} 
                alt={activeModalItem.title} 
                className="gallery-lightbox-img" 
              />
            </div>
            <div className="gallery-lightbox-info">
              <span className="gallery-lightbox-tag">{activeModalItem.tag}</span>
              <h3>{activeModalItem.title}</h3>
              <p>{activeModalItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
