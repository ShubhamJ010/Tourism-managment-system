package com.tnt.TourTravelApi.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tnt.TourTravelApi.model.Destination;

@Repository
public interface DestinationDao extends JpaRepository<Destination, Integer> {
    List<Destination> findByBookTrue();

}
