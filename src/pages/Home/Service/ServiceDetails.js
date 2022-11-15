import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import MyReview from "../../MyReview/MyReview";

const ServiceDetails = () => {
  const { title, image, _id , description, price, rating} = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email?.email || "please login";
    const message = form.message.value;

    const review = {
      service: _id,
      serviceCategory: title,
      customerName: name,
      customerPhoto: photoUrl,
      customerEmail: email,
      customerReview: message,
    };

    fetch(
      "https://b6a11-service-review-server-side-islammd39.vercel.app/reviews",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("review complete");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleReview}>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
          <figure>
            <img src={image} alt="..." />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className=" text-lg text-red-500">Price :$ {price}</p>
          <p className=" text-lg text-red-500">Rating {rating}</p>
            <p>{description}</p>
          </div>
        </div>
        <h2 className="text-center text-2xl text-accent font-bold my-5">Add Your Review</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto my-5">
          <input
            name="name"
            type="text"
            placeholder="your full name"
            className="input input-bordered input-info w-full"
          />
          <input
            name="photoUrl"
            type="url"
            placeholder="your image url"
            className="input input-bordered input-info w-full"
          />
          <input
            name="email"
            type="email"
            placeholder="your email"
            defaultValue={user?.email}
            className="input input-bordered input-info w-full"
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-accent w-full h-28 my-5"
          placeholder="your review"
        ></textarea>
        <button className="btn btn-primary mb-10"><Link to="/reviews">Submit your review</Link></button>
      </form>
      <MyReview></MyReview>
    </div>
  );
};

export default ServiceDetails;
