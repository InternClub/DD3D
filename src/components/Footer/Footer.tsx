import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Link } from "react-router";
// import linkedin from "../../../public/Gif/linked.json"

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between bg-gray-300 mt-20 mr-40 ml-40 rounded-2xl p-3 ">
        <div className="bg-white text-gray-500 p-10 rounded-2xl ml-2">
          <p className="text-3xl font-bold text-gray-600">DR.DESIGN PVT.LTD.</p>
          <p className="m-2">11,East Canal Road Dehradun, <br /> 248001, Uttarakhand, India.</p>
        </div>
        <div className="items flex flex-col">
          <p className="text-blue-700 font-bold text-xl">LINK</p>
          <li className="text-gray-600 hover:underline cursor-pointer">About Us</li>
          <li className="text-gray-600 hover:underline cursor-pointer">Contact</li>
          <li className="text-gray-600 hover:underline cursor-pointer">Privacy Policy</li>
        </div>
        <div className=" items flex flex-col">
          <p className="text-blue-700 font-bold text-xl">OUR SERVICES</p>
          <li className="text-gray-600 hover:underline cursor-pointer">Web Development</li>
          <li className="text-gray-600 hover:underline cursor-pointer">Mobile App Development</li>
          <li className="text-gray-600 hover:underline cursor-pointer">ERP Development</li>
          <li className="text-gray-600 hover:underline cursor-pointer">General IT Consultations</li>
          <li className="text-gray-600 hover:underline cursor-pointer">AI,Data & Analytic</li>
        </div>
        <div className="flex flex-col items-center justify-center text-blue-700 mr-2">
          <p className="text-2xl font-bold ">Social Media Links.</p>
          <p className="font-bold">Follow us on social media.</p>
          <a
            href="https://www.linkedin.com/company/drdesignpvtltd/"
            className="h-10 w-10 hover:scale-200"
          >
            <Player autoplay loop src="/Gif/linked.json"></Player>
          </a>
        </div>
      </div>
      <div className="text-red-700 flex items-center justify-center text-3xl">
        copyright &copy; 2025 Dr. Design Pvt.Ltd. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
