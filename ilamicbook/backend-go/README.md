# IlamicBook Go Backend

A Go backend for IlamicBook using the Gin web framework.

## 🚀 Quick Start

### Prerequisites
- Go 1.21 or higher

### Setup
```bash
# Install dependencies
go mod tidy

# Run the server
go run main.go
```

The server will start on http://localhost:8000

## 📖 API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /api/books` - Get book recommendations

## 🛠️ Development

```bash
# Run in development mode
go run main.go

# Build for production
go build -o ilamicbook-backend main.go

# Run the binary
./ilamicbook-backend
```

## 📦 Dependencies

- **Gin**: Web framework
- **CORS**: Cross-origin resource sharing support

## 🔧 Configuration

The server runs on port 8000 by default. You can change this by modifying the `r.Run(":8000")` line in `main.go`.

## 🌐 CORS

CORS is configured to allow requests from:
- http://localhost:5173 (SvelteKit dev server)
- http://127.0.0.1:5173 