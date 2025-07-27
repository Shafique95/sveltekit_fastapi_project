package config

import (
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// AppConfig holds application configuration
type AppConfig struct {
	Port string
	Host string
}

// NewAppConfig creates a new AppConfig instance
func NewAppConfig() *AppConfig {
	return &AppConfig{
		Port: "8000",
		Host: "0.0.0.0",
	}
}

// SetupCORS configures CORS middleware
func SetupCORS() gin.HandlerFunc {
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5173", "http://127.0.0.1:5173"}
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Accept", "Authorization"}
	config.AllowCredentials = true
	config.MaxAge = 12 * time.Hour

	return cors.New(config)
}
