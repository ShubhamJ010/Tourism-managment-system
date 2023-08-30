import { Link } from "react-router-dom";
import React from "react";
import "../styles/Book.css";
export const BookCard = (props) => {
  console.log("😁😁😁😁");
  console.log(props.Book);
  return (
    <div className="col-md-4 mb-4" key={props.Book.id}>
      <div className="card">
        <img
          src={`images/${props.Book.image}`}
          alt={props.Book.title}
          className="card-image"
        />
        <div className="card-body">
          <h5 className="card-title">{props.Book.title}</h5>
          <p className="card-text">{props.Book.description}</p>
          <a href="#" className="btn btn-primary">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};
