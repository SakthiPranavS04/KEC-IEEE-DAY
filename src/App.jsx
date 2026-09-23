import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen.jsx';
import GlobalNetworkCanvas from './components/GlobalNetworkCanvas.jsx';
import AnimatedShapes from './components/AnimatedShapes.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ReadyToJoin from './components/ReadyToJoin.jsx';
import Countdown from './components/Countdown.jsx';
import About from './components/About.jsx';
import Events from './components/Events.jsx';
import Ambassador from './components/Ambassador.jsx';
import Societies from './components/Societies.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="app-container">
      {/* Dynamic Global Digital Network Canvas Background */}
      <GlobalNetworkCanvas />

      {/* Colorful Gradient Theme + Floating Animated Shapes Background Layer */}
      <AnimatedShapes />

      {/* Futuristic Aurora Ambient Glow Mesh */}
      <div className="aurora-ambient-glow" aria-hidden="true"></div>

      {/* 3-Second Initial Welcome Splash Screen */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* Main Single-Page Continuous Content */}
      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Featured Call to Action Section */}
        <ReadyToJoin />

        {/* 4. Global Event Countdown Section */}
        <Countdown />

        {/* 5. About IEEE Day Section */}
        <About />

        {/* 6. Events Section (7 Cards - IEEE Day '26 Digital Pass Tickets) */}
        <Events />

        {/* 7. Meet Our Ambassador Section */}
        <Ambassador />

        {/* 8. Our Societies Section (7 Logos + Continuous Rolling Carousel) */}
        <Societies />
      </main>

      {/* 9. Footer / Contact Section */}
      <Footer />
    </div>
  );
}
