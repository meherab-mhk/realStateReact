import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import "./navbar.css";

const Navbar = () => {
  AOS.init();
  const { user, setUser, logout } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logout()
      .then(() => {
        setUser("");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const nav = (
    <>
      <li className="mr-5">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li className="mr-5">
        <NavLink to="/login">Login</NavLink>
      </li>
      <li className="mr-5">
        <NavLink to="/register">Register</NavLink>
      </li>
      {user && (
        <li className="mr-5">
          <NavLink to="/user-profile">User Profile</NavLink>
        </li>
      )}

      <li className="mr-5">
        <NavLink to="/faq">Faq</NavLink>
      </li>
    </>
  );
  return (
    <div data-aos="fade-down" className="my-4 lg:w-[1180px] lg:mx-auto">
      <div className="p-4 navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="ps-0 btn btn-ghost lg:hidden"
            >
              <svg
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
            >
              {nav}
            </ul>
          </div>
          <a className="font-bold text-2xl">
            <span className="text-[#ffbe00] animate__animated animate__bounce">
              Imperial
            </span>{" "}
            Estates
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 font-bold">{nav}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-3 items-center">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt="User Img" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      {user.displayName
                        ? user.displayName
                        : "User name not found"}
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleLogout()}
                className="btn btn-warning"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-warning">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
