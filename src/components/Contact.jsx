import React from 'react';
import '../styles/Contact.css'; // Import your custom CSS file

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-button">Submit</button>
          </form>
        </div>
        <div className="col-md-6 contact-info">
          <p className="contact-info-text">Feel free to reach out to us for any inquiries or assistance.</p>
          <p className="contact-info-detail"><strong>Email:</strong> contact@tourtravel.com</p>
          <p className="contact-info-detail"><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p className="contact-info-detail"><strong>Address:</strong> 1234 Travel Lane, Wanderlust City</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
