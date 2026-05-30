package backend.controller;

import backend.dto.AnswerEvaluationRequest;
import backend.dto.InterviewRequest;
import backend.service.InterviewService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/interview")

public class InterviewController {

    private final InterviewService interviewService;

    public InterviewController(
            InterviewService interviewService
    ) {
        this.interviewService = interviewService;
    }

    @PostMapping("/generate")
    public String generateQuestion(
            @RequestBody InterviewRequest request
    ) {

        return interviewService.generateQuestion(
                request.getType()
        );
    }

    @PostMapping("/evaluate")
    public String evaluateAnswer(
            @RequestBody AnswerEvaluationRequest request
    ) {

        return interviewService.evaluateAnswer(
                request
        );
    }
}