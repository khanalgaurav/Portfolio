import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
const Contact = () => {
  return (
    <div className="mx-40 mb-32">
      <div>
        <h1 className="text-xl text-blue-500 font-bold">Contact</h1>
        <h1 className="text-2xl font-bold mb-5">Get In Touch With Me</h1>
      </div>
      <div className="flex gap-20">
        <div className="flex items-center gap-5">
          <FaMapLocationDot className="text-5xl text-blue-500" />
          <div>
            <p className="text-xl font-bold">Location</p>
            <p className="text-xl">Kathmandu, Nepal</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <MdEmail className="text-5xl text-blue-500" />
          <div>
            <p className="text-xl font-bold">Email</p>
            <p className="text-xl">khanalgaurav0@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <MdPhone className="text-5xl text-blue-500" />
          <div>
            <p className="text-xl font-bold">Phone Number</p>
            <p className="text-xl">+977 9869666311</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
