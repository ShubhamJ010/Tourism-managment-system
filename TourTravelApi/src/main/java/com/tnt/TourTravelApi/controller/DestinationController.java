package com.tnt.TourTravelApi.controller;

import java.util.List;
import java.util.Map;

// import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tnt.TourTravelApi.model.Destination;
import com.tnt.TourTravelApi.service.DestinationService;

@RestController
@RequestMapping("/destination")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")

public class DestinationController {
    @Autowired
    private DestinationService service;

    @PostMapping("/adddestination")
    public Destination addSupplier(@RequestBody Destination ss) {
        return service.addDestination(ss);
    }

    @GetMapping()
    public java.util.List<Destination> getall() {
        return service.getDestinations();
    }

    @GetMapping("/{id}")
    public Destination fetchbyid(@PathVariable int id) {
        return service.getDestinationById(id);

    }

    @PutMapping("/updatedestination")
    public Destination updateSupplier(@RequestBody Destination ss) {
        return service.addDestination(ss);
    }

    @GetMapping("/booked")
    public List<Destination> getBookedDestinations() {
        return service.getBookedDestinations();
    }

    @PutMapping("/updateBookStatus/{id}")
    public Destination updateBookStatus(@PathVariable int id, @RequestBody Map<String, Boolean> request) {
        boolean newBookStatus = request.get("book");
        return service.updateBookStatus(id, newBookStatus);
    }
}
