import React, { useEffect } from "react";
import HomePageSectionOne from "../pages/HomePageSectionOne";
import HomePageSectionTwo from "../pages/HomePageSectionTwo";
import HomePageSectionThree from "../pages/HomePageSectionThree";


function HomePage() {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        document.documentElement.style.scrollSnapType = 'none';
      } else {
        document.documentElement.style.scrollSnapType = 'y mandatory';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initially

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full snap-y snap-mandatory overflow-scroll md:scroll-snap-none no-scrollbar">
      <div className="snap-start w-full h-screen">
        <HomePageSectionOne />
      </div>
      <div className="snap-start w-full h-screen">
        <HomePageSectionTwo />
      </div>
      <div className="snap-start w-full h-screen">
      <HomePageSectionThree />
    </div>
    </div>
  );
}

export default HomePage;
