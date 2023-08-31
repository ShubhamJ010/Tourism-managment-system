import React from 'react';
// import { DestinationsCard } from '../components/DestinationsCard';
import BookingCard from '../components/BookingCard';
import { BookCard } from '../components/BookCard';
import { useNavbarContext } from '../context/NavbarContext';

const bb= {
    "id": 1,
    "title": "Banaras",
    "image": "Banaras.jpg",
    "description": "Relax on pristine beaches with crystal clear waters.",
    "book": false
}
const Booking = () => {
    const { setshowBooknow } = useNavbarContext();
    setshowBooknow(false)
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <BookCard Book={bb} />
        </div>
        <div className="col-md-6">
          <BookingCard />
        </div>
      </div>
    </div>
  );
};

export default Booking;
