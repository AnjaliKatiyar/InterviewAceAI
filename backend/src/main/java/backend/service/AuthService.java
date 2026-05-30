package backend.service;

import backend.dto.AuthResponse;
import backend.dto.LoginRequest;
import backend.dto.RegisterRequest;
import backend.model.User;
import backend.repository.UserRepository;
import backend.security.JwtService;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    // Constructor Injection
    public AuthService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService
    ) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    // =========================
    // REGISTER
    // =========================
    public String register(RegisterRequest request) {

        // Check existing email
        if (userRepository
                .findByEmail(request.getEmail())
                .isPresent()) {

            throw new RuntimeException(
                    "Email already registered"
            );
        }

        // Create new user
        User user = new User();

        user.setName(request.getName());

        user.setEmail(request.getEmail());

        // Encrypt password
        user.setPassword(
                passwordEncoder.encode(
                        request.getPassword()
                )
        );

        // Save user
        userRepository.save(user);

        return "User Registered Successfully";
    }

    // =========================
    // LOGIN
    // =========================
    public AuthResponse login(
            LoginRequest request
    ) {

        // Find user
        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(
                        () -> new RuntimeException(
                                "User not found"
                        )
                );

        // Check password
        boolean passwordMatch =
                passwordEncoder.matches(
                        request.getPassword(),
                        user.getPassword()
                );

        if (!passwordMatch) {

            throw new RuntimeException(
                    "Invalid Password"
            );
        }

        // Generate JWT Token
        String token =
                jwtService.generateToken(
                        user.getEmail()
                );

        // Return token response
        return new AuthResponse(token);
    }
}