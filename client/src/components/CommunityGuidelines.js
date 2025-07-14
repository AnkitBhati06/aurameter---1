import React from 'react';
import './About.css';

const CommunityGuidelines = () => (
  <div className="about-page">
    <div className="container">
      <div className="about-content fade-in-up">
        <div className="about-header text-center fade-in-up">
          <h1 className="display-2 mb-6">Community Guidelines</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our community is built on respect, positivity, and mindful connection. Please follow these guidelines to help us create a safe and welcoming space for everyone.</p>
        </div>
        <div className="about-section fade-in-up">
          <h2 className="display-3 mb-6">Guidelines</h2>
          <ul className="text-body-large text-gray-300 mb-6">
            <li>Be respectful and kind to all members.</li>
            <li>No hate speech, bullying, or harassment.</li>
            <li>Share authentic, positive energy.</li>
            <li>Protect your privacy and the privacy of others.</li>
            <li>Report any inappropriate behavior to our team.</li>
          </ul>
          <p className="text-body text-gray-400">Full guidelines coming soon.</p>
        </div>
      </div>
    </div>
  </div>
);

export default CommunityGuidelines; 