const express = require('express');
const router = express.Router();

// Sample supporters data (in a real app, this would come from MongoDB)
const supporters = [
  { id: 1, name: "ANKIT BHATI", role: "Beta Tester", joinedDate: "2024-04-01" },
  { id: 2, name: "Surya Chaudhary", role: "Beta Tester", joinedDate: "2024-04-02" },
  { id: 3, name: "Harshvardhan Chaturvedi", role: "Beta Tester", joinedDate: "2024-04-03" },
  { id: 4, name: "Rishabjit Singh", role: "Beta Tester", joinedDate: "2024-04-04" },
  { id: 5, name: "Mradul Patoria", role: "Beta Tester", joinedDate: "2024-04-05" },
  { id: 6, name: "Aditya Sah", role: "Beta Tester", joinedDate: "2024-04-06" },
  { id: 7, name: "Uday Rana", role: "Beta Tester", joinedDate: "2024-04-07" },
  { id: 8, name: "Dhruva Wani", role: "Beta Tester", joinedDate: "2024-04-08" },
  { id: 9, name: "Tanishq Zade", role: "Beta Tester", joinedDate: "2024-04-09" },
  { id: 10, name: "OMKAR SAHU", role: "Beta Tester", joinedDate: "2024-04-10" },
  { id: 11, name: "Rana Ujjaval", role: "Beta Tester", joinedDate: "2024-04-11" },
  { id: 12, name: "Saritha Swamy", role: "Beta Tester", joinedDate: "2024-04-12" },
  { id: 13, name: "Aryan mishra", role: "Beta Tester", joinedDate: "2024-04-13" },
  { id: 14, name: "Gaurav Pokhriyal", role: "Beta Tester", joinedDate: "2024-04-14" },
  { id: 15, name: "Nikhil Dhanda", role: "Beta Tester", joinedDate: "2024-04-15" },
  { id: 16, name: "Aditya Verma", role: "Beta Tester", joinedDate: "2024-04-16" },
  { id: 17, name: "Piyush Thapliyal", role: "Beta Tester", joinedDate: "2024-04-17" },
  { id: 18, name: "Tamizharuvi", role: "Beta Tester", joinedDate: "2024-04-18" },
  { id: 19, name: "Rishi Dhakad", role: "Beta Tester", joinedDate: "2024-04-19" },
  { id: 20, name: "Abhishek singh", role: "Beta Tester", joinedDate: "2024-04-20" },
  { id: 21, name: "Tushar Goyal", role: "Beta Tester", joinedDate: "2024-04-21" },
  { id: 22, name: "KESHAV GUPTA", role: "Beta Tester", joinedDate: "2024-04-22" },
  { id: 23, name: "Naveen Natarajan", role: "Beta Tester", joinedDate: "2024-04-23" },
  { id: 24, name: "Dharun S", role: "Beta Tester", joinedDate: "2024-04-24" },
  { id: 25, name: "Ananya Gupta", role: "Beta Tester", joinedDate: "2024-04-25" },
  { id: 26, name: "Sparsh Samrat", role: "Beta Tester", joinedDate: "2024-04-26" },
  { id: 27, name: "Ashal Abbas Abidi", role: "Beta Tester", joinedDate: "2024-04-27" },
  { id: 28, name: "Adarsh Raj Tiwari", role: "Beta Tester", joinedDate: "2024-04-28" },
  { id: 29, name: "Vatsal Kumar", role: "Beta Tester", joinedDate: "2024-04-29" },
  { id: 30, name: "Arunachalam", role: "Beta Tester", joinedDate: "2024-04-30" },
  { id: 31, name: "Shailendra Rai", role: "Beta Tester", joinedDate: "2024-04-01" },
  { id: 32, name: "Gaurav Chandok", role: "Beta Tester", joinedDate: "2024-04-02" },
  { id: 33, name: "Krupa Pareshkumar Patel", role: "Beta Tester", joinedDate: "2024-04-03" },
  { id: 34, name: "Aditya Kumar", role: "Beta Tester", joinedDate: "2024-04-04" },
  { id: 35, name: "Monojeet Adhikari", role: "Beta Tester", joinedDate: "2024-04-05" },
  { id: 36, name: "Virendra Hembrom", role: "Beta Tester", joinedDate: "2024-04-06" },
  { id: 37, name: "Tanmay Gosavi", role: "Beta Tester", joinedDate: "2024-04-07" },
  { id: 38, name: "Manthan Vaishnav", role: "Beta Tester", joinedDate: "2024-04-08" },
  { id: 39, name: "Prince Soni", role: "Beta Tester", joinedDate: "2024-04-09" },
  { id: 40, name: "Yakash", role: "Beta Tester", joinedDate: "2024-04-10" },
{ id: 41, name: "Sahil Kumar", role: "Beta Tester", joinedDate: "2024-04-11" },
{ id: 42, name: "Adhiraj kumar tiwari", role: "Beta Tester", joinedDate: "2024-04-12" },
{ id: 43, name: "Abhishek Mishra", role: "Beta Tester", joinedDate: "2024-04-13" },
{ id: 44, name: "Ashaz Ansari", role: "Beta Tester", joinedDate: "2024-04-14" },
{ id: 45, name: "Prabhat Tiwari", role: "Beta Tester", joinedDate: "2024-04-15" },
{ id: 46, name: "Adarsh Bhardwaj", role: "Beta Tester", joinedDate: "2024-04-16" },
{ id: 47, name: "Ambuj Aditya Singh", role: "Beta Tester", joinedDate: "2024-04-17" },
{ id: 48, name: "Atul", role: "Beta Tester", joinedDate: "2024-04-18" },
{ id: 49, name: "Shubham Raj", role: "Beta Tester", joinedDate: "2024-04-19" },
{ id: 50, name: "Nishu Dandotiya", role: "Beta Tester", joinedDate: "2024-04-20" },
{ id: 51, name: "Trisha Thakkar", role: "Beta Tester", joinedDate: "2024-04-21" },
{ id: 52, name: "Vedant Pawar", role: "Beta Tester", joinedDate: "2024-04-22" },
{ id: 53, name: "Ashish Bhaud", role: "Beta Tester", joinedDate: "2024-04-23" },
{ id: 54, name: "Shanket Sarangi", role: "Beta Tester", joinedDate: "2024-04-24" },
{ id: 55, name: "hitesh", role: "Beta Tester", joinedDate: "2024-04-25" },
{ id: 56, name: "Darshan Nibe", role: "Beta Tester", joinedDate: "2024-04-26" },
{ id: 57, name: "Md Ahmed", role: "Beta Tester", joinedDate: "2024-04-27" },
{ id: 58, name: "Dishant savaliya", role: "Beta Tester", joinedDate: "2024-04-28" },
{ id: 59, name: "Sudhanshu Kumar", role: "Beta Tester", joinedDate: "2024-04-29" },
{ id: 60, name: "Naman Garg", role: "Beta Tester", joinedDate: "2024-04-30" },
{ id: 61, name: "Md Mehran", role: "Beta Tester", joinedDate: "2024-05-01" },
{ id: 62, name: "Krishna Kumar Chatterjee", role: "Beta Tester", joinedDate: "2024-05-02" },
{ id: 63, name: "Sarang Arora", role: "Beta Tester", joinedDate: "2024-05-03" },
{ id: 64, name: "Purv goyani", role: "Beta Tester", joinedDate: "2024-05-04" },
{ id: 65, name: "Rajkumar Singh", role: "Beta Tester", joinedDate: "2024-05-05" },
{ id: 66, name: "Chris B", role: "Beta Tester", joinedDate: "2024-05-06" },
{ id: 67, name: "Prisha", role: "Beta Tester", joinedDate: "2024-05-07" },
{ id: 68, name: "Dhara Mojidra", role: "Beta Tester", joinedDate: "2024-05-08" },
{ id: 69, name: "Tisha nakrani", role: "Beta Tester", joinedDate: "2024-05-09" },
{ id: 70, name: "Bhagirath chovatiya", role: "Beta Tester", joinedDate: "2024-05-10" },
{ id: 71, name: "Trade with dheeraj", role: "Beta Tester", joinedDate: "2024-05-11" },
{ id: 72, name: "Shivam yadav", role: "Beta Tester", joinedDate: "2024-05-12" },
{ id: 73, name: "Aryan mishra", role: "Beta Tester", joinedDate: "2024-05-13" }
 
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