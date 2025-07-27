from typing import List
from ..models.book import Book

class BookService:
    """Service layer for book operations"""
    
    def __init__(self):
        # Mock data - in real app this would come from database
        self.books = [
            Book(
                id=1,
                title="The Great Gatsby",
                author="F. Scott Fitzgerald",
                description="A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan."
            ),
            Book(
                id=2,
                title="To Kill a Mockingbird",
                author="Harper Lee",
                description="The story of young Scout Finch and her father Atticus in a racially divided Alabama town."
            ),
            Book(
                id=3,
                title="1984",
                author="George Orwell",
                description="A dystopian novel about totalitarianism and surveillance society."
            )
        ]
    
    def get_all_books(self) -> List[Book]:
        """Get all books"""
        return self.books
    
    def get_book_by_id(self, book_id: int) -> Book:
        """Get book by ID"""
        for book in self.books:
            if book.id == book_id:
                return book
        return None 