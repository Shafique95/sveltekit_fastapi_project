# IlamicBook Spring Boot Backend

A Spring Boot backend for IlamicBook with RESTful API endpoints using **Gradle**.

## 🚀 Quick Start

### Prerequisites
- Java 17 or higher
- Gradle 8.5 or higher (or use the included wrapper)

### Setup
```bash
# Using Gradle wrapper (recommended)
./gradlew bootRun

# Or if you have Gradle installed globally
gradle bootRun
```

The server will start on http://localhost:8000

## 📖 API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /api/books` - Get book recommendations
- `GET /actuator/health` - Spring Boot Actuator health check

## 🛠️ Development

```bash
# Run in development mode
./gradlew bootRun

# Build the project
./gradlew build

# Run the JAR file
java -jar build/libs/ilamicbook-backend-1.0.0.jar

# Run tests
./gradlew test

# Clean build
./gradlew clean build
```

## 📦 Dependencies

- **Spring Boot Web**: RESTful web services
- **Spring Boot Actuator**: Monitoring and metrics
- **Spring Boot Test**: Testing support

## 🔧 Configuration

The application is configured in `src/main/resources/application.properties`:
- Server runs on port 8000
- CORS enabled for SvelteKit frontend
- Actuator endpoints exposed

## 🌐 CORS

CORS is configured to allow requests from:
- http://localhost:5173 (SvelteKit dev server)
- http://127.0.0.1:5173

## 📊 Monitoring

Spring Boot Actuator provides monitoring endpoints:
- `/actuator/health` - Application health
- `/actuator/info` - Application information

## 🎯 Gradle Benefits

- **Faster builds** compared to Maven
- **Better dependency management**
- **More flexible** build configuration
- **Modern build tool** with excellent IDE support 