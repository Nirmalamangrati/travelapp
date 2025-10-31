import React from "react";

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center text-white"
      style={{ backgroundImage: "url('/photos/travelbackground.jpg')" }}
    >
      <h1 className="text-5xl font-bold drop-shadow-lg">
        Welcome to TravelApp
      </h1>
    </div>
  );
};

export default Home;
