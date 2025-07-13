import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import './CheckAura.css';
import html2canvas from 'html2canvas';

const CheckAura = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.1 });
  const resultRef = useRef(null);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError('Image size should be less than 5MB');
        return;
      }

      setSelectedImage(file);
      setError(null);
      setAnalysisResult(null);
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }
      setSelectedImage(file);
      setError(null);
      setAnalysisResult(null);
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeAura = async () => {
    if (!selectedImage) {
      setError('Please select an image first');
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    try {
      // Convert image to base64
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64Image = e.target.result.split(',')[1];
        
        const response = await axios.post('/api/aura-analysis', {
          image: base64Image
        });

        if (response.data.success) {
          setAnalysisResult(response.data.data);
        } else {
          setError('Analysis failed. Please try again.');
        }
      };
      reader.readAsDataURL(selectedImage);
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleDownloadImage = async () => {
    if (!resultRef.current) return;
    const canvas = await html2canvas(resultRef.current, { backgroundColor: null, scale: 2 });
    const link = document.createElement('a');
    link.download = 'aurameter-aura-analysis.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const resetForm = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    setAnalysisResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="check-aura-page">
      <div className="container">
        <div className="aura-content" ref={ref}>
          <div className={`aura-header ${inView ? 'fade-in-up' : ''}`}>
            <h1>🔮 Check Your Aura</h1>
            <p>Upload a photo and discover your energy signature</p>
          </div>

          <div className="aura-form-container">
            {!analysisResult ? (
              <div className={`aura-form ${inView ? 'fade-in-up' : ''}`}>
                <div 
                  className={`upload-area ${previewUrl ? 'has-image' : ''}`}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  {previewUrl ? (
                    <div className="image-preview">
                      <img src={previewUrl} alt="Preview" />
                      <div className="preview-overlay">
                        <span>Click to change image</span>
                      </div>
                    </div>
                  ) : (
                    <div className="upload-placeholder">
                      <div className="upload-icon">📸</div>
                      <h3>Upload Your Photo</h3>
                      <p>Drag & drop or click to select an image</p>
                      <span className="upload-hint">Supports JPG, PNG, GIF (max 5MB)</span>
                    </div>
                  )}
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  style={{ display: 'none' }}
                />

                {error && (
                  <div className="error-message">
                    <span>⚠️ {error}</span>
                  </div>
                )}

                <div className="form-actions">
                  <button
                    onClick={analyzeAura}
                    disabled={!selectedImage || isAnalyzing}
                    className="btn-primary analyze-btn"
                  >
                    {isAnalyzing ? (
                      <>
                        <span className="loading-spinner"></span>
                        Analyzing Your Aura...
                      </>
                    ) : (
                      '🔮 Analyze My Aura'
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className={`analysis-result ${inView ? 'fade-in-up' : ''}`}
                   ref={resultRef}
                   style={{ maxWidth: 420, margin: '0 auto', borderRadius: 24, boxShadow: '0 8px 32px rgba(139,92,246,0.18)', background: 'linear-gradient(135deg,#181c2f 0%,#232946 100%)', padding: '2rem 1.5rem', position: 'relative' }}>
                <div className="result-header">
                  <h2 style={{ fontSize: '2rem', background: 'linear-gradient(90deg,#8b5cf6,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 800 }}>✨ Aurameter</h2>
                  <p style={{ color: '#94a3b8', fontWeight: 500 }}>Your Aura Analysis</p>
                </div>
                <div className="result-content">
                  <div className="compliment-card" style={{ background: 'rgba(139,92,246,0.10)', borderRadius: 16, padding: '1.2rem', marginBottom: 16 }}>
                    <div className="compliment-icon" style={{ fontSize: 32, marginBottom: 8 }}>💫</div>
                    <h3 style={{ color: '#8b5cf6', fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Your Energy</h3>
                    <p className="compliment-text" style={{ color: '#fff', fontSize: 18, fontWeight: 500 }}>{analysisResult.compliment}</p>
                  </div>
                  <div className="aura-points-card" style={{ background: 'rgba(6,182,212,0.10)', borderRadius: 16, padding: '1.2rem', marginBottom: 16, textAlign: 'center' }}>
                    <div className="points-icon" style={{ fontSize: 32, marginBottom: 8 }}>🌟</div>
                    <h3 style={{ color: '#06b6d4', fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Aura Points</h3>
                    <div className="points-display" style={{ fontSize: 32, fontWeight: 800, color: '#8b5cf6', marginBottom: 4 }}>{analysisResult.auraPoints}</div>
                    <span className="points-label" style={{ color: '#94a3b8', fontWeight: 500 }}>points</span>
                  </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: 24 }}>
                  <button onClick={handleDownloadImage} className="btn-primary" style={{ fontWeight: 700, fontSize: 18, padding: '0.8rem 2.2rem', borderRadius: 12 }}>
                    📥 Download Result
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className={`aura-info ${inView ? 'fade-in-up' : ''}`}>
            <h3>How It Works</h3>
            <div className="info-grid">
              <div className="info-item">
                <div className="info-icon">📸</div>
                <h4>Upload Photo</h4>
                <p>Share a clear photo of yourself</p>
              </div>
              <div className="info-item">
                <div className="info-icon">🤖</div>
                <h4>AI Analysis</h4>
                <p>Our AI reads your energy signature</p>
              </div>
              <div className="info-item">
                <div className="info-icon">✨</div>
                <h4>Get Results</h4>
                <p>Discover your aura and energy points</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckAura; 