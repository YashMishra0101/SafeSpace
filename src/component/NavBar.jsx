import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage logged-in state manually
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const logout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
    closeMenu();
    toast.success("Logout Successful");
    navigate("/");
  };

  const handleMenuItemClick = () => {
    closeMenu();
  };

  return (
    <nav className="bg-purple-600 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <span className="flex items-center space-x-3">
          <Link to="/" onClick={handleMenuItemClick}>
            <img src={logo} className="h-8" alt="SafeSpace Logo" />
          </Link>
          <Link to="/" onClick={handleMenuItemClick}>
            <div className="text-white font-bold text-xl">SafeSpace</div>
          </Link>
        </span>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
        <ul
          className={`md:flex md:space-x-4 ${
            isOpen ? "block" : "hidden"
          } md:block absolute md:relative top-[3rem] right-0 md:top-0 md:right-auto bg-purple-600 md:bg-transparent w-full md:w-auto text-left md:text-left`}
        >
          <li className="border-t border-purple-400 md:border-0">
            <NavLink
              to="/"
              className="block px-4 py-2 text-white hover:underline"
              onClick={handleMenuItemClick}
            >
              Home
            </NavLink>
          </li>
          <li className="border-t border-purple-400 md:border-0">
            <NavLink
              to="/supportresources"
              className="block px-4 py-2 text-white hover:underline"
              onClick={handleMenuItemClick}
            >
              Support Resources
            </NavLink>
          </li>
          <li className="border-t border-purple-400 md:border-0">
            <NavLink
              to="/videoHelp"
              className="block px-4 py-2 text-white hover:underline"
              onClick={handleMenuItemClick}
            >
              Videos Help
            </NavLink>
          </li>
          <li className="border-t border-purple-400 md:border-0">
            <NavLink
              to="/reachout"
              className="block px-4 py-2 text-white hover:underline"
              onClick={handleMenuItemClick}
            >
              Reach Out
            </NavLink>
          </li>
          <li className="border-t border-purple-400 md:border-0">
            <NavLink
              to="/emergencycontacts"
              className="block px-4 py-2 text-white hover:underline"
              onClick={handleMenuItemClick}
            >
              Emergency Contacts
            </NavLink>
          </li>
          <li className="border-t border-purple-400 md:border-0">
            <NavLink
              to="/about"
              className="block px-4 py-2 text-white hover:underline"
              onClick={handleMenuItemClick}
            >
              About
            </NavLink>
          </li>
          {!isLoggedIn && (
            <>
              <li className="border-t border-purple-400 md:border-0">
                <NavLink
                  to="/login"
                  className="block px-4 py-2 text-white hover:underline"
                  onClick={handleMenuItemClick}
                >
                  Login
                </NavLink>
              </li>
              <li className="border-t border-purple-400 md:border-0">
                <NavLink
                  to="/signup"
                  className="block px-4 py-2 text-white hover:underline"
                  onClick={handleMenuItemClick}
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
          {isLoggedIn && (
            <li className="border-t border-purple-400 md:border-0">
              <button
                onClick={logout}
                className="block px-4 py-2 text-white hover:underline"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
