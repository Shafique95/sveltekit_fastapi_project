from fastapi import APIRouter, HTTPException
from typing import List
from ..models.book import Book
from ..services.book_service import BookService

router = APIRouter(prefix="/api", tags=["books"])
book_service = BookService()

@router.get("/books", response_model=List[Book])
async def get_books():
    """Get all books"""
    return book_service.get_all_books()

@router.get("/books/{book_id}", response_model=Book)
async def get_book(book_id: int):
    """Get book by ID"""
    book = book_service.get_book_by_id(book_id)
    if not book:
        raise HTTPException(status_code=404, detail="Book not found")
    return book 