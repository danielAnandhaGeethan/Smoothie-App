import React, { useState } from "react";
import { Routes, Route } from "react-router-dom/dist";
import Login from "./components/Login";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import SignUp from "./components/SignUp";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [globalMbn, setGlobalMbn] = useState("");
  const [globalUsername, setGlobalUsername] = useState("");
  const [globalPass, setGlobalPass] = useState("");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            isLoggedIn={isLoggedIn}
            globalMbn={globalMbn}
            globalUsername={globalUsername}
            setGlobalUsername={setGlobalUsername}
            setGlobalMbn={setGlobalMbn}
            setIsLoggedIn={setIsLoggedIn}
            globalPass={globalPass}
            setGlobalPass={setGlobalPass}
          />
        }
      />
      <Route
        path="/login"
        element={
          <Login
            setIsLoggedIn={setIsLoggedIn}
            setGlobalMbn={setGlobalMbn}
            setGlobalUsername={setGlobalUsername}
            setGlobalPass={setGlobalPass}
          />
        }
      />
      <Route
        path="/signup"
        element={
          <SignUp
            setIsLoggedIn={setIsLoggedIn}
            setGlobalMbn={setGlobalMbn}
            setGlobalUsername={setGlobalUsername}
            setGlobalPass={setGlobalPass}
          />
        }
      />
      <Route
        path="/favs"
        element={
          <Favourites
            globalMbn={globalMbn}
            isLoggedIn={isLoggedIn}
            globalPass={globalPass}
          />
        }
      />
    </Routes>
  );
};

export default App;
