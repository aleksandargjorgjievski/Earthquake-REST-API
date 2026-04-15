package com.example.earthquake_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class EarthquakeAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(EarthquakeAppApplication.class, args);
    }

}
