# IlamicBook - Digital Library Platform

A modern digital library platform with **multiple backend options** and a beautiful SvelteKit frontend.

## 🚀 Quick Start

Choose your preferred backend:

#### 1. FastAPI Backend (Python)
```bash
cd backend-fastapi
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

#### 2. Go Backend
```bash
cd backend-go
go mod tidy
go run main.go
```

#### 3. Spring Boot Backend (Java/Gradle)
```bash
cd backend-spring
./gradlew bootRun
```

#### 4. Node.js Backend
```bash
cd backend-node
npm install
npm run dev
```

#### Frontend (SvelteKit)
```bash
cd frontend
npm install
npm run dev
```

Visit http://localhost:5173 to see the application!

## 🏗️ Project Structure

```
ilamicbook/
├── backend-fastapi/     # FastAPI Python backend
│   ├── main.py         # Main FastAPI application
│   ├── requirements.txt # Python dependencies
│   └── README.md       # Backend setup instructions
├── backend-go/          # Go backend with Gin
│   ├── main.go         # Main Go application
│   ├── go.mod          # Go module file
│   └── README.md       # Go backend setup
├── backend-spring/      # Spring Boot Java backend (Gradle)
│   ├── src/            # Java source code
│   ├── build.gradle    # Gradle configuration
│   └── README.md       # Spring Boot setup
├── backend-node/        # Node.js backend with Express
│   ├── server.js       # Main Express application
│   ├── package.json    # Node.js dependencies
│   └── README.md       # Node.js backend setup
├── frontend/            # SvelteKit frontend
│   ├── src/            # Source code
│   ├── package.json    # Node.js dependencies
│   └── README.md       # Frontend setup instructions
└── README.md           # This file
```

## 🌐 Access Your Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs (FastAPI only)

## 🎯 Features

### Frontend (SvelteKit)
- **Facebook-like UI** with login/signup flow
- **Component-based architecture** for easy learning
- **TypeScript support** for type safety
- **Tailwind CSS** for modern styling
- **Responsive design** for all devices

### Backend Options

#### FastAPI (Python)
- **RESTful API** with automatic documentation
- **CORS support** for frontend communication
- **Health check endpoint** for monitoring
- **Book data endpoints** for the library

#### Go (Gin)
- **High-performance** web framework
- **Simple and fast** development
- **Built-in CORS** support
- **Lightweight** and efficient

#### Spring Boot (Java/Gradle)
- **Enterprise-grade** framework
- **Rich ecosystem** and tooling
- **Actuator** for monitoring
- **Production-ready** features

#### Node.js (Express)
- **JavaScript everywhere** (frontend + backend)
- **Fast development** with npm ecosystem
- **Large community** and package ecosystem
- **Easy deployment** to various platforms

## 📚 Learning Focus

This project is structured for **learning SvelteKit** with multiple backend options:
- **Clean component structure** in `frontend/src/`
- **Feature-based organization** for scalability
- **TypeScript integration** for better development
- **Industry-standard patterns** without complexity
- **Multiple backend technologies** to compare

## 🔧 Development

### Frontend Development
```bash
cd frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Backend Development

#### FastAPI
```bash
cd backend-fastapi
source venv/bin/activate
uvicorn main:app --reload  # Start development server
```

#### Go
```bash
cd backend-go
go run main.go       # Start development server
```

#### Spring Boot
```bash
cd backend-spring
./gradlew bootRun  # Start development server
```

#### Node.js
```bash
cd backend-node
npm run dev         # Start development server
```

## 📖 API Endpoints

All backends provide the same endpoints:
- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /api/books` - Get book recommendations

## 🎨 UI Components

The frontend uses a clean, component-based architecture:

- **UI Components**: Button, Input, Card
- **Auth Components**: LoginForm, SignupForm
- **Feature Pages**: AuthPage, DashboardPage

## 🚀 Next Steps

1. **Choose a backend** that interests you
2. **Explore the frontend structure** in `frontend/src/`
3. **Understand the component hierarchy**
4. **Add new features** following the established patterns
5. **Try different backends** to compare technologies

## 📝 License

MIT License - feel free to use this project for learning and development! 