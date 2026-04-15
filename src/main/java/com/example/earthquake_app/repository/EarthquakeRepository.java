package com.example.earthquake_app.repository;

import com.example.earthquake_app.model.Earthquake;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EarthquakeRepository extends JpaRepository<Earthquake, String> {

    List<Earthquake> findByMagnitudeGreaterThan (Double magnitude);
    List<Earthquake> findByTimeAfter(long time);
}
