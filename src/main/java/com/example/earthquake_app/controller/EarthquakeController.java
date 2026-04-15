package com.example.earthquake_app.controller;

import com.example.earthquake_app.model.Earthquake;
import com.example.earthquake_app.repository.EarthquakeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/earthquakes")
public class EarthquakeController {

    @Autowired
    private EarthquakeRepository earthquakeRepository;

    @GetMapping
    public List<Earthquake> getAllEarthquakes() {
        return earthquakeRepository.findAll();
    }

    @GetMapping("/filter")
    public List<Earthquake> getEarthquakesByMagnitude(Double magnitude) {
        return earthquakeRepository.findByMagnitudeGreaterThan(magnitude);
    }

    @GetMapping("/filter/time")
    public List<Earthquake> getEarthquakesByTime(long time) {
        return earthquakeRepository.findByTimeAfter(time);
    }
}
