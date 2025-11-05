import React from "react";

const Traveljurnal = () => {
  return (
    <div className="bg-gray-100">
      <h1 className="text-5xl leading-relaxed text-center font-bold ">
        Travel Jurnal
      </h1>
      <p className="text-center text-gray-600 ">
        Real stories from real travelers sharing their adventures, tips, and
        unforgettable moments
      </p>
      <div className="flex items-center justify-center min-h-screen">
        <img
          src="/photos/j.jpg"
          alt="Travel destination"
          className="w-124 h-150 object-cover rounded-lg transform transition duration-500 hover:scale-105"
        />
      </div>
      <div className="text-center my-8 px-4 mt-0">
        <h2 className="text-3xl font-bold mb-2">Majestic Mountains</h2>
        <p className="text-gray-600 text-lg">
          Mountains rise high above the land, offering breathtaking views,
          adventure, and serenity in nature’s embrace.
        </p>
      </div>
    </div>
  );
};

export default Traveljurnal;
