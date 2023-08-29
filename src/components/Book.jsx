// src/pages/Book.jsx
import React from 'react';
import '../styles/Book.css';

const Book = () => {
  const bookingData = [
    {
      id: 1,
      title: 'Exotic Beach Getaway',
      description: 'Relax on pristine beaches with crystal clear waters.',
      image: 'beach.jpg',
    },
    {
      id: 2,
      title: 'Mountain Adventure',
      description: 'Embark on thrilling hikes and enjoy stunning vistas.',
      image: 'mountain.jpg',
    },
    {
      id: 3,
      title: 'Cultural Exploration',
      description: 'Immerse yourself in rich history and local traditions.',
      image: 'culture.jpg',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Book Your Travel</h2>
      <p>Select your desired travel package and book it directly with us.</p>
      <div className="row">
        {bookingData.map((booking) => (
          <div className="col-md-4 mb-4" key={booking.id}>
            <div className="card">
              <img src={`images/${booking.image}`} alt={booking.title} className="card-image" />
              <div className="card-body">
                <h5 className="card-title">{booking.title}</h5>
                <p className="card-text">{booking.description}</p>
                <a href="#" className="btn btn-primary">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
