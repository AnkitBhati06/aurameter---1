import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import './Supporters.css';

const Supporters = () => {
  const [supporters, setSupporters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    fetchSupporters();
  }, []);

  const fetchSupporters = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/supporters');
      if (response.data.success) {
        setSupporters(response.data.data);
      } else {
        setError('Failed to fetch supporters');
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'Early Adopter':
        return '🚀';
      case 'Beta Tester':
        return '🧪';
      case 'Community Leader':
        return '👑';
      default:
        return '✨';
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'Early Adopter':
        return '#667eea';
      case 'Beta Tester':
        return '#764ba2';
      case 'Community Leader':
        return '#f093fb';
      default:
        return '#667eea';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="supporters-page">
        <div className="container">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading our amazing supporters...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="supporters-page">
        <div className="container">
          <div className="error-container">
            <div className="error-icon">⚠️</div>
            <h2>Oops! Something went wrong</h2>
            <p>{error}</p>
            <button onClick={fetchSupporters} className="btn-primary">
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="supporters-page">
      <div className="container">
        <div className="supporters-content" ref={ref}>
          <div className={`supporters-header ${inView ? 'fade-in-up' : ''}`}>
            <h1>🌟 Early Beta Supporters</h1>
            <p>Meet the amazing people who believed in Aurameter from the beginning</p>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">{supporters.length}</span>
                <span className="stat-label">Total Supporters</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {supporters.filter(s => s.role === 'Early Adopter').length}
                </span>
                <span className="stat-label">Early Adopters</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {supporters.filter(s => s.role === 'Beta Tester').length}
                </span>
                <span className="stat-label">Beta Testers</span>
              </div>
            </div>
          </div>

          <div className={`supporters-grid ${inView ? 'fade-in-up' : ''}`}>
            {supporters.map((supporter, index) => (
              <div
                key={supporter.id}
                className="supporter-card"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="supporter-avatar">
                  <span className="avatar-emoji">
                    {supporter.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div className="supporter-info">
                  <h3 className="supporter-name">{supporter.name}</h3>
                  <div 
                    className="supporter-role"
                    style={{ color: getRoleColor(supporter.role) }}
                  >
                    <span className="role-icon">{getRoleIcon(supporter.role)}</span>
                    {supporter.role}
                  </div>
                  <p className="supporter-date">
                    Joined {formatDate(supporter.joinedDate)}
                  </p>
                </div>

                <div className="supporter-badge">
                  <span className="badge-icon">✨</span>
                  <span className="badge-text">Pioneer</span>
                </div>
              </div>
            ))}
          </div>

          <div className={`join-section ${inView ? 'fade-in-up' : ''}`}>
            <div className="join-content">
              <h2>Want to Join Our Community?</h2>
              <p>Be among the first to experience the future of social media</p>
              <div className="join-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">🎯</span>
                  <span>Early access to new features</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">💎</span>
                  <span>Exclusive beta tester badge</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🎁</span>
                  <span>Special rewards and perks</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🤝</span>
                  <span>Direct feedback to our team</span>
                </div>
              </div>
              <div className="join-actions">
                <button className="btn-primary">
                  🚀 Join Beta Waitlist
                </button>
                <button className="btn-secondary">
                  📧 Get Notified
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supporters; 