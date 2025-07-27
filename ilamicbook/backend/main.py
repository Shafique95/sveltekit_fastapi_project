from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import uvicorn

app = FastAPI(
    title="IlamicBook API",
    description="Backend API for IlamicBook application",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],  # SvelteKit default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to IlamicBook API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "ilamicbook-api"}

@app.get("/api/books")
async def get_books():
    # Mock data for now
    books = [
        {"id": 1, "title": "Sample Book 1", "author": "Author 1", "description": "A sample book description"},
        {"id": 2, "title": "Sample Book 2", "author": "Author 2", "description": "Another sample book description"},
    ]
    return books

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 