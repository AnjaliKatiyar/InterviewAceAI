package backend.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Map;

@Service
public class OpenAIService {

    @Value("${openrouter.api.key}")
    private String apiKey;

    private final WebClient webClient;

    public OpenAIService(WebClient.Builder builder) {

        this.webClient = builder
                .baseUrl("https://openrouter.ai/api/v1")
                .build();
    }

    public String analyzeResume(String resumeText) {

        try {

            String prompt = """
                    Analyze this resume and provide:

                    1. ATS Score out of 100
                    2. Strengths
                    3. Missing Skills
                    4. Improvements
                    5. Suggested Job Roles

                    Resume:
                    """ + resumeText;

            Map<String, Object> requestBody = Map.of(
                    "model", "openai/gpt-3.5-turbo",
                    "messages", List.of(
                            Map.of(
                                    "role", "user",
                                    "content", prompt
                            )
                    )
            );

            String response = webClient.post()
                    .uri("/chat/completions")
                    .header("Authorization", "Bearer " + apiKey)
                    .contentType(MediaType.APPLICATION_JSON)
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            System.out.println(response);

            ObjectMapper mapper = new ObjectMapper();

            JsonNode root = mapper.readTree(response);

            return root.path("choices")
                    .get(0)
                    .path("message")
                    .path("content")
                    .asText();

        } catch (Exception e) {

            e.printStackTrace();

            return "API Error: " + e.getMessage();
        }
    }
}