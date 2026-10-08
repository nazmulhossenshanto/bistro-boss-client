import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
    
  validateCaptcha,
} from "react-simple-captcha";

import authImg from '../../../assets/others/authentication1.png'
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
const Login = () => {
  const {signInUser} = useAuth();
  const captchaRef = useRef(null);
  const [disabled, setDisbled] = useState(true)
  const handleLogin = (e) => {
    e.preventDefault(); 
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
    .then(result=>{
      if(result.user.uid){
        Swal.fire({
          title: "Successfull!",
          text: "User Sign In Successfull !",
          icon: "success"
        })
      }
    })
    .catch(error=>{
      console.log(error);
      Swal.fire({
          title: "Failed!",
          text: "User Sign In Failed !",
          icon: "error"
        })
    })
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleValidateCaptcha = () =>{
    const user_captcha_value = captchaRef.current.value;
    const isValidateCaptcha = validateCaptcha(user_captcha_value);
    if(isValidateCaptcha){
      setDisbled(false)
    }
    else{
      setDisbled(true)
    }
    
  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col md:flex-row items-center justify-center">
          <div className="text-center w-1/2 lg:text-left">
            <img src={authImg} alt="" />
          </div>
          <div className="card bg-base-100 w-1/2 max-w-sm  shadow-2xl">
          <h1 className="text-5xl font-bold text-center my-3">Login now!</h1>
            <div className="card-body">
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                {/* Captcha */}
                <div className="mt-2 flex flex-col space-y-2">
                  <LoadCanvasTemplate  />
                  <input
                  ref={captchaRef}
                    name="captcha"
                    type="text"
                    placeholder="Enter CAPTCHA"
                    className="border border-accent py-1 px-2 rounded-md " 
                  />
                  <button type="button"  onClick={handleValidateCaptcha} className="btn btn-outline btn-accent btn-xs  py-1">Validate</button>
                </div>
                <button disabled={disabled} type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
