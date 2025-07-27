/**
 * Application configuration
 */
class AppConfig {
    constructor() {
        this.app = {
            name: 'IlamicBook API',
            version: '1.0.0',
            description: 'Node.js backend for IlamicBook'
        };

        this.server = {
            host: process.env.HOST || '0.0.0.0',
            port: process.env.PORT || 8000
        };

        this.cors = {
            origins: ['http://localhost:5173', 'http://127.0.0.1:5173'],
            credentials: true,
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            headers: ['Content-Type', 'Authorization']
        };

        this.logging = {
            level: process.env.LOG_LEVEL || 'INFO',
            format: '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        };

        this.api = {
            prefix: '/api',
            version: 'v1',
            title: 'IlamicBook API',
            description: 'Node.js backend for IlamicBook'
        };
    }

    /**
     * Get CORS configuration
     */
    getCorsConfig() {
        return {
            origin: this.cors.origins,
            credentials: this.cors.credentials,
            methods: this.cors.methods,
            allowedHeaders: this.cors.headers
        };
    }

    /**
     * Get server configuration
     */
    getServerConfig() {
        return {
            host: this.server.host,
            port: this.server.port
        };
    }

    /**
     * Get API configuration
     */
    getApiConfig() {
        return {
            prefix: this.api.prefix,
            version: this.api.version,
            title: this.api.title,
            description: this.api.description
        };
    }
}

module.exports = AppConfig; 