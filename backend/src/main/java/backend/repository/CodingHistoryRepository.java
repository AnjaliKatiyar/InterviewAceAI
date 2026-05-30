package backend.repository;

import backend.model.CodingHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CodingHistoryRepository
        extends JpaRepository<CodingHistory, Long> {
}