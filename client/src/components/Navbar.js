import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from './Group 14.png';
import Modal from './Modal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  // Add state for form validation
  const [authError, setAuthError] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showPasswordCriteria, setShowPasswordCriteria] = useState(false);

  // Email and password validation helpers
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const validatePassword = (password) => {
    return password.length >= 6 && /[A-Za-z]/.test(password) && /\d/.test(password);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    setAuthError("");
    setShowPasswordCriteria(false);
    if (!validateEmail(emailValue)) {
      setAuthError("Please enter a valid email address.");
      return;
    }
    if (!validatePassword(passwordValue)) {
      setAuthError("Password must be at least 6 characters, include a letter and a digit.");
      return;
    }
    // Success: close modal (or do real auth)
    setShowAuthModal(false);
    setEmailValue("");
    setPasswordValue("");
    setAuthError("");
    setHasSubmitted(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/check-aura', label: 'Check Aura' },
    { path: '/supporters', label: 'Supporters' },
    { path: '/about', label: 'About' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          {/* <span className="brand-text text-xl font-bold">✨ Aurameter</span> */}
          <img src={logo} alt="Aurameter Logo" className="brand-logo" />
          <span className="brand-text text-xl font-bold">Aurameter</span>
        </Link>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Small Login/Signup buttons */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginLeft: '1rem' }}>
          <button
            className="glassy-btn glassy-btn-secondary"
            style={{ padding: '4px 14px', fontSize: '0.95rem', borderRadius: '16px', height: '32px', lineHeight: '24px', background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.18)', boxShadow: '0 2px 12px 0 rgba(102,126,234,0.08)', backdropFilter: 'blur(12px) saturate(1.3)', color: '#fff', fontWeight: 500, transition: 'all 0.2s', letterSpacing: '0.02em' }}
            onClick={() => { setShowAuthModal(true); setIsLogin(true); }}
          >
            Login
          </button>
          <button
            className="glassy-btn glassy-btn-primary"
            style={{ padding: '4px 14px', fontSize: '0.95rem', borderRadius: '16px', height: '32px', lineHeight: '24px', background: 'linear-gradient(135deg, rgba(102,126,234,0.18) 0%, rgba(118,75,162,0.18) 100%)', border: '1.5px solid rgba(102,126,234,0.22)', boxShadow: '0 2px 16px 0 rgba(102,126,234,0.13)', backdropFilter: 'blur(14px) saturate(1.4)', color: '#fff', fontWeight: 600, transition: 'all 0.2s', letterSpacing: '0.02em' }}
            onClick={() => { setShowAuthModal(true); setIsLogin(false); }}
          >
            Sign Up
          </button>
        </div>

        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => {
            const newState = !isMobileMenuOpen;
            setIsMobileMenuOpen(newState);
            console.log('Mobile menu open:', newState);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Modal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)}>
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <h2 style={{ marginBottom: 8 }}>{isLogin ? 'Login' : 'Sign Up'}</h2>
            <button
              style={{ background: 'none', border: 'none', color: '#667eea', cursor: 'pointer', marginBottom: 16 }}
              onClick={() => setIsLogin((v) => !v)}
            >
              {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
            </button>
            {/* Email/password form with validation */}
            <form style={{ marginBottom: 16 }} onSubmit={handleAuthSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                style={{ width: '90%', padding: 10, marginBottom: 10, borderRadius: 8, border: '1px solid #333', background: '#181a2a', color: '#fff' }}
                autoComplete="email"
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                style={{ width: '90%', padding: 10, marginBottom: 10, borderRadius: 8, border: '1px solid #333', background: '#181a2a', color: '#fff' }}
                autoComplete={isLogin ? 'current-password' : 'new-password'}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                required
              />
              {hasSubmitted && authError && <div className="error-message" style={{ color: '#ff6b6b', fontSize: '0.78em', marginBottom: 3, fontWeight: 500, textAlign: 'center', width: '100%', margin: '0 auto 3px auto', background: 'none', border: 'none', padding: 0, opacity: 0.45 }}>at least 6 characters, include a letter and a digit.</div>}
              <button type="submit" className="btn-primary" style={{ width: '100%', marginBottom: 10 }}>
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>
            {/* Google login/signup button placeholder */}
            <div style={{ margin: '12px 0', color: '#aaa' }}>or</div>
            <button className="btn-secondary" style={{ width: '100%' }} disabled>
              Continue with Google
            </button>
          </div>
        </Modal>
      </div>
    </nav>
  );
};

export default Navbar; 