const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(helmet()); // Security headers
app.use(morgan('combined')); // Logging
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
app.use(cors(corsOptions));

// Mock books data
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan."
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "The story of young Scout Finch and her father Atticus in a racially divided Alabama town."
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel about totalitarianism and surveillance society."
  }
];

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to IlamicBook API (Node.js)',
    version: '1.0.0'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'ilamicbook-node-api',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/books', (req, res) => {
  res.json(books);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} not found`
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 IlamicBook Node.js server running on http://localhost:${PORT}`);
  console.log(`📚 API endpoints:`);
  console.log(`   GET  / - Welcome message`);
  console.log(`   GET  /health - Health check`);
  console.log(`   GET  /api/books - Get books`);
});

module.exports = app; 