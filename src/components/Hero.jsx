import React from "react";
import HeroImage from "../assests/projectimages/HeroImage.png";
import Banner from "./Banner";

function Hero() {
  return (
    <div className="text-red relative">
      <div className="relative">
        <img className="w-full" src={HeroImage} alt="My Image" />
        <div className="absolute bottom-8 left-8 bg-[#35f2c3] px-2 py-2 bg-gradient-to-r from-green-400 to-blue-500 ">
          <Banner />
        </div>
      </div>
    </div>
  );
}

export default Hero;
