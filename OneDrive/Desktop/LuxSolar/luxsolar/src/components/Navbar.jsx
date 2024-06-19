import React, { useState } from "react";
import LuxLogo from "../images/LuxLogo.jpg";
import PhoneIcon from "../images/icons8-phone-64.png"; // Import the phone icon
import "./Navbar.css"; // Import the custom CSS

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white font-sans">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <img src={LuxLogo} alt="Logo" className="h-8 mr-4" />
        </div>

        {/* Center - Navigation Links (hidden if width < 1000px) */}
        <div className="hidden lg:flex space-x-6 items-center text-sm">
          <a href="#home" className="hover:text-gray-300">HOME</a>
          <div className="relative group">
            <a href="#about-us" className="hover:text-gray-300 flex items-center">
              ABOUT US
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
            <div className="absolute left-0 hidden group-hover:block bg-black mt-2 p-2 space-y-2">
              <a href="#team" className="block hover:text-gray-300">Team</a>
              <a href="#history" className="block hover:text-gray-300">History</a>
            </div>
          </div>
          <div className="relative group">
            <a href="#services" className="hover:text-gray-300 flex items-center">
              SERVICES
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
            <div className="absolute left-0 hidden group-hover:block bg-black mt-2 p-2 space-y-2">
              <a href="#installation" className="block hover:text-gray-300">Installation</a>
              <a href="#maintenance" className="block hover:text-gray-300">Maintenance</a>
            </div>
          </div>
          <div className="relative group">
            <a href="#products" className="hover:text-gray-300 flex items-center">
              PRODUCTS
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
            <div className="absolute left-0 hidden group-hover:block bg-black mt-2 p-2 space-y-2">
              <a href="#solar-panels" className="block hover:text-gray-300">Solar Panels</a>
              <a href="#batteries" className="block hover:text-gray-300">Batteries</a>
            </div>
          </div>
          <a href="#quote" className="lg:block hidden px-4 py-2 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">Get a Quote</a>
        </div>

        {/* Right side - Quote Button and Phone Number */}
        <div className="hidden md:flex items-center space-x-4 md:ml-auto lg:ml-0 lg:flex-grow-0 md:flex-grow justify-center text-sm">
          <a href="#quote" className="lg:hidden px-4 py-2 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">Get a Quote</a>
          <div className="flex items-center">
            <img src={PhoneIcon} alt="Phone" className="h-6 mr-2" />
            <span className="text-xl">1800 202 930</span>
          </div>
        </div>

        {/* Hamburger Menu for Mobile (visible if width < 795px) */}
        <div className="lg:hidden flex items-center z-50">
          <button className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </button>
        </div>
      </div>

      {/* Side Navigation Bar */}
      <div
        className={`fixed top-0 right-0 h-full bg-black text-white transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-64 p-6 z-40`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-white z-50"></button>
        <nav className="mt-8">
          <a href="#home" className="block px-4 py-2 hover:bg-gray-700 text-sm">HOME</a>
          <a href="#about-us" className="block px-4 py-2 hover:bg-gray-700 text-sm">ABOUT US</a>
          <a href="#services" className="block px-4 py-2 hover:bg-gray-700 text-sm">SERVICES</a>
          <a href="#products" className="block px-4 py-2 hover:bg-gray-700 text-sm">PRODUCTS</a>
          <a href="#learning-centre" className="block px-4 py-2 hover:bg-gray-700 text-sm">LEARNING CENTRE</a>
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;
