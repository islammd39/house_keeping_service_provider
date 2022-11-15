import { ToastContainer, toast } from 'react-toastify';
import { useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Review = ({review}) => {
  const {user} = useContext(AuthContext)
    const {customerName, customerPhoto, customerEmail, customerReview} = review;
    const handleDelate=(user)=>{
        if(user){
          console.log(review._id);
          fetch(`http://localhost:5000/reviews/${review._id}`,{
            method:"DELETE"
          })
          .then(res=> res.json())
          .then(data=> {
            console.log(data)
            if(data.deletedCount > 0){
              toast("successfully deleted!");
              
            }
          })
        }
    }
  return (
    
      <tr>
        <th>
         <button onClick={()=>handleDelate(user)} className="btn">X</button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={customerPhoto}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{customerName}</div>
            </div>
          </div>
        </td>
        <td>
          {customerEmail}
        </td>
        <td>{customerReview}</td>
        <th>
        <ToastContainer />
          <button className="btn btn-ghost btn-xs"><Link to="/service">Create more review</Link></button>
        </th>
      
      </tr>

  );
};

export default Review;
