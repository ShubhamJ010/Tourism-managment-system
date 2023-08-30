package com.tnt.TourTravelApi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Destination {

    @Id
    @GeneratedValue
    public int DestinationId;
    public String DestinationName;
    public String DestinationImage;
    public Boolean Book;
    

    
}
