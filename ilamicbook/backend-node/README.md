# IlamicBook Node.js Backend

A Node.js backend for IlamicBook with Express.js and RESTful API endpoints.

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Or start production server
npm start
```

The server will start on http://localhost:8000

## 📖 API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /api/books` - Get book recommendations

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run in development mode (with auto-reload)
npm run dev

# Run in production mode
npm start

# Run tests (when implemented)
npm test
```

## 📦 Dependencies

- **Express.js**: Web framework for Node.js
- **CORS**: Cross-Origin Resource Sharing middleware
- **Helmet**: Security middleware for Express
- **Morgan**: HTTP request logger middleware
- **Nodemon**: Development server with auto-reload

## 🔧 Configuration

The server is configured in `server.js`:
- Runs on port 8000 (configurable via PORT environment variable)
- CORS enabled for SvelteKit frontend
- Security headers via Helmet
- Request logging via Morgan

## 🌐 CORS

CORS is configured to allow requests from:
- http://localhost:5173 (SvelteKit dev server)
- http://127.0.0.1:5173

## 🛡️ Security

- **Helmet.js**: Adds various HTTP headers for security
- **CORS**: Properly configured for frontend communication
- **Input validation**: Ready for implementation
- **Error handling**: Comprehensive error middleware

## 📊 Features

- **RESTful API**: Clean, standard REST endpoints
- **Middleware**: Security, logging, and CORS
- **Error handling**: Proper error responses
- **Development friendly**: Hot reload with nodemon
- **Production ready**: Optimized for deployment

## 🎯 Node.js Benefits

- **Fast development** with npm ecosystem
- **Large community** and package ecosystem
- **JavaScript everywhere** (frontend + backend)
- **Easy deployment** to various platforms
- **Great tooling** and development experience 