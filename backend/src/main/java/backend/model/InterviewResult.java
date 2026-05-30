package backend.model;

import jakarta.persistence.*;

@Entity
public class InterviewResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int score;

    private String feedback;

    // getters setters
}