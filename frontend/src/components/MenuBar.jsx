import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const MenuBar = ({ isMenuOpen, isLoggedIn }) => {
  return (
    <div className={`${isMenuOpen ? "" : "hidden"} z-10 absolute`}>
      <div className="flex flex-col mt-10 rounded-2xl">
        <div
          className={
            isLoggedIn
              ? "hidden"
              : "border-t border-l border-r px-6 border-black py-1 rounded-full bg-black bg-opacity-20"
          }
        >
          <RouterLink to="/login">
            <span className="text-xl cursor-pointer text-white">Login</span>
          </RouterLink>
        </div>
        <div className="border-t border-l border-r px-6 border-black py-1 rounded-full bg-black bg-opacity-20">
          <RouterLink to="/favs">
            <span className="text-xl cursor-pointer text-white">Favs</span>
          </RouterLink>
        </div>
        <div className="border-t border-l border-r px-6 border-black py-1 rounded-full bg-black bg-opacity-20">
          <ScrollLink to="find" smooth={true} duration={1000}>
            <span className="cursor-pointer text-xl text-white">Find</span>
          </ScrollLink>
        </div>
        <div className="border px-6 border-black rounded-full py-1 bg-black bg-opacity-20">
          <ScrollLink to="post" smooth={true} duration={1000}>
            <span className="cursor-pointer text-xl text-white">Post</span>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
