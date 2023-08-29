import React, { useState } from 'react';
import "../styles/Home.css";
import SearchBar from '../components/SearchBar';
import Carousel from 'react-bootstrap/Carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  const cardData = [
    {
      id: 1,
      title: 'Explore Jammu',
      image: 'jammu.jpg',
      description: 'Relax on the sun-kissed Jammu with golden Mountains.',
    },
    {
      id: 2,
      title: 'Discover Ladakh',
      image: 'ladakh.jpg',
      description: 'Immerse yourself in the rich history of Ladakh.',
    },
    {
      id: 3,
      title: 'Adventure in Rishikesh',
      image: 'rishikesh.jpg',
      description: 'Embark on thrilling rivers in the breathtaking mountains.',
    },
  ];

  const worldTripsImages = [
    'slide1.jpg',
    'slide2.jpg',
    'slide3.jpg',
    'slide4.jpg',
    'slide5.jpg',
  ];
  const topAgentsData = [
    {
      id: 1,
      name: 'Travel Experts',
      image: 'agent1.jpg',
      description: 'Experience the world with our expert travel agents.',
    },
    {
      id: 2,
      name: 'Global Getaways',
      image: 'agent2.jpg',
      description: 'Your gateway to extraordinary travel adventures.',
    },
    {
      id: 3,
      name: 'Dream Destinations',
      image: 'agent3.jpg',
      description: 'Turning your travel dreams into reality.',
    },
    {
      id: 4,
      name: 'Adventurous Explorers',
      image: 'agent4.jpg',
      description: 'For those who seek thrill and excitement in travel.',
    },
  ];


  const [searchTerm, setSearchTerm] = useState('');

  const filteredCards = cardData.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to TourTravel</h1>
        <p className="lead">
          Your ultimate destination for amazing travel experiences.
        </p>
        <p>
          Explore our wide range of tour packages and create unforgettable memories.
        </p>
        <SearchBar onSearch={setSearchTerm} />
      </div>

      <div className="row">
        {filteredCards.map((card) => (
          <div className="col-md-4 mb-4" key={card.id}>
            <div className="card">
              <img
                src={`images/${card.image}`}
                className="card-img-top equal-image-height"
                alt={card.title}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1>Best Tourist Places to Visit in the World</h1>
      <h6>The World's Best Trips, Attractions, and Places to Visit</h6>

      <div className="carousel-container mb-4"> {/* Add mb-4 class for margin */}
        <Carousel>
          {worldTripsImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={`images/${image}`}
                alt={`Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>



      <h1>Top Travel Agents for you</h1>
      <h6>Trusted Agents, Unlimited Deals, Best Price, Happily Memories</h6>
      <div className="row">
        {topAgentsData.map((agent) => (
          <div className="col-md-3 mb-4" key={agent.id}>
            <div className="card">
              <img
                src={`images/${agent.image}`}
                className="card-img-top"
                alt={agent.name}
              />

            </div>
          </div>
        ))}
        {/*  */}
        <div className="testimonials-section mt-5">
          <div className="container">
            <h1>What Our Customers Say</h1>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="testimonial-card">
                  <p className="testimonial-text">
                    "TourTravel made our vacation truly memorable. Their attention to detail and excellent service made all the difference."
                  </p>
                  <div className="testimonial-author">
                    <img src="images/user1.jpg" alt="User" className="testimonial-author-image" />
                    <h6 className="testimonial-author-name">Jane Doe</h6>
                    <p className="testimonial-author-title">Frequent Traveler</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="testimonial-card">
                  <p className="testimonial-text">
                    "I couldn't have asked for a better travel agency. Their personalized recommendations and smooth planning made our trip amazing."
                  </p>
                  <div className="testimonial-author">
                    <img src="images/user2.jpg" alt="User" className="testimonial-author-image" />
                    <h6 className="testimonial-author-name">John Smith</h6>
                    <p className="testimonial-author-title">Adventurer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="testimonial-card">
                  <p className="testimonial-text">
                    "TourTravel exceeded our expectations. Their knowledgeable agents helped us discover hidden gems we'd never have found on our own."
                  </p>
                  <div className="testimonial-author">
                    <img src="images/user3.jpg" alt="User" className="testimonial-author-image" />
                    <h6 className="testimonial-author-name">Mitchell jhonson</h6>
                    <p className="testimonial-author-title">Explorer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}


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
                <p>Stay connected with us on social media for the latest updates.</p>
                <div className="social-icons">
                  <a href="#" className="social-icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" className="social-icon">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" className="social-icon">
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


        {/*  */}


      </div>
    </div>
  );
};
export default Home;