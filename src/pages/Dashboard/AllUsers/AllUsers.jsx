import Swal from "sweetalert2";
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

 const handleMakeAdmin = (user)=>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res=>{
        console.log(res.data);
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                
              title: "Congratulations!",
              text: "User added as admin",
              icon: "success",
            
                
            })
        }
    })

 }

  const handleDeleteUser = (user) => { 

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete user!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
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
  };

  return (
    <div className="min-h-screen bg-base-300 p-4 md:p-8">
      <SectionTitle heading="MANAGE ALL USERS" subHeading="How many?" />

      {/* Cart table container */}
      <div className="mx-auto mt-10 w-full max-w-5xl rounded-lg bg-base-100 p-4 md:p-6 ">
        {/* Total items */}
        <h3 className="mb-5 text-left text-lg font-bold">
          TOTAL ITEMS: {users.length}
        </h3>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="rounded-tl-xl"></th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th className="rounded-tr-xl">ACTION</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>

                  <td>{user?.name}</td>

                  <td>${user?.email}</td>

                  <td>
                    { user.role === 'admin' ? 'Admin' : <button onClick={()=>handleMakeAdmin(user)}
                      type="button"
                      aria-label={`Edit ${user.name}`}
                      className="rounded-lg bg-secondary p-2 text-white"
                    >
                      <FaUsers size={18} />
                    </button>}
                  </td>

                  <td>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      type="button"
                      aria-label={`Delete ${user.name}`}
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

export default AllUsers;
