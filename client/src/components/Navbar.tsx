import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-purple-600 text-2xl">🌐</span>
        <span className="font-bold text-xl text-gray-800">TravelApp</span>
      </div>

      {/* Menu */}
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li className="hover:text-purple-600 cursor-pointer">Home</li>
        <li className="hover:text-purple-600 cursor-pointer">About</li>
        <li className="hover:text-purple-600 cursor-pointer">Contact</li>
        <li className="hover:text-purple-600 cursor-pointer">Destinations</li>
        <li className="hover:text-purple-600 cursor-pointer">Collections</li>
        <input
          type="text"
          placeholder="Search here what you want.."
          className="rounded-full border border-gray-300 w-80 px-4  text-xs ml-40 "
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
