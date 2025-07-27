# IlamicBook - Digital Library Platform

A modern digital library platform built with **FastAPI** (backend) and **SvelteKit** (frontend).

## 🏗️ Project Structure

```
ilamicbook/
├── backend/            # FastAPI Python backend
│   ├── main.py        # Main FastAPI application
│   ├── requirements.txt # Python dependencies
│   └── README.md      # Backend setup instructions
├── frontend/           # SvelteKit frontend
│   ├── src/           # Source code
│   ├── package.json   # Node.js dependencies
│   └── README.md      # Frontend setup instructions
└── README.md          # This file
```

## 🚀 Quick Start

### Backend Setup
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## 🌐 Access Your Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs

## 🎯 Features

### Frontend (SvelteKit)
- **Facebook-like UI** with login/signup flow
- **Component-based architecture** for easy learning
- **TypeScript support** for type safety
- **Tailwind CSS** for modern styling
- **Responsive design** for all devices

### Backend (FastAPI)
- **RESTful API** with automatic documentation
- **CORS support** for frontend communication
- **Health check endpoint** for monitoring
- **Book data endpoints** for the library

## 📚 Learning Focus

This project is structured for **learning SvelteKit** with:
- **Clean component structure** in `frontend/src/`
- **Feature-based organization** for scalability
- **TypeScript integration** for better development
- **Industry-standard patterns** without complexity

## 🔧 Development

### Frontend Development
```bash
cd frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Backend Development
```bash
cd backend
source venv/bin/activate
python main.py       # Start development server
```

## 📖 API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /api/books` - Get book recommendations
- `GET /docs` - Interactive API documentation

## 🎨 UI Components

The frontend uses a clean, component-based architecture:

- **UI Components**: Button, Input, Card
- **Auth Components**: LoginForm, SignupForm
- **Feature Pages**: AuthPage, DashboardPage

## 🚀 Next Steps

1. **Explore the frontend structure** in `frontend/src/`
2. **Understand the component hierarchy**
3. **Add new features** following the established patterns
4. **Connect to the backend API** for real data

## 📝 License

MIT License - feel free to use this project for learning and development! 