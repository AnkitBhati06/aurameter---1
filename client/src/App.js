import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CheckAura from './components/CheckAura';
import Supporters from './components/Supporters';
import About from './components/About';
import Privacy from './components/Privacy';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 