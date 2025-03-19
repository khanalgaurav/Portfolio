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
    <div className="flex justify-center items-center h-[93%]">
      <div className="">
        <div className=" flex items-center text-lg w-[60rem] ">
          <div className="w-[60%]">
            <h1 className="text-5xl font-bold mb-5">
              Front-End React Developer
            </h1>
            <p className="text-gray-500 mb-2">
              Hi ! I am Gaurav Khanal, a passionate Frontend React Developer
              from Kathmandu, Nepal
            </p>
            <div className="flex gap-3">
              <FaLinkedin className="text-3xl" />
              <FaGithub className="text-3xl" />
            </div>
            <div className="flex mt-16 text-2xl  gap-5 items-center">
              Tech Stack{" "}
              <span className="text-blue-400 font-bold text-3xl">~</span>
              <div className="flex gap-5 text-4xl">
                <FaHtml5 />
                <FaCss3 />
                <FaJs />
                <FaReact />
                <RiTailwindCssFill />
              </div>
            </div>
          </div>
          <div className="w-[40%] flex justify-center">
            <div className=" flex relative justify-center items-center rounded-full animation">
              <img
                className="object-cover rounded-full h-72 w-72"
                src={gaurav}
                alt="Profile picture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
