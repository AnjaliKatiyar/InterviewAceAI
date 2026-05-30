package backend.service;

import backend.repository.ResumeAnalysisRepository;
import backend.repository.InterviewHistoryRepository;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service

public class AnalyticsService {

    private final ResumeAnalysisRepository
            resumeRepository;

    private final InterviewHistoryRepository
            interviewRepository;

    public AnalyticsService(
            ResumeAnalysisRepository resumeRepository,
            InterviewHistoryRepository interviewRepository
    ) {

        this.resumeRepository =
                resumeRepository;

        this.interviewRepository =
                interviewRepository;
    }

    public Map<String, Object> getAnalytics() {

        Map<String, Object> data =
                new HashMap<>();

        data.put(
                "resumeCount",
                resumeRepository.count()
        );

        data.put(
                "totalInterviews",
                interviewRepository.count()
        );

        data.put(
                "averageScore",
                85
        );

        data.put(
                "codingStreak",
                12
        );

        return data;
    }
}