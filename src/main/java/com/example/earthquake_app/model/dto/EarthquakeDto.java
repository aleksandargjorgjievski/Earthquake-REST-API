package com.example.earthquake_app.model.dto;
import java.util.List;

import lombok.Data;

@Data
public class EarthquakeDto {
    private String type;
    private List<FeaturesDto> features;
}
