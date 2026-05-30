package backend.controller;

import backend.service.OpenAIService;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/ai")
public class AIController {

    private final OpenAIService openAIService;

    public AIController(OpenAIService openAIService) {

        this.openAIService = openAIService;
    }

    @PostMapping("/ask")
    public Map<String, String> askAI(
            @RequestBody Map<String, String> body
    ) {

        String prompt = body.get("prompt");

        String response =
                openAIService.analyzeResume(prompt);

        return Map.of(
                "response",
                response
        );
    }
}