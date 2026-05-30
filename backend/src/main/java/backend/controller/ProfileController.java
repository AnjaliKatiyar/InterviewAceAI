package backend.controller;

import backend.model.UserProfile;
import backend.repository.UserProfileRepository;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin("*")

public class ProfileController {

    private final UserProfileRepository repository;

    public ProfileController(
            UserProfileRepository repository
    ) {
        this.repository = repository;
    }

    @GetMapping
    public UserProfile getProfile() {

        if(repository.findAll().isEmpty()) {
            return null;
        }

        return repository.findAll().get(0);
    }

    @PostMapping
    public UserProfile saveProfile(
            @RequestBody UserProfile profile
    ) {

        return repository.save(profile);
    }
}