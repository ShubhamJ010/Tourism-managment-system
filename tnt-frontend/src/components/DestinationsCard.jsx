import { Link } from "react-router-dom";
import React from "react";
import "../styles/Destinations.css";
export const DestinationsCard = (destination) => {
  console.log("😁😁😁😁");
  console.log(destination);
  return (
    <div className="col-md-4 mb-4" key={destination.Destination.id}>
      <div className="destination-card">
        <img
          src={`images/${destination.Destination.image}`}
          alt={destination.Destination.title}
          className="card-image"
        />
        <div className="destination-card-body">
          <h5 className="card-title">{destination.Destination.title}</h5>
          <p className="card-text">{destination.Destination.description}</p>
          <Link
            to={`/Er/${destination.Destination.title}`}
            className="btn btn-primary"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};