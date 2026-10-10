 
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const handleDeleteItem = (id)=>{
       

       Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed){
    axiosSecure.delete(`/carts/${id}`)
       .then(res=>{ 
        refetch()
        if(res.data.deletedCount )
                Swal.fire({
    title: "Deleted!",
    text: "Your item has been deleted.",
    icon: "success"
  });
       })
  }
    

});

  }

  return (
    <div className="min-h-screen bg-base-300 p-4 md:p-8">
      <SectionTitle
        heading="MANAGE ALL ITEMS"
        subHeading="Hurry Up!"
      />

      {/* Cart table container */}
      <div className="mx-auto mt-10 w-full max-w-5xl rounded-lg bg-base-100 p-4 md:p-6 ">

        {/* Total items */}
        <h3 className="mb-5 text-left text-lg font-bold">
          TOTAL ITEMS: {cart.length}
        </h3>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table w-full">

            <thead className="bg-secondary text-white">
              <tr>
                <th className="rounded-tl-xl"></th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
                <th className="rounded-tr-xl">ACTION</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>

                  <td>
                    <div className="avatar">
                      <div className="h-12 w-12 rounded">
                        <img
                          src={item.image}
                          alt={item.name}
                        />
                      </div>
                    </div>
                  </td>

                  <td>{item.name}</td>

                  <td>${item.price}</td>

                  <td>
                    <button
                      type="button"
                      aria-label={`Edit ${item.name}`}
                      className="rounded-lg bg-secondary p-2 text-white"
                    >
                      <FiEdit size={18} />
                    </button>
                  </td>

                  <td>
                    <button 
                    onClick={()=>handleDeleteItem(item._id)}
                      type="button"
                      aria-label={`Delete ${item.name}`}
                      className="rounded-lg bg-red-700 p-2 text-white"
                    >
                      <RiDeleteBinLine size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
 