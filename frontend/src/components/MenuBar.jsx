import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const MenuBar = ({ isMenuOpen, isLoggedIn }) => {
  return (
    <div className={`${isMenuOpen ? "" : "hidden"} z-10 absolute`}>
      <div className="flex flex-col mt-10 bg-white">
        <div
          className={
            isLoggedIn
              ? "hidden"
              : "border-t border-l border-r px-6 border-gray-400 py-1"
          }
        >
          <RouterLink to="/login">
            <span className="text-xl cursor-pointer">Login</span>
          </RouterLink>
        </div>
        <div className="border-t border-l border-r px-6 border-gray-400 py-1">
          <RouterLink to="/favs">
            <span className="text-xl cursor-pointer">Favs</span>
          </RouterLink>
        </div>
        <div className="border-t border-l border-r px-6 border-gray-400 py-1">
          <ScrollLink to="find" smooth={true} duration={1000}>
            <span className="cursor-pointer text-xl">Find</span>
          </ScrollLink>
        </div>
        <div className="border px-6 border-gray-400 py-1">
          <ScrollLink to="post" smooth={true} duration={1000}>
            <span className="cursor-pointer text-xl">Post</span>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
