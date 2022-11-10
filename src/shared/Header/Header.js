import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/housekeeping.png"
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext)


  const handleSignOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
  }
  return (
    <nav>
      <div className="navbar bg-base-100">
        <img className=" w-10" src={logo} alt="" />
        <div className="flex-1">
          <Link to="/" className="normal-case text-xl">
          Fresh & Cleaning
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              {
                user?.email?
                <>
                <Link to="/reviews">Review</Link>
                <button onClick={handleSignOut} className="btn btn-primary">LogOut</button>
                </>
                :
                <Link to="/login">Login</Link>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
