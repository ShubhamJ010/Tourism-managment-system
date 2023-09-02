import React, { useEffect, useState } from "react";
import BookingService from "../service/Booking.service";
const BookingCard = ({ Book }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    fromDate: "",
    toDate: "",
    destination: null,
    // destination: {
      //   id: 1,
      //   title: "Banaras",
      //   image: "Banaras.jpg",
      //   description: "Relax on pristine beaches with crystal clear waters.",
      //   book: true,
      // },
    });
    // console.log("🥰🥰🥰");
    // console.log(Book);
    const handleInputChange = (event) => {
    console.log(Book.id); 
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    const booking = {
      name: formData.name,
      phoneNo: formData.phoneNumber,
      from_date: new Date(formData.fromDate),
      to_date: new Date(formData.toDate),
      destination: Book,
    };
    event.preventDefault();
    // Handle form submission logic here
    BookingService.addbooking(booking)
      .then((rep) => {
        console.log("🎊🎊🎊");
        console.log(rep);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("Form submitted:", booking);
    // setFormData({
    //   name: "",
    //   phoneNumber: "",
    //   fromDate: "",
    //   toDate: "",
    // });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Contact Form</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fromDate">From Date</label>
            <input
              type="date"
              className="form-control"
              id="fromDate"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="toDate">To Date</label>
            <input
              type="date"
              className="form-control"
              id="toDate"
              name="toDate"
              value={formData.toDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingCard;
