import React, { use } from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../Context/Context';
import { FaSignOutAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { ThemeContext } from '../../Context/ThemeContext';
import { FiMoon, FiSun } from 'react-icons/fi';

const Navbar = () => {
  const { user, SignOut } = use(AuthContext);
  console.log(user)
  const { theme, toggleTheme } = use(ThemeContext);

  const handleSignOut = () => {
    SignOut()
      .then(() => {
        toast.success("Your account has been logged out successfully!");
      })
      .catch((error) => {
        toast.error(`Logout failed: ${error.message}`);
      });
  };

  const navLinks = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600"
            : "hover:text-blue-500 text-gray-800 transition-colors duration-300"
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/packages"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600"
            : "hover:text-blue-500 text-gray-800 transition-colors duration-300"
        }
      >
        All Packages
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600"
            : "hover:text-blue-500 text-gray-800 transition-colors duration-300"
        }
      >
        About Us
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600"
            : "hover:text-blue-500 text-gray-800 transition-colors duration-300"
        }
      >
        Contact
      </NavLink>
    </li>
    {user && (
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold border-b-2 border-blue-600"
              : "hover:text-blue-500 text-gray-800 transition-colors duration-300"
          }
        >
         Dashboard
        </NavLink>
      </li>
    )}
  </>
);


  return (
    <div className="navbar bg-blue-50 shadow-md sticky top-0 z-50 px-6">
      <div className="navbar-start">
        {/* Mobile menu button */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-1 z-[1] p-2 ml-0 shadow-lg bg-white rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        {/* Logo */}
        <NavLink to="/" className=" text-2xl mr-2 text-blue-700 font-bold flex items-center gap-1">
          <img src={logo} alt="logo" className="w-8 h-8 mr-1 " />
          Tourmate
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-sm">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end">
        <button
           onClick={toggleTheme}
           className="text-2xl p-2 m-2 hover:bg-gray-200 rounded-full  transition "
           aria-label="Toggle Theme"
          >
         {theme === 'light' ? <FiMoon className='text-slate-400' /> : <FiSun className='text-amber-500'/>}
      </button>
        {!user ? (
          <NavLink
            to="/login"
            className="btn btn-outline bg-blue-700 text-white btn-sm rounded hover:bg-blue-800 hover:text-white transition duration-300"
          >
            Login
          </NavLink>
        ) : (
          <div className="dropdown dropdown-end flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-blue-500">
              <img
                src={user.photoURL}
                alt="User"
                className="object-cover w-full h-full"
              />
            </div>

            <label tabIndex={0} className="btn btn-ghost btn-sm p-1 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu p-2  shadow bg-white rounded-box w-52 mt-30 right-0"
              style={{ right: 0 }}
            >
              <li className="px-3 pt-2 font-semibold text-blue-600 truncate">
                {user.displayName || 'User'}
              </li>
              
              <li className="px-3  font-semibold text-gray-500 truncate">
                {user.email || 'User'}
              </li>
              <li className='border-t-gray-700'></li>
             
              <li>
                <button
                  onClick={handleSignOut}
                  className="text-red-600 hover:text-red-800 flex items-center gap-2 px-3 py-2 rounded w-full"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
