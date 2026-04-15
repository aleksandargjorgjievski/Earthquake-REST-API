package com.example.earthquake_app.model.dto;

import lombok.Data;

@Data
public class FeaturesDto {
    private String id;
    private PropertiesDto properties;
    private GeometryDto geometry;
}
