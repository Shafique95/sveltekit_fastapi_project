from .config.app_config import create_app
from fastapi import Request
import time

app = create_app()

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "message": "Welcome to IlamicBook API (FastAPI)",
        "version": "1.0.0"
    }

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "ilamicbook-fastapi",
        "timestamp": time.time()
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 