package com.tnt.TourTravelApi.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tnt.TourTravelApi.model.Booking;

public interface BookingDao extends JpaRepository<Booking, Integer> {
    

}
