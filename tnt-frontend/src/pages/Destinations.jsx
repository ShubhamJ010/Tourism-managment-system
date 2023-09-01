// src/pages/Destinations.jsx
import React, { useEffect, useState } from "react";
import "../styles/Destinations.css";
import SearchBar from "../components/SearchBar";
import { DestinationsCard } from "../components/DestinationsCard";
import { useNavbarContext } from "../context/NavbarContext";
import DestinationService from "../service/Destination.service";

const Destinations = () => {
  const { setShowNavbar } = useNavbarContext();
  setShowNavbar(true);
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    // Fetch and display all destinations when the component mounts
    DestinationService.getAllDestinations()
      .then((data) => {
        setDestinations(data);
      })
      .catch((error) => {
        console.error("Error fetching destinations:", error);
      });
  }, []);
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
