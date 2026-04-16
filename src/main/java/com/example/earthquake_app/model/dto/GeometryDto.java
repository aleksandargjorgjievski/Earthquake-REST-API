package com.example.earthquake_app.model.dto;

import lombok.Data;

@Data
public class GeometryDto {

    private double[] coordinates;

    public double getLongitude () {
        return coordinates[0];
    }
    public double getLatitude () {
        return coordinates[1];
    }
    public double getDepth () {
        return coordinates[2];
    }

}
