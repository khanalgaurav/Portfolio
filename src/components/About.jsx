import React from "react";
import image from "../assets/Images/frontenddeveloper.jpg";
const About = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-40 mt-10 text-center md:text-left">
      <div className="flex flex-col md:flex-row md:w-3/4 justify-center items-center gap-8 px-5">
        <div className="md:w-1/2">
          <img className="rounded-4xl" src={image} alt="About me image" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-blue-500 font-bold text-xl">About Me</h1>
          <h1 className="font-bold text-2xl mb-5">
            Passionate Frontend Developer From Nepal
          </h1>
          <p className="md:text-justify">
            Hi, I'm Gaurav Khanal, a passionate frontend React developer with a
            strong foundation in JavaScript, TypeScript, and modern web
            technologies. I love building responsive, user-friendly, and dynamic
            web applications that deliver seamless user experiences. With
            experience in React, Next.js and Tailwind CSS, I focus on writing
            clean, maintainable, and efficient code. I'm always eager to learn
            new technologies, improve performance, and enhance UI/UX through
            interactive and visually appealing designs. I’m actively expanding
            my knowledge in frontend development best practices, design systems,
            and performance optimization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
