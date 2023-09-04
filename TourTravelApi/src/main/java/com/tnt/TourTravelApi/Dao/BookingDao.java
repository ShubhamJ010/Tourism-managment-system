package com.tnt.TourTravelApi.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
// import org.springframework.data.repository.query.Param

import com.tnt.TourTravelApi.model.Booking;

public interface BookingDao extends JpaRepository<Booking, Integer> {
    Booking findByPhoneNo(String phoneNumber);

    // @Query(value = "SELECT COUNT(id) FROM booking WHERE destination_id = :destinationId", nativeQuery = true)
    // int countBookingsWithDestinationId(@Param("destinationId") int destinationId);
    int countByDestinationId(int destinationId);
}
