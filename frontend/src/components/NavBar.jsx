import React, { useState } from "react";
import smoothie from "../assets/smoothie.png";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import down from "../assets/down.png";
import up from "../assets/up.png";
import MenuBar from "./MenuBar";

const NavBar = ({
  isLoggedIn,
  globalUsername,
  setGlobalUsername,
  setGlobalMbn,
  setIsLoggedIn,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();

    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow-lg w-full fixed z-10 bg-white top-0">
      <div className="p-4 grid grid-cols-1 md:grid-cols-5 items-center">
        <div className="gap-8 hidden md:flex">
          <div>
            <RouterLink to="/login">
              {isLoggedIn ? (
                <span className="text-lg cursor-pointer bg-black p-2 rounded-full text-white">
                  {globalUsername}
                </span>
              ) : (
                <span className="text-lg cursor-pointer">Login</span>
              )}
            </RouterLink>
          </div>
          <div>
            <RouterLink to="/favs">
              <span className="text-lg cursor-pointer">Favs</span>
            </RouterLink>
          </div>
        </div>
        <div className="hidden md:block"></div>
        <div className="grid grid-cols-3">
          <div className="md:opacity-0">
            {isLoggedIn ? (
              <span className="text-lg cursor-pointer bg-black p-2 rounded-full text-white">
                {globalUsername}
              </span>
            ) : (
              ""
            )}
          </div>
          <RouterLink to="/">
            <div className="flex gap-1 justify-center md:ml-[19px]">
              <img src={smoothie} alt="logo" className="h-8 w-7" />
              <h1 className="text-2xl">SmoothieSphere</h1>
            </div>
          </RouterLink>
          <div
            className="md:hidden flex flex-col items-end cursor-pointer"
            onClick={openMenu}
          >
            <img src={isMenuOpen ? up : down} alt="menu" className="h-8 w-7" />
            <MenuBar isMenuOpen={isMenuOpen} isLoggedIn={isLoggedIn} />
          </div>
        </div>
        <div className="hidden md:block"></div>
        <div className="md:flex gap-8 justify-end hidden">
          <div className="text-lg">
            <ScrollLink to="learn" smooth={true} duration={1000}>
              <span className="cursor-pointer">Learn</span>
            </ScrollLink>
          </div>
          <div className="text-lg">
            <ScrollLink to="find" smooth={true} duration={1000}>
              <span className="cursor-pointer">Find</span>
            </ScrollLink>
          </div>
          <div className="text-lg">
            <ScrollLink to="post" smooth={true} duration={1000}>
              <span className="cursor-pointer">Post</span>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
