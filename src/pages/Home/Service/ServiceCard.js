import React from "react";

const ServiceCard = ({service}) => {
      const {image, title, price} = service;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl h-96">
        <figure>
          <img className="h-fit" src={image} alt="Services" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className=" text-lg text-red-500">Price :$ {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Show Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
