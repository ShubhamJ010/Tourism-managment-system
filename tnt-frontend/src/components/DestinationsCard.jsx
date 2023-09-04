import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react"; // Import useState
import "../styles/Destinations.css";
import DestinationService from "../service/Destination.service";
import BookingService from "../service/Booking.service";

export const DestinationsCard = (destination) => {
  const [isBookmarked, setIsBookmarked] = useState(
    destination.Destination.book
  );
  const [bookedCount, setBookedCount] = useState(0);
  useEffect(() => {
    BookingService.getCountOfBooking(destination.Destination.id).then(
      (data) => {
        setBookedCount(data);
      }
    );
  }, [destination.Destination.id]);
  const toggleBookmark = () => {
    const newBookStatus = !isBookmarked;
    setIsBookmarked(newBookStatus);

    DestinationService.updateBookStatus(
      destination.Destination.id,
      newBookStatus
    )
      .then((updatedDestination) => {
        console.log("🥰🥰🥰");
        console.log(updatedDestination);
      })
      .catch((error) => {
        console.error("Error updating book status:", error);
      });
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
            } ms-3`} // Change button color based on bookmark state
            onClick={toggleBookmark}
          >
            {isBookmarked ? "Bookmarked" : "Bookmark"}
          </button>
          <button type="button" class="btn btn-primary mt-2">
            Already Booked: <span class="badge bg-success"> {bookedCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
