package models

import "time"

// Book represents a book in the library
type Book struct {
	ID          int       `json:"id"`
	Title       string    `json:"title"`
	Author      string    `json:"author"`
	Description string    `json:"description"`
	CreatedAt   time.Time `json:"created_at,omitempty"`
	UpdatedAt   time.Time `json:"updated_at,omitempty"`
}

// BookResponse represents the response structure for books
type BookResponse struct {
	Books []Book `json:"books"`
	Total int    `json:"total"`
}
