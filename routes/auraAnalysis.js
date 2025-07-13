const express = require('express');
const router = express.Router();

// Sample compliments and aura points for demonstration
const compliments = [
  "Radiates calm energy ✨",
  "Exudes creative vibes 🎨",
  "Brings positive energy 🌟",
  "Has a peaceful aura 🧘‍♀️",
  "Shines with confidence 👑",
  "Emits warm energy 🔥",
  "Carries healing presence 💚",
  "Vibrates with joy 😊",
  "Manifests abundance 💫",
  "Glows with authenticity 🌈"
];

// Generate random aura points between 20-50
const generateAuraPoints = () => Math.floor(Math.random() * 31) + 20;

// POST /api/aura-analysis
router.post('/', async (req, res) => {
  try {
    const { image } = req.body;
    
    // Validate image data
    if (!image) {
      return res.status(400).json({
        success: false,
        message: 'Image data is required'
      });
    }

    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate random response
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    const auraPoints = generateAuraPoints();

    res.json({
      success: true,
      data: {
        compliment,
        auraPoints,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error during aura analysis',
      error: error.message
    });
  }
});

module.exports = router; 