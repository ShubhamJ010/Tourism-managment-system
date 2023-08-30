import React, { useState, useRef } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    area: "",
  });

  const validateField = (fieldName, value) => {
    let errorMessage = "";

    switch (fieldName) {
      case "name":
        if (!value) {
          errorMessage = "Name is required.";
        } else if (value.length < 3) {
          errorMessage = "Name should be at least 3 characters long.";
        }
        break;
      case "address":
        if (!value) {
          errorMessage = "Address is required.";
        }
        break;
      case "phoneNumber":
        if (!value) {
          errorMessage = "Phone number is required.";
        }
        break;
      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value || !emailPattern.test(value)) {
          errorMessage = "Please enter a valid email address.";
        }
        break;
      case "area":
        if (!value) {
          errorMessage = "Message is required.";
        } else if (value.length < 20) {
          errorMessage = "Message should be at least 20 characters long.";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: errorMessage,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Check for errors before submitting
    let hasErrors = false;
    for (const field in errors) {
      if (errors[field]) {
        hasErrors = true;
        break;
      }
    }

    if (hasErrors) {
      return;
    }

    // If all validations pass, set the form as done
    setDone(true);
  };

  return (
    <div className="contact d-flex justify-content-center align-items-center vh-100">
      <div className="card contact-card p-4">
        <div className="container">
          <h1 className="text-center mb-4">Contact Us</h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className={`form-control ${errors.name && "is-invalid"}`}
                placeholder="Enter your name"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{errors.name}</div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="address"
                className={`form-control ${errors.address && "is-invalid"}`}
                placeholder="Enter your address"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{errors.address}</div>
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="phoneNumber"
                className={`form-control ${errors.phoneNumber && "is-invalid"}`}
                placeholder="Enter your phone number"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{errors.phoneNumber}</div>
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email && "is-invalid"}`}
                placeholder="Enter your email"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{errors.email}</div>
            </div>
            <div className="mb-3">
              <textarea
                name="area"
                className={`form-control ${errors.area && "is-invalid"}`}
                placeholder="Leave a message for us"
                rows="4"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{errors.area}</div>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
          {done && (
            <div className="alert alert-success mt-3">
              Form submitted successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
