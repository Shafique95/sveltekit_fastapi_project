package main

import (
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// Book represents a book in the library
type Book struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Author      string `json:"author"`
	Description string `json:"description"`
}

// HealthResponse represents the health check response
type HealthResponse struct {
	Status  string `json:"status"`
	Service string `json:"service"`
	Time    string `json:"time"`
}

func main() {
	// Create a new Gin router
	r := gin.Default()

	// Configure CORS
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5173", "http://127.0.0.1:5173"}
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Accept", "Authorization"}
	config.AllowCredentials = true
	r.Use(cors.New(config))

	// Mock books data
	books := []Book{
		{
			ID:          1,
			Title:       "The Great Gatsby",
			Author:      "F. Scott Fitzgerald",
			Description: "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
		},
		{
			ID:          2,
			Title:       "To Kill a Mockingbird",
			Author:      "Harper Lee",
			Description: "The story of young Scout Finch and her father Atticus in a racially divided Alabama town.",
		},
		{
			ID:          3,
			Title:       "1984",
			Author:      "George Orwell",
			Description: "A dystopian novel about totalitarianism and surveillance society.",
		},
	}

	// Routes
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Welcome to IlamicBook API (Go)",
			"version": "1.0.0",
		})
	})

	r.GET("/health", func(c *gin.Context) {
		response := HealthResponse{
			Status:  "healthy",
			Service: "ilamicbook-go-api",
			Time:    time.Now().Format(time.RFC3339),
		}
		c.JSON(http.StatusOK, response)
	})

	r.GET("/api/books", func(c *gin.Context) {
		c.JSON(http.StatusOK, books)
	})

	// Start the server
	r.Run(":8000")
}
