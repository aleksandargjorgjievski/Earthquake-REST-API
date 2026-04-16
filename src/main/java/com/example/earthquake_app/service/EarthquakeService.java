package com.example.earthquake_app.service;

import com.example.earthquake_app.model.Earthquake;
import com.example.earthquake_app.model.dto.EarthquakeDto;
import com.example.earthquake_app.repository.EarthquakeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClient;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EarthquakeService {

    private final EarthquakeRepository earthquakeRepository;

    private final WebClient webClient;

    public EarthquakeService(WebClient webClient, EarthquakeRepository earthquakerepository) {
        this.webClient = webClient;
        this.earthquakeRepository = earthquakerepository;
    }

    @Scheduled(fixedRate = 3600000)
    public void fetchEarthquakes() {
        System.out.println("Fetching earthquakes");
        webClient.get().uri("/earthquakes/feed/v1.0/summary/all_hour.geojson")
                .retrieve()
                .bodyToMono(EarthquakeDto.class)
                .map(this::mapToEntities)
                        .subscribe(entities -> {
                            earthquakeRepository.deleteAllInBatch();
                            earthquakeRepository.saveAll(entities);
                            System.out.println("Data successfully saved to the database!");
                        });
    }

    protected List<Earthquake> mapToEntities(EarthquakeDto response) {
        return response.getFeatures().stream().map(feature ->{
            Earthquake earthquake = new Earthquake();
            earthquake.setId(feature.getId());
            earthquake.setPlace(feature.getProperties().getPlace());
            earthquake.setTitle(feature.getProperties().getTitle());
            earthquake.setTime(feature.getProperties().getTime());
            earthquake.setMagnitude(feature.getProperties().getMag());
            earthquake.setMagType(feature.getProperties().getMagType());
            earthquake.setTime(feature.getProperties().getTime());

            if (feature.getGeometry() != null) {
                earthquake.setLongitude(feature.getGeometry().getLongitude());
                earthquake.setLatitude(feature.getGeometry().getLatitude());
            }

            return earthquake;
        }).collect(Collectors.toList());
    }
}
