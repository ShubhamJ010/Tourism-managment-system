package com.tnt.TourTravelApi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tnt.TourTravelApi.Dao.DestinationDao;
import com.tnt.TourTravelApi.model.Destination;

@Service
public class DestinationService {

    @Autowired
    DestinationDao repository;

    public Destination addDestination(Destination ss) {
        return repository.save(ss);
    }

    public List<Destination> getDestinations() {
        return repository.findAll();
    }

    public Destination getDestinationById(int id) {
        return repository.findById(id).orElseThrow();
    }

    public List<Destination> getBookedDestinations() {
        return repository.findByBookTrue();
    }

    public Destination updateBookStatus(int id, boolean newBookStatus) {
        Destination destination = repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid destination ID: " + id));

        destination.setBook(newBookStatus);
        return repository.save(destination);
    }
}
