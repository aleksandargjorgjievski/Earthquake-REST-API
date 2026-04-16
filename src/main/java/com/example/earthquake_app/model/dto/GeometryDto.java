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
    public double setLongitude (double longitude) {
        coordinates[0] = longitude;
        return coordinates[0];
    }
    public double setLatitude (double latitude) {
        coordinates[1] = latitude;
        return coordinates[1];
    }
}
