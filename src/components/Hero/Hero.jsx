import React from "react";
import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import gaurav from "../../assets/Images/Gaurav.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div
      className={`flex justify-center items-center h-[93%] bg-cover bg-[url(${gaurav})] bg-center`}
    >
      <div className="">
        <div className="flex flex-col md:flex-row md:items-center text-lg md:w-[60rem]">
          <div className="flex md:hidden justify-center">
            <div className=" flex relative justify-center items-center rounded-full animation">
              <img
                className="object-cover rounded-full h-72 w-72"
                src={gaurav}
                alt="Profile picture"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:w-[60%] text-center md:text-left">
            <h1 className="md:text-5xl text-4xl font-bold mb-5 md:mt-0 mt-5">
              Front-End React Developer
            </h1>
            <p className="text-gray-500 mb-2 text-base">
              Hi ! I am Gaurav Khanal, a passionate Frontend React Developer
              from Kathmandu, Nepal
            </p>
            <div className="flex gap-3 md:justify-start justify-center">
              <FaLinkedin className="text-3xl" />
              <FaGithub className="text-3xl" />
            </div>
            <div className="flex mt-16 text-xl gap-3 md:justify-start justify-center items-center">
              Tech Stack
              <span className="text-blue-400 font-bold text-3xl">~</span>
              <div className="flex gap-5 text-3xl md:text-4xl">
                <FaHtml5 />
                <FaCss3 />
                <FaJs />
                <FaReact />
                <RiTailwindCssFill />
              </div>
            </div>
          </div>
          <div className="w-[40%] hidden  md:flex justify-center">
            <div className=" flex relative justify-center items-center rounded-full animation">
              <img
                className="object-cover rounded-full h-72 w-72"
                src={gaurav}
                alt="Profile picture"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
