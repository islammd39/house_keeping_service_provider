
import { Link } from "react-router-dom";

const Review = ({review}) => {
    const {customerName, customerPhoto, customerEmail, customerReview} = review;
  return (
    
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
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
          <button className="btn btn-ghost btn-xs"><Link to="/service">Details</Link></button>
        </th>
      </tr>

  );
};

export default Review;
