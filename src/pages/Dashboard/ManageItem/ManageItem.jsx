 
 import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import SectionTitle from "../../../SectionTitle/SectionTitle" 
import useMenu from "../../../hooks/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router";

 

const ManageItem = () => {
    
    const [allItems, isMenuLoading, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
     if (isMenuLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
    const handleDeleteItem = async(id)=>{ 
        
         Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete item!",
            }).then((result) => {
              if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${id}`).then((res) => { 
                 refetch();
                  if (res.data.deletedCount > 0)
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your item has been deleted.",
                      icon: "success",
                    });
                });
              }
            });

    }
  return (
    <div className="min-h-screen bg-base-300 p-4 md:p-8">
      <SectionTitle heading="MANAGE ALL ITEMS" subHeading="Hurry Up" />

      {/* Cart table container */}
      <div className="mx-auto mt-10 w-full max-w-5xl rounded-lg bg-base-100 p-4 md:p-6 ">
        {/* Total items */}
        <h3 className="mb-5 text-left text-lg font-bold">
          TOTAL ITEMS: {allItems.length}
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
              {allItems.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>

                  <td><img className="h-12 rounded-full w-12" src={item?.image} alt="" /></td>

                  <td>${item?.name}</td>
                  <td>${item?.price}</td>

                  <td>
                  <Link to={`/dashboard/updateItem/${item._id}` }  
                      className="rounded-lg btn bg-secondary p-2 text-white"
                    >
                      <FiEdit size={18} />
                    </Link>
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
  )
}

export default ManageItem