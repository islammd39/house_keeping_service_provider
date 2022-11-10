import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/images/login.jpg"

const AboutUs = () => {
  return (
    <div>
      <div className="hero min-h-screen my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="..."
          />
          <div>
            <h1 className="text-5xl font-bold">Are you looking for a live-in housekeeper with a special touch?</h1>
            <p className="py-6">
            If you ask almost anyone, they will agree that it’s nice to have a clean home. However, finding a reliable person to help keep your home orderly isn’t always easy. Housekeeper.com can simplify your search and will help you find the right live-in housekeeper in no time. Whether you are looking for a job as a live-in housekeeper and the opportunity to make someone’s home shine, or are looking to hire a live-in cleaner to help you out, we can help you connect with an individual that fits your specific needs.
            </p>
            <button className="btn btn-primary"><Link to="/service">Explore</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
