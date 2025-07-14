import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Privacy.css';

const Privacy = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div className="privacy-page">
      <div className="container">
        <div className="privacy-content" ref={ref}>
          <div className={`privacy-header text-center ${inView ? 'fade-in-up' : ''}`}>
            <h1 className="display-2 mb-6">🔒 Privacy Policy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">Your privacy is our priority. Learn how we protect your data.</p>
            <div className="text-caption text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>

          <div className="privacy-sections">
            <div className={`privacy-section ${inView ? 'fade-in-up' : ''}`}>
              <h2 className="display-3 mb-6">📋 Overview</h2>
              <p className="text-body-large mb-4">
                At Aurameter, we believe that privacy is a fundamental human right. This Privacy Policy 
                explains how we collect, use, and protect your personal information when you use our 
                platform. We are committed to transparency and giving you control over your data.
              </p>
              <p className="text-body-large">
                By using Aurameter, you agree to the collection and use of information in accordance 
                with this policy. We will not use or share your information with anyone except as 
                described in this Privacy Policy.
              </p>
            </div>

            <div className={`privacy-section ${inView ? 'fade-in-up' : ''}`}>
              <h2>📊 Information We Collect</h2>
              
              <div className="info-category">
                <h3>Personal Information</h3>
                <ul>
                  <li>Name and email address when you create an account</li>
                  <li>Profile information you choose to share</li>
                  <li>Photos you upload for aura analysis</li>
                  <li>Communication preferences and settings</li>
                </ul>
              </div>

              <div className="info-category">
                <h3>Usage Information</h3>
                <ul>
                  <li>How you interact with our platform</li>
                  <li>Features you use and content you engage with</li>
                  <li>Device information and browser type</li>
                  <li>IP address and general location data</li>
                </ul>
              </div>

              <div className="info-category">
                <h3>Aura Analysis Data</h3>
                <ul>
                  <li>Photos processed for energy analysis</li>
                  <li>AI-generated insights and aura points</li>
                  <li>Analysis results and recommendations</li>
                  <li>Patterns in your energy over time</li>
                </ul>
              </div>
            </div>

            <div className={`privacy-section ${inView ? 'fade-in-up' : ''}`}>
              <h2>🎯 How We Use Your Information</h2>
              
              <div className="usage-grid">
                <div className="usage-item">
                  <div className="usage-icon">🔮</div>
                  <h4>Aura Analysis</h4>
                  <p>Process your photos to provide energy insights and aura points</p>
                </div>
                <div className="usage-item">
                  <div className="usage-icon">👥</div>
                  <h4>Community Features</h4>
                  <p>Enable connections with other users who share similar energy</p>
                </div>
                <div className="usage-item">
                  <div className="usage-icon">📈</div>
                  <h4>Personalization</h4>
                  <p>Improve your experience with tailored content and features</p>
                </div>
                <div className="usage-item">
                  <div className="usage-icon">🛡️</div>
                  <h4>Security</h4>
                  <p>Protect your account and prevent unauthorized access</p>
                </div>
                <div className="usage-item">
                  <div className="usage-icon">🔧</div>
                  <h4>Platform Improvement</h4>
                  <p>Enhance our services and develop new features</p>
                </div>
                <div className="usage-item">
                  <div className="usage-icon">📧</div>
                  <h4>Communication</h4>
                  <p>Send important updates and respond to your inquiries</p>
                </div>
              </div>
            </div>

            <div className={`privacy-section ${inView ? 'fade-in-up' : ''}`}>
              <h2>🔐 Data Protection & Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information:
              </p>
              
              <div className="security-features">
                <div className="security-item">
                  <span className="security-icon">🔒</span>
                  <div>
                    <h4>End-to-End Encryption</h4>
                    <p>All data is encrypted in transit and at rest</p>
                  </div>
                </div>
                <div className="security-item">
                  <span className="security-icon">🛡️</span>
                  <div>
                    <h4>Secure Infrastructure</h4>
                    <p>Hosted on secure cloud platforms with regular security audits</p>
                  </div>
                </div>
                <div className="security-item">
                  <span className="security-icon">👤</span>
                  <div>
                    <h4>Access Controls</h4>
                    <p>Strict access controls and authentication measures</p>
                  </div>
                </div>
                <div className="security-item">
                  <span className="security-icon">🔄</span>
                  <div>
                    <h4>Regular Backups</h4>
                    <p>Automatic backups to prevent data loss</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`privacy-section ${inView ? 'fade-in-up' : ''}`}>
              <h2>🤝 Data Sharing & Third Parties</h2>
              <p>
                We are committed to protecting your privacy and do not sell your personal information. 
                We may share your data only in the following circumstances:
              </p>
              
              <div className="sharing-scenarios">
                <div className="scenario-item">
                  <h4>With Your Consent</h4>
                  <p>When you explicitly agree to share specific information</p>
                </div>
                <div className="scenario-item">
                  <h4>Service Providers</h4>
                  <p>Trusted partners who help us operate our platform (with strict data protection agreements)</p>
                </div>
                <div className="scenario-item">
                  <h4>Legal Requirements</h4>
                  <p>When required by law or to protect our rights and safety</p>
                </div>
                <div className="scenario-item">
                  <h4>Business Transfers</h4>
                  <p>In case of merger, acquisition, or sale of assets (with privacy protections)</p>
                </div>
              </div>
            </div>

            <div className={`privacy-section ${inView ? 'fade-in-up' : ''}`}>
              <h2>🎛️ Your Rights & Choices</h2>
              <p>
                You have control over your personal information. Here are your rights:
              </p>
              
              <div className="rights-grid">
                <div className="right-item">
                  <h4>Access</h4>
                  <p>View and download your personal data</p>
                </div>
                <div className="right-item">
                  <h4>Correction</h4>
                  <p>Update or correct inaccurate information</p>
                </div>
                <div className="right-item">
                  <h4>Deletion</h4>
                  <p>Request deletion of your personal data</p>
                </div>
                <div className="right-item">
                  <h4>Portability</h4>
                  <p>Export your data in a machine-readable format</p>
                </div>
                <div className="right-item">
                  <h4>Restriction</h4>
                  <p>Limit how we process your information</p>
                </div>
                <div className="right-item">
                  <h4>Objection</h4>
                  <p>Object to certain types of data processing</p>
                </div>
              </div>
            </div>

            <div className={`privacy-section ${inView ? 'fade-in-up' : ''}`}>
              <h2>🍪 Cookies & Tracking</h2>
              <p>
                We use cookies and similar technologies to enhance your experience:
              </p>
              
              <div className="cookie-types">
                <div className="cookie-item">
                  <h4>Essential Cookies</h4>
                  <p>Required for basic platform functionality</p>
                </div>
                <div className="cookie-item">
                  <h4>Analytics Cookies</h4>
                  <p>Help us understand how you use our platform</p>
                </div>
                <div className="cookie-item">
                  <h4>Preference Cookies</h4>
                  <p>Remember your settings and preferences</p>
                </div>
              </div>
              
              <p>
                You can control cookie settings through your browser preferences. 
                Note that disabling certain cookies may affect platform functionality.
              </p>
            </div>

            <div className={`privacy-section ${inView ? 'fade-in-up' : ''}`}>
              <h2>📞 Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us:
              </p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <p>privacy@aurameter.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🌐</span>
                  <div>
                    <h4>Website</h4>
                    <p>www.aurameter.com/privacy</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📮</span>
                  <div>
                    <h4>Mail</h4>
                    <p>Privacy Team<br />Aurameter Inc.<br />123 Energy Street<br />Mindful City, MC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`privacy-section ${inView ? 'fade-in-up' : ''}`}>
              <h2>📝 Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any 
                significant changes by:
              </p>
              <ul>
                <li>Posting the new policy on our website</li>
                <li>Sending you an email notification</li>
                <li>Displaying a notice in the app</li>
              </ul>
              <p>
                Your continued use of Aurameter after any changes indicates your acceptance 
                of the updated policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 