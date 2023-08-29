// src/pages/Book.jsx
import React, { useState } from "react";
import { BookCard } from "./BookCard";
import SearchBar from "./SearchBar";

const Book = () => {
  const bookingData = [
    
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
