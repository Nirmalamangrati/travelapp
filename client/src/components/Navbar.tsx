import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4 flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-purple-600 text-2xl">🌐</span>
        <span className="font-bold text-xl text-gray-800">TravelApp</span>
      </div>

      {/* Menu */}
      <ul className="flex flex-col md:flex-row gap-2 md:gap-6 text-gray-700 font-medium items-center">
        <li className="hover:text-purple-600 cursor-pointer">Home</li>
        <li className="hover:text-purple-600 cursor-pointer">About</li>
        <li className="hover:text-purple-600 cursor-pointer">Contact</li>
        <li className="hover:text-purple-600 cursor-pointer">Destinations</li>
        <li className="hover:text-purple-600 cursor-pointer">Collections</li>
        <input
          type="text"
          placeholder="Search here..."
          className="rounded-full border border-gray-300 w-full md:w-80 px-4 py-1 text-sm"
        />
      </ul>

      {/* Button */}
      <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
