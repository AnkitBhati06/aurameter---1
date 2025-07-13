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
            <h3 className="footer-brand">✨ Aurameter</h3>
            <p>Your energy, your aura, your presence.</p>
            <div className="social-links">
              <a href="#" className="social-link">📱</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📸</a>
              <a href="#" className="social-link">💬</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>App Navigation</h4>
            <div className="footer-nav">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/check-aura" className="footer-link">Check Aura</Link>
              <Link to="/supporters" className="footer-link">Supporters</Link>
              <Link to="/about" className="footer-link">About</Link>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Actions</h4>
            <div className="footer-nav">
              <a href="#" className="footer-link">Join Beta</a>
              <a href="#" className="footer-link">Notify Me</a>
              <a href="#" className="footer-link">Search</a>
              <a href="#" className="footer-link">Chat</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <div className="footer-nav">
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Cookie Policy</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Aurameter. All rights reserved.</p>
          <p>Made with 💜 for mindful connections</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 