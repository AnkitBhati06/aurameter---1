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
          <div className={`aura-header text-center ${inView ? 'fade-in-up' : ''}`}>
            <h1 className="display-2 mb-6">Check Your Aura</h1>
            <p className="text-xl text-gray-300">Upload a photo and discover your energy signature</p>
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
                      <div className="upload-icon text-5xl mb-4">📸</div>
                      <h3 className="h3 mb-3">Upload Your Photo</h3>
                      <p className="text-body text-gray-300 mb-2">Drag & drop or click to select an image</p>
                      <span className="text-caption text-gray-500">Supports JPG, PNG, GIF (max 5MB)</span>
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
                      'Analyze My Aura'
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className={`analysis-result ${inView ? 'fade-in-up' : ''}`} ref={resultRef}>
                <div className="result-header">
                  <h2 className="result-title">Aurameter</h2>
                  <p className="result-subtitle">Your Aura Analysis</p>
                </div>
                <div className="result-content">
                  <div className="compliment-card">
                    <h3 className="compliment-title">Your Energy</h3>
                    <p className="compliment-text">{analysisResult.compliment}</p>
                  </div>
                  <div className="aura-points-card">
                    <h3 className="points-title">Aura Points</h3>
                    <div className="points-display">{analysisResult.auraPoints}</div>
                    <span className="points-label">points</span>
                  </div>
                </div>
                <div className="result-actions">
                  <button onClick={handleDownloadImage} className="btn-primary download-btn">
                    Download Result
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className={`aura-info ${inView ? 'fade-in-up' : ''}`}>
            <h3>How It Works</h3>
            <div className="info-grid">
              <div className="info-item" data-step="1">
                <div className="info-icon">📸</div>
                <h4>Upload Photo</h4>
                <p>Share a clear photo of yourself</p>
              </div>
              <div className="info-item" data-step="2">
                <div className="info-icon">🤖</div>
                <h4>AI Analysis</h4>
                <p>Our AI reads your energy signature</p>
              </div>
              <div className="info-item" data-step="3">
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