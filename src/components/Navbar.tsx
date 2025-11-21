import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { toggleTheme } from "@/components/Theme";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

   
  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="flex justify-between items-center px-8 py-4 text-white">

          {/* Brand */}
          <a href="#" className="text-2xl font-semibold">
            Lighter Media Group
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Eksplorasi</a></li>
            <li>
              <a
                href="#"
                className="bg-black px-4 py-2 rounded-full border border-white shadow-sm hover:bg-gray-800 transition"
              >
                Contact
              </a>
            </li>

            {/* Dark Mode Button */}
            <li>
            <button
              onClick={toggleTheme}
              className="relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition"
            >
              <span
                className="absolute left-1 text-yellow-400 dark:hidden">☀</span>
              <span
                className="absolute right-1 hidden dark:block text-white">🌙</span>

              <span
                className="bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 
                          dark:translate-x-8"
              ></span>
            </button>
          </li>

          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* SIDEBAR OVERLAY */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity ${ open ? "opacity-100 visible" : "opacity-0 invisible" }`} onClick={() => setOpen(false)}/>

      {/* SIDEBAR MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white z-50 p-6 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setOpen(false)}
        >
          <X size={28} />
        </button>

        <ul className="mt-12 space-y-6 text-lg">
          <li><a href="#" className="block hover:text-gray-300" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#" className="block hover:text-gray-300" onClick={() => setOpen(false)}>About Us</a></li>
          <li><a href="#" className="block hover:text-gray-300" onClick={() => setOpen(false)}>Eksplorasi</a></li>

          <li>
            <a
              href="#"
              className="block bg-black px-4 py-2 rounded-full border border-white shadow-sm hover:bg-gray-800 transition"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </li>

          {/* Dark Mode (Mobile Sidebar) */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
