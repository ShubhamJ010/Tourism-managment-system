package com.tnt.TourTravelApi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tnt.TourTravelApi.Dao.BookingDao;
import com.tnt.TourTravelApi.model.Booking;

@Service
public class BookingService {
    @Autowired
    public BookingDao repository;

    public Booking addBooking(Booking booking) {
        // if (repository.findByPhoneNo(booking.getPhoneNo()) != null) {
        // throw new IllegalArgumentException("Phone number already present");
        // }
        return repository.save(booking);
    }

    public List<Booking> getBookings() {
        return repository.findAll();
    }

    public Booking getBookingById(int id) {
        return repository.findById(id).orElseThrow();
    }

    // public int countBookingsWithDestinationId(int destinationId) {
    //     return repository.countBookingsWithDestinationId(destinationId);
    // }
    public int countBookingsWithDestinationId(int destinationId) {
        return repository.countByDestinationId(destinationId);
    }
}
