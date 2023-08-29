// src/pages/Destinations.jsx
import React from 'react';
import '../styles/Destinations.css';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      title: 'Banaras',
      image: 'Banaras.jpg',
      description: 'Relax on pristine beaches with crystal clear waters.',
    },
    {
      id: 2,
      title: 'Kedarnath',
      image: 'Kedarnath.jpg',
      description: 'Embark on thrilling hikes and enjoy stunning vistas.',
    },
    {
      id: 3,
      title: 'Kashmir',
      image: 'Kashmir.jpg',
      description: 'Immerse yourself in rich history and local traditions.',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Explore Destinations</h2>
      <div className="row">
        {destinations.map((destination) => (
          <div className="col-md-4 mb-4" key={destination.id}>
            <div className="destination-card">
              <img src={`images/${destination.image}`} alt={destination.title} className="card-image" />
              <div className="destination-card-body">
                <h5 className="card-title">{destination.title}</h5>
                <p className="card-text">{destination.description}</p>
                <a href="#" className="btn btn-primary">
                  Explore
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
