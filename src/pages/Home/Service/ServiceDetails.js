import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const {title, image, _id} = useLoaderData()
    const {user} = useContext(AuthContext)
    const handleReview = (e)=>{
       e.preventDefault();
       const form = e.target;
       const name = form.name.value;
       const photoUrl = form.photoUrl.value;
       const email = form.email?.email || "please login";
       const message = form.message.value;
       
       const review = {
          service:_id,
          serviceCategory:title,
          customerName:name,
          customerPhoto:photoUrl,
          customerEmail:email,
          customerReview:message
       }

       fetch("https://b6a11-service-review-server-side-islammd39.vercel.app/reviews",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(review)
       })
       .then(res=> res.json())
       .then(data =>{
        console.log(data)
        if(data.acknowledged){
            alert("review complete")
            form.reset()
        }
    })
       .catch(error=>console.error(error))


    }


    return (
        <div>
            <form onSubmit={handleReview}>
                <h2 className='text-lg'>{title}</h2>
                <img className='w-56 rounded h-56' src={image} alt="..." />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto my-5'>
                <input name='name' type="text" placeholder="your full name" className="input input-bordered input-info w-full" />
                <input name='photoUrl' type="url" placeholder="your image url" className="input input-bordered input-info w-full" />
                <input name='email' type="email" placeholder="your email" defaultValue={user?.email} className="input input-bordered input-info w-full" readOnly/>
                </div>
                <textarea name='message' className="textarea textarea-accent w-full h-28 my-5" placeholder="your review"></textarea>
                <button className="btn btn-primary mb-10">Submit your review</button>
            </form>
        </div>
    );
};

export default ServiceDetails;