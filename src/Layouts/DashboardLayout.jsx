 
import { NavLink, Outlet } from "react-router";
import { IoMdHome } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { FaBars, FaUsers, FaBook } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import { MdEmail, MdOutlinePayment } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";
import { BiSolidCommentDots } from "react-icons/bi";
import { RiBookAiFill } from "react-icons/ri";
import useAdmin from "../hooks/useAdmin";


const DashboardLayout = () => {
  const navClass = ({ isActive }) =>
    `flex-1 !bg-transparent !text-black hover:!bg-black/10 ${
      isActive ? "!text-white font-bold" : ""
    }`;

    const [isAdmin] = useAdmin();


  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-60 min-h-screen shrink-0 bg-secondary">
        <div className="m-5 text-center">
          <h1 className="uppercase font-bold text-3xl">Bistro Boss</h1>
          <h1 className="uppercase text-xl">R e s t u a r e n t</h1>
        </div>
        <ul className="menu w-full p-4 gap-1">

{
  isAdmin ? <>
    {/* Admin Home */}
          <li>
            <div className="flex items-center gap-2">
              <IoMdHome className="shrink-0 text-lg" />
              <NavLink
                to="/dashboard/adminHome"
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
                to="/dashboard/addItem"
                className={navClass}
              >
                ADD ITEMS
              </NavLink>
            </div>
          </li>

          {/* Manage Items */}
          <li>
            <div className="flex items-center gap-2">
              <FaBars className="shrink-0 text-lg" />
              <NavLink
                to="/dashboard/manageItems"
                className={navClass}
              >
                MANAGE ITEMS
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
                to="/dashboard/allUsers"
                className={navClass}
              >
                ALL USERS
              </NavLink>
            </div>
          </li>
  </> : <>
    {/* User Home */}
          <li>
            <div className="flex items-center gap-2">
              <IoMdHome className="shrink-0 text-lg" />
              <NavLink
                to="/dashboard/userHome"
                className={navClass}
              >
                USER HOME
              </NavLink>
            </div>
          </li>

          {/* Reservation */}
          <li>
            <div className="flex items-center gap-2">
              <AiFillCalendar className="shrink-0 text-lg" />
              <NavLink
                to="/dashboard/payment"
                className={navClass}
              >
                RESERVATION
              </NavLink>
            </div>
          </li>

          {/* Payment History */}
          <li>
            <div className="flex items-center gap-2">
              <MdOutlinePayment className="shrink-0 text-lg" />
              <NavLink
                to="/dashboard/paymentHistory"
                className={navClass}
              >
                PAYMENT HISTORY
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

          {/* Add Review */}
          <li>
            <div className="flex items-center gap-2">
              <BiSolidCommentDots className="shrink-0 text-lg" />
              <NavLink
                to="/dashboard/review"
                className={navClass}
              >
                ADD REVIEW
              </NavLink>
            </div>
          </li>

          {/* My Bookings */}
          <li>
            <div className="flex items-center gap-2">
              <RiBookAiFill className="shrink-0 text-lg"/>
              <NavLink
                to="/dashboard/myBookings"
                className={navClass}
              >
                MY BOOKINGS
              </NavLink>
            </div>
          </li>
  </>
}
        

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
