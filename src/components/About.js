import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import food from "../Images/burger-image.png";
import './aboutAndProfile.css';
import Profile from "./profile";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="about-container">
        <div className="about-left">
          <h1>
            Welcome to <br /> The world of <br />{" "}
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "Better you will feel if you eat a 
             <Link className="app-name" to="/"> TastyTrack </Link> 
            healthy
            meal"
          </h4>
        </div>
        <div className="about-right">
          <img src={food} alt="Food Image" />
        </div>
      </div>
      <div>
        <Profile/>
      </div>
    </div>
  );
};

export default About;