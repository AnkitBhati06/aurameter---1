import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './LandingPage.css';

const LandingPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ threshold: 0.1 });
  const scrollRef = useRef(null);
  const phoneRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.parallax-bg');
      if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (phoneRef.current) {
        const rect = phoneRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setMousePosition({ x, y });
      }
    };

    const phone = phoneRef.current;
    if (phone) {
      phone.addEventListener('mousemove', handleMouseMove);
      return () => phone.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const scrollToContent = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page">
      {/* Parallax Background */}
      <div className="parallax-bg">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badges">
                <span className="badge">✨</span>
                <span className="badge">🔮</span>
                <span className="badge">✨</span>
                <span className="badge">🔮</span>
              </div>
              
              <h1 className={`hero-title ${heroInView ? 'fade-in-up' : ''}`}>
                Aura's<br />
                <span className="gradient-text">Social Media</span>
              </h1>
              
              <p className={`hero-subtitle ${heroInView ? 'fade-in-up' : ''}`}>
                Built for Energy. Powered by Presence.
              </p>
              
              <div className={`hero-buttons ${heroInView ? 'fade-in-up' : ''}`}>
                <Link to="/check-aura" className="btn-primary">
                  Join the Beta
                </Link>
                <button onClick={scrollToContent} className="btn-secondary">
                  Learn More
                </button>
              </div>
            </div>

            {/* 3D Mobile UI Mockup */}
            <div className={`mobile-mockup ${heroInView ? 'fade-in-up' : ''}`}>
              <div className="phone-3d-container" ref={phoneRef}>
                {/* Phone Shadow */}
                <div className="phone-shadow"></div>
                
                {/* Phone Frame */}
                <div className="phone-frame-3d">
                  {/* Phone Body */}
                  <div className="phone-body">
                    {/* Top Speaker */}
                    <div className="phone-speaker"></div>
                    
                    {/* Screen */}
                    <div className="phone-screen-3d">
                      <div className="app-header">
                        <div className="status-bar">
                          <span>9:41</span>
                          <div className="status-icons">
                            <span>📶</span>
                            <span>📶</span>
                            <span>🔋</span>
                          </div>
                        </div>
                        <div className="app-title">
                          <span className="gradient-text">✨ Aurameter</span>
                        </div>
                      </div>
                      
                      <div className="story-post">
                        <div className="post-header">
                          <div className="avatar">👤</div>
                          <div className="post-info">
                            <div className="username">Avatar</div>
                            <div className="location">India • 1h ago</div>
                          </div>
                        </div>
                        <div className="post-content">
                          <div className="music-cover">
                            <span>🎵</span>
                            <div className="music-info">
                              <div className="song-title">Music Cover</div>
                              <div className="artist">Pixies ▶️</div>
                            </div>
                          </div>
                        </div>
                        <div className="post-actions">
                          <span>💜</span>
                          <span>💬</span>
                          <span>📤</span>
                        </div>
                      </div>

                      <div className="bottom-nav">
                        <span>🏠</span>
                        <span>🔔</span>
                        <span>🔍</span>
                        <span>💬</span>
                        <span>👤</span>
                      </div>
                    </div>
                    
                    {/* Home Button */}
                    <div className="phone-home-button"></div>
                  </div>
                  
                  {/* Phone Reflection */}
                  <div className="phone-reflection"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Aura App Section */}
      <section className="app-section" ref={scrollRef}>
        <div className="container">
          <div className="content-wrapper" ref={contentRef}>
            <div className={`section-header ${contentInView ? 'fade-in-up' : ''}`}>
              <h2>The Aura App</h2>
            </div>

            <div className="benefits-grid">
              <div className={`benefit-category ${contentInView ? 'fade-in-up' : ''}`}>
                <h3>ENERGY CREATOR BENEFITS</h3>
                <div className="benefit-items">
                  <div className="benefit-item">
                    <span className="benefit-icon">🌟</span>
                    <span>Visibility</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">💫</span>
                    <span>Empowerment</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">🤝</span>
                    <span>Connection</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">💰</span>
                    <span>Monetization</span>
                  </div>
                </div>
              </div>

              <div className={`benefit-category ${contentInView ? 'fade-in-up' : ''}`}>
                <h3>COMMUNITY BENEFITS</h3>
                <div className="benefit-items">
                  <div className="benefit-item">
                    <span className="benefit-icon">🔍</span>
                    <span>Discovery</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">💚</span>
                    <span>Connection</span>
                  </div>
                  <div className="benefit-item">
                    <span className="benefit-icon">🎯</span>
                    <span>Influence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Aura Beyond the Screen */}
      <section className="experience-section">
        <div className="container">
          <div className={`experience-content ${contentInView ? 'fade-in-up' : ''}`}>
            <h2>Experience Aura Beyond the Screen</h2>
            <p>Aurameter goes beyond digital engagement—we bring energy creators and communities together in real life.</p>
            
            <div className="experience-features">
              <div className="feature">
                <h3>Live Events,<br />Real Opportunities</h3>
                <p>We host in-person events featuring energy creators, giving them a platform to showcase their aura and connect with communities.</p>
              </div>
              
              <div className="feature">
                <h3>Direct Creator-Community Connections</h3>
                <p>Communities don't just observe, they meet, interact, and support their favorite energy creators in a way social media can't offer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Section */}
      <section className="empowering-section">
        <div className="container">
          <div className={`empowering-content ${contentInView ? 'fade-in-up' : ''}`}>
            <h2>Empowering Energy Creators to Thrive.</h2>
            <p>Build, connect, and monetize all in one place — on your terms.</p>
            <p>Whether you're a new or established energy creator, we provide the tools to engage with communities, earn from your aura, and grow a sustainable presence.</p>
            
            <div className="empowering-features">
              <div className="empowering-feature">
                <h3>Earn From Your Aura</h3>
                <p>Monetize directly through subscriptions, pay-per-view content, and ticketed live events—you keep 100% of your earnings.</p>
              </div>
              
              <div className="empowering-feature">
                <h3>Promote & Engage</h3>
                <p>Showcase your aura, content, and live events while building your ideal community.</p>
              </div>
              
              <div className="empowering-feature">
                <h3>Own Your Community Data</h3>
                <p>Gain insights into your top supporters, demographics, engagement, and more.</p>
              </div>
            </div>
            
            <div className="cta-buttons">
              <Link to="/check-aura" className="btn-primary">
                Join the Beta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section className="enhanced-section">
        <div className="container">
          <div className={`enhanced-content ${contentInView ? 'fade-in-up' : ''}`}>
            <h2>An Enhanced Community Experience</h2>
            <p>Aurameter puts you in control. Engage with your favorite energy creators, explore new talent, access exclusive content, and experience aura on your terms.</p>
            
            <div className="enhanced-features">
              <div className="enhanced-feature">
                <h3>Connect & Engage</h3>
                <p>Interact with energy creators and other community members through live streams, direct messaging, and creator-led communities.</p>
              </div>
              
              <div className="enhanced-feature">
                <h3>Curate Your Experience</h3>
                <p>You decide what to explore, discover, and engage with.</p>
                <div className="aura-types">
                  <span>Calm Energy</span>
                  <span>Creative Vibes</span>
                  <span>Positive Aura</span>
                  <span>Healing Presence</span>
                  <span>Joyful Energy</span>
                  <span>Mindful Connection</span>
                </div>
              </div>
              
              <div className="enhanced-feature">
                <h3>Unlock Exclusive Content</h3>
                <p>Be the first to experience original aura content, live events, and behind-the-scenes moments that you won't find anywhere else.</p>
              </div>
            </div>
            
            <div className="cta-buttons">
              <Link to="/check-aura" className="btn-primary">
                Join the Beta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="value-section">
        <div className="container">
          <div className={`value-content ${contentInView ? 'fade-in-up' : ''}`}>
            <h2>Value for Creators</h2>
            <p>Aurameter offers powerful membership options for energy creators. Start with the freemium plan to explore the platform and experience the value firsthand. When you're ready to level up, choose from upgraded plans designed to help you grow, engage, and monetize.</p>
            <p>Monetize through subscriptions, ticketed events, and pay-per-view content—keeping 100% of what you make on a platform designed exclusively for aura and energy.</p>
            
            <div className="cta-buttons">
              <Link to="/check-aura" className="btn-primary">
                Join the Beta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free for Community Section */}
      <section className="free-section">
        <div className="container">
          <div className={`free-content ${contentInView ? 'fade-in-up' : ''}`}>
            <h2>Free for Community</h2>
            <p>For community members, Aurameter is 100% free, giving you unlimited access to discover new creators, connect with your favorites, and experience aura in a whole new way.</p>
            <p>Engage directly with creators through live streams, exclusive content, and interactive communities—creating real connections beyond just observing.</p>
            
            <div className="cta-buttons">
              <Link to="/check-aura" className="btn-primary">
                Join the Beta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="different-section">
        <div className="container">
          <div className={`different-content ${contentInView ? 'fade-in-up' : ''}`}>
            <h2>What Makes Us Different</h2>
            <p>Other social media apps treat energy as just another piece of content, Aurameter treats it as an experience.</p>
            
            <div className="different-features">
              <div className="different-feature">
                <h3>Be more than a creator or community member</h3>
              </div>
              
              <div className="different-feature">
                <h3>Be an Owner.</h3>
                <p>We believe the future of aura should belong to the community that makes it thrive. By investing, you're not just supporting a platform, you're helping build the first-ever aura-centric social media.</p>
                <p>Limited Availability.<br />Minimum investment $200.</p>
                
                <div className="cta-buttons">
                  <Link to="/check-aura" className="btn-primary">
                    Join the Beta
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 