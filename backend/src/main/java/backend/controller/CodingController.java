package backend.controller;

import backend.dto.CodeEvaluationRequest;
import backend.service.CodingService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/coding")

public class CodingController {

    private final CodingService codingService;

    public CodingController(
            CodingService codingService
    ) {
        this.codingService = codingService;
    }

    @PostMapping("/evaluate")
    public String evaluateCode(
            @RequestBody CodeEvaluationRequest request
    ) {

        return codingService.evaluateCode(request);
    }
}