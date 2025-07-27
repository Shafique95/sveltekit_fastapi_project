# IlamicBook Backend

FastAPI backend for the IlamicBook application.

## Setup

1. Activate the virtual environment:
```bash
source venv/bin/activate  # On macOS/Linux
# or
venv\Scripts\activate  # On Windows
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running the Application

1. Start the development server:
```bash
python main.py
```

2. Or using uvicorn directly:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at:
- API: http://localhost:8000
- Interactive docs: http://localhost:8000/docs
- Alternative docs: http://localhost:8000/redoc

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /api/books` - Get list of books (mock data) 