import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { toggleTheme } from "@/components/home/Theme";
import Logo from '@/assets/logo.jpg'

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [navBg, setNavBg] = useState(false);

  const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Eksplorasi", href: "#eksplorasi" },
];

  useEffect(() => {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      const form = document.getElementsByClassName("formContact");
      for (let i = 0; i < form.length; i++) {
          (form[i] as HTMLElement).style.color = "black";
      }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section2 = document.getElementById("why-digital-marketing-section");

      if (section2) {
        const sectionTop = section2.offsetTop;

        // Jika posisi scroll lewat section2 -> ubah bg navbar
        if (window.scrollY >= sectionTop - 80) {
          setNavBg(true);
        } else {
          setNavBg(false);
        }
      }}
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  })

   
  return (
    <>
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 ${navBg ? "bg-[#28292D]" : "bg-transparent"}`}>
        <div className="flex justify-between items-center px-8 py-4 text-white">

          {/* Brand */}
          <a href="#home" className="text-2xl font-semibold">
            {/* <img src={Logo} alt="" style={{ width: "40%", marginLeft: "50%" }}/> */}
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#eksplorasi" className="hover:text-gray-300">Eksplorasi</a></li>
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
            <button onClick={toggleTheme} className="relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full px-1 transition">
              {/* Matahari untuk light */}
              <span className="absolute left-9 text-yellow-400 dark:hidden z-20 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              </span>

              {/* Bulan untuk dark */}
              <span className="absolute right-9 hidden dark:block text-white z-20 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              </span>

              {/* Slider */}
              <span className="bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 dark:translate-x-8 z-10"></span>
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
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity ${ open ? "opacity-100 visible" : "opacity-0 invisible" }`} onClick={() => setOpen(false)}></div>

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
          <li><a href="/" className="block hover:text-gray-300" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="/about" className="block hover:text-gray-300" onClick={() => setOpen(false)}>About Us</a></li>
          <li><a href="#eksplorasi" className="block hover:text-gray-300" onClick={() => setOpen(false)}>Eksplorasi</a></li>

          <li>
            <a href="#" className="block bg-black px-4 py-2 rounded-full border border-white shadow-sm hover:bg-gray-800 transition" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>

          <li>
            <button onClick={toggleTheme} className="relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition">
              <span className="absolute left-1 text-yellow-400 dark:hidden">☀</span>
              <span className="absolute right-1 hidden dark:block text-white">🌙</span>

              <span className="bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 dark:translate-x-8"></span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
