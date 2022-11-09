import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch("services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])


    return (
        <div  className='mb-5'>
           <div>
           <h2 className=' text-2xl text-violet-800 text-center'>This is my service </h2>
            <p className='text-center my-4'>Whether you have hygiene issues, labour retention issues, lack of production time due to prolonged cleaning time, problems with your current cleaning system, or other challenges related to your cleaning system, we have extensive experience in optimizing the process.</p>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
            services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
           }
           </div>
        </div>
    );
};

export default Service;