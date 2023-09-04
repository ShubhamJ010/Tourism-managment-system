package com.tnt.TourTravelApi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tnt.TourTravelApi.model.Booking;
import com.tnt.TourTravelApi.service.BookingService;

@RestController
@RequestMapping("/booking")
@CrossOrigin("*")
public class BookingController {
    @Autowired
    private BookingService service;

    @PostMapping("/addbooking")
    public Booking addSupplier(@RequestBody Booking ss) {
        return service.addBooking(ss);
    }

    @GetMapping()
    public java.util.List<Booking> getall() {
        return service.getBookings();
    }

    @GetMapping("/{id}")
    public Booking fetchbyid(@PathVariable int id) {
        return service.getBookingById(id);

    }

    @PutMapping("/updatebooking")
    public Booking updateSupplier(@RequestBody Booking ss) {
        return service.addBooking(ss);
    }

    @GetMapping("/count")
    public int getCountById(@RequestParam int id) {
        return service.countBookingsWithDestinationId(id);
    }

}
