import { Heart } from "lucide-react";
import { scroller } from "react-scroll";
import { Element } from "react-scroll";

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
              GET IN TOUCH WITH US!
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
                  Contact Purpose
                </label>
                <select id="purpose" name="purpose" 
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-gray-900 focus:border-gray-900 formContact">
                  <option>Partnership</option>
                  <option>Feedback</option>
                  <option>Question</option>
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
                Send
              </button>
            </form>
            <div className="bg-[#161616] p-8 rounded-xl divChange">
              <h3 className="text-2xl font-bold text-white mb-6 border-b pb-3 textChange font-[Arial,Helvetica,sans-serif]">
                DEPARTMENT OF MEDIA GROUP
              </h3>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center space-x-3">
                  <span className="text-white font-bold text-lg textChange font-[Arial,Helvetica,sans-serif]">LGTR DIGITAL MARKETING</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-white font-bold text-lg textChange font-[Arial,Helvetica,sans-serif]">EIKYO MANAGEMENT</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-white font-bold text-lg textChange font-[Arial,Helvetica,sans-serif]">LIGHTER ACADEMY</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-white font-bold text-lg textChange font-[Arial,Helvetica,sans-serif]">RADDINE</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-white font-bold text-lg textChange font-[Arial,Helvetica,sans-serif]">LIGHTER MULTIMEDIA</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
    </section>

    <footer className="bg-[#161616] text-white py-8 text-center textChange divChange">
      <div className="max-w-7xl mx-auto px-4">
        <p>&copy; 2024 Lighter Media Group. LIGHT THE WORLD THROUGH MEDIA.</p>
      </div>
    </footer>
    </Element>
  );
};

export default Footer;
