import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { toggleTheme } from "@/components/about/Theme";
import Logo from '@/assets/Home/logo.jpg'
const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    const form = document.getElementsByClassName("formContact");
    for (let i = 0; i < form.length; i++) {
      (form[i] as HTMLElement).style.color = "black";
    }
  }, []);

  // Data untuk Mega Menu Produk
  const productItems = [
    { title: "Branding Agency", desc: "Connect with third-party tools that you're already using." },
    { title: "Digital Marketing Agency", desc: "Connect with third-party tools that you're already using." },
    { title: "E-Commerce Agency", desc: "Connect with third-party tools that you're already using." },
    { title: "Tech Agency", desc: "Connect with third-party tools that you're already using." },
    { title: "Event Organizer", desc: "Connect with third-party tools that you're already using." },
    { title: "Multimedia", desc: "Connect with third-party tools that you're already using." },
    { title: "Academy", desc: "Connect with third-party tools that you're already using." }
  ];

  return (
    <>
      {/* NAVBAR */}
        <nav className={`fixed top-0 left-0 w-full z-50 bg-[#28292D]`}>
          <div className="flex items-center px-8 py-4 text-white max-w-7xl mx-auto">
            
            {/* 1. SEBELAH KIRI: LOGO */}
            <div className="flex-1 flex justify-start">
              <a href="#home" className="text-2xl font-bold tracking-tighter italic">
                <img src={Logo} className="h-12 w-auto xs:mx-auto" alt="Logo" />
              </a>
            </div>

            {/* 2. TENGAH: DESKTOP MENU */}
            <div className="hidden md:flex justify-center">
              <ul className="flex items-center space-x-8 font-medium">
                <li><a href="/" className="hover:text-gray-400 transition">Beranda</a></li>
                <li><a href="/tentang" className="hover:text-gray-400 transition">Tentang Kami</a></li>
                
                <li className="relative group py-2">
                  <button className="flex items-center gap-2 text-white hover:text-gray-400 transition">
                    Produk
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-400 transition-transform duration-200 group-hover:rotate-180">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
                    </svg>
                  </button>

                  <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-[800px] bg-[#0F1115] shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-800 p-8">
                    <div className="grid grid-cols-3 gap-x-10 gap-y-8">
                      {productItems.map((item, index) => (
                        <a key={index} href="#" className="group/item block transition">
                          <h3 className="text-white font-bold text-lg mb-1 group-hover/item:text-blue-400 transition">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-snug">
                            {item.desc}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
                
                <li><a href="#eksplorasi" className="hover:text-gray-400 transition">Berita</a></li>
                <li><a href="#contact" className="hover:text-gray-400 transition">Kontak</a></li>
              </ul>
            </div>
            <div className="flex-1 hidden md:block"></div>

          </div>
        </nav>
          {/* <div className="flex-1 flex justify-end items-center gap-4">
            <div className="hidden md:block">
              <button onClick={toggleTheme} className="relative w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full px-1 transition-colors duration-300 focus:outline-none">
                <span className="absolute left-1.5 text-yellow-500 dark:opacity-0 transition-opacity duration-300">  
                </span>

                <span className="absolute right-1.5 text-blue-200 opacity-0 dark:opacity-100 transition-opacity duration-300">
                </span>

                <span className="bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 dark:translate-x-7 z-10"></span>
              </button>
            </div>

            <button className="md:hidden text-white hover:text-gray-400 transition" onClick={() => setOpen(true)}>
              <Menu size={28} />
            </button>
          </div> */}

      {/* SIDEBAR MOBILE */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity ${ open ? "opacity-100 visible" : "opacity-0 invisible" }`} onClick={() => setOpen(false)}></div>
      
      <div className={`fixed top-0 right-0 h-full w-72 bg-[#1e1f22] text-white z-50 p-6 transform transition-transform duration-300 ease-in-out ${ open ? "translate-x-0" : "translate-x-full" }`}>
        <button className="absolute top-5 right-5 text-white" onClick={() => setOpen(false)}>
          <X size={28} />
        </button>

        <ul className="mt-12 space-y-6 text-lg border-t border-gray-700 pt-6">
          <li><a href="/" className="block hover:text-gray-300" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="/tentang" className="block hover:text-gray-300" onClick={() => setOpen(false)}>Tentang Kami</a></li>
          <li>
             <p className="text-gray-500 text-sm uppercase mb-3">Produk</p>
             <div className="pl-4 space-y-4">
                {productItems.slice(0, 5).map((item, idx) => (
                  <a key={idx} href="#" className="block text-sm font-bold hover:text-gray-300" onClick={() => setOpen(false)}>
                    {item.title}
                  </a>
                ))}
             </div>
          </li>
          <li><a href="#contact" className="block bg-white text-black text-center py-2 rounded-lg font-bold" onClick={() => setOpen(false)}>Contact</a></li>
          
          <li className="pt-4 border-t border-gray-700">
             <div className="flex items-center justify-between">
                <span>Mode Gelap</span>
                <button onClick={toggleTheme} className="relative w-12 h-6 flex items-center bg-gray-600 rounded-full px-1">
                   <span className="bg-white w-4 h-4 rounded-full transform transition-transform duration-300 dark:translate-x-6"></span>
                </button>
             </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;