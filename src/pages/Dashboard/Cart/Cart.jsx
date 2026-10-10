import useCart from "../../../hooks/useCart"
import SectionTitle from "../../../SectionTitle/SectionTitle"
import { FiEdit } from "react-icons/fi";
 import { RiDeleteBinLine } from "react-icons/ri";

const Cart = () => {
    const [cart] = useCart();
  return (
    <div >
        <SectionTitle heading={"MANAGE ALL ITEMS"} subHeading={"Hurry Up!"}></SectionTitle>
        <div className="flex flex-col  items-center">
            <h3 className="text-lg font-bold ">TOTAL ITEMS:{cart.length}</h3>
        {/* table */}
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-secondary ">
      <tr>
        <th  className="rounded-tl-2xl "> 
        </th>
        <th>ITEM IMAGE</th>
        <th>ITEM NAME</th>
        <th>PRICE</th>
        <th>ACTION</th>
        <th className="rounded-tr-2xl ">ACTION</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((item, index)=>(
            <tr key={index}>
        <th>
          <p>{index + 1 }</p>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div> 
          </div>
        </td>
        <td><div className="font-bold">{item.name}</div></td>
        <td><div className="text-lg opacity-50">${item.price}</div></td>
        <td>
          <FiEdit size={30} className="bg-secondary rounded-lg p-2 text-white" />
        </td>
        <td><RiDeleteBinLine size={30} className="bg-red-700 rounded-lg p-2 text-white" /></td> 
      </tr> 
        ))
      }
    </tbody> 
  </table>
</div>
        
        </div>
    </div>
  )
}

export default Cart