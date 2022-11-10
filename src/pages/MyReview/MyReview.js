import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Review from './Review';

const MyReview = () => {
    const {user} = useContext(AuthContext)

    const [reviews, setReviews] = useState([])

    // const url = `http://localhost:5000/reviews?email=${user.email}`

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?.email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))

    },[user?.email])


    return (
        <div>
            <h3>{reviews.length}</h3>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Review</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
        reviews.map(review=><Review key={review._id} review={review}></Review>)
    }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyReview;