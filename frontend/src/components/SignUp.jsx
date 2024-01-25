import React, { useState } from "react";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SecondNavbar from "./SecondNavbar";

const SignUp = ({
  setIsLoggedIn,
  setGlobalMbn,
  setGlobalUsername,
  setGlobalPass,
}) => {
  const navigate = useNavigate();

  const [mbn, setMbn] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const signup = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      enqueueSnackbar("Re-entered password doesn't match", {
        variant: "error",
        autoHideDuration: 4000,
      });
      return;
    }

    if (mbn === "" || username === "" || password === "" || rePassword === "") {
      enqueueSnackbar("Incomplete Data", {
        variant: "error",
        autoHideDuration: 4000,
      });
      return;
    }

    const user = {
      mbn,
      username,
      password,
    };

    axios
      .post("http://localhost:5555/users", user)
      .then((res) => {
        enqueueSnackbar("User Added", {
          variant: "success",
          autoHideDuration: 4000,
        });

        setGlobalMbn(mbn);
        setGlobalUsername(username);
        setMbn("");
        setUsername("");
        setPassword("");
        setRePassword("");
        setIsLoggedIn(true);
        setGlobalPass(password);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          if (err.response.data.message === "User Already Exists") {
            enqueueSnackbar(err.response.data.message, {
              variant: "error",
              autoHideDuration: 3000,
            });
          }
        }
      });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-b from-[#f9f8eb] via-[#ffe1b6] to-[#7a9eb1] via-[#415865]">
      <SnackbarProvider />
      <SecondNavbar />
      <div className="border px-[60px] py-[10px] rounded-xl shadow-lg flex flex-col gap-[60px] bg-white bg-opacity-20 mt-[50px]">
        <div className="flex flex-wrap w-64">
          <h1 className="text-3xl text-center font-bold">
            Sip up, sign up, cheers to a flavorful journey!
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col gap-5">
            <div>
              <input
                type="text"
                value={mbn}
                placeholder="Enter Mobile Number . . ."
                className="border px-3 py-2 rounded-full shadow-lg text-md outline-none w-64"
                onChange={(e) => setMbn(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                value={username}
                placeholder="Enter your name . . ."
                className="border px-3 py-2 rounded-full shadow-lg text-md outline-none w-64"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                placeholder="Enter Password . . ."
                className="border px-3 py-2 rounded-full shadow-lg text-md outline-none w-64"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                value={rePassword}
                placeholder="Re-Enter Password . . ."
                className="border px-3 py-2 rounded-full shadow-lg text-md outline-none w-64"
                onChange={(e) => setRePassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              className="bg-green-600 rounded-full px-3 py-2 text-lg w-36"
              onClick={signup}
            >
              Sign Up
            </button>
            <Link to="/login">
              <h2 className="cursor-pointer mt-1">Already a user? Log In</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
