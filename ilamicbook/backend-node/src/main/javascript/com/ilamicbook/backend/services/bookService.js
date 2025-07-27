const Book = require('../models/book');

/**
 * Service layer for book operations
 */
class BookService {
    constructor() {
        // Mock data - in real app this would come from database
        this.books = [
            new Book(
                1,
                "The Great Gatsby",
                "F. Scott Fitzgerald",
                "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan."
            ),
            new Book(
                2,
                "To Kill a Mockingbird",
                "Harper Lee",
                "The story of young Scout Finch and her father Atticus in a racially divided Alabama town."
            ),
            new Book(
                3,
                "1984",
                "George Orwell",
                "A dystopian novel about totalitarianism and surveillance society."
            )
        ];
    }

    /**
     * Get all books
     */
    getAllBooks() {
        return this.books.map(book => book.toJSON());
    }

    /**
     * Get book by ID
     */
    getBookById(id) {
        const book = this.books.find(book => book.id === id);
        return book ? book.toJSON() : null;
    }

    /**
     * Create a new book
     */
    createBook(bookData) {
        const newBook = new Book(
            this.books.length + 1,
            bookData.title,
            bookData.author,
            bookData.description
        );
        this.books.push(newBook);
        return newBook.toJSON();
    }

    /**
     * Update a book
     */
    updateBook(id, bookData) {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            return null;
        }

        const updatedBook = new Book(
            id,
            bookData.title || this.books[bookIndex].title,
            bookData.author || this.books[bookIndex].author,
            bookData.description || this.books[bookIndex].description,
            this.books[bookIndex].createdAt,
            new Date()
        );

        this.books[bookIndex] = updatedBook;
        return updatedBook.toJSON();
    }

    /**
     * Delete a book
     */
    deleteBook(id) {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            return false;
        }

        this.books.splice(bookIndex, 1);
        return true;
    }
}

module.exports = BookService; 