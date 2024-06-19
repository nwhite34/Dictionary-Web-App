import React from "react";

function HomePageSectionTwo() {
  return (
    <div className="relative w-full h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-70"></div>
      <div className="relative z-10 w-full max-w-3xl text-center px-6">
        <h2 className="text-lg font-light uppercase">Welcome to</h2>
        <h1 className="text-4xl font-bold text-blue-500 mt-2">Penrith Solar Centre.</h1>
        <p className="mt-6 text-sm leading-relaxed">
          Situated in the heart of Sydney, we’re a team of everyday people who share a passion and are experienced in designing
          and installing solar solutions that are as reliable as the sun.
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          For people who are bold enough to stand up to their energy retailer.
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          For anyone who values excellence over compromise.
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          For families who want a better quality of life.
        </p>
        <p className="mt-6 text-sm leading-relaxed">
          That is why we have worked in unity to source the greatest products in the world, combined with our in-house team of
          information to installation renewable energy experts. This is what makes Penrith Solar Centre the best renewable energy
          experience Australia has to offer. Bar none.
        </p>
        <p className="mt-6 font-semibold text-sm">
          It’s 150 million km from the sun to your home – so don’t let it go to waste.
        </p>
        <p className="mt-2 font-semibold text-sm">
          Our service-obsessed team make every ray count.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full">Speak To Us Now</button>
          <button className="px-6 py-3 bg-transparent border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white">Get a Quote</button>
        </div>
      </div>
    </div>
  );
}

export default HomePageSectionTwo;
