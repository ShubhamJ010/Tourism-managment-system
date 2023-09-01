import React, { useEffect, useState } from "react";
// import { DestinationsCard } from '../components/DestinationsCard';
import BookingCard from "../components/BookingCard";
import { BookCard } from "../components/BookCard";
import { useNavbarContext } from "../context/NavbarContext";
import DestinationService from "../service/Destination.service";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Booking = () => {
  const [bookData, setBookData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    DestinationService.getDestinationById(id)
      .then((data) => {
        setBookData(data);
        console.log(bookData);
      })
      .catch((error) => {
        console.error("Error fetching destinations:", error);
      });
  }, []);

  const { setshowBooknow } = useNavbarContext();
  setshowBooknow(false);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img
              src={`../images/${bookData.image}`}
              alt={bookData.title}
              className="card-image"
            />
            <div className="card-body">
              <h5 className="card-title">{bookData.title}</h5>
              <p className="card-text">{bookData.description}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <BookingCard />
        </div>
      </div>
    </div>
  );
};

export default Booking;
