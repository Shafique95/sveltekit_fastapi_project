package main

import (
	"fmt"
	"net/http"
	"time"

	"com/ilamicbook/backend/config"
	"com/ilamicbook/backend/controllers"
	"com/ilamicbook/backend/services"

	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize configuration
	appConfig := config.NewAppConfig()

	// Initialize services
	bookService := services.NewBookService()

	// Initialize controllers
	bookController := controllers.NewBookController(bookService)

	// Create Gin router
	r := gin.Default()

	// Setup CORS
	r.Use(config.SetupCORS())

	// Root endpoint
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Welcome to IlamicBook API (Go)",
			"version": "1.0.0",
		})
	})

	// Health check endpoint
	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status":    "healthy",
			"service":   "ilamicbook-go-api",
			"timestamp": time.Now().Format(time.RFC3339),
		})
	})

	// API routes
	api := r.Group("/api")
	{
		api.GET("/books", bookController.GetBooks)
		api.GET("/books/:id", bookController.GetBook)
	}

	// Start server
	addr := fmt.Sprintf("%s:%s", appConfig.Host, appConfig.Port)
	fmt.Printf("🚀 IlamicBook Go server running on http://%s\n", addr)
	fmt.Printf("📚 API endpoints:\n")
	fmt.Printf("   GET  / - Welcome message\n")
	fmt.Printf("   GET  /health - Health check\n")
	fmt.Printf("   GET  /api/books - Get books\n")

	r.Run(addr)
}
