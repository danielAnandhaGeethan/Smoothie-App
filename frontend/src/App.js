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
          />
        }
      />
      <Route path="/favs" element={<Favourites />} />
    </Routes>
  );
};

export default App;
