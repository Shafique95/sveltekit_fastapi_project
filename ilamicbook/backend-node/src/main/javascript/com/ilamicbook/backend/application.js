const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const AppConfig = require('./config/appConfig');
const BookController = require('./controllers/bookController');

/**
 * Main application class
 */
class Application {
    constructor() {
        this.app = express();
        this.config = new AppConfig();
        this.bookController = new BookController();
        
        this.setupMiddleware();
        this.setupRoutes();
        this.setupErrorHandling();
    }

    /**
     * Setup middleware
     */
    setupMiddleware() {
        // Security middleware
        this.app.use(helmet());
        
        // Logging middleware
        this.app.use(morgan('combined'));
        
        // Body parsing middleware
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        
        // CORS middleware
        this.app.use(cors(this.config.getCorsConfig()));
    }

    /**
     * Setup routes
     */
    setupRoutes() {
        // Root endpoint
        this.app.get('/', (req, res) => {
            res.json({
                message: 'Welcome to IlamicBook API (Node.js)',
                version: '1.0.0'
            });
        });

        // Health check endpoint
        this.app.get('/health', (req, res) => {
            res.json({
                status: 'healthy',
                service: 'ilamicbook-node-api',
                timestamp: new Date().toISOString()
            });
        });

        // API routes
        const apiPrefix = this.config.getApiConfig().prefix;
        
        // Book routes
        this.app.get(`${apiPrefix}/books`, (req, res) => {
            this.bookController.getAllBooks(req, res);
        });

        this.app.get(`${apiPrefix}/books/:id`, (req, res) => {
            this.bookController.getBookById(req, res);
        });

        this.app.post(`${apiPrefix}/books`, (req, res) => {
            this.bookController.createBook(req, res);
        });

        this.app.put(`${apiPrefix}/books/:id`, (req, res) => {
            this.bookController.updateBook(req, res);
        });

        this.app.delete(`${apiPrefix}/books/:id`, (req, res) => {
            this.bookController.deleteBook(req, res);
        });
    }

    /**
     * Setup error handling
     */
    setupErrorHandling() {
        // 404 handler
        this.app.use((req, res) => {
            res.status(404).json({
                error: 'Not Found',
                message: `Route ${req.method} ${req.path} not found`
            });
        });

        // Global error handler
        this.app.use((err, req, res, next) => {
            console.error(err.stack);
            res.status(500).json({
                error: 'Something went wrong!',
                message: err.message
            });
        });
    }

    /**
     * Start the server
     */
    start() {
        const serverConfig = this.config.getServerConfig();
        const { host, port } = serverConfig;

        this.app.listen(port, host, () => {
            console.log(`🚀 IlamicBook Node.js server running on http://${host}:${port}`);
            console.log(`📚 API endpoints:`);
            console.log(`   GET  / - Welcome message`);
            console.log(`   GET  /health - Health check`);
            console.log(`   GET  ${this.config.getApiConfig().prefix}/books - Get books`);
            console.log(`   POST ${this.config.getApiConfig().prefix}/books - Create book`);
            console.log(`   PUT  ${this.config.getApiConfig().prefix}/books/:id - Update book`);
            console.log(`   DELETE ${this.config.getApiConfig().prefix}/books/:id - Delete book`);
        });
    }
}

module.exports = Application; 