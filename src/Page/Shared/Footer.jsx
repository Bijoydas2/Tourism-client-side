import React from "react";
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-indigo-200 shadow-inner mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 md:flex md:justify-between md:items-start">
        {/* Logo and Address */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <div className="flex items-center mb-4">
            <img
              src={logo}
              alt="TourMate company logo"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="text-2xl font-bold text-blue-700">TourMate</span>
          </div>
          <address className="not-italic text-gray-600 text-sm">
            123 Travel Street,<br />
            Dhaka, Bangladesh<br />
            Phone: +880 1711 223344<br />
            Email: info@tourmate.com
          </address>
        </div>

        {/* Links */}
        <div className="mb-8 md:mb-0 md:w-1/3 grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Company</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition" aria-label="Facebook">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54v-2.205c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.772-1.63 1.562v1.876h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17 22 12z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition" aria-label="Twitter">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.04 9.04 0 01-2.87 1.1 4.52 4.52 0 00-7.69 4.13 12.83 12.83 0 01-9.31-4.72 4.48 4.48 0 001.4 6.05A4.52 4.52 0 012 9.71v.06a4.51 4.51 0 003.63 4.42 4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.22 3.13A9.05 9.05 0 012 19.54a12.76 12.76 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.42-.02-.63A9.18 9.18 0 0023 3z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition" aria-label="Instagram">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-200 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} TourMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
