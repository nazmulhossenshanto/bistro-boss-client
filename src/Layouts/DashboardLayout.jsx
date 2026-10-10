 import { NavLink, Outlet } from "react-router";
import { IoMdHome } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { FaBook } from "react-icons/fa";



const DashboardLayout = () => {
  return (
    <div>
        {/* div for nav options */}
        <div className="w-60 min-h-screen bg-orange-400">
            <li>
                <IoMdHome />
                <NavLink>ADMIN HOME</NavLink>
            </li>
            <li>
                <ImSpoonKnife />

                <NavLink>ADD ITEM</NavLink>
            </li>
            <li>
                <FaBars />

                <NavLink to="/dashboard/cart">My Carts</NavLink>
            </li>
            <li>
                <FaBook />

                <NavLink>MANAGE BOOKINGS</NavLink>
            </li>
            <li>
                <NavLink>ALL USERS</NavLink>
            </li>
            {/* TODO: BORDER BOTTOM */}
            <li>
                <NavLink>HOME </NavLink>
            </li>
            <li>
                <NavLink>MENU</NavLink>
            </li>
            <li>
                <NavLink>SHOP</NavLink>
            </li>
            <li>
                <NavLink>CONTACT</NavLink>
            </li>
        </div>
        {/* div for outler */}
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default DashboardLayout