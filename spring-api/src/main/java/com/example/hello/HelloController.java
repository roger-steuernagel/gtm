package com.example.hello;

import java.util.Map;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @CrossOrigin(origins = "*")
    @GetMapping("/api/hello")
    public Map<String, String> hello() {
        return Map.of("message", "HELLO WORLD");
    }
}
