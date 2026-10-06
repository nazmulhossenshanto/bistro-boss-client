import { Link } from "react-router";

 
const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link to={"/"} className="text-white">HOME</Link>
      </li>

      <li>
        <a className="text-white">CONTACT US</a>
      </li>

      <li>
        <a className="text-white">DASHBOARD</a>
      </li>

      <li>
        <Link to={"/menu"} className="text-white">OUR MENU</Link>
      </li>

      <li>
        <Link to='/order' className="text-white">OUR SHOP</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 mx-auto max-w-7xl bg-black/40 text-white shadow-sm">
      
      {/* Navbar Start */}
      <div className="navbar-start">
        
        {/* Mobile Menu */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white lg:hidden"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content z-1 mt-3 w-52 rounded-box bg-black/95 p-2 text-white shadow"
          >
            {navOptions}
          </ul>
        </div>

        {/* Logo */}
        <a className="btn btn-ghost text-xl text-white">
          BISTRO BOSS
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          {navOptions}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <a className="btn bg-white text-black hover:bg-gray-200">
          Button
        </a>
      </div>
    </div>
  );
};

export default Navbar;
 
 