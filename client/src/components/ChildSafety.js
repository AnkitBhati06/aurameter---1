import React from 'react';
import './About.css';

const ChildSafety = () => (
  <div className="about-page">
    <div className="container">
      <div className="about-content fade-in-up">
        <div className="about-header fade-in-up">
          <h1>Child Safety</h1>
          <p>Your safety is our top priority. Learn how we protect young users and promote a safe, positive environment for everyone.</p>
        </div>
        <div className="about-section fade-in-up">
          <h2>Our Commitment</h2>
          <ul>
            <li>Strict content moderation and reporting tools.</li>
            <li>Privacy controls for all users.</li>
            <li>Resources for parents and guardians.</li>
            <li>Zero tolerance for abuse or exploitation.</li>
          </ul>
          <p style={{marginTop: '2rem', color: '#94a3b8'}}>Full child safety policy coming soon.</p>
        </div>
      </div>
    </div>
  </div>
);

export default ChildSafety; 