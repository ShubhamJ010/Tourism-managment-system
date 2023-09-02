import React, { useEffect, useState } from "react";
// import { DestinationsCard } from '../components/DestinationsCard';
import BookingCard from "../components/BookingCard";
import { BookCard } from "../components/BookCard";
import { useNavbarContext } from "../context/NavbarContext";
import DestinationService from "../service/Destination.service";
import { useParams } from "react-router";
// import { Link } from "react-router-dom";

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
  },[]);

  const { setshowBooknow } = useNavbarContext();
  setshowBooknow(false);
  return (
    <div className="container mt-5">
      <div className="row">
        <BookCard Book={bookData} />
        <div className="col-md-6">
          <BookingCard Book={bookData} />
        </div>
      </div>
    </div>
  );
};

export default Booking;
