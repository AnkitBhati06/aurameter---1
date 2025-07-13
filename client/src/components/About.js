import React from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div className="about-page">
      <div className="container">
        <div className="about-content" ref={ref}>
          <div className={`about-header ${inView ? 'fade-in-up' : ''}`}>
            <h1>About Aurameter ✨</h1>
            <p>Redefining social media through mindful connections and authentic energy</p>
          </div>

          <div className="about-sections">
            <div className={`about-section ${inView ? 'fade-in-up' : ''}`}>
              <div className="section-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>
                We believe social media should reflect your true energy, not just your filtered photos. 
                Aurameter is built on the principle that every interaction, every story, and every moment 
                you share contributes to your digital aura - a representation of your authentic self.
              </p>
              <p>
                Our mission is to create a platform where users can connect meaningfully, share their 
                genuine energy, and grow together in a supportive, mindful community.
              </p>
            </div>

            <div className={`about-section ${inView ? 'fade-in-up' : ''}`}>
              <div className="section-icon">💡</div>
              <h2>The Vision</h2>
              <p>
                Imagine a social platform where your worth isn't measured by likes or followers, 
                but by the positive energy you bring to the community. Where every post reflects 
                your current mood, your creative energy, or your peaceful moments.
              </p>
              <p>
                Aurameter transforms social media from a numbers game into a journey of self-discovery 
                and authentic connection. We're building the future of mindful digital interaction.
              </p>
            </div>

            <div className={`about-section ${inView ? 'fade-in-up' : ''}`}>
              <div className="section-icon">🚀</div>
              <h2>How It Works</h2>
              <div className="features-list">
                <div className="feature-item">
                  <span className="feature-icon">📸</span>
                  <div className="feature-content">
                    <h4>Share Your Energy</h4>
                    <p>Upload photos that capture your current mood and energy</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🤖</span>
                  <div className="feature-content">
                    <h4>AI Aura Analysis</h4>
                    <p>Our AI reads your energy signature and provides insights</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🌟</span>
                  <div className="feature-content">
                    <h4>Earn Aura Points</h4>
                    <p>Gain points for positive interactions and mindful sharing</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💚</span>
                  <div className="feature-content">
                    <h4>Build Connections</h4>
                    <p>Connect with people who share your energy and values</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`about-section ${inView ? 'fade-in-up' : ''}`}>
              <div className="section-icon">👥</div>
              <h2>Our Values</h2>
              <div className="values-grid">
                <div className="value-item">
                  <h4>Authenticity</h4>
                  <p>Be your true self, no filters needed</p>
                </div>
                <div className="value-item">
                  <h4>Mindfulness</h4>
                  <p>Share with intention and purpose</p>
                </div>
                <div className="value-item">
                  <h4>Connection</h4>
                  <p>Build meaningful relationships</p>
                </div>
                <div className="value-item">
                  <h4>Growth</h4>
                  <p>Evolve through positive interactions</p>
                </div>
                <div className="value-item">
                  <h4>Privacy</h4>
                  <p>Your data, your control</p>
                </div>
                <div className="value-item">
                  <h4>Community</h4>
                  <p>Support and uplift each other</p>
                </div>
              </div>
            </div>

            <div className={`about-section ${inView ? 'fade-in-up' : ''}`}>
              <div className="section-icon">🔮</div>
              <h2>The Technology</h2>
              <p>
                Aurameter combines cutting-edge AI technology with mindful design principles. 
                Our aura analysis system uses advanced computer vision and machine learning 
                to understand the energy and emotions conveyed through your photos.
              </p>
              <p>
                Built with privacy-first architecture, your data is encrypted and secure. 
                We believe in transparency and give you full control over your information.
              </p>
              <div className="tech-stack">
                <span className="tech-item">AI/ML</span>
                <span className="tech-item">Computer Vision</span>
                <span className="tech-item">Blockchain</span>
                <span className="tech-item">End-to-End Encryption</span>
              </div>
            </div>

            <div className={`about-section ${inView ? 'fade-in-up' : ''}`}>
              <div className="section-icon">🧑‍💼</div>
              <h2>Founders</h2>
              <div className="founders-grid">
                <div className="founder-card">
                  <h3>Nikhil Jha <span className="founder-role">Founder</span></h3>
                  <ul className="founder-details">
                    <li>Ex-Accenture</li>
                    <li>Built Just Scroll</li>
                    <li>Scaled Memsta services with 18 clients as founder</li>
                  </ul>
                </div>
                <div className="founder-card">
                  <h3>Ankit Bhati <span className="founder-role">Co-founder</span></h3>
                  <ul className="founder-details">
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
              <div className="section-icon">🌍</div>
              <h2>Join the Movement</h2>
              <p>
                We're at the beginning of something revolutionary. A social media platform 
                that prioritizes mental health, authentic connections, and personal growth 
                over vanity metrics and endless scrolling.
              </p>
              <p>
                Join our community of early adopters and help shape the future of mindful 
                social media. Together, we can create a digital world that reflects our 
                best selves.
              </p>
              <div className="cta-buttons">
                <button className="btn-primary">
                  🚀 Join Beta Waitlist
                </button>
                <button className="btn-secondary">
                  📧 Stay Updated
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