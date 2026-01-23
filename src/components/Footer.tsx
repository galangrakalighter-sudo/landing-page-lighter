import { Heart } from "lucide-react";
import { scroller } from "react-scroll";
import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <Element name="contact-section">
      <section id="contact" className="py-20 bg-[#161616] divChange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* MAPS — KIRI */}
          <div className="w-full flex justify-center md:mt-[10%]">
            <div className="w-full max-w-4xl rounded-xl overflow-hidden">
              {/* Perbesar tinggi: ubah pt-[40%] */}
              <div className="relative w-full pt-[40%] md:pt-[100%] lg:pt-[140%] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.13020391034!2d107.6049541696215!3d-6.947723068308638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8933e050ea9%3A0xb7b29b67f51d0abd!2sJl.%20Soekarno-Hatta%20No.399A%2C%20Karasak%2C%20Kec.%20Astanaanyar%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040243!5e0!3m2!1sid!2sid!4v1764042896282!5m2!1sid!2sid"
                  className="absolute top-0 left-0 w-full h-full border-0 rounded-xl"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>


          {/* FORM GET IN TOUCH — KANAN */}
          <div className="bg-[#161616] p-8 rounded-xl divChange">
            <h2 className="text-3xl font-bold text-white mb-6 textChange font-[Arial,Helvetica,sans-serif]">
              HUBUNGI KAMI
            </h2>

            <form action="#" method="POST" className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white textChange font-[Arial,Helvetica,sans-serif]">
                  Nama
                </label>
                <input type="text" id="name" name="name" 
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-gray-900 focus:border-gray-900 formContact"/>
              </div>

              <div>
                <label className="block text-sm font-medium text-white textChange">
                  Email
                </label>
                <input type="email" id="email" name="email" 
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-gray-900 focus:border-gray-900 formContact"/>
              </div>

              <div>
                <label className="block text-sm font-medium text-white textChange">
                  Tujuan Kontak
                </label>
                <select id="purpose" name="purpose" 
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-gray-900 focus:border-gray-900 formContact">
                  <option>Klien</option>
                  <option>Masukan</option>
                  <option>Pertanyaan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white textChange">
                  Pesan
                </label>
                <textarea id="message" name="message" rows={4} 
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-gray-900 focus:border-gray-900 formContact"></textarea>
              </div>

              <button type="submit" 
                className="w-full px-4 py-3 bg-[#161616] text-white font-semibold textChange divChange">
                Kirim
              </button>
            </form>
            <div className="bg-[#161616] p-8 rounded-xl divChange">
              <h3 className="text-2xl font-bold text-white mb-6 border-b pb-3 textChange font-[Arial,Helvetica,sans-serif]">
                KONTAK KAMI
              </h3>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center space-x-3">
                  <span className="text-white font-bold text-lg textChange font-[Arial,Helvetica,sans-serif]">wegrow@lightermediagroup.com</span>
                </li>
                <li className="flex items-center space-x-3">
                 <div className="bg-green-500 w-9 h-9 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="text-white text-2xl"
                    />
                  </div>
                  <span className="text-white font-bold text-lg textChange font-[Arial,Helvetica,sans-serif]">
                    <a href="https://wa.me/628812431684" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                      +628812431684
                    </a>
                  </span>
                </li>

                {/* Instagram */}
                <li className="flex items-center space-x-3">
                  <div className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-2 rounded-full">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <span className="text-white font-bold text-lg textChange font-[Arial,Helvetica,sans-serif]">
                    <a href="https://www.instagram.com/lightermediagroup/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                      @lightermediagroup
                    </a>
                  </span>
                </li>
                {/* <li className="flex items-center space-x-3">
                  <span className="text-white font-bold text-lg textChange font-[Arial,Helvetica,sans-serif]">LIGHTER MULTIMEDIA</span>
                </li> */}
              </ul>
            </div>
          </div>

        </div>
    </section>

    <footer className="bg-[#161616] xs:mt-[-10%] md:mt-0 lg:mt-0 xl:mt-0 text-white py-8 text-center textChange divChange">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; 2024 Lighter Media Group. WIN THE MARKET FOR YOU.</p>
      </div>
    </footer>
    </Element>
  );
};

export default Footer;
