 
import { NavLink, Outlet } from "react-router";
import { IoMdHome } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { FaBars, FaUsers, FaBook } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

const DashboardLayout = () => {
  const navClass = ({ isActive }) =>
    `flex-1 !bg-transparent !text-black hover:!bg-black/10 ${
      isActive ? "!text-white font-bold" : ""
    }`;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-60 min-h-screen shrink-0 bg-secondary">
        <ul className="menu w-full p-4 gap-1">

          {/* Admin Home */}
          <li>
            <div className="flex items-center gap-2">
              <IoMdHome className="shrink-0 text-lg" />
              <NavLink
                to="/dashboard/home"
                className={navClass}
              >
                ADMIN HOME
              </NavLink>
            </div>
          </li>

          {/* Add Item */}
          <li>
            <div className="flex items-center gap-2">
              <ImSpoonKnife className="shrink-0 text-lg" />
              <NavLink
                to="/dashboard/add-item"
                className={navClass}
              >
                ADD ITEM
              </NavLink>
            </div>
          </li>

          {/* My Carts */}
          <li>
            <div className="flex items-center gap-2">
              <FaBars className="shrink-0 text-lg" />
              <NavLink
                to="/dashboard/cart"
                className={navClass}
              >
                MY CARTS
              </NavLink>
            </div>
          </li>

          {/* Manage Bookings */}
          <li>
            <div className="flex items-center gap-2">
              <FaBook className="shrink-0 text-lg" />
              <NavLink
                to="/dashboard/bookings"
                className={navClass}
              >
                MANAGE BOOKINGS
              </NavLink>
            </div>
          </li>

          {/* All Users */}
          <li>
            <div className="flex items-center gap-2">
              <FaUsers className="shrink-0 text-lg" />
              <NavLink
                to="/dashboard/users"
                className={navClass}
              >
                ALL USERS
              </NavLink>
            </div>
          </li>

          {/* Divider */}
          <li className="my-2">
            <div className="h-px min-h-0 bg-white p-0"></div>
          </li>

          {/* Home */}
          <li>
            <div className="flex items-center gap-2">
              <IoMdHome className="shrink-0 text-lg" />
              <NavLink to="/" className={navClass}>
                HOME
              </NavLink>
            </div>
          </li>

          {/* Menu */}
          <li>
            <div className="flex items-center gap-2">
              <FaBars className="shrink-0 text-lg" />
              <NavLink to="/menu" className={navClass}>
                MENU
              </NavLink>
            </div>
          </li>

          {/* Shop */}
          <li>
            <div className="flex items-center gap-2">
              <HiShoppingBag className="shrink-0 text-lg" />
              <NavLink to="/shop" className={navClass}>
                SHOP
              </NavLink>
            </div>
          </li>

          {/* Contact */}
          <li>
            <div className="flex items-center gap-2">
              <MdEmail className="shrink-0 text-lg" />
              <NavLink to="/contact" className={navClass}>
                CONTACT
              </NavLink>
            </div>
          </li>

        </ul>
      </div>

      {/* Main Content */}
      <div className="min-w-0 flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
