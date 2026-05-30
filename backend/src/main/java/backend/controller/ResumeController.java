package backend.controller;

import backend.service.OpenAIService;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/resume")

public class ResumeController {

    private final OpenAIService openAIService;

    public ResumeController(
            OpenAIService openAIService
    ) {
        this.openAIService = openAIService;
    }

    @PostMapping("/analyze")
    public ResponseEntity<String> analyzeResume(
            @RequestParam("file") MultipartFile file
    ) throws IOException {

        System.out.println("FILE RECEIVED: " + file.getOriginalFilename());

        PDDocument document =
                PDDocument.load(file.getInputStream());

        PDFTextStripper stripper =
                new PDFTextStripper();

        String resumeText =
                stripper.getText(document);

        document.close();

        String aiResponse =
                openAIService.analyzeResume(
                        resumeText
                );

        return ResponseEntity.ok(aiResponse);
    }
}