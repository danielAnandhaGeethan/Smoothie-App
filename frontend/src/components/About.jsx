import React from "react";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div
      className="mt-2 h-screen"
      style={{
        backgroundImage: `url(${about})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-60 h-full flex justify-center items-center">
        <h1 className="text-5xl text-center italic text-white z-1">
          Blend your way to bliss with Smoothie Bliss – where ingredients meet
          innovation, and your taste buds embark on a journey of pure delight!
        </h1>
      </div>
    </div>
  );
};

export default About;
