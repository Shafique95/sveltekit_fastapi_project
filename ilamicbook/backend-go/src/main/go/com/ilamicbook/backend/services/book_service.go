package services

import (
	"time"

	"com/ilamicbook/backend/models"
)

// BookService handles business logic for books
type BookService struct {
	books []models.Book
}

// NewBookService creates a new BookService instance
func NewBookService() *BookService {
	now := time.Now()
	books := []models.Book{
		{
			ID:          1,
			Title:       "The Great Gatsby",
			Author:      "F. Scott Fitzgerald",
			Description: "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
			CreatedAt:   now,
			UpdatedAt:   now,
		},
		{
			ID:          2,
			Title:       "To Kill a Mockingbird",
			Author:      "Harper Lee",
			Description: "The story of young Scout Finch and her father Atticus in a racially divided Alabama town.",
			CreatedAt:   now,
			UpdatedAt:   now,
		},
		{
			ID:          3,
			Title:       "1984",
			Author:      "George Orwell",
			Description: "A dystopian novel about totalitarianism and surveillance society.",
			CreatedAt:   now,
			UpdatedAt:   now,
		},
	}

	return &BookService{
		books: books,
	}
}

// GetAllBooks returns all books
func (s *BookService) GetAllBooks() []models.Book {
	return s.books
}

// GetBookByID returns a book by ID
func (s *BookService) GetBookByID(id int) *models.Book {
	for _, book := range s.books {
		if book.ID == id {
			return &book
		}
	}
	return nil
}
