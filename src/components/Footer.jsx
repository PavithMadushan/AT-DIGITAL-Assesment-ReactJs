import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Logo from "../assests/projectimages/Logo.png";

const Footer = () => {
  return (
    <div className=" text-white bg-purple-700 ">
      <div className="flex w-full mx-auto py-0 px-20 justify-between ">
        <div className="py-5 w-4/5">
          <img className="h-8 w-auto" src={Logo} alt="My Image" />
          <div className="max-w-full w-4/5">
            <p className="py-4 w-3/2">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
        </div>

        <div className="flex w-2/3 justify-end mt-6">
          <div className="flex flex-col w-1/2">
            <h1 className="font-medium text-white">Our Technologies</h1>
            <ul>
              <li className="py-2 text-sm">ReactJS</li>
              <li className="py-2 text-sm">Gatsby</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">NextJS</li>
              <li className="py-2 text-sm">NodeJS</li>
            </ul>
          </div>
          <div className="flex flex-col w-3/5 px-2">
            <h5 className="font-medium text-white">Our Services</h5>
            <ul>
              <li className="py-2 text-sm">Social media Marketing</li>
              <li className="py-2 text-sm">Web & Mobile App Development</li>
              <li className="py-2 text-sm">Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <hr class="mt-[30px] text-white w-1/3" />
      </div>
      <div class="flex items-center justify-center pb-8 pt-[9px] md:py-8">
        <p class="text-[10px] font-normal md:text-[12px]">
          Privacy Policy | Terms & Conditions
        </p>
      </div>
    </div>
  );
};

export default Footer;
