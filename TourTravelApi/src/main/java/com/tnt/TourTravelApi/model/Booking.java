package com.tnt.TourTravelApi.model;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Booking {

     @Id
     @GeneratedValue
     public int id;
     public String name;
     @Column(unique = true)
     public String phoneNo;
     public Date from_date;
     public Date to_date;
     @ManyToOne
     public Destination destination;

}
