package backend.repository;

import backend.model.ResumeAnalysis;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ResumeAnalysisRepository
        extends JpaRepository<ResumeAnalysis, Long> {
}