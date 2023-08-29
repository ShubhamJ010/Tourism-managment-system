import React from 'react';
import { Link } from 'react-router-dom';
import Home2 from "../assets/homie5.mp4";
import "../styles/Tour.css";
import Destination from './destination';
import Gangtok from "../assets/gangtok.mp4";
import Bali from "../assets/bali.mp4";
import Paris from "../assets/paris.mp4";
import Switzerland from "../assets/switzerland.mp4";
import Kashmir from "../assets/kashmir.mp4";
import Manali from "../assets/manali.mp4";
import Mussoorie from "../assets/mussoorie.mp4";
import Nepal from "../assets/nepal.mp4";
import Shilong from "../assets/shilong.mp4";
import Tokyo from "../assets/tokyo.mp4";
const packages = [
  {
    src: Gangtok,
    title: "Grand week in north east-Lachung, Gangtok",
    type: "Domestic Packages",
    location: "Sikkim",
    features: "Free Breakfast,Free WiFi",
    price: "35000"
  },
  {
    src: Bali,
    title: "Soulmate Special Bali - 7 Nights",
    type: "Couple Packages",
    location: "Indonesia(Bali)",
    features: "Free Pickup and drop facility,Free WiFi,Free proffesional guide",
    price: "50000"
  },
  {
    src: Paris,
    title: "France Holidays",
    type: "Family Packages",
    location: "France",
    features: "Free Breakfast,Free WiFi,Accommodation{'>>'}Pickup",
    price: "45000"
  },
  {
    src: Switzerland,
    title: "6 Days in Switzerland",
    type: "Family Packages",
    location: "Switzerland",
    features: "Free Breakfast,Free WiFi,Accommodation{'>>'}sightseeing{'>>'}pickup{'>>'}drop",
    price: "55000"
  },
  {
    src: Kashmir,
    title: "Grand week in Kashmir",
    type: "Couple Packages",
    location: "Jammu and Kashmir",
    features: "Free Breakfast,Free WiFi",
    price: "35000"
  },
  {
    src: Manali,
    title: "Grand week in north Manali",
    type: "Domestic Packages",
    location: "Himachal Pradesh",
    features: "Free Breakfast,Free WiFi",
    price: "40000"
  },
  {
    src: Mussoorie,
    title: "6 Days in Mussoorie",
    type: "Domestic Packages",
    location: "Sikkim",
    features: "Free Breakfast,Free WiFi",
    price: "35000"
  },
  {
    src: Nepal,
    title: "Grand week in Nepal",
    type: "Family Packages",
    location: "Nepal",
    features: "Free Breakfast,Free WiFi",
    price: "35000"
  },
  {
    src: Shilong,
    title: "Great Holidays in north east-Shilong",
    type: "Friends and Family Packages",
    location: "Meghalaya",
    features: "Free Breakfast,Free WiFi",
    price: "40000"
  },
  {
    src: Tokyo,
    title: "Cheerful Days in Tokyo",
    type: "Friends and Family Packages",
    location: "Japan",
    features: "Free Breakfast,Free WiFi",
    price: "65000"
  },
];


function Tour() {
  return (
    <div className='tour'>
      <div className="tourTop">
        <video src={Home2} loop muted autoPlay />
      </div>
      <div className="Package">
        <h1>Package List</h1>
        {packages.map((packagea, index) => (
          <Destination key={index} {...packagea} />
        ))}
        <Link to="/contact"></Link>
      </div>
    </div>
  );
}

export default Tour;
//https://chat.openai.com/share/ab42b6e6-7db0-4575-a740-0c8082a6acb1