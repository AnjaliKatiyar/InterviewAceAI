package backend.controller;

import backend.repository.CodingHistoryRepository;
import backend.repository.InterviewHistoryRepository;
import backend.repository.ResumeHistoryRepository;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/analytics")
@CrossOrigin("*")

public class AnalyticsController {

    private final ResumeHistoryRepository resumeRepo;
    private final InterviewHistoryRepository interviewRepo;
    private final CodingHistoryRepository codingRepo;

    public AnalyticsController(
            ResumeHistoryRepository resumeRepo,
            InterviewHistoryRepository interviewRepo,
            CodingHistoryRepository codingRepo
    ) {
        this.resumeRepo = resumeRepo;
        this.interviewRepo = interviewRepo;
        this.codingRepo = codingRepo;
    }

    @GetMapping
    public Map<String, Object> getAnalytics() {

        Map<String, Object> data = new HashMap<>();

        data.put(
                "resumeCount",
                resumeRepo.count()
        );

        data.put(
                "interviewCount",
                interviewRepo.count()
        );

        data.put(
                "codingCount",
                codingRepo.count()
        );

        return data;
    }
}