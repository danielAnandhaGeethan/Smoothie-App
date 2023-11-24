import React from "react";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${about})`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="h-full md:grid md:grid-cols-2 items-center">
        <div className="px-8 flex justify-start">
          <h1 className="text-5xl text-center italic text-white z-1 mt-[180px] lg:mt-0">
            Blend your way to bliss with Smoothie Bliss – where ingredients meet
            innovation, and your taste buds embark on a journey of pure delight!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
