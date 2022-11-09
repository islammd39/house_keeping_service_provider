import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/housekeeping.png"

const Header = () => {
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
