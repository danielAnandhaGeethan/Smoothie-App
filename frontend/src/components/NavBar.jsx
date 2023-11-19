import React from "react";
import smoothie from "../assets/smoothie.png";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  return (
    <div className="shadow-lg w-full fixed z-10 bg-white top-0">
      <div className="p-4 flex justify-between items-center">
        <div className="flex gap-8">
          <div>
            <RouterLink to="/login">
              <span className="text-lg cursor-pointer">Login</span>
            </RouterLink>
          </div>
          <div>
            <RouterLink to="/favs">
              <span className="text-lg cursor-pointer">Favs</span>
            </RouterLink>
          </div>
        </div>
        <div className="flex gap-1">
          <img src={smoothie} alt="logo" className="h-8 w-7" />
          <span className="text-2xl">SmoothieSphere</span>
        </div>
        <div className="flex justify-between items-center gap-8">
          <div className="text-lg">
            <ScrollLink to="learn" smooth={true} duration={500}>
              <span className="cursor-pointer">Learn</span>
            </ScrollLink>
          </div>
          <div className="text-lg">
            <ScrollLink to="find" smooth={true} duration={500}>
              <span className="cursor-pointer">Find</span>
            </ScrollLink>
          </div>
          <div className="text-lg">
            <ScrollLink to="post" smooth={true} duration={500}>
              <span className="cursor-pointer">Post</span>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
