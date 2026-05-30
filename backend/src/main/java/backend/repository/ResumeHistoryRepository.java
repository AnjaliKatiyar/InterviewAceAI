package backend.repository;

import backend.model.ResumeHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResumeHistoryRepository
        extends JpaRepository<ResumeHistory, Long> {
}