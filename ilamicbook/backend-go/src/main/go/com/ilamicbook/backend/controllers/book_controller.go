package controllers

import (
	"net/http"
	"strconv"

	"com/ilamicbook/backend/services"

	"github.com/gin-gonic/gin"
)

// BookController handles HTTP requests for books
type BookController struct {
	bookService *services.BookService
}

// NewBookController creates a new BookController instance
func NewBookController(bookService *services.BookService) *BookController {
	return &BookController{
		bookService: bookService,
	}
}

// GetBooks returns all books
func (c *BookController) GetBooks(ctx *gin.Context) {
	books := c.bookService.GetAllBooks()
	ctx.JSON(http.StatusOK, books)
}

// GetBook returns a book by ID
func (c *BookController) GetBook(ctx *gin.Context) {
	idStr := ctx.Param("id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid book ID"})
		return
	}

	book := c.bookService.GetBookByID(id)
	if book == nil {
		ctx.JSON(http.StatusNotFound, gin.H{"error": "Book not found"})
		return
	}

	ctx.JSON(http.StatusOK, book)
}
