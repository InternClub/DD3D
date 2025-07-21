import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import soiImg from "/Images/soiImg.png";
import nhpcImg from "/Images/nhpcImg.png";
import ifImg from "/Images/ifImg.png";
import Footer from "../../components/Footer/Footer";
import "./About.css";
import "remixicon/fonts/remixicon.css";
import Svg from "./Svg";
import Svg2 from "./Svg2";
import AboutCard from "../../components/Section/AboutCard";

type Props = {};

const About = (props: Props) => {

  return (
    <div className="w-full h-[100vh] flex flex-col">

  return (  
    <div className="w-[100vw] h-[100vh] ">

      <div className="flex items-center justify-center bg-gray-300 rounded-2xl mt-20 ml-40 mr-40 backdrop-blur-4xl ">
        <div className="flex items-center flex-col h-[50%] w-[50%] gap-8 m-5 p-3 ">
          <p className="font-bold text-5xl text-blue-800  ">
            Bespoke Software Solutions for Your Unique Business Needs | Best IT
            Company
          </p>
          <p className="font-semibold text-2xl text-black">
            We are a team of highly motivated and skilled developers dedicated
            to delivering only the best software.
          </p>
          <p className="font-semibold  text-2xl text-gray-800">
            Award-winning IT company in Dehradun providing web development,
            mobile apps, and enterprise solutions since 2020.
          </p>
          <div className="flex items-center justify-between flex-row gap-10 ">
            <div className="button1   bg-blue-800  rounded-2xl text-white p-3 ">
              <button className="title1 font-semibold  ">
                <span>Learn More</span>
              </button>
            </div>
            <div className="button2  rounded-2xl  bg-blue-800 text-white p-3 ">
              <button className="title2  font-semibold">
                <span>Get Sttrted</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex item-center justify-around w-[50%] h-[50%] ">
          {/* <img src='/Gif/service.json' /> */}
          <Player
            autoplay
            loop
            className="hover:scale-[1.1]"
            src="/Gif/Service.json"
            //   style={{ height: '300px', width: '300px' }} // Optional: set dimensions
          ></Player>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-300 rounded-2xl mt-20 ml-40 mr-40 backdrop-blur-4xl">
        <div className="flex item-center justify-around w-[50%] h-[50%] ml-15 backdrop-blur-lg ">
          {/* <img src='/Gif/Coding.json' /> */}
          <Player
            autoplay
            loop
            className="hover:scale-[1.1]"
            src="/Gif/Coding.json"
          ></Player>
        </div>
        <div className="flex flex-col  m-10 p-5 gap-5 ">
          <p className="text-blue-800 font-extrabold text-5xl ">
            Best Web & Mobile App Development Company | High Quality Bespoke
            Solutions
          </p>
          <p className="text-gray-600 font-bold ">
            Our expert software development team specializes in building custom
            web and mobile applications for businesses, organizations, and SMEs
            across India.
          </p>
          <p className="text-gray-600 font-bold ">
            We deliver complete software solutions that automate business
            processes, improve efficiency, and drive growth. As a leading IT
            company in Uttarakhand, we combine technical expertise with industry
            knowledge to create impactful digital products.
          </p>
          <div className="button3 font-semibold text-2xl bg-blue-700 flex flex-row items-center justify-center w-[250px] h-[50px] rounded-2xl  ">
            <button className="title ">
              <span>Get Free Consultaion</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col bg-gray-300 rounded-2xl mt-20 ml-40 mr-40 backdrop-blur-4xl">
        <div className="flex items-center justify-center font-extrabold text-4xl text-blue-700 ">
          <p>SERVICES</p>
        </div>
        <div className="flex items-center justify-center bg-blue-600 h-1.5 w-30 rounded-2xl m-1"></div>
        <div className="flex items-center justify-center text-gray-500 text-3xl font-semibold">
          <p>
            We are deeply committed to the growth and success of our clients.
          </p>
        </div>
        <div className="w-full py-8">
          <AboutCard />
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-300 mt-20 ml-40 mr-40 backdrop-blur-3xl rounded-2xl">
        <div className="m-12  p-5">
          <div className="text-blue-800">
            <Svg />
          </div>

          <p className="text-3xl font-bold text-blue-800 ">
            Top Software Development Company in Dehradun | We Build
          </p>
          <p className="text-2xl font-semibold text-gray-400 mt-1.5">
            With over 5 years experience in software analysis and design, our
            Dehradun-based team provides custom software solutions leveraging
            the latest IT trends. We help businesses across India improve
            operations, reduce costs by up to 40%, and increase efficiency
            through bespoke web and mobile applications.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-300 mt-20 ml-40 mr-40 backdrop-blur-3xl rounded-2xl">
        <div className="m-12  p-5">
          <div className="text-blue-800">
            <Svg2 />
          </div>
          <p className="text-3xl font-bold text-blue-800 ">
            IT Staff Augmentation Services | We Collaborate
          </p>

          <p className="text-2xl font-semibold text-gray-400 mt-1.5">
            As a leading software development company in Uttarakhand, we
            seamlessly integrate with your existing tech teams to scale
            applications or build custom solutions. Our IT collaboration
            services help businesses streamline processes, with 95% of clients
            reporting improved workflow efficiency within 3 months.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col bg-gray-300 mt-20 ml-40 mr-40 rounded-2xl">
        <div className="text-3xl font-bold text-blue-800 mt-10">
          <p>Our Clients</p>
        </div>
        <div className="flex items-center justify-center bg-blue-800 h-1.5 w-30 rounded-2xl m-1"></div>
        <div className=" text-blue-800 text-2xl font-semibold ">
          <p>Some of our clients.</p>
        </div>
        <div className="flex flex-row justify-between gap-40 p-10 m-10">
          <img src={soiImg} className="h-40 w-40 hover:scale-150" />
          <img src={nhpcImg} className="rounded-3xl h-40 w-40 hover:scale-150" />
          <img src={ifImg} className="h-40 w-40 hover:scale-150" />
        </div>
      </div>
      <div className="flex items-center justify-center bg-pink-600 ml-40 mr-40 mt-20 rounded-2xl p-10 ">
        <div className="flex flex-col m-5 ml-10 p-5">
          <p className="text-4xl font-extrabold">
            Are you ready to scale your business?
          </p>
          <p className="text-2xl font-medium">
            Get in touch and let us build something amazing <b> together!</b>
          </p>
        </div>
        <div className="button4 flex   rounded-2xl  bg-blue-800 text-white p-3">
          <button className="title">
            <span>Send a Message</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
