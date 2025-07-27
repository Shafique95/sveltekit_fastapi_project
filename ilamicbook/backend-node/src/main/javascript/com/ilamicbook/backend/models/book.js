/**
 * Book model representing a book in the library
 */
class Book {
    constructor(id, title, author, description, createdAt = new Date(), updatedAt = new Date()) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    /**
     * Convert to JSON object
     */
    toJSON() {
        return {
            id: this.id,
            title: this.title,
            author: this.author,
            description: this.description,
            created_at: this.createdAt,
            updated_at: this.updatedAt
        };
    }

    /**
     * Create Book from JSON object
     */
    static fromJSON(json) {
        return new Book(
            json.id,
            json.title,
            json.author,
            json.description,
            new Date(json.created_at),
            new Date(json.updated_at)
        );
    }
}

module.exports = Book; 