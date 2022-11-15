import React from "react";

const Contact = () => {
  return (
   <section className="">
    <div className="text-center">
        <h2 className="text-2xl font-semibold text-accent my-5">Contact Us</h2>
        <p>If you have a consumer question for the Good Housekeeping Institute contact !!!</p>
    </div>
     <div className="lg:flex justify-evenly items-center gap-2 my-7">
      <div className="my-3">
      <div className="card w-80 bg-info shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Opening Hours</h2>
          <p>Opening 7.30 am Close 1.30pm</p>
        </div>
      </div>
      </div>
      <div className="my-3">
      <div className="card w-80 bg-warning shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Visit Our location</h2>
          <p>1/2 united street, United State-7704</p>  
        </div>
      </div>
      </div>
      <div className="my-3">
      <div className="card w-80 bg-success shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Contact Us</h2>
          <p>+2 401255</p>        
        </div>
      </div>
      </div>
    </div>
   </section>
  );
};

export default Contact;
