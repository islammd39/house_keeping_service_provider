import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const handleSignUp = (e) =>{
       e.preventDefault()
    }


    return (
        
        <div className="card flex-shrink-0 w-4/6 mx-auto my-10 shadow-2xl bg-base-100">
            <h3 className="text-2xl font-bold text-center mt-5">Register now!</h3>
            <form onSubmit={handleSignUp} className="card-body">
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
              </div>
              <div className="mx-auto">
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <p className="mt-5">Already have an account please <Link className="text-red-600 font-bold" to="/login">login</Link></p>
              </div>
            </form>
          </div>
    );
};

export default SignUp;