import React from "react";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 pt-48 px-32 gap-10">
        <div className="flex justify-center">
          <h1 className="w-[70%] text-5xl text-center italic z-1 mt-[180px] lg:mt-0 py-20">
            Blend your way to bliss with Smoothie Bliss –{" "}
            <span className="text-4xl text-gray-400">
              where ingredients meet innovation, and your taste buds embark on a
              journey of pure delight!
            </span>
          </h1>
        </div>
        <div className="flex justify-center">
          <img
            src={about}
            alt="smoothie"
            className="h-[550px] w-[450px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

/*
<div
      className="h-[650px] w-[89%] mx-auto mt-[66px]"
      style={{
        backgroundImage: `url(${about})`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="h-full w-[100%] md:grid md:grid-cols-2 items-center bg-black bg-opacity-30">
        <div className="px-8 flex justify-start">
          <h1 className="text-5xl text-center text-white italic z-1 mt-[180px] lg:mt-0">
            Blend your way to bliss with Smoothie Bliss – where ingredients meet
            innovation, and your taste buds embark on a journey of pure delight!
          </h1>
        </div>
      </div>
    </div>
*/
