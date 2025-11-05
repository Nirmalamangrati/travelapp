import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-50  py-1">
      <h1 className="font-serif text-6xl font-semibold md-text-6xl mt-0 text-black text-center font-bold leading-loose">
        Featured Destinations
      </h1>
      <p className="text-center text-xl text-gray-500 ">
        "Handpicked locations that will inspire your wanderlust and create
        unforgettable memories."
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div className="p-4 transform transition duration-500 hover:scale-105">
          <img
            src="/photos/a.jpg"
            alt="Travel 1"
            className="rounded-lg w-200 h-100 object-cover"
          />

          <h2 className="text-xl font-semibold mb-2">Beautiful Island</h2>
          <p className="text-gray-600 text-sm">
            Experience the serene beauty of the ocean and soft sand. Perfect
            spot for your next vacation!
          </p>
        </div>
        <div className="p-4 transform transition duration-500 hover:scale-105">
          <img
            src="/photos/b.jpg"
            alt="Travel 1"
            className="rounded-lg w-200 h-100 object-cover"
          />
          <h2 className="text-xl font-semibold mb-2">Beautiful Island</h2>
          <p className="text-gray-600 text-sm">
            Experience the serene beauty of the ocean and soft sand. Perfect
            spot for your next vacation!
          </p>
        </div>
        <div className="p-4 transform transition duration-500 hover:scale-105">
          <img
            src="/photos/i.jpg"
            alt="Travel 1"
            className="rounded-lg w-200 h-100 object-cover"
          />
          <h2 className="text-xl font-semibold mb-2">Beautiful Island</h2>
          <p className="text-gray-600 text-sm">
            Experience the serene beauty of the ocean and soft sand. Perfect
            spot for your next vacation!
          </p>
        </div>
        <div className="p-4 transform transition duration-500 hover:scale-105">
          <img
            src="/photos/e.jpg"
            alt="Travel 1"
            className="rounded-lg w-200 h-100 object-cover"
          />
          <h2 className="text-xl font-semibold mb-2">Beautiful Island</h2>
          <p className="text-gray-600 text-sm">
            Experience the serene beauty of the ocean and soft sand. Perfect
            spot for your next vacation!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
