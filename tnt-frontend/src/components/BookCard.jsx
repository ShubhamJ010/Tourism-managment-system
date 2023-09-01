import { Link } from "react-router-dom";
import React from "react";
import "../styles/Book.css";
import { useNavbarContext } from "../context/NavbarContext";

export const BookCard = (props) => {
  // console.log("😁😁😁😁");
  // console.log(props.Book);
  // console.log(process.env.PUBLIC_URL);
  const { showBooknow } = useNavbarContext();
  return (
    <div className="col-md-4 mb-4" key={props.Book.id}>
      <div className="card">
        <img
          src={`${process.env.PUBLIC_URL}/images/${props.Book.image}`}
          alt={props.Book.title}
          className="card-image"
        />
        <div className="card-body">
          <h5 className="card-title">{props.Book.title}</h5>
          <p className="card-text">{props.Book.description}</p>
          {showBooknow && (
            <Link to={`/book/${props.Book.id}`} className="btn btn-primary">
              Book Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
