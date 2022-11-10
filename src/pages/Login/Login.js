import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login.jpg";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
    const {userProvider} = useContext(AuthContext)
    const {signIn} = useContext(AuthContext)
    const Navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const handleSubmit = (e)=>{
        e.preventDefault(e);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset()
            Navigate(from,{replace:true})
        })
        .catch(error=>{
            console.error(error);
        })

    }
    const googleProvider = new GoogleAuthProvider()
    const signInGoogle = () =>{
      userProvider(googleProvider)
      .then(result=>{
        const user = result.user;
        console.log(user);
      })
      .catch(error=>{
        console.error(error);
      })
      
    }



  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
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
                  name="email"
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
                  name="password"
                  type="password"
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
                  <button onClick={signInGoogle} className="btn btn-outline btn-warning">
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
