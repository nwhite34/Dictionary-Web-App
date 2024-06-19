import React from "react";
import video from '../../videos/headervideo.mp4'; // Make sure the path is correct

function HomePageSectionOne() { 
    return (
        <div className="relative w-full h-screen">
            <video 
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={video}
                autoPlay
                loop
                muted
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
                <h2 className="text-2xl font-light">Clean Energy Solutions</h2>
                <h1 className="text-4xl font-bold mt-2">As Reliable As The Sun</h1>
                <div className="mt-4 flex space-x-4">
                    <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full">Start Here if You're New to Solar</button>
                    <button className="px-6 py-3 bg-transparent border border-white rounded-full hover:bg-white hover:text-black">Get in touch</button>
                </div>
            </div>
        </div>
    );
}

export default HomePageSectionOne;
