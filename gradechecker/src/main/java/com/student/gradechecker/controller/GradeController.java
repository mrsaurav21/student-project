package com.student.gradechecker.controller;

import com.student.gradechecker.dto.GradeRequest;
import com.student.gradechecker.dto.GradeResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class GradeController {

    @PostMapping("/grade")
    public GradeResponse calculateGrade(@RequestBody GradeRequest request) {

        int marks = request.getMarks();
        String grade;
        String result;

        if (marks >= 90) {
            grade = "A+";
        } else if (marks >= 80) {
            grade = "A";
        } else if (marks >= 70) {
            grade = "B";
        } else if (marks >= 60) {
            grade = "C";
        } else {
            grade = "F";
        }

        result = (marks >= 40) ? "Pass" : "Fail";

        return new GradeResponse(grade, result);
    }
}
