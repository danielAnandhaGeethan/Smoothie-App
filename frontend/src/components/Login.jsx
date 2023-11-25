import React, { useState } from "react";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SecondNavbar from "./SecondNavbar";

const Login = ({
  setIsLoggedIn,
  setGlobalMbn,
  setGlobalUsername,
  setGlobalPass,
}) => {
  const navigate = useNavigate();

  const [mbn, setMbn] = useState("");
  const [password, setPassword] = useState("");

  const logIn = async (e) => {
    e.preventDefault();

    if (mbn === "" || password === "") {
      enqueueSnackbar("Incomplete Data", {
        variant: "error",
        autoHideDuration: 4000,
      });
      return;
    }

    const data = [mbn, password];

    axios
      .get(`http://localhost:5555/users/${data}`)
      .then((res) => {
        enqueueSnackbar("Logged In successfully", {
          variant: "success",
          autoHideDuration: 3000,
        });

        setGlobalMbn(mbn);
        setGlobalUsername(res.data[0].username);
        setMbn("");
        setPassword("");
        setIsLoggedIn(true);
        setGlobalPass(password);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((err) => {
        enqueueSnackbar("Incorrect Credentials", {
          variant: "error",
          autoHideDuration: 3000,
        });
      });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-b from-[#f9f8eb] via-[#ffe1b6] to-[#7a9eb1] via-[#415865]">
      <SnackbarProvider
        classes={{ variantSuccess: "bg-transparent border border-white" }}
      />
      <SecondNavbar />
      <div className="border px-[60px] py-[40px] rounded-xl shadow-lg flex flex-col gap-[60px] bg-white bg-opacity-20 mt-[40px]">
        <div className="flex flex-wrap w-64">
          <h1 className="text-3xl text-center font-bold">
            Sip in, log in, cheers to a flavorful journey!
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
                type="password"
                value={password}
                placeholder="Enter Password . . ."
                className="border px-3 py-2 rounded-full shadow-lg text-md outline-none w-64"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              className="bg-green-600 rounded-full px-3 py-2 text-lg w-36"
              onClick={logIn}
            >
              Log In
            </button>
            <Link to="/signup">
              <h2 className="cursor-pointer mt-1">Not an user? Sign Up</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
