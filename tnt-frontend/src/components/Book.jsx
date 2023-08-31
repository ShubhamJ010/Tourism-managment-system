// src/pages/Book.jsx
import React, { useEffect, useState } from "react";
import { BookCard } from "./BookCard";
import SearchBar from "./SearchBar";
import { useNavbarContext } from "../context/NavbarContext";
import DestinationService from "../service/Destination.service";

const Book = () => {
  const { setShowNavbar } = useNavbarContext();
  setShowNavbar(true);
  const { setshowBooknow } = useNavbarContext();
  setshowBooknow(true)
  const [bookingData, setDestinations] = useState([]);
  useEffect(() => {
    // Fetch and display all destinations when the component mounts
    DestinationService.getBookedDestinations()
      .then((data) => {
        setDestinations(data);
      })
      .catch((error) => {
        console.error("Error fetching destinations:", error);
      });
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  const filterBooking = bookingData.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container mt-5">
      <SearchBar onSearch={setSearchTerm} />
      <h2 className="mb-4">Book Your Travel</h2>
      <p>Select your desired travel package and book it directly with us.</p>
      <div className="row">
        {filterBooking.map((booking) => (
          <BookCard Book={booking} />
        ))}
      </div>
    </div>
  );
};

export default Book;
