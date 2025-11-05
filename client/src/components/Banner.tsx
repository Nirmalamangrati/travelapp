import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-[500px] mt-10 relative">
      <img
        src="/photos/travelbackground.jpg"
        alt="Travel Background"
        className="w-full h-full object-cover "
      />

      <div className=" absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 flex flex-col justify-center items-center text-white text-center px-4">
        <h2 className="font-bernard md:text-7xl font-bold mb-2 ">
          Discover Your Next Advanture
        </h2>
        <p className="text-lg md:text-xl flex items-center gap-1 brightness-30 py-2 mt-8 leading-relaxed">
          "Explore breathtaking Destinations around the world and document your
          jurney with our travel jurnal ."
        </p>
        <div className="flex justify-between mt-6 gap-6 px-4">
          <button className="bg-purple-700 text-white rounded px-4 py-2 leading-snug">
            Explore Destinations
          </button>
          <button className="border text-purple-700 rounded px-4 py-2 leading-snug">
            View jurnal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
