 
 import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import SectionTitle from "../../../SectionTitle/SectionTitle" 
import useMenu from "../../../hooks/useMenu";

 

const ManageItem = () => {
    
    const [allItems] = useMenu();;
    console.log('menu from manage item :: ', allItems);
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

                  <td><img className="h-16 rounded-full w-16" src={item?.image} alt="" /></td>

                  <td>${item?.name}</td>
                  <td>${item?.price}</td>

                  <td>
                  <button   
                      className="rounded-lg bg-secondary p-2 text-white"
                    >
                      <FiEdit size={18} />
                    </button>
                  </td>

                  <td>
                    <button
                    
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