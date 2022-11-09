import React from "react";
import { Link } from "react-router-dom";
import login from "../../assets/images/login.jpg";

const Login = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();

    }



  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img
              src={login}
              className="max-w-sm rounded-lg shadow-2xl"
              alt="login"
            />
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <h3 className="text-2xl font-bold text-center mt-5">Login now!</h3>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to="/" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="mx-auto">
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="form-control mt-2">
                  <button className="btn btn-outline btn-warning">
                    Login with google
                  </button>
                </div>
                <p className="mt-5">Don't have an account please <Link className="text-red-600 font-bold" to="/signUp">register</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
