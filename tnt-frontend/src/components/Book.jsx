// src/pages/Book.jsx
import React, { useState } from "react";
import { BookCard } from "./BookCard";
import SearchBar from "./SearchBar";
import { useNavbarContext } from "../context/NavbarContext";

const Book = () => {
  const { setShowNavbar } = useNavbarContext();
  setShowNavbar(true);
  const bookingData = [
    {
      id: 1,
      title: "Beach",
      image: "beach.jpg",
      description: "Relax on pristine beaches with crystal clear waters.",
    },
    {
      id: 2,
      title: "Ladhka",
      image: "ladakh.jpg",
      description: "Relax on pristine beaches with crystal clear waters.",
    },
  ];
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
