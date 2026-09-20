import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Events from './components/Events.jsx';
import Ambassador from './components/Ambassador.jsx';
import Societies from './components/Societies.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="app-container">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* Main Single-Page Continuous Content */}
      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About IEEE Day Section */}
        <About />

        {/* 4. Events Section (7 Cards) */}
        <Events />

        {/* 5. Meet Our Ambassador Section */}
        <Ambassador />

        {/* 6. Our Societies Section (7 Logos + Continuous Rolling Carousel) */}
        <Societies />
      </main>

      {/* 7. Footer / Contact Section */}
      <Footer />
    </div>
  );
}
