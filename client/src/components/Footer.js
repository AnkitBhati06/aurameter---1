import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand text-xl font-bold mb-3">✨ Aurameter</h3>
            <p className="text-body text-gray-300">Your energy, your aura, your presence.</p>
            <div className="social-links">
              <a href="#" className="social-link">📱</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📸</a>
              <a href="#" className="social-link">💬</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="h5 mb-3">App Navigation</h4>
            <div className="footer-nav">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/check-aura" className="footer-link">Check Aura</Link>
              <Link to="/supporters" className="footer-link">Supporters</Link>
              <Link to="/about" className="footer-link">About</Link>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="h5 mb-3">Quick Actions</h4>
            <div className="footer-nav">
              <a href="#" className="footer-link">Join Beta</a>
              <a href="#" className="footer-link">Notify Me</a>
              <a href="#" className="footer-link">Search</a>
              <a href="#" className="footer-link">Chat</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="h5 mb-3">Legal</h4>
            <div className="footer-nav">
              <Link to="/community-guidelines" className="footer-link">Community Guidelines</Link>
              <Link to="/child-safety" className="footer-link">Child Safety</Link>
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Cookie Policy</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="text-body text-gray-400">&copy; {currentYear} Aurameter. All rights reserved.</p>
          <p className="text-body text-gray-400">Made with 💜 for mindful connections</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 