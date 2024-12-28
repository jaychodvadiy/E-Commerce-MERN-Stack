import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ecommerce from "../img/vecteezy_online-shopping-concept-e-business-e-commerce-product_33047263.jpg";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img src={ecommerce} alt={ecommerce} />
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`md:flex space-x-8 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded-md">
            Home
          </Link>
          <Link to="/shop" className="hover:bg-blue-700 px-3 py-2 rounded-md">
            Shop
          </Link>
          <Link to="/about" className="hover:bg-blue-700 px-3 py-2 rounded-md">
            About
          </Link>
          <Link
            to="/contact"
            className="hover:bg-blue-700 px-3 py-2 rounded-md"
          >
            Contact
          </Link>
          <Link to="/login" className="hover:bg-blue-700 px-3 py-2 rounded-md">
            Login
          </Link>
          <Link
            to="/register"
            className="hover:bg-blue-700 px-3 py-2 rounded-md"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
