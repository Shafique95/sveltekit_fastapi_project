from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ..controllers.book_controller import router as book_router

def create_app() -> FastAPI:
    """Create and configure FastAPI application"""
    app = FastAPI(
        title="IlamicBook API",
        description="FastAPI backend for IlamicBook",
        version="1.0.0"
    )
    
    # CORS configuration
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    
    # Include routers
    app.include_router(book_router)
    
    return app 