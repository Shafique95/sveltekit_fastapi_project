const BookService = require('../services/bookService');

/**
 * Controller for handling book-related HTTP requests
 */
class BookController {
    constructor() {
        this.bookService = new BookService();
    }

    /**
     * Get all books
     */
    getAllBooks(req, res) {
        try {
            const books = this.bookService.getAllBooks();
            res.json(books);
        } catch (error) {
            res.status(500).json({
                error: 'Internal server error',
                message: error.message
            });
        }
    }

    /**
     * Get book by ID
     */
    getBookById(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: 'Invalid book ID'
                });
            }

            const book = this.bookService.getBookById(id);
            if (!book) {
                return res.status(404).json({
                    error: 'Book not found'
                });
            }

            res.json(book);
        } catch (error) {
            res.status(500).json({
                error: 'Internal server error',
                message: error.message
            });
        }
    }

    /**
     * Create a new book
     */
    createBook(req, res) {
        try {
            const { title, author, description } = req.body;

            if (!title || !author || !description) {
                return res.status(400).json({
                    error: 'Missing required fields: title, author, description'
                });
            }

            const newBook = this.bookService.createBook({ title, author, description });
            res.status(201).json(newBook);
        } catch (error) {
            res.status(500).json({
                error: 'Internal server error',
                message: error.message
            });
        }
    }

    /**
     * Update a book
     */
    updateBook(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: 'Invalid book ID'
                });
            }

            const updatedBook = this.bookService.updateBook(id, req.body);
            if (!updatedBook) {
                return res.status(404).json({
                    error: 'Book not found'
                });
            }

            res.json(updatedBook);
        } catch (error) {
            res.status(500).json({
                error: 'Internal server error',
                message: error.message
            });
        }
    }

    /**
     * Delete a book
     */
    deleteBook(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    error: 'Invalid book ID'
                });
            }

            const deleted = this.bookService.deleteBook(id);
            if (!deleted) {
                return res.status(404).json({
                    error: 'Book not found'
                });
            }

            res.status(204).send();
        } catch (error) {
            res.status(500).json({
                error: 'Internal server error',
                message: error.message
            });
        }
    }
}

module.exports = BookController; 