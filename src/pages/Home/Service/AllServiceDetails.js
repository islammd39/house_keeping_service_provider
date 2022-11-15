import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const AllServiceDetails = ({ allService }) => {
  const { image, title, price, rating, description, _id } = allService;
  const para = description.slice(0, 100);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl h-96">
        <PhotoProvider>
        <PhotoView src={image}>
        <img style={{ objectFit: 'cover' }} src={image} alt="Services" className=" h-28" />
        </PhotoView>
        </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className=" text-lg text-red-500">Price :$ {price}</p>
          <p className=" text-lg text-red-500">Rating {rating}</p>
          <p>{para}...</p>
        </div>
        <button className="btn btn-primary w-full mt-3"><Link to={`/serviceDetails/${_id}`}>Show Details</Link></button>
      </div>
    </div>
  );
};

export default AllServiceDetails;
