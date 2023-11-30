import React, { useState } from "react";
import smoothie from "../assets/smoothie.png";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import down from "../assets/down.png";
import up from "../assets/up.png";
import MenuBar from "./MenuBar";
import { enqueueSnackbar, SnackbarProvider } from "notistack";

const NavBar = ({
  isLoggedIn,
  globalUsername,
  setGlobalUsername,
  setGlobalMbn,
  setIsLoggedIn,
  setGlobalPass,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNameClicked, setIsNameClicked] = useState(false);

  const logout = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setGlobalMbn("");
    setGlobalUsername("");
    setIsNameClicked(false);
    setGlobalPass("");
  };

  return (
    <div className="shadow-lg w-full fixed z-10 bg-white bg-opacity-10 top-0">
      <SnackbarProvider />
      <div className="p-4 grid grid-cols-1 md:grid-cols-5 items-center">
        <div className="gap-8 hidden md:flex">
          <div>
            {isLoggedIn ? (
              <span
                className="text-xl cursor-pointer bg-black p-2 rounded-full text-white"
                onClick={() => setIsNameClicked(!isNameClicked)}
              >
                {globalUsername}
              </span>
            ) : (
              <RouterLink to="/login">
                <span className="text-xl cursor-pointer">Login</span>
              </RouterLink>
            )}
            <div
              className={
                isNameClicked
                  ? "z-10 absolute mt-2 border-black bg-black bg-opacity-20 -ml-1 py-1 px-3 border rounded-full cursor-pointer"
                  : "hidden"
              }
              onClick={logout}
            >
              <h1 className="text-white text-xl">Logout</h1>
            </div>
          </div>
          <div>
            {isLoggedIn ? (
              <RouterLink to="/favs">
                <span className="text-xl cursor-pointer">Favs</span>
              </RouterLink>
            ) : (
              <div
                onClick={() =>
                  enqueueSnackbar("Login to access favourites.", {
                    variant: "error",
                    autoHideDuration: 3000,
                  })
                }
              >
                <span className="text-xl cursor-pointer">Favs</span>
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:block"></div>
        <div className="grid grid-cols-3">
          <div className="md:opacity-0">
            {isLoggedIn ? (
              <span
                className="text-lg cursor-pointer bg-black p-2 rounded-full text-white"
                onClick={() => setIsNameClicked(!isNameClicked)}
              >
                {globalUsername}
              </span>
            ) : (
              ""
            )}
            <div
              className={
                isNameClicked
                  ? "z-10 absolute mt-2 border-black bg-black bg-opacity-20 -ml-1 py-1 px-3 border rounded-full cursor-pointer"
                  : "hidden"
              }
              onClick={logout}
            >
              <h1 className="text-white text-xl">Logout</h1>
            </div>
          </div>
          <RouterLink to="/">
            <div className="flex gap-1 justify-center ml-[19px]">
              <img src={smoothie} alt="logo" className="h-8 w-7" />
              <h1 className="text-2xl">SmoothieSphere</h1>
            </div>
          </RouterLink>
          <div
            className="md:hidden flex flex-col items-end cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src={isMenuOpen ? up : down} alt="menu" className="h-8 w-7" />
            <MenuBar isMenuOpen={isMenuOpen} isLoggedIn={isLoggedIn} />
          </div>
        </div>
        <div className="hidden md:block"></div>
        <div className="md:flex gap-8 justify-end hidden">
          <div className="text-xl">
            <ScrollLink to="learn" smooth={true} duration={1000}>
              <span className="cursor-pointer">Learn</span>
            </ScrollLink>
          </div>
          <div className="text-xl">
            <ScrollLink to="find" smooth={true} duration={1000}>
              <span className="cursor-pointer">Find</span>
            </ScrollLink>
          </div>
          <div className="text-xl">
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
