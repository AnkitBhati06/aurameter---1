import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CheckAura from './components/CheckAura';
import Supporters from './components/Supporters';
import About from './components/About';
import Privacy from './components/Privacy';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommunityGuidelines from './components/CommunityGuidelines';
import ChildSafety from './components/ChildSafety';

// Marquee Ticker Component
const MarqueeBar = () => (
  <div className="footer-marquee">
    <div className="footer-marquee__inner">
      Aurameter: World's First AI-Driven Gamified Social Media
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/check-aura" element={<CheckAura />} />
        <Route path="/supporters" element={<Supporters />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/community-guidelines" element={<CommunityGuidelines />} />
        <Route path="/child-safety" element={<ChildSafety />} />
      </Routes>
      <MarqueeBar />
      <Footer />
    </div>
  );
}

export default App; 