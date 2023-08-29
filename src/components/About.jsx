import React from 'react';

import Tourism from "../assets/homie4.mp4";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop">
          <video src={Tourism} loop muted autoPlay/>
        </div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        The propose system is highly automated and makes the travelling activities much easier and flexible. The user can get the very right information at the very right time. Customers can get the knowledge of the hotels and vehicles they are going to use in their trip prior to their starting of trip. This will increase the trust of the customer into the travel company as well.

Once the bookings are confirmed all the travel details, customer details as well as all the relevant details related to the trip like hotel name, room number, vehicle number, vehicle owner’s details, date of arriving, date of departure, food to be served and every single detail will be available to the client. They just need once to click using mouse and everything is made available to them.
        </p>
      </div>
    </div>
       );
}

export default About
