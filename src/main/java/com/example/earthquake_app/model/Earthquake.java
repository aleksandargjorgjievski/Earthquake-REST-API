package com.example.earthquake_app.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "earthquakes")
public class Earthquake {

    @Id
    private String id;
    private String title;
    private String place;
    private double magnitude;
    private String magType;
    private long time;
}
