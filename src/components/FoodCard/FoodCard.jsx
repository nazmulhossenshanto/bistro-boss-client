import { useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2"; 
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { image, name, recipe, price, _id } = item;
  const handleAddToCart = () => {
    if (user && user.email) {
      // TODO: send item to  database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      };

      try {
         axiosSecure.post('http://localhost:5000/carts', cartItem)
         .then(res =>{
          if(res.data.insertedId){
 Swal.fire("Success!", "Added to cart", "success")
          }
         }) 
       
        
      } catch (error) {
        console.log(error);
        Swal.fire('Error!', 'Could not add to cart', "error")
        
      }
      
    } else {
      Swal.fire({
        title: "You are not Logged In.",
        text: "Please login to add to the cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed){
          // send the user to the login page
          navigate("/auth/login", { state: { from: location }, replace: true });
        }
          
      });
    }
  };
  return (
    <div className="card  shadow-lg">
      <figure>
        <img src={image} alt="" />
      </figure>
      <p className="absolute top-3 bg-black/80 text-white py-1 px-2 text-xs right-8">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center mt-5">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline bg-base-200 text-yellow-400 border-0 border-b-4 border-b-yellow-400 mt-4"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
