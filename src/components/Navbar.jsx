import { NavLink } from "react-router-dom";
import logo from "../assets/website-logo.png";

const Navbar = () => {
  return (
    <nav className="sticky left-0 top-0 z-50 bg-white  p-2">
      <div className="mx-auto max-w-screen-2xl">
        <div className="navbar  bg-opacity-85">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost  bg-transparent pl-0  hover:bg-transparent lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
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
                tabIndex={0}
                className="menu dropdown-content menu-sm z-[1] mt-3 w-52 space-y-2 rounded-box bg-base-100 p-2 text-primary shadow"
              >
                <NavLink className="transition duration-200 hover:text-blue-800">
                  Home
                </NavLink>
                <NavLink className="transition duration-200 hover:text-blue-800 ">
                  Profile
                </NavLink>
                <NavLink className="transition duration-200 hover:text-blue-800 ">
                  Profile Update
                </NavLink>
              </ul>
            </div>
            <a className="border-none md:btn hover:bg-transparent  md:bg-transparent ">
              <img
                src={logo}
                alt="Skyline Sanctuary Logo"
                className="max-w-28 md:max-w-36"
              />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-6 px-1 text-base font-bold text-primary md:space-x-8">
              <NavLink className="transition duration-200 hover:text-blue-800">
                Home
              </NavLink>
              <NavLink className="transition duration-200 hover:text-blue-800">
                Profile
              </NavLink>
              <NavLink className="transition duration-200 hover:text-blue-800">
                Profile Update
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="rounded-md bg-primary px-5 py-3 font-bold text-white transition duration-200 hover:bg-blue-800">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
