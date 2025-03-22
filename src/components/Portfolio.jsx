import React from "react";
import homepage from "../assets/Images/Projects/shopiestore.png";
import { FaGithub, FaLink, FaNode, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { SiDjango, SiExpress, SiMongodb } from "react-icons/si";
import dashboard from "../assets/Images/Projects/dashboard.png";
import fiscord from "../assets/Images/Projects/fiscordhome.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="p-5 md:w-[90rem] w-full">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-xl font-bold text-blue-500">Portfolio</h1>
          <h1 className="text-2xl font-bold ">Personal Projects</h1>
        </div>
        {/* project no 1 */}
        <div className="flex md:flex-row flex-col justify-between items-center gap-5 mb-24 ">
          <div>
            <img
              className="md:w-[100rem] w-[20rem] rounded-3xl border-2 border-black"
              src={homepage}
              alt="Project image"
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <h1 className="font-bold text-xl">Shopie Store | Ecommerce</h1>
            <p className="mb-5 text-lg">
              Designed a responsive e-commerce platform that offers a seamless
              shopping experience with efficient state management and fast load
              times. The platform features a dynamic product listing, intuitive
              navigation, and an optimized UI for smooth performance across
              devices.
            </p>
            <div className="flex gap-5 mb-5">
              <p className="flex gap-1 font-bold items-center">
                React <FaReact className="text-lg" />
              </p>
              <p className="flex gap-1 font-bold items-center">
                Tailwind <RiTailwindCssFill className="text-lg" />
              </p>
            </div>
            <div className="flex gap-5">
              <Link to="https://github.com/khanalgaurav/Shopie">
                <div className="flex gap-1 font-bold items-center border border-black px-2 py-1 rounded-lg">
                  <FaGithub />
                  Source Code
                </div>
              </Link>
              <Link to="https://shopiestore.netlify.app/">
                <div className="flex gap-1 font-bold items-center border border-black px-2 py-1 rounded-lg">
                  Live Demo
                  <FiExternalLink />
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* project no 2 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-24">
          <div className="block md:hidden">
            <img
              className="w-[100rem] rounded-3xl border-2 border-black"
              src={dashboard}
              alt="Project image"
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <h1 className="font-bold text-xl">
              Nepali Sign Language Detection
            </h1>
            <p className="mb-5 text-lg">
              This platform enables real-time hand landmark detection using
              MediaPipe, providing a seamless and interactive experience. It
              integrates with a Python (Django) backend via RESTful APIs and
              utilizes a CNN-based model trained on 36,000 images for highly
              accurate recognition.
            </p>
            <div className="flex gap-5 mb-5">
              <p className="flex gap-1 font-bold items-center">
                React <FaReact className="text-lg" />
              </p>
              <p className="flex gap-1 font-bold items-center">
                Tailwind <RiTailwindCssFill className="text-lg" />
              </p>
              <p className="flex gap-1 font-bold items-center">
                Django <SiDjango className="text-lg" />
              </p>
            </div>
            <div className="flex gap-5">
              <Link to="https://github.com/khanalgaurav/Shanketik-Bhasa">
                <div className="flex gap-1 font-bold items-center border border-black px-2 py-1 rounded-lg">
                  <FaGithub />
                  Source Code
                </div>
              </Link>
              <Link to="#">
                <div className="flex gap-1 font-bold items-center border border-black px-2 py-1 rounded-lg">
                  Live Demo
                  <FiExternalLink />
                </div>
              </Link>
            </div>
          </div>
          <div className="md:block hidden">
            <img
              className="w-[100rem] rounded-3xl border-2 border-black"
              src={dashboard}
              alt="Project image"
            />
          </div>
        </div>
        {/* project no 3 */}
        <div className="flex flex-col md:flex-row   justify-between items-center gap-5 mb-36">
          <div>
            <img
              className="w-[100rem] rounded-3xl border-2 border-black"
              src={fiscord}
              alt="Project image"
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <h1 className="font-bold text-xl">Fiscord | Chat Application</h1>
            <p className="mb-5 text-lg">
              This real-time chat application offers seamless messaging with
              secure user authentication using JWT tokens. It features instant
              communication powered by Socket.io and a responsive interface
              designed for smooth user interactions across devices.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-5">
              <p className="flex gap-4 text-base font-bold items-center">
                Mongodb <SiMongodb className="text-lg" />
              </p>
              <p className="flex gap-4 text-base font-bold items-center">
                Express <SiExpress className="text-lg" />
              </p>
              <p className="flex gap-4 text-base font-bold items-center">
                React <FaReact className="text-lg" />
              </p>
              <p className="flex gap-4 text-base font-bold items-center">
                Node <FaNode className="text-lg" />
              </p>
              <p className="flex gap-4 text-base font-bold items-center">
                Tailwind <RiTailwindCssFill className="text-lg" />
              </p>
            </div>
            <div className="flex gap-5">
              <Link to="https://github.com/khanalgaurav/Chat">
                <div className="flex gap-1 font-bold items-center border border-black px-2 py-1 rounded-lg">
                  <FaGithub />
                  Source Code
                </div>
              </Link>
              <Link to="#">
                <div className="flex gap-1 font-bold items-center border border-black px-2 py-1 rounded-lg">
                  Live Demo
                  <FiExternalLink />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
