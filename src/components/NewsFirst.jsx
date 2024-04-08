import React from "react";
import Laptop from "../assests/projectimages/Laptop.png";

const NewsFirst = () => {
  return (
    <div className="w-full bg-white py-0 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 py-0">
        <img
          className="w-[350px] mx-auto my-4 py-0 mt-0"
          src={Laptop}
          alt="/"
        />
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <button className="bg-[#F28D35] text-[#fdfffe] w-[200px] rounded-md font-medium my-8 mx-auto md:mx-0 py-3">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsFirst;
