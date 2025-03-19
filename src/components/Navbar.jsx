import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between font-bold text-xl py-5">
      <h1>Gaurav</h1>
      <ul className="flex gap-10">
        <li>Home</li>
        <li>Portfolio</li>
        <li>About Me</li>
      </ul>
    </div>
  );
};

export default Navbar;
