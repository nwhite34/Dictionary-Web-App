import React from "react";

function HomePageSectionThree() {
  return (
    <div className="relative w-full h-screen bg-white text-black flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">
        <div className="relative group">
          <img
            src="https://source.unsplash.com/random/400x400/?residential,solar"
            alt="Residential Solar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Residential Solar</span>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://source.unsplash.com/random/400x400/?commercial,solar"
            alt="Commercial Solar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Commercial Solar</span>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://source.unsplash.com/random/400x400/?solar,maintenance"
            alt="Solar Servicing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Solar Servicing</span>
          </div>
        </div>
        <div className="relative group">
          <img
            src="https://source.unsplash.com/random/400x400/?ev,charging"
            alt="EV Charging"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">EV Charging</span>
          </div>
        </div>
      </div>
      <button className="mt-8 px-6 py-3 bg-transparent border border-black text-black rounded-full hover:bg-black hover:text-white transition-colors duration-300">
        How we can help you
      </button>
      <div className="absolute bottom-4 left-4 right-4 flex justify-between">
        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full">
          Speak To Us Now
        </button>
        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full">
          Get a Quote
        </button>
      </div>
    </div>
  );
}

export default HomePageSectionThree;
