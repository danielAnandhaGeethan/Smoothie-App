import React from "react";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div>
      <div className="pt-[85px] md:px-32 px-10 gap-24 md:gap-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-32">
          <h1 className="w-[70%] sm:text-5xl md:text-4xl lg:text-5xl text-center italic z-1 pt-20 md:py-10 lg:pt-20">
            Blend your way to bliss with Smoothie Bliss –{" "}
            <span className="sm:text-4xl md:text-3xl lg:text-4xl text-gray-400">
              where ingredients meet innovation, and your taste buds embark on a
              journey of pure delight!
            </span>
          </h1>
          <img
            src={about}
            alt="smoothie"
            className="md:h-[350px] lg:h-[420px] md:w-[450px] h-[450px] w-[280px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
