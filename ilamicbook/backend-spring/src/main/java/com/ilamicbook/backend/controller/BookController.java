package com.ilamicbook.backend.controller;

import com.ilamicbook.backend.model.Book;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:5173"})
public class BookController {

    private final List<Book> books = Arrays.asList(
        new Book(1, "The Great Gatsby", "F. Scott Fitzgerald", 
                "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan."),
        new Book(2, "To Kill a Mockingbird", "Harper Lee", 
                "The story of young Scout Finch and her father Atticus in a racially divided Alabama town."),
        new Book(3, "1984", "George Orwell", 
                "A dystopian novel about totalitarianism and surveillance society.")
    );

    @GetMapping("/")
    public Map<String, Object> welcome() {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Welcome to IlamicBook API (Spring Boot)");
        response.put("version", "1.0.0");
        return response;
    }

    @GetMapping("/health")
    public Map<String, Object> health() {
        Map<String, Object> response = new HashMap<>();
        response.put("status", "healthy");
        response.put("service", "ilamicbook-spring-api");
        response.put("timestamp", System.currentTimeMillis());
        return response;
    }

    @GetMapping("/api/books")
    public List<Book> getBooks() {
        return books;
    }
} 