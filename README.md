# ✨ Aurameter - AI-Driven Social Media Platform

**Aurameter** is an AI-driven, gamified, next-gen social media platform where every user action transforms into Aura Points. It's not about filters and likes—it's about energy, vibes, and mindful presence.

## 🚀 Features

- **AI Aura Analysis**: Upload photos and get AI-generated energy insights
- **Aura Points System**: Gamified growth through positive interactions
- **Mindful Connections**: Build meaningful relationships based on energy compatibility
- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Privacy-First**: End-to-end encryption and user data control

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern UI framework
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations
- **Axios** - HTTP client for API calls
- **CSS3** - Custom styling with modern design system

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Multer** - File upload handling
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
aurameter/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json
├── routes/                # Express routes
│   ├── auraAnalysis.js    # AI analysis endpoint
│   └── supporters.js      # Supporters data endpoint
├── server.js              # Express server
├── package.json           # Backend dependencies
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aurameter
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/aurameter
   PORT=5000
   NODE_ENV=development
   ```

5. **Start the development servers**

   **Option 1: Run both servers simultaneously**
   ```bash
   npm run dev
   ```

   **Option 2: Run servers separately**
   ```bash
   # Terminal 1 - Backend
   npm run server

   # Terminal 2 - Frontend
   npm run client
   ```

6. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📱 Available Pages

1. **Landing Page** (`/`) - Hero section with mobile UI mockup and smooth scroll effects
2. **Check Your Aura** (`/check-aura`) - Image upload and AI analysis
3. **Early Beta Supporters** (`/supporters`) - List of community members
4. **About Us** (`/about`) - Company information and values
5. **Privacy Policy** (`/privacy`) - Comprehensive privacy information

## 🔮 API Endpoints

### Aura Analysis
- **POST** `/api/aura-analysis`
  - Body: `{ image: "base64_encoded_image" }`
  - Response: `{ compliment: "string", auraPoints: number }`

### Supporters
- **GET** `/api/supporters`
  - Response: `{ data: Array<Supporter>, count: number }`

## 🎨 Design Features

- **Glass Morphism**: Modern glass effect UI components
- **Gradient Text**: Beautiful gradient text effects
- **Smooth Animations**: Framer Motion powered animations
- **Responsive Design**: Mobile-first approach
- **Dark Theme**: Elegant dark color scheme
- **Parallax Effects**: Smooth scrolling animations

## 🔒 Privacy & Security

- End-to-end encryption for all data
- Secure file upload handling
- Rate limiting on API endpoints
- CORS protection
- Helmet security middleware
- User data control and transparency

## 🚀 Deployment

### Heroku Deployment

1. **Create Heroku app**
   ```bash
   heroku create your-aurameter-app
   ```

2. **Set environment variables**
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_uri
   heroku config:set NODE_ENV=production
   ```

3. **Deploy**
   ```bash
   git push heroku main
   ```

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React.js community for the amazing framework
- Framer Motion for smooth animations
- MongoDB for the robust database solution
- All early beta supporters who believed in the vision

## 📞 Contact

- **Email**: hello@aurameter.com
- **Website**: www.aurameter.com
- **Twitter**: @aurameter

---

Made with 💜 for mindful connections
