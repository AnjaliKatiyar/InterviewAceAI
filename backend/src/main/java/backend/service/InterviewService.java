package backend.service;

import backend.dto.AnswerEvaluationRequest;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Map;

@Service

public class InterviewService {

    @Value("${openrouter.api.key}")
    private String apiKey;

    private final WebClient webClient;

    public InterviewService(WebClient.Builder builder) {

        this.webClient = builder
                .baseUrl("https://openrouter.ai")
                .build();
    }

    public String generateQuestion(String type) {

        try {

            String prompt = """
Generate ONE professional interview question for:
""" + type;

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

                    .uri("/api/v1/chat/completions")

                    .header("Authorization", "Bearer " + apiKey)

                    .header("HTTP-Referer", "http://localhost:3000")

                    .header("X-Title", "InterviewAceAI")

                    .contentType(MediaType.APPLICATION_JSON)

                    .bodyValue(requestBody)

                    .retrieve()

                    .bodyToMono(String.class)

                    .block();

            ObjectMapper mapper = new ObjectMapper();

            JsonNode root = mapper.readTree(response);

            return root
                    .path("choices")
                    .get(0)
                    .path("message")
                    .path("content")
                    .asText();

        } catch (Exception e) {

            e.printStackTrace();

            return "Error generating question: " + e.getMessage();
        }
    }

    public String evaluateAnswer(
            AnswerEvaluationRequest requestData
    ) {

        try {

            String prompt = """
Evaluate this interview answer.

Question:
""" + requestData.getQuestion() +

                    """

Answer:
""" + requestData.getAnswer() +

                    """

Provide:
1. Score out of 10
2. Strengths
3. Weaknesses
4. Improvements
""";

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

                    .uri("/api/v1/chat/completions")

                    .header("Authorization", "Bearer " + apiKey)

                    .header("HTTP-Referer", "http://localhost:3000")

                    .header("X-Title", "InterviewAceAI")

                    .contentType(MediaType.APPLICATION_JSON)

                    .bodyValue(requestBody)

                    .retrieve()

                    .bodyToMono(String.class)

                    .block();

            ObjectMapper mapper = new ObjectMapper();

            JsonNode root = mapper.readTree(response);

            return root
                    .path("choices")
                    .get(0)
                    .path("message")
                    .path("content")
                    .asText();

        } catch (Exception e) {

            e.printStackTrace();

            return "Error evaluating answer: " + e.getMessage();
        }
    }
}