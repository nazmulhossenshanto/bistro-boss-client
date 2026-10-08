import useAuth from "../../../hooks/useAuth";
import Swal from 'sweetalert2'
 import authImg from '../../../assets/others/authentication2.png'

const Register = () => {
  const {createUser} = useAuth(); 
  const handleRegister = (e) => {
    e.preventDefault(); 
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
    .then(result=>{
      if(result.user.uid){ 
          Swal.fire({
  title: "successfull!",
  text: "User Registered Successfully!",
  icon: "success"
});
      }
    })
    .catch(error =>{
      console.log('register user error', error);
      Swal.fire({
  title: "Failed to Register User!",
  text:  `${error.message}`,
  icon: "error"
});
      
    })
  };  

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col md:flex-row-reverse items-center justify-center">
          {/* Text content */}
          <div className="text-center w-1/2 lg:text-left">
            <img src={authImg} alt="" />
          </div>
          {/* Register form */}
          <div className="card bg-base-100 w-1/2 max-w-sm  shadow-2xl">
          <h1 className="text-5xl font-bold text-center my-3">Register now!</h1>
            <div className="card-body">
              <form onSubmit={handleRegister} className="fieldset">
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
                <button   type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
