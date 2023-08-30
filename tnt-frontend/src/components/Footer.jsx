import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Contact Us</h4>

            <p>Email: info@tourtravel.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="col-md-6">
            <h4>Follow Us</h4>
            <p>
              Stay connected with us on social media for the latest updates.
            </p>
            <div className="social-icons">
              <a href="facebook.com" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="x.com" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="instagram.com" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 TourTravel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
