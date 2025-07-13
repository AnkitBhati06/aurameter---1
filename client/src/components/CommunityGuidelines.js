import React from 'react';
import './About.css';

const CommunityGuidelines = () => (
  <div className="about-page">
    <div className="container">
      <div className="about-content fade-in-up">
        <div className="about-header fade-in-up">
          <h1>Community Guidelines</h1>
          <p>Our community is built on respect, positivity, and mindful connection. Please follow these guidelines to help us create a safe and welcoming space for everyone.</p>
        </div>
        <div className="about-section fade-in-up">
          <h2>Guidelines</h2>
          <ul>
            <li>Be respectful and kind to all members.</li>
            <li>No hate speech, bullying, or harassment.</li>
            <li>Share authentic, positive energy.</li>
            <li>Protect your privacy and the privacy of others.</li>
            <li>Report any inappropriate behavior to our team.</li>
          </ul>
          <p style={{marginTop: '2rem', color: '#94a3b8'}}>Full guidelines coming soon.</p>
        </div>
      </div>
    </div>
  </div>
);

export default CommunityGuidelines; 