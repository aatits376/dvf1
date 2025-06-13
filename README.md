# Dharmu Bhusal Portfolio - MERN Stack

A full-stack portfolio website built with React, Express.js, Node.js, and MongoDB. This project converts the original static HTML/CSS/JS portfolio into a dynamic MERN application while preserving the exact design and functionality.

## 🚀 Features

- **Dynamic Content Management**: All content (about, skills, projects) served from MongoDB
- **Responsive Design**: Fully responsive across all devices
- **Interactive UI**: Smooth animations, custom cursor, and interactive elements
- **Contact Form**: Functional contact form with database storage
- **Admin-Ready**: API endpoints ready for admin panel integration
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Axios** - HTTP client for API calls
- **AOS** - Animate On Scroll library
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware

## 📁 Project Structure

```
/
├── frontend/                 # React application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── App.js          # Main App component
│   │   └── index.js        # Entry point
│   └── package.json
├── backend/                 # Express server
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── config/             # Configuration files
│   ├── scripts/            # Utility scripts
│   └── server.js           # Server entry point
├── package.json            # Root package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dharmu-portfolio-mern
   ```

2. **Install dependencies**
   ```bash
   npm run install-deps
   ```

3. **Set up environment variables**
   ```bash
   cd backend
   cp .env.example .env
   ```
   Edit `.env` with your MongoDB connection string and other configurations.

4. **Seed the database** (optional)
   ```bash
   cd backend
   npm run seed
   ```

5. **Start the development servers**
   ```bash
   # From root directory
   npm run dev
   ```

   This will start:
   - Frontend on `http://localhost:3000`
   - Backend on `http://localhost:5000`

## 📊 API Endpoints

### About
- `GET /api/about` - Get about information
- `PUT /api/about` - Update about information

### Skills
- `GET /api/skills` - Get skills data
- `PUT /api/skills` - Update skills data

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get specific project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Contact
- `GET /api/contact` - Get all contact messages
- `POST /api/contact` - Submit contact form
- `PUT /api/contact/:id` - Update contact status
- `DELETE /api/contact/:id` - Delete contact message

## 🗄 Database Models

### About Model
```javascript
{
  title: String,
  paragraphs: [String],
  image: String,
  resumeUrl: String
}
```

### Skills Model
```javascript
{
  title: String,
  categories: [{
    title: String,
    skills: [{
      name: String,
      image: String
    }]
  }]
}
```

### Project Model
```javascript
{
  id: String,
  faviconSrc: String,
  faviconAlt: String,
  heading: String,
  description: String,
  githubLink: String,
  liveLink: String,
  previewSrc: String,
  previewAlt: String,
  featured: Boolean,
  order: Number
}
```

### Contact Model
```javascript
{
  name: String,
  email: String,
  message: String,
  status: String // 'new', 'read', 'replied'
}
```

## 🎨 Design Features

- **Custom Cursor**: Interactive cursor with hover effects
- **Smooth Animations**: AOS library for scroll animations
- **Dark/Light Mode**: Theme toggle functionality
- **Mobile Responsive**: Hamburger menu and responsive design
- **Interactive Elements**: Jello text effects, hover animations
- **Professional Layout**: Clean, modern design

## 🚀 Deployment

### Frontend (Netlify/Vercel)
```bash
cd frontend
npm run build
# Deploy the build folder
```

### Backend (Heroku/Railway/DigitalOcean)
```bash
cd backend
# Set environment variables
# Deploy with your preferred platform
```

### Full Stack (Single Server)
The backend is configured to serve the React build in production:
```bash
npm run build
cd backend
npm start
```

## 🔧 Development Scripts

```bash
# Install all dependencies
npm run install-deps

# Start both frontend and backend
npm run dev

# Start only backend
npm run server

# Start only frontend
npm run client

# Build frontend for production
npm run build

# Seed database with sample data
cd backend && npm run seed
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Dharmu Bhusal**
- Website: [dharmagat.com.np](https://dharmagat.com.np)
- GitHub: [@dharmub376](https://github.com/dharmub376)
- LinkedIn: [dharmub376](https://linkedin.com/in/dharmub376)

## 🙏 Acknowledgments

- Original design inspiration from modern portfolio websites
- AOS library for smooth animations
- React community for excellent documentation
- MongoDB for flexible data storage