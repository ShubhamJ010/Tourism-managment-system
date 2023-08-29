// src/pages/Destinations.jsx
import React, { useState } from "react";
import "../styles/Destinations.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      title: "Banaras",
      image: "Banaras.jpg",
      description: "Relax on pristine beaches with crystal clear waters.",
    },
    {
      id: 2,
      title: "Kedarnath",
      image: "Kedarnath.jpg",
      description: "Embark on thrilling hikes and enjoy stunning vistas.",
    },
    {
      id: 3,
      title: "Kashmir",
      image: "Kashmir.jpg",
      description: "Immerse yourself in rich history and local traditions.",
    },
    {
      id: 1,
      title: "Banaras",
      image: "Banaras.jpg",
      description: "Relax on pristine beaches with crystal clear waters.",
    },
    {
      id: 2,
      title: "Kedarnath",
      image: "Kedarnath.jpg",
      description: "Embark on thrilling hikes and enjoy stunning vistas.",
    },
    {
      id: 3,
      title: "Kashmir",
      image: "Kashmir.jpg",
      description: "Immerse yourself in rich history and local traditions.",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const filterDestination = destinations.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container mt-5">
      {/* <h2 className="mb-4">Explore Destinations</h2> */}
      <div className="row">
        <div className="jumbotron">
          <h1 className="display-4">Explore Destinations</h1>
          <p className="lead">
            Your ultimate destination for amazing travel experiences.
          </p>
          <p>
            Explore our wide range of tour Destinations , click on Explore to
            know more.
          </p>
          <SearchBar onSearch={setSearchTerm} />
        </div>
        {filterDestination.map((destination) => (
          <div className="col-md-4 mb-4" key={destination.id}>
            <div className="destination-card">
              <img
                src={`images/${destination.image}`}
                alt={destination.title}
                className="card-image"
              />
              <div className="destination-card-body">
                <h5 className="card-title">{destination.title}</h5>
                <p className="card-text">{destination.description}</p>
                <Link
                  to={`/Er/${destination.title}`}
                  className="btn btn-primary"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
