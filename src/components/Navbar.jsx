import { Link, NavLink } from "react-router-dom";
import logo from "../assets/website-logo.png";
import useAuth from "../hooks/useAuth";
import userDefault from "../assets/user-default.jpg";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogOut = () => {
    logout()
      .then(() => {
        toast("Successfully log out", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        console.error(error.message);
        toast("Log out failed", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };
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
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-primary ${isActive ? "text-primary" : "text-black"}`
                  }
                >
                  Home
                </NavLink>
                {user && (
                  <NavLink
                    to="/profileUpdate"
                    className={({ isActive }) =>
                      `hover:text-primary ${isActive ? "text-primary" : "text-black"}`
                    }
                  >
                    Update Profile
                  </NavLink>
                )}
                {user && (
                  <NavLink
                    to="/contact-us"
                    className={({ isActive }) =>
                      `hover:text-primary ${isActive ? "text-primary" : "text-black"}`
                    }
                  >
                    Contact Us
                  </NavLink>
                )}
              </ul>
            </div>
            <Link
              to="/"
              className="border-none md:btn hover:bg-transparent  md:bg-transparent "
            >
              <img
                src={logo}
                alt="Skyline Sanctuary Logo"
                className="max-w-28 md:max-w-36"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-6 px-1 text-base font-bold text-primary md:space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-primary ${isActive ? "text-primary" : "text-black"}`
                }
              >
                Home
              </NavLink>
              {user && (
                <NavLink
                  to="/profileUpdate"
                  className={({ isActive }) =>
                    `hover:text-primary ${isActive ? "text-primary" : "text-black"}`
                  }
                >
                  Update Profile
                </NavLink>
              )}
              {user && (
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    `hover:text-primary ${isActive ? "text-primary" : "text-black"}`
                  }
                >
                  Contact Us
                </NavLink>
              )}
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className=" dropdown dropdown-end rounded-full outline outline-4 outline-primary">
                <img
                  tabIndex={0}
                  role="button"
                  src={user.photoURL ? user.photoURL : userDefault}
                  alt=""
                  className="h-8 w-8 cursor-pointer rounded-full bg-secondary "
                />
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] mt-6 w-52 space-y-2 rounded-box bg-base-100 p-2 shadow "
                >
                  <li>
                    <a className="font-bold text-primary hover:bg-transparent focus:bg-primary">
                      {user.displayName ? user.displayName : ""}
                    </a>
                  </li>
                  <li>
                    <Link
                      className="bg-primary font-bold  text-white hover:bg-primary hover:text-white"
                      to="profileUpdate"
                    >
                      Update Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="bg-primary font-bold  text-white hover:bg-primary hover:text-white"
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link
                  to="/signup"
                  className="rounded-md bg-blue-700 p-3 font-bold text-white transition duration-200 hover:bg-blue-800 md:px-5 md:py-3"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="rounded-md bg-primary p-3 font-bold text-white transition duration-200 hover:bg-blue-800 md:px-5 md:py-3"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
