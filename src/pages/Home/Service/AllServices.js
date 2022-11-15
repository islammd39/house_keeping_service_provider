import React, { useEffect, useState } from 'react';
import AllServiceDetails from './AllServiceDetails';

const AllServices = () => {
    const [allServices, setAllServices] = useState([])


    useEffect(()=>{
        fetch("http://localhost:5000/allServices")
        .then(res => res.json())
        .then(data => setAllServices(data))
    },[])

    return (
        <div>
            <h2 className=' text-2xl text-violet-800 text-center font-semibold'>here is service{allServices.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                 {
                    allServices.map(allService =><AllServiceDetails key={allService._id} allService={allService}></AllServiceDetails>)
                 }
            </div>
        </div>
    );
};

export default AllServices;