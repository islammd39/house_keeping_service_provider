import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen my-7"
      style={{ backgroundImage: `url("https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">MY Cleaning Service</h1>
          <p className="mb-5">
          Getting the professional office cleaning services you need doesn’t have to be complicated. When you request your custom cleaning proposal from Sentral Services, you’ll tell us what you need, we'll make recommendations based on a walkthrough of your building, and then we’ll give you an itemized quote detailing the services and costs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
