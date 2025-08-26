import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-center rounded-full bg-slate-700/55 items-center fixed top-2 left-1/3 w-auto  font-semibold z-50 px-4 py-2">
      {/* Logo */}
      {/* <div className="flex items-center">
        <img src="/doxalogo1.png" alt="logo" className="w-16 md:w-20 lg:w-24" />
      </div> */}

      {/* Mobile Menu Button */}
      <button
        className=" md:hidden text-white text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? "w-[100%]" : "w-0"
        }  md:flex flex-col transition-all h-[100vh] md:h-auto duration-1000 overflow-x-hidden ease-in-out md:flex-row  md:w-auto absolute md:relative top-full left-0 md:top-auto  bg-gray-900/90 md:bg-transparent`}
      >
        <ul className="flex flex-col  md:flex-row items-center gap-4 md:gap-14 w-full md:w-auto py-4 md:py-0">
          <li className=" md:w-auto">
            <Link
              to="/"
              className="block text-white hover:bg-zinc-800 px-3.5 py-1.5 rounded-full text-lg hover:text-slate-300 cursor-pointer text-center"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              to="/service"
              className="block text-white hover:bg-black px-4 py-3 rounded-full text-lg hover:text-slate-300 cursor-pointer text-center"
              onClick={() => setIsOpen(false)}
            >
              Service
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              to="/about"
              className="block text-white hover:bg-black px-4 py-3 rounded-full text-lg hover:text-slate-300 cursor-pointer text-center"
              // onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              to="/contact"
              className="block text-white hover:bg-black px-4 py-3 rounded-full text-lg hover:text-slate-300 cursor-pointer text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Get Started Button */}
      {/* <div className="hidden md:inline-block  p-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-md">
        <button className=" text-slate-200 px-4 py-2 rounded-md shadow-md w-full hover:bg-indigo-800 transition-colors">
          Get Started
        </button>
      </div> */}

      {/* Mobile Get Started Button */}
      {/* {isOpen && (
        <div className="md:hidden w-full p-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-md mt-4">
          <button
            className="bg-indigo-700 text-slate-200 px-4 py-2 rounded-md shadow-md w-full hover:bg-indigo-800 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </button>
        </div>
      )} */}
    </nav>
  );
};
