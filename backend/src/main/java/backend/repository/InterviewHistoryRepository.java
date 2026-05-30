package backend.repository;

import backend.model.InterviewResult;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterviewHistoryRepository
        extends JpaRepository<InterviewResult, Long> {

}