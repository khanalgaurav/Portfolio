import React, { useState } from "react";
import { BiCross, BiMenu } from "react-icons/bi";
import { FaCross } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center font-bold text-xl py-5 px-2 md:px-0">
        <h1 className="text-3xl md:text-2xl">Gaurav</h1>
        <BiMenu
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className={`text-5xl md:hidden`}
        />
        <ul className="hidden md:flex gap-10">
          <li>Home</li>
          <li>Portfolio</li>
          <li>About Me</li>
        </ul>
      </div>
      <div
        className={`${
          showMenu ? "block" : "hidden"
        } md:hidden fixed top-0 right-0 flex flex-col h-full w-1/2 bg-black text-white gap-10 z-20`}
      >
        <div className="flex justify-between p-2">
          <p>Omayera</p>
          <p
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="border border-red-400 h-8 rounded-full w-8 flex justify-center items-center bg-red-500"
          >
            X
          </p>
        </div>
        <ul className="flex flex-col gap-5 text-center">
          <li className="border-b-2">Home</li>
          <li className="border-b-2">Portfolio</li>
          <li className="border-b-2">About Me</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
