package com.tnt.TourTravelApi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.tnt.TourTravelApi.Dao.DestinationDao;
import com.tnt.TourTravelApi.model.Destination;

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
}
