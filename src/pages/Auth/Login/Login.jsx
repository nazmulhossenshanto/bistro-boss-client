import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
    
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisbled] = useState(true)
  const handleLogin = (e) => {
    e.preventDefault(); 
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
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
        <div className="hero-content flex-col md:flex-row-reverse items-center justify-center">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-1/2 max-w-sm  shadow-2xl">
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
                    className="border border-accent py-1"
                  />
                  <button  onClick={handleValidateCaptcha} className="btn btn-outline btn-accent btn-xs  ">Validate</button>
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
