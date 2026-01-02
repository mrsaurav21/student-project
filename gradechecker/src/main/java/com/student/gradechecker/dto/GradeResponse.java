package com.student.gradechecker.dto;

public class GradeResponse {

    private String grade;
    private String result;

    public GradeResponse(String grade, String result) {
        this.grade = grade;
        this.result = result;
    }

    public String getGrade() {
        return grade;
    }

    public String getResult() {
        return result;
    }
}
