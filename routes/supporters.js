const express = require('express');
const router = express.Router();

// Sample supporters data (in a real app, this would come from MongoDB)
const supporters = [
  { id: 1, name: "Sarah Chen", role: "Early Adopter", joinedDate: "2024-01-15" },
  { id: 2, name: "Marcus Rodriguez", role: "Beta Tester", joinedDate: "2024-01-20" },
  { id: 3, name: "Aisha Patel", role: "Community Leader", joinedDate: "2024-01-25" },
  { id: 4, name: "David Kim", role: "Early Adopter", joinedDate: "2024-02-01" },
  { id: 5, name: "Emma Thompson", role: "Beta Tester", joinedDate: "2024-02-05" },
  { id: 6, name: "James Wilson", role: "Early Adopter", joinedDate: "2024-02-10" },
  { id: 7, name: "Zara Ahmed", role: "Community Leader", joinedDate: "2024-02-15" },
  { id: 8, name: "Michael Brown", role: "Beta Tester", joinedDate: "2024-02-20" },
  { id: 9, name: "Lisa Garcia", role: "Early Adopter", joinedDate: "2024-02-25" },
  { id: 10, name: "Alex Johnson", role: "Beta Tester", joinedDate: "2024-03-01" }
];

// GET /api/supporters
router.get('/', async (req, res) => {
  try {
    res.json({
      success: true,
      data: supporters,
      count: supporters.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router; 