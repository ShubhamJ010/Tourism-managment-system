import { Link } from "react-router-dom";
import React, { useState } from "react"; // Import useState
import "../styles/Destinations.css";

export const DestinationsCard = (destination) => {
  const [isBookmarked, setIsBookmarked] = useState(
    destination.Destination.book
  ); // State for bookmarking

  const toggleBookmark = () => {
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked); // Toggle bookmark state
  };

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
            className="btn btn-primary mx-auto"
          >
            Explore
          </Link>
          <button
            className={`btn ${
              isBookmarked ? "btn-success" : "btn-outline-secondary"
            } ml-3`} // Change button color based on bookmark state
            onClick={toggleBookmark}
          >
            {isBookmarked ? "Bookmarked" : "Bookmark"}
          </button>
        </div>
      </div>
    </div>
  );
};
