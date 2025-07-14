import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const heroRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const phoneRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const hero = heroRef.current;
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Phone tilt effect
  const handleMouseMove = (e) => {
    const rect = phoneRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxTilt = 18;
    const tiltX = ((y - centerY) / centerY) * maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;
    setTilt({ x: tiltX, y: tiltY });
  };
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        
        <div className="container">
          <motion.div 
            className="hero-content"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
              className="display-1 gradient-text tracking-tighter"
              variants={fadeInUp}
            >
              Aurameter
            </motion.h1>
            
            <motion.h2 
              className="text-2xl font-light text-gray-300 tracking-wide mb-8"
              variants={fadeInUp}
            >
              AI-Powered Social Energy
            </motion.h2>
            
            <motion.p 
              className="text-body-large text-gray-300 max-w-2xl mb-10"
              variants={fadeInUp}
            >
              Discover your digital aura, connect with like-minded souls, and grow your energy through mindful interactions. 
              The future of social media is here.
            </motion.p>
            
            <motion.div 
              className="hero-cta"
              variants={fadeInUp}
            >
              <Link to="/check-aura" className="cta-button primary">
                <span>Check Your Aura</span>
                <div className="button-glow"></div>
              </Link>
              <Link to="/about" className="cta-button secondary">
                Learn More
              </Link>
            </motion.div>
            <div className="store-buttons">
              <a href="https://play.google.com/store/apps/details?id=com.aurameter&hl=en-US&ah=hfOFMAA1mXM1nhLz8BMXeNm1GwQ&pli=1" target="_blank" rel="noopener noreferrer" className="store-btn playstore-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="store-badge" />
              </a>
              <a href="https://apps.apple.com/app/aurameter/id6747919099" target="_blank" rel="noopener noreferrer" className="store-btn appstore-btn">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="store-badge" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="phone-aura-glow"></div>
            <div className="phone-sparkles">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`sparkle sparkle-${i+1}`}></div>
              ))}
            </div>
            <div
              className="phone-mockup"
              ref={phoneRef}
              style={{
                transform: `rotateX(${-tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.2s cubic-bezier(.25,.46,.45,.94)',
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="phone-frame">
                {/* Camera Notch */}
                <div className="camera-notch"></div>
                <div className="phone-screen">
                  <div className="app-interface">
                    <div className="app-header">
                      <div className="aura-icon">💜</div>
                      <div className="app-name">Aurameter</div>
                    </div>
                    <div className="aura-display">
                      <div className="aura-circle">
                        <div className="aura-glow"></div>
                        <span className="aura-score">847</span>
                      </div>
                      <div className="aura-label">Your Aura Score</div>
                    </div>
                    {!isMobile && (
                      <div className="app-stats">
                        <div className="stat-cards">
                          <div className="stat-card">
                            <span className="stat-number">23</span>
                            <span className="stat-label">Connections</span>
                          </div>
                          <div className="stat-card">
                            <span className="stat-number">156</span>
                            <span className="stat-label">Aura Points</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="phone-reflection"></div>
              </div>
            </div>
          </motion.div>
          {isMobile && (
            <div className="app-stats">
              <div className="stat-cards">
                <div className="stat-card">
                  <span className="stat-number">23</span>
                  <span className="stat-label">Connections</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">156</span>
                  <span className="stat-label">Aura Points</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.div 
            className="section-header text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="display-3 mb-6">Why Choose Aurameter?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Experience social media reimagined for the conscious generation</p>
          </motion.div>

          <div className="features-grid">
            {[
              {
                icon: "🔮",
                title: "AI Aura Analysis",
                description: "Upload photos and get instant insights into your energy field and personality traits"
              },
              {
                icon: "⚡",
                title: "Energy Points System",
                description: "Earn points through positive interactions and mindful engagement"
              },
              {
                icon: "💫",
                title: "Soul Connections",
                description: "Connect with people who share your energy frequency and values"
              },
              {
                icon: "🛡️",
                title: "Privacy First",
                description: "End-to-end encryption and complete control over your personal data"
              },
              {
                icon: "🎮",
                title: "Gamified Growth",
                description: "Level up your aura through meaningful interactions and self-improvement"
              },
              {
                icon: "🌱",
                title: "Mindful Community",
                description: "Join a community focused on personal growth and positive energy"
              },
              {
                icon: "🕵️‍♂️",
                title: "Real-Time Moderation",
                description: "AI-powered moderation keeps the community safe and positive in real time."
              },
              {
                icon: "🎨",
                title: "Customizable Profiles",
                description: "Express yourself with unique profile themes, avatars, and aura displays."
              },
            
              {
                icon: "🔗",
                title: "Daily Vibe Challenges",
                description: "Engage in fun, reflective challenges that boost your vibe and unlock bonus AuraPoints"
              }
              
              
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="feature-icon text-4xl mb-4">{feature.icon}</div>
                <h3 className="h4 mb-3">{feature.title}</h3>
                <p className="text-body text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">Ready to Discover Your Aura?</h2>
            <p className="cta-description">
              Join thousands of mindful users who are already experiencing the future of social connection
            </p>
            <div className="cta-buttons">
              <Link to="/check-aura" className="cta-button primary large">
                <span>Start Your Journey</span>
                <div className="button-glow"></div>
              </Link>
              <Link to="/supporters" className="cta-button secondary large">
                Meet Our Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 