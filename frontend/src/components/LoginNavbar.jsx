import React from "react";
import smoothie from "../assets/smoothie.png";
import { Link } from "react-router-dom";

const LoginNavbar = () => {
  return (
    <div className="w-full fixed top-0 bg-white">
      <div className="flex p-4 justify-center">
        <Link to="/">
          <div className="flex gap-1 cursor-pointer">
            <img src={smoothie} alt="logo" className="h-8 w-7" />
            <span className="text-2xl">SmoothieSphere</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LoginNavbar;
