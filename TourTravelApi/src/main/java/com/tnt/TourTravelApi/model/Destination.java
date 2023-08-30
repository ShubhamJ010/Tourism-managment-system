package com.tnt.TourTravelApi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Destination {

    // {
    // id: 1,
    // title: "Banaras",
    // image: "Banaras.jpg",
    // description: "Relax on pristine beaches with crystal clear waters.",
    // }
    @Id
    @GeneratedValue
    public int id;
    public String title;
    public String image;
    public String description;
    public Boolean book;

}
