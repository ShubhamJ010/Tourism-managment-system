// src/pages/Destinations.jsx
import React, { useState } from "react";
import "../styles/Destinations.css";
import SearchBar from "./SearchBar";
import { DestinationsCard } from "./DestinationsCard";

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
  // console.log(filterDestination);
  // console.log("i love you so much");

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
        {filterDestination.map((des) => (
          <DestinationsCard Destination={des} />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
