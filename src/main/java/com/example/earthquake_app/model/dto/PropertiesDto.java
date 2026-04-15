package com.example.earthquake_app.model.dto;

import lombok.Data;

@Data
public class PropertiesDto {
    private double mag;
    private String place;
    private long time;
    private String magType;
    private String title;
}
