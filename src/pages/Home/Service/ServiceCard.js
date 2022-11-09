import React from "react";

const ServiceCard = ({service}) => {
      const {image, title, price, rating} = service;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl h-96">
        <figure>
          <img className="h-fit" src={image} alt="Services" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
         <p className=" text-lg text-red-500">Price :$ {price}</p>
          <p className=" text-lg text-red-500">Rating {rating}</p>
            <button className="btn btn-primary w-full mt-3">Show Details</button>
        
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
