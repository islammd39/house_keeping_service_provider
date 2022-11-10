import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch("https://b6a11-service-review-server-side-islammd39.vercel.app/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])


    return (
        <div  className='mb-5'>
           <div className='my-10'>
           <h2 className=' text-2xl text-violet-800 text-center font-semibold'>This is my service </h2>
            <p className='text-center my-4'>Whether you have hygiene issues, labour retention issues, lack of production time due to prolonged cleaning time, problems with your current cleaning system, or other challenges related to your cleaning system, we have extensive experience in optimizing the process.</p>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
            services.map(service => <ServiceCard key={service.service_id} service={service}></ServiceCard>)
           }
           </div>
           <div className='text-center'>
           <button className="btn btn-outline btn-warning my-5"><Link to="/service">Show All</Link></button>
           </div>
        </div>
    );
};

export default Service;