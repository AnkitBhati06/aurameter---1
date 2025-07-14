import React from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div className="about-page">
      <div className="container">
        <div className="about-content" ref={ref}>
          <div className={`about-header text-center ${inView ? 'fade-in-up' : ''}`}>
            <h1 className="display-2 mb-6">About Aurameter</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Aurameter is a next-generation social platform designed to help you understand, grow, and share your digital presence in a more meaningful way.
            </p>
          </div>

          <div className="about-sections">
            <div className={`about-section ${inView ? 'fade-in-up' : ''}`}>
              <h2 className="display-3 mb-6">Our Mission</h2>
              <p className="text-body-large mb-4">
                We believe online communities should empower people to be authentic and connect with purpose. Aurameter is built to foster genuine relationships and personal growth, not just engagement metrics.
              </p>
              <p className="text-body-large">
                Our mission is to provide a platform where your digital interactions reflect your real values and help you build a positive, trusted network.
              </p>
            </div>

            <div className={`about-section ${inView ? 'fade-in-up' : ''}`}>
              <h2 className="display-3 mb-6">What Makes Us Different</h2>
              <p className="text-body-large mb-4">
                Unlike traditional social media, Aurameter uses advanced AI to help you understand your digital impact and connect with people who share your mindset. We focus on quality interactions, privacy, and transparency.
              </p>
              <p className="text-body-large">
                Our platform is designed for users who value authenticity, growth, and a supportive community.
              </p>
            </div>

            <div className={`about-section ${inView ? 'fade-in-up' : ''}`}>
              <h2 className="display-3 mb-6">How Aurameter Works</h2>
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-content">
                    <h4 className="h5 mb-2">Share Your Energy</h4>
                    <p className="text-body text-gray-300">Upload photos and content that reflect your current mood and personality.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-content">
                    <h4 className="h5 mb-2">AI Insights</h4>
                    <p className="text-body text-gray-300">Get actionable feedback and insights about your digital presence, powered by AI.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-content">
                    <h4 className="h5 mb-2">Earn Recognition</h4>
                    <p className="text-body text-gray-300">Receive points and badges for positive, constructive engagement.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-content">
                    <h4 className="h5 mb-2">Build Real Connections</h4>
                    <p className="text-body text-gray-300">Connect with people who share your values and interests.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-content">
                    <h4 className="h5 mb-2">Customizable Profiles</h4>
                    <p className="text-body text-gray-300">Express yourself with unique profile themes, avatars, and aura displays.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-content">
                    <h4 className="h5 mb-2">Real-Time Moderation</h4>
                    <p className="text-body text-gray-300">AI-powered moderation keeps the community safe and positive in real time.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`about-section ${inView ? 'fade-in-up' : ''}`}>
              <h2 className="display-3 mb-6">Our Values</h2>
              <div className="values-grid">
                <div className="value-item">
                  <h4 className="h5 mb-2 text-primary">Authenticity</h4>
                  <p className="text-body text-gray-300">Be yourself, online and offline.</p>
                </div>
                <div className="value-item">
                  <h4 className="h5 mb-2 text-primary">Privacy</h4>
                  <p className="text-body text-gray-300">Your data is yours. We never sell or misuse your information.</p>
                </div>
                <div className="value-item">
                  <h4 className="h5 mb-2 text-primary">Growth</h4>
                  <p className="text-body text-gray-300">We help you learn and improve, every day.</p>
                </div>
                <div className="value-item">
                  <h4 className="h5 mb-2 text-primary">Community</h4>
                  <p className="text-body text-gray-300">Support, respect, and uplift each other.</p>
                </div>
              </div>
            </div>

            <div className={`about-section ${inView ? 'fade-in-up' : ''}`}>
              <h2 className="display-3 mb-6">Technology & Security</h2>
              <p className="text-body-large mb-4">
                Aurameter uses state-of-the-art AI and secure cloud infrastructure to deliver insights and protect your privacy. All data is encrypted, and you control what you share.
              </p>
              <div className="tech-stack">
                <span className="tech-item">AI/ML</span>
                <span className="tech-item">Cloud Security</span>
                <span className="tech-item">End-to-End Encryption</span>
              </div>
            </div>

            <div className={`about-section ${inView ? 'fade-in-up' : ''}`}>
              <h2 className="display-3 mb-6">Meet the Founders</h2>
              <div className="founders-grid">
                <div className="founder-card">
                  <h3 className="h3 mb-3">Nikhil Jha <span className="text-secondary font-medium">Founder</span></h3>
                  <ul className="founder-details text-body text-gray-300">
                    <li>Ex-Accenture</li>
                    <li>Built Just Scroll</li>
                    <li>Scaled Memsta services with 18 clients as founder</li>
                  </ul>
                </div>
                <div className="founder-card">
                  <h3 className="h3 mb-3">Ankit Bhati <span className="text-secondary font-medium">Co-founder</span></h3>
                  <ul className="founder-details text-body text-gray-300">
                    <li>IIITV Sophomore</li>
                    <li>Hackathon Winner</li>
                    <li>Ex-Allrounder.AI</li>
                    <li>SSOS</li>
                    <li>Open-source contributor</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`about-section ${inView ? 'fade-in-up' : ''}`}>
              <h2 className="display-3 mb-6">Join Us</h2>
              <p className="text-body-large mb-4">
                Be part of a new era in social networking. Sign up for early access and help us build a platform that puts people first.
              </p>
              <div className="cta-buttons">
                <button className="btn-primary">
                  Join Beta Waitlist
                </button>
                <button className="btn-secondary">
                  Stay Updated
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 